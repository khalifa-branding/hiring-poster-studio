/* ==========================================================================
   TRESCON PITCH STUDIO - PRESENTATION DESIGNER ENGINE (CANVA CLONE)
   ========================================================================== */

// 1. DATA MODEL: The 14 slides represented as absolutely-positioned element vectors
let slideData = [
  {
    id: 1,
    number: "01.",
    title: "Cover Page",
    theme: "dark",
    layout: "cover",
    visible: true,
    elements: [
      { id: "el-1-logo", type: "logo", left: "6%", top: "9%", width: "16%", height: "10%", content: "brand_assets/trescon-logo-white-2025.png" },
      { id: "el-1-div", type: "divider", left: "40.3%", top: "0%", width: "2px", height: "100%", style: { backgroundColor: "#00A5A3" } },
      { id: "el-1-node", type: "node", left: "40%", top: "28%", width: "8px", height: "8px", style: { backgroundColor: "#C0F43C" } },
      { id: "el-1-card-ph", type: "card", left: "40.5%", top: "0%", width: "59.5%", height: "100%", style: { backgroundColor: "#1E2124", borderColor: "#00A5A3", borderStyle: "solid", borderWidth: "1.5px" } },
      { id: "el-1-ph-text", type: "text", left: "45%", top: "25%", width: "50%", height: "45%", content: "[ BRAND VISUAL PLACEHOLDER ]\n\nAsset: High-Resolution Event Keynote / Digital Art Graphic\nRecommended Aspect Ratio: 16:9 or Full Height Cover Split\nDouble-click to insert your custom editorial or corporate banner photo here.\n\nDesign Tip: Choose high contrast, dark-themed photography that aligns with Deep Teal and Electric Lime colors.", style: { fontFamily: "Manrope", fontSize: "10px", color: "#E6EFF0", lineHeight: "1.4" } },
      { id: "el-1-title", type: "text", left: "6%", top: "20%", width: "31%", height: "42%", content: "POWERING GLOBAL\nINNOVATION\nTHROUGH HIGH-IMPACT\nBUSINESS EVENTS", style: { fontFamily: "Anek Devanagari", fontSize: "24px", color: "#ffffff", fontWeight: "800", textAlign: "left", lineHeight: "1.15" } },
      { id: "el-1-sub", type: "text", left: "6%", top: "64%", width: "31%", height: "18%", content: "Connecting Businesses with Opportunities across 120+ countries — from concept to measurable outcomes.\n\nGlobal Business Events & Services", style: { fontFamily: "Manrope", fontSize: "11px", color: "#C0F43C", fontWeight: "600", textAlign: "left", lineHeight: "1.3" } },
      { id: "el-1-meta", type: "text", left: "6%", top: "86%", width: "31%", height: "6%", content: "GLOBAL BUSINESS EVENTS & SERVICES COMPANY  |  DUBAI • BANGALORE • GLOBAL", style: { fontFamily: "Anek Devanagari", fontSize: "8px", color: "#E6EFF0", fontWeight: "700", textAlign: "left" } }
    ]
  },
  {
    id: 2,
    number: "02.",
    title: "Who We Are",
    theme: "light",
    layout: "who-we-are",
    visible: true,
    elements: [
      { id: "el-2-hdr", type: "header", left: "6%", top: "5%", width: "88%", height: "8%" },
      { id: "el-2-title", type: "text", left: "6%", top: "16%", width: "44%", height: "18%", content: "Your Strategic Partner for Business Growth", style: { fontFamily: "Anek Devanagari", fontSize: "24px", color: "#01373D", fontWeight: "700", lineHeight: "1.2" } },
      { id: "el-2-body", type: "text", left: "6%", top: "37%", width: "44%", height: "22%", content: "Trescon is a global business events and services company connecting organisations with decision-makers, governments, investors, and industry leaders worldwide.", style: { fontFamily: "Manrope", fontSize: "11.0px", color: "#464D53", lineHeight: "1.35" } },
      { id: "el-2-card1", type: "card", left: "54%", top: "16%", width: "40%", height: "24%", style: { backgroundColor: "#E6EFF0", borderColor: "#00A5A3", borderStyle: "solid", borderWidth: "1.5px", borderRadius: "6px" } },
      { id: "el-2-card1-text", type: "text", left: "56%", top: "18%", width: "36%", height: "20%", content: "Since 2016, we have been enabling technology adoption, fostering strategic partnerships, and delivering measurable business outcomes through high-impact events, managed conferences, and bespoke engagements.", style: { fontFamily: "Manrope", fontSize: "9.5px", color: "#01373D", lineHeight: "1.25" } },
      { id: "el-2-card2", type: "card", left: "54%", top: "43%", width: "40%", height: "18%", style: { backgroundColor: "#01373D", borderRadius: "6px" } },
      { id: "el-2-card2-text", type: "text", left: "56%", top: "45%", width: "36%", height: "14%", content: "One Partner. End-to-End Execution. Global Reach.\nStrategy to ROI — managed under one roof", style: { fontFamily: "Anek Devanagari", fontSize: "12.5px", color: "#ffffff", fontWeight: "700", lineHeight: "1.2" } },
      { id: "el-2-card-ph", type: "card", left: "0%", top: "65%", width: "100%", height: "35%", style: { backgroundColor: "#01373D" } },
      { id: "el-2-ph-border", type: "divider", left: "0%", top: "65%", width: "100%", height: "4px", style: { backgroundColor: "#C0F43C" } },
      { id: "el-2-ph-text", type: "text", left: "6%", top: "69%", width: "88%", height: "26%", content: "GLOBAL STRATEGY ROOM\n120+ Markets • Real-time Intelligence\n[ PHOTO PLACEHOLDER: 1920x388 px - Executive Summit Crowds / Onsite Keynote ]", style: { fontFamily: "Anek Devanagari", fontSize: "12.5px", color: "#ffffff", fontWeight: "700" } }
    ]
  },
  {
    id: 3,
    number: "03.",
    title: "Trescon at a Glance",
    theme: "dark",
    layout: "at-a-glance",
    visible: true,
    elements: [
      { id: "el-3-hdr", type: "header", left: "6%", top: "5%", width: "88%", height: "8%" },
      { id: "el-3-title", type: "text", left: "6%", top: "18%", width: "38%", height: "12%", content: "By the Numbers", style: { fontFamily: "Anek Devanagari", fontSize: "28px", color: "#ffffff", fontWeight: "700" } },
      { id: "el-3-body", type: "text", left: "6%", top: "30%", width: "38%", height: "26%", content: "By the Numbers — Measurable Global Impact\n\nTrescon at a glance: Eight years of consistent delivery across governments, enterprises and technology ecosystems.", style: { fontFamily: "Manrope", fontSize: "12.5px", color: "#E6EFF0", lineHeight: "1.3" } },
      { id: "el-3-div", type: "divider", left: "48%", top: "15%", width: "1px", height: "70%", style: { backgroundColor: "#00A5A3" } },
      { id: "el-3-stat1", type: "stat", left: "52%", top: "16%", width: "20%", height: "12%", num: "500+", lbl: "Events Delivered\nAcross 120+ cities" },
      { id: "el-3-stat2", type: "stat", left: "52%", top: "33%", width: "20%", height: "12%", num: "1M+", lbl: "Connections Facilitated\nQualified introductions" },
      { id: "el-3-stat3", type: "stat", left: "52%", top: "50%", width: "20%", height: "12%", num: "250K+", lbl: "C-Level Attendees\nDecision makers" },
      { id: "el-3-stat4", type: "stat", left: "52%", top: "67%", width: "20%", height: "12%", num: "120+", lbl: "Countries Represented\nGlobal network" },
      { id: "el-3-stat5", type: "stat", left: "74%", top: "16%", width: "20%", height: "12%", num: "100+", lbl: "Government Partnerships\nMins. & authorities" },
      { id: "el-3-stat6", type: "stat", left: "74%", top: "33%", width: "20%", height: "12%", num: "5,000+", lbl: "Exhibitors\nEnterprise & startups" },
      { id: "el-3-stat7", type: "stat", left: "74%", top: "50%", width: "20%", height: "12%", num: "3,000+", lbl: "Global Speakers\nIndustry leaders" },
      { id: "el-3-stat8", type: "stat", left: "74%", top: "67%", width: "20%", height: "12%", num: "250+", lbl: "Global Team Members\nEvents, sales, tech" }
    ]
  },
  {
    id: 4,
    number: "04.",
    title: "Why Choose Trescon",
    theme: "light",
    layout: "why-choose-us",
    visible: true,
    elements: [
      { id: "el-4-hdr", type: "header", left: "6%", top: "5%", width: "88%", height: "8%" },
      { id: "el-4-title", type: "text", left: "6%", top: "18%", width: "36%", height: "14%", content: "Why Global Organisations Choose Trescon", style: { fontFamily: "Anek Devanagari", fontSize: "24px", color: "#01373D", fontWeight: "700", lineHeight: "1.1" } },
      { id: "el-4-body", type: "text", left: "6%", top: "34%", width: "36%", height: "24%", content: "From concept to execution, we deliver business outcomes — not just events.\n\n10 interlocked capabilities managing the full event lifecycle under one partner — strategy to measurable ROI.", style: { fontFamily: "Manrope", fontSize: "11.5px", color: "#464D53", lineHeight: "1.35" } },
      { id: "el-4-cta", type: "text", left: "6%", top: "64%", width: "36%", height: "12%", content: "One partner model: Strategy to measurable ROI.", style: { fontFamily: "Manrope", fontSize: "12.5px", color: "#00A5A3", fontWeight: "700" } },
      { id: "el-4-b1", type: "bento", left: "46%", top: "16%", width: "23%", height: "12%", num: "01", lbl: "Strategy & Event Concept\nMarket mapping & positioning" },
      { id: "el-4-b2", type: "bento", left: "71%", top: "16%", width: "23%", height: "12%", num: "06", lbl: "Marketing & Comms\nFull-funnel demand growth" },
      { id: "el-4-b3", type: "bento", left: "46%", top: "30%", width: "23%", height: "12%", num: "02", lbl: "Content & Speakers\nagenda & network" },
      { id: "el-4-b4", type: "bento", left: "71%", top: "30%", width: "23%", height: "12%", num: "07", lbl: "PR & Media\nGlobal communications" },
      { id: "el-4-b5", type: "bento", left: "46%", top: "44%", width: "23%", height: "12%", num: "03", lbl: "Delegate & Investors\nQualified C-level sourcing" },
      { id: "el-4-b6", type: "bento", left: "71%", top: "44%", width: "23%", height: "12%", num: "08", lbl: "Operations & Logistics\nVenue & onsite execution" },
      { id: "el-4-b7", type: "bento", left: "46%", top: "58%", width: "23%", height: "12%", num: "04", lbl: "Sponsorship Sales\nEnterprise partner engine" },
      { id: "el-4-b8", type: "bento", left: "71%", top: "58%", width: "23%", height: "12%", num: "09", lbl: "Customer Success\nWhite-glove experience" },
      { id: "el-4-b9", type: "bento", left: "46%", top: "72%", width: "23%", height: "12%", num: "05", lbl: "Branding & Creative\nIdentity, stage & digital" },
      { id: "el-4-b10", type: "bento", left: "71%", top: "72%", width: "23%", height: "12%", num: "10", lbl: "Project Management\nSingle-threaded delivery" }
    ]
  },
  {
    id: 5,
    number: "05.",
    title: "Our Business Divisions",
    theme: "light",
    layout: "divisions",
    visible: true,
    elements: [
      { id: "el-5-hdr", type: "header", left: "6%", top: "5%", width: "88%", height: "8%" },
      { id: "el-5-c1", type: "card", left: "6%", top: "18%", width: "20.5%", height: "64%", style: { backgroundColor: "#E6EFF0", borderRadius: "6px" } },
      { id: "el-5-c1-num", type: "text", left: "8.5%", top: "22%", width: "16%", height: "8%", content: "Flagship", style: { fontFamily: "Anek Devanagari", fontSize: "12px", color: "#00A5A3", fontWeight: "700" } },
      { id: "el-5-c1-title", type: "text", left: "8.5%", top: "29%", width: "16%", height: "10%", content: "Signature Events", style: { fontFamily: "Anek Devanagari", fontSize: "14px", color: "#01373D", fontWeight: "700", lineHeight: "1.1" } },
      { id: "el-5-c1-desc", type: "text", left: "8.5%", top: "42%", width: "16%", height: "36%", content: "Large-scale conferences, expos and summits owned by Trescon — World AI Show, HODL, DATE and more. Proven IP with global communities.", style: { fontFamily: "Manrope", fontSize: "9.5px", color: "#464D53", lineHeight: "1.3" } },
      { id: "el-5-c2", type: "card", left: "28%", top: "18%", width: "20.5%", height: "64%", style: { backgroundColor: "#01373D", borderRadius: "6px" } },
      { id: "el-5-c2-num", type: "text", left: "30.5%", top: "22%", width: "16%", height: "8%", content: "Gov & Enterprise", style: { fontFamily: "Anek Devanagari", fontSize: "12px", color: "#C0F43C", fontWeight: "700" } },
      { id: "el-5-c2-title", type: "text", left: "30.5%", top: "29%", width: "16%", height: "10%", content: "Managed Events", style: { fontFamily: "Anek Devanagari", fontSize: "14px", color: "#ffffff", fontWeight: "700", lineHeight: "1.1" } },
      { id: "el-5-c2-desc", type: "text", left: "30.5%", top: "42%", width: "16%", height: "36%", content: "End-to-end event management for governments, associations and enterprises. From concept, marketing to on-ground execution.", style: { fontFamily: "Manrope", fontSize: "9.5px", color: "#E6EFF0", lineHeight: "1.3" } },
      { id: "el-5-c3", type: "card", left: "50%", top: "18%", width: "20.5%", height: "64%", style: { backgroundColor: "#E6EFF0", borderRadius: "6px" } },
      { id: "el-5-c3-num", type: "text", left: "52.5%", top: "22%", width: "16%", height: "8%", content: "ROI Focused", style: { fontFamily: "Anek Devanagari", fontSize: "12px", color: "#00A5A3", fontWeight: "700" } },
      { id: "el-5-c3-title", type: "text", left: "52.5%", top: "29%", width: "16%", height: "10%", content: "Bespoke Events", style: { fontFamily: "Anek Devanagari", fontSize: "14px", color: "#01373D", fontWeight: "700", lineHeight: "1.1" } },
      { id: "el-5-c3-desc", type: "text", left: "52.5%", top: "42%", width: "16%", height: "36%", content: "Custom executive engagements built around business objectives — pipeline, market entry, product launch and sales acceleration.", style: { fontFamily: "Manrope", fontSize: "9.5px", color: "#464D53", lineHeight: "1.3" } },
      { id: "el-5-c4", type: "card", left: "72%", top: "18%", width: "20.5%", height: "64%", style: { backgroundColor: "#01373D", borderRadius: "6px" } },
      { id: "el-5-c4-num", type: "text", left: "74.5%", top: "22%", width: "16%", height: "8%", content: "Enablement", style: { fontFamily: "Anek Devanagari", fontSize: "12px", color: "#C0F43C", fontWeight: "700" } },
      { id: "el-5-c4-title", type: "text", left: "74.5%", top: "29%", width: "16%", height: "10%", content: "Education & Training", style: { fontFamily: "Anek Devanagari", fontSize: "14px", color: "#ffffff", fontWeight: "700", lineHeight: "1.1" } },
      { id: "el-5-c4-desc", type: "text", left: "74.5%", top: "42%", width: "16%", height: "36%", content: "Training programmes, workshops and bootcamps enabling technology adoption and workforce skilling at scale with measurable outcomes.", style: { fontFamily: "Manrope", fontSize: "9.5px", color: "#E6EFF0", lineHeight: "1.3" } }
    ]
  },
  {
    id: 6,
    number: "06.",
    title: "Trusted By",
    theme: "dark",
    layout: "trusted-by",
    visible: true,
    elements: [
      { id: "el-6-hdr", type: "header", left: "6%", top: "5%", width: "88%", height: "8%" },
      { id: "el-6-title", type: "text", left: "6%", top: "15%", width: "88%", height: "8%", content: "Trusted by Governments, Enterprises & Global Technology Leaders — Ecosystem of 1M+ connections", style: { fontFamily: "Anek Devanagari", fontSize: "16px", color: "#C0F43C", fontWeight: "700" } },
      { id: "el-6-div1", type: "divider", left: "6%", top: "23%", width: "88%", height: "1px", style: { backgroundColor: "#00A5A3", opacity: "0.2" } },
      { id: "el-6-div2", type: "divider", left: "6%", top: "36%", width: "88%", height: "1px", style: { backgroundColor: "#00A5A3", opacity: "0.2" } },
      { id: "el-6-div3", type: "divider", left: "6%", top: "49%", width: "88%", height: "1px", style: { backgroundColor: "#00A5A3", opacity: "0.2" } },
      { id: "el-6-div4", type: "divider", left: "6%", top: "62%", width: "88%", height: "1px", style: { backgroundColor: "#00A5A3", opacity: "0.2" } },
      { id: "el-6-div5", type: "divider", left: "6%", top: "75%", width: "88%", height: "1px", style: { backgroundColor: "#00A5A3", opacity: "0.2" } },
      { id: "el-6-cat1", type: "text", left: "6%", top: "27%", width: "16%", height: "6%", content: "GOVERNMENTS", style: { fontFamily: "Anek Devanagari", fontSize: "9px", color: "#C0F43C", fontWeight: "800" } },
      { id: "el-6-l1", type: "logo", left: "24%", top: "25%", width: "10%", height: "7%", content: "DUBAI GOV" },
      { id: "el-6-l2", type: "logo", left: "35%", top: "25%", width: "10%", height: "7%", content: "MINISTRY OF AI" },
      { id: "el-6-l3", type: "logo", left: "46%", top: "25%", width: "10%", height: "7%", content: "KSA MOC" },
      { id: "el-6-l4", type: "logo", left: "57%", top: "25%", width: "10%", height: "7%", content: "BENGALURU GOV" },
      { id: "el-6-l5", type: "logo", left: "68%", top: "25%", width: "12%", height: "7%", content: "DUBAI FUTURE FOUNDATION" },
      { id: "el-6-cat2", type: "text", left: "6%", top: "40%", width: "16%", height: "6%", content: "TECH PARTNERS", style: { fontFamily: "Anek Devanagari", fontSize: "9px", color: "#C0F43C", fontWeight: "800" } },
      { id: "el-6-l7", type: "logo", left: "24%", top: "38%", width: "10%", height: "7%", content: "AWS" },
      { id: "el-6-l8", type: "logo", left: "35%", top: "38%", width: "10%", height: "7%", content: "ORACLE" },
      { id: "el-6-l9", type: "logo", left: "46%", top: "38%", width: "10%", height: "7%", content: "MICROSOFT" },
      { id: "el-6-l10", type: "logo", left: "57%", top: "38%", width: "10%", height: "7%", content: "IBM" },
      { id: "el-6-l11", type: "logo", left: "68%", top: "38%", width: "10%", height: "7%", content: "NEW RELIC" },
      { id: "el-6-l12", type: "logo", left: "79%", top: "38%", width: "10%", height: "7%", content: "HITACHI VANTARA" },
      { id: "el-6-cat3", type: "text", left: "6%", top: "53%", width: "16%", height: "6%", content: "ENTERPRISES", style: { fontFamily: "Anek Devanagari", fontSize: "9px", color: "#C0F43C", fontWeight: "800" } },
      { id: "el-6-l13", type: "logo", left: "24%", top: "51%", width: "10%", height: "7%", content: "EMIRATES NBD" },
      { id: "el-6-l14", type: "logo", left: "35%", top: "51%", width: "10%", height: "7%", content: "DP WORLD" },
      { id: "el-6-l15", type: "logo", left: "46%", top: "51%", width: "10%", height: "7%", content: "CAREEM" },
      { id: "el-6-l16", type: "logo", left: "57%", top: "51%", width: "10%", height: "7%", content: "E&" },
      { id: "el-6-l17", type: "logo", left: "68%", top: "51%", width: "10%", height: "7%", content: "INFOSYS" },
      { id: "el-6-cat4", type: "text", left: "6%", top: "66%", width: "16%", height: "6%", content: "ASSOCIATIONS", style: { fontFamily: "Anek Devanagari", fontSize: "9px", color: "#C0F43C", fontWeight: "800" } },
      { id: "el-6-l19", type: "logo", left: "24%", top: "64%", width: "10%", height: "7%", content: "DUBAI FINTECH" },
      { id: "el-6-l20", type: "logo", left: "35%", top: "64%", width: "10%", height: "7%", content: "AI COUNCIL" },
      { id: "el-6-l21", type: "logo", left: "46%", top: "64%", width: "10%", height: "7%", content: "CYBERSECURITY ASSN" },
      { id: "el-6-l22", type: "logo", left: "57%", top: "64%", width: "10%", height: "7%", content: "CLOUD COLLECTIVE" },
      { id: "el-6-l23", type: "logo", left: "68%", top: "64%", width: "10%", height: "7%", content: "SUSTAINABILITY FORUM" },
      { id: "el-6-l24", type: "logo", left: "79%", top: "64%", width: "10%", height: "7%", content: "WEB3 ALLIANCE" },
      { id: "el-6-cat5", type: "text", left: "6%", top: "79%", width: "16%", height: "6%", content: "MEDIA", style: { fontFamily: "Anek Devanagari", fontSize: "9px", color: "#C0F43C", fontWeight: "800" } },
      { id: "el-6-l25", type: "logo", left: "24%", top: "77%", width: "10%", height: "7%", content: "FORBES" },
      { id: "el-6-l26", type: "logo", left: "35%", top: "77%", width: "10%", height: "7%", content: "BLOOMBERG" },
      { id: "el-6-l27", type: "logo", left: "46%", top: "77%", width: "10%", height: "7%", content: "KHALEEJ TIMES" },
      { id: "el-6-l28", type: "logo", left: "57%", top: "77%", width: "10%", height: "7%", content: "GULF NEWS" }
    ]
  },
  {
    id: 7,
    number: "07.",
    title: "Signature Event Portfolio",
    theme: "dark",
    layout: "signature-portfolio",
    visible: true,
    elements: [
      { id: "el-7-hdr", type: "header", left: "6%", top: "5%", width: "88%", height: "8%" },
      { id: "el-7-title", type: "text", left: "6%", top: "15%", width: "88%", height: "8%", content: "Industry-Leading Platforms Driving Global Conversations", style: { fontFamily: "Anek Devanagari", fontSize: "24px", color: "#ffffff", fontWeight: "700" } },
      { id: "el-7-body", type: "text", left: "6%", top: "24%", width: "88%", height: "8%", content: "Driving conversations across AI, Web3, Cybersecurity, Cloud, Sustainability, Manufacturing and Digital Transformation.", style: { fontFamily: "Manrope", fontSize: "12px", color: "#E6EFF0" } },
      { id: "el-7-div", type: "divider", left: "6%", top: "33%", width: "88%", height: "1px", style: { backgroundColor: "#00A5A3", opacity: "0.2" } },
      { id: "el-7-b1", type: "brand", left: "6%", top: "38%", width: "20.5%", height: "20%", cat: "AI", title: "World AI Show\nFlagship AI summit, 50+ editions." },
      { id: "el-7-b2", type: "brand", left: "28%", top: "38%", width: "20.5%", height: "20%", cat: "Web3", title: "HODL\nLongest-running Web3 invest series." },
      { id: "el-7-b3", type: "brand", left: "50%", top: "38%", width: "20.5%", height: "20%", cat: "Digital", title: "DATE\nDigital acceleration expo for CXOs." },
      { id: "el-7-b4", type: "brand", left: "72%", top: "38%", width: "20.5%", height: "20%", cat: "Cloud", title: "World Cloud Show\nCloud adoption & infrastructure." },
      { id: "el-7-b5", type: "brand", left: "6%", top: "62%", width: "20.5%", height: "20%", cat: "Security", title: "Cyber Security\nCISO-focused risk & resilience." },
      { id: "el-7-b6", type: "brand", left: "28%", top: "62%", width: "20.5%", height: "20%", cat: "ESG", title: "Future Sustainability\nNet-zero & ESG with govts." },
      { id: "el-7-b7", type: "brand", left: "50%", top: "62%", width: "20.5%", height: "20%", cat: "Manufacturing", title: "Future Factory Show\nSmart mfg & Industry 4.0." },
      { id: "el-7-b8", type: "brand", left: "72%", top: "62%", width: "20.5%", height: "20%", cat: "HealthTech", title: "CARE\nHealthcare innovation & care models." }
    ]
  },
  {
    id: 8,
    number: "08.",
    title: "Managed Event Portfolio",
    theme: "light",
    layout: "managed-portfolio",
    visible: true,
    elements: [
      { id: "el-8-hdr", type: "header", left: "6%", top: "5%", width: "88%", height: "8%" },
      { id: "el-8-title", type: "text", left: "6%", top: "15%", width: "88%", height: "8%", content: "Trusted by Governments and Leading Organisations to Deliver Flagships", style: { fontFamily: "Anek Devanagari", fontSize: "20px", color: "#01373D", fontWeight: "700" } },
      { id: "el-8-body", type: "text", left: "6%", top: "24%", width: "88%", height: "8%", content: "Trusted to conceptualise, market and execute flagship events with C-level acquisition, government protocol and P&L ownership.", style: { fontFamily: "Manrope", fontSize: "11.5px", color: "#464D53" } },
      { id: "el-8-c1", type: "card", left: "6%", top: "34%", width: "42%", height: "16%", style: { backgroundColor: "#E6EFF0", borderRadius: "6px" } },
      { id: "el-8-c1-t", type: "text", left: "8.5%", top: "36%", width: "38%", height: "6%", content: "Dubai FinTech Summit  |  Dubai • DIFC", style: { fontFamily: "Anek Devanagari", fontSize: "12.5px", color: "#01373D", fontWeight: "700" } },
      { id: "el-8-c1-d", type: "text", left: "8.5%", top: "42%", width: "38%", height: "7%", content: "World's largest FinTech gathering under Dubai government | Finance • Government", style: { fontFamily: "Manrope", fontSize: "9.5px", color: "#464D53" } },
      { id: "el-8-c2", type: "card", left: "52%", top: "34%", width: "42%", height: "16%", style: { backgroundColor: "#E6EFF0", borderRadius: "6px" } },
      { id: "el-8-c2-t", type: "text", left: "54.5%", top: "36%", width: "38%", height: "6%", content: "Future Sustainability Forum  |  UAE", style: { fontFamily: "Anek Devanagari", fontSize: "12.5px", color: "#01373D", fontWeight: "700" } },
      { id: "el-8-c2-d", type: "text", left: "54.5%", top: "42%", width: "38%", height: "7%", content: "Sustainability & ESG leadership with ministries & funds | ESG • Net Zero", style: { fontFamily: "Manrope", fontSize: "9.5px", color: "#464D53" } },
      { id: "el-8-c3", type: "card", left: "6%", top: "53%", width: "42%", height: "16%", style: { backgroundColor: "#E6EFF0", borderRadius: "6px" } },
      { id: "el-8-c3-t", type: "text", left: "8.5%", top: "55%", width: "38%", height: "6%", content: "Dubai AI Festival  |  Dubai AI Campus", style: { fontFamily: "Anek Devanagari", fontSize: "12.5px", color: "#01373D", fontWeight: "700" } },
      { id: "el-8-c3-d", type: "text", left: "8.5%", top: "61%", width: "38%", height: "7%", content: "AI adoption festival powering enterprise transformation | AI • Festival", style: { fontFamily: "Manrope", fontSize: "9.5px", color: "#464D53" } },
      { id: "el-8-c4", type: "card", left: "52%", top: "53%", width: "42%", height: "16%", style: { backgroundColor: "#E6EFF0", borderRadius: "6px" } },
      { id: "el-8-c4-t", type: "text", left: "54.5%", top: "55%", width: "38%", height: "6%", content: "World Police Summit  |  Dubai Police", style: { fontFamily: "Anek Devanagari", fontSize: "12.5px", color: "#01373D", fontWeight: "700" } },
      { id: "el-8-c4-d", type: "text", left: "54.5%", top: "61%", width: "38%", height: "7%", content: "Global law enforcement technology and security innovation summit | Security • Gov", style: { fontFamily: "Manrope", fontSize: "9.5px", color: "#464D53" } },
      { id: "el-8-c5", type: "card", left: "6%", top: "72%", width: "42%", height: "16%", style: { backgroundColor: "#E6EFF0", borderRadius: "6px" } },
      { id: "el-8-c5-t", type: "text", left: "8.5%", top: "74%", width: "38%", height: "6%", content: "Bengaluru Skill Summit  |  Karnataka Gov", style: { fontFamily: "Anek Devanagari", fontSize: "12.5px", color: "#01373D", fontWeight: "700" } },
      { id: "el-8-c5-d", type: "text", left: "8.5%", top: "80%", width: "38%", height: "7%", content: "Skilling & future of work summit enabling youth employability | Skilling • India", style: { fontFamily: "Manrope", fontSize: "9.5px", color: "#464D53" } },
      { id: "el-8-c6", type: "card", left: "52%", top: "72%", width: "42%", height: "16%", style: { backgroundColor: "#E6EFF0", borderRadius: "6px" } },
      { id: "el-8-c6-t", type: "text", left: "54.5%", top: "74%", width: "38%", height: "6%", content: "Dubai Future Forum  |  Dubai Future Foundation", style: { fontFamily: "Anek Devanagari", fontSize: "12.5px", color: "#01373D", fontWeight: "700" } },
      { id: "el-8-c6-d", type: "text", left: "54.5%", top: "80%", width: "38%", height: "7%", content: "Futures thinking and moonshot innovation with DFF | Future • Innovation", style: { fontFamily: "Manrope", fontSize: "9.5px", color: "#464D53" } }
    ]
  },
  {
    id: 9,
    number: "09.",
    title: "Bespoke Events",
    theme: "light",
    layout: "bespoke",
    visible: true,
    elements: [
      { id: "el-9-hdr", type: "header", left: "6%", top: "5%", width: "88%", height: "8%" },
      { id: "el-9-title", type: "text", left: "6%", top: "16%", width: "88%", height: "8%", content: "Bespoke • ROI Led — Custom Events Designed Around Your Business Goals", style: { fontFamily: "Anek Devanagari", fontSize: "22px", color: "#01373D", fontWeight: "700" } },
      { id: "el-9-left", type: "text", left: "6%", top: "25%", width: "38%", height: "6%", content: "We help organisations:", style: { fontFamily: "Anek Devanagari", fontSize: "15px", color: "#01373D", fontWeight: "700" } },
      { id: "el-9-list", type: "list", left: "6%", top: "31%", width: "38%", height: "30%", content: "• Launch products to target C-level buyers\n• Generate qualified pipelines and accelerate sales\n• Build thought leadership in emerging sectors\n• Enter new global technology corridors\n• Engage key state & enterprise decision-makers", style: { fontFamily: "Manrope", fontSize: "11px", color: "#464D53", lineHeight: "1.5" } },
      { id: "el-9-footer", type: "text", left: "6%", top: "63%", width: "38%", height: "28%", content: "Outcome first: Pipeline, pilots and partnership KPIs baked into every brief and weekly governance.\n\nFrom executive roundtables to market entry roadshows: Closed-door formats with pre-qualified enterprise buyers, investors and government stakeholders.", style: { fontFamily: "Manrope", fontSize: "10px", color: "#00A5A3", lineHeight: "1.3" } },
      { id: "el-9-f", type: "card", left: "48%", top: "25%", width: "46%", height: "61%", style: { backgroundColor: "#01373D", borderRadius: "6px" } },
      { id: "el-9-stats", type: "text", left: "51%", top: "28%", width: "40%", height: "20%", content: "27-70 meetings/ed.  |  ~68% C-level  |  120+ countries", style: { fontFamily: "Anek Devanagari", fontSize: "14px", color: "#C0F43C", fontWeight: "700" } },
      { id: "el-9-card-ph", type: "card", left: "51%", top: "45%", width: "40%", height: "36%", style: { backgroundColor: "#F6FAFA", borderColor: "#00A5A3", borderStyle: "solid", borderWidth: "1.5px", borderRadius: "6px" } },
      { id: "el-9-ph-text", type: "text", left: "53%", top: "48%", width: "36%", height: "30%", content: "[ B2B KEYNOTE IMAGE PLACEHOLDER ]\n\nAsset: Closed-door VIP Boardroom or Matchmaking Session Photo\nSuggested Size: 5.3 x 3.1 Inches\nDouble-click in PowerPoint to swap with your actual bespoke event networking visual.", style: { fontFamily: "Manrope", fontSize: "9px", color: "#464D53", lineHeight: "1.3" } }
    ]
  },
  {
    id: 10,
    number: "10.",
    title: "Why Trescon",
    theme: "light",
    layout: "why-trescon",
    visible: true,
    elements: [
      { id: "el-10-hdr", type: "header", left: "6%", top: "5%", width: "88%", height: "8%" },
      { id: "el-10-title", type: "text", left: "6%", top: "15%", width: "88%", height: "8%", content: "Why Clients Work With Trescon", style: { fontFamily: "Anek Devanagari", fontSize: "24px", color: "#01373D", fontWeight: "700" } },
      { id: "el-10-c1", type: "card", left: "6%", top: "24%", width: "27%", height: "28%", style: { backgroundColor: "#E6EFF0", borderRadius: "6px" } },
      { id: "el-10-c1-num", type: "text", left: "8.5%", top: "27%", width: "22%", height: "6%", content: "01. Reach • Relevance", style: { fontFamily: "Anek Devanagari", fontSize: "12px", color: "#00A5A3", fontWeight: "700" } },
      { id: "el-10-c1-desc", type: "text", left: "8.5%", top: "34%", width: "22%", height: "16%", content: "Global network across 120+ countries. Built through 500+ events and government alliances. Access where your buying committee sits.", style: { fontFamily: "Manrope", fontSize: "9px", color: "#464D53", lineHeight: "1.3" } },
      { id: "el-10-c2", type: "card", left: "36.5%", top: "24%", width: "27%", height: "28%", style: { backgroundColor: "#E6EFF0", borderRadius: "6px" } },
      { id: "el-10-c2-num", type: "text", left: "39%", top: "27%", width: "22%", height: "6%", content: "02. 68% C-level avg", style: { fontFamily: "Anek Devanagari", fontSize: "12px", color: "#00A5A3", fontWeight: "700" } },
      { id: "el-10-c2-desc", type: "text", left: "39%", top: "34%", width: "22%", height: "16%", content: "Access to qualified C-level decision-makers. 250k+ C-level attendees historically, with stringent qualification and intent mapping.", style: { fontFamily: "Manrope", fontSize: "9px", color: "#464D53", lineHeight: "1.3" } },
      { id: "el-10-c3", type: "card", left: "67%", top: "24%", width: "27%", height: "28%", style: { backgroundColor: "#E6EFF0", borderRadius: "6px" } },
      { id: "el-10-c3-num", type: "text", left: "69.5%", top: "27%", width: "22%", height: "6%", content: "03. Trust • Access", style: { fontFamily: "Anek Devanagari", fontSize: "12px", color: "#00A5A3", fontWeight: "700" } },
      { id: "el-10-c3-desc", type: "text", left: "69.5%", top: "34%", width: "22%", height: "16%", content: "Government and enterprise relationships. 100+ government partnerships enabling protocol, policy context and trusted convening power.", style: { fontFamily: "Manrope", fontSize: "9px", color: "#464D53", lineHeight: "1.3" } },
      { id: "el-10-c4", type: "card", left: "6%", top: "56%", width: "27%", height: "28%", style: { backgroundColor: "#E6EFF0", borderRadius: "6px" } },
      { id: "el-10-c4-num", type: "text", left: "8.5%", top: "59%", width: "22%", height: "6%", content: "04. Zero compromise", style: { fontFamily: "Anek Devanagari", fontSize: "12px", color: "#00A5A3", fontWeight: "700" } },
      { id: "el-10-c4-desc", type: "text", left: "8.5%", top: "66%", width: "22%", height: "16%", content: "Proven event delivery capability. Stage production, content curation, logistics and hospitality — 8 years of flagship-grade execution.", style: { fontFamily: "Manrope", fontSize: "9px", color: "#464D53", lineHeight: "1.3" } },
      { id: "el-10-c5", type: "card", left: "36.5%", top: "56%", width: "27%", height: "28%", style: { backgroundColor: "#E6EFF0", borderRadius: "6px" } },
      { id: "el-10-c5-num", type: "text", left: "39%", top: "59%", width: "22%", height: "6%", content: "05. One P&L", style: { fontFamily: "Anek Devanagari", fontSize: "12px", color: "#00A5A3", fontWeight: "700" } },
      { id: "el-10-c5-desc", type: "text", left: "39%", top: "66%", width: "22%", height: "16%", content: "End-to-end execution under one partner. Strategy, sales, marketing, PR, ops and success — single-threaded ownership from concept to ROI.", style: { fontFamily: "Manrope", fontSize: "9px", color: "#464D53", lineHeight: "1.3" } },
      { id: "el-10-c6", type: "card", left: "67%", top: "56%", width: "27%", height: "28%", style: { backgroundColor: "#E6EFF0", borderRadius: "6px" } },
      { id: "el-10-c6-num", type: "text", left: "69.5%", top: "59%", width: "22%", height: "6%", content: "06. Measurable Outcomes", style: { fontFamily: "Anek Devanagari", fontSize: "12px", color: "#00A5A3", fontWeight: "700" } },
      { id: "el-10-c6-desc", type: "text", left: "69.5%", top: "66%", width: "22%", height: "16%", content: "Results-driven approach backed by measurable KPIs. Pipeline meetings, qualified attendees, pilots booked — defined upfront and reported weekly.", style: { fontFamily: "Manrope", fontSize: "9px", color: "#464D53", lineHeight: "1.3" } }
    ]
  },
  {
    id: 11,
    number: "11.",
    title: "Success Stories",
    theme: "light",
    layout: "success-stories",
    visible: true,
    elements: [
      { id: "el-11-hdr", type: "header", left: "6%", top: "5%", width: "88%", height: "8%" },
      { id: "el-11-title", type: "text", left: "6%", top: "15%", width: "88%", height: "8%", content: "Delivering Measurable Business Outcomes", style: { fontFamily: "Anek Devanagari", fontSize: "22px", color: "#01373D", fontWeight: "700" } },
      { id: "el-11-c1", type: "card", left: "6%", top: "25%", width: "26%", height: "55%", style: { backgroundColor: "#E6EFF0", borderRadius: "6px" } },
      { id: "el-11-c1-brand", type: "text", left: "8.5%", top: "28%", width: "21%", height: "6%", content: "AWS (ASEAN)", style: { fontFamily: "Anek Devanagari", fontSize: "15px", color: "#00A5A3", fontWeight: "800" } },
      { id: "el-11-c1-obj", type: "text", left: "8.5%", top: "35%", width: "21%", height: "12%", content: "OBJECTIVE: Expand Greenfield cloud adoption across ASEAN.", style: { fontFamily: "Manrope", fontSize: "9.5px", color: "#464D53", fontWeight: "700" } },
      { id: "el-11-c1-res", type: "text", left: "8.5%", top: "48%", width: "21%", height: "30%", content: "RESULT: 27 qualified enterprise meetings, Pilot opportunities, Increased pipeline.\n\nMetrics: 27 meetings", style: { fontFamily: "Manrope", fontSize: "9.5px", color: "#01373D", lineHeight: "1.25" } },
      { id: "el-11-c2", type: "card", left: "37%", top: "25%", width: "26%", height: "55%", style: { backgroundColor: "#E6EFF0", borderRadius: "6px" } },
      { id: "el-11-c2-brand", type: "text", left: "39.5%", top: "28%", width: "21%", height: "6%", content: "NEW RELIC (India)", style: { fontFamily: "Anek Devanagari", fontSize: "15px", color: "#00A5A3", fontWeight: "800" } },
      { id: "el-11-c2-obj", type: "text", left: "39.5%", top: "35%", width: "21%", height: "12%", content: "OBJECTIVE: Build market awareness in India.", style: { fontFamily: "Manrope", fontSize: "9.5px", color: "#464D53", fontWeight: "700" } },
      { id: "el-11-c2-res", type: "text", left: "39.5%", top: "48%", width: "21%", height: "30%", content: "RESULT: 70 qualified attendees, Product-market validation, Strong GTM pipeline.\n\nMetrics: 70 qualified", style: { fontFamily: "Manrope", fontSize: "9.5px", color: "#01373D", lineHeight: "1.25" } },
      { id: "el-11-c3", type: "card", left: "68%", top: "25%", width: "26%", height: "55%", style: { backgroundColor: "#E6EFF0", borderRadius: "6px" } },
      { id: "el-11-c3-brand", type: "text", left: "70.5%", top: "28%", width: "21%", height: "6%", content: "HITACHI + ORACLE", style: { fontFamily: "Anek Devanagari", fontSize: "15px", color: "#00A5A3", fontWeight: "800" } },
      { id: "el-11-c3-obj", type: "text", left: "70.5%", top: "35%", width: "21%", height: "12%", content: "OBJECTIVE: Grow strategic partnerships.", style: { fontFamily: "Manrope", fontSize: "9.5px", color: "#464D53", fontWeight: "700" } },
      { id: "el-11-c3-res", type: "text", left: "70.5%", top: "48%", width: "21%", height: "30%", content: "RESULT: 39 qualified enterprise attendees, Stronger partner ecosystem, solution awareness.\n\nMetrics: 39 enterprise", style: { fontFamily: "Manrope", fontSize: "9.5px", color: "#01373D", lineHeight: "1.25" } }
    ]
  },
  {
    id: 12,
    number: "12.",
    title: "Upcoming Events",
    theme: "light",
    layout: "upcoming-events",
    visible: true,
    elements: [
      { id: "el-12-hdr", type: "header", left: "6%", top: "5%", width: "88%", height: "8%" },
      { id: "el-12-title", type: "text", left: "6%", top: "15%", width: "88%", height: "8%", content: "Meet Us Across World's Leading Innovation Ecosystems", style: { fontFamily: "Anek Devanagari", fontSize: "22px", color: "#01373D", fontWeight: "700" } },
      { id: "el-12-tag", type: "text", left: "6%", top: "24%", width: "88%", height: "6%", content: "Meet us across the world's leading innovation ecosystems. Calendar is dynamic — confirm on site.", style: { fontFamily: "Manrope", fontSize: "11px", color: "#464D53" } },
      { id: "el-12-c1", type: "upcoming", left: "6%", top: "32%", width: "16%", height: "55%", num: "01", title: "DUBAI FINTECH", cat: "May 2025 • Dubai\nFinTech | Flagship", loc: "Madinat Jumeirah, Dubai" },
      { id: "el-12-c2", type: "upcoming", left: "24%", top: "32%", width: "16%", height: "55%", num: "02", title: "SUSTAINABILITY", cat: "June 2025 • Dubai\nESG | Gov-led", loc: "Museum of Future, Dubai" },
      { id: "el-12-c3", type: "upcoming", left: "42%", top: "32%", width: "16%", height: "55%", num: "03", title: "ISLAMIC FINANCE", cat: "Q3 2025 • GCC\nFinance | New", loc: "Dubai / Riyadh" },
      { id: "el-12-c4", type: "upcoming", left: "60%", top: "32%", width: "16%", height: "55%", num: "04", title: "BENGALURU SKILL", cat: "Q3 2025 • India\nSkilling | India", loc: "BIEC, Bengaluru" },
      { id: "el-12-c5", type: "upcoming", left: "78%", top: "32%", width: "16%", height: "55%", num: "05", title: "FUTURE FACTORY", cat: "Q4 2025 • Global\nIndustrial | Global", loc: "Dubai • Berlin" }
    ]
  },
  {
    id: 13,
    number: "13.",
    title: "Leadership",
    theme: "light",
    layout: "leadership",
    visible: true,
    elements: [
      { id: "el-13-hdr", type: "header", left: "6%", top: "5%", width: "88%", height: "8%" },
      { id: "el-13-title", type: "text", left: "6%", top: "15%", width: "88%", height: "8%", content: "Leadership Backed by Global Execution Power", style: { fontFamily: "Anek Devanagari", fontSize: "22px", color: "#01373D", fontWeight: "700" } },
      { id: "el-13-c1", type: "card", left: "6%", top: "25%", width: "20.5%", height: "40%", style: { backgroundColor: "#E6EFF0", borderRadius: "6px" } },
      { id: "el-13-c1-role", type: "text", left: "8.5%", top: "28%", width: "16%", height: "10%", content: "FOUNDER &\nCHAIRMAN", style: { fontFamily: "Anek Devanagari", fontSize: "12px", color: "#00A5A3", fontWeight: "700" } },
      { id: "el-13-c1-desc", type: "text", left: "8.5%", top: "39%", width: "16%", height: "24%", content: "Vision, Gov Relations & Global Growth | Leadership", style: { fontFamily: "Manrope", fontSize: "9.5px", color: "#464D53", lineHeight: "1.25" } },
      { id: "el-13-c2", type: "card", left: "28%", top: "25%", width: "20.5%", height: "40%", style: { backgroundColor: "#E6EFF0", borderRadius: "6px" } },
      { id: "el-13-c2-role", type: "text", left: "30.5%", top: "28%", width: "16%", height: "10%", content: "CO-FOUNDER &\nVICE CHAIRMAN", style: { fontFamily: "Anek Devanagari", fontSize: "11px", color: "#00A5A3", fontWeight: "700" } },
      { id: "el-13-c2-desc", type: "text", left: "30.5%", top: "39%", width: "16%", height: "24%", content: "Strategy & Business Development | Growth", style: { fontFamily: "Manrope", fontSize: "9.5px", color: "#464D53", lineHeight: "1.25" } },
      { id: "el-13-c3", type: "card", left: "50%", top: "25%", width: "20.5%", height: "40%", style: { backgroundColor: "#E6EFF0", borderRadius: "6px" } },
      { id: "el-13-c3-role", type: "text", left: "52.5%", top: "28%", width: "16%", height: "10%", content: "GROUP CEO", style: { fontFamily: "Anek Devanagari", fontSize: "12px", color: "#00A5A3", fontWeight: "700" } },
      { id: "el-13-c3-desc", type: "text", left: "52.5%", top: "39%", width: "16%", height: "24%", content: "Operations, Product & Commercial | Executive", style: { fontFamily: "Manrope", fontSize: "9.5px", color: "#464D53", lineHeight: "1.25" } },
      { id: "el-13-c4", type: "card", left: "72%", top: "25%", width: "20.5%", height: "40%", style: { backgroundColor: "#E6EFF0", borderRadius: "6px" } },
      { id: "el-13-c4-role", type: "text", left: "74.5%", top: "28%", width: "16%", height: "10%", content: "MANAGING\nDIRECTOR", style: { fontFamily: "Anek Devanagari", fontSize: "12px", color: "#00A5A3", fontWeight: "700" } },
      { id: "el-13-c4-desc", type: "text", left: "74.5%", top: "39%", width: "16%", height: "24%", content: "Delivery, Marketing & Partnerships | Delivery", style: { fontFamily: "Manrope", fontSize: "9.5px", color: "#464D53", lineHeight: "1.25" } },
      { id: "el-13-anchor", type: "card", left: "6%", top: "69%", width: "88%", height: "16%", style: { backgroundColor: "#01373D", borderRadius: "6px" } },
      { id: "el-13-anchor-t2", type: "text", left: "8.5%", top: "72%", width: "83%", height: "10%", content: "Supported by 250+ event, marketing, production, commercial and technology professionals worldwide.", style: { fontFamily: "Manrope", fontSize: "11px", color: "#ffffff", fontWeight: "700" } },
      { id: "el-13-extra", type: "text", left: "6%", top: "86%", width: "88%", height: "8%", content: "Built for C-Level Outcomes: Event Ops • Marketing • Commercial • Production • Tech • Content", style: { fontFamily: "Anek Devanagari", fontSize: "10px", color: "#C0F43C", fontWeight: "800" } }
    ]
  },
  {
    id: 14,
    number: "14.",
    title: "Closing / Outro",
    theme: "dark",
    layout: "outro-closing",
    visible: true,
    elements: [
      { id: "el-14-back", type: "outro-back", left: "0%", top: "0%", width: "100%", height: "100%" },
      { id: "el-14-title", type: "text", left: "12%", top: "18%", width: "76%", height: "18%", content: "Ready to Scale with Trescon — Let's Build Your Next High-Impact Event", style: { fontFamily: "Anek Devanagari", fontSize: "36px", color: "#ffffff", fontWeight: "800", textAlign: "left", lineHeight: "1.0" } },
      { id: "el-14-body", type: "text", left: "12%", top: "36%", width: "76%", height: "20%", content: "Whether you're launching a flagship summit, expanding into new markets, or engaging enterprise buyers, Trescon delivers the strategy, audience and execution to make it happen.", style: { fontFamily: "Manrope", fontSize: "13.5px", color: "#E6EFF0", lineHeight: "1.4" } },
      { id: "el-14-slogan", type: "text", left: "12%", top: "58%", width: "76%", height: "8%", content: "CONNECTING BUSINESSES WITH OPPORTUNITIES", style: { fontFamily: "Anek Devanagari", fontSize: "11px", color: "#C0F43C", fontWeight: "800" } },
      { id: "el-14-logo", type: "logo", left: "12%", top: "70%", width: "16%", height: "12%" },
      { id: "el-14-hq-hdr", type: "text", left: "54%", top: "68%", width: "40%", height: "6%", content: "GLOBAL HEADQUARTERS", style: { fontFamily: "Anek Devanagari", fontSize: "10px", color: "#C0F43C", fontWeight: "800" } },
      { id: "el-14-hq", type: "text", left: "54%", top: "74%", width: "40%", height: "6%", content: "Liberty House, DIFC, Dubai, UAE", style: { fontFamily: "Manrope", fontSize: "11.5px", color: "#ffffff" } },
      { id: "el-14-contact", type: "text", left: "54%", top: "80%", width: "40%", height: "6%", content: "info@tresconglobal.com  |  www.tresconglobal.com", style: { fontFamily: "Manrope", fontSize: "11px", color: "#E6EFF0" } }
    ]
  }
];

