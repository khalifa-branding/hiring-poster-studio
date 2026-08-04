import docx
from docx.shared import Pt, RGBColor, Mm, Emu
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml import parse_xml
from docx.oxml.ns import nsdecls
import os

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
    
    # 1. Page Setup (Exact A4 Dimensions)
    section = doc.sections[0]
    section.page_width = Mm(210)
    section.page_height = Mm(297)
    section.top_margin = Mm(28)      # Clears header text
    section.bottom_margin = Mm(25)
    section.left_margin = Mm(10)
    section.right_margin = Mm(10)
    section.header_distance = Mm(0)  # Flush top accent bar
    
    header = section.header
    
    # 2. Flush Dark Teal Top Accent Bar
    p_top = header.paragraphs[0]
    p_top.paragraph_format.space_before = Pt(0)
    p_top.paragraph_format.space_after = Pt(10)
    p_top_border = parse_xml(
        f'<w:pBdr {nsdecls("w")}>'
        f'  <w:top w:val="single" w:sz="36" w:space="0" w:color="053B3F"/>'
        f'</w:pBdr>'
    )
    p_top._p.get_or_add_pPr().append(p_top_border)

    # 3. 3-Column Header Table
    table = header.add_table(rows=1, cols=3, width=Mm(190))
    table.alignment = WD_TABLE_ALIGNMENT.CENTER
    table.autofit = False
    
    col_widths = [Mm(65), Mm(65), Mm(60)]
    for i, col in enumerate(table.columns):
        col.width = col_widths[i]
        for cell in col.cells:
            cell.width = col_widths[i]

    # Explicitly Remove All Table Inner Gridlines & Borders
    tblPr = table._tbl.tblPr
    tblBorders = parse_xml(
        f'<w:tblBorders {nsdecls("w")}>'
        f'  <w:top w:val="none"/>'
        f'  <w:left w:val="none"/>'
        f'  <w:bottom w:val="none"/>'
        f'  <w:right w:val="none"/>'
        f'  <w:insideH w:val="none"/>'
        f'  <w:insideV w:val="none"/>'
        f'</w:tblBorders>'
    )
    tblPr.append(tblBorders)

    for cell in table.rows[0].cells:
        tcPr = cell._tc.get_or_add_tcPr()
        tcBorders = parse_xml(r'<w:tcBorders %s><w:top w:val="none"/><w:left w:val="none"/><w:bottom w:val="none"/><w:right w:val="none"/></w:tcBorders>' % nsdecls('w'))
        tcPr.append(tcBorders)

    # Cell 0: Logo (Height = 60px @ 96 DPI)
    cell_logo = table.cell(0, 0)
    p_logo = cell_logo.paragraphs[0]
    logo_path = 'brand_assets/10-years-trescon-logo.png'
    if os.path.exists(logo_path):
        p_logo.add_run().add_picture(logo_path, height=Emu(571500))
    else:
        run_txt = p_logo.add_run("TRESCON GLOBAL")
        run_txt.font.name = 'Anek Devanagari'
        run_txt.font.size = Pt(14)
        run_txt.font.bold = True
        run_txt.font.color.rgb = RGBColor(0, 165, 163)

    # Cell 1: Tagline
    cell_tag = table.cell(0, 1)
    tcPr_tag = cell_tag._tc.get_or_add_tcPr()
    tcBorders_tag = parse_xml(r'<w:tcBorders %s><w:top w:val="none"/><w:left w:val="single" w:sz="8" w:space="0" w:color="00A5A3"/><w:bottom w:val="none"/><w:right w:val="none"/></w:tcBorders>' % nsdecls('w'))
    tcPr_tag.append(tcBorders_tag)

    p_tag = cell_tag.paragraphs[0]
    p_tag.paragraph_format.space_before = Pt(4)
    run_tag = p_tag.add_run("  Connecting Businesses\n  with Opportunities")
    run_tag.font.name = 'Manrope'
    run_tag.font.size = Pt(9.5)
    run_tag.font.bold = True
    run_tag.font.color.rgb = RGBColor(0x0F, 0x4C, 0x5C)

    # Cell 2: Contact Meta
    cell_meta = table.cell(0, 2)
    p_meta = cell_meta.paragraphs[0]
    p_meta.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    
    # Email
    r_eicon = p_meta.add_run("✉ ")
    r_eicon.font.name = 'Segoe UI Symbol'
    r_eicon.font.size = Pt(9.5)
    r_eicon.font.color.rgb = RGBColor(0x00, 0xA8, 0x96)
    
    r_email = p_meta.add_run("info@tresconglobal.com\n")
    r_email.font.name = 'Manrope'
    r_email.font.size = Pt(9)
    r_email.font.bold = True
    r_email.font.color.rgb = RGBColor(0x33, 0x41, 0x55)

    # Website
    r_wicon = p_meta.add_run("🌐 ")
    r_wicon.font.name = 'Segoe UI Symbol'
    r_wicon.font.size = Pt(9.5)
    r_wicon.font.color.rgb = RGBColor(0x00, 0xA8, 0x96)
    
    r_web = p_meta.add_run("tresconglobal.com")
    r_web.font.name = 'Manrope'
    r_web.font.size = Pt(9)
    r_web.font.bold = True
    r_web.font.color.rgb = RGBColor(0x00, 0xA8, 0x96)

    # 4. Lime Accent Rule Under Header
    p_bottom = header.add_paragraph()
    p_bottom.paragraph_format.space_before = Pt(6)
    p_bottom_border = parse_xml(
        f'<w:pBdr {nsdecls("w")}>'
        f'  <w:bottom w:val="single" w:sz="18" w:space="1" w:color="8DC63F"/>'
        f'</w:pBdr>'
    )
    p_bottom._p.get_or_add_pPr().append(p_bottom_border)

    # 5. Footer Configuration
    footer = section.footer
    p_ftr_rule = footer.add_paragraph()
    p_ftr_rule_border = parse_xml(
        f'<w:pBdr {nsdecls("w")}>'
        f'  <w:top w:val="single" w:sz="12" w:space="1" w:color="00A896"/>'
        f'</w:pBdr>'
    )
    p_ftr_rule._p.get_or_add_pPr().append(p_ftr_rule_border)

    p_entity = footer.add_paragraph()
    r_ent = p_entity.add_run(data["entity"])
    r_ent.font.name = 'Anek Devanagari'
    r_ent.font.size = Pt(10)
    r_ent.font.bold = True
    r_ent.font.color.rgb = RGBColor(0x0F, 0x4C, 0x5C)

    p_addr = footer.add_paragraph()
    r_addr = p_addr.add_run(f"{data['address']}\n[{data['cin']}]")
    r_addr.font.name = 'Manrope'
    r_addr.font.size = Pt(8.5)
    r_addr.font.color.rgb = RGBColor(0x47, 0x55, 0x69)

    p_disc = footer.add_paragraph()
    p_disc.paragraph_format.space_before = Pt(4)
    r_disc = p_disc.add_run(
        "Disclaimer: The information shared by Trescon is confidential and intended solely for the recipient. "
        "It may not be copied, distributed, or relied upon without prior written consent. "
        "Trescon makes no warranties regarding accuracy or completeness. © 2026 Trescon. All rights reserved."
    )
    r_disc.font.name = 'Manrope'
    r_disc.font.size = Pt(7.5)
    r_disc.font.color.rgb = RGBColor(0x64, 0x74, 0x8B)

    # Save to templates directory & root
    os.makedirs("templates", exist_ok=True)
    filename = f"templates/Trescon_Letterhead_{office_name}_Blank.docx"
    doc.save(filename)
    root_filename = f"Trescon_Letterhead_{office_name}_Blank.docx"
    doc.save(root_filename)
    print(f"Generated: {filename} and {root_filename}")

if __name__ == "__main__":
    for name, office_data in OFFICES.items():
        generate_template(name, office_data)
    
    generate_template("Bangalore", OFFICES["Bangalore"])
    doc_master = docx.Document("templates/Trescon_Letterhead_Bangalore_Blank.docx")
    doc_master.save("Trescon_Global_Letterhead_Template.docx")
