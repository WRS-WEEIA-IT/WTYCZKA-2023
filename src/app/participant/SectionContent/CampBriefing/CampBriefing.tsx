import { useLanguageModeContext } from "@/contexts/LanguageModeContext";
import { CampBriefingTextPL, CampBriefingTextEN } from "../textContent";
import TextWithAnchor from "@/components/TextWithAnchor/TextWithAnchor";

const CampBriefing = () => {
  const { languageMode } = useLanguageModeContext();
  const usedLanguageText =
    languageMode === "polish" ? CampBriefingTextPL : CampBriefingTextEN;
  return (
    <>
      <h2 className="text-3xl text-secondary-color text-center mt-4 w-4/6 mx-auto uppercase">
        {usedLanguageText.date}
      </h2>
      <h3 className="text-2xl text-center w-4/6 mx-auto">
        <TextWithAnchor
          text={usedLanguageText.heading}
          href={usedLanguageText.href}
          linkStart={usedLanguageText.linkStart}
          linkEnd={usedLanguageText.linkEnd}
        />
      </h3>
      <p className="text-center w-4/6 mx-auto text-xl pb-4">
        {usedLanguageText.content}
      </p>
    </>
  );
};

export default CampBriefing;
