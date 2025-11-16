import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--background)] px-4 py-12 text-[var(--foreground)] sm:px-6">
      <div className="napier-panel napier-panel-grand w-full max-w-5xl space-y-8 text-left shadow-rod-float">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center justify-center gap-6">
            <Image src="/logo-napier.svg" alt="Rabdos AI logo" width={138} height={138} priority />
            <h1 className="font-display text-6xl uppercase tracking-[0.4em] sm:text-[4rem]">rabdos ai</h1>
          </div>
          <p className="font-mono text-[0.95rem] uppercase tracking-[0.4em] text-[var(--accent)]/80">Frontier math problem creation</p>
        </div>
        <div className="space-y-5 text-center text-[1.35rem] leading-[1.8] text-[var(--foreground)]/85">
          <p>Rabdos AI creates advanced math datasets at scale for training and benchmarking LLMs.</p>
          <div className="mx-auto max-w-2xl rounded border border-[var(--line)] bg-white/60 p-5 text-left shadow-sm">
            <p className="font-mono text-[0.95rem] uppercase tracking-[0.35em] text-[var(--accent)]/80">Our problems are</p>
            <ul className="mt-4 space-y-3">
              <li>&bull; More challenging than Putnam and IMO.</li>
              <li>&bull; Tunable to any desired difficulty.</li>
            </ul>
            <div className="mt-3 text-right">
              <Link href="/sample-problems" className="inline-flex items-center gap-3 text-[1.05rem] font-mono uppercase tracking-[0.35em] text-[var(--accent)] underline">
                see samples
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link href="/team" className="link-analog inline-flex text-[1.25rem] leading-relaxed text-[var(--foreground)]/85 underline decoration-dotted underline-offset-4">
            Meet the team: UPenn Math & CS faculty, postdoc, PhD student.
          </Link>
        </div>
        <div className="text-center">
          <a href="mailto:admin@rabdos.ai" className="link-analog inline-flex text-[1.25rem] leading-relaxed text-[var(--foreground)]/85 underline decoration-dotted underline-offset-4">
            Contact us at admin@rabdos.ai
          </a>
        </div>
        <blockquote className="border-l-2 border-[var(--line)] pl-4 text-[1.1rem] leading-relaxed italic text-[var(--foreground)]/80">
          “Rabdos” is Greek for “rod,” referencing Napier&apos;s rods&mdash;handcrafted tools that supercharged calculation.
        </blockquote>
      </div>
    </main>
  );
}
