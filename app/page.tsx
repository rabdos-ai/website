import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-12 text-[var(--foreground)] sm:px-6">
      <div className="napier-panel napier-panel-grand w-full max-w-5xl space-y-8 text-left">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Image src="/logo-napier.svg" alt="Rabdos AI logo" width={80} height={80} className="sm:h-[138px] sm:w-[138px]" priority />
            <h1 className="font-display text-3xl uppercase tracking-[0.3em] sm:text-6xl sm:tracking-[0.4em]">rabdos ai</h1>
          </div>
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.3em] text-[var(--accent)]/80 sm:text-[0.95rem] sm:tracking-[0.4em]">Frontier math problem creation</p>
        </div>
        <div className="space-y-5 text-center text-base leading-[1.8] text-[var(--foreground)]/85 sm:text-[1.35rem]">
          <p>Rabdos AI creates advanced math datasets at scale for training and benchmarking LLMs.</p>
          <div className="mx-auto max-w-2xl rounded border border-[var(--line)] bg-[var(--background)]/40 p-5 text-left shadow-sm">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-[var(--accent)]/80 sm:text-[0.95rem] sm:tracking-[0.35em]">Our problems are</p>
            <ul className="mt-2 space-y-2 text-base sm:text-lg">
              <li>&bull; More challenging than Putnam and IMO.</li>
              <li>&bull; Tunable to any desired difficulty.</li>
            </ul>
            <div className="mt-3 text-right">
              <Link href="/sample-problems" className="inline-flex items-center gap-2 text-[0.85rem] font-mono uppercase tracking-[0.25em] text-[var(--accent)] underline sm:gap-3 sm:text-[1.05rem] sm:tracking-[0.35em]">
                see samples
                <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center">
          <Link href="/team" className="link-analog inline-flex text-base leading-relaxed text-[var(--foreground)]/85 underline decoration-dotted underline-offset-4 sm:text-[1.25rem]">
            Meet the team: UPenn Math & CS faculty, postdoc, PhD student.
          </Link>
        </div>
        <div className="text-center">
          <a href="mailto:admin@rabdos.ai" className="link-analog inline-flex text-base leading-relaxed text-[var(--foreground)]/85 underline decoration-dotted underline-offset-4 sm:text-[1.25rem]">
            Contact us at admin@rabdos.ai
          </a>
        </div>
        <blockquote className="border-l-2 border-[var(--line)] pl-4 text-sm leading-relaxed italic text-[var(--foreground)]/80 sm:text-[1.1rem]">
          &ldquo;Rabdos&rdquo; is Greek for &ldquo;rod,&rdquo; referencing Napier&apos;s rods&mdash;handcrafted tools that supercharged calculation.
        </blockquote>
      </div>
    </main>
  );
}
