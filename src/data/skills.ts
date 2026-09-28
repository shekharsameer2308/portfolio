import { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages & Core",
    description: "Systems programming, data processing, and scripting languages.",
    skills: [
      { name: "Python", highlight: true },
      { name: "SQL", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "C++" },
      { name: "C" },
      { name: "R" }
    ]
  },
  {
    category: "Data & Streaming Systems",
    description: "Relational modeling, event brokers, and analytical query engines.",
    skills: [
      { name: "PostgreSQL", highlight: true },
      { name: "Apache Kafka", highlight: true },
      { name: "DuckDB", highlight: true },
      { name: "dbt" },
      { name: "Pandas & NumPy", highlight: true },
      { name: "SQLite" },
      { name: "Alembic" }
    ]
  },
  {
    category: "Machine Learning & Modeling",
    description: "Statistical learning, gradient boosting, and optimization algorithms.",
    skills: [
      { name: "XGBoost", highlight: true },
      { name: "Scikit-Learn", highlight: true },
      { name: "Prophet (Time Series)", highlight: true },
      { name: "SciPy Optimize (Linear & Non-linear)" },
      { name: "Matplotlib & Seaborn" },
      { name: "Feature Engineering" }
    ]
  },
  {
    category: "AI, RAG & Vector Systems",
    description: "Retrieval-augmented generation, embeddings, and agentic workflows.",
    skills: [
      { name: "Vector Search (Qdrant, FAISS)", highlight: true },
      { name: "LangChain & LlamaIndex", highlight: true },
      { name: "FinBERT & BERTopic" },
      { name: "Sentence Transformers" },
      { name: "RAG Pipeline Architecture", highlight: true },
      { name: "Multi-Agent Systems" }
    ]
  },
  {
    category: "Production & Infrastructure",
    description: "Service development, containerization, and deployment automation.",
    skills: [
      { name: "FastAPI", highlight: true },
      { name: "Next.js & React", highlight: true },
      { name: "Docker & Compose", highlight: true },
      { name: "Prometheus & Grafana" },
      { name: "WebSockets" },
      { name: "GitHub Actions / CI/CD", highlight: true },
      { name: "MLflow / Prefect" }
    ]
  },
  {
    category: "Analytics & Domain Tools",
    description: "Industrial analytical protocols, business intelligence, and reporting.",
    skills: [
      { name: "Proximate Coal Analysis", highlight: true },
      { name: "SEM / FTIR / DSC Material Analytics" },
      { name: "Power BI & Tableau" },
      { name: "Excel Advanced Modeling" },
      { name: "Chemical Process Simulation" }
    ]
  }
];
