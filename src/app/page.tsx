"use client";
import Clock from "@/components/Clock/Clock";
import Image from "next/image";
import wtyczkaLogo from "../../public/wtyczkaLogo/wtyczka-logo.png";
import { useLanguageModeContext } from "@/contexts/LanguageModeContext";
import Link from "next/link";
import { checkoutMore } from "@/services/socialLinks";

export default function Home() {
  const { languageMode } = useLanguageModeContext();
  return (
    <main className="flex flex-wrap items-center justify-around gap-16 px-10 pb-8 overflow-y-scroll">
      <section className="flex flex-col items-center justify-center gap-6">
        <Image
          src={wtyczkaLogo}
          alt="wtyczka Logo"
          priority={true}
          className="min-w-full"
        />
        <h2 className="capitalize font-semibold tracking-wide text-xl text-center">
          {languageMode === "english"
            ? "training and integration trip"
            : "wyjazd integracyjno-szkoleniowy"}
        </h2>
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <Link href="/participant">
            <button className="button-round button-filled">
              {languageMode === "english" ? "Sign up" : "Zapisz się"}
            </button>
          </Link>
          <a href={checkoutMore} target="_blank">
            <button className="button-round button-outlined">
              {languageMode === "english"
                ? "Find out more"
                : "Dowiedz się więcej"}
            </button>
          </a>
        </div>
      </section>
      <section>
        <Clock />
      </section>
    </main>
  );
}
