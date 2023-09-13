import { useLanguageModeContext } from "@/contexts/LanguageModeContext";
import {
  RefundsAndCancellationsTextPL,
  RefundsAndCancellationsTextEN,
} from "../textContent";
import copyToClipboard from "@/functions/copyToClipboard";

const RefundsAndCancellations = () => {
  const { languageMode } = useLanguageModeContext();
  const usedLanguageText =
    languageMode === "polish"
      ? RefundsAndCancellationsTextPL
      : RefundsAndCancellationsTextEN;
  return (
    <>
      <p className="text-xl w-4/6 mx-auto text-center py-6 break-words tracking-wide">
        {usedLanguageText.content.split(" ").map((word, index) => (
          <span key={index}>
            {word.includes("@") ? (
              <>
                <span
                  className="underline underline-offset-4 cursor-pointer"
                  onClick={() => copyToClipboard(word)}
                >
                  {word}
                </span>{" "}
              </>
            ) : (
              word + " "
            )}
          </span>
        ))}
      </p>
    </>
  );
};

export default RefundsAndCancellations;
