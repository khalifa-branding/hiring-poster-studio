import os
import docx
from docx.shared import Pt, RGBColor, Mm, Emu, Inches
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml import parse_xml
from docx.oxml.ns import nsdecls

OFFICES = {
    "Bangalore": {
        "entity": "Trescon Global Business Solutions Pvt Ltd.",
        "address": "1st floor, Prom'S Complex, 3h, 7th C Main Rd, 3rd Block Koramangala, Bengaluru, Karnataka – 560034",
        "cin": "CIN: U74900KA2016PTC086221"
    },
    "Manipal": {
        "entity": "Trescon Global Business Solutions Pvt Ltd.",
        "address": "2nd Floor, Syndicate House, Upendra Nagar, Manipal, Karnataka – 576104",
        "cin": "CIN: U74900KA2016PTC086221"
    },
    "Mangalore": {
        "entity": "Trescon Global Business Solutions Pvt Ltd.",
        "address": "4th Floor, Inland Ornate, Navabharath Circle, Kodialbail, Mangaluru, Karnataka – 575003",
        "cin": "CIN: U74900KA2016PTC086221"
    },
    "Dubai": {
        "entity": "Trescon Enterprise FZ LLC",
        "address": "Office 1004, 10th Floor, Building 4, Dubai Design District (d3), Dubai, UAE",
        "cin": "License No: 96834"
    }
}

