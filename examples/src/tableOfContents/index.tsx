import { FC } from "react";

import TableOfContents from "@bodynarf/react.components/components/tableOfContents";
import { TableOfContentsItem } from "@bodynarf/react.components";


const SECTIONS: TableOfContentsItem[] = [
    { label: "Introduction", anchor: "#toc-intro", order: 0 },
    { label: "Getting Started", anchor: "#toc-start", order: 0 },
    { label: "Installation", anchor: "#toc-install", order: 1 },
    { label: "Usage", anchor: "#toc-usage", order: 1 },
    { label: "Advanced", anchor: "#toc-advanced", order: 0 },
    { label: "Theming", anchor: "#toc-theming", order: 1 },
    { label: "API Reference", anchor: "#toc-api", order: 0 },
];

const Section: FC<{ id: string; title: string; body: string }> = ({ id, title, body }) => (
    <section
        id={id}
        style={{ minHeight: "65vh", paddingTop: "1rem", paddingBottom: "2rem" }}
    >
        <h2 className="title is-4">{title}</h2>
        <p className="block">{body}</p>
    </section>
);

const TableOfContentsExamples: FC = () => (
    <section className="section">
        <div className="container">
            <h1 className="title is-3">Table of Contents</h1>

            <p className="block help">
                Scroll the content — the active entry is highlighted via <code>IntersectionObserver</code>.
                Click an entry to smooth-scroll to it. <code>order</code> controls the indent.
            </p>

            <div className="columns">
                {/* Sticky TOC */}
                <div className="column is-3">
                    <div style={{ position: "sticky", top: "1rem" }}>
                        <TableOfContents
                            title="Contents"
                            items={SECTIONS}
                        />
                    </div>
                </div>

                {/* Scrollable content */}
                <div className="column">
                    <Section
                        id="toc-intro"
                        title="Introduction"
                        body="Welcome to the Table of Contents demo. This component watches the sections on the right and highlights the one currently in view."
                    />
                    <Section
                        id="toc-start"
                        title="Getting Started"
                        body="Each entry maps to an anchor selector. The component queries the DOM for that element and observes it."
                    />
                    <Section
                        id="toc-install"
                        title="Installation"
                        body="Indented entry (order = 1) — a subsection of Getting Started."
                    />
                    <Section
                        id="toc-usage"
                        title="Usage"
                        body="Another indented subsection demonstrating nesting via the order property."
                    />
                    <Section
                        id="toc-advanced"
                        title="Advanced"
                        body="Back to the top level. The observer picks the topmost visible section as active."
                    />
                    <Section
                        id="toc-theming"
                        title="Theming"
                        body="Indented subsection under Advanced. Colors and spacing are driven by the SCSS variables."
                    />
                    <Section
                        id="toc-api"
                        title="API Reference"
                        body="The final section. Clicking a link calls scrollIntoView with smooth behavior."
                    />
                </div>
            </div>
        </div>
    </section>
);

export default TableOfContentsExamples;
