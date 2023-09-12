import Clock from "@/components/Clock/Clock";
import Image from "next/image";
import wtyczkaLogo from "../../public/wtyczkaLogo/wtyczka-logo.png";

export default function Home() {
  return (
    <main className="flex flex-wrap items-center justify-around h-full gap-8 px-10">
      <section className="flex flex-col items-center justify-center gap-4">
        <Image
          src={wtyczkaLogo}
          alt="wtyczka Logo"
          priority={true}
          className="max-w-xs vsm:max-w-xl"
        />
        <h2 className="capitalize font-semibold tracking-wide text-lg">
          training and integration trip
        </h2>
        <div className="flex flex-wrap gap-4 items-center justify-center">
          <button className="button-round button-filled">Sign up</button>
          <button className="button-round button-outlined">
            Find out more
          </button>
        </div>
      </section>
      <section className="py-8">
        <Clock />
      </section>
    </main>
  );
}
