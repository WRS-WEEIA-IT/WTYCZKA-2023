"use client";
import { useLanguageModeContext } from "@/contexts/LanguageModeContext";
import {
  ParticipantEssentialsTextEN,
  ParticipantEssentialsTextPL,
} from "../textContent";
import { Check } from "lucide-react";
import TextWithAnchor from "@/components/TextWithAnchor/TextWithAnchor";

const ParticipantEssentials = () => {
  const { languageMode } = useLanguageModeContext();
  const usedLanguageText =
    languageMode === "polish"
      ? ParticipantEssentialsTextPL
      : ParticipantEssentialsTextEN;
  return (
    <>
      <h2 className="text-3xl text-secondary-color text-center mt-4 w-4/6 mx-auto uppercase">
        {usedLanguageText.heading}
      </h2>
      <ul className="list-none text-xl w-4/6 mx-auto" id="essentials-list">
        {usedLanguageText.bulletPoints.map((bulletPoint, index) => (
          <li
            key={index}
            className="flex items-start gap-4 justify-start text-left my-2 last:pb-4"
          >
            <Check width={24} height={24} className="min-w-[24px] mt-px" />
            {index === usedLanguageText.bulletLinkIndex ? (
              <TextWithAnchor
                text={bulletPoint}
                href={usedLanguageText.href}
                linkStart={usedLanguageText.linkStart}
                linkEnd={usedLanguageText.linkEnd}
              />
            ) : (
              <p>{bulletPoint}</p>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default ParticipantEssentials;
