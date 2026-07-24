import docx
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_ALIGN_VERTICAL, WD_TABLE_ALIGNMENT
from docx.oxml import parse_xml, OxmlElement
from docx.oxml.ns import nsdecls, qn
import os

def create_trescon_letterhead():
    doc = docx.Document()
    
    # 1. Page Setup - A4 Dimensions
    section = doc.sections[0]
    section.page_width = Inches(8.27)
    section.page_height = Inches(11.69)
    
    section.top_margin = Inches(0.5)
    section.bottom_margin = Inches(0.5)
    section.left_margin = Inches(0.5)
    section.right_margin = Inches(0.5)
    
    section.header_distance = Inches(0.3)
    section.footer_distance = Inches(0.3)
    
    # Color Palette Definitions
    COLOR_TEAL = RGBColor(0, 165, 163)       # #00A5A3
    COLOR_DARK = RGBColor(1, 55, 61)        # #01373D
    COLOR_BODY = RGBColor(30, 33, 36)       # #1E2124
    COLOR_MUTED = RGBColor(100, 110, 115)   # #646E73
    
    # -------------------------------------------------------------
    # 2. HEADER SETUP
    # -------------------------------------------------------------
    header = section.header
    header_table = header.add_table(rows=1, cols=2, width=Inches(7.27))
    header_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    
    # Remove borders from header table
    for cell in header_table.rows[0].cells:
        tcPr = cell._tc.get_or_add_tcPr()
        tcBorders = parse_xml(r'<w:tcBorders %s><w:top w:val="none"/><w:left w:val="none"/><w:bottom w:val="none"/><w:right w:val="none"/></w:tcBorders>' % nsdecls('w'))
        tcPr.append(tcBorders)
    
    # Left Cell: Logo + Stacked Tagline
    cell_left = header_table.cell(0, 0)
    cell_left.width = Inches(4.8)
    logo_path = 'brand_assets/10-years-trescon-logo.png'
    if os.path.exists(logo_path):
        p_logo = cell_left.paragraphs[0]
        p_logo.alignment = WD_ALIGN_PARAGRAPH.LEFT
        p_logo.paragraph_format.space_after = Pt(2)
        run_logo = p_logo.add_run()
        run_logo.add_picture(logo_path, width=Inches(2.45))
        
        p_tag = cell_left.add_paragraph()
        p_tag.alignment = WD_ALIGN_PARAGRAPH.LEFT
        p_tag.paragraph_format.space_before = Pt(2)
        p_tag.paragraph_format.space_after = Pt(0)
        run_tag = p_tag.add_run("Connecting Businesses\nwith Opportunities")
        run_tag.font.name = 'Arial'
        run_tag.font.size = Pt(8.5)
        run_tag.font.bold = False
        run_tag.font.color.rgb = COLOR_DARK
    
    # Right Cell: Header Contacts (Icons & Date)
    cell_right = header_table.cell(0, 1)
    cell_right.width = Inches(2.47)
    p_meta = cell_right.paragraphs[0]
    p_meta.alignment = WD_ALIGN_PARAGRAPH.RIGHT
    
    from datetime import datetime
    today_str = datetime.now().strftime("Date: %B %d, %Y")
    
    run_date_icon = p_meta.add_run("📅  ")
    run_date_icon.font.name = 'Arial'
    run_date_icon.font.size = Pt(8.5)
    run_date_icon.font.bold = True
    run_date_icon.font.color.rgb = COLOR_TEAL
    
    run_date = p_meta.add_run(today_str + "\n")
    run_date.font.name = 'Arial'
    run_date.font.size = Pt(8.0)
    run_date.font.bold = False
    run_date.font.color.rgb = COLOR_DARK
    
    run_email_icon = p_meta.add_run("✉  ")
    run_email_icon.font.name = 'Arial'
    run_email_icon.font.size = Pt(8.5)
    run_email_icon.font.bold = True
    run_email_icon.font.color.rgb = COLOR_TEAL
    
    run_email = p_meta.add_run("info@tresconglobal.com\n")
    run_email.font.name = 'Arial'
    run_email.font.size = Pt(8.0)
    run_email.font.bold = False
    run_email.font.color.rgb = COLOR_DARK
    
    run_web_icon = p_meta.add_run("🌐  ")
    run_web_icon.font.name = 'Arial'
    run_web_icon.font.size = Pt(8.5)
    run_web_icon.font.bold = True
    run_web_icon.font.color.rgb = COLOR_TEAL
    
    run_web = p_meta.add_run("tresconglobal.com")
    run_web.font.name = 'Arial'
    run_web.font.size = Pt(8.0)
    run_web.font.bold = False
    run_web.font.color.rgb = COLOR_DARK
    
    # Top rule accent line below header
    p_rule = header.add_paragraph()
    p_rule.paragraph_format.space_before = Pt(6)
    p_rule.paragraph_format.space_after = Pt(0)
    r_rule = p_rule.add_run()
    pBdr = parse_xml(r'<w:pBdr %s><w:bottom w:val="single" w:sz="16" w:space="1" w:color="00A5A3"/></w:pBdr>' % nsdecls('w'))
    p_rule._p.get_or_add_pPr().append(pBdr)
    
    # -------------------------------------------------------------
    # 3. FOOTER SETUP
    # -------------------------------------------------------------
    footer = section.footer
    
    # Bottom rule line
    p_foot_rule = footer.add_paragraph()
    p_foot_rule.paragraph_format.space_before = Pt(0)
    p_foot_rule.paragraph_format.space_after = Pt(4)
    pBdr_foot = parse_xml(r'<w:pBdr %s><w:top w:val="single" w:sz="6" w:space="1" w:color="00A5A3"/></w:pBdr>' % nsdecls('w'))
    p_foot_rule._p.get_or_add_pPr().append(pBdr_foot)
    
    # 2-Column Footer Table
    foot_table = footer.add_table(rows=1, cols=2, width=Inches(7.27))
    foot_table.alignment = WD_TABLE_ALIGNMENT.CENTER
    
    for cell in foot_table.rows[0].cells:
        tcPr = cell._tc.get_or_add_tcPr()
        tcBorders = parse_xml(r'<w:tcBorders %s><w:top w:val="none"/><w:left w:val="none"/><w:bottom w:val="none"/><w:right w:val="none"/></w:tcBorders>' % nsdecls('w'))
        tcPr.append(tcBorders)
        
    cell_f_left = foot_table.cell(0, 0)
    cell_f_left.width = Inches(3.5)
    p_fl = cell_f_left.paragraphs[0]
    p_fl.alignment = WD_ALIGN_PARAGRAPH.LEFT
    p_fl.paragraph_format.space_after = Pt(0)
    
    run_entity = p_fl.add_run("Trescon Global Business Solutions Pvt Ltd\n")
    run_entity.font.name = 'Arial'
    run_entity.font.size = Pt(7.5)
    run_entity.font.bold = True
    run_entity.font.color.rgb = COLOR_DARK
    
    run_addr = p_fl.add_run("1st floor, Prom’S Complex, 3h, 7th C Main Rd, 3rd Block Koramangala, Bengaluru, Karnataka – 560034")
    run_addr.font.name = 'Arial'
    run_addr.font.size = Pt(7.0)
    run_addr.font.color.rgb = COLOR_BODY
    
    cell_f_right = foot_table.cell(0, 1)
    cell_f_right.width = Inches(3.77)
    p_fr = cell_f_right.paragraphs[0]
    p_fr.alignment = WD_ALIGN_PARAGRAPH.JUSTIFY
    p_fr.paragraph_format.space_after = Pt(0)
    
    run_disc_label = p_fr.add_run("Disclaimer: ")
    run_disc_label.font.name = 'Arial'
    run_disc_label.font.size = Pt(6.3)
    run_disc_label.font.bold = True
    run_disc_label.font.color.rgb = COLOR_DARK
    
    run_disc_body = p_fr.add_run(
        "The information shared by Trescon is confidential and intended solely for the recipient. "
        "It may not be copied, distributed, or relied upon without prior written consent. "
        "Trescon makes no warranties regarding the accuracy or completeness of the content and accepts no liability "
        "for any loss arising from its use. © 2025 Trescon. All rights reserved."
    )
    run_disc_body.font.name = 'Arial'
    run_disc_body.font.size = Pt(6.3)
    run_disc_body.font.color.rgb = COLOR_MUTED
    
    # -------------------------------------------------------------
    # 4. BODY DOCUMENT CONTENT
    # -------------------------------------------------------------
    
    # Recipient Block
    p_recip = doc.add_paragraph()
    p_recip.paragraph_format.space_after = Pt(18)
    
    run_recip = p_recip.add_run(
        "To,\n"
        "Mr. Alex Turner\n"
        "Chief Executive Officer\n"
        "Apex Global Innovations Ltd.\n"
        "Bengaluru, Karnataka"
    )
    run_recip.font.name = 'Arial'
    run_recip.font.size = Pt(10.5)
    run_recip.font.bold = False
    run_recip.font.color.rgb = COLOR_BODY
    
    # Subject Line
    p_subj = doc.add_paragraph()
    p_subj.paragraph_format.space_after = Pt(14)
    p_subj.paragraph_format.left_indent = Pt(6)
    pBdr_subj = parse_xml(r'<w:pBdr %s><w:left w:val="single" w:sz="18" w:space="8" w:color="00A5A3"/></w:pBdr>' % nsdecls('w'))
    p_subj._p.get_or_add_pPr().append(pBdr_subj)
    
    run_subj = p_subj.add_run("Subject: Formal Proposal & Corporate Partnership Engagement")
    run_subj.font.name = 'Arial'
    run_subj.font.size = Pt(10.5)
    run_subj.font.bold = True
    run_subj.font.color.rgb = COLOR_DARK
    
    # Salutation
    p_sal = doc.add_paragraph()
    p_sal.paragraph_format.space_after = Pt(12)
    run_sal = p_sal.add_run("Dear Mr. Turner,")
    run_sal.font.name = 'Arial'
    run_sal.font.size = Pt(10.5)
    run_sal.font.color.rgb = COLOR_BODY
    
    # Paragraph 1
    p_body1 = doc.add_paragraph()
    p_body1.paragraph_format.space_after = Pt(8)
    p_body1.paragraph_format.line_spacing = 1.12
    run_b1 = p_body1.add_run(
        "I hope this message finds you well. I am writing on behalf of Trescon Global to formally submit our "
        "comprehensive proposal for the upcoming enterprise technology summit and strategic collaboration initiatives. "
        "Our team has tailored this framework to align with your organization's vision, key deliverables, and expansion roadmaps."
    )
    run_b1.font.name = 'Arial'
    run_b1.font.size = Pt(10.5)
    run_b1.font.color.rgb = COLOR_BODY
    
    # Paragraph 2
    p_body2 = doc.add_paragraph()
    p_body2.paragraph_format.space_after = Pt(8)
    p_body2.paragraph_format.line_spacing = 1.12
    run_b2 = p_body2.add_run(
        "As a premier B2B events and business solutions firm operating across seven global territories, Trescon is committed to "
        "connecting businesses with high-impact market opportunities. The enclosed document details our execution timeline, "
        "stakeholder engagement models, and target milestones for optimal business outcome."
    )
    run_b2.font.name = 'Arial'
    run_b2.font.size = Pt(10.5)
    run_b2.font.color.rgb = COLOR_BODY
    
    # Paragraph 3
    p_body3 = doc.add_paragraph()
    p_body3.paragraph_format.space_after = Pt(18)
    p_body3.paragraph_format.line_spacing = 1.12
    run_b3 = p_body3.add_run(
        "We welcome the opportunity to discuss this proposal further and address any specific requirements. "
        "Please feel free to reach out to our executive coordination office at your convenience."
    )
    run_b3.font.name = 'Arial'
    run_b3.font.size = Pt(10.5)
    run_b3.font.color.rgb = COLOR_BODY
    
    # Closing & Signature
    p_sign = doc.add_paragraph()
    p_sign.paragraph_format.space_after = Pt(0)
    
    run_close = p_sign.add_run("Warm regards,\n\n\n\n")
    run_close.font.name = 'Arial'
    run_close.font.size = Pt(10.5)
    run_close.font.color.rgb = COLOR_BODY
    
    run_name = p_sign.add_run("Mohammed Saleem\n")
    run_name.font.name = 'Arial'
    run_name.font.size = Pt(10.5)
    run_name.font.bold = True
    run_name.font.color.rgb = COLOR_DARK
    
    run_title = p_sign.add_run("Founder & Chairman\nTrescon Global Business Solutions Pvt. Ltd.")
    run_title.font.name = 'Arial'
    run_title.font.size = Pt(9.5)
    run_title.font.color.rgb = COLOR_MUTED
    
    # Save output file
    output_filename = 'Trescon_Global_Letterhead_Template.docx'
    doc.save(output_filename)
    print(f"Successfully generated Word template: {output_filename}")

if __name__ == '__main__':
    create_trescon_letterhead()
