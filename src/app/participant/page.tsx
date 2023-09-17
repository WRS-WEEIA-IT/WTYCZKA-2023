"use client";
import { useState } from "react";
import SectionContent from "./SectionContent/SectionContent";
import SectionHeaders from "./SectionHeaders/SectionHeaders";
import SectionContentElement from "./SectionContent/SectionContentElement/SectionContentElement";
import ParticipantEssentials from "./SectionContent/ParticipantEssentials/ParticipantEssentials";
import CampBriefing from "./SectionContent/CampBriefing/CampBriefing";
import VatInvoices from "./SectionContent/VatInvoices/VatInvoices";
import RefundsAndCancellations from "./SectionContent/RefundsAndCancellations/RefundsAndCancellations";
import RegistrationForm from "@/components/RegistrationForm/RegistrationForm";
import PaymentsForm from "@/components/PaymentsForm/PaymentForm";
import Consequences from "./SectionContent/Consequences/Consequences";

export default function Participant() {
  const [selectedSection, setSelectedSection] = useState(0);
  return (
    <main className="flex flex-col">
      <SectionHeaders
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
      />
      <SectionContent selectedSection={selectedSection}>
        <SectionContentElement>
          <RegistrationForm />
        </SectionContentElement>
        <SectionContentElement>
          <PaymentsForm />
        </SectionContentElement>
        <SectionContentElement className="flex flex-col items-center justify-top gap-6 xl:justify-center">
          <ParticipantEssentials />
        </SectionContentElement>
        <SectionContentElement className="flex flex-col items-center justify-top gap-6 xl:justify-center">
          <CampBriefing />
        </SectionContentElement>
        <SectionContentElement className="flex flex-col items-center justify-top gap-6 xl:justify-center">
          <VatInvoices />
        </SectionContentElement>
        <SectionContentElement className="flex flex-col items-center justify-top gap-6 xl:justify-center">
          <RefundsAndCancellations />
        </SectionContentElement>
        <SectionContentElement className="flex flex-col items-center justify-top gap-6 xl:justify-center">
          <Consequences />
        </SectionContentElement>
      </SectionContent>
    </main>
  );
}
