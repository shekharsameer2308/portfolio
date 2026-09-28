import { SystemPillar } from "@/types";

export const systemPillars: SystemPillar[] = [
  {
    id: "data-engineering",
    title: "Data Engineering & Pipelines",
    subtitle: "High-throughput event streaming, dimensional warehousing, and ETL orchestration.",
    description: "Architecting resilient data foundations from streaming logs to star-schema warehouses. Designing low-latency pipelines that validate, transform, and index high-velocity data streams.",
    technologies: ["Apache Kafka", "PostgreSQL", "DuckDB", "dbt", "Prefect", "Pandas", "SQLAlchemy", "Alembic"],
    pipeline: ["Event Ingestion", "Schema Validation", "Deduplication", "Dimensional Transformation", "Storage Partitioning", "Analytics Query Engine"],
    metrics: [
      { label: "Architecture", value: "Star Schema / Kafka Topics" },
      { label: "Query Engine", value: "Vectorized DuckDB & Postgres" },
      { label: "Data Quality", value: "Pydantic & dbt assertions" }
    ]
  },
  {
    id: "machine-learning",
    title: "Machine Learning & Optimization",
    subtitle: "Domain-specific regression, time-series forecasting, and mathematical solvers.",
    description: "Developing models grounded in statistical learning and physical constraints. From non-linear GCV calorific regressors and anomaly detectors to Simplex constrained optimization solvers.",
    technologies: ["XGBoost", "Scikit-Learn", "Prophet", "SciPy Optimize", "Isolation Forest", "NumPy Vectorization"],
    pipeline: ["Feature Engineering", "Multivariate Scaling", "Cross-Validation", "Ensemble Training", "Boundary Loss Optimization", "Model Inference API"],
    metrics: [
      { label: "Algorithms", value: "Gradient Boosted Trees, IsoForest" },
      { label: "Optimization", value: "Constrained Linear Programming" },
      { label: "Evaluation", value: "Residuals, RMSE, SHAP Values" }
    ]
  },
  {
    id: "ai-rag",
    title: "AI, RAG & Vector Systems",
    subtitle: "Retrieval-augmented generation, semantic vector search, and grounded synthesis.",
    description: "Constructing deterministic AI systems over dense vector indexes and relational stores. Implementing semantic chunking, domain financial NLP (FinBERT), and hallucination-resistant retrieval.",
    technologies: ["Qdrant", "FAISS", "Sentence-Transformers", "LangChain", "FinBERT", "BERTopic", "Gemini / OpenAI API"],
    pipeline: ["Document Scraping", "Boilerplate Stripping", "Dense Embedding", "Vector Indexing", "Hybrid Retrieval", "Cited LLM Synthesis"],
    metrics: [
      { label: "Vector Search", value: "Cosine Similarity / HNSW Index" },
      { label: "NLP Models", value: "FinBERT, KeyBERT, BERTopic" },
      { label: "Groundedness", value: "Source Chunk Citation Verification" }
    ]
  },
  {
    id: "production-engineering",
    title: "Production Engineering & Infra",
    subtitle: "Containerized microservices, bi-directional WebSockets, and telemetry monitoring.",
    description: "Engineering production software systems with high availability, robust typing, automated CI/CD deployment pipelines, and end-to-end system telemetry.",
    technologies: ["FastAPI", "Next.js", "Docker & Compose", "Prometheus", "Grafana", "WebSockets", "GitHub Actions", "Vercel"],
    pipeline: ["Typed API Schemas", "Containerization", "Automated CI/CD", "Edge CDN Routing", "WebSocket Broadcast", "Telemetry Metrics"],
    metrics: [
      { label: "Services", value: "FastAPI REST + Async WebSockets" },
      { label: "Observability", value: "Prometheus Metrics & Grafana" },
      { label: "Deployments", value: "Vercel Edge & Docker Containers" }
    ]
  }
];
