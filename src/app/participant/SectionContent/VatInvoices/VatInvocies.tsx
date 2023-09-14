import { useLanguageModeContext } from "@/contexts/LanguageModeContext";
import { VatInvociesTextEN, VatInvociesTextPL } from "../textContent";
import TextWithCopyPattern from "@/components/TextWithCopyPattern/TextWithCopyPattern";

const VatInvocies = () => {
  const { languageMode } = useLanguageModeContext();
  const usedLanguageText =
    languageMode === "polish" ? VatInvociesTextPL : VatInvociesTextEN;
  return (
    <p className="text-xl w-4/6 mx-auto text-center py-4 break-words tracking-wide">
      <TextWithCopyPattern text={usedLanguageText.content} pattern="@" />
    </p>
  );
};

export default VatInvocies;
