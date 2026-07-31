import Link from "next/link";
import styles from "./page.module.css";
import {
  productSystemsHelpItems,
  productSystemsHighlightIndex,
} from "@/data/about-sections-content";

type ProductSystemsSectionProps = {
  ctaHref?: string;
};

export function ProductSystemsSection({
  ctaHref = "/#contact",
}: ProductSystemsSectionProps) {
  return (
    <section
      className="case-section section-spacing about-section capabilities-editorial"
      aria-labelledby="capabilities-heading"
    >
      <div className={styles.inner}>
        <div className="capabilities-editorial-layout">
          <div className="capabilities-intro">
            <p className="capabilities-eyebrow">Capabilities</p>
            <h2 id="capabilities-heading" className="capabilities-heading">
              The Value of Product Systems
              <sup className="capabilities-heading-mark" aria-hidden>
                ™
              </sup>
            </h2>
            <p className="capabilities-copy">
              Every strong product lives in the space between vision, execution, and
              adoption.
            </p>
            <Link href={ctaHref} className="capabilities-cta">
              Start a Conversation
            </Link>
          </div>
          <ol className="capabilities-board" aria-label="Product systems capabilities">
            {productSystemsHelpItems.map((item, index) => (
              <li
                key={item}
                className={`capability-cell${
                  index === productSystemsHighlightIndex
                    ? " capability-cell-highlight"
                    : ""
                }`}
              >
                <span className="capability-number" aria-hidden>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="capability-text">{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
