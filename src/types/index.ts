export type ProjectCategory =
  | "Industrial Analytics / ML"
  | "Real-Time Systems / Data Eng"
  | "Market Intelligence / RAG"
  | "Product / Behavioral AI"
  | "Agentic Automation"
  | "Core Machine Learning";

export type ProjectStatus = "operational" | "development" | "archived";

export interface ArchitectureNode {
  id: string;
  label: string;
  sublabel?: string;
  type: "source" | "stream" | "processing" | "storage" | "model" | "api" | "ui" | "decision";
}

export interface ArchitectureFlow {
  title: string;
  description: string;
  nodes: ArchitectureNode[];
  asciiDiagram?: string;
}

export interface ProjectCaseStudy {
  problem: string;
  context: string;
  approach: string;
  architecture: ArchitectureFlow;
  engineeringDecisions: {
    title: string;
    decision: string;
    tradeoffs: string;
  }[];
  keyFeatures: string[];
  verifiedCapabilities: string[];
  lessonsLearned: string[];
  stack: {
    category: string;
    items: string[];
  }[];
}

export interface Project {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  tagline: string;
  category: ProjectCategory;
  description: string;
  featured: boolean;
  prominent: boolean;
  status: ProjectStatus;
  pipelineFlow: string[];
  technologies: string[];
  systemTags: string[];
  githubUrl?: string;
  liveUrl?: string;
  caseStudy: ProjectCaseStudy;
}

export interface ExperienceItem {
  id: string;
  organization: string;
  department: string;
  role: string;
  period: string;
  location: string;
  type: "Industrial Experience" | "Industrial Research";
  headline: string;
  bulletPoints: string[];
  skills: string[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
  }[];
}

export interface JourneyMilestone {
  stage: string;
  title: string;
  description: string;
  focus: string;
  connection: string;
}

export interface SystemPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  pipeline: string[];
  metrics: { label: string; value: string }[];
}

/* ── Helix State Types ── */

export interface NodeTransform {
  x: number;
  y: number;
  z: number;
  rotateY: number;
  scale: number;
  opacity: number;
  blur: number;
  brightness: number;
  zIndex: number;
}

export interface HelixState {
  activeProject: number;
  helixOffset: number;
  scrollVelocity: number;
  dragVelocity: number;
  isDragging: boolean;
  isInspecting: boolean;
  commandPaletteOpen: boolean;
  reducedMotion: boolean;
  viewportSize: "mobile" | "tablet" | "desktop" | "wide";
}
