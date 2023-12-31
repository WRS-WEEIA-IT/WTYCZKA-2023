"use client";
import { useLanguageModeContext } from "@/contexts/LanguageModeContext";
import { CampBriefingTextPL, CampBriefingTextEN } from "../textContent";
import TextWithAnchor from "@/components/TextWithAnchor/TextWithAnchor";
import AnimateWrapper from "@/animations/AnimateWrapper";

const CampBriefing = () => {
  const { languageMode } = useLanguageModeContext();
  const usedLanguageText =
    languageMode === "polish" ? CampBriefingTextPL : CampBriefingTextEN;
  return (
    <>
      <AnimateWrapper
        duration={1}
        delay={0.1}
        type="FadeInTop"
        className="overflow-visible"
      >
        <h2 className="text-3xl text-secondary-color text-center uppercase leading-relaxed">
          {usedLanguageText.date}
        </h2>
      </AnimateWrapper>
      <AnimateWrapper
        duration={1}
        delay={0.2}
        type="FadeInTop"
        className="overflow-visible"
      >
        <h3 className="text-2xl text-center leading-relaxed">
          <TextWithAnchor
            text={usedLanguageText.heading}
            href={usedLanguageText.href}
            linkStart={usedLanguageText.linkStart}
            linkEnd={usedLanguageText.linkEnd}
          />
        </h3>
      </AnimateWrapper>
      <AnimateWrapper
        duration={1}
        delay={0.3}
        type="FadeInTop"
        className="overflow-visible"
      >
        {usedLanguageText.content.map((paragraph, index) => (
          <p
            className="text-left text-xl xl:text-center leading-relaxed max-xl:px-2 py-2"
            key={index}
          >
            {paragraph}
          </p>
        ))}
      </AnimateWrapper>
    </>
  );
};

export default CampBriefing;