// App Designer States
let activeSlideId = 1;
let selectedElementId = null;
let activeTool = "select"; // 'select', 'textbox', 'shape'
let isPresentationMode = false;

// Drag & Resize logic helper states
let isDragging = false;
let isResizing = false;
let dragStartX = 0;
let dragStartY = 0;
let initialLeft = 0;
let initialTop = 0;
let initialWidth = 0;
let initialHeight = 0;
let resizeDirection = "";

// Undo & Redo transaction tracking stack
let historyStateStack = [];
let redoStateStack = [];

// DOM Elements
const slideThumbnailsList = document.getElementById("slide-thumbnails-list");
const renderCanvasBody = document.getElementById("render-canvas-body");
const slideWrapperElement = document.getElementById("slide-wrapper-element");
const btnPrevSlide = document.getElementById("btn-prev-slide");
const btnNextSlide = document.getElementById("btn-next-slide");
const btnPresentMode = document.getElementById("btn-present-mode");
const zoomPercentage = document.getElementById("zoom-percentage");

// Toolbar controls elements
const toolSelect = document.getElementById("tool-select");
const toolTextbox = document.getElementById("tool-textbox");
const toolShape = document.getElementById("tool-shape");
const imageSwapperInput = document.getElementById("image-swapper-input");
const btnToolUndo = document.getElementById("btn-tool-undo");
const btnToolRedo = document.getElementById("btn-tool-redo");
const btnToolPdf = document.getElementById("btn-tool-pdf");

