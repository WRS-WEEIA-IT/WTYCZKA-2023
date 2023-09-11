import { createAnimateOnScroll } from "../../../animations/animateOnScroll";
import NavIcon from "@/customIcons/NavIcon/NavIcon";
import { m } from "framer-motion";
import Link from "next/link";
import Controls from "../Controls/Controls";
import { navLinksPL, navLinksEN } from "../NavLinks";
import { useContext, useState } from "react";
import useClickOutside from "@/hooks/useClickOutside";
import { LanguageModeContext } from "@/contexts/LanguageContext";

const MobileNavigation = () => {
  const { languageMode } = useContext(LanguageModeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setIsMenuOpen((prevValue) => !prevValue);
  };
  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };
  const menuRef = useClickOutside(handleMenuClose);

  return (
    <div ref={menuRef}>
      <div onClick={handleMenuToggle}>
        <NavIcon iconState={isMenuOpen} />
      </div>
      <div
        className={`absolute ${
          isMenuOpen ? "top-full" : "-top-60"
        } transition-all duration-500 bg-black w-screen flex items-center justify-center flex-col gap-4 py-4 origin-top -z-10 left-0 overflow-hidden`}
      >
        {(languageMode == "polish" ? navLinksPL : navLinksEN).map(
          (navLink, index) => (
            <m.div
              initial="visible"
              whileInView="visible"
              viewport={{ amount: 0.2, once: false }}
              variants={createAnimateOnScroll(0.1)}
              key={index}
              className="w-screen text-center hover:text-active-color"
            >
              <Link href={navLink.path} className="text-xl block">
                {navLink.title}
              </Link>
            </m.div>
          )
        )}
        <Controls />
      </div>
    </div>
  );
};

export default MobileNavigation;
