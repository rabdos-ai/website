import Link from "next/link";

const team = [
  {
    name: "Robert Ghrist",
    title: "Co-CEO",
    url: "https://www2.math.upenn.edu/~ghrist/",
    email: "robert@rabdos.ai",
  },
  {
    name: "Mayur Naik",
    title: "Co-CEO",
    url: "https://www.cis.upenn.edu/~mhnaik/",
    email: "mayur@rabdos.ai",
  },
  {
    name: "Oscar Xu",
    title: "CTO",
    url: "https://oscarxzq.github.io/",
    email: "oscar@rabdos.ai",
  },
  {
    name: "Shreya Arya",
    title: "CRO",
    url: "https://shreyaarya.github.io/minimal/",
    email: "shreya@rabdos.ai",
  },
];

export default function TeamPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--background)] px-6 py-12 text-[var(--foreground)]">
      <div className="napier-panel mx-auto flex w-full max-w-4xl flex-col gap-8 text-center shadow-rod-float">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-3xl font-display uppercase tracking-[0.4em]">Team & Contact</h1>
          <Link href="/" className="button-analog">
            home
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {team.map((person) => (
            <div key={person.email} className="border border-[var(--line)] bg-white/85 p-4 text-left">
              <a href={person.url} target="_blank" rel="noopener noreferrer" className="font-display text-xl link-analog">
                {person.name}
              </a>
              <p className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]/80">{person.title}</p>
              <a href={`mailto:${person.email}`} className="mt-2 block font-mono text-sm text-[var(--foreground)] link-analog">
                {person.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
