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
    <main className="flex min-h-screen items-center justify-center bg-[var(--background)] px-4 py-10 text-[var(--foreground)] sm:px-6 sm:py-12">
      <div className="napier-panel mx-auto flex max-w-5xl flex-col gap-6 shadow-rod-float sm:gap-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between">
          <h1 className="text-2xl font-display uppercase tracking-[0.2em] sm:text-3xl sm:tracking-[0.4em]">Sample Problems</h1>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-nowrap sm:items-center">
            <a href="/rabdos-ai-sample-problems.pdf" className="button-analog">
              <span aria-hidden="true">⬇︎</span>
              PDF
            </a>
            <Link href="/" className="button-analog">
              home
            </Link>
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
          <aside className="space-y-3">
            {featured.map((problem) => (
              <button
                key={problem.id}
                onClick={() => setActiveId(problem.id)}
                className={`w-full border px-3 py-3 text-left font-display text-base uppercase tracking-[0.12em] sm:px-4 sm:text-lg sm:tracking-[0.2em] ${
                  problem.id === activeId ? "border-[var(--accent)] bg-[var(--accent)]/10" : "border-[var(--line)] bg-transparent"
                }`}
              >
                {problem.domain}
              </button>
            ))}
          </aside>
          <section className="min-w-0 space-y-4">
            <div className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-[var(--accent)]/80 sm:text-xs sm:tracking-[0.3em]">{activeProblem?.domain}</div>
            <div key={activeProblem?.id} className="problem-panel problem-typography rounded border border-[var(--line)] bg-white/85 p-4 text-[0.95rem] leading-relaxed sm:text-base">
              <ReactMarkdown
                remarkPlugins={[remarkMath]}
                rehypePlugins={[rehypeKatex]}
                components={{
                  p: ({ node, ...props }) => <p className="mb-4 leading-relaxed" {...props} />,
                }}
              >
                {activeProblem?.prompt ?? ""}
              </ReactMarkdown>
            </div>
            <div key={`answer-${activeProblem?.id}`} className="problem-panel rounded border border-[var(--line)] bg-white/65 p-4 text-xs font-mono uppercase tracking-[0.18em] sm:text-sm sm:tracking-[0.3em]">
              <span className="text-[var(--accent)]">Answer:</span> <span className="text-[var(--foreground)]">{activeProblem?.answer}</span>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
