"use client";
import { useLanguageModeContext } from "@/contexts/LanguageModeContext";
import { VatInvoicesTextEN, VatInvoicesTextPL } from "../textContent";
import TextWithCopyPattern from "@/components/TextWithCopyPattern/TextWithCopyPattern";
import AnimateWrapper from "@/animations/AnimateWrapper";

const VatInvoices = () => {
  const { languageMode } = useLanguageModeContext();
  const usedLanguageText =
    languageMode === "polish" ? VatInvoicesTextPL : VatInvoicesTextEN;
  return (
    <section className="text-xl text-left break-words tracking-wide w-full xl:text-center leading-relaxed max-xl:px-2">
      <AnimateWrapper duration={1} delay={0.1} type="FadeInTop">
        {usedLanguageText.content.map((paragraph, index) => (
          <p key={index} className="py-2">
            <TextWithCopyPattern text={paragraph} pattern="@" slideIndex={4} />
          </p>
        ))}
      </AnimateWrapper>
    </section>
  );
};

export default VatInvoices;
