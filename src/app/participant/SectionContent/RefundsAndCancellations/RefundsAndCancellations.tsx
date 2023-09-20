import { useLanguageModeContext } from "@/contexts/LanguageModeContext";
import {
  RefundsAndCancellationsTextPL,
  RefundsAndCancellationsTextEN,
} from "../textContent";
import TextWithCopyPattern from "@/components/TextWithCopyPattern/TextWithCopyPattern";
import AnimateWrapper from "@/animations/AnimateWrapper";

const RefundsAndCancellations = () => {
  const { languageMode } = useLanguageModeContext();
  const usedLanguageText =
    languageMode === "polish"
      ? RefundsAndCancellationsTextPL
      : RefundsAndCancellationsTextEN;
  return (
    <section className="text-xl text-left break-words tracking-wide w-full xl:text-center">
      <AnimateWrapper duration={1} delay={0.1} type="FadeInTop">
        <TextWithCopyPattern
          text={usedLanguageText.content}
          pattern="@"
          slideIndex={5}
        />
      </AnimateWrapper>
    </section>
  );
};

export default RefundsAndCancellations;