const ctrlFontFamily = document.getElementById("ctrl-font-family");
const ctrlFontSize = document.getElementById("ctrl-font-size");
const btnFontDec = document.getElementById("btn-font-dec");
const btnFontInc = document.getElementById("btn-font-inc");
const ctrlBold = document.getElementById("ctrl-bold");
const ctrlItalic = document.getElementById("ctrl-italic");
const ctrlUnderline = document.getElementById("ctrl-underline");

const ctrlTextColor = document.getElementById("ctrl-text-color");
const indicatorTextColor = document.getElementById("indicator-text-color");
const ctrlFillColor = document.getElementById("ctrl-fill-color");
const indicatorFillColor = document.getElementById("indicator-fill-color");
const ctrlBorderColor = document.getElementById("ctrl-border-color");
const indicatorBorderColor = document.getElementById("indicator-border-color");
const ctrlBorderWidth = document.getElementById("ctrl-border-width");
const ctrlRoundness = document.getElementById("ctrl-roundness");

const ctrlLayerUp = document.getElementById("ctrl-layer-up");
const ctrlLayerDown = document.getElementById("ctrl-layer-down");
const ctrlSnapGrid = document.getElementById("ctrl-snap-grid");
const ctrlDelete = document.getElementById("ctrl-delete");

// Initialize application
function init() {
  saveHistoryState(); // Initial save state
  renderThumbnails();
  renderActiveSlide();
  
  // Navigation
  btnPrevSlide.addEventListener("click", navigatePrevious);
  btnNextSlide.addEventListener("click", navigateNext);
  btnPresentMode.addEventListener("click", togglePresentationMode);
  
  // Menu file exports
  document.getElementById("btn-menu-pdf").addEventListener("click", exportPDF);
  document.getElementById("btn-menu-pptx").addEventListener("click", () => {
    window.location.href = "Trescon_Corporate_Pitch_Deck_v7.pptx";
  });
  document.getElementById("btn-menu-undo").addEventListener("click", triggerUndo);
  document.getElementById("btn-menu-redo").addEventListener("click", triggerRedo);
  document.getElementById("btn-menu-text").addEventListener("click", () => { setTool("textbox"); });
  document.getElementById("btn-menu-card").addEventListener("click", () => { setTool("shape"); });
  
  // Toolbelt tool activations
  toolSelect.addEventListener("click", () => setTool("select"));
  toolTextbox.addEventListener("click", () => setTool("textbox"));
  toolShape.addEventListener("click", () => setTool("shape"));
  imageSwapperInput.addEventListener("change", handleLocalImageUpload);
  
  // History controls
  btnToolUndo.addEventListener("click", triggerUndo);
  btnToolRedo.addEventListener("click", triggerRedo);
  btnToolPdf.addEventListener("click", exportPDF);
  
  // Style toolbar bindings
  ctrlFontFamily.addEventListener("change", applyFontFamilyChange);
  ctrlFontSize.addEventListener("change", applyFontSizeChange);
  btnFontDec.addEventListener("click", () => adjustFontSize(-2));
  btnFontInc.addEventListener("click", () => adjustFontSize(2));
  ctrlBold.addEventListener("click", toggleBold);
  ctrlItalic.addEventListener("click", toggleItalic);
  ctrlUnderline.addEventListener("click", toggleUnderline);
  
  // Colors & Borders
  ctrlTextColor.addEventListener("input", applyTextColorChange);
  ctrlFillColor.addEventListener("input", applyFillColorChange);
  ctrlBorderColor.addEventListener("input", applyBorderColorChange);
  ctrlBorderWidth.addEventListener("change", applyBorderWidthChange);
  ctrlRoundness.addEventListener("input", applyRoundnessChange);
  
  // Layering & deletion
  ctrlLayerUp.addEventListener("click", bringForward);
  ctrlLayerDown.addEventListener("click", sendBackward);
  ctrlSnapGrid.addEventListener("click", snapSelectedToGrid);
  ctrlDelete.addEventListener("click", deleteSelectedElement);
  
  // Global Event listeners
  document.addEventListener("keydown", handleKeydown);
  document.addEventListener("mousedown", deselectElementOnClickOutside);
  window.addEventListener("resize", handleWindowResize);
}

