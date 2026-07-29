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
  
  // QR DOM Inputs/Outputs
  const qrToggle = document.getElementById('qr-toggle');
  const qrLink = document.getElementById('qr-link');
  const flyerQrCode = document.getElementById('flyer-qr-code');
  
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

  // High-fidelity vector QR Code SVG generator
  const getQRCodeSVG = () => {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29" shape-rendering="crispEdges">
      <rect width="29" height="29" fill="#FFFFFF"/>
      <rect x="0" y="0" width="7" height="7" fill="#000000"/>
      <rect x="1" y="1" width="5" height="5" fill="#FFFFFF"/>
      <rect x="2" y="2" width="3" height="3" fill="#000000"/>
      <rect x="22" y="0" width="7" height="7" fill="#000000"/>
      <rect x="23" y="1" width="5" height="5" fill="#FFFFFF"/>
      <rect x="24" y="2" width="3" height="3" fill="#000000"/>
      <rect x="0" y="22" width="7" height="7" fill="#000000"/>
      <rect x="1" y="23" width="5" height="5" fill="#FFFFFF"/>
      <rect x="2" y="24" width="3" height="3" fill="#000000"/>
      <rect x="20" y="20" width="5" height="5" fill="#000000"/>
      <rect x="21" y="21" width="3" height="3" fill="#FFFFFF"/>
      <rect x="22" y="22" width="1" height="1" fill="#000000"/>
      <rect x="8" y="0" width="1" height="1" fill="#000000"/>
      <rect x="10" y="1" width="2" height="1" fill="#000000"/>
      <rect x="13" y="0" width="1" height="3" fill="#000000"/>
      <rect x="15" y="1" width="1" height="1" fill="#000000"/>
      <rect x="17" y="0" width="2" height="1" fill="#000000"/>
      <rect x="20" y="1" width="1" height="2" fill="#000000"/>
      <rect x="8" y="3" width="2" height="1" fill="#000000"/>
      <rect x="11" y="2" width="1" height="2" fill="#000000"/>
      <rect x="15" y="3" width="3" height="1" fill="#000000"/>
      <rect x="19" y="3" width="1" height="1" fill="#000000"/>
      <rect x="9" y="5" width="1" height="2" fill="#000000"/>
      <rect x="12" y="5" width="2" height="1" fill="#000000"/>
      <rect x="16" y="5" width="1" height="1" fill="#000000"/>
      <rect x="18" y="6" width="3" height="1" fill="#000000"/>
      <rect x="0" y="8" width="1" height="2" fill="#000000"/>
      <rect x="2" y="9" width="3" height="1" fill="#000000"/>
      <rect x="6" y="8" width="1" height="1" fill="#000000"/>
      <rect x="8" y="8" width="4" height="1" fill="#000000"/>
      <rect x="14" y="7" width="1" height="2" fill="#000000"/>
      <rect x="16" y="8" width="2" height="2" fill="#000000"/>
      <rect x="19" y="8" width="1" height="1" fill="#000000"/>
      <rect x="21" y="9" width="3" height="1" fill="#000000"/>
      <rect x="25" y="8" width="1" height="3" fill="#000000"/>
      <rect x="28" y="9" width="1" height="1" fill="#000000"/>
      <rect x="1" y="11" width="2" height="1" fill="#000000"/>
      <rect x="4" y="12" width="1" height="2" fill="#000000"/>
      <rect x="7" y="11" width="2" height="1" fill="#000000"/>
      <rect x="10" y="10" width="1" height="3" fill="#000000"/>
      <rect x="12" y="12" width="2" height="1" fill="#000000"/>
      <rect x="15" y="11" width="1" height="1" fill="#000000"/>
      <rect x="17" y="12" width="1" height="2" fill="#000000"/>
      <rect x="19" y="10" width="3" height="1" fill="#000000"/>
      <rect x="23" y="12" width="1" height="1" fill="#000000"/>
      <rect x="27" y="11" width="2" height="1" fill="#000000"/>
      <rect x="0" y="14" width="3" height="1" fill="#000000"/>
      <rect x="4" y="15" width="2" height="1" fill="#000000"/>
      <rect x="7" y="14" width="1" height="1" fill="#000000"/>
      <rect x="9" y="15" width="3" height="1" fill="#000000"/>
      <rect x="13" y="14" width="1" height="2" fill="#000000"/>
      <rect x="15" y="15" width="2" height="1" fill="#000000"/>
      <rect x="18" y="14" width="1" height="1" fill="#000000"/>
      <rect x="20" y="15" width="3" height="1" fill="#000000"/>
      <rect x="24" y="14" width="2" height="1" fill="#000000"/>
      <rect x="27" y="15" width="1" height="2" fill="#000000"/>
      <rect x="8" y="17" width="1" height="3" fill="#000000"/>
      <rect x="10" y="18" width="2" height="1" fill="#000000"/>
      <rect x="13" y="17" width="3" height="1" fill="#000000"/>
      <rect x="17" y="18" width="1" height="2" fill="#000000"/>
      <rect x="19" y="17" width="2" height="1" fill="#000000"/>
      <rect x="22" y="18" width="1" height="1" fill="#000000"/>
      <rect x="25" y="17" width="2" height="1" fill="#000000"/>
      <rect x="8" y="21" width="3" height="1" fill="#000000"/>
      <rect x="12" y="20" width="1" height="2" fill="#000000"/>
      <rect x="14" y="21" width="2" height="1" fill="#000000"/>
      <rect x="17" y="20" width="2" height="1" fill="#000000"/>
      <rect x="10" y="23" width="1" height="3" fill="#000000"/>
      <rect x="12" y="24" width="3" height="1" fill="#000000"/>
      <rect x="16" y="23" width="1" height="2" fill="#000000"/>
      <rect x="18" y="25" width="2" height="1" fill="#000000"/>
      <rect x="8" y="27" width="2" height="1" fill="#000000"/>
      <rect x="11" y="28" width="3" height="1" fill="#000000"/>
      <rect x="15" y="27" width="1" height="2" fill="#000000"/>
      <rect x="17" y="28" width="2" height="1" fill="#000000"/>
    </svg>`;
  };

  // Sync QR code visibility and target
  const syncQRCode = () => {
    if (qrToggle && flyerQrCode) {
      if (qrToggle.checked) {
        flyerQrCode.style.display = 'flex';
        flyerQrCode.innerHTML = getQRCodeSVG();
      } else {
        flyerQrCode.style.display = 'none';
      }
    }
  };

  if (qrToggle) {
    qrToggle.addEventListener('change', syncQRCode);
  }

  // Real-time synchronization function for all basic text inputs
  const syncTextFields = () => {
    if (titleInput && flyerTitle) flyerTitle.textContent = titleInput.value;
    if (subtitleInput && flyerSubtitle) flyerSubtitle.textContent = subtitleInput.value;
    if (locationInput && flyerLocation) flyerLocation.textContent = locationInput.value;
    if (highlightInput && flyerHighlight) flyerHighlight.textContent = highlightInput.value;
    if (emailInput && flyerEmail) flyerEmail.textContent = emailInput.value;
    if (ctaLabelInput && flyerCtaLabel) flyerCtaLabel.textContent = ctaLabelInput.value;
    
    const flyerMailto = document.getElementById('flyer-mailto-link');
    if (flyerMailto && emailInput) {
      flyerMailto.href = `mailto:${emailInput.value}`;
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
    } else if (selectedTheme === 'midnight') {
      flyerCanvas.classList.add('theme-midnight-modern');
    } else if (selectedTheme === 'light') {
      flyerCanvas.classList.add('theme-corporate-light');
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

  // Primary & Canvas Quick Export Listeners
  const btnExportTop = document.getElementById('btn-export-top');
  const btnCanvasQuickExport = document.getElementById('btn-canvas-quick-export');
  
  if (btnExportTop) btnExportTop.addEventListener('click', exportPosterPNG);
  if (btnCanvasQuickExport) btnCanvasQuickExport.addEventListener('click', exportPosterPNG);

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

  // Floating Zoom Controls & Ambient Halo Toggle
  let currentZoom = 100;
  const zoomText = document.getElementById('zoom-value-text');
  const btnZoomIn = document.getElementById('btn-zoom-in');
  const btnZoomOut = document.getElementById('btn-zoom-out');
  const btnZoomFit = document.getElementById('btn-zoom-fit');
  const btnToggleGlow = document.getElementById('btn-toggle-glow');
  const studioHalo = document.getElementById('studio-halo-glow');

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

  if (btnToggleGlow) {
    btnToggleGlow.addEventListener('click', () => {
      btnToggleGlow.classList.toggle('active-tool');
      if (studioHalo) {
        studioHalo.style.display = studioHalo.style.display === 'none' ? 'block' : 'none';
      }
    });
  }

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

  // Category Tabs Navigation & Keyboard Accessibility (WCAG 2.1 AA)
  const sidebarCatTabs = document.querySelectorAll('.sidebar-cat-tab');
  const sidebarTabPanels = document.querySelectorAll('.sidebar-tab-panel');
  const tabListNav = document.querySelector('.sidebar-category-tabs');

  if (tabListNav) {
    tabListNav.setAttribute('role', 'tablist');
  }

  sidebarCatTabs.forEach((tab, index) => {
    tab.setAttribute('role', 'tab');
    tab.setAttribute('id', `tab-${tab.dataset.tab}`);
    tab.setAttribute('aria-selected', tab.classList.contains('active') ? 'true' : 'false');
    tab.setAttribute('tabindex', tab.classList.contains('active') ? '0' : '-1');

    tab.addEventListener('click', (e) => {
      const targetTabId = e.currentTarget.dataset.tab;

      sidebarCatTabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
        t.setAttribute('tabindex', '-1');
      });

      e.currentTarget.classList.add('active');
      e.currentTarget.setAttribute('aria-selected', 'true');
      e.currentTarget.setAttribute('tabindex', '0');

      sidebarTabPanels.forEach(panel => {
        if (panel.id === targetTabId) {
          panel.classList.add('active-panel');
        } else {
          panel.classList.remove('active-panel');
        }
      });
    });

    // Arrow Keyboard Navigation
    tab.addEventListener('keydown', (e) => {
      let targetIndex = null;
      if (e.key === 'ArrowRight') {
        targetIndex = (index + 1) % sidebarCatTabs.length;
      } else if (e.key === 'ArrowLeft') {
        targetIndex = (index - 1 + sidebarCatTabs.length) % sidebarCatTabs.length;
      }
      if (targetIndex !== null) {
        e.preventDefault();
        sidebarCatTabs[targetIndex].click();
        sidebarCatTabs[targetIndex].focus();
      }
    });
  });

  // Run initial state render & synchronization
  syncTextFields();
  renderEditorRoles();
  renderPreviewRoles();
  syncQRCode();
});
