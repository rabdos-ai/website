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
    <main className="min-h-screen bg-[var(--background)] px-6 py-12 text-[var(--foreground)]">
      <div className="napier-panel mx-auto flex max-w-5xl flex-col gap-8 p-6 shadow-rod-float">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-3xl font-display uppercase tracking-[0.4em]">Sample Problems</h1>
          <div className="flex items-center gap-3">
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
                className={`w-full border px-4 py-3 text-left font-display text-lg uppercase tracking-[0.2em] ${
                  problem.id === activeId ? "border-[var(--accent)] bg-[var(--accent)]/10" : "border-[var(--line)] bg-transparent"
                }`}
              >
                {problem.domain}
              </button>
            ))}
          </aside>
          <section className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-[0.3em] text-[var(--accent)]/80">{activeProblem?.domain}</div>
            <div key={activeProblem?.id} className="problem-panel problem-typography rounded border border-[var(--line)] bg-white/85 p-4 text-base leading-relaxed">
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
            <div key={`answer-${activeProblem?.id}`} className="problem-panel rounded border border-[var(--line)] bg-white/65 p-4 text-sm font-mono uppercase tracking-[0.3em]">
              <span className="text-[var(--accent)]">Answer:</span> <span className="text-[var(--foreground)]">{activeProblem?.answer}</span>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