// 2. DESIGN HISTORIES (UNDO / REDO STATE MACHINE)
function saveHistoryState() {
  const backup = JSON.stringify(slideData);
  historyStateStack.push(backup);
  if (historyStateStack.length > 25) {
    historyStateStack.shift();
  }
  redoStateStack = []; // Clear redo stack on new action
}

function triggerUndo() {
  if (historyStateStack.length <= 1) return; // Need at least initial state
  
  // Pop current state and store in redo stack
  const currentState = historyStateStack.pop();
  redoStateStack.push(currentState);
  
  // Retrieve previous state
  const prevState = historyStateStack[historyStateStack.length - 1];
  slideData = JSON.parse(prevState);
  
  // Update viewports
  renderThumbnails();
  renderActiveSlide();
}

function triggerRedo() {
  if (redoStateStack.length === 0) return;
  
  const nextState = redoStateStack.pop();
  historyStateStack.push(nextState);
  slideData = JSON.parse(nextState);
  
  renderThumbnails();
  renderActiveSlide();
}

// Set active tool
function setTool(toolName) {
  activeTool = toolName;
  toolSelect.classList.toggle("active", toolName === "select");
  toolTextbox.classList.toggle("active", toolName === "textbox");
  toolShape.classList.toggle("active", toolName === "shape");
}

