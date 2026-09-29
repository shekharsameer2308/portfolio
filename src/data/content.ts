// All copy lives here. Search for TODO before you deploy: each one is a number
// or claim that needs its baseline, sample size, or a fact only you can confirm.

export type Category = "sim" | "ml" | "sys";

export const site = {
  name: "Sameer Shekhar",
  tagline:
    "Chemical engineering student at BIT Mesra. I build ML and simulation tools for process industries.",
  email: "shekharsameer2308@gmail.com",
  github: "https://github.com/shekharsameer2308",
  linkedin: "https://www.linkedin.com/in/sameershekhar",
  resume: "/resume.pdf",
  url: "https://portfolio-sameershekhar.vercel.app",
};

export const categories: Record<Category, string> = {
  sim: "Process and simulation",
  ml: "ML and analytics",
  sys: "Data and systems",
};

export const about = {
  text: "I'm a final-year Chemical Engineering student at BIT Mesra and Joint President of IIChE. Most of my work sits between process engineering and machine learning: surrogate models for reactors and PDEs, and ML on coal quality data. I've interned at Tata Steel R&D (polymer characterization) and Central Coalfields Limited (coal quality lab).",
  note: "class of 2027",
};

export type Project = {
  title: string;
  category: Category;
  description: string;
  metric?: string;
  stack: string;
  note?: string; // margin note, max 6 words, only if it carries information
  image?: { src: string; alt: string; w: number; h: number };
  links: { label: string; href: string }[];
};

const gh = "https://github.com/shekharsameer2308";

export const projects: Project[] = [
  {
    title: "Reactor Model",
    category: "sim",
    description:
      "DeepONet surrogate of an e-methanol synthesis reactor, with Bayesian optimization in BoTorch.",
    metric: "20.66% higher CO₂ conversion in simulation.",
    stack: "Python, PyTorch, BoTorch",
    note: "simulation only",
    links: [{ label: "GitHub", href: "https://github.com/shekharsameer2308/exi1" }],
  },
  {
    title: "Neural PDE Solver",
    category: "sim",
    description:
      "Compares Fourier Neural Operator surrogates with classical solvers on Fisher-KPP and phase-field problems, running in the browser.",
    metric:
      "Inference about 100,000× faster than classical solvers on equivalent grids.",
    stack: "PyTorch, FastAPI, React",
    links: [
      { label: "GitHub", href: "https://github.com/shekharsameer2308/Prototype-FNO-1D-RxnDynamics-" },
      { label: "Live demo", href: "https://fnoproject.vercel.app" },
    ],
  },
  {
    title: "Flow-simulation (CFD)",
    category: "sim",
    description:
      "GPU-accelerated incompressible Navier-Stokes solver with a CNN surrogate for pressure-field prediction.",
    stack: "Taichi, CUDA, PyTorch",
    links: [{ label: "GitHub", href: "https://github.com/shekharsameer2308/Flow-simulation-" }],
  },
  {
    title: "Analyzer",
    category: "ml",
    description:
      "Predicts coal GCV from proximate analysis with XGBoost, flags anomalous samples with Isolation Forest, and picks the cheapest blend that meets spec using linear programming.",
    stack: "Next.js, FastAPI, XGBoost, SciPy",
    links: [
      { label: "GitHub", href: "https://github.com/shekharsameer2308/analyzer" },
      { label: "Live demo", href: "https://analyzer-self.vercel.app" },
    ],
  },
  {
    title: "NEXUS Analytics",
    category: "sys",
    description:
      "A simulated marketplace event stream on Kafka, PostgreSQL, and 11 Docker services, with Grafana dashboards and WebSocket updates. Built to learn streaming architecture.",
    metric: "10–50 events per second, generated.",
    stack: "Kafka, PostgreSQL, FastAPI, Grafana, Docker",
    note: "simulated data",
    links: [
      { label: "GitHub", href: "https://github.com/shekharsameer2308/Real-Time-Data-Analysis-" },
      { label: "Live demo", href: "https://real-time-data-analysis.vercel.app/" },
    ],
  },
  {
    title: "E-commerce Attribute Extraction",
    category: "ml",
    description:
      "Pulls product attributes from packaging photos using OCR, Gemini, and a trained NER model. Pydantic checks the numeric fields.",
    metric: "93.3% accuracy on a labeled test set.",
    stack: "Python, EasyOCR, Gemini API, Pydantic",
    links: [{ label: "GitHub", href: "https://github.com/shekharsameer2308/ecom-attribute-extraction" }],
  },
];

export const experience = [
  {
    role: "Summer Intern, Quality Management",
    org: "Central Coalfields Limited",
    place: "Ranchi",
    dates: "May – Jun 2026",
    text: "Ran proximate analysis (moisture, ash, volatile matter, GCV) on coal from different seams. Cleaned lab assay logs into datasets and compared quality across seam grades and dispatches. Helped senior managers check consignments against contract specs and flag deviations.",
  },
  {
    role: "Research Intern, R&D",
    org: "Tata Steel",
    place: "Jamshedpur",
    dates: "Jun – Jul 2025",
    text: "Worked with research scientists on polymer modification experiments. Used SEM, FTIR, DSC, and TGA. Related morphology changes to thermal degradation in the data, and wrote up the experiments.",
  },
];

export const skills: [string, string][] = [
  ["Languages", "Python, SQL, JavaScript, TypeScript"],
  ["ML", "XGBoost, scikit-learn, PyTorch, Prophet, SciPy optimize, BoTorch"],
  ["Data and backend", "Kafka, PostgreSQL, FastAPI, Docker, Grafana"],
  ["Scientific computing", "CFD, neural operators (FNO, DeepONet), process simulation"],
  ["Web", "Next.js, React, Tailwind CSS"],
];

export const education = [
  "B.Tech, Chemical Engineering, Birla Institute of Technology, Mesra. 2023 – 2027.",
  "Joint President, Indian Institute of Chemical Engineers (IIChE), BIT Mesra chapter.",
];

export const certifications =
  "Summer Analytics 2025, IIT Guwahati (top 25 percentile). Udemy courses in machine learning, supply chain planning, and product management, plus a CSCP exam-prep course.";
