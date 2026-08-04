import os
import docx
from docx.shared import Pt, RGBColor, Mm, Emu
from docx.enum.text import WD_ALIGN_PARAGRAPH
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
    
    # Page Setup
    section = doc.sections[0]
    section.page_width = Mm(210)
    section.page_height = Mm(297)
    section.top_margin = Mm(25)
    section.bottom_margin = Mm(25)
    section.left_margin = Mm(15)
    section.right_margin = Mm(15)
    section.header_distance = Mm(0)
    
    header = section.header
    
    # Clear default header
    for paragraph in header.paragraphs:
        paragraph.text = ""
    
    # === DARK TEAL TOP BORDER BAR ===
    top_bar = header.add_paragraph()
    top_bar.paragraph_format.space_before = Pt(0)
    top_bar.paragraph_format.space_after = Pt(0)
    
    bar_border = parse_xml(
        f'<w:pBdr {nsdecls("w")}>'
        f'  <w:top w:val="single" w:sz="24" w:space="0" w:color="053B3F"/>'
        f'</w:pBdr>'
    )
    top_bar._p.get_or_add_pPr().append(bar_border)
    top_bar.add_run().text = ""

    # === SPACER ===
    spacer = header.add_paragraph()
    spacer.paragraph_format.space_before = Pt(10)
    spacer.paragraph_format.space_after = Pt(0)

    # === "trescon" Logo / Header Image ===
    p_company = header.add_paragraph()
    p_company.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_company.paragraph_format.space_before = Pt(0)
    p_company.paragraph_format.space_after = Pt(0)
    
    logo_path = 'brand_assets/10-years-trescon-logo.png'
    if os.path.exists(logo_path):
        p_company.add_run().add_picture(logo_path, height=Emu(571500))
    else:
        run_company = p_company.add_run("trescon")
        run_company.font.name = 'Calibri'
        run_company.font.size = Pt(28)
        run_company.font.bold = True
        run_company.font.color.rgb = RGBColor(0x05, 0x3B, 0x3F)

    # === "Connecting Businesses with Opportunities" ===
    p_tagline = header.add_paragraph()
    p_tagline.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_tagline.paragraph_format.space_before = Pt(2)
    p_tagline.paragraph_format.space_after = Pt(0)
    
    run_tagline = p_tagline.add_run("Connecting Businesses with Opportunities")
    run_tagline.font.name = 'Calibri'
    run_tagline.font.size = Pt(12)
    run_tagline.font.bold = True
    run_tagline.font.italic = True
    run_tagline.font.color.rgb = RGBColor(0x05, 0x3B, 0x3F)

    # === SPACER ===
    spacer2 = header.add_paragraph()
    spacer2.paragraph_format.space_before = Pt(4)
    spacer2.paragraph_format.space_after = Pt(0)

    # === Contact Info - Right Aligned ===
    p_contact = header.add_paragraph()
    p_contact.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    p_contact.paragraph_format.space_before = Pt(0)
    p_contact.paragraph_format.space_after = Pt(0)
    
    # Email with bullet
    run_email = p_contact.add_run("•  info@tresconglobal.com\n")
    run_email.font.name = 'Calibri'
    run_email.font.size = Pt(10)
    run_email.font.color.rgb = RGBColor(0x05, 0x3B, 0x3F)
    
    # Website with bullet
    run_web = p_contact.add_run("•  tresconglobal.com")
    run_web.font.name = 'Calibri'
    run_web.font.size = Pt(10)
    run_web.font.color.rgb = RGBColor(0x05, 0x3B, 0x3F)

    # === LIME GREEN BOTTOM BORDER ===
    bottom_bar = header.add_paragraph()
    bottom_bar.paragraph_format.space_before = Pt(8)
    bottom_bar.paragraph_format.space_after = Pt(0)
    
    green_border = parse_xml(
        f'<w:pBdr {nsdecls("w")}>'
        f'  <w:bottom w:val="single" w:sz="18" w:space="0" w:color="8DC63F"/>'
        f'</w:pBdr>'
    )
    bottom_bar._p.get_or_add_pPr().append(green_border)
    bottom_bar.add_run().text = ""

    # === FOOTER ===
    footer = section.footer
    
    # Clear default footer
    for paragraph in footer.paragraphs:
        paragraph.text = ""
    
    # Teal top border
    footer_border = footer.add_paragraph()
    footer_border.paragraph_format.space_before = Pt(0)
    footer_border.paragraph_format.space_after = Pt(2)
    
    teal_border = parse_xml(
        f'<w:pBdr {nsdecls("w")}>'
        f'  <w:top w:val="single" w:sz="12" w:space="0" w:color="00A896"/>'
        f'</w:pBdr>'
    )
    footer_border._p.get_or_add_pPr().append(teal_border)
    footer_border.add_run().text = ""

    # Entity Name
    p_entity = footer.add_paragraph()
    p_entity.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_entity.paragraph_format.space_before = Pt(4)
    p_entity.paragraph_format.space_after = Pt(0)
    
    r_ent = p_entity.add_run(data["entity"])
    r_ent.font.name = 'Calibri'
    r_ent.font.size = Pt(10)
    r_ent.font.bold = True
    r_ent.font.color.rgb = RGBColor(0x0F, 0x4C, 0x5C)

    # Address
    p_addr = footer.add_paragraph()
    p_addr.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_addr.paragraph_format.space_before = Pt(0)
    p_addr.paragraph_format.space_after = Pt(0)
    
    r_addr = p_addr.add_run(data["address"])
    r_addr.font.name = 'Calibri'
    r_addr.font.size = Pt(8.5)
    r_addr.font.color.rgb = RGBColor(0x47, 0x55, 0x69)

    # CIN
    p_cin = footer.add_paragraph()
    p_cin.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_cin.paragraph_format.space_before = Pt(0)
    p_cin.paragraph_format.space_after = Pt(4)
    
    r_cin = p_cin.add_run(f"[{data['cin']}]")
    r_cin.font.name = 'Calibri'
    r_cin.font.size = Pt(8)
    r_cin.font.color.rgb = RGBColor(0x47, 0x55, 0x69)

    # Disclaimer
    p_disc = footer.add_paragraph()
    p_disc.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p_disc.paragraph_format.space_before = Pt(4)
    p_disc.paragraph_format.space_after = Pt(0)
    
    r_disc = p_disc.add_run(
        "Disclaimer: The information shared by Trescon is confidential and intended solely for the recipient. "
        "It may not be copied, distributed, or relied upon without prior written consent. "
        "Trescon makes no warranties regarding accuracy or completeness. © 2026 Trescon. All rights reserved."
    )
    r_disc.font.name = 'Calibri'
    r_disc.font.size = Pt(7)
    r_disc.font.color.rgb = RGBColor(0x64, 0x74, 0x8B)

    # Save
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
