import { useLanguageModeContext } from "@/contexts/LanguageModeContext";
import { ConsequencesTextEN, ConsequencesTextPL } from "../textContent";

const Consequences = () => {
  const { languageMode } = useLanguageModeContext();
  const usedLanguageText =
    languageMode === "polish" ? ConsequencesTextPL : ConsequencesTextEN;
  return <p className="text-xl text-center tracking-wide w-full">{usedLanguageText.content}</p>;
};

export default Consequences;
