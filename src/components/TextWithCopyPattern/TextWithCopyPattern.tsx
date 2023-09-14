import { useLanguageModeContext } from "@/contexts/LanguageModeContext";
import copyToClipboard from "@/functions/copyToClipboard";
import { useState } from "react";

const TextWithCopyPattern = ({
  text,
  pattern,
}: {
  text: string;
  pattern: string;
}) => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const { languageMode } = useLanguageModeContext();
  return (
    <>
      {text.split(" ").map((word, index) => (
        <span key={index}>
          {word.includes(pattern) ? (
            <>
              <span
                className="underline underline-offset-4 cursor-pointer"
                onClick={() => {
                  setIsPopupVisible(true);
                  setTimeout(() => {
                    setIsPopupVisible(false);
                  }, 2000);
                  copyToClipboard(word);
                }}
              >
                {word}
              </span>{" "}
            </>
          ) : (
            word + " "
          )}
        </span>
      ))}
      <p
        className={`absolute bg-active-color rounded-lg p-2 text-lg transition-all duration-500 ease-in-out ${
          isPopupVisible ? "bottom-4" : "-bottom-16"
        }`}
      >
        {languageMode === "polish" ? "Skopiowano" : "Copied"}
      </p>
    </>
  );
};

export default TextWithCopyPattern;
