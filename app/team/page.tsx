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
    title: "",
    url: "https://oscarxzq.github.io/",
    email: "oscar@rabdos.ai",
  },
  {
    name: "Shreya Arya",
    title: "",
    url: "https://shreyaarya.github.io/minimal/",
    email: "shreya@rabdos.ai",
  },
];

export default function TeamPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--background)] px-6 py-12 text-[var(--foreground)]">
      <div className="napier-panel napier-panel-grand mx-auto flex w-full max-w-5xl flex-col gap-10 text-center shadow-rod-float">
        <div className="flex flex-col gap-4 text-center sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:text-left">
          <h1 className="font-display text-4xl uppercase tracking-[0.35em] sm:text-5xl sm:tracking-[0.45em]">Team & Contact</h1>
          <Link href="/" className="button-analog button-analog-lg self-center">
            home
          </Link>
        </div>
        <div className="grid gap-5 text-left text-lg leading-relaxed sm:grid-cols-2 sm:gap-6">
          {team.map((person) => (
            <div key={person.email} className="border border-[var(--line)] bg-white/85 p-5">
              <a href={person.url} target="_blank" rel="noopener noreferrer" className="link-analog font-display text-2xl">
                {person.name}
              </a>
              <p className="text-sm uppercase tracking-[0.28em] text-[var(--accent)]/80 sm:text-base sm:tracking-[0.35em]">{person.title}</p>
              <a href={`mailto:${person.email}`} className="mt-3 block font-mono text-base text-[var(--foreground)] link-analog">
                {person.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