// ==================== RENDERING COMPONENT LAYOUTS ====================

// Left Slide Thumbnails column preview renderer
function renderThumbnails() {
  slideThumbnailsList.innerHTML = "";
  slideData.forEach((slide, index) => {
    const wrap = document.createElement("div");
    wrap.className = `slide-thumb-card-wrapper ${slide.id === activeSlideId ? 'active' : ''} ${!slide.visible ? 'slide-hidden' : ''}`;
    wrap.setAttribute("data-slide-id", slide.id);
    
    const tag = document.createElement("span");
    tag.className = "slide-thumb-num-tag";
    tag.textContent = `${index + 1}. ${slide.title}`;
    
    const card = document.createElement("div");
    card.className = `slide-thumbnail-card ${slide.id === activeSlideId ? 'active' : ''}`;
    
    // Scale preview slide down inside thumbnail outline
    const preview = document.createElement("div");
    preview.className = `thumb-preview-mini slide-theme-${slide.theme}`;
    preview.innerHTML = buildMiniPreviewMarkup(slide);
    
    card.appendChild(preview);
    
    // Jump slide on click
    card.addEventListener("click", () => {
      activeSlideId = slide.id;
      selectedElementId = null;
      updateActiveSlideUI();
    });
    
    // Toggle slide visibility
    const hideBtn = document.createElement("button");
    hideBtn.className = "slide-thumb-visibility-btn";
    hideBtn.innerHTML = slide.visible ? "Hide" : "Show";
    hideBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      slide.visible = !slide.visible;
      saveHistoryState();
      renderThumbnails();
    });
    
    wrap.appendChild(tag);
    wrap.appendChild(card);
    wrap.appendChild(hideBtn);
    slideThumbnailsList.appendChild(wrap);
  });
}

