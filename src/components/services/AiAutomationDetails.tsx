"use client";

import React from "react";
import { AiCategoryData } from "@/data/aiAutomationData";
import { AiAutomationInteractiveFeatures } from "@/components/services/AiAutomationInteractiveFeatures";
import { AiAutomationBenefits } from "@/components/services/AiAutomationBenefits";
import { AiAutomationUseCases } from "@/components/services/AiAutomationUseCases";

interface AiAutomationDetailsProps {
  category: AiCategoryData;
}

export const AiAutomationDetails: React.FC<AiAutomationDetailsProps> = ({ category }) => {
  return (
    <div className="w-full bg-white text-slate-900 font-sans">
      
      {/* Interactive Secoda-Style Topics Section with Laptop Real-Life Visuals */}
      <AiAutomationInteractiveFeatures category={category} />

      {/* 4 Column Benefits Section matching screenshot reference */}
      <AiAutomationBenefits category={category} />

      {/* Redesigned Use Cases Grid + Bottom Card Layout matching reference UI */}
      <AiAutomationUseCases category={category} />

    </div>
  );
};
