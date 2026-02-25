import React, { useState } from "react";
import { business_name } from "../Genaral/secret";

// PrivacyPolicy.tsx
// Simplified Privacy Policy component in TypeScript — only mentions data collected from a single form.

type Section = {
  id: string;
  title: string;
  content: string;
};

interface Props {
  companyName?: string;
  effectiveDate?: string;
  showAccept?: boolean;
  onAccept?: () => void;
}

const PrivacyPolicy: React.FC<Props> = ({
  companyName = business_name,
  effectiveDate = "January 1, 2025",
  showAccept = false,
  onAccept = () => {},
}) => {
  const sections: Section[] = [
    {
      id: "intro",
      title: "Introduction",
      content: `Welcome to ${companyName}. This privacy policy explains how we handle the information you provide through our form.`,
    },
    {
      id: "data-we-collect",
      title: "Data We Collect",
      content:
        "We only collect the information that you voluntarily provide in our form (such as your name, email, or message). No other personal data is collected.",
    },
    {
      id: "how-we-use",
      title: "How We Use Your Data",
      content:
        "The data you submit is used solely to respond to your inquiry or request. We do not use this data for any other purpose.",
    },
    {
      id: "sharing",
      title: "Sharing & Third Parties",
      content:
        "We do not sell, rent, or share your information with third parties. Your data stays with us.",
    },
    {
      id: "security",
      title: "Security",
      content:
        "We use reasonable safeguards to keep your submitted information safe. However, no system is completely secure.",
    },
    {
      id: "contact",
      title: "Contact",
      content: `If you have questions, contact privacy@${companyName
        .replace(/\s+/g, "")
        .toLowerCase()}.com`,
    },
  ];

  const [open, setOpen] = useState<Record<string, boolean>>(() =>
    sections.reduce(
      (acc, s) => ({ ...acc, [s.id]: true }),
      {} as Record<string, boolean>,
    ),
  );

  function toggle(id: string) {
    setOpen((o) => ({ ...o, [id]: !o[id] }));
  }

  return (
    <article className="max-w-3xl mx-auto bg-white shadow-sm rounded-2xl p-6 md:p-10 my-6">
      <header className="mb-6">
        <h1 className="text-2xl md:text-3xl font-semibold">
          {companyName} — Privacy Policy
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Effective date: {effectiveDate}
        </p>
      </header>

      <section className="space-y-4">
        {sections.map((s) => (
          <div key={s.id} className="border rounded-lg p-4">
            <header className="flex items-start justify-between">
              <h3 className="text-lg font-medium">{s.title}</h3>
              <div className="ml-4">
                <button
                  onClick={() => toggle(s.id)}
                  className="text-sm px-3 py-1 rounded-md border"
                  aria-label={`Toggle ${s.title}`}
                >
                  {open[s.id] ? "Hide" : "Show"}
                </button>
              </div>
            </header>

            {open[s.id] && (
              <div className="mt-3 text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                {s.content}
              </div>
            )}
          </div>
        ))}
      </section>

      <footer className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="text-sm text-slate-500">
          <p>Last updated: {effectiveDate}</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 rounded-xl border hover:shadow-sm"
          >
            Print / Save as PDF
          </button>

          {showAccept && (
            <button
              onClick={onAccept}
              className="px-4 py-2 rounded-xl bg-slate-900 text-white hover:opacity-95"
            >
              Accept
            </button>
          )}
        </div>
      </footer>

      <style>{`
        @media print {
          body * { visibility: hidden; }
          article, article * { visibility: visible; }
          article { position: absolute; left: 0; top: 0; width: 100%; }
        }
      `}</style>
    </article>
  );
};

export default PrivacyPolicy;
