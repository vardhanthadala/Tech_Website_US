export interface WorkStage {
  name: string;
  title: string;
  subtitle: string;
  cards: string[];
  image: string;
  imageAlt: string;
}

export interface ProcessRow {
  number: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  points: string[];
}

export interface WebCategoryData {
  slug: string;
  title: string;
  badge: string;
  headingBold: string;
  headingLight: string;
  heroImage: string;
  heroImageAlt: string;
  ctaText: string;
  description: string;
  howWeWorkTitleBold: string;
  howWeWorkTitleCursive: string;
  howWeWorkSubtitle: string;
  stages: WorkStage[];
  processTitleBold: string;
  processTitleCursive: string;
  processSubtitle: string;
  processRows: ProcessRow[];
}

export const webDevelopmentCategories: Record<string, WebCategoryData> = {
  "full-stack-nextjs-apps": {
    slug: "full-stack-nextjs-apps",
    title: "Next.js Apps",
    badge: "Next.js Apps",
    headingBold: "Next-generation React apps",
    headingLight: "built for performance.",
    heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
    heroImageAlt: "Modern clean analytics dashboard UI on high-res screen",
    ctaText: "Start building",
    description: "Architecting zero-latency full-stack web applications utilizing Next.js App Router, React Server Components (RSC), and Edge runtime optimization.",
    howWeWorkTitleBold: "Everything you need to ship products",
    howWeWorkTitleCursive: "faster",
    howWeWorkSubtitle: "Our optimized engineering lifecycle ensures your Next.js project is structured for infinite scalability from Day 1.",
    stages: [
      {
        name: "Discovery & RFC",
        title: "System Design & RFC",
        subtitle: "Architecting optimal database schemas, server components, and API routing layouts.",
        cards: ["Edge API Architecture", "Prisma & PostgreSQL Schema", "React Server Components Plan"],
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Team whiteboarding system schema"
      },
      {
        name: "Component Dev",
        title: "Modular Component Architecture",
        subtitle: "Building accessible Tailwind CSS components with high reusability.",
        cards: ["Shadcn & Radix UI", "Tailwind CSS Tokens", "Strict TypeScript Types"],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Developer writing clean React code"
      },
      {
        name: "Backend & Database",
        title: "Edge API & Server Actions",
        subtitle: "Connecting database queries directly into React Server Components.",
        cards: ["Next.js Server Actions", "PostgreSQL & Supabase", "Redis Caching Layer"],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Database server rack hardware"
      },
      {
        name: "Testing & Vercel QA",
        title: "Vercel Staging & E2E Testing",
        subtitle: "Running automated Playwright test suites across isolated Vercel preview URLs.",
        cards: ["Playwright E2E Tests", "Vercel Preview Deployments", "Lighthouse 100 Score Audit"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Testing metrics on high-res display"
      }
    ],
    processTitleBold: "Next.js applications engineered for",
    processTitleCursive: "speed",
    processSubtitle: "We leverage React Server Components, Turbopack, and Vercel edge networks to ensure sub-100ms page loads worldwide.",
    processRows: [
      {
        number: "01",
        title: "React Server Components (RSC)",
        description: "Zero client-side JavaScript bundle overhead for data fetching operations. Data is rendered directly on the server edge for instantaneous page paints.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Next.js code editor screen",
        points: ["Zero-bundle-size data fetching", "Direct SQL & ORM queries in components", "Sub-100ms First Contentful Paint (FCP)"]
      },
      {
        number: "02",
        title: "Edge API Middleware & Caching",
        description: "Executing authentication and geo-routing at Vercel Edge locations globally, bypassing cold starts and database roundtrips.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Cloud network servers visual",
        points: ["Global Vercel Edge Network routing", "Redis stale-while-revalidate caching", "Sub-5ms authentication middleware"]
      },
      {
        number: "03",
        title: "Server Actions & Form Handling",
        description: "Eliminating complex API routes by using native Next.js Server Actions with Zod schema validation and optimistic UI updates.",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Developer designing web interface",
        points: ["Type-safe Zod input validation", "Optimistic UI mutations without page reloading", "Automated CSRF security protection"]
      },
      {
        number: "04",
        title: "OpenTelemetry & Vercel Analytics",
        description: "Real-time performance monitoring tracking Core Web Vitals, server response times, and database query latencies automatically.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Data analysis tools screenshot",
        points: ["OpenTelemetry framework logging", "LCP/FID metrics dashboards", "Edge compute alerts logging"]
      }
    ]
  },
  "headless-cms-ecommerce": {
    slug: "headless-cms-ecommerce",
    title: "Headless CMS & E-Commerce",
    badge: "Headless CMS & E-Commerce",
    headingBold: "Global commerce sites",
    headingLight: "powered by headless CMS.",
    heroImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    heroImageAlt: "Premium modern e-commerce checkout interface on laptop screen",
    ctaText: "Explore platforms",
    description: "Decouple your storefront utilizing modern headless CMS engines (Sanity, Contentful, Strapi) combined with powerful e-commerce APIs like Shopify Plus.",
    howWeWorkTitleBold: "Everything you need to scale commerce",
    howWeWorkTitleCursive: "globally",
    howWeWorkSubtitle: "We bridge headless CMS platforms and global storefronts through blazing fast GraphQL API integrations.",
    stages: [
      {
        name: "Schema Design",
        title: "CMS Schema Structuring",
        subtitle: "Designing flexible content schemas and nesting rules inside headless builders.",
        cards: ["Sanity Content Types", "Localization Fields", "Role Access Scoping"],
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Web developer working with content data"
      },
      {
        name: "Storefront Design",
        title: "Decoupled Storefront Design",
        subtitle: "Creating high-converting visual components tailored for fast catalog search and browsing.",
        cards: ["Figma Commerce System", "Atomic Product Cards", "Dynamic Drawer Cart"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Product designer reviewing UI grids"
      },
      {
        name: "API Connection",
        title: "GraphQL & Webhooks Setup",
        subtitle: "Linking content schemas and inventory values in real-time through secure webhook hooks.",
        cards: ["Shopify Storefront API", "Apollo GraphQL Queries", "Algolia Search Index Sync"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Analytics graphs showing indexing metrics"
      },
      {
        name: "Stripe & Checkout Sync",
        title: "Secure Stripe Integration",
        subtitle: "Configuring shopping cart session validation, global shipping rates, and localized Stripe checkouts.",
        cards: ["Stripe Elements Checkout", "Vat Taxation API", "Webhook Order Validation"],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Person scanning credit card details"
      }
    ],
    processTitleBold: "Headless content pipelines built for",
    processTitleCursive: "speed",
    processSubtitle: "We decouple client storefront rendering from backend catalog inventories to deliver zero-second checkouts.",
    processRows: [
      {
        number: "01",
        title: "Structured API schemas",
        description: "We configure flexible JSON content schemas inside headless tools to empower content authors with instant, code-free edits.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Headless editor UI screen",
        points: ["Flexible headless content nodes", "Custom schema modeling panels", "Multi-role authoring pipelines"]
      },
      {
        number: "02",
        title: "Decoupled rendering engine",
        description: "Your product catalog compiles to pure static pages at build time, yielding perfect page-speed scores and high conversion rates.",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Fast visual interface mockup",
        points: ["Decoupled static site compilation", "Automatic image WebP format conversions", "Global GraphQL query interfaces"]
      },
      {
        number: "03",
        title: "Unified cart checkout",
        description: "Integrating global payment engines with secure API layers to finalize purchases reliably without database bottlenecks.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Secure payment checkout process",
        points: ["Secure multi-currency stripe modules", "Real-time cart telemetry sync", "Automated vat rate calculation rules"]
      },
      {
        number: "04",
        title: "Localization & translation engines",
        description: "Automating translation distribution globally using localized schema endpoints and multi-tenant translation builders.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Statically generated translations",
        points: ["Multi-tenant path localized rendering", "Statically generated translations", "Automated translation sync tasks"]
      }
    ]
  },
  "progressive-web-apps": {
    slug: "progressive-web-apps",
    title: "Progressive PWAs",
    badge: "Progressive PWAs",
    headingBold: "Installable web apps",
    headingLight: "running offline instantly.",
    heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
    heroImageAlt: "Modern high-end mobile web app interface showing cards",
    ctaText: "See features",
    description: "Harness modern service workers, local database caching, and push notifications to deliver immersive mobile-first progressive web applications.",
    howWeWorkTitleBold: "Everything you need to engage users",
    howWeWorkTitleCursive: "offline",
    howWeWorkSubtitle: "We build installable progressive engines that cache content dynamically for offline access.",
    stages: [
      {
        name: "Workers Setup",
        title: "Service Worker Inception",
        subtitle: "Structuring asset manifests and installing local request intercept handlers.",
        cards: ["Workbox Cache Strategy", "Precache Asset Manifest", "Interception Hooks"],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Software code lines on laptop screen"
      },
      {
        name: "Offline Caching",
        title: "IndexedDB Storage Fabric",
        subtitle: "Implementing client-side SQL databases to persist operational inputs during connectivity loss.",
        cards: ["Dexie.js database Wrapper", "Auto Sync Telemetry", "Stale-While-Revalidate"],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
        imageAlt: "High-speed network interface cables"
      },
      {
        name: "Home Installation",
        title: "Add-to-Home prompt hook",
        subtitle: "Configuring standard app manifests to trigger seamless installation prompts.",
        cards: ["Web App Manifest JSON", "Custom Install Trigger", "App Icon Asset Generator"],
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=1200&auto=format&fit=crop",
        imageAlt: "Mobile phone showing application icon grid"
      },
      {
        name: "Push Telemetry",
        title: "Web Push Notifications",
        subtitle: "Syncing push subscription tokens to dispatch customized updates even when browser tabs close.",
        cards: ["VAPID Key Encryption", "Push API Webhook Handler", "Action Notification Banner"],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Mobile alert display interface"
      }
    ],
    processTitleBold: "Immersive progressive logic built for",
    processTitleCursive: "offline",
    processSubtitle: "We engineer intelligent client service workers that persist data inputs locally during connectivity loss.",
    processRows: [
      {
        number: "01",
        title: "Intelligent asset manifests",
        description: "Cache layout assets, typography models, and logic modules locally on device setup to load UI structures instantaneously.",
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Mobile application interface mockup",
        points: ["Asset caching logic configurations", "Stale-while-revalidate caches", "Automatic request interception"]
      },
      {
        number: "02",
        title: "IndexedDB synchronization",
        description: "We configure offline databases to hold telemetry, cart data, and forms, syncing files automatically once internet access resumes.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Secure database flow concept",
        points: ["Persistent local storage structures", "Background queue sync actions", "Zero database connectivity lockouts"]
      },
      {
        number: "03",
        title: "Push communication layers",
        description: "Linking standard Web Push triggers to update profiles and notify users of critical alerts without active tabs.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Dynamic browser push notification",
        points: ["Custom home-screen installers", "VAPID notification handlers", "Push event listener scripts"]
      },
      {
        number: "04",
        title: "Background sync pipelines",
        description: "Running data synchronization processes when PWA instances wake up in the background to ensure parity with central nodes.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Background sync execution",
        points: ["Auto parity checks", "W3C background sync API", "Token validated secure payloads"]
      }
    ]
  },
  "interactive-3d-webgl": {
    slug: "interactive-3d-webgl",
    title: "Interactive 3D & WebGL",
    badge: "Interactive 3D & WebGL",
    headingBold: "Interactive 3D visuals",
    headingLight: "rendered on WebGL.",
    heroImage: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop",
    heroImageAlt: "Interactive 3D glass render showcasing WebGL shaders",
    ctaText: "View demos",
    description: "Create engaging three-dimensional visualizers, abstract interactive maps, and animations utilizing Three.js and custom shaders.",
    howWeWorkTitleBold: "Everything you need to immerse visitors",
    howWeWorkTitleCursive: "completely",
    howWeWorkSubtitle: "We author custom three-dimensional canvases optimized to run smoothly across mobile and desktop processors.",
    stages: [
      {
        name: "Mesh Modeling",
        title: "3D Mesh Modelling & Loading",
        subtitle: "Optimizing 3D assets to load in seconds by using Draco compression and GLTF models.",
        cards: ["GLTF/GLB Optimizations", "Draco Compression Loader", "Buffer Geometry Trimming"],
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
        imageAlt: "3D model editing software interface"
      },
      {
        name: "Shader Coding",
        title: "Custom GLSL Shader Authoring",
        subtitle: "Writing GPU shaders directly to render abstract morphing patterns and light flows.",
        cards: ["GLSL Fragment Shader", "GPU Texture Interpolation", "Uniform Animation Variable"],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Silicon chips and computing processors close-up"
      },
      {
        name: "Physics Sync",
        title: "Cannon.js Physics Engine Sync",
        subtitle: "Connecting raw coordinates to a physics coordinator to trigger lifelike gravity and colliders.",
        cards: ["Rigid Body Colliders", "Force Vector Calculations", "Frame Coordinate Mapping"],
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Engineering drawings and graphs"
      },
      {
        name: "Frame Rate Locking",
        title: "60 FPS Render Optimization",
        subtitle: "Trimming useless render calls and caching matrices to lock animations to exactly 60 FPS.",
        cards: ["RequestAnimationFrame Lock", "Offscreen Render Canvas", "VRAM Cache Cleanup"],
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Graphics hardware processing elements"
      }
    ],
    processTitleBold: "Immersive WebGL stages built for",
    processTitleCursive: "performance",
    processSubtitle: "We author accelerated physics equations and lighting rigs that execute cleanly on GPU engines.",
    processRows: [
      {
        number: "01",
        title: "Mesh Draco optimization",
        description: "Trimming useless vertices and exporting assets under Draco compression to reduce load boundaries to a fraction.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
        imageAlt: "3D shape model structure",
        points: ["GLTF Draco mesh compaction", "Buffer geometry size reductions", "Material mesh vertex reductions"]
      },
      {
        number: "02",
        title: "Custom GPU GLSL shaders",
        description: "Authoring custom fragment shading algorithms to render morphing particles and raycast glow features dynamically.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Graphics visualizer coding dashboard",
        points: ["Dynamic shader fragment equations", "Offscreen canvas optimizations", "Matrix calculations execution caching"]
      },
      {
        number: "03",
        title: "Matrix coordinate sync",
        description: "Linking vector mechanics to dynamic window interactions to yield immersive user responses at 60 FPS.",
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Geometric coordinate matrix calculations",
        points: ["Lifelike rigid-body collisions", "60 FPS requestAnimationFrame loops", "Dynamic scroll-coordinate animations"]
      },
      {
        number: "04",
        title: "VRAM cache cleanup routines",
        description: "Monitoring GPU compute pipelines to clear coordinate memory buffers when objects load out of view.",
        image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=800&auto=format&fit=crop",
        imageAlt: "GPU computing pipelines view",
        points: ["VRAM caching cleanup hooks", "Dynamic render buffer clearances", "GLTF asset unloading tasks"]
      }
    ]
  },
};