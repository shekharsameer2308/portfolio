export const portfolioData = {
  hero: {
    name: "Sameer Shekhar",
    role: "Chemical Engineering × Data × AI",
    tagline: "I build intelligent systems for real-world problems. Bridging the gap between chemical processes, data engineering, and artificial intelligence.",
    location: "Ranchi, Jharkhand, India",
    status: "OPERATIONAL"
  },
  about: {
    bio: "I am an engineer working at the convergence of Chemical Engineering, Data Engineering, and Artificial Intelligence. Rather than treating software as abstract syntax, I approach systems through the lens of industrial problem-solving—where physical constraints, noisy sensor streams, and domain thermodynamics meet rigorous computational architecture.",
    metrics: [
      { label: "CGPA", value: "7.22/10" },
      { label: "Institution", value: "BIT Mesra" },
      { label: "Focus", value: "Industrial ML" }
    ]
  },
  projects: [
    {
      id: "ecom-attribute-extraction",
      title: "E-Commerce Attribute Extraction",
      description: "End-to-end computer vision pipeline extracting structured product attributes from packaging images. Utilizes Google Gemini API and a custom trained Averaged Perceptron NER model, integrating deterministic Pydantic validation to completely eliminate LLM arithmetic hallucinations.",
      techStack: ["Python", "Google Gemini", "EasyOCR", "Pydantic", "NER"],
      metrics: ["93.3% extraction accuracy", "Zero math hallucinations"],
      githubUrl: "https://github.com/shekharsameer2308/ecom-attribute-extraction",
      liveUrl: ""
    },
    {
      id: "prototype-fno-1d",
      title: "Prototype-FNO-1D",
      description: "Developed a high-performance browser-native scientific computing platform evaluating Fourier Neural Operator (FNO) surrogates against classical PDE solvers (Fisher-KPP, phase-field). Achieved a 100,000x computational speedup rendering real-time canvas heatmaps and 3D surface convergence analytics.",
      techStack: ["React", "FastAPI", "PyTorch", "JavaScript"],
      metrics: ["100,000× speedup", "Canvas Heatmaps"],
      githubUrl: "https://github.com/shekharsameer2308/Prototype-FNO-1D-RxnDynamics-",
      liveUrl: "https://fnoproject.vercel.app"
    },
    {
      id: "analyzer",
      title: "Analyzer",
      description: "Architected an industrial-grade ML platform for coal quality assessment. Deployed XGBoost models for non-linear GCV prediction from proximate analysis, achieving high accuracy. Engineered a linear programming optimizer for cost-efficient coal blending, reducing penalty fees significantly.",
      techStack: ["Next.js", "FastAPI", "XGBoost", "SciPy"],
      metrics: ["Isolation Forest anomaly detection", "Cost minimization LP"],
      githubUrl: "https://github.com/shekharsameer2308/analyzer",
      liveUrl: "https://analyzer-self.vercel.app"
    },
    {
      id: "real-time-nexus",
      title: "NEXUS Analytics",
      description: "Engineered an enterprise-grade, near real-time data streaming platform simulating high-throughput marketplaces. Orchestrated 11 containerized microservices utilizing Apache Kafka for event ingestion and PostgreSQL for star-schema analytics, maintaining sub-second WebSocket broadcasting latency.",
      techStack: ["Kafka", "PostgreSQL", "FastAPI", "Grafana", "Docker"],
      metrics: ["10-50 events/sec", "Sub-second WebSocket latency"],
      githubUrl: "https://github.com/shekharsameer2308/Real-Time-Data-Analysis-",
      liveUrl: "https://real-time-data-analysis.vercel.app/"
    },
    {
      id: "exi1",
      title: "Reactor Model",
      description: "Scientific computing framework for e-methanol synthesis optimization utilizing DeepONet surrogate neural operators and Bayesian optimization.",
      techStack: ["Python", "PyTorch", "BoTorch", "SciML", "CFD"],
      metrics: ["+20.66% CO₂ conversion gain", "2D CFD solving"],
      githubUrl: "https://github.com/shekharsameer2308/exi1",
      liveUrl: ""
    },
    {
      id: "scout",
      title: "Scout Market Intel",
      description: "AI-powered market intelligence platform utilizing NLP, RAG, and Qdrant vector databases for industry trend monitoring.",
      techStack: ["Streamlit", "Qdrant", "Google Gemini", "PyTorch"],
      metrics: ["Automated SWOT analysis", "BERTopic clustering"],
      githubUrl: "https://github.com/shekharsameer2308/Scout",
      liveUrl: ""
    },
    {
      id: "flow-simulation",
      title: "Flow-simulation (CFD)",
      description: "GPU-accelerated CFD framework for incompressible Navier-Stokes simulation with CNN surrogate integration for pressure-field prediction.",
      techStack: ["Taichi Lang", "CUDA", "PyTorch", "NumPy"],
      metrics: ["Large Eddy Simulation", "GPU-parallel"],
      githubUrl: "https://github.com/shekharsameer2308/Flow-simulation-",
      liveUrl: ""
    },
    {
      id: "trackfin",
      title: "TrackFin SaaS",
      description: "Modern, AI-ready personal finance & behavioral analytics platform with heuristic tagging and cashflow forecasting.",
      techStack: ["Flask", "Vanilla JS", "Chart.js", "SQLite"],
      metrics: ["Subscription detection", "Context-aware AI Advisor"],
      githubUrl: "https://github.com/shekharsameer2308/TrackFin",
      liveUrl: "https://track-fin-bay.vercel.app/"
    },
    {
      id: "dbms-supply-chain",
      title: "AI Supply Chain DB",
      description: "Full-stack supply chain management system for fertilizer manufacturing featuring a Star schema, AI demand forecasting, and carbon tracking.",
      techStack: ["MySQL", "Node.js", "React", "Recharts"],
      metrics: ["Carbon emission tracking", "SQL Triggers"],
      githubUrl: "https://github.com/shekharsameer2308/Database-Management-System-",
      liveUrl: "https://dashboard-six-sable-18.vercel.app/"
    },
    {
      id: "parkway",
      title: "ParkWay Multi-Agent",
      description: "Production-ready multi-agent validation workflow for healthcare providers integrating OCR, multi-source validation, and fuzzy entity matching.",
      techStack: ["Python", "Agentic AI", "OCR", "APIs"],
      metrics: ["70-90% automation", "200 profiles in <30m"],
      githubUrl: "https://github.com/shekharsameer2308/ParkWay",
      liveUrl: ""
    },
    {
      id: "eyprototype",
      title: "eyprototype (Healthcare AI)",
      description: "End-to-end agentic AI system for validating healthcare provider directories utilizing a specialized 4-agent architecture.",
      techStack: ["Python", "LLMs", "NLP", "Web Scraping"],
      metrics: ["Firstsource Challenge VI", "Multi-Agent"],
      githubUrl: "https://github.com/shekharsameer2308/eyprototype",
      liveUrl: ""
    },
    {
      id: "ml-models",
      title: "ML Algorithms Library",
      description: "Comprehensive modular library of fundamental supervised and unsupervised machine learning algorithms and preprocessing utilities.",
      techStack: ["Scikit-Learn", "TensorFlow", "XGBoost"],
      metrics: ["Educational Resource", "10+ Algorithms"],
      githubUrl: "https://github.com/shekharsameer2308/ML-models-",
      liveUrl: ""
    }
  ],
  experience: [
    {
      role: "Summer Intern — Coal Quality & Analytics",
      company: "Central Coalfields Limited (CCL)",
      dates: "May 2026 – June 2026",
      bulletPoints: [
        "Conducted standard proximate analysis protocols across heterogeneous coal seams—measuring Moisture, Ash Content, Volatile Matter, and GCV.",
        "Engineered structured quality datasets from laboratory assay logs.",
        "Assisted in consignment benchmarking against contractual billing specifications."
      ]
    },
    {
      role: "Research Intern — Materials Characterization",
      company: "Tata Steel Limited",
      dates: "June 2025 – July 2025",
      bulletPoints: [
        "Executed controlled polymer modification experimental protocols.",
        "Operated advanced analytical characterization techniques including SEM, FTIR, DSC, and TGA.",
        "Processed high-resolution datasets correlating morphological changes with thermal degradation."
      ]
    }
  ],
  certifications: [
    { title: "Summer Analytics 2025 (Top 25 Percentile)", issuer: "Consulting & Analytics Club, IIT Guwahati", date: "2025", image: "/certs/iitg.jpg" },
    { title: "Supply Chain - Demand Planning, Forecasting & S&OP w/ Excel", issuer: "Udemy / Sitmi Academy", date: "June 2026", image: "/certs/demand.jpg" },
    { title: "The Product Management for AI & Data Science Course", issuer: "Udemy / 365 Careers", date: "June 2026", image: "/certs/product.jpg" },
    { title: "Certified Supply Chain Professional (CSCP)", issuer: "Udemy / YouAccel Training", date: "Aug 2026", image: "/certs/cscp.jpg" }
  ],
  skills: {
    languages: ["Python", "TypeScript", "SQL", "C++"],
    frameworks: ["React", "Next.js", "FastAPI", "Node.js", "Flask"],
    dataAndAI: ["XGBoost", "PyTorch", "LangChain", "Kafka", "PostgreSQL", "SciML", "Qdrant"],
    engineering: ["Thermodynamics", "CFD", "Polymer Science", "Process Optimization"]
  },
  socials: {
    email: "shekharsameer2308@gmail.com",
    github: "https://github.com/shekharsameer2308",
    linkedin: "https://linkedin.com/in/sameershekhar"
  }
};
