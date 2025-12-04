import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--background)] px-4 py-12 text-[var(--foreground)] sm:px-6">
      <div className="napier-panel napier-panel-grand w-full max-w-5xl space-y-8 text-left">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="flex flex-col items-center justify-center gap-4"><Image src="/logos/TITLE-7x3.svg" alt="Rabdos AI logo" width={280} height={120} className="sm:h-auto sm:w-[400px]" priority />
          </div>
          <p className="font-mono text-[0.9rem] uppercase tracking-[0.5em] text-[var(--accent)]/80 sm:text-[0.95rem] sm:tracking-[0.4em]">FRONTIER MATHEMATICAL PROBLEM CREATION</p>
        </div>
        <div className="space-y-5 text-center text-base leading-[1.8] text-[var(--foreground)]/85 sm:text-[1.35rem]">
          <p>Rabdos AI forges advanced mathematics datasets at scale for LLMs</p>
          <div className="mx-auto max-w-2xl rounded border border-[var(--line)] bg-[var(--background)]/40 p-5 text-left shadow-sm">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-[var(--accent)]/80 sm:text-[0.95rem] sm:tracking-[0.35em]">Our problems are</p>
            <ul className="mt-2 space-y-2 text-base sm:text-lg">
              <li>◣ Cross-disciplinary from all areas of Mathematics</li>
              <li>◣ More challenging than Putnam / IMO</li>
              <li>◣ Tunable to desired difficulty / abstraction levels</li>
              <li>◣ Customizable for training / benchmarking</li>
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
            Meet the team: recognized academic leaders in Mathematics and Computer Science
          </Link>
        </div>

<div className="flex justify-center">
  <Image 
    src="/logos/ROD-wide-top.svg" 
    alt="" 
    width={600} 
    height={40} 
    className="w-[50%] max-w-xl border-[1px] border-[var(--foreground)]" 
  />
</div>

<div className="text-center">
  <a href="mailto:contact@rabdos.ai" className="link-analog inline-flex text-base leading-relaxed text-[var(--foreground)]/85 underline decoration-dotted underline-offset-4 sm:text-[1.25rem]">
    Contact us at contact@rabdos.ai
  </a>
</div>

<div className="flex justify-center">
  <Image 
    src="/logos/ROD-wide-bot.svg" 
    alt="" 
    width={600} 
    height={40} 
    className="w-[50%] max-w-xl border-[1px] border-[var(--foreground)]" 
  />
</div>        <blockquote className="border-l-2 border-[var(--line)] pl-4 text-sm leading-relaxed italic text-[var(--foreground)]/80 sm:text-[1.1rem]">
          &ldquo;Rabdos&rdquo; is Greek for &ldquo;rod,&rdquo; referencing Napier&apos;s rods&mdash;handcrafted tools that supercharged calculation.
        </blockquote>
      </div>
    </main>
  );
}
