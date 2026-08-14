export interface AppStage {
  name: string;
  title: string;
  subtitle: string;
  cards: string[];
  image: string;
  imageAlt: string;
}

export interface AppSimulatorTab {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  details: string[];
  screenImage: string;
  screenImageAlt: string;
}

export interface AppFeatureCard {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface AppCategoryData {
  slug: string;
  title: string;
  badge: string;
  headingBold: string;
  headingCursive: string;
  mobileMockup: string;
  webMockup: string;
  description: string;
  ctaText: string;
  howWeWorkTitleBold: string;
  howWeWorkTitleCursive: string;
  howWeWorkSubtitle: string;
  stages: AppStage[];
  simulatorTitleBold: string;
  simulatorTitleCursive: string;
  simulatorSubtitle: string;
  simulatorTabs: AppSimulatorTab[];
  featuresCards: AppFeatureCard[];
}

export const appDevelopmentCategories: Record<string, AppCategoryData> = {
  "ios-native-swift": {
    slug: "ios-native-swift",
    title: "iOS & Swift Apps",
    badge: "iOS & Swift Apps",
    headingBold: "Native iOS apps built with",
    headingCursive: "precision.",
    mobileMockup: "/images/app-development/hero-mobile-screenshot.png",
    webMockup: "/images/app-development/hero-web-screenshot.png",
    ctaText: "Start iOS Project",
    description: "Architecting high-performance native iOS applications utilizing SwiftUI, Combine, Metal GPU rendering, and CoreData for liquid-smooth 120Hz ProMotion experiences.",
    howWeWorkTitleBold: "Everything you need to publish to the App Store",
    howWeWorkTitleCursive: "seamlessly",
    howWeWorkSubtitle: "We manage every phase from initial Figma wireframing and SwiftUI engineering to automated TestFlight testing and App Store release.",
    stages: [
      {
        name: "Figma UX Wireframing",
        title: "High-Fidelity Wireframing & Design Tokens",
        subtitle: "Creating interactive SwiftUI prototypes following Apple Human Interface Guidelines.",
        cards: ["Figma Token Specs", "Dynamic Type Typography", "Dark Mode Palette"],
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Figma mobile UI/UX design wireframe layout"
      },
      {
        name: "SwiftUI Architecture",
        title: "SwiftUI & Combine Architecture",
        subtitle: "Building liquid-smooth 120Hz ProMotion view hierarchies backed by reactive Combine streams.",
        cards: ["SwiftUI View Trees", "Combine Data Binding", "NavigationStack Flows"],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Developer writing Swift code in Xcode"
      },
      {
        name: "Metal GPU Acceleration",
        title: "Metal GPU Graphics Pipeline",
        subtitle: "Harnessing low-level Metal shaders for high-frame-rate rendering and real-time GPU effects.",
        cards: ["Metal Shading Language", "Custom Render Pipelines", "Zero-Lag Frame Buffer"],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
        imageAlt: "High performance GPU graphics code render"
      },
      {
        name: "Secure Enclave Vault",
        title: "Secure Enclave & Biometrics",
        subtitle: "Securing user credentials using hardware-backed Secure Enclave keychains and Face ID / Touch ID.",
        cards: ["Keychain Hardware Vault", "Biometric Authentication", "Zero-Knowledge Encryption"],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Biometric security protection visual"
      },
      {
        name: "CoreData & CloudKit Sync",
        title: "CoreData Local Storage & CloudKit Sync",
        subtitle: "Architecting zero-latency offline storage with seamless iCloud synchronization across Apple devices.",
        cards: ["CoreData Entity Graph", "iCloud CloudKit Sync", "Offline-First Caching"],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
        imageAlt: "CloudKit database synchronization server"
      },
      {
        name: "TestFlight & App Store",
        title: "Automated TestFlight & App Store Release",
        subtitle: "Deploying automated beta rings and managing Apple App Store submission review passes.",
        cards: ["Fastlane Build Rigs", "TestFlight Beta Rings", "Sub-24h App Review"],
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
        imageAlt: "iPhone displaying App Store product page"
      }
    ],
    simulatorTitleBold: "Real-world iOS application",
    simulatorTitleCursive: "use cases",
    simulatorSubtitle: "Explore how our native SwiftUI and Swift solutions deliver exceptional user experiences across Apple devices.",
    simulatorTabs: [
      {
        id: "fintech-wealth-management",
        title: "FinTech & Wealth Management",
        subtitle: "High-Security Banking & Crypto Asset Portfolios",
        badge: "FinTech",
        details: [
          "Secure Enclave biometrics for sub-second Face ID authentication.",
          "Real-time Combine web-socket data feeds rendering 120Hz live stock charts.",
          "Zero-knowledge encrypted local SQLite database caching account transactions."
        ],
        screenImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop",
        screenImageAlt: "FinTech wealth management mobile application screen"
      },
      {
        id: "telehealth-patient-care",
        title: "Telehealth & Remote Diagnostics",
        subtitle: "HIPAA-Compliant Patient Telemedicine Suites",
        badge: "HealthTech",
        details: [
          "WebRTC end-to-end encrypted HD video call integration between doctors and patients.",
          "HealthKit framework syncing live heart rate and vitals from Apple Watch.",
          "Automated prescription PDF generation with digital signature validation."
        ],
        screenImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800&auto=format&fit=crop",
        screenImageAlt: "Telehealth medical doctor video call screen"
      },
      {
        id: "ecommerce-luxury-retail",
        title: "E-Commerce & Augmented Reality Retail",
        subtitle: "ARKit 3D Product Try-On & Apple Pay Checkout",
        badge: "Retail AR",
        details: [
          "ARKit 6 framework allowing customers to preview 3D products in their room space.",
          "One-tap Apple Pay integration reducing checkout friction by 40%.",
          "Instant push notifications driven by hyper-targeted user location beacons."
        ],
        screenImage: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop",
        screenImageAlt: "E-commerce mobile store application product catalog"
      },
      {
        id: "on-demand-logistics",
        title: "On-Demand & Logistics",
        subtitle: "Real-Time GPS Fleet Tracking & Dispatch Systems",
        badge: "Logistics",
        details: [
          "CoreLocation background geo-tracking with optimized battery consumption.",
          "Live route optimization engine processing real-time traffic updates.",
          "Instant digital signature capture and proof-of-delivery photo uploads."
        ],
        screenImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
        screenImageAlt: "On-demand GPS map navigation and fleet tracking mobile interface"
      }
    ],
    featuresCards: [
      {
        title: "Canvas",
        description: "Design modular SwiftUI view hierarchies with reactive state bindings and liquid 120Hz ProMotion transitions.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
        imageAlt: "SwiftUI mobile design architecture layout"
      },
      {
        title: "Studio",
        description: "Automate TestFlight beta deployment rings and Apple App Store review submissions using Fastlane pipelines.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        imageAlt: "TestFlight CI/CD build release pipeline"
      },
      {
        title: "Engine IQ",
        description: "Leverage Metal GPU shader compilation and CoreData CloudKit sync for sub-10ms iOS app execution.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Metal GPU rendering engine visual"
      },
      {
        title: "Trust",
        description: "Hardware-backed Secure Enclave keychain vault protecting Face ID biometrics and passkey auth tokens.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Secure Enclave biometric protection screen"
      }
    ]
  },
  "android-kotlin": {
    slug: "android-kotlin",
    title: "Android & Kotlin Apps",
    badge: "Android & Kotlin Apps",
    headingBold: "Android apps built for",
    headingCursive: "speed.",
    mobileMockup: "/images/app-development/hero-mobile-screenshot.png",
    webMockup: "/images/app-development/hero-web-screenshot.png",
    ctaText: "Start Android Project",
    description: "Developing robust Android apps powered by Kotlin Coroutines, Jetpack Compose UI, Room Database, and Material You dynamic color tokenization.",
    howWeWorkTitleBold: "Everything you need to launch on Google Play",
    howWeWorkTitleCursive: "efficiently",
    howWeWorkSubtitle: "We engineer Kotlin codebases optimized for thousands of diverse device form-factors and screen densities.",
    stages: [
      {
        name: "Jetpack Compose",
        title: "Jetpack Compose Declarative UI",
        subtitle: "Authoring reactive Android UI trees with Material 3 dynamic color tokens.",
        cards: ["Material You Theming", "Compose Recomposition Guard", "Adaptive Screen Layouts"],
        image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Android developer writing Kotlin code"
      },
      {
        name: "Coroutines & Room",
        title: "Kotlin Coroutines & Room Database",
        subtitle: "Handling asynchronous background threads and local Room database caching.",
        cards: ["Flow Reactive Data Streams", "Encrypted Shared Preferences", "WorkManager Background Jobs"],
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Database data stream metrics interface"
      },
      {
        name: "Vulkan GPU Acceleration",
        title: "Vulkan Graphics Engine",
        subtitle: "Leveraging Vulkan APIs for high-frame-rate rendering across Android processors.",
        cards: ["Vulkan Pipeline Shaders", "RenderThread Optimizations", "Dynamic Memory Allocation"],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Microchip processor graphic render"
      },
      {
        name: "Play Integrity Security",
        title: "Hardware Security & Keystore",
        subtitle: "Verifying binary integrity and device trustworthiness via Google Play Integrity APIs.",
        cards: ["Play Integrity Tokens", "Biometric Prompt API", "SafetyNet Hardware Attestation"],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Mobile device security verification"
      },
      {
        name: "Foldable & Tablet UI",
        title: "Adaptive Screen Form-Factors",
        subtitle: "Creating dynamic pane layouts optimized for Android foldables, tablets, and Chromebooks.",
        cards: ["SlidingPaneLayout Specs", "WindowSizeClass API", "Multi-Window Tasking"],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Multi-screen workspace setup"
      },
      {
        name: "Play Store Release",
        title: "Google Play Console Automation",
        subtitle: "Deploying Android App Bundles (.aab) to internal testing and production release tracks.",
        cards: ["Android App Bundle (.aab)", "Play Integrity API Sync", "Automated Crashlytics Reporting"],
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Android phone showing app store dashboard"
      }
    ],
    simulatorTitleBold: "Real-world Android application",
    simulatorTitleCursive: "use cases",
    simulatorSubtitle: "Discover how our Kotlin and Jetpack Compose solutions drive results across diverse Android ecosystems.",
    simulatorTabs: [
      {
        id: "social-media-streaming",
        title: "Social Media & Live Streaming",
        subtitle: "High-Throughput Content Feeds & Live Media",
        badge: "Social & Media",
        details: [
          "Jetpack Compose LazyColumn layouts handling infinite scroll without dropped frames.",
          "ExoPlayer video streaming pipeline with adaptive bitrate switching.",
          "Camera2 API integration with custom real-time GPU filter shaders."
        ],
        screenImage: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
        screenImageAlt: "Social media video streaming application"
      },
      {
        id: "smart-iot-automotive",
        title: "Smart IoT & Connected Devices",
        subtitle: "BLE Telemetry & Android Auto Integration",
        badge: "IoT & Auto",
        details: [
          "Low-energy Bluetooth (BLE) auto-pairing with instant telemetry polling.",
          "Android Auto template architecture for safe hands-free vehicle controls.",
          "Background WorkManager tasks keeping IoT sensor states updated 24/7."
        ],
        screenImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
        screenImageAlt: "Smart home IoT control screen"
      },
      {
        id: "fintech-micropayments",
        title: "FinTech & Micro-Merchant Payments",
        subtitle: "NFC Tap-to-Pay & SoftPOS Android Solutions",
        badge: "FinTech",
        details: [
          "Android HCE (Host Card Emulation) for contactless NFC merchant payment clearance.",
          "Google Play Integrity API preventing compromised or rooted device transactions.",
          "Encrypted Room SQLite database caching offline transaction ledgers."
        ],
        screenImage: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=800&auto=format&fit=crop",
        screenImageAlt: "NFC contactless tap-to-pay mobile screen"
      },
      {
        id: "enterprise-field-mobility",
        title: "Field Operations & Workforce",
        subtitle: "Rugged Device Mobility & Offline Data Capture",
        badge: "Workforce",
        details: [
          "Designed for industrial Android handheld scanners and rugged tablets.",
          "High-speed barcode scanner SDK integration with sub-50ms decode speeds.",
          "Automatic background sync resuming instantly when field connectivity returns."
        ],
        screenImage: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=800&auto=format&fit=crop",
        screenImageAlt: "Handheld barcode scanning mobile app"
      }
    ],
    featuresCards: [
      {
        title: "Canvas",
        description: "Author Material 3 dynamic color UI trees using Jetpack Compose with zero-delay recomposition layout bounds.",
        image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Jetpack Compose Android UI layout"
      },
      {
        title: "Studio",
        description: "Automate Android App Bundle (.aab) deployments directly to Google Play Console testing and production tracks.",
        image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Google Play Console release dashboard"
      },
      {
        title: "Engine IQ",
        description: "Harness Kotlin Coroutines Flow and Room SQLite caching for ultra-fast background data processing.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Room database async processing engine"
      },
      {
        title: "Trust",
        description: "Hardware keystore token encryption and Play Integrity APIs preventing compromised APK binary execution.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Play Integrity hardware attestation screen"
      }
    ]
  },
  "cross-platform-flutter-react-native": {
    slug: "cross-platform-flutter-react-native",
    title: "Cross-Platform Mobile Apps",
    badge: "Cross-Platform Mobile Apps",
    headingBold: "Cross-platform apps for",
    headingCursive: "every device.",
    mobileMockup: "/images/app-development/hero-mobile-screenshot.png",
    webMockup: "/images/app-development/hero-web-screenshot.png",
    ctaText: "Start Cross-Platform Project",
    description: "Write once and ship to iOS, Android, and Web simultaneously utilizing Flutter Dart or React Native Expo with native C++/Swift bridges.",
    howWeWorkTitleBold: "Everything you need to launch multi-platform apps",
    howWeWorkTitleCursive: "rapidly",
    howWeWorkSubtitle: "We build shared business logic layers while compiling native UI components for iOS and Android.",
    stages: [
      {
        name: "Unified Codebase",
        title: "Shared Business Logic Architecture",
        subtitle: "Writing 95%+ reusable Dart or TypeScript code for state management and API calls.",
        cards: ["Flutter Riverpod / BLoC", "React Native Expo Router", "TypeScript Shared Schemas"],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Developer writing cross-platform code"
      },
      {
        name: "Native Bridges",
        title: "C++ & Swift / Kotlin Native Bridges",
        subtitle: "Accessing device hardware APIs (Camera, Bluetooth, Sensors) through zero-latency FFI bindings.",
        cards: ["Flutter FFI C++ Bindings", "JSI Native Modules", "Device Camera & BLE Bridge"],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Hardware bridging interface telemetry"
      },
      {
        name: "60 FPS Impeller",
        title: "Impeller Engine Rendering",
        subtitle: "Utilizing Flutter Impeller or React Native Fabric for liquid-smooth 60 FPS UI transitions.",
        cards: ["Impeller Vulkan & Metal Rigs", "Fabric Concurrent Renderer", "Zero JNI Overhead"],
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Graphics engine frame rate visualizer"
      },
      {
        name: "Over-The-Air Updates",
        title: "Instant Code-Push OTA Deployments",
        subtitle: "Pushing instant hot-fixes and UI patches directly to user devices without App Store review delay.",
        cards: ["EAS Updates Pipeline", "Encrypted Patch Signatures", "Rollback Safeguards"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        imageAlt: "OTA deployment server analytics"
      },
      {
        name: "Shared Web & Desktop",
        title: "Multi-Target Web & Desktop Compilation",
        subtitle: "Compiling cross-platform Dart code to WebAssembly (WASM) and native macOS / Windows apps.",
        cards: ["WASM Web Compilation", "macOS & Windows Rigs", "Responsive Breakpoints"],
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Multi-device web and desktop layout"
      },
      {
        name: "Dual App Launch",
        title: "Simultaneous App Stores Release",
        subtitle: "Publishing unified iOS App Store and Google Play Store builds in a single deployment pipeline.",
        cards: ["Expo EAS Build Automation", "Unified App Store Metadata", "Over-The-Air (OTA) Updates"],
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Smartphone showing checkout screen"
      }
    ],
    simulatorTitleBold: "Real-world cross-platform",
    simulatorTitleCursive: "use cases",
    simulatorSubtitle: "Examine how unified Flutter & React Native codebases power top-ranking applications globally.",
    simulatorTabs: [
      {
        id: "global-saas-mobile",
        title: "Global SaaS Mobile Extensions",
        subtitle: "Unified iOS & Android Dashboard Suites",
        badge: "SaaS",
        details: [
          "98%+ code sharing between iOS and Android mobile platforms.",
          "Instant Over-The-Air (OTA) updates deploying bug fixes in seconds.",
          "Synchronized GraphQL state management across desktop and mobile."
        ],
        screenImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
        screenImageAlt: "SaaS analytics mobile dashboard UI"
      },
      {
        id: "marketplace-on-demand",
        title: "Two-Sided Marketplaces",
        subtitle: "Consumer & Provider Multi-Role Applications",
        badge: "Marketplace",
        details: [
          "Single codebase driving both customer ordering and driver dispatch apps.",
          "Real-time Socket.io map tracking with smooth Flutter Impeller vector graphics.",
          "Multi-currency Stripe and PayPal payment checkout integrations."
        ],
        screenImage: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=800&auto=format&fit=crop",
        screenImageAlt: "Mobile marketplace product discovery screen"
      },
      {
        id: "media-content-streaming",
        title: "Media & Audio Streaming",
        subtitle: "Cross-Platform Video & Podcast Platforms",
        badge: "Media",
        details: [
          "Background audio playback control syncing seamlessly with OS lock-screens.",
          "React Native Fabric concurrent renderer delivering lag-free UI scrolling.",
          "Offline media download manager with local storage encryption."
        ],
        screenImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=800&auto=format&fit=crop",
        screenImageAlt: "Music podcast audio player mobile interface"
      },
      {
        id: "edtech-interactive-learning",
        title: "EdTech & Gamified Learning",
        subtitle: "Interactive Quizzes & Micro-Learning Platforms",
        badge: "EdTech",
        details: [
          "Rive 2D animation integration delivering fluid micro-interactions.",
          "Gamified reward progress trackers with real-time push notification nudges.",
          "Cross-platform WebAssembly compilation running directly in web browsers."
        ],
        screenImage: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=800&auto=format&fit=crop",
        screenImageAlt: "Interactive mobile learning application"
      }
    ],
    featuresCards: [
      {
        title: "Canvas",
        description: "Write 95%+ reusable Dart or TypeScript code compiled natively for iOS, Android, and Web.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Cross-platform unified codebase architecture"
      },
      {
        title: "Studio",
        description: "Deploy instant Over-The-Air (OTA) updates using EAS CodePush without waiting for App Store approvals.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Expo EAS CodePush deployment visualizer"
      },
      {
        title: "Engine IQ",
        description: "Pre-compiled Flutter Impeller vector graphics engine delivering liquid 60 FPS transitions.",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Impeller rendering engine frame rate screen"
      },
      {
        title: "Trust",
        description: "Zero-latency C++ FFI native bridges connecting directly to device Bluetooth, Camera, and Secure Enclave.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Native FFI C++ hardware bridge interface"
      }
    ]
  },
  "enterprise-mobile-solutions": {
    slug: "enterprise-mobile-solutions",
    title: "Enterprise Mobile Suites",
    badge: "Enterprise Mobile Suites",
    headingBold: "Native iOS apps built with",
    headingCursive: "precision.",
    mobileMockup: "/images/app-development/hero-mobile-screenshot.png",
    webMockup: "/images/app-development/hero-web-screenshot.png",
    ctaText: "Start iOS Project",
    description: "Architecting high-performance native iOS applications utilizing SwiftUI, Combine, Metal GPU rendering, and CoreData for liquid-smooth 120Hz ProMotion experiences.",
    howWeWorkTitleBold: "Everything you need to publish to the App Store",
    howWeWorkTitleCursive: "seamlessly",
    howWeWorkSubtitle: "Our end-to-end iOS engineering pipeline ensures full Human Interface Guidelines compliance and instant TestFlight validation.",
    stages: [
      {
        name: "SwiftUI Architecture",
        title: "SwiftUI & MVVM Architecture",
        subtitle: "Designing modular view models, reactive state bindings, and navigation stacks.",
        cards: ["SwiftUI 6 Layouts", "Combine State Streams", "Swift Concurrency Tasks"],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Developer writing Swift code on MacBook display"
      },
      {
        name: "CoreData & Sync",
        title: "CoreData & CloudKit Sync",
        subtitle: "Building encrypted local SQLite stores synced automatically across user Apple devices.",
        cards: ["CloudKit Private Database", "Biometric Keychain Vault", "Stale Cache Revalidation"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Data analytics dashboard with real-time sync charts"
      },
      {
        name: "Metal Graphics",
        title: "Metal GPU & Shader Motion",
        subtitle: "Unlocking 120 FPS fluid animations and custom shader visual effects.",
        cards: ["Metal Performance Shaders", "ProMotion 120Hz Lock", "Core Animation Pipelines"],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
        imageAlt: "High-tech server room visual rendering"
      },
      {
        name: "App Security & Keychains",
        title: "Secure Enclave & Biometrics",
        subtitle: "Protecting user tokens with hardware-backed encryption keychains and Face ID authentication.",
        cards: ["Face ID Biometrics", "AES-256 GCM Storage", "Passkey Integration"],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Mobile security data protection display"
      },
      {
        name: "TestFlight Validation",
        title: "Automated QA & Beta Testing",
        subtitle: "Running automated UI testing suites and staging builds directly to global TestFlight testers.",
        cards: ["XCTest & XCUITest Suite", "TestFlight Beta Rings", "Crashlytics Symbolication"],
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Engineers analyzing mobile app performance"
      },
      {
        name: "App Store Launch",
        title: "App Store Connect & Deployment",
        subtitle: "Automating CI/CD deployment runs to TestFlight and Apple App Store review queues.",
        cards: ["Fastlane Build Pipeline", "App Store Privacy Manifests", "Sub-24h Review Approval"],
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
        imageAlt: "iPhone handheld mobile user experience"
      }
    ],
    simulatorTitleBold: "Real-world mobile application",
    simulatorTitleCursive: "use cases",
    simulatorSubtitle: "Explore how our native iOS architecture powers mission-critical mobile solutions across industries.",
    simulatorTabs: [
      {
        id: "fintech-banking",
        title: "FinTech & Mobile Banking",
        subtitle: "High-Security Native Wallet & Transaction Suites",
        badge: "FinTech",
        details: [
          "Hardware-backed Secure Enclave keychain storage for zero plain-text key exposure.",
          "Sub-10ms biometric authentication utilizing Apple Face ID & Touch ID APIs.",
          "Real-time encrypted transaction streaming with zero-lag 120Hz chart rendering."
        ],
        screenImage: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=800&auto=format&fit=crop",
        screenImageAlt: "FinTech mobile banking app interface on iPhone display"
      },
      {
        id: "healthcare-telemedicine",
        title: "Healthcare & Telemedicine",
        subtitle: "HIPAA-Compliant Remote Care & Patient Monitoring",
        badge: "Healthcare",
        details: [
          "End-to-end encrypted HealthKit sensor data synchronization and telemetry.",
          "Ultra-low latency WebRTC peer-to-peer HD video consultation streams.",
          "Offline-first patient record caching with automatic CloudKit database sync."
        ],
        screenImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
        screenImageAlt: "Healthcare patient monitoring app screen"
      },
      {
        id: "ecommerce-retail",
        title: "E-Commerce & Digital Retail",
        subtitle: "Apple Pay & AR Product Preview Experience",
        badge: "Retail",
        details: [
          "One-tap Apple Pay checkout integration with sub-second payment clearance.",
          "ARKit 3D product visualizer allowing customers to preview items in real space.",
          "Instant push notifications driven by hyper-targeted user location beacons."
        ],
        screenImage: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=800&auto=format&fit=crop",
        screenImageAlt: "E-commerce mobile store application product catalog"
      },
      {
        id: "on-demand-logistics",
        title: "On-Demand & Logistics",
        subtitle: "Real-Time GPS Fleet Tracking & Dispatch Systems",
        badge: "Logistics",
        details: [
          "CoreLocation background geo-tracking with optimized battery consumption.",
          "Live route optimization engine processing real-time traffic updates.",
          "Instant digital signature capture and proof-of-delivery photo uploads."
        ],
        screenImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
        screenImageAlt: "On-demand GPS map navigation and fleet tracking mobile interface"
      }
    ],
    featuresCards: [
      {
        title: "Canvas",
        description: "Design modular SwiftUI view hierarchies with reactive state bindings and liquid 120Hz ProMotion transitions.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
        imageAlt: "SwiftUI mobile design architecture layout"
      },
      {
        title: "Studio",
        description: "Automate TestFlight beta deployment rings and Apple App Store review submissions using Fastlane pipelines.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        imageAlt: "TestFlight CI/CD build release pipeline"
      },
      {
        title: "Engine IQ",
        description: "Leverage Metal GPU shader compilation and CoreData CloudKit sync for sub-10ms iOS app execution.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Metal GPU rendering engine visual"
      },
      {
        title: "Trust",
        description: "Hardware-backed Secure Enclave keychain vault protecting Face ID biometrics and passkey auth tokens.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Secure Enclave biometric protection screen"
      }
    ]
  },
};