function updateActiveSlideUI() {
  document.querySelectorAll(".slide-thumb-card-wrapper").forEach(wrap => {
    const id = parseInt(wrap.getAttribute("data-slide-id"));
    wrap.classList.toggle("active", id === activeSlideId);
    wrap.querySelector(".slide-thumbnail-card").classList.toggle("active", id === activeSlideId);
  });
  
  zoomPercentage.textContent = `Slide ${slideData.findIndex(s => s.id === activeSlideId) + 1} of ${slideData.length}  |  100% Zoom`;
  renderActiveSlide();
}

// Builds static preview markup specifically optimized for miniature thumbnail sizing
function buildMiniPreviewMarkup(slide) {
  let bgImg = "";
  if (slide.layout === "cover") {
    bgImg = "trescon_cover_bg.jpg";
  } else if (slide.layout === "outro-closing") {
    bgImg = "trescon_closing_bg.jpg";
  } else if (slide.theme === "dark") {
    bgImg = "trescon_dark_bg.jpg";
  } else {
    bgImg = "trescon_light_bg.jpg";
  }
  
  let html = `<div style="position:absolute; left:0; top:0; width:100%; height:100%; background-image:url('brand_assets/${bgImg}'); background-size:cover; background-position:center; z-index:-1;"></div>`;
  
  // Standard Signature header representation
  const headerHTML = (slide.layout !== "cover" && slide.layout !== "outro-closing") ? `
    <div class="slide-signature-header-block">
      <h2 class="slide-sig-num-title">${slide.number} ${slide.title.toUpperCase()}</h2>
      <div class="slide-sig-rule-line">
        <div class="slide-sig-junction-node"></div>
      </div>
    </div>
  ` : "";
  
  // Quick absolute layouts rendering
  slide.elements.forEach((el) => {
    let elStyle = `left: ${el.left}; top: ${el.top}; width: ${el.width}; height: ${el.height};`;
    
    // Map custom element stylesheet properties
    if (el.style) {
      Object.keys(el.style).forEach(prop => {
        const cssVal = el.style[prop];
        const cssProp = prop.replace(/([A-Z])/g, "-$1").toLowerCase();
        elStyle += `${cssProp}: ${cssVal};`;
      });
    }
    
    if (el.type === "logo") {
      const logoName = slide.theme === "dark" ? "10-years-trescon-logo-W.png" : "10-years-trescon-logo.png";
      html += `<img src="brand_assets/${logoName}" style="${elStyle} position:absolute;">`;
    } else if (el.type === "divider" || el.type === "node") {
      html += `<div style="${elStyle} position:absolute;"></div>`;
    } else if (el.type === "image" && el.style && el.style.backgroundImage) {
      html += `<div style="${elStyle} position:absolute; background-size:cover;"></div>`;
    } else if (el.type === "card") {
      html += `<div class="brand-soft-card" style="${elStyle} position:absolute; padding:0;"></div>`;
    } else if (el.type === "text") {
      html += `<div style="${elStyle} position:absolute; font-size:7px; overflow:hidden;">${el.content.replace(/\n/g, '<br>')}</div>`;
    } else if (el.type === "header") {
      html += headerHTML;
    } else if (el.type === "stat") {
      html += `
        <div style="${elStyle} position:absolute;">
          <div style="font-family:var(--font-title); font-size:12px; font-weight:700; color:var(--color-neon-lime);">${el.num}</div>
          <div style="font-size:5px; color:#ffffff; font-weight:700;">${el.lbl}</div>
        </div>
      `;
    } else if (el.type === "bento") {
      html += `
        <div class="bento-cap-item" style="${elStyle} position:absolute; padding:2px;">
          <span style="font-size:4px; color:var(--color-teal); font-weight:700;">${el.num}</span>
          <p style="font-size:4px; color:var(--color-dark-teal); font-weight:700; margin:0;">${el.lbl}</p>
        </div>
      `;
    } else if (el.type === "brand") {
      html += `
        <div class="portfolio-brand-card" style="${elStyle} position:absolute; padding:4px;">
          <span style="font-size:3px; color:var(--color-neon-lime); font-weight:700;">${el.cat}</span>
          <p style="font-size:4px; color:#ffffff; font-weight:700; margin:0;">${el.title}</p>
        </div>
      `;
    } else if (el.type === "upcoming") {
      html += `
        <div class="stat-upcoming-card" style="${elStyle} position:absolute; padding:4px;">
          <span style="font-size:6px; color:var(--color-neon-lime); font-weight:700;">${el.num}</span>
          <h4 style="font-size:4px; color:#ffffff; margin:0; line-height:1.15;">${el.title}</h4>
        </div>
      `;
    } else if (el.type === "outro-back") {
      html += `<div style="position:absolute; width:100%; height:100%; background-color:var(--color-dark-bg);"></div>`;
    }
  });
  
  return html;
}

// Helper utility to format raw text content to HTML safely
function formatForHTML(str) {
  if (!str) return "";
  return str.replace(/\n/g, "<br>");
}

// Render active slide absolutely within workspace canvas
function renderActiveSlide() {
  const slide = slideData.find(s => s.id === activeSlideId);
  if (!slide) return;
  
  // Empty canvas
  renderCanvasBody.innerHTML = "";
  renderCanvasBody.className = `slide-canvas slide-theme-${slide.theme}`;
  
  // Set custom generated background image
  let bgImg = "";
  if (slide.layout === "cover") {
    bgImg = "trescon_cover_bg.jpg";
  } else if (slide.layout === "outro-closing") {
    bgImg = "trescon_closing_bg.jpg";
  } else if (slide.theme === "dark") {
    bgImg = "trescon_dark_bg.jpg";
  } else {
    bgImg = "trescon_light_bg.jpg";
  }
  renderCanvasBody.style.backgroundImage = `url('brand_assets/${bgImg}')`;
  renderCanvasBody.style.backgroundSize = "cover";
  renderCanvasBody.style.backgroundPosition = "center";
  
  // Render watermark if internal slide
  const showWatermark = slide.layout !== "cover" && slide.layout !== "outro-closing";
  if (showWatermark) {
    const wm = document.createElement("img");
    wm.className = "anniversary-watermark no-print";
    wm.src = "brand_assets/10-years-trescon-logo.png";
    renderCanvasBody.appendChild(wm);
  }
  
  // Render active elements
  slide.elements.forEach((el) => {
    const div = document.createElement("div");
    div.id = el.id;
    div.className = "editable-element";
    div.setAttribute("data-element-id", el.id);
    
    // Position bounds
    div.style.left = el.left;
    div.style.top = el.top;
    div.style.width = el.width;
    div.style.height = el.height;
    
    // Style configurations
    if (el.style) {
      Object.keys(el.style).forEach(prop => {
        div.style[prop] = el.style[prop];
      });
    }
    
    // Check type mapping
    if (el.type === "logo") {
      const img = document.createElement("img");
      const logoName = slide.theme === "dark" ? "10-years-trescon-logo-W.png" : "10-years-trescon-logo.png";
      img.src = `brand_assets/${logoName}`;
      img.style.width = "100%";
      img.style.height = "100%";
      div.appendChild(img);
    } else if (el.type === "divider" || el.type === "node") {
      // standard colored block
    } else if (el.type === "image") {
      div.style.backgroundSize = "cover";
      div.style.backgroundPosition = "center";
    } else if (el.type === "card") {
      div.classList.add("brand-soft-card");
      // Add left accent border dynamically if card styles dictate
      const leftBorderNode = document.createElement("div");
      leftBorderNode.className = "card-accent-border";
      // Determine border color based on fill
      leftBorderNode.style.backgroundColor = el.style && el.style.backgroundColor === "#01373D" ? "var(--color-neon-lime)" : "var(--color-teal)";
      div.appendChild(leftBorderNode);
    } else if (el.type === "text" || el.type === "list") {
      div.setAttribute("contenteditable", "true");
      div.innerHTML = formatForHTML(el.content);
    } else if (el.type === "header") {
      div.className = "slide-signature-header-block no-print";
      div.style.width = "88%";
      div.style.height = "8%";
      div.style.left = "6%";
      div.style.top = "5%";
      div.innerHTML = `
        <h2 class="slide-sig-num-title">${slide.number} ${slide.title.toUpperCase()}</h2>
        <div class="slide-sig-rule-line">
          <div class="slide-sig-junction-node"></div>
        </div>
      `;
    } else if (el.type === "stat") {
      div.innerHTML = `
        <div class="stat-wall-row" style="padding:0;">
          <span class="stat-number-box" data-field="num" contenteditable="true" style="font-size: 1.45rem;">${el.num}</span>
          <span class="stat-label-box" data-field="lbl" contenteditable="true" style="font-size: 0.8rem; font-weight:700;">${el.lbl}</span>
        </div>
      `;
    } else if (el.type === "bento") {
      div.className = "bento-cap-item";
      div.innerHTML = `
        <div class="accent-border"></div>
        <span class="bento-cap-num" data-field="num" contenteditable="true">${el.num}</span>
        <p class="bento-cap-title" data-field="lbl" contenteditable="true">${el.lbl}</p>
      `;
    } else if (el.type === "brand") {
      div.className = "portfolio-brand-card";
      div.style.backgroundColor = "rgba(22, 24, 26, 0.7)";
      div.style.border = "1.5px solid var(--color-teal)";
      div.style.borderRadius = "6px";
      div.style.padding = "6% 8%";
      div.innerHTML = `
        <span class="port-brand-cat" data-field="cat" contenteditable="true">${el.cat}</span>
        <p class="port-brand-title" data-field="title" contenteditable="true">${el.title}</p>
      `;
    } else if (el.type === "upcoming") {
      div.className = "stat-upcoming-card";
      div.innerHTML = `
        <div class="accent-rule"></div>
        <span class="stat-upcoming-num" data-field="num" contenteditable="true">${el.num}</span>
        <h4 class="stat-upcoming-title" data-field="title" contenteditable="true">${el.title}</h4>
        <span class="stat-upcoming-label">CATEGORY</span>
        <p class="stat-upcoming-desc" data-field="cat" contenteditable="true">${el.cat}</p>
        <span class="stat-upcoming-label">LOCATION</span>
        <p class="stat-upcoming-desc" style="font-weight: 700;" data-field="loc" contenteditable="true">${el.loc}</p>
      `;
    } else if (el.type === "outro-back") {
      div.style.backgroundColor = "transparent";
    }
    
    renderCanvasBody.appendChild(div);
    
    // Bind Drag & Selection Events
    bindElementInteractiveEvents(div, el, slide);
  });
  
  // Clear toolbar highlight if nothing active
  if (selectedElementId) {
    const activeElDiv = renderCanvasBody.querySelector(`[data-element-id="${selectedElementId}"]`);
    if (activeElDiv) {
      focusElement(activeElDiv);
    } else {
      selectedElementId = null;
      updateToolbarState(null);
    }
  } else {
    updateToolbarState(null);
  }
}

// ==================== INTERACTIVITY AND DRAG & DROP CONTROLLERS ====================

