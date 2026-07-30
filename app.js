document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const flyerCanvas = document.getElementById('flyer-canvas');
  const flyerWrapper = document.getElementById('flyer-canvas-wrapper');
  const brandPattern = document.getElementById('brand-pattern');
  const flyerLogo = document.getElementById('flyer-logo');
  
  // Inputs
  const titleInput = document.getElementById('title-input');
  const subtitleInput = document.getElementById('subtitle-input');
  const locationInput = document.getElementById('location-input');
  const highlightInput = document.getElementById('highlight-input');
  const emailInput = document.getElementById('email-input');
  const ctaLabelInput = document.getElementById('cta-label-input');
  const patternOpacity = document.getElementById('pattern-opacity');
  const addRoleBtn = document.getElementById('add-role-btn');
  const rolesContainer = document.getElementById('roles-input-container');
  
  // Dynamic Outputs on Flyer
  const flyerTitle = document.getElementById('flyer-title-text');
  const flyerSubtitle = document.getElementById('flyer-subtitle-text');
  const flyerRoles = document.getElementById('flyer-roles-list');
  const flyerLocation = document.getElementById('flyer-location-text');
  const flyerHighlight = document.getElementById('flyer-highlight-text');
  const flyerEmail = document.getElementById('flyer-email-text');
  const flyerCtaLabel = document.getElementById('flyer-cta-label-text');
  
  // Radio groups
  const sizeRadios = document.getElementsByName('size-preset');
  const themeRadios = document.getElementsByName('theme-preset');
  const patternRadios = document.getElementsByName('pattern-preset');
  const logoRadios = document.getElementsByName('logo-preset');

  // Experience level options list
  const expOptions = ['0-2 Yrs', '1-3 Yrs', '2-4 Yrs', '3-5 Yrs', '5+ Yrs', 'Fresher', 'Experienced'];

  // Helper function to safely escape HTML string values
  const escapeHtml = (str) => {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  };

  // Pre-configured default roles with metadata experience levels
  let roles = [
    { title: "Speaker Acquisition Executive", type: "1-3 Yrs" },
    { title: "Commercial Executive", type: "0-2 Yrs" },
    { title: "Community Executive - Delegates", type: "2-4 Yrs" }
  ];

  // Real-time synchronization function for all basic text inputs with fallbacks
  const syncTextFields = () => {
    const defaultTitle = "We're growing our team at Trescon Manipal!";
    const defaultSubtitle = "We're looking for enthusiastic individuals to join us in these key roles:";
    const defaultLocation = "Manipal";
    const defaultHighlight = "Immediate Joiners Preferred";
    const defaultEmail = "hr@tresconglobal.com";
    const defaultCtaLabel = "APPLY DIRECTLY VIA EMAIL";

    if (titleInput && flyerTitle) {
      flyerTitle.textContent = titleInput.value.trim() !== '' ? titleInput.value : defaultTitle;
    }
    if (subtitleInput && flyerSubtitle) {
      flyerSubtitle.textContent = subtitleInput.value.trim() !== '' ? subtitleInput.value : defaultSubtitle;
    }
    if (locationInput && flyerLocation) {
      flyerLocation.textContent = locationInput.value.trim() !== '' ? locationInput.value : defaultLocation;
    }
    if (highlightInput && flyerHighlight) {
      flyerHighlight.textContent = highlightInput.value.trim() !== '' ? highlightInput.value : defaultHighlight;
    }
    if (emailInput && flyerEmail) {
      flyerEmail.textContent = emailInput.value.trim() !== '' ? emailInput.value : defaultEmail;
    }
    if (ctaLabelInput && flyerCtaLabel) {
      flyerCtaLabel.textContent = ctaLabelInput.value.trim() !== '' ? ctaLabelInput.value : defaultCtaLabel;
    }
    
    const flyerMailto = document.getElementById('flyer-mailto-link');
    if (flyerMailto && emailInput) {
      const activeEmail = emailInput.value.trim() !== '' ? emailInput.value : defaultEmail;
      flyerMailto.href = `mailto:${activeEmail}`;
    }
  };

  // Bind immediate real-time input event listeners to every text field
  [titleInput, subtitleInput, locationInput, highlightInput, emailInput, ctaLabelInput].forEach(input => {
    if (input) {
      input.addEventListener('input', () => {
        syncTextFields();
        triggerAutoSavePulse();
      });
    }
  });

  // Render roles on the flyer preview
  const renderPreviewRoles = () => {
    if (!flyerRoles || !flyerCanvas) return;
    flyerRoles.innerHTML = '';
    
    // Filter active non-empty roles
    const activeRoles = roles.filter(roleObj => roleObj.title.trim() !== '');
    
    // Dynamic Auto Layout Adjustments based on role count
    flyerCanvas.classList.remove('canvas-roles-3', 'canvas-roles-4', 'canvas-roles-5');
    if (activeRoles.length <= 3) {
      flyerCanvas.classList.add('canvas-roles-3');
    } else if (activeRoles.length === 4) {
      flyerCanvas.classList.add('canvas-roles-4');
    } else {
      flyerCanvas.classList.add('canvas-roles-5');
    }
    
    activeRoles.forEach((roleObj, index) => {
      const roleCard = document.createElement('div');
      roleCard.className = 'role-card';
      
      const numberBadge = document.createElement('div');
      numberBadge.className = 'role-card-number';
      numberBadge.textContent = `0${index + 1}`;
      
      const info = document.createElement('div');
      info.className = 'role-card-info';
      
      const titleRow = document.createElement('div');
      titleRow.className = 'role-title-row';
      
      const title = document.createElement('div');
      title.className = 'role-card-title';
      title.textContent = roleObj.title;
      
      const typeBadge = document.createElement('span');
      typeBadge.className = 'role-type-badge';
      typeBadge.textContent = roleObj.type;
      
      titleRow.appendChild(title);
      titleRow.appendChild(typeBadge);
      
      const chevron = document.createElement('div');
      chevron.className = 'role-card-chevron';
      chevron.innerHTML = '&rarr;';
      
      info.appendChild(titleRow);
      roleCard.appendChild(numberBadge);
      roleCard.appendChild(info);
      roleCard.appendChild(chevron);
      
      flyerRoles.appendChild(roleCard);
    });
  };

  // Helper UI updater for roles limit tag
  const updateRolesLimitUI = () => {
    const limitWarning = document.getElementById('roles-limit-warning');
    if (limitWarning) {
      limitWarning.style.display = roles.length >= 5 ? 'inline' : 'none';
    }
  };

  // Render input fields in the editor sidebar with real-time sync
  const renderEditorRoles = () => {
    if (!rolesContainer) return;
    rolesContainer.innerHTML = '';
    
    updateRolesLimitUI();

    roles.forEach((roleObj, index) => {
      const row = document.createElement('div');
      row.className = 'role-input-row';
      
      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'form-input role-title-input';
      input.value = roleObj.title;
      input.placeholder = `Role #${index + 1}`;
      input.setAttribute('aria-label', `Job role title ${index + 1}`);
      input.setAttribute('title', roleObj.title);
      input.addEventListener('input', (e) => {
        roles[index].title = e.target.value;
        e.target.setAttribute('title', e.target.value);
        renderPreviewRoles();
        triggerAutoSavePulse();
      });

      const select = document.createElement('select');
      select.className = 'form-input role-exp-select';
      select.setAttribute('aria-label', `Experience requirement for role ${index + 1}`);
      
      expOptions.forEach(type => {
        const opt = document.createElement('option');
        opt.value = type;
        opt.textContent = type;
        if (roleObj.type === type) opt.selected = true;
        select.appendChild(opt);
      });
      
      select.addEventListener('change', (e) => {
        roles[index].type = e.target.value;
        renderPreviewRoles();
        triggerAutoSavePulse();
      });
      
      const deleteBtn = document.createElement('button');
      deleteBtn.className = 'remove-role-btn role-remove-btn';
      deleteBtn.innerHTML = '&times;';
      deleteBtn.setAttribute('aria-label', `Remove role ${index + 1}`);
      deleteBtn.title = 'Remove role';
      deleteBtn.addEventListener('click', () => {
        roles.splice(index, 1);
        renderEditorRoles();
        renderPreviewRoles();
        triggerAutoSavePulse();
      });
      
      row.appendChild(input);
      row.appendChild(select);
      row.appendChild(deleteBtn);
      rolesContainer.appendChild(row);
    });
  };

  if (addRoleBtn) {
    addRoleBtn.addEventListener('click', () => {
      if (roles.length >= 5) {
        alert("Recommended limit of 5 roles reached. For clean design, split extra roles into separate flyer campaigns.");
        return;
      }
      roles.push({ title: '', type: '1-3 Yrs' });
      renderEditorRoles();
      renderPreviewRoles();
      setTimeout(() => {
        const inputs = rolesContainer.querySelectorAll('input');
        if (inputs.length > 0) {
          inputs[inputs.length - 1].focus();
        }
      }, 50);
    });
  }

  // Size Presets Handling
  const handleSizeChange = () => {
    let selectedSize = 'portrait';
    sizeRadios.forEach(radio => {
      if (radio.checked) selectedSize = radio.value;
    });
    
    flyerWrapper.className = 'flyer-canvas-wrapper';
    
    if (selectedSize === 'square') {
      flyerWrapper.classList.add('ratio-square');
    } else if (selectedSize === 'portrait') {
      flyerWrapper.classList.add('ratio-portrait');
    } else if (selectedSize === 'story') {
      flyerWrapper.classList.add('ratio-story');
    }
    triggerAutoSavePulse();
  };
  sizeRadios.forEach(radio => radio.addEventListener('change', handleSizeChange));

  // Themes presets handling
  const handleThemeChange = () => {
    let selectedTheme = 'emerald';
    themeRadios.forEach(radio => {
      if (radio.checked) selectedTheme = radio.value;
    });
    
    flyerCanvas.className = 'flyer-canvas';
    
    if (selectedTheme === 'emerald') {
      flyerCanvas.classList.add('theme-emerald-glow');
      if (flyerLogo) flyerLogo.src = 'brand_assets/10-years-trescon-logo-W.png';
    } else if (selectedTheme === 'midnight') {
      flyerCanvas.classList.add('theme-midnight-modern');
      if (flyerLogo) flyerLogo.src = 'brand_assets/10-years-trescon-logo-W.png';
    } else if (selectedTheme === 'light') {
      flyerCanvas.classList.add('theme-corporate-light');
      if (flyerLogo) flyerLogo.src = 'brand_assets/10-years-trescon-logo-B.png';
    }

    renderPreviewRoles();
    triggerAutoSavePulse();
  };
  themeRadios.forEach(radio => radio.addEventListener('change', handleThemeChange));

  // Background pattern presets handling
  const handlePatternChange = () => {
    let selectedPattern = 'circles';
    patternRadios.forEach(radio => {
      if (radio.checked) selectedPattern = radio.value;
    });
    
    brandPattern.className = 'brand-pattern';
    
    if (selectedPattern === 'circles') {
      brandPattern.classList.add('pattern-circles');
    } else if (selectedPattern === 'grid') {
      brandPattern.classList.add('pattern-grid');
    } else if (selectedPattern === 'abstract') {
      brandPattern.classList.add('pattern-abstract');
    }
    triggerAutoSavePulse();
  };
  patternRadios.forEach(radio => radio.addEventListener('change', handlePatternChange));

  // Pattern opacity control slider
  if (patternOpacity && brandPattern) {
    patternOpacity.addEventListener('input', (e) => {
      brandPattern.style.opacity = e.target.value / 100;
      triggerAutoSavePulse();
    });
  }

  // Logo preset handling
  const handleLogoChange = () => {
    let selectedLogo = 'auto';
    logoRadios.forEach(radio => {
      if (radio.checked) selectedLogo = radio.value;
    });
    
    if (selectedLogo === 'auto') {
      let isThemeLight = flyerCanvas.classList.contains('theme-corporate-light');
      flyerLogo.src = isThemeLight ? 'brand_assets/10-years-trescon-logo-B.png' : 'brand_assets/10-years-trescon-logo-W.png';
      flyerLogo.style.display = 'block';
    } else if (selectedLogo === 'white') {
      flyerLogo.src = 'brand_assets/10-years-trescon-logo-W.png';
      flyerLogo.style.display = 'block';
    } else if (selectedLogo === 'dark') {
      flyerLogo.src = 'brand_assets/10-years-trescon-logo-B.png';
      flyerLogo.style.display = 'block';
    } else if (selectedLogo === 'none') {
      flyerLogo.style.display = 'none';
    }
    triggerAutoSavePulse();
  };
  logoRadios.forEach(radio => radio.addEventListener('change', handleLogoChange));

  // High-Res PNG Exporter using html2canvas
  const exportPosterPNG = () => {
    if (typeof html2canvas === 'undefined') {
      alert("PNG Export library is loading. Please try again in a moment.");
      return;
    }

    const currentTheme = Array.from(themeRadios).find(r => r.checked)?.value || 'emerald';
    const currentSize = Array.from(sizeRadios).find(r => r.checked)?.value || 'portrait';
    const filename = `trescon_hiring_flyer_${currentTheme}_${currentSize}.png`;
    
    const originalTransform = flyerWrapper.style.transform;
    flyerWrapper.style.transform = 'none';

    html2canvas(flyerCanvas, {
      scale: 3,
      useCORS: true,
      allowTaint: true,
      backgroundColor: null,
      logging: false
    }).then(canvas => {
      flyerWrapper.style.transform = originalTransform;

      const image = canvas.toDataURL("image/png");
      const link = document.createElement('a');
      link.download = filename;
      link.href = image;
      link.click();
    }).catch(err => {
      flyerWrapper.style.transform = originalTransform;
      console.error("Flyer PNG export failed:", err);
      alert("Could not export PNG automatically. You can right-click the flyer to save image.");
    });
  };

  // Primary Export Listener
  const btnExportTop = document.getElementById('btn-export-top');
  if (btnExportTop) btnExportTop.addEventListener('click', exportPosterPNG);

  // Non-Blocking Form Reset Handler
  const btnResetForm = document.getElementById('btn-reset-form');
  const resetActionContainer = btnResetForm ? btnResetForm.parentElement : null;

  if (btnResetForm && resetActionContainer) {
    btnResetForm.addEventListener('click', () => {
      if (document.getElementById('reset-confirm-box')) return;

      const confirmBox = document.createElement('div');
      confirmBox.id = 'reset-confirm-box';
      confirmBox.className = 'reset-confirm-box';
      confirmBox.innerHTML = `
        <span>Reset fields?</span>
        <button class="btn-confirm-reset" id="btn-confirm-reset-action">Confirm</button>
        <button class="btn-cancel-reset" id="btn-cancel-reset-action">Cancel</button>
      `;

      resetActionContainer.insertBefore(confirmBox, btnResetForm);
      btnResetForm.style.display = 'none';

      document.getElementById('btn-confirm-reset-action').addEventListener('click', () => {
        titleInput.value = "We're growing our team at Trescon Manipal!";
        subtitleInput.value = "We're looking for enthusiastic individuals to join us in these key roles:";
        locationInput.value = "Manipal";
        highlightInput.value = "Immediate Joiners Preferred";
        emailInput.value = "hr@tresconglobal.com";
        ctaLabelInput.value = "APPLY DIRECTLY VIA EMAIL";
        roles = [
          { title: "Speaker Acquisition Executive", type: "1-3 Yrs" },
          { title: "Commercial Executive", type: "0-2 Yrs" },
          { title: "Community Executive - Delegates", type: "2-4 Yrs" }
        ];
        syncTextFields();
        renderEditorRoles();
        renderPreviewRoles();
        confirmBox.remove();
        btnResetForm.style.display = 'inline-flex';
        triggerAutoSavePulse("Form reset to defaults");
      });

      document.getElementById('btn-cancel-reset-action').addEventListener('click', () => {
        confirmBox.remove();
        btnResetForm.style.display = 'inline-flex';
      });
    });
  }

  // Fullscreen Preview Toggle
  const btnToggleFullscreen = document.getElementById('btn-toggle-fullscreen');
  const studioAppContainer = document.getElementById('studio-app-container');
  if (btnToggleFullscreen && studioAppContainer) {
    btnToggleFullscreen.addEventListener('click', () => {
      if (!document.fullscreenElement) {
        studioAppContainer.requestFullscreen().catch(err => {
          console.log(`Fullscreen error: ${err.message}`);
        });
      } else {
        document.exitFullscreen();
      }
    });
  }

  // Floating Zoom Controls
  let currentZoom = 100;
  const zoomText = document.getElementById('zoom-value-text');
  const btnZoomIn = document.getElementById('btn-zoom-in');
  const btnZoomOut = document.getElementById('btn-zoom-out');
  const btnZoomFit = document.getElementById('btn-zoom-fit');

  const updateZoom = (newZoom) => {
    currentZoom = Math.min(Math.max(newZoom, 60), 160);
    if (zoomText) zoomText.textContent = `${currentZoom}%`;
    if (flyerWrapper) {
      flyerWrapper.style.transform = `scale(${currentZoom / 100})`;
      flyerWrapper.style.transformOrigin = 'center center';
    }
  };

  if (btnZoomIn) btnZoomIn.addEventListener('click', () => updateZoom(currentZoom + 10));
  if (btnZoomOut) btnZoomOut.addEventListener('click', () => updateZoom(currentZoom - 10));
  if (btnZoomFit) btnZoomFit.addEventListener('click', () => updateZoom(100));

  // Auto-Save Status Pulse Feedback
  const statusText = document.getElementById('status-text');
  let saveTimer = null;
  function triggerAutoSavePulse(msg = "All changes saved") {
    if (!statusText) return;
    statusText.textContent = "Saving...";
    statusText.style.color = "var(--color-lime)";
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      statusText.textContent = msg;
      statusText.style.color = "#A1A1AA";
    }, 600);
  }

  // Accordion Collapsible Sections Interaction
  const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach(item => {
    const headerBtn = item.querySelector('.accordion-header');
    if (headerBtn) {
      headerBtn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        
        accordionItems.forEach(otherItem => {
          otherItem.classList.remove('open');
          const otherHeader = otherItem.querySelector('.accordion-header');
          if (otherHeader) otherHeader.setAttribute('aria-expanded', 'false');
        });

        if (!isOpen) {
          item.classList.add('open');
          headerBtn.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // Run initial state render & synchronization
  syncTextFields();
  renderEditorRoles();
  renderPreviewRoles();
});
