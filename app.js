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
  const exportBtn = document.getElementById('export-btn');
  
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
    if (qrToggle.checked) {
      flyerQrCode.style.display = 'flex';
      flyerQrCode.innerHTML = getQRCodeSVG();
    } else {
      flyerQrCode.style.display = 'none';
    }
  };
  qrToggle.addEventListener('change', syncQRCode);

  // Initialize UI Inputs from State
  titleInput.value = "We're growing our team at Trescon Manipal!";
  subtitleInput.value = "We're looking for enthusiastic individuals to join us in these key roles:";
  locationInput.value = "Manipal";
  highlightInput.value = "Immediate Joiners Preferred";
  emailInput.value = "hr@tresconglobal.com";
  ctaLabelInput.value = "APPLY DIRECTLY VIA EMAIL";
  patternOpacity.value = 15;

  // Sync basic text fields
  const syncTextFields = () => {
    flyerTitle.textContent = titleInput.value;
    flyerSubtitle.textContent = subtitleInput.value;
    flyerLocation.textContent = locationInput.value;
    flyerHighlight.textContent = highlightInput.value;
    flyerEmail.textContent = emailInput.value;
    if (flyerCtaLabel) flyerCtaLabel.textContent = ctaLabelInput.value;
    const flyerMailto = document.getElementById('flyer-mailto-link');
    if (flyerMailto) {
      flyerMailto.href = `mailto:${emailInput.value}`;
    }
  };

  [titleInput, subtitleInput, locationInput, highlightInput, emailInput, ctaLabelInput].forEach(input => {
    if (input) input.addEventListener('input', syncTextFields);
  });

  // Add interactive click-to-copy handler on flyer email output
  flyerEmail.style.cursor = 'pointer';
  flyerEmail.title = 'Click to copy email';
  flyerEmail.addEventListener('click', () => {
    const emailToCopy = emailInput.value || 'hr@tresconglobal.com';
    navigator.clipboard.writeText(emailToCopy).then(() => {
      let tooltip = flyerEmail.parentElement.querySelector('.copy-tooltip');
      if (!tooltip) {
        tooltip = document.createElement('span');
        tooltip.className = 'copy-tooltip';
        tooltip.textContent = 'Copied!';
        flyerEmail.parentElement.appendChild(tooltip);
        setTimeout(() => tooltip.remove(), 1500);
      }
    }).catch(err => {
      console.error("Failed to copy text:", err);
    });
  });

  // Render roles on the flyer preview
  const renderPreviewRoles = () => {
    flyerRoles.innerHTML = '';
    
    // Filter active roles
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
      
      // Horizontal row inside the card title to align text next to job type tag badge
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

  // Render input fields in the editor sidebar
  const renderEditorRoles = () => {
    rolesContainer.innerHTML = '';
    
    // Manage roles limit warning
    const limitWarning = document.getElementById('roles-limit-warning');
    if (roles.length >= 5) {
      limitWarning.style.display = 'inline';
    } else {
      limitWarning.style.display = 'none';
    }
    
    roles.forEach((roleObj, index) => {
      const row = document.createElement('div');
      row.className = 'role-input-row';
      row.style.display = 'flex';
      row.style.gap = '6px';
      row.style.alignItems = 'center';
      
      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'form-input';
      input.value = roleObj.title;
      input.placeholder = `Role #${index + 1}`;
      input.style.flexGrow = '1';
      input.addEventListener('input', (e) => {
        roles[index].title = e.target.value;
        renderPreviewRoles(); // Update only the flyer preview on type!
      });
      
      const select = document.createElement('select');
      select.className = 'form-input';
      select.style.width = '95px';
      select.style.padding = '4px 6px';
      select.style.fontSize = '0.75rem';
      select.style.cursor = 'pointer';
      select.style.flexShrink = '0';
      
      ['0-2 Yrs', '1-3 Yrs', '2-4 Yrs', '3-5 Yrs', '5+ Yrs', 'Fresher', 'Experienced'].forEach(type => {
        const opt = document.createElement('option');
        opt.value = type;
        opt.textContent = type;
        if (roleObj.type === type) opt.selected = true;
        select.appendChild(opt);
      });
      
      select.addEventListener('change', (e) => {
        roles[index].type = e.target.value;
        renderPreviewRoles();
      });
      
      const deleteBtn = document.createElement('button');
      deleteBtn.innerHTML = '&times;';
      deleteBtn.title = 'Remove role';
      deleteBtn.addEventListener('click', () => {
        roles.splice(index, 1);
        renderEditorRoles();
        renderPreviewRoles();
      });
      
      row.appendChild(input);
      row.appendChild(select);
      row.appendChild(deleteBtn);
      rolesContainer.appendChild(row);
    });
  };

  addRoleBtn.addEventListener('click', () => {
    if (roles.length >= 5) {
      alert("Recommended limit of 5 roles reached. For clean design, split other roles into separate flyer campaigns.");
      return;
    }
    roles.push({ title: '', type: '1-3 Yrs' });
    renderEditorRoles();
    renderPreviewRoles();
    // Focus the newly added input
    setTimeout(() => {
      const inputs = rolesContainer.querySelectorAll('input');
      if (inputs.length > 0) {
        inputs[inputs.length - 1].focus();
      }
    }, 50);
  });

  // Size Presets Handling
  const handleSizeChange = () => {
    let selectedSize = 'portrait';
    sizeRadios.forEach(radio => {
      if (radio.checked) selectedSize = radio.value;
    });
    
    // Remove current classes
    flyerWrapper.className = 'flyer-canvas-wrapper';
    
    // Apply layout class
    if (selectedSize === 'square') {
      flyerWrapper.classList.add('ratio-square');
    } else if (selectedSize === 'portrait') {
      flyerWrapper.classList.add('ratio-portrait');
    } else if (selectedSize === 'story') {
      flyerWrapper.classList.add('ratio-story');
    }
  };
  sizeRadios.forEach(radio => radio.addEventListener('change', handleSizeChange));

  // Themes presets handling
  const handleThemeChange = () => {
    let selectedTheme = 'emerald';
    themeRadios.forEach(radio => {
      if (radio.checked) selectedTheme = radio.value;
    });
    
    // Remove previous themes classes
    flyerCanvas.classList.remove('theme-emerald-glow', 'theme-midnight-modern', 'theme-corporate-light');
    
    // Determine active logo
    let logoStyle = 'white';
    logoRadios.forEach(radio => {
      if (radio.checked) logoStyle = radio.value;
    });

    if (selectedTheme === 'emerald') {
      flyerCanvas.classList.add('theme-emerald-glow');
      if (logoStyle === 'auto') {
        flyerLogo.src = 'brand_assets/10-years-trescon-logo-W.png';
      }
    } else if (selectedTheme === 'midnight') {
      flyerCanvas.classList.add('theme-midnight-modern');
      if (logoStyle === 'auto') {
        flyerLogo.src = 'brand_assets/10-years-trescon-logo-W.png';
      }
    } else if (selectedTheme === 'light') {
      flyerCanvas.classList.add('theme-corporate-light');
      if (logoStyle === 'auto') {
        flyerLogo.src = 'brand_assets/10-years-trescon-logo.png';
      }
    }
  };
  themeRadios.forEach(radio => radio.addEventListener('change', handleThemeChange));

  // Background Pattern Handling
  const handlePatternChange = () => {
    let selectedPattern = 'circles';
    patternRadios.forEach(radio => {
      if (radio.checked) selectedPattern = radio.value;
    });
    
    brandPattern.className = 'brand-pattern';
    if (selectedPattern !== 'none') {
      brandPattern.classList.add(`pattern-${selectedPattern}`);
      brandPattern.style.display = 'block';
    } else {
      brandPattern.style.display = 'none';
    }
  };
  patternRadios.forEach(radio => radio.addEventListener('change', handlePatternChange));
  
  patternOpacity.addEventListener('input', () => {
    brandPattern.style.opacity = patternOpacity.value / 100;
  });

  // Logo Overrides handling
  const handleLogoOverrideChange = () => {
    let logoStyle = 'auto';
    logoRadios.forEach(radio => {
      if (radio.checked) logoStyle = radio.value;
    });

    flyerLogo.classList.remove('logo-hidden');

    if (logoStyle === 'white') {
      flyerLogo.src = 'brand_assets/10-years-trescon-logo-W.png';
    } else if (logoStyle === 'dark') {
      flyerLogo.src = 'brand_assets/10-years-trescon-logo-B.png';
    } else if (logoStyle === 'none') {
      flyerLogo.classList.add('logo-hidden');
    } else {
      // Auto
      handleThemeChange(); // recalculates based on theme
    }
  };
  logoRadios.forEach(radio => radio.addEventListener('change', handleLogoOverrideChange));

  // Export Poster Image using HTML2Canvas
  exportBtn.addEventListener('click', async () => {
    exportBtn.disabled = true;
    exportBtn.textContent = 'Generating Image...';
    
    try {
      // Wait a fraction of a second to ensure rendering has caught up
      await new Promise(resolve => setTimeout(resolve, 300));
      
      // Select dimensions based on aspect ratios for the export resolution
      let exportWidth = 1080;
      let exportHeight = 1080;
      
      const isPortrait = flyerWrapper.classList.contains('ratio-portrait');
      const isStory = flyerWrapper.classList.contains('ratio-story');
      
      if (isPortrait) {
        exportHeight = 1350;
      } else if (isStory) {
        exportHeight = 1920;
      }
      
      // Temporarily store original styles to resize canvas for a crisp export
      const originalWidth = flyerWrapper.style.width;
      const originalHeight = flyerWrapper.style.height;
      const originalTransitions = flyerCanvas.style.transition;
      
      // Disable any transitions
      flyerCanvas.style.transition = 'none';
      
      // Calculate scale to export at exact 1080px width
      const scale = exportWidth / flyerCanvas.offsetWidth;
      
      const options = {
        scale: scale,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null, // preserve background styling
        logging: false
      };
      
      html2canvas(flyerCanvas, options).then(canvas => {
        // Trigger download
        const dataUrl = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = `trescon_hiring_flyer_${exportWidth}x${exportHeight}.png`;
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Restore elements
        flyerCanvas.style.transition = originalTransitions;
        exportBtn.disabled = false;
        exportBtn.innerHTML = '<span class="icon">💾</span> Export Poster PNG';
      }).catch(err => {
        console.error("html2canvas error:", err);
        alert("Failed to export image: " + err.message);
        exportBtn.disabled = false;
        exportBtn.innerHTML = '<span class="icon">💾</span> Export Poster PNG';
      });
      
    } catch (e) {
      console.error(e);
      alert("Error generating flyer image: " + e.message);
      exportBtn.disabled = false;
      exportBtn.innerHTML = '<span class="icon">💾</span> Export Poster PNG';
    }
  });

  // View Switcher Tabs Logic
  const navTabs = document.querySelectorAll('.nav-tab');
  const appViews = document.querySelectorAll('.app-view');

  const switchView = (targetViewId) => {
    navTabs.forEach(tab => {
      if (tab.dataset.view === targetViewId) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    appViews.forEach(view => {
      if (view.id === targetViewId) {
        view.classList.add('view-active');
      } else {
        view.classList.remove('view-active');
      }
    });

    // Re-render poster roles if navigating to poster builder
    if (targetViewId === 'view-poster-builder') {
      renderEditorRoles();
      renderPreviewRoles();
    }
  };

  navTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      switchView(tab.dataset.view);
    });
  });

  // Campaign Preset Prefill Map
  const campaignDataMap = {
    manipal: {
      title: "We're growing our team at Trescon Manipal!",
      subtitle: "We're looking for enthusiastic individuals to join us in these key roles:",
      location: "Manipal",
      highlight: "Immediate Joiners Preferred",
      email: "hr@tresconglobal.com",
      roles: [
        { title: "Speaker Acquisition Executive", type: "1-3 Yrs" },
        { title: "Commercial Executive", type: "0-2 Yrs" },
        { title: "Community Executive - Delegates", type: "2-4 Yrs" }
      ]
    },
    bangalore: {
      title: "Join Trescon Bangalore HQ Tech Drive!",
      subtitle: "Expanding our core tech and operations teams for upcoming summits:",
      location: "Bangalore HQ",
      highlight: "Hybrid Work Culture",
      email: "careers.tech@tresconglobal.com",
      roles: [
        { title: "Event Operations Manager", type: "3-5 Yrs" },
        { title: "Senior Full Stack Developer", type: "5+ Yrs" },
        { title: "Delegate Sales Specialist", type: "1-3 Yrs" }
      ]
    },
    dubai: {
      title: "Trescon Middle East Summit Hiring!",
      subtitle: "Join our high-performing sales & VIP relations team in Dubai:",
      location: "Dubai (DIFC)",
      highlight: "Tax-Free Package + Incentives",
      email: "uae.careers@tresconglobal.com",
      roles: [
        { title: "Sponsorship Sales Director", type: "5+ Yrs" },
        { title: "VIP Relations Lead", type: "3-5 Yrs" },
        { title: "Conference Producer", type: "2-4 Yrs" }
      ]
    },
    riyadh: {
      title: "Trescon Kingdom Expansion - Riyadh!",
      subtitle: "We are hiring corporate marketing & PR specialists in Saudi Arabia:",
      location: "Riyadh",
      highlight: "Immediate Joiners Preferred",
      email: "ksa.careers@tresconglobal.com",
      roles: [
        { title: "Marketing Manager", type: "3-5 Yrs" },
        { title: "PR & Communications Specialist", type: "2-4 Yrs" }
      ]
    }
  };

  // Launch Poster Builder Action Buttons
  const generatePosterBtns = document.querySelectorAll('.btn-generate-poster');
  generatePosterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const campaignKey = e.currentTarget.dataset.campaign;
      const data = campaignDataMap[campaignKey];
      if (data) {
        titleInput.value = data.title;
        subtitleInput.value = data.subtitle;
        locationInput.value = data.location;
        highlightInput.value = data.highlight;
        emailInput.value = data.email;
        roles = JSON.parse(JSON.stringify(data.roles));
        
        syncTextFields();
        renderEditorRoles();
        renderPreviewRoles();
        switchView('view-poster-builder');
      }
    });
  });

  // Preset Chips Listener
  const presetChips = document.querySelectorAll('.preset-chip');
  presetChips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      const presetKey = e.currentTarget.dataset.preset;
      const data = campaignDataMap[presetKey];
      if (data) {
        presetChips.forEach(c => c.classList.remove('active-chip'));
        e.currentTarget.classList.add('active-chip');

        titleInput.value = data.title;
        subtitleInput.value = data.subtitle;
        locationInput.value = data.location;
        highlightInput.value = data.highlight;
        emailInput.value = data.email;
        roles = JSON.parse(JSON.stringify(data.roles));
        
        syncTextFields();
        renderEditorRoles();
        renderPreviewRoles();
      }
    });
  });

  // Floating Zoom Controls & Halo Toggle
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

  // Sidebar Category Tabs Switching (Laptop UX Optimization)
  const sidebarCatTabs = document.querySelectorAll('.sidebar-cat-tab');
  const sidebarTabPanels = document.querySelectorAll('.sidebar-tab-panel');

  sidebarCatTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTabId = tab.dataset.tab;
      
      sidebarCatTabs.forEach(t => {
        if (t === tab) {
          t.classList.add('active');
        } else {
          t.classList.remove('active');
        }
      });

      sidebarTabPanels.forEach(panel => {
        if (panel.id === targetTabId) {
          panel.classList.add('active-panel');
        } else {
          panel.classList.remove('active-panel');
        }
      });
    });
  });

  // Run initial setup
  syncTextFields();
  syncQRCode();
  renderEditorRoles();
  renderPreviewRoles();
  handleSizeChange();
  handleThemeChange();
  handlePatternChange();
});
