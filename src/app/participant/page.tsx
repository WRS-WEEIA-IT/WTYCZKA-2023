"use client";
import { useState } from "react";
import SectionContent from "./SectionContent/SectionContent";
import SectionHeaders from "./SectionHeaders/SectionHeaders";
import SectionContentElement from "./SectionContent/SectionContentElement/SectionContentElement";
import ParticipantEssentials from "./SectionContent/ParticipantEssentials/ParticipantEssentials";
import CampBriefing from "./SectionContent/CampBriefing/CampBriefing";
import VatInvocies from "./SectionContent/VatInvoices/VatInvocies";
import RefundsAndCancellations from "./SectionContent/RefundsAndCancellations/RefundsAndCancellations";
import RegistrationForm from "@/components/RegistrationForm/RegistrationForm";
import ContactForm from "@/components/ContactForm/ContactForm";
import PaymentsForm from "@/components/PaymentsForm/PaymentsForm";

export default function Participant() {
  const [selectedSection, setSelectedSection] = useState(0);
  return (
    <main className="h-full flex flex-col">
      <SectionHeaders
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
      />
      <SectionContent selectedSection={selectedSection}>
        <SectionContentElement className="bg-black text-left">
          <span>
            <RegistrationForm />
          </span>
        </SectionContentElement>
        <SectionContentElement className="bg-black text-left">
          <span>
            <PaymentsForm />
          </span>
        </SectionContentElement>
        <SectionContentElement>
          <ParticipantEssentials />
        </SectionContentElement>
        <SectionContentElement>
          <CampBriefing />
        </SectionContentElement>
        <SectionContentElement>
          <VatInvocies />
        </SectionContentElement>
        <SectionContentElement>
          <RefundsAndCancellations />
        </SectionContentElement>
        <SectionContentElement className="bg-cyan-950 text-right">
          <span>Content 7</span>
        </SectionContentElement>
      </SectionContent>
    </main>
  );
}
