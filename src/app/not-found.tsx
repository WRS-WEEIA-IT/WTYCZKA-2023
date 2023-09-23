import { useLanguageModeContext } from "@/contexts/LanguageModeContext";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  const { languageMode } = useLanguageModeContext();

  return (
    <div className="flex flex-col gap-4 justify-center items-center text-center h-4/5">
      <Image
        src="/not-found/not-found.svg"
        width={800}
        height={800}
        alt="Picture of the error"
      />
      <Link href="/">
        <button className="button-round button-filled">
          {languageMode == "english"
            ? "Go back to home site"
            : "Wróć na stronę główną"}
        </button>
      </Link>
    </div>
  );
}
