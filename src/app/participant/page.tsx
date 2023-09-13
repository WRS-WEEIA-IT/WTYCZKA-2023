"use client";
import { useState } from "react";
import SectionContent from "./SectionContent/SectionContent";
import SectionHeaders from "./SectionHeaders/SectionHeaders";
import SectionContentElement from "./SectionContent/SectionContentElement/SectionContentElement";
import ParticipantEssentials from "./SectionContent/ParticipantEssentials/ParticipantEssentials";
import CampBriefing from "./SectionContent/CampBriefing/CampBriefing";
import VatInvocies from "./SectionContent/VatInvoices/VatInvocies";
import RefundsAndCancellations from "./SectionContent/RefundsAndCancellations/RefundsAndCancellations";

export default function Participant() {
  const [selectedSection, setSelectedSection] = useState(0);
  return (
    <main className="h-full flex flex-col">
      <SectionHeaders
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
      />
      <SectionContent selectedSection={selectedSection}>
        <SectionContentElement className="bg-cyan-950 text-left">
          <span>Content 1</span>
        </SectionContentElement>
        <SectionContentElement className="bg-red-900 text-center">
          <span>Content 2</span>
        </SectionContentElement>
        <SectionContentElement className="flex items-center justify-top flex-col gap-6 sm:justify-center">
          <ParticipantEssentials />
        </SectionContentElement>
        <SectionContentElement className="flex items-center justify-top flex-col gap-6 sm:justify-center">
          <CampBriefing />
        </SectionContentElement>
        <SectionContentElement className="flex items-center justify-top flex-col sm:justify-center">
          <VatInvocies />
        </SectionContentElement>
        <SectionContentElement className="flex items-center justify-top flex-col sm:justify-center">
          <RefundsAndCancellations />
        </SectionContentElement>
        <SectionContentElement className="bg-cyan-950 text-right">
          <span>Content 7</span>
        </SectionContentElement>
      </SectionContent>
    </main>
  );
}
