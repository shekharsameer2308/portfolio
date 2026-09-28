import { ExperienceItem } from "@/types";

export const experiences: ExperienceItem[] = [
  {
    id: "ccl",
    organization: "Central Coalfields Limited (CCL)",
    department: "Quality Management Department",
    role: "Summer Intern — Coal Quality & Analytics",
    period: "May 2026 – June 2026",
    location: "Ranchi, Jharkhand, India",
    type: "Industrial Experience",
    headline: "Proximate coal quality analysis, calorific evaluation, and industrial quality trend dataset engineering.",
    bulletPoints: [
      "Conducted standard proximate analysis protocols across heterogeneous coal seams—measuring Moisture, Ash Content, Volatile Matter, and Gross Calorific Value (GCV).",
      "Engineered structured quality datasets from laboratory assay logs, analyzing variance trends across seam grades and mining dispatches.",
      "Assisted senior quality managers in consignment benchmarking, identifying quality deviations against contractual billing specifications.",
      "Prepared technical quality evaluation reports synthesizing laboratory findings into actionable feedstock grading recommendations for thermal power utilities."
    ],
    skills: ["Proximate Analysis", "GCV Evaluation", "Quality Management", "Dataset Engineering", "Industrial Reporting", "ASTM Standards"]
  },
  {
    id: "tata-steel",
    organization: "Tata Steel Limited",
    department: "Research & Development Department",
    role: "Research Intern — Materials & Polymer Characterization",
    period: "June 2025 – July 2025",
    location: "Jamshedpur, Jharkhand, India",
    type: "Industrial Research",
    headline: "Polymer modification experiments, advanced spectroscopic characterization, and analytical material reporting.",
    bulletPoints: [
      "Executed controlled polymer modification experimental protocols in collaboration with senior research scientists.",
      "Operated and interpreted advanced analytical characterization techniques including Scanning Electron Microscopy (SEM), Fourier Transform Infrared Spectroscopy (FTIR), Differential Scanning Calorimetry (DSC), and Thermogravimetric Analysis (TGA).",
      "Processed high-resolution characterization datasets, correlating microscopic morphological changes with thermal degradation kinetics.",
      "Compiled comprehensive experimental documentation and research reports detailing material property enhancements."
    ],
    skills: ["Polymer Modification", "SEM Characterization", "FTIR Spectroscopy", "DSC / TGA Thermal Analysis", "Data Interpretation", "Experimental Design"]
  }
];
