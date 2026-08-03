/**
 * Trescon Global Executive Letterhead Studio Logic (Option 2 — Guided Form-Based Architecture)
 */

// Preset Address Database
const ADDRESS_PRESETS = {
  bangalore: {
    entity: "Trescon Global Business Solutions Pvt Ltd.",
    address: "1st floor, Prom’S Complex, 3h, 7th C Main Rd, 3rd Block Koramangala, Bengaluru, Karnataka – 560034",
    extra: "",
    cin: "CIN: U74900KA2016PTC086221",
    email: "info@tresconglobal.com",
    web: "tresconglobal.com"
  },
  manipal: {
    entity: "Trescon Global Business Solutions Pvt Ltd.",
    address: "H (23), 5th Floor, Pragathi Business District #412, above Reliance Trends, Laxmindra Nagar, Manipal, Udupi, Karnataka – 576104",
    extra: "",
    cin: "CIN: U74900KA2016PTC086221",
    email: "info@tresconglobal.com",
    web: "tresconglobal.com"
  },
  mangalore: {
    entity: "Trescon Global Business Solutions Pvt Ltd.",
    address: "1st Floor, Bejai Post, Ajantha Business Center, Bejai – Kapikad Road, Mangaluru, Karnataka – 575004",
    extra: "",
    cin: "CIN: U74900KA2016PTC086221",
    email: "info@tresconglobal.com",
    web: "tresconglobal.com"
  },
  dubai: {
    entity: "Trescon Events Organizing Ltd.",
    address: "Office 806, 8th Floor, Liberty House, Dubai International Financial Centre, DIFC, Dubai, UAE",
    extra: "License number CL6668.",
    cin: "",
    email: "uae@tresconglobal.com",
    web: "tresconglobal.com"
  }
};

// Helper to strip raw HTML entities for Word exporter
function stripHtmlEntities(str) {
  if (!str) return '';
  return str
    .replace(/&ndash;/g, '–')
    .replace(/&mdash;/g, '—')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/<br\s*\/?>/gi, ' ');
}

// Global Update Footer & Office Preset Function
window.updateFooter = function() {
  const selectElem = document.getElementById('office-preset');
  const selectedKey = selectElem ? selectElem.value : 'bangalore';
  const data = ADDRESS_PRESETS[selectedKey] || ADDRESS_PRESETS.bangalore;

  const companyElem = document.getElementById('preview-footer-company');
  const addressElem = document.getElementById('preview-footer-address');
  const emailElem = document.getElementById('preview-email');
  const webElem = document.getElementById('preview-web');

  if (companyElem) companyElem.textContent = data.entity;

  let inlineAddr = data.address.replace(/<br\s*\/?>/gi, ' ');
  if (data.cin) {
    inlineAddr += ` [${data.cin}]`;
  } else if (data.extra) {
    inlineAddr += ` [${data.extra}]`;
  }

  if (addressElem) addressElem.textContent = inlineAddr;
  if (emailElem) emailElem.textContent = data.email;
  if (webElem) webElem.textContent = data.web;
};

