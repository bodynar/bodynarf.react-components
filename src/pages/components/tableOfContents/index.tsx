import { CSSProperties, FC, ReactElement } from "react";

import TableOfContentsComponent from "@bodynarf/react.components/components/tableOfContents";

import ComponentUseCase from "@app/sharedComponents/useCase";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

// the demo scrolls inside this box, not the whole page
const scrollBoxStyle: CSSProperties = {
    position: "relative",
    height: "360px",
    overflowY: "auto",
    border: "1px solid #dbdbdb",
    borderRadius: "4px",
    padding: "0 1rem",
};

const filler = (text: string): Array<ReactElement> =>
    Array.from({ length: 3 }, (_, i) => (
        <p key={i} className="my-3 has-text-grey">
            {text} — paragraph {i + 1}. Scroll the box and watch the active entry on the left follow the topmost visible section.
        </p>
    ));

/** TableOfContents component demo */
const TableOfContents: FC = () => {
    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="TableOfContents"
                version="1.16"
                baseTypeName="BaseElementProps"
                description="Scrollspy navigation list: highlights the currently visible section (via IntersectionObserver) and smoothly scrolls to it on click. Nesting levels are configured with the `order` field."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Provide the entries: a visible `label` and an `anchor` — a CSS selector of the target element. Scroll the box on the right and watch the highlight; click an entry to scroll to its section."
                code={
                    <CodeExample
                        code={[
                            `import TableOfContents from "@bodynarf/react.components/components/tableOfContents";`,
                            "",
                            "<TableOfContents",
                            "    items={[",
                            `        { label: "Overview",    anchor: "#section-1" },`,
                            `        { label: "Installation", anchor: "#section-2" },`,
                            `        { label: "Usage",        anchor: "#section-3" },`,
                            "    ]}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <div className="columns">
                    <div className="column is-one-quarter">
                        <TableOfContentsComponent
                            items={[
                                { label: "Overview", anchor: "#toc-demo-1" },
                                { label: "Installation", anchor: "#toc-demo-2" },
                                { label: "Usage", anchor: "#toc-demo-3" },
                                { label: "FAQ", anchor: "#toc-demo-4" },
                            ]}
                        />
                    </div>
                    <div className="column">
                        <div style={scrollBoxStyle}>
                            <h5 className="title is-5 mt-4" id="toc-demo-1">Overview</h5>
                            {filler("Overview")}
                            <h5 className="title is-5 mt-4" id="toc-demo-2">Installation</h5>
                            {filler("Installation")}
                            <h5 className="title is-5 mt-4" id="toc-demo-3">Usage</h5>
                            {filler("Usage")}
                            <h5 className="title is-5 mt-4" id="toc-demo-4">FAQ</h5>
                            {filler("FAQ")}
                        </div>
                    </div>
                </div>
            </ComponentUseCase>

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">
                    Custom component props
                </h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="order"
                description="Nesting level used to indent the entry (`padding-left`). Useful for hierarchical documents — `0` for chapters, `1` for sections, `2` for subsections."
                code={
                    <CodeExample
                        code={[
                            `import TableOfContents from "@bodynarf/react.components/components/tableOfContents";`,
                            "",
                            "<TableOfContents",
                            "    items={[",
                            `        { label: "Getting started", anchor: "#chapter",     order: 0 },`,
                            `        { label: "Requirements",    anchor: "#requirements", order: 1 },`,
                            `        { label: "Setup",           anchor: "#setup",        order: 1 },`,
                            `        { label: "Troubleshooting", anchor: "#troubleshoot", order: 2 },`,
                            "    ]}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <div className="columns">
                    <div className="column is-one-quarter">
                        <TableOfContentsComponent
                            items={[
                                { label: "Getting started", anchor: "#toc-nested-1", order: 0 },
                                { label: "Requirements", anchor: "#toc-nested-2", order: 1 },
                                { label: "Setup", anchor: "#toc-nested-3", order: 1 },
                                { label: "Troubleshooting", anchor: "#toc-nested-4", order: 2 },
                            ]}
                        />
                    </div>
                    <div className="column">
                        <div style={scrollBoxStyle}>
                            <h5 className="title is-5 mt-4" id="toc-nested-1">Getting started</h5>
                            {filler("Getting started")}
                            <h6 className="subtitle is-6 mt-4" id="toc-nested-2">Requirements</h6>
                            {filler("Requirements")}
                            <h6 className="subtitle is-6 mt-4" id="toc-nested-3">Setup</h6>
                            {filler("Setup")}
                            <h6 className="subtitle is-6 mt-4" id="toc-nested-4">Troubleshooting</h6>
                            {filler("Troubleshooting")}
                        </div>
                    </div>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                caption="Notes"
                description="Anchors are resolved with `document.querySelector`, so the target ids must be unique across the whole page. The highlight follows the topmost visible section, and clicks use smooth scrolling."
                code={
                    <CodeExample
                        code={[
                            `// the anchor field is any valid CSS selector`,
                            `{ label: "Appendix A", anchor: "#appendix-a" },`,
                        ].join("\n")}
                    />
                }
            >
                <p className="is-size-7 has-text-grey">
                    In these demos the scrollable area is a bordered box, so the page itself stays in place.
                </p>
            </ComponentUseCase>
        </section>
    );
};

export default TableOfContents;
