export interface UiUxStage {
  name: string;
  title: string;
  subtitle: string;
  cards: string[];
  image: string;
  imageAlt: string;
}

export interface UiUxSimulatorTab {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  details: string[];
  screenImage: string;
  screenImageAlt: string;
}

export interface UiUxFeatureCard {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface UiUxCategoryData {
  slug: string;
  title: string;
  badge: string;
  headingBold: string;
  headingCursive: string;
  heroImage: string;
  heroImageAlt: string;
  description: string;
  ctaText: string;
  inputPlaceholder: string;
  trustLogos: { name: string; label: string }[];
  stages: UiUxStage[];
  simulatorTitleBold: string;
  simulatorTitleCursive: string;
  simulatorSubtitle: string;
  simulatorTabs: UiUxSimulatorTab[];
  featuresCards: UiUxFeatureCard[];
}

export const uiUxCategories: Record<string, UiUxCategoryData> = {
  "web-application-design": {
    slug: "web-application-design",
    title: "Web App UI/UX Design",
    badge: "Web App UI/UX Design",
    headingBold: "Intuitive Web App",
    headingCursive: "interfaces.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    heroImageAlt: "Secoda inspired light theme web application dashboard interface",
    description: "Designing data-dense SaaS dashboards and web application interfaces built with clean design systems, component libraries, and effortless user workflows.",
    ctaText: "Start Free Trial",
    inputPlaceholder: "What's your work email?",
    trustLogos: [
      { name: "Secoda", label: "★ 5.0 Rated" },
      { name: "DailyPay", label: "dailypay." },
      { name: "Loop", label: "loop" },
      { name: "6sense", label: "6sense" },
      { name: "IQVIA", label: "IQVIA" },
      { name: "Vanta", label: "Vanta" },
      { name: "Remote", label: "Remote" }
    ],
    stages: [
      {
        name: "Information Architecture",
        title: "Information Architecture & User Flows",
        subtitle: "Mapping complex SaaS data structures into intuitive navigation models.",
        cards: ["Sitemap Planning", "User Journey Maps", "Navigation Specs"],
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
        imageAlt: "UX designer mapping information architecture"
      },
      {
        name: "Design Systems",
        title: "Scalable Component Libraries",
        subtitle: "Authoring reusable Figma token libraries for rapid engineering handoff.",
        cards: ["Figma Tokens", "Component Variants", "Design Documentation"],
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Design system component tokens canvas"
      },
      {
        name: "High-Fidelity UI",
        title: "Data-Dense Dashboard Interfaces",
        subtitle: "Designing crisp light theme web UI optimized for speed and clarity.",
        cards: ["Data Visualization", "Micro-Interactions", "Responsive Grids"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        imageAlt: "High fidelity web application dashboard"
      },
      {
        name: "Interactive Prototypes",
        title: "Fluid Prototyping & Motion",
        subtitle: "Building clickable web prototypes to validate workflows with real users.",
        cards: ["Figma Interactive Views", "State Transitions", "User Testing Runs"],
        image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Interactive web prototype in browser"
      },
      {
        name: "Accessibility Audit",
        title: "WCAG AAA Compliance Verification",
        subtitle: "Ensuring full accessibility compliance for enterprise web platforms.",
        cards: ["Contrast Ratios (7:1)", "Screen Reader Tags", "Keyboard Nav Specs"],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Accessibility audit scorecard dashboard"
      },
      {
        name: "Developer Handoff",
        title: "Pixel-Perfect Code Handoff",
        subtitle: "Delivering clean Tailwind CSS and React component specs for developers.",
        cards: ["Tailwind Theme Config", "Storybook Integration", "Asset Exports"],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Developer handoff documentation interface"
      }
    ],
    simulatorTitleBold: "Real-world web application design",
    simulatorTitleCursive: "use cases",
    simulatorSubtitle: "Discover how our user-centric design solutions transform complex data into intuitive experiences.",
    simulatorTabs: [
      {
        id: "saas-analytics-workspace",
        title: "SaaS Analytics Command Center",
        subtitle: "Data-Dense Executive Dashboard Design",
        badge: "Analytics UI",
        details: [
          "Clean light mode visual hierarchy reducing cognitive fatigue for daily users.",
          "Custom data visualization charts with interactive hover states.",
          "Modular widget drag-and-drop customization grid."
        ],
        screenImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
        screenImageAlt: "SaaS analytics workspace web interface"
      },
      {
        id: "fintech-trading-platform",
        title: "FinTech Trading & Investment Platform",
        subtitle: "Real-Time Financial Telemetry UI",
        badge: "FinTech UI",
        details: [
          "Sub-second live order book charts designed for high-frequency trading.",
          "Accessible color contrast tokens preventing visual clutter during market spikes.",
          "Multi-monitor responsive breakpoint optimization."
        ],
        screenImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop",
        screenImageAlt: "FinTech trading platform web dashboard"
      },
      {
        id: "healthcare-ehr-portal",
        title: "Healthcare EHR System",
        subtitle: "Intuitive Patient Management Workspace",
        badge: "Healthcare",
        details: [
          "Streamlined patient chart layouts reducing cognitive load for clinicians.",
          "One-click search navigation for instant medical record access.",
          "HIPAA-compliant UI security patterns and session masks."
        ],
        screenImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
        screenImageAlt: "Healthcare clinical records interface screen"
      },
      {
        id: "e-commerce-admin-studio",
        title: "E-Commerce Merchant Studio",
        subtitle: "Global Product & Inventory Management UI",
        badge: "E-Commerce",
        details: [
          "Drag-and-drop catalog organization tools with live store previews.",
          "Unified order fulfillment view handling high-volume inventory sync.",
          "Custom design system components scaling across multi-storefronts."
        ],
        screenImage: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop",
        screenImageAlt: "E-commerce merchant studio web interface"
      },
      {
        id: "global-design-system-hub",
        title: "Enterprise Design System Hub",
        subtitle: "Unified Design Token & Component Repository",
        badge: "Design Tokens",
        details: [
          "Centralized design token repository powering multi-platform consistency.",
          "Automated versioning and component change logs for product teams.",
          "Accessible UI pattern library with built-in contrast compliance."
        ],
        screenImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
        screenImageAlt: "Enterprise design system documentation hub interface"
      }
    ],
    featuresCards: [
      {
        title: "Canvas",
        description: "Architect comprehensive SaaS web application interfaces with pixel-perfect component tokens.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Design canvas UI system layout"
      },
      {
        title: "Studio",
        description: "Build interactive web prototypes with fluid micro-animations and seamless state transitions.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        imageAlt: "UI prototyping studio interface"
      },
      {
        title: "Engine IQ",
        description: "Conduct automated accessibility audits and design system token health checks across all pages.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Design token intelligence auditor"
      },
      {
        title: "Trust",
        description: "Ensure WCAG AAA accessibility compliance and secure design patterns for enterprise web applications.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Accessibility compliance trust badge"
      }
    ]
  },
  "mobile-app-ui-ux": {
    slug: "mobile-app-ui-ux",
    title: "Mobile App UI/UX Design",
    badge: "Mobile App UI/UX Design",
    headingBold: "Engaging Mobile App",
    headingCursive: "experiences.",
    heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    heroImageAlt: "Secoda inspired light theme mobile application UI design mockup",
    description: "Crafting thumb-friendly iOS and Android mobile app interfaces with liquid micro-interactions, gesture navigation, and native iOS HIG & Material 3 adherence.",
    ctaText: "Start Free Trial",
    inputPlaceholder: "What's your work email?",
    trustLogos: [
      { name: "Secoda", label: "★ 5.0 Rated" },
      { name: "DailyPay", label: "dailypay." },
      { name: "Loop", label: "loop" },
      { name: "6sense", label: "6sense" },
      { name: "IQVIA", label: "IQVIA" },
      { name: "Vanta", label: "Vanta" },
      { name: "Remote", label: "Remote" }
    ],
    stages: [
      {
        name: "Mobile UX Mapping",
        title: "Mobile User Flow & Screen Architecture",
        subtitle: "Optimizing tap targets and single-hand navigation flows.",
        cards: ["Tap Heatmaps", "Screen Flow Maps", "Gesture Specs"],
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Mobile app user flow planning"
      },
      {
        name: "iOS HIG & Material 3",
        title: "Native Platform Design Systems",
        subtitle: "Aligning UI elements with Apple Human Interface Guidelines and Google Material 3.",
        cards: ["Apple HIG Tokens", "Material 3 Colors", "Dynamic Island Specs"],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
        imageAlt: "iOS and Android native UI guidelines"
      },
      {
        name: "Micro-Interactions",
        title: "Haptic & Motion Feedback",
        subtitle: "Designing subtle button states, card swipes, and fluid page transitions.",
        cards: ["Framer Motion", "Lottie Animations", "Haptic Sync"],
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Mobile micro-animation motion prototype"
      },
      {
        name: "Mobile Prototyping",
        title: "On-Device Interactive Preview",
        subtitle: "Testing clickable prototypes directly on iPhone and Android mobile hardware.",
        cards: ["Figma Mirror", "Mobile User Testing", "Gestures Validation"],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
        imageAlt: "On-device mobile prototype preview"
      },
      {
        name: "Accessibility Audit",
        title: "Dynamic Type & Contrast Check",
        subtitle: "Ensuring legibility across varied screen brightnesses and text size preferences.",
        cards: ["Dynamic Type Support", "Contrast Audit", "Screen Reader Tags"],
        image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Mobile accessibility design check"
      },
      {
        name: "Mobile Handoff",
        title: "Asset Export & Dev Tokens",
        subtitle: "Providing Xcode & Android Studio developers with SVG vectors and JSON Lottie files.",
        cards: ["SVG Icon Bundles", "Lottie Json Assets", "SwiftUI Specs"],
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Mobile design asset export"
      }
    ],
    simulatorTitleBold: "Real-world mobile app UI/UX",
    simulatorTitleCursive: "use cases",
    simulatorSubtitle: "Discover how our native mobile UI designs elevate engagement for top App Store products.",
    simulatorTabs: [
      {
        id: "fintech-mobile-wallet",
        title: "FinTech Mobile Banking Wallet",
        subtitle: "Sub-10ms Biometric Auth & Card UI",
        badge: "Mobile FinTech",
        details: [
          "Fluid card flip animations during quick contactless payment selections.",
          "Haptic feedback triggers confirming instant fund transfers.",
          "Minimalist light mode dashboard displaying live balance analytics."
        ],
        screenImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop",
        screenImageAlt: "FinTech mobile wallet app UI"
      },
      {
        id: "health-fitness-tracker",
        title: "Health & Active Fitness Companion",
        subtitle: "Real-Time Sensor Telemetry & Vitals UI",
        badge: "Health UI",
        details: [
          "Glanceable circular activity progress rings with celebratory micro-animations.",
          "One-hand workout controls optimized for exercise environments.",
          "High-visibility light theme built for outdoor sunlight legibility."
        ],
        screenImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
        screenImageAlt: "Health and fitness mobile app interface"
      },
      {
        id: "e-commerce-shopping-app",
        title: "E-Commerce Shopping App",
        subtitle: "One-Tap Apple Pay Checkout Flow",
        badge: "Shopping UI",
        details: [
          "Seamless product swipe gallery with interactive 3D zoom previews.",
          "Instant floating cart button with animated badge counters.",
          "Frictionless checkout sequence designed for high conversion rates."
        ],
        screenImage: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=800&auto=format&fit=crop",
        screenImageAlt: "E-commerce shopping mobile application interface"
      },
      {
        id: "social-media-content-feed",
        title: "Social Media & Community Feed",
        subtitle: "Lag-Free Infinite Media Streaming",
        badge: "Social Media",
        details: [
          "Smooth vertical reel swiping with floating reaction buttons.",
          "Intuitive media creator studio with live filter toggles.",
          "Clean typography hierarchy enhancing post readability."
        ],
        screenImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
        screenImageAlt: "Social media mobile video feed UI"
      },
      {
        id: "on-demand-delivery-app-ui",
        title: "On-Demand Delivery & Fleet Dispatch UI",
        subtitle: "Real-Time GPS Map Telemetry",
        badge: "Delivery UI",
        details: [
          "Live map pin tracking with micro-animations showing driver proximity.",
          "Sub-second order state updates via WebSockets.",
          "High-contrast light mode UI optimized for outdoor driver visibility."
        ],
        screenImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
        screenImageAlt: "On demand delivery mobile map interface"
      }
    ],
    featuresCards: [
      {
        title: "Canvas",
        description: "Design iOS & Android layouts with thumb-zone ergonomics and native HIG component tokens.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Mobile app UI canvas"
      },
      {
        title: "Studio",
        description: "Prototype liquid screen transitions and haptic feedback triggers in high-fidelity Figma models.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Mobile UI motion studio"
      },
      {
        title: "Engine IQ",
        description: "Test gesture responsiveness and frame-rate rendering performance across iPhone and Android devices.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Mobile app performance testing"
      },
      {
        title: "Trust",
        description: "Enforce biometrics security UI patterns and accessible Dynamic Type contrast across all screens.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Mobile security design trust"
      }
    ]
  },
  "design-systems-component-libraries": {
    slug: "design-systems-component-libraries",
    title: "Design Systems & Component Kits",
    badge: "Design Systems & Component Kits",
    headingBold: "Scalable Design Systems &",
    headingCursive: "token kits.",
    heroImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    heroImageAlt: "Secoda inspired light theme design system tokens component library mockup",
    description: "Architecting enterprise Figma design systems, reusable React component libraries, and unified design token standards across product teams.",
    ctaText: "Start Free Trial",
    inputPlaceholder: "What's your work email?",
    trustLogos: [
      { name: "Secoda", label: "★ 5.0 Rated" },
      { name: "DailyPay", label: "dailypay." },
      { name: "Loop", label: "loop" },
      { name: "6sense", label: "6sense" },
      { name: "IQVIA", label: "IQVIA" },
      { name: "Vanta", label: "Vanta" },
      { name: "Remote", label: "Remote" }
    ],
    stages: [
      {
        name: "Token Audit",
        title: "Design Token Audit & Standardization",
        subtitle: "Cataloging existing UI variants, color palettes, and typographic scales.",
        cards: ["Color Palettes", "Typography Scale", "Spacing Grid (8px)"],
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Design token audit visualizer"
      },
      {
        name: "Figma Components",
        title: "Figma Auto-Layout Component Library",
        subtitle: "Building responsive Figma variants with boolean props and auto-layout rigidity.",
        cards: ["Auto-Layout 5.0", "Component Variants", "Interactive States"],
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Figma auto-layout component library"
      },
      {
        name: "React / Vue Sync",
        title: "Code-Synced Component Mapping",
        subtitle: "Connecting Figma tokens directly to React, Next.js, or Tailwind CSS codebases.",
        cards: ["Style Dictionary", "Tailwind Theme Tokens", "Storybook Docs"],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Storybook component documentation"
      },
      {
        name: "Governance",
        title: "Design System Guidelines & Docs",
        subtitle: "Authoring comprehensive usage guidelines and component lifecycle rules.",
        cards: ["Zeroheight Docs", "Do's & Don'ts", "Contribution Model"],
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Design system documentation portal"
      },
      {
        name: "Version Control",
        title: "Figma Library Versioning",
        subtitle: "Managing smooth updates and deprecation notices across product teams.",
        cards: ["Figma Release Notes", "Migration Guides", "Breaking Change Logs"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Design system versioning release notes"
      },
      {
        name: "System Adoption",
        title: "Team Onboarding & Enablement",
        subtitle: "Training design and engineering teams on system adoption.",
        cards: ["Design Workshops", "Dev Integration", "Token CI/CD Sync"],
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Design system workshop team collaboration"
      }
    ],
    simulatorTitleBold: "Enterprise design system",
    simulatorTitleCursive: "use cases",
    simulatorSubtitle: "Examine how unified component kits accelerate product releases by 3x across global engineering teams.",
    simulatorTabs: [
      {
        id: "multi-brand-design-system",
        title: "Multi-Brand White-Label System",
        subtitle: "Unified Tokens Driving Multiple Sub-Brands",
        badge: "Multi-Brand",
        details: [
          "Dynamic theme switching powered by CSS custom properties and Figma variables.",
          "Single token update reflecting instantly across 10+ branded product apps.",
          "Zero code duplication between web and mobile component repositories."
        ],
        screenImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
        screenImageAlt: "Multi-brand design system token dashboard"
      },
      {
        id: "storybook-react-kit",
        title: "Storybook React Component Kit",
        subtitle: "Pixel-Perfect Code-First UI Components",
        badge: "Storybook Kit",
        details: [
          "Live interactive Storybook documentation for every UI button, input, and modal.",
          "Automated visual regression testing blocking breaking UI commits.",
          "Built-in accessibility controls verifying WCAG compliance in real-time."
        ],
        screenImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
        screenImageAlt: "Storybook React component kit documentation screen"
      },
      {
        id: "figma-tokens-sync",
        title: "Figma Variables & Tokens Pipeline",
        subtitle: "Continuous Integration for Design Assets",
        badge: "Tokens Sync",
        details: [
          "Automated GitHub Action exporting Figma variables to JSON token files.",
          "Seamless sync with Tailwind CSS config files on every design release.",
          "Instant version rollback capabilities ensuring zero downtime."
        ],
        screenImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
        screenImageAlt: "Figma token sync GitHub pipeline"
      },
      {
        id: "accessible-design-tokens",
        title: "WCAG AAA Accessible Color System",
        subtitle: "Inclusive Color & Contrast Tokens",
        badge: "Accessibility",
        details: [
          "Curated accessible color pairs meeting strict 7:1 contrast ratios.",
          "Dynamic high-contrast light mode options built-in by default.",
          "Screen reader friendly focus indicator tokens across all interactive elements."
        ],
        screenImage: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop",
        screenImageAlt: "Accessible color token system preview"
      },
      {
        id: "cross-platform-token-compiler",
        title: "Cross-Platform Style Dictionary Compiler",
        subtitle: "Figma Tokens Compiled to iOS, Android & Web",
        badge: "Tokens Compiler",
        details: [
          "Automated Style Dictionary pipeline exporting Swift, Kotlin, and CSS variables.",
          "Single source of truth eliminating token mismatch across engineering teams.",
          "Automated pull requests created on design token update releases."
        ],
        screenImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        screenImageAlt: "Design token compiler pipeline dashboard"
      }
    ],
    featuresCards: [
      {
        title: "Canvas",
        description: "Build robust Figma auto-layout libraries with comprehensive component variant matrixes.",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Design system component canvas"
      },
      {
        title: "Studio",
        description: "Automate design token exports to GitHub repositories via Style Dictionary build scripts.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Token export automation studio"
      },
      {
        title: "Engine IQ",
        description: "Run automated visual regression tests in Storybook to block breaking component changes.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Visual regression testing engine"
      },
      {
        title: "Trust",
        description: "Enforce WCAG AAA accessibility compliance standards across every component token.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Component accessibility trust"
      }
    ]
  },
  "ux-audit-conversion-optimization": {
    slug: "ux-audit-conversion-optimization",
    title: "UX Audit & Conversion Optimization",
    badge: "UX Audit & CRO",
    headingBold: "Intuitive Web App",
    headingCursive: "interfaces.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    heroImageAlt: "Secoda inspired light theme web application dashboard interface",
    description: "Designing data-dense SaaS dashboards and web application interfaces built with clean design systems, component libraries, and effortless user workflows.",
    ctaText: "Start Free Trial",
    inputPlaceholder: "What's your work email?",
    trustLogos: [
      { name: "Secoda", label: "★ 5.0 Rated" },
      { name: "DailyPay", label: "dailypay." },
      { name: "Loop", label: "loop" },
      { name: "6sense", label: "6sense" },
      { name: "IQVIA", label: "IQVIA" },
      { name: "Vanta", label: "Vanta" },
      { name: "Remote", label: "Remote" }
    ],
    stages: [
      {
        name: "User Research",
        title: "User Persona & Journey Mapping",
        subtitle: "Analyzing target audience behavior to build intuitive user pathways.",
        cards: ["Persona Profiles", "Empathy Maps", "Task Flows"],
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
        imageAlt: "User journey mapping session"
      },
      {
        name: "Wireframing",
        title: "Low-Fidelity Architecture",
        subtitle: "Structuring key layout blueprints and navigation hierarchies.",
        cards: ["Figma Wireframes", "UX Skeleton", "Content Layouts"],
        image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Low-fidelity wireframe sketches"
      },
      {
        name: "Design System",
        title: "Design Tokens & UI Kit",
        subtitle: "Building reusable color, typography, and component systems.",
        cards: ["Token Architecture", "UI Component Kit", "Dark/Light Modes"],
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Figma design system component kit"
      },
      {
        name: "Prototyping",
        title: "Interactive Micro-Animations",
        subtitle: "Creating high-fidelity clickable prototypes with realistic motion state.",
        cards: ["Figma Smart Animate", "Interactive States", "User Testing"],
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Interactive web prototype animation"
      },
      {
        name: "Usability Testing",
        title: "User Feedback & Iteration",
        subtitle: "Validating navigation usability with real target users.",
        cards: ["A/B Testing", "Heatmap Analysis", "Conversion Tuning"],
        image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Usability testing session screen"
      },
      {
        name: "Developer Handoff",
        title: "Pixel-Perfect Spec Handoff",
        subtitle: "Exporting clean CSS variables, assets, and React component specs.",
        cards: ["Figma Code Specs", "Asset Export", "Design Tokens Sync"],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Developer handoff documentation in Figma"
      }
    ],
    simulatorTitleBold: "Real-world web application",
    simulatorTitleCursive: "UI/UX use cases",
    simulatorSubtitle: "Explore how our web application design systems streamline complex enterprise operations.",
    simulatorTabs: [
      {
        id: "saas-analytics-dashboard",
        title: "SaaS Analytics & Data Hub",
        subtitle: "Governed AI & Data Intelligence Dashboards",
        badge: "SaaS Hub",
        details: [
          "Clean visual hierarchy for complex multi-chart telemetry displays.",
          "High-contrast light mode UI optimized for prolonged workday focus.",
          "Seamless responsive breakpoints for desktop and tablet screens."
        ],
        screenImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
        screenImageAlt: "SaaS analytics dashboard interface mockup"
      },
      {
        id: "fintech-trading-platform",
        title: "FinTech & Investment Portal",
        subtitle: "Sub-Second Trading & Portfolio Telemetry UI",
        badge: "FinTech UI",
        details: [
          "Zero-clutter financial tables with dynamic row sorting and filtering.",
          "Micro-interactions providing instant visual feedback on trades.",
          "Accessible color schemes compliant with WCAG AAA standards."
        ],
        screenImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop",
        screenImageAlt: "FinTech investment trading dashboard UI"
      },
      {
        id: "healthcare-clinical-portal",
        title: "Healthcare EHR System",
        subtitle: "Intuitive Patient Management Workspace",
        badge: "Healthcare",
        details: [
          "Streamlined patient chart layouts reducing cognitive load for clinicians.",
          "One-click search navigation for instant medical record access.",
          "HIPAA-compliant UI security patterns and session masks."
        ],
        screenImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
        screenImageAlt: "Healthcare clinical records interface screen"
      },
      {
        id: "e-commerce-admin-studio",
        title: "E-Commerce Merchant Studio",
        subtitle: "Global Product & Inventory Management UI",
        badge: "E-Commerce",
        details: [
          "Drag-and-drop catalog organization tools with live store previews.",
          "Unified order fulfillment view handling high-volume inventory sync.",
          "Custom design system components scaling across multi-storefronts."
        ],
        screenImage: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop",
        screenImageAlt: "E-commerce merchant studio web interface"
      },
      {
        id: "global-design-system-hub",
        title: "Enterprise Design System Hub",
        subtitle: "Unified Design Token & Component Repository",
        badge: "Design Tokens",
        details: [
          "Centralized design token repository powering multi-platform consistency.",
          "Automated versioning and component change logs for product teams.",
          "Accessible UI pattern library with built-in contrast compliance."
        ],
        screenImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
        screenImageAlt: "Enterprise design system documentation hub interface"
      }
    ],
    featuresCards: [
      {
        title: "Canvas",
        description: "Architect comprehensive SaaS web application interfaces with pixel-perfect component tokens.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Design canvas UI system layout"
      },
      {
        title: "Studio",
        description: "Build interactive web prototypes with fluid micro-animations and seamless state transitions.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        imageAlt: "UI prototyping studio interface"
      },
      {
        title: "Engine IQ",
        description: "Conduct automated accessibility audits and design system token health checks across all pages.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Design token intelligence auditor"
      },
      {
        title: "Trust",
        description: "Ensure WCAG AAA accessibility compliance and secure design patterns for enterprise web applications.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Accessibility compliance trust badge"
      }
    ]
  },
};