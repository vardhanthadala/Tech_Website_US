export interface ProjectData {
  id: string;
  slug: string;
  brandTag: string;
  title: string;
  description?: string;
  service: string;
  industry: string;
  image: string;
  layout: 'half' | 'full';
  imageAspect?: string;

  // Case Study Detail Fields
  year: string;
  client: string;
  websiteUrl?: string;
  heroTagline: string;
  challenge: string;
  solution: string;
  metrics: { label: string; value: string }[];
  galleryImages: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const PROJECTS_DATA: ProjectData[] = [
  // --- HEALTHCARE (5 Projects) ---
  {
    id: 'omnibuds',
    slug: 'omnibuds',
    brandTag: 'OMNIBUDS REBRANDING',
    title: 'Redefining brand identity for an AI-powered ear-worn health platform',
    description: 'A complete brand system and iOS app redesign for wearable health monitoring.',
    service: 'UI/UX Design',
    industry: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=2000&auto=format&fit=crop',
    layout: 'half',
    imageAspect: 'aspect-[4/3] sm:aspect-[16/11]',

    year: '2025',
    client: 'Omnibuds Tech',
    websiteUrl: 'https://omnibuds.io',
    heroTagline: 'Revolutionizing ear-worn health tracking through AI biofeedback and ergonomic design.',
    challenge: 'Omnibuds needed a modern, trustworthy visual identity and mobile companion app to translate complex biometric ear sensor data into intuitive daily wellness insights for over 100k active users.',
    solution: 'We crafted a minimalist brand design system and built a fluid Next.js and iOS interface with real-time Bluetooth telemetry charts, haptic feedback triggers, and custom wellness reports.',
    metrics: [
      { label: 'User Retention', value: '+142%' },
      { label: 'App Store Rating', value: '4.9 ★' },
      { label: 'Biometric Latency', value: '< 15ms' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4e?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1510519138161-58445d4c2813?q=80&w=2000&auto=format&fit=crop'
    ],
    testimonial: {
      quote: 'Dexze transformed our raw hardware prototype into an iconic consumer brand that investors and users fall in love with.',
      author: 'Marcus Vance',
      role: 'Head of Product, Omnibuds'
    }
  },
  {
    id: 'petspan',
    slug: 'petspan',
    brandTag: 'PETSPAN',
    title: 'Designing a clear, reliable telehealth platform for pet longevity',
    description: 'Connecting pet owners with specialized veterinarians for preventative health plans.',
    service: 'UI/UX Design',
    industry: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2000&auto=format&fit=crop',
    layout: 'half',
    imageAspect: 'aspect-[4/3] sm:aspect-[16/11]',

    year: '2025',
    client: 'Petspan Health Inc.',
    websiteUrl: 'https://petspan.care',
    heroTagline: 'Accessible, compassionate preventative care for dogs and cats powered by smart diagnostics.',
    challenge: 'Pet owners struggled with fragmented vet records and stressful emergency clinic visits, leading to delayed medical intervention for senior pets.',
    solution: 'Designed an intuitive telehealth portal allowing instant HD video consultations, automated prescription deliveries, and longevity milestone tracking.',
    metrics: [
      { label: 'Monthly Consults', value: '45,000+' },
      { label: 'NPS Score', value: '88/100' },
      { label: 'Time to Doctor', value: '2.4 Mins' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?q=80&w=2000&auto=format&fit=crop'
    ],
    testimonial: {
      quote: 'The UX is so simple and delightful that pet parents of all ages feel completely at ease using the platform.',
      author: 'Dr. Sarah Jenkins',
      role: 'Chief Veterinary Officer'
    }
  },
  {
    id: 'aura-health',
    slug: 'aura-health',
    brandTag: 'AURA HEALTH',
    title: 'Designing an AI-driven mental wellness app for personalized meditation & biometric tracking',
    description: 'A holistic digital health app connecting wearable data with real-time AI biofeedback.',
    service: 'Mobile Apps',
    industry: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop', // Mobile health app & analytics
    layout: 'full',
    imageAspect: 'aspect-[16/9] sm:aspect-[21/9]',

    year: '2024',
    client: 'Aura Labs',
    websiteUrl: 'https://aurahealth.app',
    heroTagline: 'Next-gen mindfulness personalized dynamically through heart rate variability & circadian tracking.',
    challenge: 'Existing meditation apps offered static sound loops that failed to adapt when users experienced acute stress during their workday.',
    solution: 'Integrated real-time Apple Watch & Fitbit telemetry with lightweight LLM biofeedback models to dynamically adjust ambient audio frequencies and guided breathwork routines.',
    metrics: [
      { label: 'Daily Active Users', value: '320k+' },
      { label: 'Stress Reduction', value: '42%' },
      { label: 'App Store Feature', value: 'App of the Day' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2000&auto=format&fit=crop'
    ]
  },
  {
    id: 'pulse-ai',
    slug: 'pulse-ai',
    brandTag: 'PULSE DIAGNOSTICS',
    title: 'Real-time AI cardiac monitoring & early symptom detection platform',
    description: 'Autonomous ECG waveform classification for preventative cardiology.',
    service: 'AI Automation',
    industry: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000&auto=format&fit=crop', // AI medical diagnostics interface
    layout: 'half',
    imageAspect: 'aspect-[4/3] sm:aspect-[16/11]',

    year: '2025',
    client: 'Pulse Medtech',
    heroTagline: 'AI-assisted continuous telemetry detecting arrhythmia symptoms before clinical events occur.',
    challenge: 'Cardiologists faced massive alert fatigue reviewing thousands of hours of noisy Holter monitor telemetry.',
    solution: 'Built a FDA-ready signal processing pipeline with transformer models that filters 99.4% of telemetry noise while flagging critical ischemic patterns.',
    metrics: [
      { label: 'Detection Accuracy', value: '99.8%' },
      { label: 'Alert Fatigue', value: '-82%' },
      { label: 'Patients Monitored', value: '180,000+' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=2000&auto=format&fit=crop'
    ]
  },
  {
    id: 'medivue',
    slug: 'medivue',
    brandTag: 'MEDIVUE LABS',
    title: 'Next-generation patient portal & automated EHR synchronization system',
    description: 'Streamlining clinical workflows and lab results for hospital networks.',
    service: 'Web Development',
    industry: 'Healthcare',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2000&auto=format&fit=crop', // Modern healthcare web application
    layout: 'half',
    imageAspect: 'aspect-[4/3] sm:aspect-[16/11]',

    year: '2024',
    client: 'Medivue Health System',
    heroTagline: 'Unifying patient records across 40+ regional clinics with zero downtime HIPAA compliance.',
    challenge: 'Legacy hospital EHR portals were clunky, slow on mobile devices, and disconnected from lab diagnostics.',
    solution: 'Engineered a modern HL7/FHIR compliant Next.js portal enabling patients to view lab results instantly and schedule specialist appointments.',
    metrics: [
      { label: 'Portal Adoption', value: '84%' },
      { label: 'No-Show Rate', value: '-35%' },
      { label: 'Sync Latency', value: '< 1s' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2000&auto=format&fit=crop'
    ]
  },

  // --- FINTECH (5 Projects) ---
  {
    id: 'pluto',
    slug: 'pluto',
    brandTag: 'PLUTO',
    title: 'Transforming Pluto into a globally positioned spend management platform',
    description: 'A corporate-card startup grows into a worldwide spend-management platform.',
    service: 'Mobile Apps',
    industry: 'FinTech',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop', // Fintech card & mobile app UI
    layout: 'full',
    imageAspect: 'aspect-[16/9] sm:aspect-[21/9]',

    year: '2025',
    client: 'Pluto Technologies',
    websiteUrl: 'https://plutocard.com',
    heroTagline: 'Empowering modern finance teams with real-time corporate cards and zero-friction expense approvals.',
    challenge: 'Pluto needed to transition from a local corporate card issuing startup into a multi-currency enterprise spend management engine capable of handling millions in daily volume.',
    solution: 'Engineered a scalable React Native mobile suite with automated receipt scanning, multi-tier budget controls, and seamless QuickBooks/NetSuite API syncing.',
    metrics: [
      { label: 'Processed Volume', value: '$850M+' },
      { label: 'Reconciliation Speed', value: '10x Faster' },
      { label: 'Enterprise Accounts', value: '1,200+' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556742049-0a674d81223e?q=80&w=2000&auto=format&fit=crop'
    ],
    testimonial: {
      quote: 'Dexze helped us build a global-grade product in record time. Their fintech execution is unmatched.',
      author: 'Tariq Al-Mansoori',
      role: 'Co-Founder & CEO, Pluto'
    }
  },
  {
    id: 'stay',
    slug: 'stay',
    brandTag: 'STAY',
    title: 'Building a trust-first brand and product for an expat insurance brokerage',
    description: 'Frictionless international health and travel insurance for digital nomads.',
    service: 'Web Development',
    industry: 'FinTech',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=2000&auto=format&fit=crop', // Modern web SaaS platform
    layout: 'half',
    imageAspect: 'aspect-[4/3] sm:aspect-[16/11]',

    year: '2024',
    client: 'Stay Insurance Group',
    websiteUrl: 'https://stayinsurance.com',
    heroTagline: 'Frictionless international medical & travel coverage tailored for digital nomads and global expats.',
    challenge: 'Insurance policies for international travelers were traditionally clogged with opaque legal jargon and tedious manual claims forms.',
    solution: 'Designed a transparent digital portal with instant quote calculators, 1-click policy issuance, and instant mobile claim submissions.',
    metrics: [
      { label: 'Quote Conversion', value: '+310%' },
      { label: 'Claims Settlement', value: '< 24 Hours' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1565026057447-b8899f27d00d?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop'
    ]
  },
  {
    id: 'nexus-capital',
    slug: 'nexus-capital',
    brandTag: 'NEXUS CAPITAL',
    title: 'Architecting a multi-currency institutional trading platform with sub-millisecond execution',
    description: 'Ultra-low latency institutional trading engine and liquidity dashboard.',
    service: 'Cloud Services',
    industry: 'FinTech',
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=2000&auto=format&fit=crop',
    layout: 'half',
    imageAspect: 'aspect-[4/3] sm:aspect-[16/11]',

    year: '2025',
    client: 'Nexus Capital Markets',
    heroTagline: 'High-frequency institutional FX & equity trading with real-time risk analytics.',
    challenge: 'Legacy terminal software crashed under extreme market volatility spikes, causing execution delays.',
    solution: 'Designed a custom C++ & Rust order-matching engine paired with a ultra-responsive WebGL financial dashboard.',
    metrics: [
      { label: 'Order Latency', value: '< 0.8ms' },
      { label: 'Daily Trading Volume', value: '$4.2B' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop'
    ]
  },
  {
    id: 'veritas-protocol',
    slug: 'veritas-protocol',
    brandTag: 'VERITAS PROTOCOL',
    title: 'Crafting the brand identity and WebGL interactive portal for a decentralized data layer',
    description: 'An immersive WebGL web experience demonstrating real-time cryptographic verification.',
    service: 'Web Development',
    industry: 'FinTech',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2070&auto=format&fit=crop', // 3D WebGL interactive platform
    layout: 'full',
    imageAspect: 'aspect-[16/9] sm:aspect-[21/9]',

    year: '2025',
    client: 'Veritas Foundation',
    heroTagline: 'Zero-knowledge cryptographic data verification for decentralized finance.',
    challenge: 'Explaining complex zero-knowledge proof math to mainstream developers and enterprise partners.',
    solution: 'Created a stunning 3D WebGL interactive canvas that visualizes zero-knowledge proofs in real-time as users interact with the site.',
    metrics: [
      { label: 'Developer Signups', value: '25,000+' },
      { label: 'Total Value Locked', value: '$120M' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2000&auto=format&fit=crop'
    ]
  },
  {
    id: 'vaultx',
    slug: 'vaultx',
    brandTag: 'VAULTX PAYMENTS',
    title: 'Cross-border instant settlement network for global enterprise payroll',
    description: 'Eliminating wire transfer fees for remote workforce compensation.',
    service: 'Cloud Services',
    industry: 'FinTech',
    image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?q=80&w=2000&auto=format&fit=crop',
    layout: 'half',
    imageAspect: 'aspect-[4/3] sm:aspect-[16/11]',

    year: '2024',
    client: 'VaultX Corp',
    heroTagline: 'Automated global payroll clearing house settling funds in 150+ currencies instantly.',
    challenge: 'Cross-border payroll took up to 5 business days and incurred steep bank intermediary fees.',
    solution: 'Built an automated multi-rail payment routing backend leveraging stablecoin clearing rails and local ACH APIs.',
    metrics: [
      { label: 'Transfer Speed', value: 'Instant' },
      { label: 'Fee Reduction', value: '-85%' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=2000&auto=format&fit=crop'
    ]
  },

  // --- E-COMMERCE (5 Projects) ---
  {
    id: 'lumina-luxury',
    slug: 'lumina-luxury',
    brandTag: 'LUMINA LUXURY',
    title: 'Headless Shopify storefront engineered for 2.4x conversion growth and global scaling',
    description: 'High-end luxury e-commerce experience with sub-second page loads and 3D product previews.',
    service: 'Web Development',
    industry: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop', // Headless storefront web UI
    layout: 'full',
    imageAspect: 'aspect-[16/9] sm:aspect-[21/9]',

    year: '2025',
    client: 'Lumina Maison Paris',
    websiteUrl: 'https://luminaluxury.com',
    heroTagline: 'Ultra-fast Next.js storefront blending editorial high fashion with interactive 3D product viewing.',
    challenge: 'Traditional monolithic storefronts suffered from slow image rendering and rigid layouts that choked international luxury sales.',
    solution: 'Migrated to a headless Next.js App Router architecture integrated with Shopify Storefront API and Sanity CMS.',
    metrics: [
      { label: 'Page Load Speed', value: '0.4s' },
      { label: 'Global Sales Growth', value: '+240%' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop'
    ]
  },
  {
    id: 'cartflow',
    slug: 'cartflow',
    brandTag: 'CARTFLOW AI',
    title: 'Personalized AI recommendation engine driving 34% higher cart value',
    description: 'Real-time contextual shopping recommendations powered by machine learning.',
    service: 'AI Automation',
    industry: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop', // AI recommendation neural engine
    layout: 'half',
    imageAspect: 'aspect-[4/3] sm:aspect-[16/11]',

    year: '2025',
    client: 'Cartflow Technologies',
    heroTagline: 'Dynamic upselling and cross-selling powered by behavioral intent analysis.',
    challenge: 'Generic e-commerce recommendation widgets were ignored by users, resulting in flat average order value (AOV).',
    solution: 'Built an embeddable AI recommendation engine that analyzes active session clicks in real time to suggest complementary items.',
    metrics: [
      { label: 'Average Order Value', value: '+34%' },
      { label: 'Checkout Conversion', value: '+18%' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2000&auto=format&fit=crop'
    ]
  },
  {
    id: 'velox-market',
    slug: 'velox-market',
    brandTag: 'VELOX MARKETPLACE',
    title: 'Global B2B wholesale platform connecting over 50,000 verified suppliers',
    description: 'High-volume bulk ordering and international trade logistics dashboard.',
    service: 'Web Development',
    industry: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2000&auto=format&fit=crop', // B2B wholesale portal analytics
    layout: 'half',
    imageAspect: 'aspect-[4/3] sm:aspect-[16/11]',

    year: '2024',
    client: 'Velox Global',
    heroTagline: 'Streamlining cross-border B2B procurement with escrow contracts and automated RFQ matching.',
    challenge: 'Wholesale buyers faced weeks of manual negotiation emails and opaque shipping freight costs.',
    solution: 'Developed an end-to-end B2B trade portal featuring automated RFQs, escrow payments, and live freight tracking.',
    metrics: [
      { label: 'RFQ Turnaround', value: '4 Hours' },
      { label: 'Gross Merchandise Value', value: '$1.4B' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1508873696983-2df515122519?q=80&w=2000&auto=format&fit=crop'
    ]
  },
  {
    id: 'strata-brand',
    slug: 'strata-brand',
    brandTag: 'STRATA APPAREL',
    title: 'Interactive 3D garment customizer & AR virtual try-on experience',
    description: 'Photorealistic WebGL apparel configurator reducing return rates.',
    service: 'UI/UX Design',
    industry: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?q=80&w=2000&auto=format&fit=crop',
    layout: 'half',
    imageAspect: 'aspect-[4/3] sm:aspect-[16/11]',

    year: '2025',
    client: 'Strata Fashion',
    heroTagline: 'Photorealistic 3D garment customization in browser with AR smartphone sizing.',
    challenge: 'High return rates on customized outerwear due to customer uncertainty around sizing and fabric texture.',
    solution: 'Designed a WebGL 3D garment customizer with realistic cloth physics and integrated iOS AR Quick Look for instant home sizing.',
    metrics: [
      { label: 'Return Rate Reduction', value: '-62%' },
      { label: 'Time Spent on Page', value: '5.4 Mins' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop'
    ]
  },
  {
    id: 'swift-checkout',
    slug: 'swift-checkout',
    brandTag: 'SWIFT CHECKOUT',
    title: 'One-click biometric payment gateway for high-volume mobile retail',
    description: 'Sub-second mobile checkout reducing cart abandonment.',
    service: 'Mobile Apps',
    industry: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2000&auto=format&fit=crop', // Mobile smartphone ecommerce experience
    layout: 'half',
    imageAspect: 'aspect-[4/3] sm:aspect-[16/11]',

    year: '2024',
    client: 'Swift Pay',
    heroTagline: 'Universal 1-click Apple Pay & FaceID checkout SDK for iOS e-commerce apps.',
    challenge: 'Mobile shoppers abandoned 70% of carts due to multi-step checkout forms on smartphones.',
    solution: 'Built a lightweight SDK that embeds FaceID biometric authorization directly into mobile retail apps.',
    metrics: [
      { label: 'Checkout Speed', value: '0.8s' },
      { label: 'Cart Conversion', value: '+45%' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1556742049-0a674d81223e?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2000&auto=format&fit=crop'
    ]
  },

  // --- CONSUMER TECH (5 Projects) ---
  {
    id: 'vixiv',
    slug: 'vixiv',
    brandTag: 'VIXIV',
    title: 'Launching an AI-powered engineering platform from beta to market-ready product',
    description: 'Autonomous AI code reviews and automated refactoring pipelines.',
    service: 'AI Automation',
    industry: 'Consumer Tech',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop', // AI Code reviews & developer IDE
    layout: 'half',
    imageAspect: 'aspect-[4/3] sm:aspect-[16/11]',

    year: '2025',
    client: 'Vixiv Systems',
    heroTagline: 'Autonomous AI code reviews and automated refactoring pipelines for high-velocity software teams.',
    challenge: 'Developers spent up to 30% of their sprints reviewing pull requests for boilerplate compliance and architectural anti-patterns.',
    solution: 'Built a lightweight developer portal and VS Code extension powered by custom fine-tuned code analysis models.',
    metrics: [
      { label: 'PR Review Time', value: '-65%' },
      { label: 'Codebase Velocity', value: '2.8x' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2000&auto=format&fit=crop'
    ]
  },
  {
    id: 'kinetix',
    slug: 'kinetix',
    brandTag: 'KINETIX ROBOTICS',
    title: 'Creating a high-speed telemetry dashboard for autonomous industrial robotics',
    description: 'Real-time robot fleet health monitoring and predictive maintenance alerts.',
    service: 'AI Automation',
    industry: 'Consumer Tech',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop', // Autonomous robotics computing & circuits
    layout: 'half',
    imageAspect: 'aspect-[4/3] sm:aspect-[16/11]',

    year: '2025',
    client: 'Kinetix Labs',
    heroTagline: 'Ultra-low latency web dashboard monitoring 5,000+ factory autonomous mobile robots.',
    challenge: 'Warehouse operators needed immediate visual telemetry to prevent robot collisions and track battery depletion.',
    solution: 'Engineered a WebGL 3D digital twin dashboard displaying real-time robot positions and sensor diagnostics with WebSocket streaming.',
    metrics: [
      { label: 'Robot Fleet Uptime', value: '99.9%' },
      { label: 'Telemetry Stream Latency', value: '< 20ms' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop'
    ]
  },
  {
    id: 'hyperion-ar',
    slug: 'hyperion-ar',
    brandTag: 'HYPERION AR',
    title: 'Spatial computing interface for next-generation smart eyewear & gesture control',
    description: 'Ultra-low latency spatial UI framework built for wearable AR hardware.',
    service: 'Mobile Apps',
    industry: 'Consumer Tech',
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=2000&auto=format&fit=crop', // AR spatial computing & app UI
    layout: 'full',
    imageAspect: 'aspect-[16/9] sm:aspect-[21/9]',

    year: '2025',
    client: 'Hyperion Vision',
    heroTagline: 'Intuitive spatial UI operating system for hands-free augmented reality glasses.',
    challenge: 'Traditional touchscreen UI conventions failed when applied to spatial augmented reality interfaces.',
    solution: 'Designed a gesture-driven spatial computing design system utilizing micro-gaze tracking and subtle wrist movement feedback.',
    metrics: [
      { label: 'Frame Rate', value: '120 FPS' },
      { label: 'User Task Completion', value: '3.2x Faster' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2000&auto=format&fit=crop'
    ]
  },
  {
    id: 'cognitive-os',
    slug: 'cognitive-os',
    brandTag: 'COGNITIVE OS',
    title: 'Autonomous agent orchestrator automating multi-cloud enterprise deployments',
    description: 'Self-healing cloud infrastructure powered by AI agent swarms.',
    service: 'AI Automation',
    industry: 'Consumer Tech',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2000&auto=format&fit=crop', // AI automation terminal & agent swarm
    layout: 'half',
    imageAspect: 'aspect-[4/3] sm:aspect-[16/11]',

    year: '2025',
    client: 'Cognitive Inc.',
    heroTagline: 'AI swarms monitoring, diagnosing, and resolving multi-cloud server outages autonomously.',
    challenge: 'DevOps engineers spent nights manually triaging microservice outages caused by cascading dependency failures.',
    solution: 'Built an AI agent orchestration system that detects server anomalies and deploys automated hotfixes within seconds.',
    metrics: [
      { label: 'MTTR (Mean Time to Repair)', value: '< 45 Seconds' },
      { label: 'Infrastructure Savings', value: '40%' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop'
    ]
  },
  {
    id: 'solaris-iot',
    slug: 'solaris-iot',
    brandTag: 'SOLARIS SMART HOME',
    title: 'Edge AI energy management system for zero-carbon intelligent homes',
    description: 'Optimizing solar power storage and home heating through local neural networks.',
    service: 'Cloud Services',
    industry: 'Consumer Tech',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=2000&auto=format&fit=crop',
    layout: 'half',
    imageAspect: 'aspect-[4/3] sm:aspect-[16/11]',

    year: '2024',
    client: 'Solaris Energy',
    heroTagline: 'Intelligent solar battery dispatch predicting weather patterns and peak electricity prices.',
    challenge: 'Homeowners wasted solar energy by feeding power back to the grid during off-peak low rate hours.',
    solution: 'Developed an Edge AI energy hub that learns household consumption habits and optimizes battery storage dispatch.',
    metrics: [
      { label: 'Electricity Bill Savings', value: '48%' },
      { label: 'Carbon Offset', value: '3.4 Tons/Yr' }
    ],
    galleryImages: [
      'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=2000&auto=format&fit=crop'
    ]
  }
];

export const getProjectBySlug = (slug: string): ProjectData | undefined => {
  return PROJECTS_DATA.find((p) => p.slug === slug);
};
