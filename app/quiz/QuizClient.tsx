"use client";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { GoldButton } from "@/components/ui/GoldButton";
import { ScopeNote } from "@/components/ui/ScopeNote";
import { APPLY_URL, SITE } from "@/lib/constants";
import { track } from "@/lib/track";
import { getEntrySource } from "@/lib/attribution";
import { QUIZ_TITLE, QUIZ_SUBTITLE, QUIZ_DISCLAIMER, QUIZ_QUESTIONS, scoreQuiz, getResult, type ResultKey } from "@/lib/quiz-content";

type Stage = "intro" | "questions" | "gate" | "result";
type LeadStatus = "idle" | "loading" | "done" | "error";

const inputClass =
  "w-full rounded-xl border border-[#1c160e]/10 bg-[#f7f1e7] px-4 py-3 text-sm font-light text-[#1c160e] placeholder:text-[#1c160e]/30 transition-colors focus:border-[#c9a86c]/50 focus:outline-none focus:ring-2 focus:ring-[#c9a86c]/15";

export function QuizClient() {
  const [stage, setStage] = useState<Stage>("intro");
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [resultKey, setResultKey] = useState<ResultKey | null>(null);
  const [leadStatus, setLeadStatus] = useState<LeadStatus>("idle");
  const reduce = useReducedMotion();

  const total = QUIZ_QUESTIONS.length;
  const question = QUIZ_QUESTIONS[qIndex];

  function start() {
    setStage("questions");
    track("quiz_started");
  }

  function choose(optionIndex: number) {
    const next = [...answers, optionIndex];
    setAnswers(next);
    if (qIndex + 1 < total) {
      setQIndex(qIndex + 1);
    } else {
      setResultKey(scoreQuiz(next));
      setStage("gate");
    }
  }

  async function handleGateSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!resultKey) return;
    const fd = new FormData(e.currentTarget);
    const firstName = String(fd.get("firstName") || "").trim();
    const email = String(fd.get("email") || "").trim();
    setLeadStatus("loading");
    const result = getResult(resultKey);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "quiz",
          firstName,
          email,
          resultKey,
          resultName: result.name,
          autoSource: getEntrySource(),
        }),
      });
      const json = await res.json().catch(() => ({}));
      if ((res.ok && json.ok) || json.code === "unconfigured") {
        setLeadStatus("done");
        track("quiz_completed", { result: resultKey });
        setStage("result");
        return;
      }
      setLeadStatus("error");
    } catch {
      setLeadStatus("error");
    }
  }

  const result = resultKey ? getResult(resultKey) : null;

  return (
    <div className="min-h-screen bg-[#f7f1e7]">
      <Navbar />

      <div className="relative overflow-hidden bg-[#060606] px-6 pb-16 pt-36">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#c9a86c]/[0.06] blur-[140px]" />
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#c9a86c]/70">2-Minute Reflection</span>
          <h1
            className="mt-5 text-[clamp(2.4rem,5.5vw,4rem)] font-light leading-[1.05] text-white"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
          >
            {QUIZ_TITLE}
          </h1>
          <p className="mx-auto mt-5 max-w-md text-sm font-light leading-relaxed text-white/60">{QUIZ_SUBTITLE}</p>
        </div>
      </div>

      <div className="mx-auto max-w-xl px-6 py-16">
        <AnimatePresence mode="wait">
          {stage === "intro" && (
            <motion.div key="intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center">
              <p className="mb-8 text-base font-light leading-relaxed text-[#1c160e]/70">
                {total} quick questions. No right answers — just the ones that are actually true for
                you right now.
              </p>
              <button
                onClick={start}
                className="rounded-full bg-[#0b0a08] px-8 py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#1a1410]"
              >
                Start the reflection
              </button>
            </motion.div>
          )}

          {stage === "questions" && question && (
            <motion.div
              key={question.id}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
            >
              <div className="mb-8 flex items-center gap-3">
                <div className="h-1 flex-1 overflow-hidden rounded-full bg-[#1c160e]/10">
                  <div
                    className="h-full rounded-full bg-[#c9a86c] transition-all duration-500"
                    style={{ width: `${((qIndex + 1) / total) * 100}%` }}
                  />
                </div>
                <span className="shrink-0 text-xs font-light tabular-nums text-[#1c160e]/45">
                  {qIndex + 1} / {total}
                </span>
              </div>
              <h2
                className="mb-7 text-xl font-light leading-snug text-[#1c160e] md:text-2xl"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                {question.prompt}
              </h2>
              <div className="space-y-3">
                {question.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => choose(i)}
                    className="w-full rounded-xl border border-[#1c160e]/10 bg-white px-5 py-4 text-left text-sm font-light text-[#1c160e]/80 transition-colors hover:border-[#c9a86c]/50 hover:bg-[#c9a86c]/[0.04]"
                  >
                    {opt.text}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {stage === "gate" && (
            <motion.form
              key="gate"
              onSubmit={handleGateSubmit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-5 rounded-2xl border border-[#1c160e]/8 bg-white p-8 text-center"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#c9a86c]/80">Your result is ready</p>
              <h2 className="text-xl font-light text-[#1c160e]" style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}>
                Where should we send it?
              </h2>
              <div className="space-y-4 text-left">
                <input name="firstName" required placeholder="First name" autoComplete="given-name" className={inputClass} />
                <input name="email" type="email" required placeholder="Email" autoComplete="email" className={inputClass} />
              </div>
              {leadStatus === "error" && (
                <p className="text-xs text-red-600" role="alert">
                  Something went wrong. Please email {SITE.email} directly.
                </p>
              )}
              <button
                type="submit"
                disabled={leadStatus === "loading"}
                className="w-full rounded-full bg-[#0b0a08] py-4 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:bg-[#1a1410] disabled:opacity-50"
              >
                {leadStatus === "loading" ? "One moment…" : "Show me my result"}
              </button>
            </motion.form>
          )}

          {stage === "result" && result && (
            <motion.div key="result" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="text-center">
              <p className="mb-3 text-[10px] uppercase tracking-[0.3em] text-[#c9a86c]/80">{result.whatItCovers}</p>
              <h2
                className="mb-2 text-3xl font-light text-[#1c160e] md:text-4xl"
                style={{ fontFamily: "var(--font-fraunces), Georgia, serif" }}
              >
                {result.name}
              </h2>
              <p className="mb-8 text-base font-light italic text-[#1c160e]/60">{result.resultPageHeadline}</p>

              <div className="mb-8 space-y-4 text-left">
                {result.resultPageBody.map((p, i) => (
                  <p key={i} className="text-base font-light leading-relaxed text-[#1c160e]/75">
                    {p}
                  </p>
                ))}
              </div>

              <div className="mb-8 rounded-xl border border-[#c9a86c]/20 bg-[#c9a86c]/[0.05] p-6 text-left">
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#a8884e]">Sit with this</p>
                <p className="mt-2 text-base font-light italic text-[#1c160e]/80">{result.reflectionPrompt}</p>
              </div>

              <p className="mb-8 text-base font-light leading-relaxed text-[#1c160e]/75">{result.ctaText}</p>

              <div className="mb-8 flex justify-center">
                <GoldButton href={APPLY_URL} external={false}>Apply for the 90-Day Private Mentorship</GoldButton>
              </div>

              <ScopeNote tone="cream" />
              <p className="mt-6 text-xs font-light text-[#1c160e]/40">{QUIZ_DISCLAIMER}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
}
