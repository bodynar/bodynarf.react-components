import { FC, useState } from "react";

import Spinner from "@bodynarf/react.components/components/spinner";
import EmptyState from "@bodynarf/react.components/components/emptyState";
import { ButtonStyle } from "@bodynarf/react.components/components/button";
import { ElementColor, ElementSize } from "@bodynarf/react.components";

/** Spinner + EmptyState examples */
const SpinnerAndEmptyStateExamples: FC = () => {
    const [showOverlay, setShowOverlay] = useState(false);

    return (
        <section className="section">
            <div className="container">

                {/* ── Spinner ──────────────────────────────────────────── */}
                <h1 className="title is-3">Spinner</h1>

                {/* Sizes */}
                <div className="box">
                    <p className="subtitle is-5">Sizes</p>
                    <div className="is-flex is-align-items-center" style={{ gap: "2rem", flexWrap: "wrap" }}>
                        {[ElementSize.Small, ElementSize.Normal, ElementSize.Medium, ElementSize.Large].map(s => (
                            <div key={s} className="has-text-centered">
                                <Spinner size={s} />
                                <p className="help mt-2">{s}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Colors */}
                <div className="box">
                    <p className="subtitle is-5">Colors</p>
                    <div className="is-flex is-align-items-center" style={{ gap: "2rem", flexWrap: "wrap" }}>
                        {([
                            [ElementColor.Primary, "Primary"],
                            [ElementColor.Link,    "Link"   ],
                            [ElementColor.Info,    "Info"   ],
                            [ElementColor.Success, "Success"],
                            [ElementColor.Warning, "Warning"],
                            [ElementColor.Danger,  "Danger" ],
                        ] as const).map(([c, label]) => (
                            <div key={c} className="has-text-centered">
                                <Spinner color={c} />
                                <p className="help mt-2">{label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Overlay */}
                <div className="box">
                    <p className="subtitle is-5">Overlay spinner</p>
                    <p className="help mb-4">
                        <code>overlay</code> covers the nearest positioned ancestor with a semi-transparent backdrop.
                    </p>
                    <div style={{ position: "relative", minHeight: 120, padding: "1rem" }}>
                        <p>This is some content under the overlay.</p>
                        <p className="is-size-7 has-text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        {showOverlay && <Spinner overlay />}
                    </div>
                    <button
                        type="button"
                        className="button is-small is-light mt-3"
                        onClick={() => {
                            setShowOverlay(true);
                            setTimeout(() => setShowOverlay(false), 2500);
                        }}
                    >
                        Show overlay (2.5 s)
                    </button>
                </div>

                {/* ── EmptyState ───────────────────────────────────────── */}
                <h1 className="title is-3 mt-6">EmptyState</h1>

                {/* Default */}
                <div className="box">
                    <p className="subtitle is-5">Default</p>
                    <EmptyState title="Nothing here yet" description="Start by adding some items to your list." />
                </div>

                {/* With action button */}
                <div className="box">
                    <p className="subtitle is-5">With action button</p>
                    <EmptyState
                        title="No results found"
                        description="Try adjusting your search or filters."
                        icon="search"
                        action={{ style: ButtonStyle.Primary, caption: "Clear filters", onClick: () => alert("Filters cleared") }}
                    />
                </div>

                {/* Compact */}
                <div className="box">
                    <p className="subtitle is-5">compact</p>
                    <EmptyState title="No items" compact />
                </div>

                {/* Colors */}
                <div className="box">
                    <p className="subtitle is-5">Colors</p>
                    <div className="is-flex" style={{ flexDirection: "column", gap: "1rem" }}>
                        {([
                            [ElementColor.Default,  "Default" ],
                            [ElementColor.Primary,  "Primary" ],
                            [ElementColor.Success,  "Success" ],
                            [ElementColor.Warning,  "Warning" ],
                            [ElementColor.Danger,   "Danger"  ],
                            [ElementColor.Info,     "Info"    ],
                        ] as const).map(([c, label]) => (
                            <EmptyState
                                key={c}
                                title={`${label} empty state`}
                                description="A short description to explain the situation."
                                color={c}
                                compact
                            />
                        ))}
                    </div>
                </div>

                {/* Custom children */}
                <div className="box">
                    <p className="subtitle is-5">Custom children slot</p>
                    <EmptyState title="Invite your team" description="Collaborate with others by sending an invitation." icon="people">
                        <div className="field has-addons mt-3">
                            <div className="control is-expanded">
                                <input className="input is-small" type="email" placeholder="colleague@example.com" />
                            </div>
                            <div className="control">
                                <button type="button" className="button is-primary is-small">Invite</button>
                            </div>
                        </div>
                    </EmptyState>
                </div>
            </div>
        </section>
    );
};

export default SpinnerAndEmptyStateExamples;
