export interface CloudHeroCard {
  title: string;
  tag: string;
  badgeColor: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface CloudTopicDetail {
  id: string;
  title: string;
  summary: string;
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
}

export interface CloudUseCaseDetail {
  id: string;
  tag: string;
  titleBold: string;
  titleCursive: string;
  description: string;
  points: string[];
  image: string;
  imageAlt: string;
}

export interface CloudFeatureDetail {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface CloudCategoryData {
  slug: string;
  title: string;
  badge: string;
  headingBold: string;
  headingCursive: string;
  description: string;
  ctaText: string;
  stats: { label: string; value: string }[];
  heroCards: CloudHeroCard[];
  sectionBadge: string;
  sectionTitleBold: string;
  sectionTitleCursive: string;
  sectionSubtitle: string;
  topics: CloudTopicDetail[];
  useCasesBadge: string;
  useCasesTitleBold: string;
  useCasesTitleCursive: string;
  useCasesSubtitle: string;
  useCases: CloudUseCaseDetail[];
  featuresBadge: string;
  featuresTitleBold: string;
  featuresTitleCursive: string;
  featuresSubtitle: string;
  features: CloudFeatureDetail[];
}

export const cloudServicesCategories: Record<string, CloudCategoryData> = {
  "aws-azure-infrastructure": {
    slug: "aws-azure-infrastructure",
    title: "AWS & Azure Infrastructure",
    badge: "AWS & Azure Infrastructure",
    headingBold: "Scale Resilient Cloud",
    headingCursive: "Infrastructure & Security.",
    description: "Architect high-availability multi-cloud environments across AWS and Azure with zero-downtime failover, compliance guardrails, and enterprise resource governance.",
    ctaText: "Get Cloud Audit",
    stats: [
      { value: "99.99%", label: "Uptime SLA Guarantee" },
      { value: "45%", label: "Average Cloud Bill Savings" },
      { value: "< 5ms", label: "Global Edge Latency" },
    ],
    heroCards: [
      {
        title: "Multi-Region Cloud Topology",
        tag: "Infrastructure",
        badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
        description: "Active-active multi-region load balancing with real-time health telemetry across AWS US-East and Azure West Europe.",
        image: "/images/aws-azure-hero.jpg",
        imageAlt: "3D isometric AWS and Azure multi-cloud network infrastructure architecture",
      },
      {
        title: "Cloud Services Sync & Data Flow",
        tag: "FinOps Console",
        badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
        description: "Cloud database synchronization, automated backup pipelines, and live resource monitoring.",
        image: "/images/cloud-hero-2.png",
        imageAlt: "Cloud services data sync and cloud notebook 3D illustration",
      },
      {
        title: "Zero-Trust Identity & Data Center",
        tag: "Security Guardrails",
        badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
        description: "Automated SOC2 & HIPAA policy enforcement with unified IAM role synchronization across enterprise accounts.",
        image: "/images/cloud-hero-3.png",
        imageAlt: "Data center, file hosting, and cloud computing architecture 3D illustration",
      },
    ],
    sectionBadge: "CLOUD ARCHITECTURE INSIGHTS",
    sectionTitleBold: "Enterprise Multi-Cloud",
    sectionTitleCursive: "Architecture Capabilities.",
    sectionSubtitle: "Discover how enterprise teams deploy multi-cloud infrastructure to achieve 99.99% uptime and linear scale.",
    topics: [
      {
        id: "01",
        title: "Multi-Region AWS & Azure VPC Interconnect",
        summary: "Architecting zero-latency private cloud peering across hybrid cloud regions.",
        description: "Establish dedicated ExpressRoute and DirectConnect tunnels for secure high-bandwidth data transfers between AWS VPC and Azure VNet environments.",
        points: [
          "Cross-cloud active-active load balancing",
          "Automated sub-5ms failover routing",
          "Encrypted IPSec & MACsec hardware tunnels"
        ],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Real life cloud engineers monitoring multi-region server infrastructure",
      },
      {
        id: "02",
        title: "Automated FinOps & Bill Optimization",
        summary: "Eliminating idle compute overhead with automated spot instance scaling.",
        description: "Deploy automated cloud cost governance policies that shut down non-production workloads during off-peak hours and auto-convert EC2 instances to spot pools.",
        points: [
          "AI-driven reserved instance recommendations",
          "Automated idle container resource termination",
          "Real-time cost telemetry & Slack alerts"
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Real life cloud financial analytics dashboard workstation",
      },
      {
        id: "03",
        title: "Zero-Trust IAM & Security Guardrails",
        summary: "Enforcing unified permission boundaries across enterprise cloud accounts.",
        description: "Implement principle of least privilege access with temporary STS token credentials and real-time AWS CloudTrail security telemetry.",
        points: [
          "Automated SOC2 & HIPAA policy compliance",
          "Unified IAM role synchronization across accounts",
          "Real-time security vulnerability detection"
        ],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Real life cyber security specialist auditing cloud network access",
      },
      {
        id: "04",
        title: "Disaster Recovery & Multi-Master DB Sync",
        summary: "Sub-second database failover with active-active Aurora Global Clusters.",
        description: "Achieve near-zero RPO and RTO for mission-critical databases with automated failover routing across multi-region cloud availability zones.",
        points: [
          "Sub-second RPO & RTO multi-region database failover",
          "Active-active global database cluster synchronization",
          "Automated point-in-time snapshot recovery"
        ],
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Real life datacenter hardware technician inspecting high-speed servers",
      },
    ],
    useCasesBadge: "ENTERPRISE USE CASES",
    useCasesTitleBold: "Real-World Multi-Cloud",
    useCasesTitleCursive: "Deployments & Solutions.",
    useCasesSubtitle: "See how global organizations leverage AWS & Azure multi-cloud architecture to scale mission-critical workloads.",
    useCases: [
      {
        id: "01",
        tag: "Global Banking Multi-Cloud Failover Engine",
        titleBold: "Global Banking Multi-Cloud",
        titleCursive: "Failover Engine.",
        description: "Architected a dual-region active-active VPC peering model between AWS US-East and Azure East US with sub-10ms transaction synchronization for 50M+ mobile banking users.",
        points: [
          "99.999% high-availability SLA uptime achieved",
          "Automated SOC2 & PCI-DSS compliance auditing",
          "Sub-millisecond global Aurora database replication"
        ],
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Financial technology analytics team monitoring global bank transactions",
      },
      {
        id: "02",
        tag: "HIPAA Compliant Cloud Data Vault Architecture",
        titleBold: "HIPAA Compliant Cloud Data",
        titleCursive: "Vault Architecture.",
        description: "Engineered isolated private cloud enclaves across AWS S3 and Azure Blob with hardware KMS encryption keys to store over 200 Million patient medical imaging records securely.",
        points: [
          "100% HIPAA and HITRUST certified data vaults",
          "Customer-managed AWS KMS encryption keys",
          "Zero data leak incidents across 5+ years"
        ],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Healthcare professionals reviewing cloud medical diagnostic software",
      },
      {
        id: "03",
        tag: "Black Friday Elastic Auto-Scaling Infrastructure",
        titleBold: "Black Friday Elastic Auto-Scaling",
        titleCursive: "Network Infrastructure.",
        description: "Deployed automated spot fleet scaling and CloudFront edge caching that effortlessly absorbed over 4.8 Million peak requests per minute with zero downtime.",
        points: [
          "4.8M peak requests/min absorbed seamlessly",
          "52% cloud infrastructure cost savings via Spot Fleets",
          "Sub-15ms edge page response time worldwide"
        ],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "E-commerce analytics dashboard during peak flash sale event",
      },
      {
        id: "04",
        tag: "Ultra-Low Latency Video CDN Routing Mesh",
        titleBold: "Ultra-Low Latency Video",
        titleCursive: "CDN Routing Mesh.",
        description: "Built a multi-cloud CDN origin shield architecture on AWS Elemental MediaLive and Azure Media Services delivering 4K live streaming to 12 Million concurrent viewers.",
        points: [
          "12M+ concurrent live streaming viewers supported",
          "Sub-3 second global video glass-to-glass latency",
          "Automated origin shield failover between clouds"
        ],
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Media broadcasting engineers operating cloud video distribution console",
      },
      {
        id: "05",
        tag: "Multi-Tenant Cloud Workspace Data Isolation",
        titleBold: "Multi-Tenant Cloud Workspace",
        titleCursive: "Data Isolation.",
        description: "Designed logical multi-tenant database isolation policies on AWS RDS PostgreSQL enabling enterprise B2B SaaS clients to maintain dedicated encryption boundaries.",
        points: [
          "Complete per-tenant data encryption isolation",
          "Automated tenant database provisioning in 30 seconds",
          "SOC2 Type II certified tenant boundary audit trails"
        ],
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "B2B SaaS engineering team collaborating in modern office space",
      },
    ],
    featuresBadge: "ENTERPRISE PLATFORM FEATURES",
    featuresTitleBold: "All the cloud features.",
    featuresTitleCursive: "And more.",
    featuresSubtitle: "Built for mission-critical enterprise scale, maximum uptime, and linear performance.",
    features: [
      {
        title: "Multi-Cloud Hardware Isolation.",
        description: "Dedicated VPC & VNet enclaves with KMS hardware key encryption.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Cloud hardware security lock console",
      },
      {
        title: "Spot Fleet Auto-Cost Optimizer.",
        description: "Automated cost reduction with zero-impact spot instance failover.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Cloud cost optimization console",
      },
      {
        title: "Sub-5ms Global Edge Routing.",
        description: "Ultra-fast edge routing across 300+ worldwide CDN points.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Global edge compute routing network",
      },
      {
        title: "Active-Active Multi-Master Sync.",
        description: "99.999% SLA database availability with zero-latency replication.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Multi-master database synchronization hardware",
      },
    ],
  },

  "kubernetes-docker": {
    slug: "kubernetes-docker",
    title: "Kubernetes & Docker",
    badge: "Kubernetes & Docker",
    headingBold: "Orchestrate Microservices",
    headingCursive: "With Elastic Scale.",
    description: "Deploy, manage, and scale containerized applications on managed Kubernetes (EKS / AKS / GKE) with automated rollouts, service mesh, and self-healing pods.",
    ctaText: "Explore Mesh",
    stats: [
      { value: "10,000+", label: "Concurrent Pods Orchestrated" },
      { value: "0ms", label: "Downtime Canary Rollouts" },
      { value: "60%", label: "Container Density Boost" },
    ],
    heroCards: [
      {
        title: "Kubernetes Master Node & Pods Cluster",
        tag: "Orchestration",
        badgeColor: "bg-cyan-100 text-cyan-800 border-cyan-200",
        description: "Live cluster topology dashboard visualizing pod auto-scaling, CPU throttle limits, and node memory distribution.",
        image: "/images/k8s-docker-hero.jpg",
        imageAlt: "3D isometric Kubernetes container cluster and Docker pods microservices platform",
      },
      {
        title: "Cloud Network Infrastructure",
        tag: "Network Traffic",
        badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-200",
        description: "Real-time microservices communication map with automated mTLS encryption, rate limiting, and circuit breaking.",
        image: "/images/cloud-hero-1.png",
        imageAlt: "Cloud network infrastructure and database servers 3D illustration",
      },
      {
        title: "Data Center & Container Nodes",
        tag: "Container Security",
        badgeColor: "bg-amber-100 text-amber-800 border-amber-200",
        description: "Continuous automated scanning for container base layer vulnerabilities with automated PR patch triggers.",
        image: "/images/cloud-hero-3.png",
        imageAlt: "Data center, file hosting, and cloud computing architecture 3D illustration",
      },
    ],
    sectionBadge: "CONTAINER PLATFORM INSIGHTS",
    sectionTitleBold: "Cloud-Native Container",
    sectionTitleCursive: "Orchestration & Scale.",
    sectionSubtitle: "Build self-healing Kubernetes ecosystems with automated canary rollouts and zero-trust service mesh security.",
    topics: [
      {
        id: "01",
        title: "K8s Master Control Plane & Node Topology",
        summary: "Managing high-density pod deployments across elastic node pools.",
        description: "Optimize cluster scheduler performance and pod placement rules using custom node taints, tolerations, and pod anti-affinity settings.",
        points: [
          "Elastic node autoscaling with Karpenter & Cluster Autoscaler",
          "Resource quota enforcement & memory limit profiling",
          "Multi-tenant namespace isolation"
        ],
        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Real life DevOps engineer managing Kubernetes container cluster",
      },
      {
        id: "02",
        title: "Istio Service Mesh & mTLS Encryption",
        summary: "Zero-trust inter-pod security with microsecond network sidecar proxies.",
        description: "Enforce strict mutual TLS encryption between microservices while collecting real-time latency metrics and circuit-breaker telemetry.",
        points: [
          "Automatic inter-service mTLS key rotation",
          "Fine-grained traffic splitting & canary routing",
          "Distributed tracing with Jaeger & Prometheus"
        ],
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Real life network engineer monitoring container traffic mesh",
      },
      {
        id: "03",
        title: "Automated Pod Autoscaling (HPA & KEDA)",
        summary: "Event-driven container scaling based on RabbitMQ and Kafka queue metrics.",
        description: "Scale Kubernetes deployments dynamically from zero to thousands of worker pods based on real-time message queue backlogs.",
        points: [
          "Scale-to-zero queue consumer workers",
          "CPU and memory threshold autoscaling",
          "Sub-second container initialization"
        ],
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Real life high-speed computing server hardware",
      },
      {
        id: "04",
        title: "Container Image Security & Trivy Scans",
        summary: "Shift-left container layer scanning in Docker build pipelines.",
        description: "Prevent vulnerable packages from reaching production registries by injecting automated CVE scan gates into container build steps.",
        points: [
          "Automated base image layer CVE scanning",
          "Cryptographic image signing with Cosign",
          "Runtime container security with Falco"
        ],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Real life cyber security hardware workstation",
      },
    ],
    useCasesBadge: "CONTAINER USE CASES",
    useCasesTitleBold: "Production Kubernetes",
    useCasesTitleCursive: "Microservice Ecosystems.",
    useCasesSubtitle: "Explore how cloud-native container orchestration drives zero-downtime deployments and rapid scaling.",
    useCases: [
      {
        id: "01",
        tag: "High-Throughput Payment Processing Kubernetes Cluster",
        titleBold: "High-Throughput Payment Processing",
        titleCursive: "Kubernetes Cluster.",
        description: "Migrated legacy monolithic payment APIs to a 400-node Amazon EKS cluster running 2,500+ microservice pods handling $2B+ annual transaction volume.",
        points: [
          "2,500+ containerized microservice pods orchestrated",
          "0ms downtime canary deployments via Istio",
          "64% reduction in server compute memory footprint"
        ],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Fintech engineering team monitoring Kubernetes payment pods",
      },
      {
        id: "02",
        tag: "Distributed GPU Model Training Container Fleet",
        titleBold: "Distributed GPU Model Training",
        titleCursive: "Container Fleet.",
        description: "Orchestrated Kubeflow GPU training jobs on Google Kubernetes Engine (GKE) with automated spot node preemptible scaling for deep learning inference.",
        points: [
          "70% lower GPU training infrastructure costs",
          "Automated pod rescheduling on preemptible nodes",
          "Zero-loss training checkpoint persistence"
        ],
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "AI research engineers monitoring GPU training cluster",
      },
      {
        id: "03",
        tag: "Global Fleet Telemetry Event Ingestion Engine",
        titleBold: "Global Fleet Telemetry Event",
        titleCursive: "Ingestion Engine.",
        description: "Scaled Kafka event streaming consumers on managed Azure Kubernetes Service (AKS) processing 50,000 sensor updates per second from global delivery trucks.",
        points: [
          "50k real-time IoT events processed per second",
          "KEDA queue-based autoscaling from 10 to 500 pods",
          "Sub-10ms fleet tracking telemetry latency"
        ],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Logistics control room operators tracking delivery vehicle fleet",
      },
      {
        id: "04",
        tag: "Real-Time Multiplayer Game Server Pod Orchestrator",
        titleBold: "Real-Time Multiplayer Game Server",
        titleCursive: "Pod Orchestrator.",
        description: "Deployed Agones game server orchestration on bare-metal Kubernetes clusters, automatically spinning up dedicated game match instances in under 800ms.",
        points: [
          "Sub-800ms dedicated game server pod provisioning",
          "Zero match disconnects during node maintenance",
          "Dynamic regional matchmaker pod routing"
        ],
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Esports technology team monitoring live gaming server nodes",
      },
      {
        id: "05",
        tag: "5G Network Function Virtualization K8s Mesh",
        titleBold: "5G Network Function Virtualization",
        titleCursive: "K8s Mesh.",
        description: "Built edge Kubernetes node clusters across 80 regional data centers to support low-latency 5G network slicing and real-time subscriber session handling.",
        points: [
          "Sub-3ms network edge processing latency",
          "80 regional edge data center K8s deployments",
          "Carrier-grade 99.999% system availability"
        ],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Telecom network operations center monitoring 5G edge nodes",
      },
    ],
    featuresBadge: "CONTAINER ECOSYSTEM FEATURES",
    featuresTitleBold: "All the container tools.",
    featuresTitleCursive: "And more.",
    featuresSubtitle: "Designed for high pod density, automated canary rollouts, and zero-downtime releases.",
    features: [
      {
        title: "High-Density Pod Scheduler.",
        description: "Optimized placement rules with custom node taints & tolerations.",
        image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Kubernetes pod scheduler dashboard",
      },
      {
        title: "Istio Service Mesh mTLS.",
        description: "Zero-trust sidecar proxies with sub-millisecond inter-pod latency.",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Istio service mesh telemetry graph",
      },
      {
        title: "KEDA Event Autoscaler.",
        description: "Scale-to-zero container workers driven by Kafka & RabbitMQ queues.",
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop",
        imageAlt: "KEDA autoscaling event metrics console",
      },
      {
        title: "Shift-Left Vulnerability Scan.",
        description: "Automated Trivy & Falco CVE layer scanning in Docker CI/CD.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Container security vulnerability scanner console",
      },
    ],
  },

  "cicd-pipeline-automation": {
    slug: "cicd-pipeline-automation",
    title: "CI/CD Pipeline Automation",
    badge: "CI/CD Pipeline Automation",
    headingBold: "Automate Releases",
    headingCursive: "From Commit To Production.",
    description: "Streamline code delivery with lightning-fast GitOps pipelines, automated integration testing, dynamic preview environments, and instant rollback controls.",
    ctaText: "Build Pipelines",
    stats: [
      { value: "15 min", label: "Average Commit-to-Prod Time" },
      { value: "99.8%", label: "Successful Deployment Rate" },
      { value: "Zero", label: "Manual Release Interventions" },
    ],
    heroCards: [
      {
        title: "GitOps Continuous Integration Workflow",
        tag: "Pipeline Graph",
        badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
        description: "Visual pipeline DAG running parallel linting, unit testing, security auditing, and staging deployment.",
        image: "/images/cicd-pipeline-hero.jpg",
        imageAlt: "3D isometric CI/CD automation flow from Git commit to production release",
      },
      {
        title: "Ephemeral Staging & File Hosting",
        tag: "Ephemeral Staging",
        badgeColor: "bg-violet-100 text-violet-800 border-violet-200",
        description: "Spin up isolated preview environments automatically for every pull request with pre-seeded test data.",
        image: "/images/cloud-hero-2.png",
        imageAlt: "Cloud services data sync and cloud notebook 3D illustration",
      },
      {
        title: "Cloud Network Release Monitor",
        tag: "Progressive Delivery",
        badgeColor: "bg-rose-100 text-rose-800 border-rose-200",
        description: "Gradually shift production traffic with automated metric analysis and instant zero-impact rollbacks.",
        image: "/images/cloud-hero-1.png",
        imageAlt: "Cloud network infrastructure and database servers 3D illustration",
      },
    ],
    sectionBadge: "CONTINUOUS DELIVERY INSIGHTS",
    sectionTitleBold: "Automated Release Pipeline",
    sectionTitleCursive: "Architecture & Controls.",
    sectionSubtitle: "Deliver code to production 10x faster with declarative GitOps pipelines and automated canary validation.",
    topics: [
      {
        id: "01",
        title: "GitOps Release Delivery & ArgoCD Sync",
        summary: "Declarative infrastructure deployment directly from GitHub commits.",
        description: "Automate Kubernetes manifest sync and cluster state reconciliation using Git as the single source of truth for production applications.",
        points: [
          "Zero manual production cluster intervention",
          "Automated Git commit audit trail & history",
          "Instant one-click rollback to prior releases"
        ],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Real life software engineering team reviewing deployment pipeline",
      },
      {
        id: "02",
        title: "Ephemeral PR Staging Environments",
        summary: "Instant on-demand test URLs generated automatically for code reviews.",
        description: "Provision isolated ephemeral Kubernetes namespaces for every open pull request with synthetic database seeds and automated teardown.",
        points: [
          "Dynamic preview URLs for every pull request",
          "Isolated test database sandbox environments",
          "Automatic resource teardown on PR merge"
        ],
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Real life web developer testing staging environment",
      },
      {
        id: "03",
        title: "Canary Releases & Zero-Downtime Rollbacks",
        summary: "Progressive traffic shifting with real-time Prometheus error rate checks.",
        description: "Safely route 5% of user traffic to new software versions and automatically rollback if API error rates trip safety metrics.",
        points: [
          "Automated metric analysis during release rollouts",
          "Zero customer impact during failed deployments",
          "Progressive traffic scaling from 5% to 100%"
        ],
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Real life data analytics engineer inspecting deployment dashboards",
      },
      {
        id: "04",
        title: "Parallel Test Suite Optimization",
        summary: "Cutting CI build times from 45 minutes down to 3 minutes.",
        description: "Leverage intelligent test splitters, matrix builds, and persistent dependency caches to run thousands of end-to-end integration tests concurrently.",
        points: [
          "Intelligent parallel test runner distribution",
          "Persistent docker layer & build artifact caching",
          "Flaky test detection and automated isolation"
        ],
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Real life software developer coding automated tests",
      },
    ],
    useCasesBadge: "DEVOPS USE CASES",
    useCasesTitleBold: "High-Frequency Delivery",
    useCasesTitleCursive: "Pipelines & Automation.",
    useCasesSubtitle: "Discover how continuous delivery pipelines empower engineering teams to deploy software rapidly and safely.",
    useCases: [
      {
        id: "01",
        tag: "100+ Daily Production Deploys GitOps Workflow",
        titleBold: "100+ Daily Production Deploys",
        titleCursive: "GitOps Workflow.",
        description: "Implemented automated ArgoCD and GitHub Actions pipelines that enabled 120+ software engineers to ship over 100 verified production releases daily.",
        points: [
          "100+ automated daily production deployments",
          "Commit-to-production deployment time under 12 minutes",
          "Zero failed releases reaching end-users"
        ],
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "DevOps engineering team celebrating successful software release",
      },
      {
        id: "02",
        tag: "Automated iOS & Android App Build Pipeline",
        titleBold: "Automated iOS & Android App",
        titleCursive: "Build Pipeline.",
        description: "Configured Fastlane and GitHub Actions CI runners for automated signing, unit testing, TestFlight distribution, and Google Play Store releases.",
        points: [
          "Automated iOS and Android app bundle builds",
          "100% automated TestFlight & Beta deployment",
          "Zero manual mobile app release bottleneck"
        ],
        image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Mobile engineers testing app builds on physical smartphones",
      },
      {
        id: "03",
        tag: "Shift-Left DevSecOps Code Scanner Pipeline",
        titleBold: "Shift-Left DevSecOps Code",
        titleCursive: "Scanner Pipeline.",
        description: "Integrated Snyk, SonarQube, and Trivy static code analysis into CI pull request gates, blocking security vulnerabilities before code merges.",
        points: [
          "Automated SAST & DAST vulnerability gating",
          "Zero critical CVEs reaching master branch",
          "Automated PR dependency security patches"
        ],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "DevSecOps engineer auditing security code scan reports",
      },
      {
        id: "04",
        tag: "Terraform & Pulumi Automated Cloud Provisioning",
        titleBold: "Terraform & Pulumi Automated",
        titleCursive: "Cloud Provisioning.",
        description: "Automated cloud infrastructure changes using Atlantis and Terraform Cloud, providing pull request preview plans and automated approval workflows.",
        points: [
          "PR-driven infrastructure as code deployments",
          "Automated Terraform drift detection & remediation",
          "Complete audit history of cloud state changes"
        ],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Cloud architects reviewing Terraform infrastructure code plans",
      },
      {
        id: "05",
        tag: "Zero-Downtime Database Schema Release Pipeline",
        titleBold: "Zero-Downtime Database Schema",
        titleCursive: "Release Pipeline.",
        description: "Implemented automated Liquibase database migrations combined with expand-contract schema changes for seamless zero-downtime production DB updates.",
        points: [
          "Zero downtime DB schema migrations",
          "Automated rollback script verification",
          "Sub-second lock duration during migration steps"
        ],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Database administrator monitoring automated schema migration pipeline",
      },
    ],
    featuresBadge: "DEVOPS PIPELINE FEATURES",
    featuresTitleBold: "All the release features.",
    featuresTitleCursive: "And more.",
    featuresSubtitle: "Streamline code delivery with declarative GitOps pipelines, ephemeral staging, and automated rollbacks.",
    features: [
      {
        title: "ArgoCD Declarative GitOps.",
        description: "Continuous manifest sync with single source of truth in Git.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
        imageAlt: "ArgoCD GitOps pipeline sync dashboard",
      },
      {
        title: "Ephemeral PR Staging URLs.",
        description: "On-demand isolated preview environments generated per pull request.",
        image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Ephemeral staging environment preview console",
      },
      {
        title: "Prometheus Canary Validation.",
        description: "Progressive traffic shifting with sub-second error rate rollbacks.",
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Prometheus canary metrics telemetry dashboard",
      },
      {
        title: "Parallel Test Matrix Runner.",
        description: "Cut CI build times by 90% using parallel container runners.",
        image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Parallel test suite execution matrix",
      },
    ],
  },

  "serverless-architecture": {
    slug: "serverless-architecture",
    title: "Serverless Architecture",
    badge: "Serverless Architecture",
    headingBold: "Scale Resilient Cloud",
    headingCursive: "Infrastructure & Security.",
    description: "Architect high-availability multi-cloud environments across AWS and Azure with zero-downtime failover, compliance guardrails, and enterprise resource governance.",
    ctaText: "Get Cloud Audit",
    stats: [
      { value: "99.99%", label: "Uptime SLA Guarantee" },
      { value: "45%", label: "Average Cloud Bill Savings" },
      { value: "< 5ms", label: "Global Edge Latency" },
    ],
    heroCards: [
      {
        title: "Multi-Region Cloud Topology",
        tag: "Infrastructure",
        badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
        description: "Active-active multi-region load balancing with real-time health telemetry across AWS US-East and Azure West Europe.",
        image: "/images/aws-azure-hero.jpg",
        imageAlt: "3D isometric AWS and Azure multi-cloud network infrastructure architecture",
      },
      {
        title: "Cloud Services Sync & Data Flow",
        tag: "FinOps Console",
        badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200",
        description: "Cloud database synchronization, automated backup pipelines, and live resource monitoring.",
        image: "/images/cloud-hero-2.png",
        imageAlt: "Cloud services data sync and cloud notebook 3D illustration",
      },
      {
        title: "Zero-Trust Identity & Data Center",
        tag: "Security Guardrails",
        badgeColor: "bg-purple-100 text-purple-800 border-purple-200",
        description: "Automated SOC2 & HIPAA policy enforcement with unified IAM role synchronization across enterprise accounts.",
        image: "/images/cloud-hero-3.png",
        imageAlt: "Data center, file hosting, and cloud computing architecture 3D illustration",
      },
    ],
    sectionBadge: "CLOUD ARCHITECTURE INSIGHTS",
    sectionTitleBold: "Enterprise Multi-Cloud",
    sectionTitleCursive: "Architecture Capabilities.",
    sectionSubtitle: "Discover how enterprise teams deploy multi-cloud infrastructure to achieve 99.99% uptime and linear scale.",
    topics: [
      {
        id: "01",
        title: "Multi-Region AWS & Azure VPC Interconnect",
        summary: "Architecting zero-latency private cloud peering across hybrid cloud regions.",
        description: "Establish dedicated ExpressRoute and DirectConnect tunnels for secure high-bandwidth data transfers between AWS VPC and Azure VNet environments.",
        points: [
          "Cross-cloud active-active load balancing",
          "Automated sub-5ms failover routing",
          "Encrypted IPSec & MACsec hardware tunnels"
        ],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Real life cloud engineers monitoring multi-region server infrastructure",
      },
      {
        id: "02",
        title: "Automated FinOps & Bill Optimization",
        summary: "Eliminating idle compute overhead with automated spot instance scaling.",
        description: "Deploy automated cloud cost governance policies that shut down non-production workloads during off-peak hours and auto-convert EC2 instances to spot pools.",
        points: [
          "AI-driven reserved instance recommendations",
          "Automated idle container resource termination",
          "Real-time cost telemetry & Slack alerts"
        ],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Real life cloud financial analytics dashboard workstation",
      },
      {
        id: "03",
        title: "Zero-Trust IAM & Security Guardrails",
        summary: "Enforcing unified permission boundaries across enterprise cloud accounts.",
        description: "Implement principle of least privilege access with temporary STS token credentials and real-time AWS CloudTrail security telemetry.",
        points: [
          "Automated SOC2 & HIPAA policy compliance",
          "Unified IAM role synchronization across accounts",
          "Real-time security vulnerability detection"
        ],
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Real life cyber security specialist auditing cloud network access",
      },
      {
        id: "04",
        title: "Disaster Recovery & Multi-Master DB Sync",
        summary: "Sub-second database failover with active-active Aurora Global Clusters.",
        description: "Achieve near-zero RPO and RTO for mission-critical databases with automated failover routing across multi-region cloud availability zones.",
        points: [
          "Sub-second RPO & RTO multi-region database failover",
          "Active-active global database cluster synchronization",
          "Automated point-in-time snapshot recovery"
        ],
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Real life datacenter hardware technician inspecting high-speed servers",
      },
    ],
    useCasesBadge: "ENTERPRISE USE CASES",
    useCasesTitleBold: "Real-World Multi-Cloud",
    useCasesTitleCursive: "Deployments & Solutions.",
    useCasesSubtitle: "See how global organizations leverage AWS & Azure multi-cloud architecture to scale mission-critical workloads.",
    useCases: [
      {
        id: "01",
        tag: "Global Banking Multi-Cloud Failover Engine",
        titleBold: "Global Banking Multi-Cloud",
        titleCursive: "Failover Engine.",
        description: "Architected a dual-region active-active VPC peering model between AWS US-East and Azure East US with sub-10ms transaction synchronization for 50M+ mobile banking users.",
        points: [
          "99.999% high-availability SLA uptime achieved",
          "Automated SOC2 & PCI-DSS compliance auditing",
          "Sub-millisecond global Aurora database replication"
        ],
        image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Financial technology analytics team monitoring global bank transactions",
      },
      {
        id: "02",
        tag: "HIPAA Compliant Cloud Data Vault Architecture",
        titleBold: "HIPAA Compliant Cloud Data",
        titleCursive: "Vault Architecture.",
        description: "Engineered isolated private cloud enclaves across AWS S3 and Azure Blob with hardware KMS encryption keys to store over 200 Million patient medical imaging records securely.",
        points: [
          "100% HIPAA and HITRUST certified data vaults",
          "Customer-managed AWS KMS encryption keys",
          "Zero data leak incidents across 5+ years"
        ],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Healthcare professionals reviewing cloud medical diagnostic software",
      },
      {
        id: "03",
        tag: "Black Friday Elastic Auto-Scaling Infrastructure",
        titleBold: "Black Friday Elastic Auto-Scaling",
        titleCursive: "Network Infrastructure.",
        description: "Deployed automated spot fleet scaling and CloudFront edge caching that effortlessly absorbed over 4.8 Million peak requests per minute with zero downtime.",
        points: [
          "4.8M peak requests/min absorbed seamlessly",
          "52% cloud infrastructure cost savings via Spot Fleets",
          "Sub-15ms edge page response time worldwide"
        ],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "E-commerce analytics dashboard during peak flash sale event",
      },
      {
        id: "04",
        tag: "Ultra-Low Latency Video CDN Routing Mesh",
        titleBold: "Ultra-Low Latency Video",
        titleCursive: "CDN Routing Mesh.",
        description: "Built a multi-cloud CDN origin shield architecture on AWS Elemental MediaLive and Azure Media Services delivering 4K live streaming to 12 Million concurrent viewers.",
        points: [
          "12M+ concurrent live streaming viewers supported",
          "Sub-3 second global video glass-to-glass latency",
          "Automated origin shield failover between clouds"
        ],
        image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "Media broadcasting engineers operating cloud video distribution console",
      },
      {
        id: "05",
        tag: "Multi-Tenant Cloud Workspace Data Isolation",
        titleBold: "Multi-Tenant Cloud Workspace",
        titleCursive: "Data Isolation.",
        description: "Designed logical multi-tenant database isolation policies on AWS RDS PostgreSQL enabling enterprise B2B SaaS clients to maintain dedicated encryption boundaries.",
        points: [
          "Complete per-tenant data encryption isolation",
          "Automated tenant database provisioning in 30 seconds",
          "SOC2 Type II certified tenant boundary audit trails"
        ],
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
        imageAlt: "B2B SaaS engineering team collaborating in modern office space",
      },
    ],
    featuresBadge: "ENTERPRISE PLATFORM FEATURES",
    featuresTitleBold: "All the cloud features.",
    featuresTitleCursive: "And more.",
    featuresSubtitle: "Built for mission-critical enterprise scale, maximum uptime, and linear performance.",
    features: [
      {
        title: "Multi-Cloud Hardware Isolation.",
        description: "Dedicated VPC & VNet enclaves with KMS hardware key encryption.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Cloud hardware security lock console",
      },
      {
        title: "Spot Fleet Auto-Cost Optimizer.",
        description: "Automated cost reduction with zero-impact spot instance failover.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Cloud cost optimization console",
      },
      {
        title: "Sub-5ms Global Edge Routing.",
        description: "Ultra-fast edge routing across 300+ worldwide CDN points.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Global edge compute routing network",
      },
      {
        title: "Active-Active Multi-Master Sync.",
        description: "99.999% SLA database availability with zero-latency replication.",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
        imageAlt: "Multi-master database synchronization hardware",
      },
    ],
  },
};

