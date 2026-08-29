"use client";

import { useEffect, useState } from "react";
import { HERO_JOBS, type HeroJobIcon } from "@/data/hero-jobs";

type PlayStep = 0 | 1 | 2 | 3;

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function JobIcon({ kind }: { kind: HeroJobIcon }) {
  switch (kind) {
    case "outbound":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="m4 11.2 16-7-6.8 16-2.1-6.6L4 11.2Zm7.1 2.4L20 4"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "research":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="10.5" cy="10.5" r="5.5" stroke="currentColor" strokeWidth="1.7" />
          <path d="m15 15 4.5 4.5" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "follow-up":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M5 6.5h14v9H9l-4 3v-12Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path d="m9 11 2 2 4-4" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "deal-desk":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 3.5 19 6v5.2c0 4.2-2.8 7.5-7 9.3-4.2-1.8-7-5.1-7-9.3V6l7-2.5Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path d="m8.8 11.8 2.1 2.1 4.4-4.5" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "pipeline":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4 18 9 13l3 3 7-8"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinejoin="round"
          />
          <path d="M14 8h5v5" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "renewal":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M19 8V4l-2 2a7.5 7.5 0 1 0 1.4 10.2"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M19 4h-4" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      );
    case "competitive":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.7" />
          <path
            d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3"
            stroke="currentColor"
            strokeWidth="1.7"
          />
        </svg>
      );
    case "chief-of-staff":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 4.5c.65 4.15 2.85 6.35 7 7-.4.07-.78.15-1.14.25-3.35.92-5.02 3.1-5.86 6.75-.84-3.65-2.51-5.83-5.86-6.75-.36-.1-.74-.18-1.14-.25 4.15-.65 6.35-2.85 7-7Z"
            fill="currentColor"
          />
        </svg>
      );
  }
}

function BackIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="m14.5 6-6 6 6 6" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function DesktopIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="4" y="5" width="16" height="11" rx="1.8" stroke="currentColor" strokeWidth="1.7" />
      <path d="M9 20h6M12 16v4" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function AttachIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="m4 11.2 16-7-6.8 16-2.1-6.6L4 11.2Zm7.1 2.4L20 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeroDemo() {
  const [active, setActive] = useState(0);
  const [step, setStep] = useState<PlayStep>(0);
  const job = HERO_JOBS[active] ?? HERO_JOBS[0];

  useEffect(() => {
    if (prefersReducedMotion()) {
      setStep(3);
      return;
    }

    let cancelled = false;
    let handle = 0;
    const waits: Record<PlayStep, number> = {
      0: 280,
      1: 860,
      2: 860,
      3: 3060,
    };

    const run = (next: PlayStep) => {
      if (cancelled) return;
      setStep(next);
      handle = window.setTimeout(() => {
        run(next === 3 ? 0 : ((next + 1) as PlayStep));
      }, waits[next]);
    };

    setStep(0);
    handle = window.setTimeout(() => run(1), waits[0]);

    return () => {
      cancelled = true;
      window.clearTimeout(handle);
    };
  }, [active]);

  function selectJob(index: number) {
    setActive(index);
    setStep(prefersReducedMotion() ? 3 : 0);
  }

  if (!job) return null;

  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Background agents for Softtek sellers</p>
        <h1>Agents that keep working after the meeting ends.</h1>
        <p className="hero-intro">
          Grok Bot can join a live review, prepare a sourced reply, or turn a
          delivery signal into a draft. The work starts it. Your team reviews
          before anything is sent.
        </p>
        <div className="hero-phone-jobs" aria-label="Choose a Grok Bot job">
          {HERO_JOBS.map((item, index) => {
            const on = index === active;
            return (
              <button
                key={item.name}
                className={on ? "is-active" : undefined}
                type="button"
                aria-pressed={on}
                onClick={() => selectJob(index)}
              >
                {on ? (
                  <span aria-hidden>
                    <JobIcon kind={item.icon} />
                  </span>
                ) : null}
                {item.name}
              </button>
            );
          })}
        </div>
      </div>

      <aside className="hero-bot-demo" aria-label="Live Grok Bot phone demo">
        <div className="hero-phone">
          <div className="hero-phone-notch" aria-hidden />
          <header className="hero-phone-header">
            <span className="hero-phone-back" aria-hidden>
              <BackIcon />
            </span>
            <span className="hero-phone-agent" aria-hidden>
              <JobIcon kind={job.icon} />
            </span>
            <p>
              <strong>{job.name} Agent</strong>
              <small>
                <span aria-hidden /> Working in the cloud
              </small>
            </p>
            <span className="hero-phone-desktop" aria-hidden>
              <DesktopIcon />
            </span>
          </header>
          <div className="hero-phone-thread">
            {step >= 1 ? (
              <article className="hero-phone-work">
                <p className="hero-phone-work-label">
                  <span aria-hidden />
                  NEW SIGNAL DETECTED
                </p>
                <p className="hero-phone-work-meta">
                  <span>Account</span>
                  {job.account}
                </p>
                <p className="hero-phone-work-meta">
                  <span>Signal</span>
                  {job.signal}
                </p>
                <p className="hero-phone-work-copy">{job.work}</p>
                <strong>{job.result}</strong>
              </article>
            ) : null}
            {step >= 2 ? (
              <p className="hero-phone-message is-user">{job.user}</p>
            ) : null}
            {step >= 3 ? (
              <p className="hero-phone-message is-bot">{job.bot}</p>
            ) : null}
          </div>
          <footer className="hero-phone-composer">
            <span aria-hidden>
              <AttachIcon />
            </span>
            <p>Message {job.name} Agent</p>
            <span aria-hidden>
              <SendIcon />
            </span>
          </footer>
        </div>
      </aside>
    </section>
  );
}
