/**
 * Trescon Global Executive Letterhead Generator Logic
 */

document.addEventListener('DOMContentLoaded', () => {

  // Preset Address Database
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

  // Sample Corporate Proposal Content (from Brandbook)
  const SAMPLE_BODY = `I hope this message finds you well. I am writing on behalf of Trescon Global to formally submit our comprehensive proposal for the upcoming enterprise technology summit and strategic collaboration initiatives. Our team has tailored this framework to align with your organization's vision, key deliverables, and expansion roadmaps.

As a premier B2B events and business solutions firm operating across seven global territories, Trescon is committed to connecting businesses with high-impact market opportunities. The enclosed document details our execution timeline, stakeholder engagement models, and target milestones for optimal business outcome.

We welcome the opportunity to discuss this proposal further and address any specific requirements. Please feel free to reach out to our executive coordination office at your convenience.`;

  // Element Selectors
  const officePresetSelect = document.getElementById('office-preset');
  const customAddressContainer = document.getElementById('custom-address-container');
  const inputAddress = document.getElementById('input-address');
  const inputContact = document.getElementById('input-contact');

  const inputDate = document.getElementById('input-date');
  const inputRecipientName = document.getElementById('input-recipient-name');
  const inputRecipientTitle = document.getElementById('input-recipient-title');
  const inputRecipientAddress = document.getElementById('input-recipient-address');
  const inputSubject = document.getElementById('input-subject');
  const inputSalutation = document.getElementById('input-salutation');
  const inputBody = document.getElementById('input-body');
  const inputSignName = document.getElementById('input-sign-name');
  const inputSignTitle = document.getElementById('input-sign-title');

  // Preview Elements
  const previewDate = document.getElementById('preview-date');
  const previewRecipientName = document.getElementById('preview-recipient-name');
  const previewRecipientTitle = document.getElementById('preview-recipient-title');
  const previewRecipientAddress = document.getElementById('preview-recipient-address');
  const previewSubject = document.getElementById('preview-subject');
  const previewSalutation = document.getElementById('preview-salutation');
  const previewBody = document.getElementById('preview-body');
  const previewSignName = document.getElementById('preview-sign-name');
  const previewSignTitle = document.getElementById('preview-sign-title');
  const previewFooterCompany = document.getElementById('preview-footer-company');
  const previewFooterAddress = document.getElementById('preview-footer-address');
  const previewFooterLicense = document.getElementById('preview-footer-license');
  const previewHeaderContacts = document.getElementById('preview-header-contacts');

  const btnPrint = document.getElementById('btn-print');
  const btnReset = document.getElementById('btn-reset');

  // Tab Switching Handler
  const tabButtons = document.querySelectorAll('.sidebar-tabs .tab-btn');
  const tabPanes = document.querySelectorAll('.sidebar-scroll-content .tab-pane');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTabId = btn.getAttribute('data-tab');
      
      tabButtons.forEach(b => b.classList.remove('active'));
      tabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(targetTabId);
      if (targetPane) targetPane.classList.add('active');
    });
  });

  // Initialize Body Input & Date with Current Date
  const todayDateStr = new Date().toISOString().split('T')[0];
  if (inputDate) inputDate.value = todayDateStr;

  // Initialize Quill Rich Text Editor directly on the A4 letterhead canvas!
  let quill = null;
  const previewBodyElem = document.getElementById('preview-body');
  const topToolbarContainer = document.getElementById('editor-top-toolbar');

  if (window.Quill && previewBodyElem) {
    const fullToolbarOptions = [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'indent': '-1'}, { 'indent': '+1' }],
      [{ 'align': [] }],
      ['blockquote'],
      ['clean']
    ];

    quill = new Quill('#preview-body', {
      theme: 'snow',
      placeholder: 'Click here to start typing your letter body directly on the page...',
      modules: {
        toolbar: fullToolbarOptions
      }
    });

    // Move Quill's generated toolbar into the top fixed header ribbon!
    const qlToolbar = previewBodyElem.parentElement.querySelector('.ql-toolbar');
    if (qlToolbar && topToolbarContainer) {
      topToolbarContainer.appendChild(qlToolbar);
    }

    const initialHTML = SAMPLE_BODY.split('\n\n').map(p => `<p>${p.trim()}</p>`).join('');
    quill.root.innerHTML = initialHTML;

    // Intercept Tab & Shift+Tab keys for MS Word indentation behavior
    quill.keyboard.addBinding({
      key: 9, // Tab key
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
      key: 9, // Shift + Tab key
      shiftKey: true,
      handler: function(range, context) {
        this.quill.format('indent', '-1');
        return false;
      }
    });

    quill.on('text-change', () => {
      setTimeout(paginateDocument, 50);
    });
  }

  // Render Body Paragraphs Function
  function renderBodyText(text) {
    if (quill) return;
    if (!text || text === '<p><br></p>') {
      previewBody.innerHTML = '<p style="color:#a0aec0; font-style:italic;">[Letter body content placeholder]</p>';
      resetPaginationState();
      return;
    }
    previewBody.innerHTML = text;
    setTimeout(paginateDocument, 50);
  }

  function resetPaginationState() {
    document.querySelectorAll('.auto-page-sheet').forEach(sheet => sheet.remove());
    const sigBlock = document.querySelector('#letterhead-sheet .signature-block');
    if (sigBlock) sigBlock.style.display = 'block';
  }

  // Automatic Multi-Page Pagination Handler (Google Docs / MS Word Style)
  function paginateDocument() {
    resetPaginationState();
    if (page2Active) return; // Skip if manual 2-page template active

    const letterheadSheet = document.getElementById('letterhead-sheet');
    const previewBodyElem = document.getElementById('preview-body');
    const sigBlock = document.querySelector('#letterhead-sheet .signature-block');
    const sheetsWrapper = document.getElementById('sheets-wrapper');
    if (!letterheadSheet || !previewBodyElem || !sheetsWrapper) return;

    // Get all top-level elements inside Quill's editor (or preview body)
    const editorRoot = previewBodyElem.querySelector('.ql-editor') || previewBodyElem;
    const bodyChildren = Array.from(editorRoot.children);
    if (bodyChildren.length === 0) return;

    // A4 Page 1 Printable Height Threshold (1040px)
    const MAX_PAGE1_HEIGHT = 1040;
    
    // Check if letterhead sheet overflows A4 page 1 limit
    if (letterheadSheet.scrollHeight <= MAX_PAGE1_HEIGHT) {
      return; // Fits cleanly on 1 page!
    }

    // We have multi-page overflow!
    let page1Height = 0;
    const headerOffset = 360; // Overhead for header, recipient block, subject, salutation
    let splitIndex = bodyChildren.length;

    for (let i = 0; i < bodyChildren.length; i++) {
      const child = bodyChildren[i];
      const h = child.offsetHeight || 30;
      if (headerOffset + page1Height + h > (MAX_PAGE1_HEIGHT - 120) && i > 0) {
        splitIndex = i;
        break;
      }
      page1Height += h;
    }

    if (splitIndex >= bodyChildren.length) splitIndex = Math.max(1, bodyChildren.length - 1);

    const page2Children = bodyChildren.slice(splitIndex);

    // Create Page 2 Continuation Sheet
    const autoSheet = document.createElement('article');
    autoSheet.className = 'a4-sheet auto-page-sheet';
    autoSheet.id = 'auto-sheet-page-2';

    const currentEntity = previewFooterCompany ? previewFooterCompany.textContent : 'Trescon Global Business Solutions Pvt Ltd';
    const currentAddr = previewFooterAddress ? previewFooterAddress.innerHTML : '';
    const currentLicense = (previewFooterLicense && previewFooterLicense.style.display !== 'none') ? previewFooterLicense.textContent : '';
    const isWatermarkVisible = toggleWatermark && toggleWatermark.checked;

    autoSheet.innerHTML = `
      <div class="top-accent-bar"></div>
      <header class="letter-header" style="padding-bottom:8px;">
        <div class="header-logo-block">
          <img src="brand_assets/10-years-trescon-logo.png" alt="Trescon Logo" style="height:32px;">
        </div>
        <div class="header-meta-block">
          <div style="font-size:0.8rem; color:var(--trescon-slate); font-weight:600;">Continuation Sheet &mdash; Page 2</div>
        </div>
      </header>
      <div class="header-gradient-rule"></div>

      <div class="watermark-overlay ${isWatermarkVisible ? '' : 'hidden-watermark'}"></div>

      <div class="letter-body auto-letter-body" style="margin-top:16px; min-height: 380px;">
      </div>

      <footer class="letter-footer">
        <div class="footer-divider"></div>
        <div class="footer-columns">
          <div class="footer-col-left">
            <p class="footer-company-name">${currentEntity}</p>
            <p class="footer-address">${currentAddr}</p>
            ${currentLicense ? `<p class="footer-license">${currentLicense}</p>` : ''}
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
    page2Children.forEach(child => {
      autoBody.appendChild(child.cloneNode(true));
    });

    // Move signature block to Page 2
    if (sigBlock) {
      const clonedSig = sigBlock.cloneNode(true);
      clonedSig.style.display = 'block';
      autoSheet.insertBefore(clonedSig, autoSheet.querySelector('.letter-footer'));
      sigBlock.style.display = 'none';
    }

    sheetsWrapper.appendChild(autoSheet);
  }

  const iconDate = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#00A5A3" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="contact-icon"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`;
  const iconEmail = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#00A5A3" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="contact-icon"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>`;
  const iconWeb = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#00A5A3" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" class="contact-icon"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`;

  // Update Footer & Header Contacts Function
  function updateFooter() {
    const selectedKey = officePresetSelect.value;
    const formattedDate = formatFormalDate(inputDate.value);

    if (selectedKey === 'custom') {
      customAddressContainer.classList.remove('hidden');
      if (previewFooterCompany) previewFooterCompany.textContent = 'Trescon Global Business Solutions Pvt Ltd';
      if (previewFooterAddress) previewFooterAddress.innerHTML = inputAddress.value || 'Custom Address Line Placeholder';
      if (previewFooterLicense) previewFooterLicense.style.display = 'none';
      if (previewHeaderContacts) {
        previewHeaderContacts.innerHTML = `
          <div class="header-contact-line">${iconDate}<span id="preview-date">Date: ${formattedDate}</span></div>
          <div class="header-contact-line">${iconEmail}<span>info@tresconglobal.com</span></div>
          <div class="header-contact-line">${iconWeb}<span>tresconglobal.com</span></div>
        `;
      }
    } else {
      customAddressContainer.classList.add('hidden');
      const data = ADDRESS_PRESETS[selectedKey];
      if (data) {
        if (previewFooterCompany) previewFooterCompany.textContent = data.entity;
        if (previewFooterAddress) previewFooterAddress.innerHTML = data.address;
        if (previewFooterLicense) {
          if (data.license) {
            previewFooterLicense.textContent = data.license;
            previewFooterLicense.style.display = 'block';
          } else {
            previewFooterLicense.style.display = 'none';
          }
        }
        if (previewHeaderContacts) {
          previewHeaderContacts.innerHTML = `
            <div class="header-contact-line">${iconDate}<span id="preview-date">Date: ${formattedDate}</span></div>
            <div class="header-contact-line">${iconEmail}<span>${data.email}</span></div>
            <div class="header-contact-line">${iconWeb}<span>${data.web}</span></div>
          `;
        }
      }
    }
  }

  // Date Formatting Helper
  function formatFormalDate(dateVal) {
    if (!dateVal) return '';
    const parts = dateVal.split('-');
    if (parts.length === 3) {
      const year = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10);
      const d = new Date(year, month, day);
      return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    }
    return dateVal;
  }

  // Signature & Watermark Elements
  const sigModeRadios = document.querySelectorAll('input[name="sig-mode"]');
  const sigUploadBox = document.getElementById('sig-upload-box');
  const inputSigFile = document.getElementById('input-sig-file');
  const btnClearSig = document.getElementById('btn-clear-sig');
  const previewSigSpace = document.getElementById('preview-signature-space');
  const toggleWatermark = document.getElementById('toggle-watermark');
  const previewWatermark = document.getElementById('preview-watermark');

  // Multi-Page Elements
  const btnTogglePage2 = document.getElementById('btn-toggle-page2');
  const page2EditorBox = document.getElementById('page2-editor-box');
  const inputBodyPage2 = document.getElementById('input-body-page2');
  const sheetsWrapper = document.getElementById('sheets-wrapper');

  let uploadedSigDataUrl = '';
  let page2Active = false;

  // Signature Radio Toggle Handler
  sigModeRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      if (e.target.value === 'digital') {
        sigUploadBox.classList.remove('hidden');
        renderSignature();
      } else {
        sigUploadBox.classList.add('hidden');
        previewSigSpace.innerHTML = '';
      }
    });
  });

  // Render Signature Image
  function renderSignature() {
    const selectedMode = document.querySelector('input[name="sig-mode"]:checked').value;
    if (selectedMode === 'digital' && uploadedSigDataUrl) {
      previewSigSpace.innerHTML = `<img src="${uploadedSigDataUrl}" alt="Digital Signature">`;
    } else {
      previewSigSpace.innerHTML = '';
    }
  }

  // File Upload Event
  inputSigFile.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        uploadedSigDataUrl = event.target.result;
        renderSignature();
      };
      reader.readAsDataURL(file);
    }
  });

  // Clear Signature Event
  btnClearSig.addEventListener('click', () => {
    inputSigFile.value = '';
    uploadedSigDataUrl = '';
    previewSigSpace.innerHTML = '';
  });

  // Watermark Toggle Event
  toggleWatermark.addEventListener('change', () => {
    if (toggleWatermark.checked) {
      previewWatermark.classList.remove('hidden-watermark');
      document.querySelectorAll('.watermark-overlay').forEach(el => el.classList.remove('hidden-watermark'));
    } else {
      previewWatermark.classList.add('hidden-watermark');
      document.querySelectorAll('.watermark-overlay').forEach(el => el.classList.add('hidden-watermark'));
    }
  });

  // Continuation Page Toggle Handler
  btnTogglePage2.addEventListener('click', () => {
    page2Active = !page2Active;
    if (page2Active) {
      page2EditorBox.classList.remove('hidden');
      btnTogglePage2.textContent = '- Remove Continuation Page (Page 2)';
      btnTogglePage2.classList.remove('btn-outline');
      btnTogglePage2.classList.add('btn-secondary');
      if (!inputBodyPage2.value) {
        inputBodyPage2.value = "Continuation of proposal details, timeline breakdowns, and financial deliverables for phase 2 execution.";
      }
      renderPage2Sheet();
    } else {
      page2EditorBox.classList.add('hidden');
      btnTogglePage2.textContent = '+ Add Continuation Page (Page 2)';
      btnTogglePage2.classList.remove('btn-secondary');
      btnTogglePage2.classList.add('btn-outline');
      const page2Sheet = document.getElementById('letterhead-sheet-page2');
      if (page2Sheet) page2Sheet.remove();
    }
  });

  // Render Continuation Page 2 Sheet
  function renderPage2Sheet() {
    let page2Sheet = document.getElementById('letterhead-sheet-page2');
    if (!page2Sheet) {
      page2Sheet = document.createElement('article');
      page2Sheet.className = 'a4-sheet';
      page2Sheet.id = 'letterhead-sheet-page2';
      sheetsWrapper.appendChild(page2Sheet);
    }

    const currentEntity = previewFooterCompany ? previewFooterCompany.textContent : 'Trescon Global Business Solutions Pvt Ltd';
    const currentAddr = previewFooterAddress.innerHTML;
    const currentLicense = (previewFooterLicense && previewFooterLicense.style.display !== 'none') ? previewFooterLicense.textContent : '';
    const isWatermarkVisible = toggleWatermark.checked;

    page2Sheet.innerHTML = `
      <div class="top-accent-bar"></div>
      <header class="letter-header" style="padding-bottom:8px;">
        <div class="header-logo-block">
          <img src="brand_assets/trescon-logo-white-2025.png" alt="Trescon Logo" style="height:20px; filter:invert(1);">
        </div>
        <div class="header-meta-block">
          <div style="font-size:0.8rem; color:var(--trescon-slate); font-weight:600;">Page 2 of 2</div>
        </div>
      </header>
      <div class="header-gradient-rule"></div>

      <div class="watermark-overlay ${isWatermarkVisible ? '' : 'hidden-watermark'}"></div>

      <div class="letter-body" id="preview-body-page2" style="margin-top:16px;">
        ${renderParagraphsHTML(inputBodyPage2.value)}
      </div>

      <footer class="letter-footer">
        <div class="footer-divider"></div>
        <div class="footer-columns">
          <div class="footer-col-left">
            <p class="footer-company-name">${currentEntity}</p>
            <p class="footer-address">${currentAddr}</p>
            ${currentLicense ? `<p class="footer-license">${currentLicense}</p>` : ''}
          </div>
          <div class="footer-col-right">
            <p class="footer-disclaimer">
              <strong>Disclaimer:</strong> The information shared by Trescon is confidential and intended solely for the recipient. It may not be copied, distributed, or relied upon without prior written consent. Trescon makes no warranties regarding the accuracy or completeness of the content and accepts no liability for any loss arising from its use. &copy; 2025 Trescon. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    `;
  }

  function renderParagraphsHTML(text) {
    if (!text) return '';
    return text.split('\n\n').filter(p => p.trim() !== '').map(p => `<p style="text-align:justify; margin-bottom:10px;">${p.trim()}</p>`).join('');
  }

  inputBodyPage2.addEventListener('input', () => {
    if (page2Active) renderPage2Sheet();
  });

  // Bind Input Event Listeners
  inputDate.addEventListener('change', () => previewDate.textContent = 'Date: ' + formatFormalDate(inputDate.value));
  inputDate.addEventListener('input', () => previewDate.textContent = 'Date: ' + formatFormalDate(inputDate.value));
  inputRecipientName.addEventListener('input', () => previewRecipientName.textContent = inputRecipientName.value);
  inputRecipientTitle.addEventListener('input', () => previewRecipientTitle.textContent = inputRecipientTitle.value);
  inputRecipientAddress.addEventListener('input', () => previewRecipientAddress.textContent = inputRecipientAddress.value);
  inputSubject.addEventListener('input', () => previewSubject.textContent = inputSubject.value);
  inputSalutation.addEventListener('input', () => previewSalutation.textContent = inputSalutation.value);
  inputBody.addEventListener('input', () => renderBodyText(inputBody.value));
  inputSignName.addEventListener('input', () => previewSignName.textContent = inputSignName.value);
  inputSignTitle.addEventListener('input', () => previewSignTitle.textContent = inputSignTitle.value);

  officePresetSelect.addEventListener('change', () => {
    updateFooter();
    if (page2Active) renderPage2Sheet();
  });
  inputAddress.addEventListener('input', () => {
    updateFooter();
    if (page2Active) renderPage2Sheet();
  });
  inputContact.addEventListener('input', () => {
    updateFooter();
    if (page2Active) renderPage2Sheet();
  });

  // Print & PDF Download Actions
  btnPrint.addEventListener('click', () => {
    window.print();
  });

  const btnDownloadPdf = document.getElementById('btn-download-pdf');
  if (btnDownloadPdf) {
    btnDownloadPdf.addEventListener('click', () => {
      const element = document.getElementById('sheets-wrapper');
      const opt = {
        margin:       0,
        filename:     'Trescon_Executive_Letter.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2, useCORS: true, logging: false },
        jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };
      if (window.html2pdf) {
        html2pdf().set(opt).from(element).save();
      } else {
        window.print();
      }
    });
  }

  // Reset Action
  btnReset.addEventListener('click', () => {
    inputDate.value = new Date().toISOString().split('T')[0];
    inputRecipientName.value = "Mr. Alex Turner";
    inputRecipientTitle.value = "Chief Executive Officer, Apex Global Innovations Ltd.";
    inputRecipientAddress.value = "Bengaluru, Karnataka";
    inputSubject.value = "Subject: Formal Proposal & Corporate Partnership Engagement";
    inputSalutation.value = "Dear Mr. Turner,";
    inputSignName.value = "Mohammed Saleem";
    inputSignTitle.value = "Founder & Chairman";
    officePresetSelect.value = "bangalore";

    if (quill) {
      const initialHTML = SAMPLE_BODY.split('\n\n').map(p => `<p>${p.trim()}</p>`).join('');
      quill.root.innerHTML = initialHTML;
    }

    // Reset signature & watermark & page2
    inputSigFile.value = '';
    uploadedSigDataUrl = '';
    previewSigSpace.innerHTML = '';
    document.querySelector('input[name="sig-mode"][value="physical"]').checked = true;
    sigUploadBox.classList.add('hidden');
    toggleWatermark.checked = true;
    previewWatermark.classList.remove('hidden-watermark');

    if (page2Active) {
      btnTogglePage2.click();
    }

    // Trigger updates
    previewDate.textContent = formatFormalDate(inputDate.value);
    previewRecipientName.textContent = inputRecipientName.value;
    previewRecipientTitle.textContent = inputRecipientTitle.value;
    previewRecipientAddress.textContent = inputRecipientAddress.value;
    previewSubject.textContent = inputSubject.value;
    previewSalutation.textContent = inputSalutation.value;
    if (quill) renderBodyText(quill.root.innerHTML);
    previewSignName.textContent = inputSignName.value;
    previewSignTitle.textContent = inputSignTitle.value;
    updateFooter();
  });

  // Initial Sync
  previewDate.textContent = 'Date: ' + formatFormalDate(inputDate.value);
  if (quill) {
    renderBodyText(quill.root.innerHTML);
  } else {
    renderBodyText(SAMPLE_BODY);
  }
  updateFooter();

});
