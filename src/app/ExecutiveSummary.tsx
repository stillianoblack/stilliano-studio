import styles from "./page.module.css";
import {
  executiveSummaryBySlug,
  type ExecutiveSummaryData,
  type ExecutiveSummarySlug,
  type ExecutiveSummaryTeam,
} from "@/data/executive-summary-content";

type ExecutiveSummaryProps = {
  slug: ExecutiveSummarySlug;
  data?: ExecutiveSummaryData;
};

function TeamValue({ team }: { team: ExecutiveSummaryTeam }) {
  if (typeof team === "string") {
    return <p className="executive-summary-value">{team}</p>;
  }

  return (
    <div className="executive-summary-value-group">
      <p className="executive-summary-value">{team.intro}</p>
      <ul className="executive-summary-list">
        {team.members.map((member) => (
          <li key={member}>{member}</li>
        ))}
      </ul>
    </div>
  );
}

function SummaryBlock({
  label,
  children,
  fullWidth = false,
}: {
  label: string;
  children: React.ReactNode;
  fullWidth?: boolean;
}) {
  return (
    <div
      className={`executive-summary-block${
        fullWidth ? " executive-summary-block--full" : ""
      }`}
    >
      <p className="executive-summary-label">{label}</p>
      {children}
    </div>
  );
}

function BulletValue({ items }: { items: readonly string[] }) {
  return (
    <ul className="executive-summary-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function ExecutiveSummary({ slug, data }: ExecutiveSummaryProps) {
  const summary = data ?? executiveSummaryBySlug[slug];

  return (
    <section
      className="case-section executive-summary section-spacing"
      aria-labelledby={`${slug}-executive-summary-heading`}
    >
      <div className={styles.inner}>
        <h2 id={`${slug}-executive-summary-heading`} className="executive-summary-sr-only">
          Executive Summary
        </h2>
        <div className="executive-summary-grid">
          <SummaryBlock label="Role">
            <p className="executive-summary-value">{summary.role}</p>
          </SummaryBlock>

          <SummaryBlock label="Team">
            <TeamValue team={summary.team} />
          </SummaryBlock>

          {"duration" in summary && summary.duration ? (
            <SummaryBlock label="Duration">
              <p className="executive-summary-value">{summary.duration}</p>
            </SummaryBlock>
          ) : null}

          {"industry" in summary && summary.industry ? (
            <SummaryBlock label="Industry">
              <p className="executive-summary-value">{summary.industry}</p>
            </SummaryBlock>
          ) : null}

          <SummaryBlock label="Ownership">
            <BulletValue items={summary.ownership} />
          </SummaryBlock>

          {"executivePartners" in summary && summary.executivePartners?.length ? (
            <SummaryBlock label="Executive Partners">
              <BulletValue items={summary.executivePartners} />
            </SummaryBlock>
          ) : null}

          <SummaryBlock label="Business Outcome" fullWidth>
            <p className="executive-summary-value executive-summary-value--outcome">
              {summary.businessOutcome}
            </p>
          </SummaryBlock>
        </div>
      </div>
    </section>
  );
}
