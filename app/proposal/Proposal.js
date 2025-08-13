"use client";

import React, { useRef, useState } from "react";

export default function Proposal() {
  const [authenticated, setAuthenticated] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef(null);
  const PASSWORD = "SoldThrough2025";

  // Focus input on mount
  React.useEffect(() => {
    if (!authenticated && inputRef.current) {
      inputRef.current.focus();
    }
  }, [authenticated]);

  function handleSubmit(e) {
    e.preventDefault();
    if (input === PASSWORD) {
      setAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
      setInput("");
      if (inputRef.current) inputRef.current.focus();
    }
  }

  return (
    <>
      {!authenticated ? (
        <div
          className="page no-print"
          style={{
            minHeight: 400,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <form
            onSubmit={handleSubmit}
            style={{
              width: "100%",
              maxWidth: 340,
              margin: "0 auto",
              background: "#fff",
              borderRadius: 12,
              boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
              padding: 32,
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
            aria-label="Password required"
          >
            <h2
              style={{
                margin: 0,
                fontWeight: 800,
                fontSize: 22,
                color: "#1f2233",
              }}
            >
              Protected Proposal
            </h2>
            <label
              htmlFor="proposal-password"
              style={{ fontWeight: 600, fontSize: 16 }}
            >
              Enter password to view:
            </label>
            <input
              id="proposal-password"
              ref={inputRef}
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              aria-required="true"
              aria-invalid={!!error}
              aria-describedby={error ? "proposal-password-error" : undefined}
              style={{
                padding: 10,
                borderRadius: 6,
                border: error ? "2px solid #e86a24" : "1px solid #bbb",
                fontSize: 16,
              }}
              autoComplete="current-password"
            />
            <button
              type="submit"
              style={{
                background: "#e7f099",
                color: "#111",
                fontWeight: 700,
                border: 0,
                borderRadius: 8,
                padding: "10px 0",
                fontSize: 16,
                cursor: "pointer",
              }}
            >
              Unlock
            </button>
            {error && (
              <div
                id="proposal-password-error"
                style={{ color: "#e86a24", fontWeight: 600, fontSize: 15 }}
                role="alert"
              >
                {error}
              </div>
            )}
            <div style={{ fontSize: 13, color: "#888", marginTop: 8 }}>
              This page is private. Please contact{" "}
              <a href="mailto:me@evanmarshall.dev">me@evanmarshall.dev</a> for
              access.
            </div>
          </form>
        </div>
      ) : (
        <div className="page">
          {/* Cover */}
          <header className="cover" role="banner">
            <div className="brand-bar" aria-label="evanmarshall.dev logo">
              <div className="brand-evan">
                evanmarshall<span className="brand-dot">.</span>
                <span className="brand-dev">dev</span>
              </div>
            </div>
            <div className="cover-content">
              <h1 className="title">
                Website Redesign/Build Proposal
                <br />
                <span style={{ fontWeight: 600, opacity: 0.95 }}>
                  SoldThrough
                </span>
              </h1>
              <div className="subtitle">
                Conversion-focused, scalable, easy to update
              </div>
            </div>
            <div className="meta">
              Prepared by Evan Marshall • August 12, 2025
            </div>
          </header>
          {/* Overview */}
          <section id="overview">
            <h2>1. Project Overview</h2>
            <p>
              SoldThrough provides turnkey fulfillment solutions for U.S.
              Marketplace, B2B, Direct-to-Consumer, and dropship expansion. This
              project delivers a complete redesign and rebuild focused on
              performance, clarity, and conversions, while enabling
              SoldThrough's non-technical team to update content in-house.
            </p>
          </section>
          {/* Objectives */}
          <section id="objectives" className="grid-2">
            <div>
              <h2>2. Objectives</h2>
              <ul>
                <li>
                  <b>Improve UX</b> with intuitive navigation and clear CTAs.
                </li>
                <li>
                  <b>Enhance brand presence</b> with modern visuals and
                  authority cues.
                </li>
                <li>
                  <b>Enable in-house updates</b> via Contentful headless CMS.
                </li>
                <li>
                  <b>Ensure scalability</b> using Next.js and modular content
                  models.
                </li>
                <li>
                  <b>Optimize for conversions</b> across key pages and contact
                  pathways.
                </li>
              </ul>
            </div>
            <div>
              <div className="callout">
                <p>
                  <b>Result:</b> A fast, credible, and flexible site that
                  attracts, educates, and converts prospective clients while
                  supporting ongoing growth.
                </p>
              </div>
            </div>
          </section>
          {/* Platform & Architecture */}
          <section id="platform">
            <h2>3. Platform & Architecture</h2>
            <div className="stack">
              <div className="chip">
                <b>Frontend</b> Next.js (React)
              </div>
              <div className="chip">
                <b>CMS</b> Contentful (Headless)
              </div>
              <div className="chip">
                <b>Hosting</b> Vercel (Global CDN)
              </div>
              <div className="chip">
                <b>Analytics</b> Google Analytics 4, optional Hotjar
              </div>
            </div>
            <p style={{ marginTop: 12 }}>
              This stack delivers speed, SEO strength, and future-ready
              flexibility. Staff can update pages, case studies, and resources
              without developer support.
            </p>
          </section>
          {/* Features */}
          <section id="features" className="grid-2">
            <div>
              <h2>4. Proposed Features</h2>
              <ul>
                <li>
                  Responsive design with a hero value proposition and primary
                  CTA.
                </li>
                <li>Service pages for Marketplace, B2B, D2C, and Dropship.</li>
                <li>Visual process flow diagram of the fulfillment journey.</li>
                <li>Testimonials and case studies to build trust.</li>
                <li>Blog/Insights section for content marketing.</li>
              </ul>
            </div>
            <div>
              <h2 style={{ visibility: "hidden" }}>.</h2>
              <ul>
                <li>
                  Contact and quote request forms (email-based submissions).
                </li>
                <li>Client resource center for guides and whitepapers.</li>
                <li>Accessibility (WCAG 2.1 AA) baked in.</li>
                <li>
                  Performance and SEO best practices, including structured data.
                </li>
              </ul>
            </div>
          </section>
          {/* Timeline */}
          <section id="timeline">
            <h2>5. Project Timeline</h2>
            <div className="table-container">
              <table
                className="table"
                role="table"
                aria-label="Project timeline"
              >
                <thead>
                  <tr>
                    <th>Phase</th>
                    <th>Deliverables</th>
                    <th style={{ textAlign: "center" }}>Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Discovery, Planning & Design</th>
                    <td>Sitemap, wireframes, mockups, content strategy</td>
                    <td className="duration-cell">
                      <span className="pill">4 weeks</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Development</th>
                    <td>
                      Next.js build, Contentful integration, responsive layout
                    </td>
                    <td className="duration-cell">
                      <span className="pill">4 weeks</span>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Testing, Optimization & Launch</th>
                    <td>
                      QA, performance testing, SEO checks, CMS training, go-live
                    </td>
                    <td className="duration-cell">
                      <span className="pill">2 weeks</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ marginTop: 10 }}>
              <b>Total Estimated Duration:</b> 8-10 weeks
            </p>
          </section>
          {/* Investment */}
          <section id="investment" className="grid-2">
            <div>
              <h2>6. Investment</h2>
              <p>
                Complete redesign and rebuild, Contentful CMS integration and
                training, initial SEO optimization, and one month of post-launch
                support.
              </p>
              <div className="price">$4,000 CAD</div>
            </div>
            <div>
              <h2 style={{ visibility: "hidden" }}>.</h2>
              <ul>
                <li>
                  Hosting, CMS, and third-party service fees billed separately
                  by providers.
                </li>
                <li>No CRM or marketplace API integrations in this phase.</li>
              </ul>
            </div>
          </section>
          {/* Future Updates */}
          <section id="future">
            <h2>7. Future Update Opportunities</h2>
            <ul>
              <li>CRM integration for automated lead tracking.</li>
              <li>Marketplace and industry API integrations.</li>
              <li>Multilingual capability for global expansion.</li>
              <li>Client dashboards for real-time tracking and reporting.</li>
            </ul>
          </section>
          {/* Next Steps */}
          <section id="next">
            <h2>8. Next Steps</h2>
            <div className="cta">
              <div>
                <p style={{ margin: "0 0 6px 0", fontWeight: 700 }}>
                  Ready to begin?
                </p>
                <p style={{ margin: 0, opacity: 0.9 }}>
                  Approve the proposal, sign the agreement with a 30% deposit,
                  and we'll schedule the kickoff.
                </p>
              </div>
              <button className="btn" type="button">
                Approve Proposal
              </button>
            </div>
          </section>
        </div>
      )}
      <style jsx global>{`
        :root {
          --primary-dark: oklch(0.2 0.034 265.48);
          --primary-light: oklch(0.69 0.0476 79.1);
          --general-light: oklch(0.97 0 0);
          --accent: oklch(0.68 0.2117 30.54);
          --primary-dark-hex: #1f2233;
          --primary-light-hex: #e7f099;
          --general-light-hex: #fafafa;
          --accent-hex: #e86a24;
          --page-max: 880px;
        }
        * {
          box-sizing: border-box;
        }
        html,
        body {
          margin: 0;
          padding: 0;
          font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto,
            "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji",
            "Segoe UI Emoji";
        }
        .page {
          max-width: var(--page-max);
          margin: 0 auto;
          padding: 24px;
          /* background: var(--general-light, var(--general-light-hex)); */
          color: #111;
          border-radius: 16px;
        }
        @media (max-width: 600px) {
          .page {
            padding: 10px;
          }
        }
        .cover {
          position: relative;
          min-height: 300px;
          height: 35vw;
          max-height: 420px;
          border-radius: 20px;
          overflow: hidden;
          background: radial-gradient(
              1200px 400px at -10% 110%,
              var(--primary-light, var(--primary-light-hex)) 0%,
              transparent 55%
            ),
            radial-gradient(
              800px 360px at 110% -10%,
              color-mix(in oklch, var(--accent), white 30%) 0%,
              transparent 60%
            ),
            linear-gradient(
              135deg,
              color-mix(in oklch, var(--primary-dark), white 15%),
              var(--primary-dark, var(--primary-dark-hex)) 60%
            );
        }
        .cover::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: linear-gradient(
              90deg,
              rgba(255, 255, 255, 0.06) 1px,
              transparent 1px
            ),
            linear-gradient(
              0deg,
              rgba(255, 255, 255, 0.06) 1px,
              transparent 1px
            );
          background-size: 28px 28px;
          opacity: 0.6;
          pointer-events: none;
        }
        .brand-bar {
          position: absolute;
          inset: 18px 18px auto 18px;
          display: inline-flex;
          align-items: baseline;
          gap: 4px;
        }
        .brand-evan {
          font-weight: 800;
          letter-spacing: 0.2px;
          font-size: 22px;
          color: var(--general-light, var(--general-light-hex));
        }
        .brand-dot {
          font-weight: 800;
          color: var(--accent, var(--accent-hex));
        }
        .brand-dev {
          font-weight: 800;
          color: var(--primary-light, var(--primary-light-hex));
        }
        .cover-content {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          text-align: center;
          padding: 40px;
        }
        @media (max-width: 600px) {
          .cover-content {
            padding: 16px;
          }
        }
        .title {
          color: var(--general-light, var(--general-light-hex));
          font-size: clamp(28px, 6vw, 44px);
          font-weight: 800;
          line-height: 1.15;
          text-shadow: 0 6px 24px rgba(0, 0, 0, 0.35);
        }
        .subtitle {
          margin-top: 10px;
          color: color-mix(in oklch, var(--general-light), black 10%);
          font-weight: 600;
          letter-spacing: 0.2px;
        }
        .meta {
          position: absolute;
          bottom: 18px;
          left: 18px;
          color: color-mix(in oklch, var(--general-light), black 20%);
          font: 600 12px/1 Roboto Mono, monospace;
          opacity: 0.9;
        }
        section {
          margin: 36px 0;
          padding: 28px;
          background: white;
          border: 1px solid rgba(31, 34, 51, 0.08);
          border-radius: 16px;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.04);
        }
        h2 {
          margin: 0 0 14px;
          font-size: 22px;
          font-weight: 800;
          color: var(--primary-dark, var(--primary-dark-hex));
        }
        p {
          margin: 10px 0 0;
          font-size: 16px;
          line-height: 1.65;
        }
        .callout {
          border-left: 6px solid var(--accent, var(--accent-hex));
          padding-left: 16px;
        }
        .grid-2 {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
        }
        @media (min-width: 820px) {
          .grid-2 {
            grid-template-columns: 1fr 1fr;
          }
        }
        ul {
          margin: 10px 0 0 18px;
          line-height: 1.7;
        }
        li {
          margin: 6px 0;
        }
        .stack {
          display: grid;
          gap: 8px;
        }
        .stack .chip {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 12px;
          border-radius: 999px;
          font-weight: 600;
          background: color-mix(in oklch, var(--primary-light), white 70%);
        }
        .chip b {
          font-weight: 800;
        }
        .table-container {
          width: 100%;
          overflow-x: auto;
        }
        .table {
          width: 100%;
          border-collapse: collapse;
          overflow: hidden;
          border-radius: 12px;
          border: 1px solid rgba(31, 34, 51, 0.08);
          min-width: 480px;
        }
        .table th {
          background: var(--primary-light, var(--primary-light-hex));
          color: #111;
          text-align: left;
          padding: 12px 14px;
          font-size: 14px;
        }
        .table td {
          padding: 12px 14px;
          border-top: 1px solid rgba(31, 34, 51, 0.08);
          font-size: 15px;
          vertical-align: middle;
        }
        .table td.duration-cell {
          text-align: center;
        }
        .pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 6px 16px;
          border-radius: 999px;
          background: color-mix(in oklch, var(--accent), white 75%);
          font-weight: 600;
          white-space: nowrap;
          font-size: 16px;
          min-width: 80px;
        }
        .price {
          display: inline-block;
          font-size: 28px;
          font-weight: 800;
          color: var(--accent, var(--accent-hex));
          margin: 8px 0 0;
        }
        .cta {
          background: var(--primary-dark, var(--primary-dark-hex));
          color: var(--general-light, var(--general-light-hex));
          padding: 18px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        @media (max-width: 600px) {
          .cta {
            gap: 8px;
            padding: 12px;
          }
          .cta > * {
            flex-basis: 100%;
            min-width: 0;
          }
        }
        .cta .btn {
          display: inline-block;
          padding: 10px 16px;
          border-radius: 10px;
          font-weight: 700;
          background: var(--primary-light, var(--primary-light-hex));
          color: #111;
          text-decoration: none;
        }
        .no-print {
          display: block;
        }
        @media print {
          body {
            background: white !important;
          }
          .no-print,
          .no-print * {
            display: none !important;
          }
          .page {
            box-shadow: none !important;
            border-radius: 0 !important;
            background: white !important;
            color: #111 !important;
            padding: 0 !important;
            max-width: unset !important;
            width: 100vw !important;
            margin: 0 !important;
          }
          section {
            box-shadow: none !important;
            border-radius: 0 !important;
            border-color: #ddd !important;
            background: white !important;
            page-break-inside: avoid;
          }
          .cover {
            height: 180px !important;
            min-height: 0 !important;
            border-radius: 0 !important;
            background: #e7f099 !important;
          }
          .cover::after {
            display: none !important;
          }
          .cta,
          .btn {
            display: none !important;
          }
          a {
            color: #111 !important;
            text-decoration: underline !important;
          }
          .table {
            min-width: 0 !important;
          }
        }
      `}</style>
    </>
  );
}
