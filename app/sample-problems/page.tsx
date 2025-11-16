"use client";

import Link from "next/link";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import { sampleProblems } from "@/data/sampleProblems";

const featured = sampleProblems.slice(0, 5);

export default function SampleProblemsPage() {
  const [activeId, setActiveId] = useState(featured[0]?.id ?? 0);
  const activeProblem = featured.find((problem) => problem.id === activeId) ?? featured[0];

  return (
    <main className="flex min-h-screen items-start justify-center bg-[var(--background)] px-4 py-10 text-[var(--foreground)] sm:px-6 sm:py-12">
      <div className="napier-panel napier-panel-grand mx-auto flex w-full max-w-6xl flex-col gap-10 text-left shadow-rod-float sm:max-w-7xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <h1 className="text-3xl font-display uppercase tracking-[0.3em] sm:text-4xl sm:tracking-[0.45em]">Sample Problems</h1>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-nowrap sm:items-center sm:gap-4">
            <a href="/rabdos-ai-sample-problems.pdf" className="button-analog button-analog-lg">
              <span aria-hidden="true">⬇︎</span>
              PDF
            </a>
            <Link href="/" className="button-analog button-analog-lg">
              home
            </Link>
          </div>
        </div>
        <div className="grid gap-10 md:grid-cols-[0.6fr_1.4fr]">
          <aside className="space-y-4 text-sm sm:text-base">
            {featured.map((problem) => (
              <button
                key={problem.id}
                onClick={() => setActiveId(problem.id)}
                className={`w-full border px-4 py-4 text-left font-display text-lg uppercase tracking-[0.2em] sm:text-xl sm:tracking-[0.28em] ${
                  problem.id === activeId ? "border-[var(--accent)] bg-[var(--accent)]/10" : "border-[var(--line)] bg-transparent"
                }`}
              >
                {problem.domain}
              </button>
            ))}
          </aside>
          <section className="min-w-0 space-y-6 text-[1.05rem] leading-relaxed sm:text-lg sm:leading-8">
            <div className="text-[0.75rem] font-mono uppercase tracking-[0.28em] text-[var(--accent)]/80 sm:text-sm sm:tracking-[0.35em]">{activeProblem?.domain}</div>
            <div key={activeProblem?.id} className="problem-panel problem-typography rounded border border-[var(--line)] bg-white/85 p-5 text-base leading-relaxed sm:text-lg sm:leading-[1.9]">
              <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
                components={{
                  p: ({ node, ...props }) => <p className="mb-5 leading-relaxed" {...props} />,
                }}
              >
                {activeProblem?.prompt ?? ""}
              </ReactMarkdown>
            </div>
            <div key={`answer-${activeProblem?.id}`} className="problem-panel rounded border border-[var(--line)] bg-white/65 p-5 text-sm font-mono uppercase tracking-[0.24em] sm:text-base sm:tracking-[0.34em]">
              <span className="text-[var(--accent)]">Answer:</span> <span className="text-[var(--foreground)]">{activeProblem?.answer}</span>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
