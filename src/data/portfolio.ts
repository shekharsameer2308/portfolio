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
      id: "analyzer",
      title: "Analyzer",
      description: "Industrial ML engine for coal quality assessment, non-linear GCV prediction, and blending optimization for thermal power plants.",
      techStack: ["Next.js", "FastAPI", "XGBoost", "DuckDB", "SciPy"],
      metrics: ["Reduced penalty fees", "Optimized blending"],
      githubUrl: "https://github.com/shekharsameer2308/analyzer",
      liveUrl: "https://analyzer-self.vercel.app"
    },
    {
      id: "scout",
      title: "Scout (RAG System)",
      description: "Advanced semantic search and retrieval-augmented generation pipeline using vector databases and chunking strategies.",
      techStack: ["Python", "LangChain", "Vector DB", "LLMs", "React"],
      metrics: ["Sub-second retrieval", "Semantic accuracy"],
      githubUrl: "https://github.com/shekharsameer2308",
      liveUrl: "https://shekharsameer2308.github.io"
    },
    {
      id: "nexus",
      title: "Nexus Data Pipeline",
      description: "High-throughput event streaming architecture using Kafka and PostgreSQL for real-time sensor analytics.",
      techStack: ["Kafka", "PostgreSQL", "Docker", "Node.js", "Grafana"],
      metrics: ["High throughput", "Real-time sync"],
      githubUrl: "https://github.com/shekharsameer2308",
      liveUrl: "https://shekharsameer2308.github.io"
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
  skills: {
    languages: ["Python", "TypeScript", "SQL", "C++"],
    frameworks: ["React", "Next.js", "FastAPI", "Node.js"],
    dataAndAI: ["XGBoost", "Scikit-Learn", "LangChain", "Vector DBs", "Kafka", "PostgreSQL"],
    engineering: ["Thermodynamics", "Polymer Science", "Process Optimization", "ASTM Standards"]
  },
  socials: {
    email: "shekharsameer2308@gmail.com",
    github: "https://github.com/shekharsameer2308",
    linkedin: "https://linkedin.com/in/sameershekhar"
  }
};
