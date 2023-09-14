import { useLanguageModeContext } from "@/contexts/LanguageModeContext";
import {
  RefundsAndCancellationsTextPL,
  RefundsAndCancellationsTextEN,
} from "../textContent";
import TextWithCopyPattern from "@/components/TextWithCopyPattern/TextWithCopyPattern";

const RefundsAndCancellations = () => {
  const { languageMode } = useLanguageModeContext();
  const usedLanguageText =
    languageMode === "polish"
      ? RefundsAndCancellationsTextPL
      : RefundsAndCancellationsTextEN;
  return (
    <p className="text-xl w-4/6 mx-auto text-center py-4 break-words tracking-wide">
      <TextWithCopyPattern text={usedLanguageText.content} pattern="@" />

    </p>
  );
};

export default RefundsAndCancellations;
