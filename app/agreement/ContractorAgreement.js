"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

function ProposalButton() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.push("/proposal")}
      aria-label="Go to Contractor Proposal"
      style={{
        background: "#e7f099",
        color: "#111",
        fontWeight: 700,
        border: 0,
        borderRadius: 8,
        padding: "10px 16px",
        fontSize: 16,
        cursor: "pointer",
        marginRight: 12,
        marginBottom: 8,
        display: "inline-block",
        minWidth: 140,
      }}
      className="proposal-btn"
    >
      ← Back to Proposal
    </button>
  );
}

export default function ContractorAgreement() {
  const [authenticated, setAuthenticated] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef(null);
  const PASSWORD = "SoldThrough2025";

  const agreementText = [
    {
      id: 1,
      client: "SoldThrough",
      clientAddress: "Austin, Texas, USA",
      clientBusinessType: "3PL fulfillment and marketplace management",
    },
    {
      id: 2,
      contractor: "Evan Marshall",
      contractorBusinessName: "evanmarshall.dev",
      contractorAddress: "Kentville, Nova Scotia, Canada",
      contractorBusinessType:
        "web design, development, maintenance, brand development, consulting, and professional online services",
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (
        window.sessionStorage.getItem("soldthrough-authenticated") === "true"
      ) {
        setAuthenticated(true);
      } else if (!authenticated && inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, [authenticated]);

  function handleSubmit(e) {
    e.preventDefault();
    if (input === PASSWORD) {
      setAuthenticated(true);
      setError("");
      if (typeof window !== "undefined") {
        window.sessionStorage.setItem("soldthrough-authenticated", "true");
      }
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
          className="no-print"
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
              color: "#1f2233",
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
              Protected Agreement
            </h2>
            <label
              htmlFor="agreement-password"
              style={{ fontWeight: 600, fontSize: 16 }}
            >
              Enter password to view:
            </label>
            <input
              id="agreement-password"
              ref={inputRef}
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              aria-required="true"
              aria-invalid={!!error}
              aria-describedby={error ? "agreement-password-error" : undefined}
              style={{
                padding: 10,
                borderRadius: 6,
                border: error ? "2px solid #e86a24" : "1px solid #bbb",
                fontSize: 16,
                color: "#1f2233",
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
                id="agreement-password-error"
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
        <article className="mx-auto max-w-3xl p-6 text-sm leading-6">
          {/* ...existing code... */}
          <header className="mb-6">
            <h1 className="text-2xl font-semibold">
              INDEPENDENT CONTRACTOR AGREEMENT
            </h1>
            <p className="mt-2">
              BETWEEN:{" "}
              <strong>
                {agreementText[0].client}, {agreementText[0].clientAddress}
              </strong>{" "}
              (the &#34;Company&#34;)
            </p>
            <p className="mt-2">
              and{" "}
              <strong>
                {agreementText[1].contractor} carrying on business as{" "}
                {agreementText[1].contractorBusinessName},{" "}
                {agreementText[1].contractorAddress}
              </strong>{" "}
              (the &#34;Contractor&#34;)
            </p>
          </header>

          <section className="space-y-4">
            {/* ...existing code... */}
            <p>
              WHEREAS the Contractor is engaged in the business of providing{" "}
              {agreementText[1].contractorBusinessType} to business enterprises.
            </p>
            <p>
              AND WHEREAS the Company is in the business of{" "}
              {agreementText[0].clientBusinessType}.
            </p>
            <p>
              AND WHEREAS the parties desire to enter into this Independent
              Contractor Agreement to set forth their mutual covenants and
              agreements as to the services to be provided by the Contractor to
              the Company and the consideration to be paid.
            </p>

            <h2 className="text-lg font-semibold mt-6">
              1. Contracting Agreement
            </h2>
            <p>
              The parties acknowledge and agree that this Agreement is not
              intended to make the Contractor an employee of the Company for any
              purpose. The Contractor is engaged solely as an independent
              contractor.
            </p>

            <h2 className="text-lg font-semibold mt-6">2. Term</h2>
            <p>
              The Agreement shall commence on <em>Date</em> (the &#34;Effective
              Date&#34;) and continue unless and until terminated under{" "}
              <a href="apx-10">Article 10</a>.
            </p>

            <h2 className="text-lg font-semibold mt-6">
              3. Provision of Services
            </h2>
            <p>
              The Contractor shall be engaged to provide the services set forth
              in Appendix A (the &#34;Services&#34;) and shall faithfully,
              honestly and diligently perform the Services, act in good faith in
              the best interests of the Company, observe lawful orders, and
              provide periodic reports as required.
            </p>

            <h2 className="text-lg font-semibold mt-6">
              4. Compensation for Services
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Service Fee option: milestones and monthly maintenance as
                described here [edit amounts and milestone language].
              </li>
              <li>Alternative option: fixed monthly fee payable in arrears.</li>
              <li>
                Out of scope services billed at an hourly rate payable in
                arrears.
              </li>
              <li>
                Invoices submitted within 14 days of payment dates and payable
                within 10 days from receipt. Late payment fee of 5 percent per
                month.
              </li>
            </ul>

            <h2 className="text-lg font-semibold mt-6">
              5. Authority and Liability
            </h2>
            <p>
              No authority to bind the Company without prior written consent.
              Company is not responsible for statutory withholdings for the
              Contractor. Except as otherwise agreed, Contractor liability is
              limited as described here.
            </p>

            <h2 className="text-lg font-semibold mt-6">
              6. Indemnity and Expenses
            </h2>
            <p>
              Company indemnifies Contractor in specified circumstances. Company
              reimburses agreed reasonable expenses [insert details].
            </p>

            <h2 className="text-lg font-semibold mt-6">
              7. Quantum and Timing of Services
            </h2>
            <p>
              No guaranteed volume. Work is completed per stated timelines or as
              mutually agreed.
            </p>

            <h2 className="text-lg font-semibold mt-6">
              8. Deficiencies in Performance
            </h2>
            <p>
              If services are not satisfactory or timely, Company may require
              remedy withholdings or terminate.
            </p>

            <h2 className="text-lg font-semibold mt-6">
              9. Confidential Information
            </h2>
            <p>
              Definition, obligations, return of materials, loss or disclosure
              reporting, and related Company undertakings apply as described.
            </p>

            <h2 className="text-lg font-semibold mt-6">
              10. Intellectual Property
            </h2>
            <p>
              Definitions of Intellectual Property Rights, Technologies and
              Works, Work Product, and Background IP. Work Product assigned to
              Company. Moral rights waived to the extent permitted by law.
              Background IP remains property of Contractor with Company usage
              rights for the Services.
            </p>

            <h2 className="text-lg font-semibold mt-6">11. Termination</h2>
            <p>
              Termination by notice, for material breach, expiration upon
              project completion, and obligations on termination.
            </p>

            <h2 className="text-lg font-semibold mt-6">12. Notices</h2>
            <p>
              Notices by personal delivery, registered mail or courier, with
              copy by email, to the addresses on page 1. Timing rules apply.
            </p>

            <h2 className="text-lg font-semibold mt-6">13. Survival</h2>
            <p>Covenants and provisions survive termination as set out here.</p>

            <h2 className="text-lg font-semibold mt-6">
              14. No Binding Authority
            </h2>
            <p>
              Contractor has no authority to enter into contracts on behalf of
              the Company without prior written consent.
            </p>

            <h2 className="text-lg font-semibold mt-6">15. Entire Agreement</h2>
            <p>
              This Agreement including appendices is the entire agreement and
              supersedes prior discussions. Modifications must be in writing.
              Assignment by Company requires Contractor consent.
            </p>

            <h2 className="text-lg font-semibold mt-6">16. General</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Independent legal advice opportunity and voluntariness</li>
              <li>Governing law: Province of Nova Scotia and Canada</li>
              <li>Severability</li>
              <li>Counterparts</li>
            </ul>

            <h2 className="text-lg font-semibold mt-6">
              Appendix A - Description of Services
            </h2>
            <p>
              [Insert description of services provided to client as appropriate.
              Project and monthly services.]
            </p>
          </section>

          <SignatureSection />
          <div
            className="no-print"
            style={{ marginTop: 32, textAlign: "center" }}
          ></div>
          <style jsx global>{`
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
              article {
                box-shadow: none !important;
                border-radius: 0 !important;
                background: white !important;
                color: #111 !important;
                padding: 0 !important;
                max-width: 880px !important;
                width: 100% !important;
                margin: 18mm auto !important;
              }
              header {
                border-radius: 0 !important;
                background: #fff !important;
                margin-bottom: 0 !important;
                padding: 0 !important;
                page-break-after: avoid !important;
              }
              section,
              fieldset {
                box-shadow: none !important;
                border-radius: 0 !important;
                border-color: #ddd !important;
                background: white !important;
                page-break-inside: avoid;
                margin: 0 !important;
                padding: 0 !important;
              }
              form,
              .signature-form,
              button,
              .signature-actions {
                display: none !important;
              }
              a {
                color: #111 !important;
                text-decoration: underline !important;
              }
            }
            .proposal-btn {
              background: #e7f099;
              color: #111;
              font-weight: 700;
              border: 0;
              border-radius: 8px;
              padding: 10px 16px;
              font-size: 16px;
              cursor: pointer;
              margin-right: 12px;
              margin-bottom: 8px;
              display: inline-block;
              min-width: 140px;
              transition: background 0.15s;
            }
            .proposal-btn:focus {
              outline: 2px solid #1f2233;
              outline-offset: 2px;
            }
            .signature-actions {
              display: flex;
              flex-wrap: wrap;
              gap: 10px;
            }
            @media (max-width: 600px) {
              .proposal-btn {
                width: 100%;
                min-width: 0;
                margin-right: 0;
              }
              .signature-actions {
                flex-direction: column;
                gap: 8px;
              }
            }
          `}</style>
        </article>
      )}
    </>
  );
}

/** SignatureSection renders two independent signature blocks and handles submission */

function SignatureSection() {
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  // Hardcoded contractor info from agreementText
  const contractorName = "Evan Marshall";
  const contractorTitle = "Owner, evanmarshall.dev";
  const contractorDate = new Date().toISOString().slice(0, 10); // YYYY-MM-DD

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);

      // Pull canvas data URIs
      const contractorSig = formData.get("contractorSignatureData");
      const companySig = formData.get("companySignatureData");

      // Example payload
      const payload = {
        contractor: {
          name: contractorName,
          title: contractorTitle,
          date: contractorDate,
          signaturePngDataUrl: contractorSig,
        },
        company: {
          name: formData.get("companyName"),
          title: formData.get("companyTitle"),
          date: formData.get("companyDate"),
          signaturePngDataUrl: companySig,
        },
      };

      // TODO: replace with your API route
      console.log("Signature payload ready:", payload);
      alert("Signatures captured. Check console or send to your API.");
      setTimeout(() => {
        router.push("/cart");
      }, 100);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="mt-12 border-t pt-8">
      <h2 className="text-lg font-semibold">Signed and Executed</h2>
      <p className="text-neutral-700 mb-6">Dated this {contractorDate}.</p>

      <form onSubmit={handleSubmit} className="space-y-10">
        {/* Contractor block: no signature, hard-coded name */}
        <fieldset className="border rounded-md p-4">
          <legend className="px-2 text-sm font-medium">
            For the Contractor
          </legend>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Name</label>
              <span
                className="rounded-md border px-3 py-2 text-sm bg-neutral-50"
                style={{
                  minHeight: 38,
                  display: "flex",
                  alignItems: "center",
                  color: "#1f2233",
                }}
              >
                {contractorName}
              </span>
            </div>
            <TextField
              id="contractorTitle"
              name="contractorTitle"
              label="Title"
              ariaLabel="Contractor title"
              value={contractorTitle}
              readOnly={true}
            />
            <TextField
              id="contractorDate"
              name="contractorDate"
              type="date"
              label="Date"
              required
              ariaLabel="Contractor date"
              value={contractorDate}
              readOnly={true}
            />
          </div>
        </fieldset>
        {/* Company block: signature and hard-coded date */}
        <SignatureBlock
          legend="For the Company"
          baseName="company"
          ariaLabelPrefix="Company"
          dateValue={contractorDate}
        />

        <div
          className="pt-2 signature-actions"
          style={{ display: "flex", flexWrap: "wrap", gap: 10 }}
        >
          <ProposalButton />
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-neutral-50 disabled:opacity-50"
            style={{ minWidth: 140 }}
          >
            {submitting ? "Saving..." : "Proceed to Payment"}
          </button>
        </div>
      </form>
    </section>
  );
}

/** A reusable signature block with Name, Title, Date, and a canvas signature pad */
function SignatureBlock({
  legend,
  baseName,
  ariaLabelPrefix,
  nameValue,
  titleValue,
  dateValue,
  readOnlyFields,
}) {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);
  const hiddenInputRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    ctx.lineWidth = 2;
    ctx.lineCap = "round";

    const getPos = (evt) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = "touches" in evt ? evt.touches[0].clientX : evt.clientX;
      const clientY = "touches" in evt ? evt.touches[0].clientY : evt.clientY;
      return { x: clientX - rect.left, y: clientY - rect.top };
    };

    const start = (evt) => {
      setIsDrawing(true);
      setHasDrawn(true);
      const { x, y } = getPos(evt);
      ctx.beginPath();
      ctx.moveTo(x, y);
      evt.preventDefault();
    };

    const move = (evt) => {
      if (!isDrawing) return;
      const { x, y } = getPos(evt);
      ctx.lineTo(x, y);
      ctx.stroke();
      evt.preventDefault();
    };

    const end = () => {
      setIsDrawing(false);
      // Update hidden input with latest PNG data
      if (hiddenInputRef.current) {
        hiddenInputRef.current.value = canvas.toDataURL("image/png");
      }
    };

    canvas.addEventListener("mousedown", start);
    canvas.addEventListener("mousemove", move);
    window.addEventListener("mouseup", end);

    canvas.addEventListener("touchstart", start, { passive: false });
    canvas.addEventListener("touchmove", move, { passive: false });
    window.addEventListener("touchend", end);

    // Initialize blank white background to avoid transparent PNGs if desired
    const initBg = () => {
      const { width, height } = canvas;
      const img = canvas.getContext("2d");
      img.fillStyle = "#ffffff";
      img.fillRect(0, 0, width, height);
    };
    initBg();

    return () => {
      canvas.removeEventListener("mousedown", start);
      canvas.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", end);

      canvas.removeEventListener("touchstart", start);
      canvas.removeEventListener("touchmove", move);
      window.removeEventListener("touchend", end);
    };
  }, [isDrawing]);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Refill white background
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    setHasDrawn(false);
    if (hiddenInputRef.current) hiddenInputRef.current.value = "";
  };

  // Only render signature field for company (not contractor)
  return (
    <fieldset className="border rounded-md p-4">
      <legend className="px-2 text-sm font-medium">{legend}</legend>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <TextField
          id={`${baseName}Name`}
          name={`${baseName}Name`}
          label="Name"
          required
          ariaLabel={`${ariaLabelPrefix} name`}
          value={nameValue}
          readOnly={readOnlyFields}
        />
        <TextField
          id={`${baseName}Title`}
          name={`${baseName}Title`}
          label="Title"
          ariaLabel={`${ariaLabelPrefix} title`}
          value={titleValue}
          readOnly={readOnlyFields}
        />
        <TextField
          id={`${baseName}Date`}
          name={`${baseName}Date`}
          type="date"
          label="Date"
          required
          ariaLabel={`${ariaLabelPrefix} date`}
          value={dateValue}
          readOnly={readOnlyFields}
        />
      </div>

      {/* Only show signature for company */}
      {baseName === "company" && (
        <div className="mt-4">
          <label
            htmlFor={`${baseName}Signature`}
            className="block text-sm font-medium mb-2"
          >
            Signature
          </label>
          <div className="rounded-md border bg-white">
            <canvas
              ref={canvasRef}
              id={`${baseName}Signature`}
              aria-label={`${ariaLabelPrefix} signature canvas`}
              width={700}
              height={180}
              className="w-full h-44 touch-none"
              role="img"
            />
          </div>
          <input
            type="hidden"
            name={`${baseName}SignatureData`}
            ref={hiddenInputRef}
            aria-hidden="true"
          />
          <div className="mt-2 flex items-center gap-3">
            <button
              type="button"
              onClick={clearCanvas}
              className="rounded-md border px-3 py-1.5 text-sm hover:bg-neutral-50"
              aria-label={`Clear ${ariaLabelPrefix} signature`}
            >
              Clear
            </button>
            <span className="text-xs text-neutral-600">
              {hasDrawn ? "Signature captured" : "Sign using mouse or touch"}
            </span>
          </div>
          <p className="mt-2 text-xs text-neutral-600">
            By signing, the signer affirms: I have the authority to bind the{" "}
            {ariaLabelPrefix}.
          </p>
        </div>
      )}
    </fieldset>
  );
}

function TextField({
  id,
  name,
  label,
  type = "text",
  required = false,
  ariaLabel,
  value,
  readOnly = false,
}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-sm font-medium mb-1">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        aria-label={ariaLabel}
        className="rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-neutral-800"
        value={value}
        readOnly={readOnly}
        style={{
          color: "#1f2233",
          background: readOnly ? "#f8fafc" : undefined,
        }}
      />
    </div>
  );
}
