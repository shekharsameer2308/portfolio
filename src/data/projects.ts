import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "analyzer",
    num: "01",
    title: "Analyzer",
    subtitle: "Coal Quality Analytics & Blending Optimization Platform",
    tagline: "Industrial ML & analytics engine for coal quality assessment, anomaly detection, GCV prediction, and blending optimization.",
    category: "Industrial Analytics / ML",
    description: "An end-to-end industrial intelligence platform designed around coal quality assessment, non-linear Gross Calorific Value (GCV) prediction, anomaly detection across volatile/ash ratios, and linear programming blending optimization for thermal power plants.",
    featured: true,
    prominent: true,
    status: "operational",
    pipelineFlow: ["DATA", "VALIDATION", "MODEL", "OPTIMIZATION", "DECISION"],
    technologies: ["React / Next.js", "FastAPI", "XGBoost", "Scikit-Learn", "DuckDB / SQLite", "SciPy Optimize", "Tailwind CSS"],
    systemTags: ["Industrial Analytics", "Linear Programming", "GCV Modeling", "Anomaly Detection", "Production Deployment"],
    githubUrl: "https://github.com/shekharsameer2308/analyzer",
    liveUrl: "https://analyzer-self.vercel.app",
    caseStudy: {
      problem: "Thermal power utilities and steel plants process heterogeneous coal seams with wild variations in proximate parameters (moisture, ash, volatile matter, fixed carbon). Miscalculations in blending cause thermal inefficiencies, slagging, and contractual penalty fees.",
      context: "During proximate analysis at industrial scale, manual blending calculations fail to optimize cost curves while satisfying strict sulfur, ash (<34%), and gross calorific thresholds. Non-linear degradation cannot be captured by basic empirical lookup tables.",
      approach: "Built a domain-specific analytical platform combining statistical validation, ML-based GCV regression (XGBoost + Random Forest ensemble), multivariate isolation-forest anomaly detection, and a Simplex-based constrained blending optimization solver.",
      architecture: {
        title: "Coal Quality Analytics Pipeline",
        description: "From raw proximate laboratory feeds to real-time blending formulations and prediction APIs.",
        nodes: [
          { id: "raw", label: "Lab Proximate Feeds", sublabel: "Moisture, Ash, VM, FC, GCV", type: "source" },
          { id: "clean", label: "Validation & Imputation", sublabel: "ASTM D3172-13 Standards", type: "processing" },
          { id: "db", label: "Analytical Data Layer", sublabel: "DuckDB / SQLite Schemas", type: "storage" },
          { id: "models", label: "ML Regression & Isolation", sublabel: "XGBoost GCV + IsoForest", type: "model" },
          { id: "opt", label: "Blending Optimizer", sublabel: "SciPy Constrained Simplex", type: "decision" },
          { id: "api", label: "FastAPI REST Engine", sublabel: "JSON Schemas & Calculation", type: "api" },
          { id: "ui", label: "Interactive Analytics Dashboard", sublabel: "React / Vercel Edge", type: "ui" }
        ],
        asciiDiagram: `┌────────────────────────────────┐
│   PROXIMATE LAB SAMPLE FEEDS   │
│ (Moisture, Ash, Volatile, FC)  │
└───────────────┬────────────────┘
                │
                ▼
┌────────────────────────────────┐
│     VALIDATION & PARSING       │
│  (ASTM D3172-13 Constraints)   │
└───────────────┬────────────────┘
                │
        ┌───────┴────────┐
        ▼                ▼
┌──────────────┐  ┌──────────────┐
│   XGBOOST    │  │  ISOLATION   │
│GCV PREDICTOR │  │FOREST ANOMALY│
└───────┬──────┘  └──────┬───────┘
        │                │
        └───────┬────────┘
                ▼
┌────────────────────────────────┐
│   CONSTRAINED BLENDING SOLVER  │
│  (Cost Min. s.t. Quality Specs)│
└───────────────┬────────────────┘
                │
                ▼
┌────────────────────────────────┐
│      FASTAPI ENGINE & UI       │
│   (Real-time Visual Console)   │
└────────────────────────────────┘`
      },
      engineeringDecisions: [
        {
          title: "XGBoost & Random Forest over Deep Neural Nets",
          decision: "Chose gradient-boosted decision trees over multi-layer perceptrons for GCV prediction.",
          tradeoffs: "Tabular proximate datasets have physical collinearity between volatile matter and fixed carbon. Tree ensembles preserve monotonic splits, prevent catastrophic overfitting on small batch runs, and provide direct SHAP feature importance."
        },
        {
          title: "DuckDB In-Process Query Engine",
          decision: "Leveraged DuckDB for local aggregations and fast analytical cohort querying.",
          tradeoffs: "Avoided the latency and operational overhead of a heavy external database for batch laboratory workloads while gaining vectorized execution speeds for time-trend statistics."
        },
        {
          title: "Linear Constrained Optimization for Feedstock Blending",
          decision: "Implemented SciPy's bounded linear programming for multi-source coal lot mixing.",
          tradeoffs: "Allows plant engineers to define exact hard boundaries (e.g. Total Ash <= 28%, Total Moisture <= 12%) while minimizing price per metric ton across 5+ source mines."
        }
      ],
      keyFeatures: [
        "Proximate & Ultimate Analysis correlation mapping (Moisture, Ash, Volatile Matter, Fixed Carbon)",
        "Trained XGBoost predictive model for Gross Calorific Value (GCV) calculation",
        "Multivariate anomaly detection flagging adulterated or out-of-specification coal consignments",
        "Constrained feedstock blending simulator with cost-minimization objective functions",
        "Dynamic radar charts & parameter correlation matrices for grade classification (G1 to G17)",
        "Exportable PDF/CSV compliance and consignment test reports"
      ],
      verifiedCapabilities: [
        "Interactive real-time prediction engine deployed live on Vercel and cloud backends",
        "Deterministic linear programming blending solver with multi-variable constraints",
        "Validated against standard proximate industrial measurement ranges"
      ],
      lessonsLearned: [
        "Physical laws must constrain statistical ML models: unconstrained regressors can predict negative moisture or impossibly high calorific values without bounded loss penalties.",
        "Industrial operators value interpretability (feature importance and boundary visualization) over opaque black-box neural networks."
      ],
      stack: [
        { category: "Frontend & UI", items: ["React", "Next.js", "Tailwind CSS", "Recharts", "Lucide Icons"] },
        { category: "Backend & API", items: ["FastAPI", "Uvicorn", "Pydantic"] },
        { category: "Data & ML", items: ["XGBoost", "Scikit-Learn", "SciPy Optimize", "DuckDB", "Pandas", "NumPy"] },
        { category: "Deployment", items: ["Vercel Edge", "Docker", "Render"] }
      ]
    }
  },
  {
    id: "nexus",
    num: "02",
    title: "NEXUS",
    subtitle: "Real-Time E-Commerce Analytics Platform",
    tagline: "High-throughput event streaming & analytical architecture with Kafka, PostgreSQL Star Schema, WebSockets, and ML anomaly detection.",
    category: "Real-Time Systems / Data Eng",
    description: "A distributed streaming and analytical data platform engineered for high-velocity event pipelines, real-time transaction processing, star-schema relational data warehousing, predictive demand forecasting, and Prometheus/Grafana observability.",
    featured: true,
    prominent: true,
    status: "operational",
    pipelineFlow: ["EVENTS", "KAFKA", "PROCESSING", "WAREHOUSE", "ANALYTICS"],
    technologies: ["Apache Kafka", "PostgreSQL", "FastAPI", "WebSockets", "Docker", "Prometheus", "Grafana", "Prophet", "Scikit-Learn"],
    systemTags: ["Event Streaming", "Kafka", "Star Schema", "Time-Series Forecasting", "Prometheus/Grafana", "WebSockets"],
    githubUrl: "https://github.com/shekharsameer2308/nexus",
    caseStudy: {
      problem: "Traditional batch analytics systems suffer from multi-hour latency, leaving operations teams blind to sudden traffic surges, inventory stockouts, and payment fraud anomalies.",
      context: "Modern commerce architectures require sub-second event ingestion, partitioned distributed logs, dimensional warehouse modeling, and real-time dashboard propagation without overwhelming transactional backends.",
      approach: "Engineered an end-to-end data platform utilizing Apache Kafka for event pub/sub, custom stream workers for cleansing and dimensional mapping into a PostgreSQL star schema, background ML workers for time-series forecasting, and WebSocket streaming to a live cockpit.",
      architecture: {
        title: "NEXUS Distributed Streaming & Analytics Architecture",
        description: "Event producers to Kafka broker clusters, dimensional sink pipelines, real-time analytics workers, and telemetry monitoring.",
        nodes: [
          { id: "producers", label: "Event Ingestion Generators", sublabel: "Orders, Pageviews, Cart Ops", type: "source" },
          { id: "kafka", label: "Apache Kafka Brokers", sublabel: "Partitioned Event Topics", type: "stream" },
          { id: "consumer", label: "Stream Consumer Workers", sublabel: "Transformation & Validation", type: "processing" },
          { id: "postgres", label: "PostgreSQL Data Warehouse", sublabel: "Star Schema (Facts/Dims)", type: "storage" },
          { id: "ml", label: "Forecast & Anomaly Engine", sublabel: "Prophet + Isolation Forest", type: "model" },
          { id: "fastapi", label: "FastAPI Streaming Hub", sublabel: "REST + WebSocket Broadcaster", type: "api" },
          { id: "dashboard", label: "Live Telemetry Cockpit", sublabel: "Real-time React UI", type: "ui" },
          { id: "monitoring", label: "Prometheus & Grafana", sublabel: "System & Pipeline Metrics", type: "decision" }
        ],
        asciiDiagram: `┌──────────────────────┐
│   EVENT PRODUCERS    │ (Orders, Clicks, Checkouts)
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ APACHE KAFKA BROKER  │ (Partitioned Ingestion Topics)
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ STREAM WORKER ENGINE │ (Deserialization, Deduplication)
└──────────┬───────────┘
           │
     ┌─────┴───────────────────┐
     ▼                         ▼
┌──────────────┐        ┌──────────────┐
│  POSTGRESQL  │        │ FORECASTING  │
│ STAR SCHEMA  │        │ & ANOMALIES  │
└──────┬───────┘        └──────┬───────┘
       │                       │
       └───────────┬───────────┘
                   ▼
       ┌──────────────────────┐
       │ FASTAPI & WEBSOCKET  │
       └───────────┬──────────┘
                   │
         ┌─────────┴─────────┐
         ▼                   ▼
┌─────────────────┐ ┌─────────────────┐
│ REACT DASHBOARD │ │ PROMETHEUS/GRAF │
└─────────────────┘ └─────────────────┘`
      },
      engineeringDecisions: [
        {
          title: "Star Schema Dimensional Modeling",
          decision: "Modeled data with central Fact_Transactions table joined against Dim_Customer, Dim_Product, and Dim_Time.",
          tradeoffs: "Optimizes analytical read performance for complex window aggregates (rolling GMV, cohort retention) at the cost of minor write amplification in consumer workers."
        },
        {
          title: "Kafka Partitioning by Customer Key",
          decision: "Partitioned order topics by customer UUID hash.",
          tradeoffs: "Guarantees strict per-customer event ordering across distributed consumers while enabling linear horizontal scaling."
        },
        {
          title: "Decoupled WebSockets via PubSub",
          decision: "Employed FastAPI async WebSocket channels fed from event workers.",
          tradeoffs: "Eliminates polling overhead on client browsers and reduces database query load by 90% during peak traffic spikes."
        }
      ],
      keyFeatures: [
        "Distributed event ingestion pipeline with Apache Kafka pub/sub topics",
        "Relational star schema data warehouse with partitioned fact tables in PostgreSQL",
        "Live WebSocket broadcast transmitting real-time order streams and metrics",
        "Automated demand forecasting utilizing Prophet time-series models",
        "Real-time fraud and payment anomaly detection using multivariate isolation models",
        "System telemetry and pipeline throughput observability via Prometheus metrics and Grafana dashboards",
        "Fully containerized local and staging environment with Docker Compose orchestration"
      ],
      verifiedCapabilities: [
        "Complete multi-container Docker Compose topology (Kafka, Zookeeper, Postgres, FastAPI, React, Prometheus, Grafana)",
        "Live bi-directional WebSocket telemetry streaming",
        "Stateless FastAPI service layer with connection pooling"
      ],
      lessonsLearned: [
        "Backpressure management in stream consumers is critical: unthrottled database writes can quickly exhaust connection pools during sudden producer bursts.",
        "Strict event schema validation (using Pydantic models at the consumer boundary) prevents poisoned messages from crashing downstream workers."
      ],
      stack: [
        { category: "Streaming & Messaging", items: ["Apache Kafka", "Kafka-Python", "Zookeeper"] },
        { category: "Database & Storage", items: ["PostgreSQL", "SQLAlchemy", "Alembic"] },
        { category: "Backend & Streaming", items: ["FastAPI", "WebSockets", "Asyncio", "Uvicorn"] },
        { category: "ML & Analytics", items: ["Prophet", "Scikit-Learn", "Pandas", "NumPy"] },
        { category: "Observability & Infra", items: ["Docker", "Docker Compose", "Prometheus", "Grafana"] }
      ]
    }
  },
  {
    id: "scout",
    num: "03",
    title: "Scout",
    subtitle: "Market Intelligence & RAG Platform",
    tagline: "Autonomous market research platform combining RSS/News ingestion, FinBERT sentiment, BERTopic clustering, and vector search RAG.",
    category: "Market Intelligence / RAG",
    description: "A full-stack intelligence and competitive research system that monitors market movements, extracts unstructured insights from news feeds, executes financial NLP pipelines, and provides retrieval-augmented generative synthesis with citation tracking.",
    featured: true,
    prominent: true,
    status: "operational",
    pipelineFlow: ["SOURCES", "INGESTION", "EMBEDDING", "SEARCH", "RAG"],
    technologies: ["FastAPI", "Qdrant / FAISS", "Sentence-Transformers", "FinBERT", "BERTopic", "KeyBERT", "Google Gemini / LLMs", "Streamlit / React"],
    systemTags: ["Retrieval-Augmented Generation", "Vector Database", "FinBERT Sentiment", "Topic Modeling", "Semantic Search"],
    githubUrl: "https://github.com/shekharsameer2308/LLM-",
    caseStudy: {
      problem: "Market analysts spend hours manually filtering hundreds of unstructured financial articles, RSS feeds, and competitor press releases to identify strategic shifts, market sentiment, and emerging risks.",
      context: "Generic LLM chat interfaces suffer from hallucinations, lack domain-specific financial sentiment understanding, and cannot cite source articles with vector-grounded accuracy across temporal windows.",
      approach: "Built a multi-stage NLP and RAG intelligence system: an automated web/RSS ingestion engine cleans and indexes articles; specialized NLP models extract sentiment (FinBERT) and topics (BERTopic); dense vector embeddings are stored in Qdrant; and a retrieval-augmented LLM answers complex research queries with exact source citations.",
      architecture: {
        title: "Scout Ingestion, Vector Indexing & RAG Retrieval Flow",
        description: "From multi-source unstructured news ingestion to domain NLP processing, vector embedding, and grounded LLM synthesis.",
        nodes: [
          { id: "sources", label: "News Feeds & RSS Scraper", sublabel: "NewsAPI, Google RSS, Custom Feeds", type: "source" },
          { id: "cleaner", label: "Boilerplate Cleaner & Dedup", sublabel: "URL Hashing & Text Normalization", type: "processing" },
          { id: "nlp", label: "Domain NLP Services", sublabel: "FinBERT + KeyBERT + BERTopic", type: "model" },
          { id: "storage", label: "Relational Metadata Store", sublabel: "SQLite / PostgreSQL", type: "storage" },
          { id: "vector", label: "Vector Search Layer", sublabel: "Sentence-Transformers + Qdrant", type: "storage" },
          { id: "rag", label: "RAG Retrieval & Contextualizer", sublabel: "Hybrid Semantic + Metadata Filtering", type: "processing" },
          { id: "llm", label: "LLM Synthesizer", sublabel: "Google Gemini / Grounded Citations", type: "model" },
          { id: "ui", label: "Analyst Research Cockpit", sublabel: "Streamlit / React Dashboard", type: "ui" }
        ],
        asciiDiagram: `┌──────────────────────┐
│  NEWS & RSS SCRAPER  │ (Multi-source ingestion)
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│   TEXT NORMALIZER    │ (HTML stripping, deduping)
└──────────┬───────────┘
           │
     ┌─────┴───────────────────┐
     ▼                         ▼
┌──────────────┐        ┌──────────────┐
│  FINBERT &   │        │ EMBEDDING &  │
│   BERTOPIC   │        │ QDRANT STORE │
└──────┬───────┘        └──────┬───────┘
       │                       │
       └───────────┬───────────┘
                   ▼
       ┌──────────────────────┐
       │ HYBRID RAG RETRIEVER │ (Cosine sim + metadata filter)
       └───────────┬──────────┘
                   │
                   ▼
       ┌──────────────────────┐
       │ LLM SYNTHESIS & UI   │ (Grounded source citations)
       └──────────────────────┘`
      },
      engineeringDecisions: [
        {
          title: "FinBERT over General Sentiment Classifiers",
          decision: "Implemented prosusAI/finbert specialized on financial corpus.",
          tradeoffs: "Financial nomenclature treats words like 'liability', 'dilution', or 'drag' differently from everyday language. FinBERT avoids false positive sentiment swings."
        },
        {
          title: "Hybrid Metadata + Vector Filtering",
          decision: "Combined dense vector similarity in Qdrant with deterministic SQL metadata filters (company, date window, industry).",
          tradeoffs: "Prevents semantic drift where an LLM retrieves relevant keywords from three years ago when the analyst requested current quarter intelligence."
        },
        {
          title: "Chunk-Level Attribution & Verification",
          decision: "Strict source citation architecture passing exact paragraph hashes and published dates to the LLM prompt context.",
          tradeoffs: "Guarantees every bullet point in the generated intelligence brief links directly to an auditable source URL."
        }
      ],
      keyFeatures: [
        "Automated multi-source news pipeline with content deduplication and HTML cleaning",
        "Financial sentiment scoring using FinBERT with confidence distributions",
        "Unsupervised topic modeling and industry trend clustering using BERTopic and KeyBERT",
        "High-dimensional vector embedding indexing via Qdrant / FAISS",
        "Retrieval-Augmented Generation (RAG) assistant delivering synthesized summaries with direct citations",
        "Competitor SWOT intelligence matrix and keyword co-occurrence tracking",
        "Modular FastAPI backend with Streamlit/React interactive analytical interface"
      ],
      verifiedCapabilities: [
        "Full repository implementation with Alembic migrations, database models, and modular service layers",
        "Active vector indexing pipeline with custom chunking and cosine similarity retrieval",
        "Containerized Docker setup with support for both local development and cloud production deployment"
      ],
      lessonsLearned: [
        "Chunking strategy directly dictates RAG quality: small 300-token chunks with 50-token overlap outperform giant page chunks in retrieval precision.",
        "Deduplicating news articles by title semantic similarity is necessary to prevent single viral press releases from skewing topic models."
      ],
      stack: [
        { category: "AI & Vector Search", items: ["Qdrant", "FAISS", "Sentence-Transformers", "Google Gemini", "LangChain"] },
        { category: "NLP & Modeling", items: ["FinBERT", "BERTopic", "KeyBERT", "NLTK", "Hugging Face"] },
        { category: "Backend & Data", items: ["FastAPI", "SQLite / PostgreSQL", "SQLAlchemy", "Alembic", "Pydantic"] },
        { category: "Frontend & UI", items: ["Streamlit", "Plotly", "Tailwind-styled Components"] },
        { category: "Infrastructure", items: ["Docker", "Docker Compose", "Render / Vercel"] }
      ]
    }
  },
  {
    id: "trackfin",
    num: "04",
    title: "TrackFin",
    subtitle: "AI-Powered Personal Finance & Behavioral Analytics Platform",
    tagline: "Modern financial analytics SaaS with automated categorization heuristics, cashflow forecasting, and an integrated AI financial advisor.",
    category: "Product / Behavioral AI",
    description: "A personal finance intelligence engine engineered to transform raw, unstructured transaction streams into actionable financial health scores, burn rate predictions, and contextual spending recommendations.",
    featured: false,
    prominent: false,
    status: "operational",
    pipelineFlow: ["INPUT", "CATEGORIZE", "ANALYZE", "FORECAST"],
    technologies: ["Python / Flask", "JavaScript ES6+", "SQLAlchemy", "Chart.js", "JWT Auth", "Vercel Serverless"],
    systemTags: ["Behavioral Analytics", "Financial Modeling", "Auto-Categorization", "Serverless Python", "JWT Auth"],
    githubUrl: "https://github.com/shekharsameer2308/TrackFin",
    liveUrl: "https://track-fin-bay.vercel.app/",
    caseStudy: {
      problem: "Personal finance tools are often passive expense logs that fail to guide user behavior or forecast burn rates before budgets are exceeded.",
      context: "Users need immediate feedback on their discretionary vs. fixed spending ratios and actionable forecasting without tedious manual spreadsheet entries.",
      approach: "Designed a modular Flask and vanilla JavaScript application featuring auto-tagging keyword heuristics, dynamic financial health scoring algorithms (0-100), and an instant guest sandbox environment.",
      architecture: {
        title: "TrackFin Architecture & Serverless Pipeline",
        description: "Client transactions to serverless API blueprints, heuristic engines, and dynamic visualization.",
        nodes: [
          { id: "ui", label: "Minimalist SaaS UI", sublabel: "Vanilla JS + Chart.js + CSS Tokens", type: "ui" },
          { id: "gateway", label: "Vercel Edge Gateway", sublabel: "REST Routing + JWT Auth", type: "api" },
          { id: "heuristics", label: "Auto-Categorizer Engine", sublabel: "Keyword Extraction & Tagging", type: "processing" },
          { id: "analytics", label: "Behavioral Analytics Engine", sublabel: "Health Index & Burn Rate Solver", type: "decision" },
          { id: "db", label: "Relational Persistence", sublabel: "SQLAlchemy ORM + SQLite", type: "storage" }
        ],
        asciiDiagram: `┌────────────────────────────────┐
│   CLIENT UI (VANILLA JS / CSS) │
└───────────────┬────────────────┘
                │ REST / JWT
                ▼
┌────────────────────────────────┐
│     VERCEL SERVERLESS EDGE     │
└───────────────┬────────────────┘
                │
        ┌───────┴────────┐
        ▼                ▼
┌──────────────┐  ┌──────────────┐
│ SMART HEURIST│  │  BEHAVIORAL  │
│ AUTO-TAGGER  │  │ HEALTH SCORE │
└───────┬──────┘  └──────┬───────┘
        │                │
        └───────┬────────┘
                ▼
┌────────────────────────────────┐
│      SQLITE / SQLALCHEMY       │
└────────────────────────────────┘`
      },
      engineeringDecisions: [
        {
          title: "Modular Flask Blueprints",
          decision: "Separated Auth, Transactions, Analytics, and Goals into distinct blueprint modules.",
          tradeoffs: "Ensures clear separation of concerns, testability, and painless migration to microservices if needed."
        },
        {
          title: "Zero-Friction Guest Sandbox Provisioning",
          decision: "Built an ephemeral guest session provisioning workflow.",
          tradeoffs: "Allows reviewers and users to immediately test the platform without mandatory email registration while isolating test data."
        }
      ],
      keyFeatures: [
        "Smart transaction categorization engine utilizing keyword heuristics",
        "Subscription detection and automatic 30-day fixed burn rate calculation",
        "Algorithmic financial health score (0–100) based on savings and discretionary thresholds",
        "Interactive cashflow and budget utilization graphs powered by Chart.js",
        "Goal trajectory forecasting calculating required monthly savings velocity",
        "Stateless JWT-based session security and instant guest sandbox testing"
      ],
      verifiedCapabilities: [
        "Production deployed application live on Vercel with serverless Python functions",
        "Instant guest sandbox mode functional with zero authentication barrier"
      ],
      lessonsLearned: [
        "Frictionless onboarding drastically increases product adoption: allowing instant guest access boosts user exploration rates.",
        "Simple, deterministic rule heuristics often provide faster and more reliable transaction categorization than heavy zero-shot LLM calls."
      ],
      stack: [
        { category: "Frontend", items: ["HTML5", "CSS3 Custom Tokens", "JavaScript (ES6+)", "Chart.js"] },
        { category: "Backend", items: ["Python 3.9+", "Flask", "SQLAlchemy", "PyJWT"] },
        { category: "Deployment", items: ["Vercel Serverless", "Git CI/CD"] }
      ]
    }
  },
  {
    id: "parkway",
    num: "05",
    title: "ParkWay",
    subtitle: "Healthcare Provider Data Validation Agent",
    tagline: "Agentic workflow system for automated medical provider record extraction, OCR matching, and cross-source verification.",
    category: "Agentic Automation",
    description: "An intelligent multi-agent workflow architecture built to parse complex healthcare directories, execute OCR and entity resolution across public registry databases (NPI/state medical boards), and output verified provider records with confidence scores.",
    featured: false,
    prominent: false,
    status: "development",
    pipelineFlow: ["EXTRACT", "MATCH", "VERIFY", "SCORE"],
    technologies: ["Python", "FastAPI", "Pydantic", "OCR / Tesseract", "LangChain Agents", "Levenshtein Fuzzy Matching"],
    systemTags: ["Multi-Agent Architecture", "Entity Resolution", "Healthcare Data", "OCR Pipeline", "Automated Validation"],
    githubUrl: "https://github.com/shekharsameer2308",
    caseStudy: {
      problem: "Healthcare provider directories suffer from severe data decay (outdated phone numbers, incorrect clinic addresses, unverified licenses), leading to claim rejections and regulatory compliance violations.",
      context: "Manual verification across state medical boards and federal NPI registries is slow, expensive, and error-prone.",
      approach: "Constructed an automated agentic pipeline where specialist agents handle document extraction, fuzzy entity matching, license registry verification, and automated anomaly flagging.",
      architecture: {
        title: "ParkWay Multi-Agent Validation Pipeline",
        description: "From messy unstructured provider rosters to verified registries and confidence-scored records.",
        nodes: [
          { id: "docs", label: "Raw Roster Documents", sublabel: "PDFs, Scans, CSV Feeds", type: "source" },
          { id: "ocr", label: "Document Ingestion Agent", sublabel: "OCR + Layout Parser", type: "processing" },
          { id: "match", label: "Entity Resolution Agent", sublabel: "Fuzzy Matching & Normalization", type: "model" },
          { id: "cross", label: "Registry Verification Agent", sublabel: "NPI Registry & State Boards", type: "api" },
          { id: "scorer", label: "Confidence Scoring Engine", sublabel: "Weighted Verification Score", type: "decision" },
          { id: "output", label: "Clean Roster Output", sublabel: "Validated JSON / FHIR-Ready", type: "ui" }
        ],
        asciiDiagram: `┌──────────────────────┐
│  RAW ROSTER / SCANS  │ (PDFs, Images, Excel)
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│   EXTRACTION AGENT   │ (OCR + Structural Parsing)
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ ENTITY MATCH AGENT   │ (Fuzzy matching on NPI & names)
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ VERIFICATION AGENT   │ (Cross-checks registry state)
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│ CONFIDENCE SCORING   │ (Flag anomalies & pass verified)
└──────────────────────┘`
      },
      engineeringDecisions: [
        {
          title: "Multi-Agent Decomposition",
          decision: "Separated OCR parsing, entity matching, and registry verification into isolated worker agents.",
          tradeoffs: "Allows specialized error recovery and rate-limiting when hitting external state registry endpoints."
        },
        {
          title: "Deterministic Fallbacks on Fuzzy Strings",
          decision: "Combined Jaro-Winkler distance and phonetic algorithms for physician name matching.",
          tradeoffs: "Prevents false positives when dealing with hyphenated or multi-word surnames."
        }
      ],
      keyFeatures: [
        "Automated PDF and scanned document ingestion with optical character recognition",
        "Multi-agent entity resolution matching doctor names against NPI and state licensing registries",
        "Algorithmic confidence scoring highlighting discrepancies in practice addresses and credentials",
        "Structured validation pipeline returning FHIR-compatible clean provider datasets",
        "Automated exception flagging routing low-confidence cases to human-in-the-loop review"
      ],
      verifiedCapabilities: [
        "Modular agent pipeline architecture with typed Pydantic data contracts",
        "Robust fuzzy matching engine handling spelling deviations and address discrepancies"
      ],
      lessonsLearned: [
        "In regulated domains like healthcare, agentic workflows must be deterministic and fully explainable—every validation step needs an auditable log trace."
      ],
      stack: [
        { category: "Agentic Framework", items: ["LangChain", "Python", "Pydantic"] },
        { category: "Data & Text", items: ["Tesseract OCR", "Levenshtein", "Pandas", "NumPy"] },
        { category: "API & Pipeline", items: ["FastAPI", "Asyncio", "Requests"] }
      ]
    }
  },
  {
    id: "ml-models",
    num: "06",
    title: "ML Models & Algorithms",
    subtitle: "Machine Learning Foundations & Mathematical Implementations",
    tagline: "Rigorous scratch implementations and benchmarks of core regression, classification, clustering, and optimization algorithms.",
    category: "Core Machine Learning",
    description: "A comprehensive repository of machine learning algorithms built from mathematical first principles—exploring gradient descent dynamics, loss surfaces, tree pruning, hyperparameter optimization, and dimensionality reduction.",
    featured: false,
    prominent: false,
    status: "operational",
    pipelineFlow: ["FORMULATE", "VECTORIZE", "OPTIMIZE", "VALIDATE"],
    technologies: ["Python", "NumPy", "Scikit-Learn", "Matplotlib", "SciPy", "Pandas"],
    systemTags: ["Mathematical Foundations", "Gradient Descent", "Algorithmic Implementations", "Optimization", "Benchmarking"],
    githubUrl: "https://github.com/shekharsameer2308",
    caseStudy: {
      problem: "Using high-level machine learning libraries without understanding the underlying matrix calculus, optimization geometry, and convergence criteria leads to brittle systems and poor debugging in production.",
      context: "Foundational mastery of mathematical modeling is the bedrock for developing custom domain loss functions (such as chemical reaction kinetics or thermal thermodynamic constraints).",
      approach: "Built clean mathematical implementations of foundational algorithms using pure NumPy vectorization, verified against Scikit-Learn benchmarks for numerical parity and execution efficiency.",
      architecture: {
        title: "Mathematical ML Implementation & Benchmark Hierarchy",
        description: "From matrix formulations to vector gradients, numerical optimization, and evaluation.",
        nodes: [
          { id: "math", label: "Mathematical Formulation", sublabel: "Loss Functions, Jacobians, Hessians", type: "source" },
          { id: "vector", label: "NumPy Vectorized Core", sublabel: "Matrix Multiplications & Broadcasts", type: "processing" },
          { id: "optim", label: "Optimization Engines", sublabel: "SGD, Adam, Newton-Raphson, Simplex", type: "model" },
          { id: "eval", label: "Validation & Diagnostics", sublabel: "Cross-Validation, ROC-AUC, Residuals", type: "decision" },
          { id: "bench", label: "Benchmark Suite", sublabel: "Parity Check vs Scikit-Learn", type: "ui" }
        ],
        asciiDiagram: `┌────────────────────────────────┐
│   MATHEMATICAL DERIVATIONS     │ (Loss functions, Jacobians)
└───────────────┬────────────────┘
                │
                ▼
┌────────────────────────────────┐
│   NUMPY VECTORIZED COMPUTATION │ (Batch tensors, Broadcasts)
└───────────────┬────────────────┘
                │
        ┌───────┴────────┐
        ▼                ▼
┌──────────────┐  ┌──────────────┐
│ REGRESSION & │  │ CLUSTERING & │
│ CLASSIFIERS  │  │ DIM REDUCTION│
└───────┬──────┘  └──────┬───────┘
        │                │
        └───────┬────────┘
                ▼
┌────────────────────────────────┐
│ BENCHMARKING & PARITY VERIFIED │
└────────────────────────────────┘`
      },
      engineeringDecisions: [
        {
          title: "Vectorized Matrix Operations over Loops",
          decision: "Implemented all forward/backward passes using NumPy broadcasting and BLAS vectorization.",
          tradeoffs: "Achieves orders of magnitude speedups compared to iterative Python loops while keeping code mathematically elegant."
        },
        {
          title: "Numerical Stability Guarantees",
          decision: "Implemented Log-Sum-Exp tricks, epsilon clipping, and normalized gradient clipping.",
          tradeoffs: "Prevents floating-point underflow/overflow during extreme loss calculations."
        }
      ],
      keyFeatures: [
        "Linear, Ridge, Lasso, and Polynomial Regression with analytical normal equations and gradient descent",
        "Logistic Regression & Softmax Classification with cross-entropy loss derivatives",
        "Decision Trees (CART) and Random Forest ensembles with Gini impurity & entropy splits",
        "K-Means clustering with K-Means++ initialization and Gaussian Mixture Models (EM algorithm)",
        "Principal Component Analysis (PCA) via Singular Value Decomposition (SVD) and covariance eigen-decomposition",
        "Hyperparameter optimization using Grid Search, Random Search, and Bayesian Optimization techniques"
      ],
      verifiedCapabilities: [
        "Zero-dependency mathematical implementations in pure Python/NumPy",
        "Verified numerical accuracy matching Scikit-Learn reference implementations"
      ],
      lessonsLearned: [
        "Implementing algorithms from scratch reveals subtle numerical instability edge cases (like zero division in loss logs or vanishing gradients in deep activations) that standard libraries silently mask."
      ],
      stack: [
        { category: "Core Mathematics", items: ["NumPy", "SciPy Linear Algebra", "Python 3"] },
        { category: "Reference & Benchmark", items: ["Scikit-Learn", "Pandas"] },
        { category: "Visualization & Analysis", items: ["Matplotlib", "Seaborn"] }
      ]
    }
  }
];