// Native Word (.docx) Exporter Engine
window.exportToDocx = async function(isBlankBody = false) {
  const selectElem = document.getElementById('office-preset');
  const selectedKey = selectElem ? selectElem.value : 'bangalore';
  const data = ADDRESS_PRESETS[selectedKey] || ADDRESS_PRESETS.bangalore;

  const recipName = document.getElementById('input-recip-name') ? document.getElementById('input-recip-name').value : 'Mr. Alex Turner';
  const recipTitle = document.getElementById('input-recip-title') ? document.getElementById('input-recip-title').value : 'Chief Executive Officer, Apex Global Innovations Ltd.';
  const recipAddr = document.getElementById('input-recip-address') ? document.getElementById('input-recip-address').value : 'Bengaluru, Karnataka';
  const subjectStr = document.getElementById('input-subject') ? document.getElementById('input-subject').value : 'Subject: Formal Proposal & Corporate Partnership Engagement';
  const salutationStr = document.getElementById('input-salutation') ? document.getElementById('input-salutation').value : 'Dear Mr. Turner,';
  const closingStr = document.getElementById('input-sign-closing') ? document.getElementById('input-sign-closing').value : 'Warm regards,';
  const signName = document.getElementById('input-sign-name') ? document.getElementById('input-sign-name').value : 'Mohammed Saleem';
  const signTitle = document.getElementById('input-sign-title') ? document.getElementById('input-sign-title').value : 'Founder & Chairman';

  const bodyHTML = window.quill ? window.quill.root.innerHTML : (document.getElementById('preview-body') ? document.getElementById('preview-body').innerHTML : '');

  // Parse Body HTML into Word Paragraphs
  const { Document, Packer, Paragraph, TextRun, AlignmentType, Table, TableRow, TableCell, WidthType, BorderStyle, Header, Footer, ImageRun } = window.docx;

  const bodyParagraphs = [];

  if (isBlankBody) {
    // 100% Blank Document Canvas for Desktop Editing
    bodyParagraphs.push(new Paragraph({ children: [] }));
  } else {
    // Add Recipient Block
    bodyParagraphs.push(
      new Paragraph({ children: [new TextRun({ text: "To,", bold: true, color: "01373D", size: 20, font: "Manrope" })], spacing: { after: 40 } }),
      new Paragraph({ children: [new TextRun({ text: recipName, bold: true, color: "01373D", size: 20, font: "Manrope" })], spacing: { after: 40 } }),
      new Paragraph({ children: [new TextRun({ text: recipTitle, color: "4A5568", size: 18, font: "Manrope" })], spacing: { after: 40 } }),
      new Paragraph({ children: [new TextRun({ text: recipAddr, color: "4A5568", size: 18, font: "Manrope" })], spacing: { after: 240 } })
    );

    // Add Subject Line
    bodyParagraphs.push(
      new Paragraph({ children: [new TextRun({ text: subjectStr, bold: true, underline: {}, color: "01373D", size: 20, font: "Manrope" })], spacing: { after: 200 } })
    );

    // Add Salutation
    bodyParagraphs.push(
      new Paragraph({ children: [new TextRun({ text: salutationStr, color: "1E2124", size: 20, font: "Manrope" })], spacing: { after: 180 } })
    );

    // Add Body Paragraphs & Bullet Lists
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = bodyHTML;

    tempDiv.childNodes.forEach(node => {
      if (node.nodeName === 'UL' || node.nodeName === 'OL') {
        node.querySelectorAll('li').forEach(li => {
          const text = stripHtmlEntities(li.innerText).trim();
          if (text) {
            bodyParagraphs.push(new Paragraph({
              text: text,
              bullet: { level: 0 },
              spacing: { after: 100 }
            }));
          }
        });
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        if (node.nodeName === 'P' || node.nodeName === 'DIV' || node.nodeName.startsWith('H')) {
          const text = stripHtmlEntities(node.innerText).trim();
          if (text) {
            bodyParagraphs.push(new Paragraph({
              children: [new TextRun({ text: text, color: "1E2124", size: 20, font: "Manrope" })],
              spacing: { after: 160 }
            }));
          }
        }
      }
    });

    // Add Signatory Block
    bodyParagraphs.push(
      new Paragraph({ children: [new TextRun({ text: closingStr, color: "1E2124", size: 20, font: "Manrope" })], spacing: { before: 240, after: 360 } }),
      new Paragraph({ children: [new TextRun({ text: signName, bold: true, color: "01373D", size: 22, font: "Manrope" })], spacing: { after: 40 } }),
      new Paragraph({ children: [new TextRun({ text: signTitle, color: "464D53", size: 18, font: "Manrope" })], spacing: { after: 100 } })
    );
  }

  // Fetch Logo (Exact Optical Dimensions)
  let logoImageRun = null;
  try {
    const imgRes = await fetch('brand_assets/10-years-trescon-logo.png');
    if (imgRes.ok) {
      const imgBuffer = await imgRes.arrayBuffer();
      logoImageRun = new ImageRun({
        data: imgBuffer,
        transformation: { width: 140, height: 45 }
      });
    }
  } catch (e) {
    console.warn('Logo fetch error:', e);
  }

  // Native 2-Column Word Header Table (Logo | Vertical Divider | 2-Line Tagline - Bottom Aligned)
  const headerLeftCellContent = new Table({
    borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.SINGLE, size: 6, color: '00A5A3' } },
            children: [
              ...(logoImageRun ? [
                new Paragraph({ children: [logoImageRun], spacing: { after: 0 } })
              ] : [
                new Paragraph({ children: [new TextRun({ text: 'TRESCON GLOBAL', bold: true, size: 20, color: '00A5A3', font: 'Anek Devanagari' })] })
              ])
            ]
          }),
          new TableCell({
            borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
            children: [
              new Paragraph({
                children: [new TextRun({ text: "  Connecting Businesses", bold: true, size: 11, color: "01373D", font: "Manrope" })],
                spacing: { before: 30, after: 10 }
              }),
              new Paragraph({
                children: [new TextRun({ text: "  with Opportunities", bold: true, size: 11, color: "01373D", font: "Manrope" })],
                spacing: { after: 0 }
              })
            ]
          })
        ]
      })
    ]
  });

  const headerTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      bottom: { style: BorderStyle.SINGLE, size: 8, color: '00A5A3' },
      top: { style: BorderStyle.NONE },
      left: { style: BorderStyle.NONE },
      right: { style: BorderStyle.NONE }
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: 62, type: WidthType.PERCENTAGE },
            borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
            children: [headerLeftCellContent]
          }),
          new TableCell({
            width: { size: 38, type: WidthType.PERCENTAGE },
            borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
            children: [
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [new TextRun({ text: data.email, size: 13, color: '464D53', font: 'Manrope' })],
                spacing: { after: 10 }
              }),
              new Paragraph({
                alignment: AlignmentType.RIGHT,
                children: [new TextRun({ text: data.web, bold: true, size: 13, color: '00A5A3', font: 'Manrope' })],
                spacing: { after: 20 }
              })
            ]
          })
        ]
      })
    ]
  });

  const cleanEntity = stripHtmlEntities(data.entity);
  let inlineAddrWord = stripHtmlEntities(data.address);
  if (data.cin) {
    inlineAddrWord += ` [${stripHtmlEntities(data.cin)}]`;
  } else if (data.extra) {
    inlineAddrWord += ` [${stripHtmlEntities(data.extra)}]`;
  }

  // Native Full-Width Word Footer Table (2-Line Format: Company Name + Single Line Address [CIN/License])
  const footerTable = new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 6, color: '00A5A3' },
      bottom: { style: BorderStyle.NONE },
      left: { style: BorderStyle.NONE },
      right: { style: BorderStyle.NONE }
    },
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: 100, type: WidthType.PERCENTAGE },
            borders: { top: { style: BorderStyle.NONE }, bottom: { style: BorderStyle.NONE }, left: { style: BorderStyle.NONE }, right: { style: BorderStyle.NONE } },
            children: [
              new Paragraph({ children: [new TextRun({ text: cleanEntity, bold: true, color: '01373D', size: 13, font: 'Anek Devanagari' })], spacing: { after: 10 } }),
              new Paragraph({ children: [new TextRun({ text: inlineAddrWord, color: '464D53', size: 11, font: 'Manrope' })], spacing: { after: 10 } })
            ]
          })
        ]
      })
    ]
  });

  const doc = new Document({
    sections: [{
      properties: {
        page: {
          margin: {
            top: 397,
            bottom: 397,
            left: 567,
            right: 567,
            header: 170,
            footer: 144
          }
        }
      },
      headers: {
        default: new Header({
          children: [headerTable]
        })
      },
      footers: {
        default: new Footer({
          children: [
            footerTable,
            new Paragraph({
              children: [
                new TextRun({
                  text: "Disclaimer: The information shared by Trescon is confidential and intended solely for the recipient. It may not be copied, distributed, or relied upon without prior written consent. Trescon makes no warranties regarding the accuracy or completeness of the content and accepts no liability for any loss arising from its use. © 2025 Trescon. All rights reserved.",
                  size: 10,
                  color: "718096",
                  font: "Manrope"
                })
              ],
              spacing: { before: 40 }
            })
          ]
        })
      },
      children: bodyParagraphs
    }]
  });

  try {
    const blob = await Packer.toBlob(doc);
    const fileName = `Trescon_Executive_Letterhead_${selectedKey.toUpperCase()}_${new Date().toISOString().slice(0, 10)}.docx`;
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);
  } catch (err) {
    console.error('Docx Exporter Error:', err);
  }
};

