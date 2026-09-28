import React from "react";
import { NotebookContainer } from "@/components/notebook/NotebookContainer";
import { WashiTabDivider } from "@/components/notebook/WashiTabDivider";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { BentoGrid } from "@/components/BentoGrid";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { CertificationsSection } from "@/components/CertificationsSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <NotebookContainer>
      <WashiTabDivider />
      <Hero />
      <BentoGrid />
      <ExperienceTimeline />
      <CertificationsSection />
      <Footer />
    </NotebookContainer>
  );
}
