/**
 * Trescon Global Executive Letterhead Studio Logic (Enterprise Production Refactor)
 */

document.addEventListener('DOMContentLoaded', () => {

  // Preset Address Database
  const ADDRESS_PRESETS = {
    bangalore: {
      entity: "Trescon Global Business Solutions Pvt Ltd",
      address: "1st floor, Prom’S Complex, 3h, 7th C Main Rd, 3rd Block Koramangala, Bengaluru, Karnataka – 560034",
      license: "",
      email: "info@tresconglobal.com",
      web: "tresconglobal.com"
    },
    manipal: {
      entity: "Trescon Global Business Solutions Pvt Ltd",
      address: "H (23), 5th Floor, Pragathi Business District #412, above Reliance Trends, Laxmindra Nagar,<br>Manipal, Udupi, Karnataka – 576104",
      license: "",
      email: "info@tresconglobal.com",
      web: "tresconglobal.com"
    },
    mangalore: {
      entity: "Trescon Global Business Solutions Pvt Ltd",
      address: "1st Floor, Bejai Post, Ajantha Business Center, Bejai – Kapikad Road, Mangaluru, Karnataka – 575004",
      license: "",
      email: "info@tresconglobal.com",
      web: "tresconglobal.com"
    },
    dubai: {
      entity: "Trescon Events Organizing Ltd.",
      address: "Office 806, 8th Floor, Liberty House, Dubai International Financial Centre, DIFC, Dubai, UAE",
      license: "License number CL6668.",
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

  // Sample Corporate Proposal Content
  const SAMPLE_BODY = `I hope this message finds you well. I am writing on behalf of Trescon Global to formally submit our comprehensive proposal for the upcoming enterprise technology summit and strategic collaboration initiatives. Our team has tailored this framework to align with your organization's vision, key deliverables, and expansion roadmaps.

As a premier B2B events and business solutions firm operating across seven global territories, Trescon is committed to connecting businesses with high-impact market opportunities. The enclosed document details our execution timeline, stakeholder engagement models, and target milestones for optimal business outcome.

We welcome the opportunity to discuss this proposal further and address any specific requirements. Please feel free to reach out to our executive coordination office at your convenience.`;

  // UI Element References
  const officePresetSelect = document.getElementById('office-preset');
  const previewBodyElem = document.getElementById('preview-body');
  const topToolbarContainer = document.getElementById('editor-top-toolbar');

  const previewDate = document.getElementById('preview-date');
  const previewRecipientName = document.getElementById('preview-recipient-name');
  const previewRecipientTitle = document.getElementById('preview-recipient-title');
  const previewRecipientAddress = document.getElementById('preview-recipient-address');
  const previewSubject = document.getElementById('preview-subject');
  const previewSalutation = document.getElementById('preview-salutation');
  const previewSignName = document.getElementById('preview-sign-name');
  const previewSignTitle = document.getElementById('preview-sign-title');

  const previewFooterCompany = document.getElementById('preview-footer-company');
  const previewFooterAddress = document.getElementById('preview-footer-address');
  const previewFooterLicense = document.getElementById('preview-footer-license');
  const previewHeaderContacts = document.getElementById('preview-header-contacts');

  const btnPrint = document.getElementById('btn-print');
  const btnDownloadPdf = document.getElementById('btn-download-pdf');
  const btnDownloadDocx = document.getElementById('btn-download-docx');

  // Enterprise State Management & LocalStorage Persistence
  const STORAGE_KEY = 'trescon_letterhead_state_v3';

  let docState = {
    officePreset: 'bangalore',
    recipientName: 'Mr. Alex Turner',
    recipientTitle: 'Chief Executive Officer, Apex Global Innovations Ltd.',
    recipientAddress: 'Bengaluru, Karnataka',
    subject: 'Subject: Formal Proposal & Corporate Partnership Engagement',
    salutation: 'Dear Mr. Turner,',
    date: 'Date: July 24, 2026',
    bodyHTML: '',
    signatoryName: 'Mohammed Saleem',
    signatoryTitle: 'Founder & Chairman'
  };

  function saveDocState() {
    try {
      docState.officePreset = officePresetSelect ? officePresetSelect.value : 'bangalore';
      if (previewRecipientName) docState.recipientName = previewRecipientName.textContent;
      if (previewRecipientTitle) docState.recipientTitle = previewRecipientTitle.textContent;
      if (previewRecipientAddress) docState.recipientAddress = previewRecipientAddress.textContent;
      if (previewSubject) docState.subject = previewSubject.textContent;
      if (previewSalutation) docState.salutation = previewSalutation.textContent;
      if (previewDate) docState.date = previewDate.textContent;
      if (previewSignName) docState.signatoryName = previewSignName.textContent;
      if (previewSignTitle) docState.signatoryTitle = previewSignTitle.textContent;
      if (quill) docState.bodyHTML = quill.root.innerHTML;

      localStorage.setItem(STORAGE_KEY, JSON.stringify(docState));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  }

  function loadDocState() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        docState = { ...docState, ...parsed };

        if (officePresetSelect && docState.officePreset) {
          officePresetSelect.value = docState.officePreset;
        }
        if (previewRecipientName && docState.recipientName) previewRecipientName.textContent = docState.recipientName;
        if (previewRecipientTitle && docState.recipientTitle) previewRecipientTitle.textContent = docState.recipientTitle;
        if (previewRecipientAddress && docState.recipientAddress) previewRecipientAddress.textContent = docState.recipientAddress;
        if (previewSubject && docState.subject) previewSubject.textContent = docState.subject;
        if (previewSalutation && docState.salutation) previewSalutation.textContent = docState.salutation;
        if (previewDate && docState.date) previewDate.textContent = docState.date;
        if (previewSignName && docState.signatoryName) previewSignName.textContent = docState.signatoryName;
        if (previewSignTitle && docState.signatoryTitle) previewSignTitle.textContent = docState.signatoryTitle;
      }
    } catch (e) {
      console.warn('LocalStorage load error:', e);
    }
  }

  // Single-Stream Quill Editor Initialization
  let quill = null;

  if (window.Quill && previewBodyElem) {
    const basicWordToolbarOptions = [
      ['bold', 'italic', 'underline'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'align': [] }],
      ['clean']
    ];

    quill = new Quill('#preview-body', {
      theme: 'snow',
      placeholder: 'Start typing your letter here (recipient details, subject, body text, and signature)...',
      modules: {
        toolbar: basicWordToolbarOptions
      }
    });

    const qlToolbar = previewBodyElem.parentElement.querySelector('.ql-toolbar');
    if (qlToolbar && topToolbarContainer) {
      topToolbarContainer.appendChild(qlToolbar);
    }

    // Purge legacy prefilled sample content if present in state cache
    loadDocState();
    if (docState.bodyHTML && (docState.bodyHTML.includes('Alex Turner') || docState.bodyHTML.includes('Mohammed Saleem') || docState.bodyHTML.includes('I hope this message finds you well'))) {
      docState.bodyHTML = '';
      try { localStorage.removeItem(STORAGE_KEY); } catch(e) {}
    }

    if (docState.bodyHTML && docState.bodyHTML !== '<p><br></p>') {
      quill.root.innerHTML = docState.bodyHTML;
    } else {
      quill.root.innerHTML = '';
    }

    // Intercept Tab & Shift+Tab keys for MS Word indentation behavior
    quill.keyboard.addBinding({
      key: 9,
      handler: function(range, context) {
        if (context.format.list) {
          this.quill.format('indent', '+1');
        } else {
          this.quill.insertText(range.index, '    ');
        }
        return false;
      }
    });

    quill.keyboard.addBinding({
      key: 9,
      shiftKey: true,
      handler: function(range, context) {
        this.quill.format('indent', '-1');
        return false;
      }
    });

    quill.on('text-change', () => {
      saveDocState();
      paginateDocument();
    });
  }

  function resetPaginationState() {
    document.querySelectorAll('.auto-page-sheet').forEach(sheet => sheet.remove());
  }

  // Dynamic Multi-Sheet Physical A4 Pagination Engine
  function paginateDocument() {
    resetPaginationState();

    const letterheadSheet = document.getElementById('letterhead-sheet');
    const previewBodyElem = document.getElementById('preview-body');
    const sheetsWrapper = document.getElementById('sheets-wrapper');
    if (!letterheadSheet || !previewBodyElem || !sheetsWrapper) return;

    const editorRoot = previewBodyElem.querySelector('.ql-editor') || previewBodyElem;
    const bodyChildren = Array.from(editorRoot.children);
    if (bodyChildren.length === 0) return;

    // Printable body height threshold on Page 1 (approx 640px for full blank canvas)
    const MAX_PAGE1_BODY_HEIGHT = 640;
    const MAX_PAGE_N_BODY_HEIGHT = 800;

    let currentHeight = 0;
    let pageParagraphs = [[]];
    let currentPageIndex = 1;

    bodyChildren.forEach(child => {
      const h = child.offsetHeight || 32;
      const limit = (currentPageIndex === 1) ? MAX_PAGE1_BODY_HEIGHT : MAX_PAGE_N_BODY_HEIGHT;

      if (currentHeight + h > limit && currentHeight > 0) {
        currentPageIndex++;
        pageParagraphs.push([child]);
        currentHeight = h;
      } else {
        pageParagraphs[currentPageIndex - 1].push(child);
        currentHeight += h;
      }
    });

    if (pageParagraphs.length <= 1) return; // Fits cleanly on Page 1!

    // We have multi-page overflow! Generate Page 2, 3...
    const totalPages = pageParagraphs.length;

    for (let i = 1; i < totalPages; i++) {
      const pageNum = i + 1;
      const autoSheet = document.createElement('article');
      autoSheet.className = 'a4-sheet auto-page-sheet';
      autoSheet.id = `auto-sheet-page-${pageNum}`;

      const selectedKey = officePresetSelect ? officePresetSelect.value : 'bangalore';
      const data = ADDRESS_PRESETS[selectedKey] || ADDRESS_PRESETS.bangalore;

      autoSheet.innerHTML = `
        <div class="top-accent-bar"></div>
        <header class="letter-header" style="padding-bottom:8px;">
          <div class="header-logo-block">
            <img src="brand_assets/10-years-trescon-logo.png" alt="Trescon Logo" style="height:32px;">
          </div>
          <div class="header-meta-block">
            <div style="font-size:0.82rem; color:var(--trescon-slate); font-weight:700;">Continuation Sheet &mdash; Page ${pageNum}</div>
          </div>
        </header>
        <div class="header-gradient-rule"></div>

        <div class="letter-body auto-letter-body" style="margin-top:16px; flex: 1;">
        </div>

        <footer class="letter-footer">
          <div class="footer-divider"></div>
          <div class="footer-columns">
            <div class="footer-col-left">
              <p class="footer-company-name">${data.entity}</p>
              <p class="footer-address">${data.address}</p>
              ${data.license ? `<p class="footer-license">${data.license}</p>` : ''}
            </div>
            <div class="footer-col-right">
              <p class="footer-disclaimer">
                <strong>Disclaimer:</strong> The information shared by Trescon is confidential and intended solely for the recipient. It may not be copied, distributed, or relied upon without prior written consent. Trescon makes no warranties regarding the accuracy or completeness of the content and accepts no liability for any loss arising from its use. &copy; 2025 Trescon. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      `;

      const autoBody = autoSheet.querySelector('.auto-letter-body');
      pageParagraphs[i].forEach(child => {
        autoBody.appendChild(child.cloneNode(true));
      });

      sheetsWrapper.appendChild(autoSheet);
    }
  }

  // Update Regional Office Metadata (Decoupled from Body Text)
  window.updateFooter = function() {
    const selectElem = document.getElementById('office-preset');
    const selectedKey = selectElem ? selectElem.value : 'bangalore';
    const data = ADDRESS_PRESETS[selectedKey] || ADDRESS_PRESETS.bangalore;

    const companyElem = document.getElementById('preview-footer-company');
    const addressElem = document.getElementById('preview-footer-address');
    const licenseElem = document.getElementById('preview-footer-license');
    const headerContactsElem = document.getElementById('preview-header-contacts');

    if (companyElem) companyElem.textContent = data.entity;
    if (addressElem) addressElem.innerHTML = data.address;
    if (licenseElem) {
      if (data.license) {
        licenseElem.textContent = data.license;
        licenseElem.style.display = 'block';
      } else {
        licenseElem.style.display = 'none';
      }
    }

    const iconDate = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#00A5A3" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="contact-icon"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`;
    const iconEmail = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#00A5A3" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="contact-icon"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`;
    const iconWeb = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#00A5A3" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="contact-icon"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1 4-10z"></path></svg>`;

    if (headerContactsElem) {
      const dateElem = document.getElementById('preview-date');
      const currentDateText = dateElem ? dateElem.textContent : 'Date: July 27, 2026';
      headerContactsElem.innerHTML = `
        <div class="header-contact-line">${iconDate}<span id="preview-date" contenteditable="true">${currentDateText}</span></div>
        <div class="header-contact-line">${iconEmail}<span>${data.email}</span></div>
        <div class="header-contact-line">${iconWeb}<span>${data.web}</span></div>
      `;
    }

    saveDocState();
  };

  if (officePresetSelect) {
    officePresetSelect.addEventListener('change', window.updateFooter);
  }

  // Attach Save Listeners to ContentEditable Fields
  [previewRecipientName, previewRecipientTitle, previewRecipientAddress, previewSubject, previewSalutation, previewDate, previewSignName, previewSignTitle].forEach(elem => {
    if (elem) {
      elem.addEventListener('input', saveDocState);
      elem.addEventListener('blur', saveDocState);
    }
  });

  // Native High-Fidelity Vector PDF Print Handler
  if (btnPrint) {
    btnPrint.addEventListener('click', () => {
      window.print();
    });
  }

  // Fallback 1-Click Client PDF Download
  if (btnDownloadPdf) {
    btnDownloadPdf.addEventListener('click', () => {
      const element = document.getElementById('letterhead-sheet');
      if (!element || !window.html2pdf) return;

      const opt = {
        margin: [0, 0, 0, 0],
        filename: `Trescon_Global_Letterhead_${new Date().toISOString().slice(0, 10)}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, logging: false },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };

      html2pdf().set(opt).from(element).save();
    });
  }

  // Dynamic Browser-Side Word (.docx) Exporter Utility
  async function exportToDocx() {
    if (!window.docx) {
      alert('The docx exporter library is still loading. Please try again in a moment.');
      return;
    }

    const { Document, Packer, Paragraph, TextRun, AlignmentType, Table, TableRow, TableCell, WidthType, BorderStyle } = window.docx;

    const recipName = previewRecipientName ? previewRecipientName.textContent.trim() : 'Mr. Alex Turner';
    const recipTitle = previewRecipientTitle ? previewRecipientTitle.textContent.trim() : '';
    const recipAddr = previewRecipientAddress ? previewRecipientAddress.textContent.trim() : '';
    const subject = previewSubject ? previewSubject.textContent.trim() : '';
    const salutation = previewSalutation ? previewSalutation.textContent.trim() : '';
    const dateStr = previewDate ? previewDate.textContent.trim() : 'Date: July 24, 2026';
    const signName = previewSignName ? previewSignName.textContent.trim() : 'Mohammed Saleem';
    const signTitle = previewSignTitle ? previewSignTitle.textContent.trim() : 'Founder & Chairman';

    const selectedKey = officePresetSelect ? officePresetSelect.value : 'bangalore';
    const data = ADDRESS_PRESETS[selectedKey] || ADDRESS_PRESETS.bangalore;

    // Convert Quill HTML AST to docx Paragraphs
    const bodyHtml = quill ? quill.root.innerHTML : '';
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = bodyHtml;

    const bodyParagraphs = [];
    const children = Array.from(tempDiv.children);

    children.forEach(child => {
      const text = child.textContent.trim();
      if (!text) return;

      if (child.tagName === 'UL') {
        Array.from(child.querySelectorAll('li')).forEach(li => {
          bodyParagraphs.push(
            new Paragraph({
              text: li.textContent.trim(),
              bullet: { level: 0 },
              spacing: { after: 120 }
            })
          );
        });
      } else if (child.tagName === 'OL') {
        Array.from(child.querySelectorAll('li')).forEach((li, idx) => {
          bodyParagraphs.push(
            new Paragraph({
              text: `${idx + 1}. ${li.textContent.trim()}`,
              spacing: { after: 120 }
            })
          );
        });
      } else {
        bodyParagraphs.push(
          new Paragraph({
            children: [
              new TextRun({
                text: text,
                font: 'Manrope',
                size: 22, // 11pt
                color: '2D3748'
              })
            ],
            spacing: { after: 180 }
          })
        );
      }
    });

    const cleanEntity = stripHtmlEntities(data.entity);
    const cleanAddress = stripHtmlEntities(data.address);
    const cleanLicense = stripHtmlEntities(data.license);

    // Construct 2-Column Footer Table in DOCX
    const footerTable = new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: { size: 50, type: WidthType.PERCENTAGE },
              borders: {
                top: { style: BorderStyle.SINGLE, size: 6, color: '00A5A3' },
                bottom: { style: BorderStyle.NONE },
                left: { style: BorderStyle.NONE },
                right: { style: BorderStyle.SINGLE, size: 2, color: 'CCCCCC' }
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({ text: cleanEntity, bold: true, color: '061626', size: 18 })
                  ]
                }),
                new Paragraph({
                  children: [
                    new TextRun({ text: cleanAddress, color: '4A5568', size: 16 })
                  ]
                }),
                ...(cleanLicense ? [new Paragraph({ children: [new TextRun({ text: cleanLicense, color: '4A5568', size: 16 })] })] : [])
              ]
            }),
            new TableCell({
              width: { size: 50, type: WidthType.PERCENTAGE },
              borders: {
                top: { style: BorderStyle.SINGLE, size: 6, color: '00A5A3' },
                bottom: { style: BorderStyle.NONE },
                left: { style: BorderStyle.NONE },
                right: { style: BorderStyle.NONE }
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Disclaimer: The information shared by Trescon is confidential and intended solely for the recipient. It may not be copied, distributed, or relied upon without prior written consent. © 2025 Trescon. All rights reserved.',
                      color: '718096',
                      size: 14
                    })
                  ]
                })
              ]
            })
          ]
        })
      ]
    });

    // If body paragraphs are empty, add a few blank lines for typing in Word
    if (bodyParagraphs.length === 0) {
      bodyParagraphs.push(
        new Paragraph({ children: [new TextRun({ text: '', size: 22 })], spacing: { after: 360 } }),
        new Paragraph({ children: [new TextRun({ text: '', size: 22 })], spacing: { after: 360 } }),
        new Paragraph({ children: [new TextRun({ text: '', size: 22 })], spacing: { after: 360 } })
      );
    }

    const { Document, Packer, Paragraph, TextRun, AlignmentType, Table, TableRow, TableCell, WidthType, BorderStyle, Header, Footer, ImageRun } = window.docx;

    let logoImageRun = null;
    try {
      const imgRes = await fetch('brand_assets/10-years-trescon-logo.png');
      if (imgRes.ok) {
        const imgBuffer = await imgRes.arrayBuffer();
        logoImageRun = new ImageRun({
          data: imgBuffer,
          transformation: { width: 130, height: 42 }
        });
      }
    } catch (e) {
      console.warn('Logo fetch error:', e);
    }

    const doc = new Document({
      sections: [
        {
          properties: {
            page: {
              margin: {
                top: 1440, // 1 inch
                bottom: 1440, // 1 inch
                left: 1440, // 1 inch
                right: 1440 // 1 inch
              }
            }
          },
          headers: {
            default: new Header({
              children: [
                new Paragraph({
                  children: [
                    ...(logoImageRun ? [logoImageRun] : [
                      new TextRun({ text: 'TRESCON GLOBAL ', bold: true, size: 24, color: '00A5A3', font: 'Manrope' })
                    ]),
                    new TextRun({ text: '  Connecting Businesses with Opportunities', italic: true, size: 15, color: '4A5568', font: 'Manrope' })
                  ]
                }),
                new Paragraph({
                  children: [new TextRun({ text: dateStr, color: '4A5568', size: 18, font: 'Manrope' })],
                  alignment: AlignmentType.LEFT,
                  spacing: { after: 200 }
                })
              ]
            })
          },
          footers: {
            default: new Footer({
              children: [
                footerTable
              ]
            })
          },
          children: bodyParagraphs.length > 0 ? bodyParagraphs : [
            new Paragraph({ children: [new TextRun({ text: '', size: 22 })], spacing: { after: 360 } }),
            new Paragraph({ children: [new TextRun({ text: '', size: 22 })], spacing: { after: 360 } })
          ]
        }
      ]
    });

    try {
      const blob = await Packer.toBlob(doc);
      const fileName = `Trescon_Global_Letterhead_${selectedKey.toUpperCase()}_${new Date().toISOString().slice(0, 10)}.docx`;
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      a.click();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Docx Exporter Error:', err);
    }
  }

  if (btnDownloadDocx) {
    btnDownloadDocx.addEventListener('click', exportToDocx);
  }

  // Initial Footer Update & Pagination Execution
  updateFooter();
  setTimeout(paginateDocument, 100);
});