document.addEventListener('DOMContentLoaded', () => {

  // Initialize Quill Editor in Sidebar Form
  window.quill = null;
  const bodyEditorContainer = document.getElementById('input-body-editor');
  const toolbarContainer = document.getElementById('editor-sidebar-toolbar');

  if (window.Quill && bodyEditorContainer) {
    const toolbarOptions = [
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      ['clean']
    ];

    window.quill = new Quill('#input-body-editor', {
      theme: 'snow',
      placeholder: 'Type your letter content here...',
      modules: { toolbar: toolbarOptions }
    });

    // Move toolbar above editor box
    const qlToolbar = bodyEditorContainer.parentElement.querySelector('.ql-toolbar');
    if (qlToolbar && toolbarContainer) {
      toolbarContainer.appendChild(qlToolbar);
    }
  }

  // Bind Form Inputs to Live Preview Elements
  function bindInputToPreview(inputId, previewId, isInnerHTML = false) {
    const inputElem = document.getElementById(inputId);
    const previewElem = document.getElementById(previewId);
    if (inputElem && previewElem) {
      const updateFn = () => {
        if (isInnerHTML) previewElem.innerHTML = inputElem.value;
        else previewElem.textContent = inputElem.value;
      };
      inputElem.addEventListener('input', updateFn);
      inputElem.addEventListener('change', updateFn);
      updateFn();
    }
  }

  bindInputToPreview('input-recip-name', 'preview-recipient-name');
  bindInputToPreview('input-recip-title', 'preview-recipient-title');
  bindInputToPreview('input-recip-address', 'preview-recipient-address');
  bindInputToPreview('input-subject', 'preview-subject');
  bindInputToPreview('input-salutation', 'preview-salutation');
  bindInputToPreview('input-sign-closing', 'preview-sign-closing');
  bindInputToPreview('input-sign-name', 'preview-sign-name');
  bindInputToPreview('input-sign-title', 'preview-sign-title');

  // Bind Body Quill Editor to Live Preview Body
  if (window.quill) {
    const previewBodyElem = document.getElementById('preview-body');
    window.quill.on('text-change', () => {
      if (previewBodyElem) {
        previewBodyElem.innerHTML = window.quill.root.innerHTML;
      }
    });

    // Initial Body Text
    if (previewBodyElem) {
      window.quill.root.innerHTML = `<p>We are pleased to present the updated operational framework for our upcoming executive summits. This document outlines key milestones, regional logistics, and target outcomes designed to accelerate our international reach.</p><p>Key Strategic Directives:</p><ul><li>Expand executive outreach across emerging technology hubs.</li><li>Standardize digital assets and communication infrastructure.</li><li>Drive high-impact B2B networking events across DIFC and APAC regions.</li></ul><p>Please review the enclosed directives and advise on any region-specific adjustments required prior to final execution.</p>`;
      previewBodyElem.innerHTML = window.quill.root.innerHTML;
    }
  }

  // Bind Office Select Dropdown
  const selectElem = document.getElementById('office-preset');
  if (selectElem) {
    selectElem.addEventListener('change', window.updateFooter);
    selectElem.addEventListener('input', window.updateFooter);
  }

  // Trigger Initial Footer Sync
  window.updateFooter();

  // Auto-Fit Letterhead Canvas to Viewport (Zero-Scrollbar Perfect Fit Engine)
  function autoFitCanvas() {
    const previewArea = document.querySelector('.preview-area');
    const paperContainer = document.querySelector('.paper-container');
    const sheet = document.getElementById('letterhead-sheet');

    if (!previewArea || !paperContainer || !sheet) return;

    sheet.style.transform = 'none';

    // Subtract 48px padding buffer so the document fits with zero bottom cutoff and zero scrollbar
    const containerWidth = Math.max(previewArea.clientWidth - 48, 280);
    const containerHeight = Math.max(previewArea.clientHeight - 48, 350);

    // Standard A4 pixel dimensions at 96 DPI: 794px width x 1123px height
    const sheetWidth = 794;
    const sheetHeight = 1123;

    const scaleX = containerWidth / sheetWidth;
    const scaleY = containerHeight / sheetHeight;

    // Use smaller scale factor so the ENTIRE document fits without clipping
    const scale = Math.min(scaleX, scaleY, 1.0);

    sheet.style.transform = `scale(${scale})`;
    sheet.style.transformOrigin = 'top center';

    paperContainer.style.height = `${sheetHeight * scale}px`;
    paperContainer.style.width = `${sheetWidth * scale}px`;
    paperContainer.style.margin = '0 auto';
  }

  window.autoFitCanvas = autoFitCanvas;
  window.addEventListener('resize', autoFitCanvas);
  setTimeout(autoFitCanvas, 50);
});
