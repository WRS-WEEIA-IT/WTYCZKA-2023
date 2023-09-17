import { createAnimateOnScroll } from "../../../animations/animateOnScroll";
import { m } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Controls from "../Controls/Controls";
import { navLinksPL, navLinksEN } from "../NavLinks";
import { useLanguageModeContext } from "@/contexts/LanguageModeContext";
import Link from "next/link";

const DesktopNavigation = ({ pathname }: { pathname: string }) => {
  const { languageMode } = useLanguageModeContext();
  return (
    <>
      <div className="flex gap-6 text-base">
        {(languageMode == "polish" ? navLinksPL : navLinksEN).map(
          (navLink, index) => (
            <m.div
              initial="visible"
              whileInView="visible"
              viewport={{ amount: 0.2, once: false }}
              variants={createAnimateOnScroll(0.1)}
              key={index}
            >
              <Link
                href={navLink.path}
                className={`hover:text-secondary-color transition-colors duration-300 ${
                  pathname === navLink.path ? "text-active-color" : "text-white"
                }`}
              >
                {navLink.title}
              </Link>
            </m.div>
          )
        )}
      </div>
      <div className="flex items-center justify-center gap-6">
        <Controls />
        <Link href="/participant">
          <button className="button-square button-filled flex gap-2 py-3 group">
            <span>{languageMode == "polish" ? "Zapisz się" : "Sign up"}</span>
            <ArrowRight className="group-hover:animate-spring-right" />
          </button>
        </Link>
      </div>
    </>
  );
};

export default DesktopNavigation;