// Binds mouse clicks, drag movements, resizer nodes, and in-line contenteditable sync
function bindElementInteractiveEvents(elementDiv, elementModel, slideModel) {
  
  // Element click selection
  elementDiv.addEventListener("mousedown", (e) => {
    // If not in select cursor mode, click handles placement/inserts
    if (activeTool !== "select") {
      handleCanvasClickInserts(e);
      return;
    }
    
    e.stopPropagation(); // prevent canvas deselect
    
    // Focus selection
    focusElement(elementDiv);
    
    // Initialize drag bounds
    if (e.target.classList.contains("resize-handle")) {
      isResizing = true;
      resizeDirection = e.target.getAttribute("data-dir");
      initialWidth = elementDiv.offsetWidth;
      initialHeight = elementDiv.offsetHeight;
      initialLeft = elementDiv.offsetLeft;
      initialTop = elementDiv.offsetTop;
      dragStartX = e.clientX;
      dragStartY = e.clientY;
    } else {
      isDragging = true;
      initialLeft = elementDiv.offsetLeft;
      initialTop = elementDiv.offsetTop;
      dragStartX = e.clientX;
      dragStartY = e.clientY;
    }
    
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  });
  
  // Sync changes typed on slide canvas directly into javascript slide model
  if (elementDiv.getAttribute("contenteditable") === "true") {
    elementDiv.addEventListener("input", () => {
      elementModel.content = formatFromHTML(elementDiv.innerHTML);
      // Generate thumbnail visual representation changes
      renderThumbnails();
    });
  }
  
  // Contextual text fields on sub-compound objects (stats, bentos, calendars)
  const compoundFields = elementDiv.querySelectorAll("[contenteditable='true']");
  compoundFields.forEach((field) => {
    field.addEventListener("input", () => {
      const fieldKey = field.getAttribute("data-field");
      if (fieldKey) {
        elementModel[fieldKey] = field.textContent.trim();
        renderThumbnails();
      }
    });
    
    // Block rich formatting clipboard pastes
    field.addEventListener("paste", (e) => {
      e.preventDefault();
      const text = e.clipboardData.getData("text/plain");
      document.execCommand("insertText", false, text);
    });
  });
}

function handleMouseMove(e) {
  if (!selectedElementId) return;
  const canvas = renderCanvasBody;
  const elementDiv = canvas.querySelector(`[data-element-id="${selectedElementId}"]`);
  if (!elementDiv) return;
  
  // Calculate scaling multiplier due to browser container scaling
  const scale = canvas.offsetWidth / 960; // relative base size
  
  const deltaX = (e.clientX - dragStartX) / scale;
  const deltaY = (e.clientY - dragStartY) / scale;
  
  const slide = slideData.find(s => s.id === activeSlideId);
  const elModel = slide.elements.find(el => el.id === selectedElementId);
  if (!elModel) return;
  
  if (isDragging) {
    const newLeftPx = initialLeft + deltaX * scale;
    const newTopPx = initialTop + deltaY * scale;
    
    // Convert to percentage offsets relative to slide size (960x540)
    const newLeftPct = (newLeftPx / canvas.offsetWidth) * 100;
    const newTopPct = (newTopPx / canvas.offsetHeight) * 100;
    
    // Bounds check
    const boundedLeft = Math.max(0, Math.min(95, newLeftPct));
    const boundedTop = Math.max(0, Math.min(95, newTopPct));
    
    elementDiv.style.left = `${boundedLeft.toFixed(2)}%`;
    elementDiv.style.top = `${boundedTop.toFixed(2)}%`;
    
    // Save to model
    elModel.left = elementDiv.style.left;
    elModel.top = elementDiv.style.top;
  }
  
  if (isResizing) {
    let newWidthPx = initialWidth;
    let newHeightPx = initialHeight;
    let newLeftPx = initialLeft;
    let newTopPx = initialTop;
    
    if (resizeDirection.includes("e")) {
      newWidthPx = initialWidth + deltaX * scale;
    }
    if (resizeDirection.includes("s")) {
      newHeightPx = initialHeight + deltaY * scale;
    }
    if (resizeDirection.includes("w")) {
      newWidthPx = initialWidth - deltaX * scale;
      newLeftPx = initialLeft + deltaX * scale;
    }
    if (resizeDirection.includes("n")) {
      newHeightPx = initialHeight - deltaY * scale;
      newTopPx = initialTop + deltaY * scale;
    }
    
    // Convert to percent
    const newWidthPct = (newWidthPx / canvas.offsetWidth) * 100;
    const newHeightPct = (newHeightPx / canvas.offsetHeight) * 100;
    const newLeftPct = (newLeftPx / canvas.offsetWidth) * 100;
    const newTopPct = (newTopPx / canvas.offsetHeight) * 100;
    
    if (newWidthPct > 2 && newWidthPct < 100) {
      elementDiv.style.width = `${newWidthPct.toFixed(2)}%`;
      elModel.width = elementDiv.style.width;
      if (resizeDirection.includes("w")) {
        elementDiv.style.left = `${newLeftPct.toFixed(2)}%`;
        elModel.left = elementDiv.style.left;
      }
    }
    
    if (newHeightPct > 2 && newHeightPct < 100) {
      elementDiv.style.height = `${newHeightPct.toFixed(2)}%`;
      elModel.height = elementDiv.style.height;
      if (resizeDirection.includes("n")) {
        elementDiv.style.top = `${newTopPct.toFixed(2)}%`;
        elModel.top = elementDiv.style.top;
      }
    }
  }
}

function handleMouseUp() {
  if (isDragging || isResizing) {
    saveHistoryState();
    renderThumbnails();
  }
  isDragging = false;
  isResizing = false;
  document.removeEventListener("mousemove", handleMouseMove);
  document.removeEventListener("mouseup", handleMouseUp);
}

// Highlight focus layout wraps, resizing handles nodes, and load toolbar active settings
function focusElement(elementDiv) {
  // Clear previous focused outlines
  document.querySelectorAll(".editable-element").forEach(el => {
    el.classList.remove("element-focused");
    el.querySelectorAll(".resize-handle").forEach(node => node.remove());
  });
  
  selectedElementId = elementDiv.getAttribute("data-element-id");
  elementDiv.classList.add("element-focused");
  
  // Insert 4 resize corners
  const corners = ["nw", "ne", "se", "sw"];
  corners.forEach(dir => {
    const handle = document.createElement("div");
    handle.className = `resize-handle resize-handle-${dir}`;
    handle.setAttribute("data-dir", dir);
    elementDiv.appendChild(handle);
  });
  
  // Find model properties and load into formatting toolbelt
  const slide = slideData.find(s => s.id === activeSlideId);
  const elModel = slide.elements.find(el => el.id === selectedElementId);
  updateToolbarState(elModel);
}

// Update the toolbelt UI controls to match the currently selected element styles
function updateToolbarState(elementModel) {
  if (!elementModel) {
    // Disable styling tools if nothing active
    ctrlFontFamily.disabled = true;
    ctrlFontSize.disabled = true;
    ctrlBold.disabled = true;
    ctrlItalic.disabled = true;
    ctrlUnderline.disabled = true;
    ctrlTextColor.disabled = true;
    ctrlFillColor.disabled = true;
    ctrlBorderColor.disabled = true;
    ctrlBorderWidth.disabled = true;
    ctrlRoundness.disabled = true;
    return;
  }
  
  // Enable items
  ctrlFontFamily.disabled = false;
  ctrlFontSize.disabled = false;
  ctrlBold.disabled = false;
  ctrlItalic.disabled = false;
  ctrlUnderline.disabled = false;
  ctrlTextColor.disabled = false;
  ctrlFillColor.disabled = false;
  ctrlBorderColor.disabled = false;
  ctrlBorderWidth.disabled = false;
  ctrlRoundness.disabled = false;
  
  const style = elementModel.style || {};
  
  // Load properties into fields
  ctrlFontFamily.value = style.fontFamily || "Manrope";
  
  const sizeVal = style.fontSize ? parseInt(style.fontSize) : 12;
  ctrlFontSize.value = sizeVal;
  
  ctrlBold.classList.toggle("active", style.fontWeight === "bold" || style.fontWeight === "800");
  ctrlItalic.classList.toggle("active", style.fontStyle === "italic");
  ctrlUnderline.classList.toggle("active", style.textDecoration === "underline");
  
  const textColor = style.color || "#ffffff";
  ctrlTextColor.value = textColor;
  indicatorTextColor.style.backgroundColor = textColor;
  
  const fillColor = style.backgroundColor || "#01373D";
  ctrlFillColor.value = fillColor;
  indicatorFillColor.style.backgroundColor = style.backgroundColor ? fillColor : "transparent";
  
  const borderColor = style.borderColor || "#00A5A3";
  ctrlBorderColor.value = borderColor;
  indicatorBorderColor.style.backgroundColor = style.borderColor ? borderColor : "transparent";
  
  const bWidth = style.borderWidth ? parseInt(style.borderWidth) : 0;
  ctrlBorderWidth.value = bWidth;
  
  const round = style.borderRadius ? parseInt(style.borderRadius) : 0;
  ctrlRoundness.value = round;
}

// Deselect selected shape if clicking dark space outside elements
function deselectElementOnClickOutside(e) {
  if (e.target.closest(".editable-element") || e.target.closest(".app-toolbelt") || e.target.closest(".app-header-bar") || e.target.closest(".slide-thumbnails-sidebar") || e.target.closest(".nav-arrow-btn")) {
    return;
  }
  
  // If text creation tool active, click inserts textbox
  if (activeTool === "textbox" || activeTool === "shape") {
    handleCanvasClickInserts(e);
    return;
  }
  
  selectedElementId = null;
  document.querySelectorAll(".editable-element").forEach(el => {
    el.classList.remove("element-focused");
    el.querySelectorAll(".resize-handle").forEach(node => node.remove());
  });
  updateToolbarState(null);
}

// Click-to-insert new text boxes or custom card shapes
function handleCanvasClickInserts(e) {
  const canvasArea = document.getElementById("canvas-main-viewport");
  if (!e.target.closest(".slide-canvas")) return;
  
  const rect = renderCanvasBody.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const clickY = e.clientY - rect.top;
  
  // Convert relative coordinates to percentage bounds
  const pctX = (clickX / rect.width) * 100;
  const pctY = (clickY / rect.height) * 100;
  
  const slide = slideData.find(s => s.id === activeSlideId);
  const newElId = `el-${slide.id}-custom-${Date.now()}`;
  
  let newEl = {};
  if (activeTool === "textbox") {
    newEl = {
      id: newElId,
      type: "text",
      left: `${pctX.toFixed(2)}%`,
      top: `${pctY.toFixed(2)}%`,
      width: "25%",
      height: "10%",
      content: "Double click to edit text",
      style: {
        fontFamily: "Manrope",
        fontSize: "12px",
        color: slide.theme === "dark" ? "#ffffff" : "#01373D",
        fontWeight: "normal"
      }
    };
  } else if (activeTool === "shape") {
    newEl = {
      id: newElId,
      type: "card",
      left: `${pctX.toFixed(2)}%`,
      top: `${pctY.toFixed(2)}%`,
      width: "20%",
      height: "15%",
      style: {
        backgroundColor: "#E6EFF0",
        borderRadius: "6px",
        borderWidth: "0px"
      }
    };
  }
  
  slide.elements.push(newEl);
  saveHistoryState();
  renderThumbnails();
  renderActiveSlide();
  
  // Auto-focus new element
  setTimeout(() => {
    const newlyCreatedDiv = renderCanvasBody.querySelector(`[data-element-id="${newElId}"]`);
    if (newlyCreatedDiv) focusElement(newlyCreatedDiv);
  }, 50);
  
  setTool("select"); // reset tool
}

