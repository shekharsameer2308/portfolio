import { JourneyMilestone } from "@/types";

export const journeyMilestones: JourneyMilestone[] = [
  {
    stage: "01",
    title: "Chemical Engineering Foundations",
    description: "Immersed in mass & energy balances, thermodynamics, reaction kinetics, and transport phenomena at BIT Mesra.",
    focus: "Physical constraints, conservation laws, and system dynamics.",
    connection: "Gave me a profound appreciation for non-linear systems, physical constraints, and why purely empirical black-box models fail without domain boundaries."
  },
  {
    stage: "02",
    title: "Industrial Research & Laboratory Reality",
    description: "Worked on proximate coal analysis at CCL and material characterization (SEM, FTIR, DSC) at Tata Steel R&D.",
    focus: "Raw industrial datasets, noisy sensors, experimental protocols, and quality standards.",
    connection: "Showed me that real-world data is rarely clean or neatly curated: physical variability requires rigorous data pipelines and anomaly detection."
  },
  {
    stage: "03",
    title: "Data Engineering & Stream Architecture",
    description: "Built high-throughput event processing engines, star-schema relational warehouses, and Kafka streaming pipelines.",
    focus: "Distributed streaming, schema design, latency minimization, and data integrity.",
    connection: "Bridged raw operational telemetry with scalable compute infrastructure to make data accessible in sub-second windows."
  },
  {
    stage: "04",
    title: "Machine Learning & Mathematical Modeling",
    description: "Implemented regression, clustering, time-series forecasting, and optimization solvers from first principles.",
    focus: "Gradient descent dynamics, loss surfaces, constrained optimization, and statistical validation.",
    connection: "Applied statistical modeling directly to industrial challenges—such as GCV calorific prediction and multi-variable feedstock blending optimization."
  },
  {
    stage: "05",
    title: "AI, RAG & Agentic Systems",
    description: "Engineered retrieval-augmented generation architectures, domain NLP pipelines (FinBERT), and multi-agent validation agents.",
    focus: "Vector stores (Qdrant, FAISS), semantic chunking, grounded source attribution, and entity verification.",
    connection: "Transformed unstructured news, financial disclosures, and provider rosters into deterministic, citation-backed intelligence."
  },
  {
    stage: "06",
    title: "Production Software & Observability",
    description: "Deploying full-stack applications with FastAPI, Next.js, Docker, Prometheus telemetry, and automated CI/CD.",
    focus: "Container orchestration, endpoint resilience, WebSocket streaming, and SLA monitoring.",
    connection: "Ensured that every analytical model, data pipeline, and AI service runs as reliable, observable, production-grade software."
  }
];