def generate_template(office_name, data):
    doc = docx.Document()
    
    # 1. Page Setup
    section = doc.sections[0]
    section.page_width = Mm(210)
    section.page_height = Mm(297)
    section.top_margin = Mm(28)      
    section.bottom_margin = Mm(25)
    section.left_margin = Mm(15)
    section.right_margin = Mm(15)
    section.header_distance = Mm(0)
    
    header = section.header
    
    # Clear default header
    if header.paragraphs:
        p_default = header.paragraphs[0]
        p_default.text = ""
        p_default.paragraph_format.space_before = Pt(0)
        p_default.paragraph_format.space_after = Pt(0)
        p_default.paragraph_format.line_spacing = Pt(1)

    # 2. Dark Teal Top Bar (Using Table for Zero-Gap)
    top_bar_table = header.add_table(rows=1, cols=1, width=Mm(210))
    top_bar_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    top_bar_table.autofit = False
    
    # Negative left indent to clear left margin (15mm = 850 dxa)
    tblPr_top = top_bar_table._tbl.tblPr
    tblInd_top = parse_xml(f'<w:tblInd {nsdecls("w")} w:w="-850" w:type="dxa"/>')
    tblPr_top.append(tblInd_top)
    
    # Set cell properties
    cell_bar = top_bar_table.cell(0, 0)
    cell_bar.width = Mm(210)
    
    # Dark teal background
    shading_elm = parse_xml(f'<w:shd {nsdecls("w")} w:fill="053B3F"/>')
    cell_bar._tc.get_or_add_tcPr().append(shading_elm)
    
    # Minimal content to force height
    p_bar = cell_bar.paragraphs[0]
    p_bar.paragraph_format.space_before = Pt(0)
    p_bar.paragraph_format.space_after = Pt(0)
    p_bar.paragraph_format.line_spacing = Pt(1)
    run_bar = p_bar.add_run()
    run_bar.text = " "
    run_bar.font.size = Pt(4)

    # Remove table borders
    tblBorders_bar = parse_xml(
        f'<w:tblBorders {nsdecls("w")}>'
        f'  <w:top w:val="none" w:sz="0"/>'
        f'  <w:left w:val="none" w:sz="0"/>'
        f'  <w:bottom w:val="none" w:sz="0"/>'
        f'  <w:right w:val="none" w:sz="0"/>'
        f'  <w:insideH w:val="none" w:sz="0"/>'
        f'  <w:insideV w:val="none" w:sz="0"/>'
        f'</w:tblBorders>'
    )
    tblPr_top.append(tblBorders_bar)

    # 3. Spacing Gap
    p_gap = header.add_paragraph()
    p_gap.paragraph_format.space_before = Pt(6)
    p_gap.paragraph_format.space_after = Pt(0)
    p_gap.paragraph_format.line_spacing = Pt(1)

    # 4. Main Header Table - 2 Columns (Logo on left, Contacts on right - NO TAGLINE TEXT)
    table = header.add_table(rows=1, cols=2, width=Mm(180))
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    table.autofit = False
    
    # Set column widths (Printable width 180mm: Logo 120mm, Contacts 60mm)
    col_widths = [Mm(120), Mm(60)]
    for i, col in enumerate(table.columns):
        col.width = col_widths[i]
        for cell in col.cells:
            cell.width = col_widths[i]
            cell.vertical_alignment = WD_ALIGN_PARAGRAPH.CENTER

    # Remove table borders
    tblPr = table._tbl.tblPr
    tblBorders = parse_xml(
        f'<w:tblBorders {nsdecls("w")}>'
        f'  <w:top w:val="none" w:sz="0"/>'
        f'  <w:left w:val="none" w:sz="0"/>'
        f'  <w:bottom w:val="none" w:sz="0"/>'
        f'  <w:right w:val="none" w:sz="0"/>'
        f'  <w:insideH w:val="none" w:sz="0"/>'
        f'  <w:insideV w:val="none" w:sz="0"/>'
        f'</w:tblBorders>'
    )
    tblPr.append(tblBorders)

    # Cell 0: Logo Image (Official OneDrive logo containing logo + tagline graphic)
    cell_logo = table.cell(0, 0)
    cell_logo.vertical_alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_logo = cell_logo.paragraphs[0]
    p_logo.alignment = WD_ALIGN_PARAGRAPH.LEFT
    p_logo.paragraph_format.space_before = Pt(0)
    p_logo.paragraph_format.space_after = Pt(0)
    logo_path = 'brand_assets/10-years-trescon-logo.png'
    if os.path.exists(logo_path):
        p_logo.add_run().add_picture(logo_path, height=Emu(571500))
    else:
        p_logo.add_run("TRESCON GLOBAL").font.size = Pt(14)

    # Cell 1: Contact Details Right-Aligned
    cell_meta = table.cell(0, 1)
    cell_meta.vertical_alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_meta = cell_meta.paragraphs[0]
    p_meta.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    p_meta.paragraph_format.space_before = Pt(0)
    p_meta.paragraph_format.space_after = Pt(0)
    
    # Email with icon
    r_email = p_meta.add_run("✉ info@tresconglobal.com\n")
    r_email.font.name = 'Segoe UI'
    r_email.font.size = Pt(9)
    r_email.font.color.rgb = RGBColor(0x0F, 0x4C, 0x5C)
    
    # Website with icon
    r_web = p_meta.add_run("🌐 tresconglobal.com")
    r_web.font.name = 'Segoe UI'
    r_web.font.size = Pt(9)
    r_web.font.color.rgb = RGBColor(0x0F, 0x4C, 0x5C)

    # 5. Lime Green Bottom Rule
    p_bottom = header.add_paragraph()
    p_bottom.paragraph_format.space_before = Pt(4)
    p_bottom.paragraph_format.space_after = Pt(0)
    p_bottom.paragraph_format.line_spacing = Pt(1)
    
    p_bottom_border = parse_xml(
        f'<w:pBdr {nsdecls("w")}>'
        f'  <w:bottom w:val="single" w:sz="18" w:space="0" w:color="8DC63F"/>'
        f'</w:pBdr>'
    )
    p_bottom._p.get_or_add_pPr().append(p_bottom_border)

    # 6. Footer Configuration
    footer = section.footer
    
    # Clear default footer
    if footer.paragraphs:
        footer.paragraphs[0].text = ""
    
    # Teal top border in footer
    p_ftr_rule = footer.add_paragraph()
    p_ftr_rule.paragraph_format.space_before = Pt(0)
    p_ftr_rule.paragraph_format.space_after = Pt(4)
    p_ftr_rule_border = parse_xml(
        f'<w:pBdr {nsdecls("w")}>'
        f'  <w:top w:val="single" w:sz="12" w:space="0" w:color="00A896"/>'
        f'</w:pBdr>'
    )
    p_ftr_rule._p.get_or_add_pPr().append(p_ftr_rule_border)

    # Entity name
    p_entity = footer.add_paragraph()
    p_entity.paragraph_format.space_before = Pt(4)
    p_entity.paragraph_format.space_after = Pt(2)
    r_ent = p_entity.add_run(data["entity"])
    r_ent.font.name = 'Manrope'
    r_ent.font.size = Pt(10)
    r_ent.font.bold = True
    r_ent.font.color.rgb = RGBColor(0x0F, 0x4C, 0x5C)

    # Address
    p_addr = footer.add_paragraph()
    p_addr.paragraph_format.space_before = Pt(0)
    p_addr.paragraph_format.space_after = Pt(2)
    r_addr = p_addr.add_run(f"{data['address']}")
    r_addr.font.name = 'Manrope'
    r_addr.font.size = Pt(8.5)
    r_addr.font.color.rgb = RGBColor(0x47, 0x55, 0x69)
    
    r_cin = p_addr.add_run(f"\n[{data['cin']}]")
    r_cin.font.name = 'Manrope'
    r_cin.font.size = Pt(8)
    r_cin.font.color.rgb = RGBColor(0x47, 0x55, 0x69)

    # Disclaimer
    p_disc = footer.add_paragraph()
    p_disc.paragraph_format.space_before = Pt(4)
    p_disc.paragraph_format.space_after = Pt(0)
    r_disc = p_disc.add_run(
        "Disclaimer: The information shared by Trescon is confidential and intended solely for the recipient. "
        "It may not be copied, distributed, or relied upon without prior written consent. "
        "Trescon makes no warranties regarding accuracy or completeness. © 2026 Trescon. All rights reserved."
    )
    r_disc.font.name = 'Manrope'
    r_disc.font.size = Pt(7)
    r_disc.font.color.rgb = RGBColor(0x64, 0x74, 0x8B)

    # Save the document
    os.makedirs("templates", exist_ok=True)
    filename = f"templates/Trescon_Letterhead_{office_name}_Blank.docx"
    doc.save(filename)
    root_filename = f"Trescon_Letterhead_{office_name}_Blank.docx"
    doc.save(root_filename)
    print(f"Generated: {filename} and {root_filename}")

if __name__ == "__main__":
    os.makedirs("templates", exist_ok=True)
    for name, office_data in OFFICES.items():
        generate_template(name, office_data)
    
    generate_template("Bangalore", OFFICES["Bangalore"])
    doc_master = docx.Document("templates/Trescon_Letterhead_Bangalore_Blank.docx")
    doc_master.save("Trescon_Global_Letterhead_Template.docx")
    print("All templates generated successfully!")
