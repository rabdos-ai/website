import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--background)] px-6 py-16 text-[var(--foreground)]">
      <div className="napier-panel flex w-full max-w-3xl flex-col items-center gap-10 text-center shadow-rod-float">
        <Image src="/logo-napier.svg" alt="Rabdos AI" width={120} height={120} priority />
        <h1 className="font-display text-6xl uppercase tracking-[0.5em]">rabdos-ai</h1>
        <p className="text-lg text-[var(--foreground)]/85">
          Rabdos AI creates elegant and challenging mathematical problems to advance frontier LLMs.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-mono uppercase tracking-[0.4em]">
          <Link href="/sample-problems" className="button-analog">
            <span aria-hidden="true">▸</span> sample problems
          </Link>
          <Link href="/team" className="button-analog">
            <span aria-hidden="true">◎</span> team & contact
          </Link>
        </div>
      </div>
    </main>
  );
}
