import { CompareTable } from "@/components/CompareTable";
import { HeroTelemetry } from "@/components/HeroTelemetry";
import { JobSection } from "@/components/JobSection";
import { QuoteWall } from "@/components/QuoteWall";
import { RosterChart } from "@/components/RosterChart";
import { SiteNav } from "@/components/SiteNav";
import { JOBS } from "@/data/jobs";

export default function HomePage() {
  return (
    <main id="top">
      <div className="hero-watercolor">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="hero-watercolor-image"
          src="/brand/watercolor-pad.png"
          alt=""
        />
        <SiteNav />
      </div>

      <div className="report">
        <div className="report-hero">
          <HeroTelemetry />
          <section className="hero">
            <div>
              <p className="eyebrow">Background agents for Softtek sellers</p>
              <h1>Agents that keep working after the meeting ends.</h1>
              <p className="hero-intro">
                Grok Bot can join a live review, prepare a sourced reply, or
                turn a delivery signal into a draft. The work starts it. Your
                team reviews before anything is sent.
              </p>
            </div>
          </section>

          <section className="usecase-framing">
            <p className="eyebrow">Three sample use cases</p>
            <h2>
              Grok Bot gives each Softtek seller and delivery lead a small
              fleet of agents. Each agent has its own computer and picks up work
              from a meeting, message, or account signal.
            </h2>
            <p>Three examples. Start with the workload Softtek wants to prove.</p>
          </section>

          <div className="metric-grid">
            {JOBS.map((job) => (
              <a
                key={job.id}
                className="metric-card"
                href={`#${job.id}`}
              >
                <div className="metric-card-top">
                  <p>Sample {String(job.number).padStart(2, "0")}</p>
                </div>
                <h2>{job.title}</h2>
                <p className="metric-trigger">Starts when {job.trigger.toLowerCase()}</p>
              </a>
            ))}
          </div>
        </div>

        <RosterChart />

        <div id="jobs">
          {JOBS.map((job) => (
            <JobSection key={job.id} job={job} />
          ))}
        </div>
      </div>

      <div className="orbit-break" aria-hidden>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/watercolor-orbit.png" alt="" />
      </div>

      <div className="report">
        <CompareTable />
        <QuoteWall />
      </div>

      <footer className="site-footer">
        <div>
          <p className="footer-title">Softtek x SpaceXAI</p>
          <p>Grok Bot for Softtek sellers and delivery leads</p>
        </div>
        <address className="footer-contact">
          <p>Softtek&apos;s Cursor contact</p>
          <strong>Madeline Ingleby</strong>
          <a href="mailto:madeline.ingleby@cursor.com">
            madeline.ingleby@cursor.com
          </a>
        </address>
      </footer>
    </main>
  );
}
