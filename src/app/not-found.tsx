import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center text-center h-4/5">
      <Image
        src="/not-found/page-not-found.svg"
        width={600}
        height={600}
        alt="Picture of the error"
      />
      <Link href="/">
        <button className="button-round button-filled">
          Go back to home site
        </button>
      </Link>
    </div>
  );
}
