export interface TopicDetail {
  id: string;
  title: string;
  badge: string;
  summary: string;
  description: string;
  points: string[];
  ctaText: string;
  laptopImage: string;
  laptopImageAlt: string;
}

export interface UseCaseDetail {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface InfrastructureBenefit {
  title: string;
  description: string;
  iconName: "server" | "globe" | "zap" | "coins" | "cpu" | "shield" | "database" | "lock";
}

export interface AiCategoryData {
  slug: string;
  title: string;
  badge: string;
  headingBold: string;
  headingLight: string;
  heroImage: string;
  heroImageAlt: string;
  ctaText: string;
  stats: { label: string; value: string }[];
  sectionTitle: string;
  sectionSubtitle: string;
  topics: TopicDetail[];
  useCasesTitle: string;
  useCasesSubtitle: string;
  gridUseCases: UseCaseDetail[];
  bottomUseCase: UseCaseDetail;
  benefitHeaderBold: string;
  benefitHeaderLight: string;
  benefits: InfrastructureBenefit[];
}

export const aiAutomationCategories: Record<string, AiCategoryData> = {
  "autonomous-ai-agents": {
    slug: "autonomous-ai-agents",
    title: "Autonomous AI Agents",
    badge: "Autonomous AI Agents",
    headingBold: "Hire AI agents",
    headingLight: "to resolve legal requests autonomously.",
    heroImage: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop",
    heroImageAlt: "Real life humanoid AI robot assistant working on automated tasks",
    ctaText: "Book a demo",
    stats: [
      { value: "99.4%", label: "Task Execution Accuracy" },
      { value: "10x", label: "Faster Operations" },
      { value: "24/7", label: "Autonomous Availability" },
    ],
    sectionTitle: "Automate operations with intelligent AI\u00A0agents",
    sectionSubtitle: "Empower your teams with self-operating AI workflows built for scale.",
    topics: [
      {
        id: "discover",
        title: "Discover",
        badge: "AI Discovery",
        summary: "AI-powered task discovery across your data landscape.",
        description: "Intelligent agents analyze internal document streams and identify automation opportunities automatically.",
        points: [
          "Cross-platform task mining across Slack and email",
          "Automated workflow dependency mapping",
          "Real-time bottleneck identification"
        ],
        ctaText: "Explore Discovery",
        laptopImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
        laptopImageAlt: "Real life team collaborating on AI system design"
      },
      {
        id: "execute",
        title: "Execute",
        badge: "Tool Integration",
        summary: "Autonomous execution across SaaS tools & APIs.",
        description: "Agents invoke internal APIs, update CRMs, and clear operational backlogs with self-healing retries.",
        points: [
          "Multi-step API tool invocation",
          "Self-healing error recovery logic",
          "Structured JSON payload generation"
        ],
        ctaText: "See Execution",
        laptopImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
        laptopImageAlt: "Real life automation engineer working on equipment"
      },
      {
        id: "monitor",
        title: "Monitor",
        badge: "Real-Time Audit",
        summary: "Reduce risk and ensure execution integrity.",
        description: "Track agent performance metrics, audit logs, and system health in real-time.",
        points: [
          "Complete execution step telemetry",
          "Anomalous behavior alerts",
          "SLA & latency tracking"
        ],
        ctaText: "View Monitoring",
        laptopImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
        laptopImageAlt: "Real life high-tech analytics screen setup"
      },
      {
        id: "govern",
        title: "Govern",
        badge: "Enterprise Security",
        summary: "Enforce policy controls and human approvals.",
        description: "Maintain human-in-the-loop oversight for high-stake financial and compliance actions.",
        points: [
          "Configurable human approval triggers",
          "SOC2 & HIPAA compliant audit trails",
          "Granular permission boundary enforcement"
        ],
        ctaText: "Check Governance",
        laptopImage: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
        laptopImageAlt: "Real life cyber security monitoring hardware"
      }
    ],
    useCasesTitle: "A proven agent platform you can count on",
    useCasesSubtitle: "See how enterprise teams deploy autonomous workflows to drive efficiency.",
    gridUseCases: [
      {
        title: "Customer Support Automation",
        description: "Intelligent agents handle incoming tickets, resolve billing claims, and triage complex technical cases autonomously.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop",
        imageAlt: "Customer support professional using computer"
      },
      {
        title: "Financial Invoice Audits",
        description: "Agents scrape invoice PDFs, match line items with purchase orders, and flag discrepancies automatically.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop",
        imageAlt: "Professional reviewing financial statement document"
      },
      {
        title: "HR & Onboarding Workflows",
        description: "Automate employee hardware allocation, software access grants, and training module assignments.",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop",
        imageAlt: "HR team in discussion at modern office"
      },
      {
        title: "Compliance Document Scanning",
        description: "Agents read compliance contracts, verify clauses against state regulations, and flag potential audit risks.",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop",
        imageAlt: "Legal counsel working at desk"
      }
    ],
    bottomUseCase: {
      title: "Cross-departmental operations software",
      description: "Connect sales, customer success, finance, and engineering through unified autonomous coordinators that schedule updates, trigger sync meetings, and dispatch action items.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
      imageAlt: "Large real life tech team collaborating in bright office space"
    },
    benefitHeaderBold: "ENTERPRISE SCALE,",
    benefitHeaderLight: "ZERO COMPROMISE",
    benefits: [
      {
        title: "INTELLIGENT RETRIES",
        description: "Agents auto-recover from API timeouts, data mismatches, and execution errors seamlessly.",
        iconName: "cpu"
      },
      {
        title: "SECURE CRON SCHEDULE",
        description: "Schedule AI agent workflows to execute on recurring hourly, daily, or weekly schedules.",
        iconName: "lock"
      },
      {
        title: "AUDITED LOGS",
        description: "Review complete step-by-step telemetry, planning files, and API calls made by agents.",
        iconName: "shield"
      },
      {
        title: "COST CONTROL",
        description: "Set strict monthly token usage boundaries and query limits to manage operational budgets.",
        iconName: "coins"
      }
    ]
  },

  "agentic-ai-systems": {
    slug: "agentic-ai-systems",
    title: "Agentic AI Systems",
    badge: "Agentic AI Systems",
    headingBold: "Deploy agent swarms",
    headingLight: "to automate departmental workflows.",
    heroImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    heroImageAlt: "Real life engineering swarm working together in modern white office",
    ctaText: "Book a demo",
    stats: [
      { value: "85%", label: "Operational Overhead Saved" },
      { value: "50ms", label: "Inter-Agent Latency" },
      { value: "100%", label: "Context Preservation" },
    ],
    sectionTitle: "Orchestrate specialized AI agent\u00A0networks",
    sectionSubtitle: "Build multi-agent ecosystems that collaborate across business units seamlessly.",
    topics: [
      {
        id: "swarm",
        title: "Swarm Dispatch",
        badge: "Multi-Agent Routing",
        summary: "Distribute tasks across domain-specific sub-agents.",
        description: "Specialized agents handle domain tasks independently while sharing progress through a central coordinator.",
        points: [
          "Dynamic workload distribution",
          "Domain-specialized agent prompts",
          "Automatic parallel execution"
        ],
        ctaText: "Explore Swarms",
        laptopImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
        laptopImageAlt: "Real life tech team coordinating complex systems"
      },
      {
        id: "memory",
        title: "Memory Fabric",
        badge: "Shared Context",
        summary: "Unified memory across active agent sessions.",
        description: "Persistent vector and short-term memory keeps agents aligned on organizational context.",
        points: [
          "Cross-agent context synchronization",
          "Long-term vector memory retrieval",
          "Zero context loss during handoffs"
        ],
        ctaText: "View Memory Tech",
        laptopImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
        laptopImageAlt: "Real life server hardware cables and optics"
      },
      {
        id: "routing",
        title: "Dynamic Routing",
        badge: "Orchestration",
        summary: "Intelligent fallback logic and dynamic dispatch.",
        description: "Automatically reroute complex requests to secondary agents or human supervisors when thresholds trip.",
        points: [
          "Confidence score threshold routing",
          "Automatic agent failover retries",
          "Real-time latency minimization"
        ],
        ctaText: "See Routing",
        laptopImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
        laptopImageAlt: "Real life globe data connectivity visualization"
      },
      {
        id: "security",
        title: "RBAC Security",
        badge: "Access Control",
        summary: "Zero-trust security policies for agent networks.",
        description: "Enforce strict scoping rules to prevent agents from reading unauthorized corporate data.",
        points: [
          "Role-based agent access controls",
          "API token scope restriction",
          "Encrypted memory storage"
        ],
        ctaText: "Check Security",
        laptopImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
        laptopImageAlt: "Real life hardware circuit board closeup"
      }
    ],
    useCasesTitle: "A unified system built for department alignment",
    useCasesSubtitle: "See how multi-agent coordination transforms daily operations.",
    gridUseCases: [
      {
        title: "Supply Chain Swarm Coordination",
        description: "Specialized inventory, pricing, and freight agents coordinate to reorder stock and schedule logistics without friction.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop",
        imageAlt: "Worker organizing inventory packages"
      },
      {
        title: "Marketing Campaign Dispatcher",
        description: "SEO, copywriter, and graphics agents collaborate to draft copy, optimize metadata, and queue social posts in parallel.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
        imageAlt: "Marketing team reviewing analytics dashboards"
      },
      {
        title: "Engineering Ticket Resolution",
        description: "Bug diagnostic agents scan error stacktraces, check historical code changes, and draft pull requests automatically.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
        imageAlt: "Software engineer typing code"
      },
      {
        title: "Multilingual Content Localization",
        description: "Translation, contextual styling, and formatting agents ensure consistent documentation updates in dozens of languages.",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=600&auto=format&fit=crop",
        imageAlt: "Professional writer in discussion"
      }
    ],
    bottomUseCase: {
      title: "Enterprise Swarm Management Hub",
      description: "Coordinate thousands of custom LLM sub-agents running asynchronously across different virtual networks with guaranteed state preservation.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop",
      imageAlt: "Team designing cloud system topology"
    },
    benefitHeaderBold: "DECENTRALIZED SWARMS,",
    benefitHeaderLight: "UNIFIED CONTEXT",
    benefits: [
      {
        title: "ISOLATED SANDBOX",
        description: "Run agent execution inside secure isolated virtual containers with limited file system access.",
        iconName: "server"
      },
      {
        title: "EVENT MESSAGING",
        description: "Agents communicate through an asynchronous message broker to coordinate multi-step tasks.",
        iconName: "zap"
      },
      {
        title: "CONTEXT SUMMARY",
        description: "Automated summarization algorithms preserve key history during long multi-turn sessions.",
        iconName: "database"
      },
      {
        title: "RBAC BOUNDARIES",
        description: "Restrict database write access and tool invocation limits on a per-agent basis.",
        iconName: "lock"
      }
    ]
  },

  "generative-ai-llms": {
    slug: "generative-ai-llms",
    title: "Generative AI & LLMs",
    badge: "Generative AI & LLMs",
    headingBold: "Fine-tune custom LLMs",
    headingLight: "on proprietary company data.",
    heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    heroImageAlt: "Real life software developer coding custom LLM algorithms on workstation",
    ctaText: "Book a demo",
    stats: [
      { value: "99.9%", label: "Data Privacy & On-Prem" },
      { value: "4x", label: "Lower Inference Cost" },
      { value: "128k", label: "Native Context Window" },
    ],
    sectionTitle: "Custom LLMs trained for your\u00A0domain",
    sectionSubtitle: "Build and deploy proprietary language models with absolute data privacy.",
    topics: [
      {
        id: "tokenize",
        title: "Data Prep",
        badge: "Dataset Tokenization",
        summary: "Cleanse and tokenize proprietary corpora.",
        description: "Prepare raw internal documentation, code, and logs into optimal formats for model tuning.",
        points: [
          "Automated PII scrubbing",
          "Domain-specific tokenizers",
          "High-throughput chunking"
        ],
        ctaText: "Explore Data Prep",
        laptopImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
        laptopImageAlt: "Real life modern tech workspace with code monitor"
      },
      {
        id: "tune",
        title: "Fine-Tuning",
        badge: "LoRA Training",
        summary: "Adapt foundation models to brand terminology.",
        description: "Train lightweight adapter weights using LoRA and QLoRA for low latency and high accuracy.",
        points: [
          "Parameter-efficient LoRA adapters",
          "Custom brand voice alignment",
          "Supervised fine-tuning pipelines"
        ],
        ctaText: "See Fine-Tuning",
        laptopImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
        laptopImageAlt: "Real life silicon processor hardware"
      },
      {
        id: "deploy",
        title: "Private GPU",
        badge: "Isolated Infrastructure",
        summary: "Deploy on dedicated cloud or on-prem GPUs.",
        description: "Guarantee strict data residency with isolated inference servers that never leak company data.",
        points: [
          "Dedicated VPC GPU instances",
          "vLLM & TensorRT optimization",
          "Auto-scaling inference clusters"
        ],
        ctaText: "View Deployment",
        laptopImage: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1200&auto=format&fit=crop",
        laptopImageAlt: "Real life high-end computer GPU hardware"
      },
      {
        id: "verify",
        title: "Verification",
        badge: "Output Auditing",
        summary: "Eliminate hallucinations with verification guardrails.",
        description: "Real-time logit bias tuning and verification checks ensure 100% reliable responses.",
        points: [
          "Automated hallucination scoring",
          "Fact-check verification layer",
          "Compliance boundary checks"
        ],
        ctaText: "Check Auditing",
        laptopImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        laptopImageAlt: "Real life financial and data auditing workstation"
      }
    ],
    useCasesTitle: "Tailored model tuning for enterprise safety",
    useCasesSubtitle: "Understand how proprietary fine-tuned models resolve strict industry demands.",
    gridUseCases: [
      {
        title: "Medical Report Summarization",
        description: "HIPAA-compliant LLMs analyze patient records and create concise case summaries for clinical review.",
        image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?q=80&w=600&auto=format&fit=crop",
        imageAlt: "Clinician using tablet computer"
      },
      {
        title: "Legal Clause Analysis",
        description: "Fine-tuned models evaluate liabilities, cross-reference contract terms, and highlight anomalies.",
        image: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=600&auto=format&fit=crop",
        imageAlt: "Law books and document analysis"
      },
      {
        title: "Financial Auditing Chatbots",
        description: "Internal custom models analyze regulatory requirements and output audit compliance reports.",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop",
        imageAlt: "Accounting charts review"
      },
      {
        title: "Localized Knowledge Drafting",
        description: "Generate highly specific internal engineering logs and wiki updates formatted for standard guidelines.",
        image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop",
        imageAlt: "Engineering brainstorming setup"
      }
    ],
    bottomUseCase: {
      title: "On-Premises Dedicated Inference Cluster",
      description: "Scale high-performance fine-tuned models with zero external internet dependencies using dedicated, client-owned GPU clusters.",
      image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?q=80&w=1200&auto=format&fit=crop",
      imageAlt: "Data center hardware computing node"
    },
    benefitHeaderBold: "PROPRIETARY WEIGHTS,",
    benefitHeaderLight: "MAXIMUM SPEED",
    benefits: [
      {
        title: "GPU HOSTING",
        description: "Run model inference on dedicated virtual private clouds with isolated server architectures.",
        iconName: "server"
      },
      {
        title: "LoRA QUANTIZATION",
        description: "Use AWQ and GPTQ 4-bit precision to reduce VRAM requirements by up to 75% for efficiency.",
        iconName: "cpu"
      },
      {
        title: "COLD START ZERO",
        description: "Fast deployment pools keep inference servers warm and scale down to zero when idle.",
        iconName: "zap"
      },
      {
        title: "FLAT COMPUTE PRICING",
        description: "Enjoy flat-rate dedicated compute billing that eliminates high pay-per-token cost spikes.",
        iconName: "coins"
      }
    ]
  },

  "rag-knowledge-engines": {
    slug: "rag-knowledge-engines",
    title: "RAG Knowledge Engines",
    badge: "RAG Knowledge Engines",
    headingBold: "Query internal knowledge",
    headingLight: "with instant vector search.",
    heroImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
    heroImageAlt: "Real life cloud database hardware server rack and vector search network data flow",
    ctaText: "Book a demo",
    stats: [
      { value: "< 10ms", label: "Vector Search Latency" },
      { value: "100M+", label: "Indexed Documents" },
      { value: "Zero", label: "Data Leakage Guarantee" },
    ],
    sectionTitle: "Query enterprise data with microsecond\u00A0retrieval",
    sectionSubtitle: "Connect Notion, Confluence, PDFs, and databases into a zero-hallucination knowledge engine.",
    topics: [
      {
        id: "ingest",
        title: "Ingestion",
        badge: "Real-Time Indexing",
        summary: "Connect Notion, Confluence, and SQL archives.",
        description: "Automated ETL pipelines ingest internal documents and build high-density vector embeddings.",
        points: [
          "Automated document parsers",
          "Incremental sync connector APIs",
          "Multi-modal document chunking"
        ],
        ctaText: "Explore Ingestion",
        laptopImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1200&auto=format&fit=crop",
        laptopImageAlt: "Real life person working with laptop and internal documentation"
      },
      {
        id: "search",
        title: "Vector Search",
        badge: "Hybrid Search",
        summary: "Microsecond vector and keyword search.",
        description: "Combines dense semantic vector embeddings with keyword BM25 retrieval for pinpoint accuracy.",
        points: [
          "Sub-10ms vector query latency",
          "Hybrid BM25 + dense ranking",
          "Re-ranking model integration"
        ],
        ctaText: "See Vector Search",
        laptopImage: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop",
        laptopImageAlt: "Real life data analytics charts"
      },
      {
        id: "synthesize",
        title: "Citation",
        badge: "Source Transparency",
        summary: "Synthesize answers with strict source citation.",
        description: "Every generated answer links back directly to the exact line and file in your source repository.",
        points: [
          "Deep-linked source document citations",
          "Traceable reasoning lineage",
          "Zero-hallucination verification"
        ],
        ctaText: "View Citations",
        laptopImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
        laptopImageAlt: "Real life executive reviewing cited document data"
      },
      {
        id: "sync",
        title: "Auto Sync",
        badge: "Live Updates",
        summary: "Keep vector databases updated in real-time.",
        description: "Whenever a source document changes, the knowledge engine updates its index automatically.",
        points: [
          "Webhook event driven re-indexing",
          "Zero downtime index swapping",
          "Versioned embedding snapshots"
        ],
        ctaText: "Check Auto Sync",
        laptopImage: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format&fit=crop",
        laptopImageAlt: "Real life engineering team reviewing workflow diagrams"
      }
    ],
    useCasesTitle: "A trusted semantic search base you can audit",
    useCasesSubtitle: "See how teams verify data sources and eliminate hallucination with RAG architecture.",
    gridUseCases: [
      {
        title: "Internal Technical Wiki Search",
        description: "Engineers query legacy code repositories, API documentations, and historical setup guides with semantic understanding.",
        image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=600&auto=format&fit=crop",
        imageAlt: "Developer viewing code screen"
      },
      {
        title: "Customer Support Agent Assistant",
        description: "Provide live helpdesk agents with instant document citation links to help resolve customer disputes in seconds.",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop",
        imageAlt: "Support agents in open space"
      },
      {
        title: "Regulatory Legal Inquiries",
        description: "Compliance auditors search compliance documentation, historical SEC reports, and government guidelines.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop",
        imageAlt: "Analyst doing regulatory search"
      },
      {
        title: "Financial Report Synthesis",
        description: "Retrieve exact earnings statements, tax records, and expense sheets across thousands of scattered PDF documents.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
        imageAlt: "Business intelligence workspace"
      }
    ],
    bottomUseCase: {
      title: "Incremental Real-time Synchronization Pipeline",
      description: "Scale high-performance vector sync pipelines that watch Notion, Confluence, and corporate databases, refreshing semantic indexes dynamically without API service downtime.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
      imageAlt: "Networking server rack hardware connectors"
    },
    benefitHeaderBold: "MILLISECOND SEARCH,",
    benefitHeaderLight: "ZERO HALLUCINATION",
    benefits: [
      {
        title: "HYBRID SEMANTIC SEARCH",
        description: "Combines dense vector embeddings with sparse keyword search for accurate scoring.",
        iconName: "database"
      },
      {
        title: "DYNAMIC CHUNKING",
        description: "Document pre-processing dynamically formats chunks based on headers, tables, and lists.",
        iconName: "cpu"
      },
      {
        title: "METADATA CONTROLS",
        description: "Filter search results based on user access levels, upload date, and source directories.",
        iconName: "lock"
      },
      {
        title: "AUTOMATED SYNC WEBHOOKS",
        description: "Webhooks trigger indexing updates whenever files update on cloud repositories.",
        iconName: "zap"
      }
    ]
  },
};