// Keyboard arrow key nudge adjustments
function handleKeydown(e) {
  // presentation navigation keys
  if (e.key === "Escape" && isPresentationMode) {
    exitPresentationMode();
    return;
  }
  
  if (isPresentationMode) {
    if (e.key === "ArrowRight" || e.key === "Space") {
      navigateNext();
    } else if (e.key === "ArrowLeft" || e.key === "Backspace") {
      navigatePrevious();
    }
    return;
  }
  
  // Ignore delete/arrows keydowns if actively typing in editor text areas
  if (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA" || document.activeElement.getAttribute("contenteditable") === "true") {
    return;
  }
  
  // Undo shortcut
  if (e.ctrlKey && e.key === "z") {
    e.preventDefault();
    triggerUndo();
  }
  if (e.ctrlKey && e.key === "y") {
    e.preventDefault();
    triggerRedo();
  }
  
  if (!selectedElementId) return;
  
  const slide = slideData.find(s => s.id === activeSlideId);
  const el = slide.elements.find(el => el.id === selectedElementId);
  if (!el) return;
  
  // Delete selected element
  if (e.key === "Backspace" || e.key === "Delete") {
    e.preventDefault();
    deleteSelectedElement();
    return;
  }
  
  // Arrow nudge operations
  const nudgeStep = e.shiftKey ? 2.0 : 0.5; // shift nudge is 2%
  let currentLeft = parseFloat(el.left);
  let currentTop = parseFloat(el.top);
  
  if (e.key === "ArrowUp") {
    e.preventDefault();
    el.top = `${Math.max(0, currentTop - nudgeStep).toFixed(2)}%`;
    saveHistoryState();
    renderActiveSlide();
  } else if (e.key === "ArrowDown") {
    e.preventDefault();
    el.top = `${Math.min(95, currentTop + nudgeStep).toFixed(2)}%`;
    saveHistoryState();
    renderActiveSlide();
  } else if (e.key === "ArrowLeft") {
    e.preventDefault();
    el.left = `${Math.max(0, currentLeft - nudgeStep).toFixed(2)}%`;
    saveHistoryState();
    renderActiveSlide();
  } else if (e.key === "ArrowRight") {
    e.preventDefault();
    el.left = `${Math.min(95, currentLeft + nudgeStep).toFixed(2)}%`;
    saveHistoryState();
    renderActiveSlide();
  }
}

// ==================== DYNAMIC FORMATTING OPERATIONS ====================

function getSelectedElementModel() {
  if (!selectedElementId) return null;
  const slide = slideData.find(s => s.id === activeSlideId);
  return slide.elements.find(el => el.id === selectedElementId);
}

function applyFontFamilyChange() {
  const el = getSelectedElementModel();
  if (!el) return;
  el.style = el.style || {};
  el.style.fontFamily = ctrlFontFamily.value;
  saveHistoryState();
  renderThumbnails();
  renderActiveSlide();
}

function applyFontSizeChange() {
  const el = getSelectedElementModel();
  if (!el) return;
  el.style = el.style || {};
  el.style.fontSize = `${parseInt(ctrlFontSize.value)}px`;
  saveHistoryState();
  renderThumbnails();
  renderActiveSlide();
}

function adjustFontSize(delta) {
  const el = getSelectedElementModel();
  if (!el) return;
  el.style = el.style || {};
  const currentSize = el.style.fontSize ? parseInt(el.style.fontSize) : 12;
  const nextSize = Math.max(6, currentSize + delta);
  el.style.fontSize = `${nextSize}px`;
  ctrlFontSize.value = nextSize;
  saveHistoryState();
  renderThumbnails();
  renderActiveSlide();
}

function toggleBold() {
  const el = getSelectedElementModel();
  if (!el) return;
  el.style = el.style || {};
  const isBold = el.style.fontWeight === "bold" || el.style.fontWeight === "800";
  el.style.fontWeight = isBold ? "normal" : "bold";
  saveHistoryState();
  renderThumbnails();
  renderActiveSlide();
}

function toggleItalic() {
  const el = getSelectedElementModel();
  if (!el) return;
  el.style = el.style || {};
  el.style.fontStyle = el.style.fontStyle === "italic" ? "normal" : "italic";
  saveHistoryState();
  renderThumbnails();
  renderActiveSlide();
}

function toggleUnderline() {
  const el = getSelectedElementModel();
  if (!el) return;
  el.style = el.style || {};
  el.style.textDecoration = el.style.textDecoration === "underline" ? "none" : "underline";
  saveHistoryState();
  renderThumbnails();
  renderActiveSlide();
}

function applyTextColorChange() {
  const el = getSelectedElementModel();
  if (!el) return;
  el.style = el.style || {};
  el.style.color = ctrlTextColor.value;
  indicatorTextColor.style.backgroundColor = ctrlTextColor.value;
  saveHistoryState();
  renderThumbnails();
  renderActiveSlide();
}

function applyFillColorChange() {
  const el = getSelectedElementModel();
  if (!el) return;
  el.style = el.style || {};
  el.style.backgroundColor = ctrlFillColor.value;
  indicatorFillColor.style.backgroundColor = ctrlFillColor.value;
  saveHistoryState();
  renderThumbnails();
  renderActiveSlide();
}

function applyBorderColorChange() {
  const el = getSelectedElementModel();
  if (!el) return;
  el.style = el.style || {};
  el.style.borderColor = ctrlBorderColor.value;
  el.style.borderStyle = "solid";
  indicatorBorderColor.style.backgroundColor = ctrlBorderColor.value;
  saveHistoryState();
  renderThumbnails();
  renderActiveSlide();
}

function applyBorderWidthChange() {
  const el = getSelectedElementModel();
  if (!el) return;
  el.style = el.style || {};
  el.style.borderWidth = `${ctrlBorderWidth.value}px`;
  el.style.borderStyle = parseInt(ctrlBorderWidth.value) > 0 ? "solid" : "none";
  saveHistoryState();
  renderThumbnails();
  renderActiveSlide();
}

function applyRoundnessChange() {
  const el = getSelectedElementModel();
  if (!el) return;
  el.style = el.style || {};
  el.style.borderRadius = `${ctrlRoundness.value}px`;
  saveHistoryState();
  renderThumbnails();
  renderActiveSlide();
}

// Bring element forward (increases z-index)
function bringForward() {
  const el = getSelectedElementModel();
  if (!el) return;
  el.style = el.style || {};
  const currZ = el.style.zIndex ? parseInt(el.style.zIndex) : 1;
  el.style.zIndex = currZ + 1;
  saveHistoryState();
  renderActiveSlide();
}

// Send element backward (decreases z-index)
function sendBackward() {
  const el = getSelectedElementModel();
  if (!el) return;
  el.style = el.style || {};
  const currZ = el.style.zIndex ? parseInt(el.style.zIndex) : 1;
  el.style.zIndex = Math.max(1, currZ - 1);
  saveHistoryState();
  renderActiveSlide();
}

// Snap object to strict margin grid (aligns element boundaries cleanly to 6% safety zone)
function snapSelectedToGrid() {
  const el = getSelectedElementModel();
  if (!el) return;
  
  // Snap guidelines: align left/top/width/height to nearest 2%
  const snap = (pctStr) => {
    const val = parseFloat(pctStr);
    const nearest = Math.round(val / 2) * 2;
    return `${nearest}%`;
  };
  
  el.left = snap(el.left);
  el.top = snap(el.top);
  el.width = snap(el.width);
  el.height = snap(el.height);
  
  saveHistoryState();
  renderThumbnails();
  renderActiveSlide();
}

function deleteSelectedElement() {
  if (!selectedElementId) return;
  const slide = slideData.find(s => s.id === activeSlideId);
  
  // Prevent deleting critical layout headers
  const el = slide.elements.find(e => e.id === selectedElementId);
  if (el && (el.type === "header" || el.id === "el-14-back" || el.id === "el-9-img")) {
    alert("Critical layout element cannot be deleted.");
    return;
  }
  
  slide.elements = slide.elements.filter(e => e.id !== selectedElementId);
  selectedElementId = null;
  saveHistoryState();
  renderThumbnails();
  renderActiveSlide();
}

// Base64 Local Image Swap uploader
function handleLocalImageUpload(e) {
  const file = e.target.files[0];
  if (!file) return;
  
  const el = getSelectedElementModel();
  if (!el || (el.type !== "image" && el.id !== "el-14-back")) {
    alert("Please select an image placeholder card on the slide before uploading.");
    return;
  }
  
  const reader = new FileReader();
  reader.onload = (event) => {
    const base64Url = event.target.result;
    
    // Save image Base64 state into slide model properties
    el.style = el.style || {};
    el.style.backgroundImage = `url('${base64Url}')`;
    
    saveHistoryState();
    renderThumbnails();
    renderActiveSlide();
  };
  reader.readAsDataURL(file);
}

// ==================== NAVIGATION AND PRESENTATION CONTROLLERS ====================

function navigatePrevious() {
  let prevId = activeSlideId - 1;
  while (prevId >= 1) {
    if (slideData[prevId - 1].visible) {
      activeSlideId = prevId;
      selectedElementId = null;
      updateActiveSlideUI();
      if (isPresentationMode) handleWindowResize();
      return;
    }
    prevId--;
  }
}

function navigateNext() {
  let nextId = activeSlideId + 1;
  while (nextId <= slideData.length) {
    if (slideData[nextId - 1].visible) {
      activeSlideId = nextId;
      selectedElementId = null;
      updateActiveSlideUI();
      if (isPresentationMode) handleWindowResize();
      return;
    }
    nextId++;
  }
}

function togglePresentationMode() {
  if (isPresentationMode) {
    exitPresentationMode();
  } else {
    enterPresentationMode();
  }
}

function enterPresentationMode() {
  isPresentationMode = true;
  document.body.classList.add("presentation-mode");
  
  // Deselect active focus outline
  selectedElementId = null;
  document.querySelectorAll(".editable-element").forEach(el => {
    el.classList.remove("element-focused");
    el.querySelectorAll(".resize-handle").forEach(node => node.remove());
  });
  updateToolbarState(null);
  
  handleWindowResize();
}

function exitPresentationMode() {
  isPresentationMode = false;
  document.body.classList.remove("presentation-mode");
  slideWrapperElement.style.transform = "none";
  renderActiveSlide();
}

function handleWindowResize() {
  if (!isPresentationMode) return;
  const canvasWidth = 960;
  const canvasHeight = 540;
  const scale = Math.min(window.innerWidth / canvasWidth, window.innerHeight / canvasHeight);
  slideWrapperElement.style.transform = `scale(${scale})`;
}

// Export customized slideshow layout to landscape multi-page vector PDF
function exportPDF() {
  // Deselect selected element
  selectedElementId = null;
  document.querySelectorAll(".editable-element").forEach(el => {
    el.classList.remove("element-focused");
    el.querySelectorAll(".resize-handle").forEach(node => node.remove());
  });
  updateToolbarState(null);
  
  const printContainer = document.createElement("div");
  printContainer.style.position = "absolute";
  printContainer.style.left = "-9999px";
  printContainer.style.top = "-9999px";
  printContainer.style.width = "960px";
  
  document.body.appendChild(printContainer);
  
  // Render pages
  slideData.forEach(slide => {
    if (!slide.visible) return;
    
    const page = document.createElement("div");
    page.style.width = "960px";
    page.style.height = "540px";
    page.style.position = "relative";
    page.style.overflow = "hidden";
    page.style.pageBreakAfter = "always";
    page.style.breakAfter = "page";
    
    const canvas = document.createElement("div");
    canvas.className = `slide-canvas slide-theme-${slide.theme}`;
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.boxSizing = "border-box";
    canvas.style.padding = "6%";
    canvas.style.position = "relative";
    canvas.style.overflow = "hidden";
    
    // Clone page HTML
    canvas.innerHTML = buildMiniPreviewMarkup(slide);
    page.appendChild(canvas);
    printContainer.appendChild(page);
  });
  
  const opt = {
    margin:       0,
    filename:     'Trescon_Corporate_Pitch_Deck_Customized.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true, logging: false },
    jsPDF:        { unit: 'px', format: [960, 540], orientation: 'landscape' }
  };
  
  html2pdf().from(printContainer).set(opt).save().then(() => {
    document.body.removeChild(printContainer);
  }).catch(err => {
    console.error("PDF generation error: ", err);
    document.body.removeChild(printContainer);
    alert("PDF generation failed.");
  });
}

// Run app on window load
document.addEventListener("DOMContentLoaded", init);
