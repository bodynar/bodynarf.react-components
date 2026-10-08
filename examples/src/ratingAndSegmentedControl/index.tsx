import { FC, useState } from "react";

import Rating from "@bodynarf/react.components/components/rating";
import SegmentedControl from "@bodynarf/react.components/components/segmentedControl";
import { ElementColor, ElementSize, SegmentedOption } from "@bodynarf/react.components";

// ─── SegmentedControl options ─────────────────────────────────────────────────

const VIEW_OPTIONS: SegmentedOption[] = [
    { value: "grid",   label: "Grid",   icon: "grid"   },
    { value: "list",   label: "List",   icon: "list"   },
    { value: "table",  label: "Table",  icon: "table"  },
];

const FREQ_OPTIONS: SegmentedOption[] = [
    { value: "daily",   label: "Daily"   },
    { value: "weekly",  label: "Weekly"  },
    { value: "monthly", label: "Monthly" },
    { value: "yearly",  label: "Yearly"  },
];

const PRIORITY_OPTIONS: SegmentedOption[] = [
    { value: "low",      label: "Low"    },
    { value: "medium",   label: "Medium" },
    { value: "high",     label: "High",   disabled: true },
];

/** Rating + SegmentedControl examples */
const RatingAndSegmentedControlExamples: FC = () => {
    const [rating1, setRating1] = useState<number | undefined>(undefined);
    const [rating2, setRating2] = useState<number | undefined>(3);
    const [rating3, setRating3] = useState<number | undefined>(2.5);
    const [view,     setView]     = useState("grid");
    const [freq,     setFreq]     = useState("weekly");
    const [priority, setPriority] = useState("medium");
    const [segColor, setSegColor] = useState<ElementColor>(ElementColor.Primary);

    return (
        <section className="section">
            <div className="container">

                {/* ── Rating ───────────────────────────────────────────── */}
                <h1 className="title is-3">Rating</h1>

                {/* Basic */}
                <div className="box">
                    <p className="subtitle is-5">Basic (controlled)</p>
                    <Rating value={rating1} onChange={setRating1} />
                    <p className="help mt-2">Value: {rating1 ?? "none"}</p>
                </div>

                {/* Pre-filled + clearable */}
                <div className="box">
                    <p className="subtitle is-5">Pre-filled (clearable)</p>
                    <p className="help mb-3">Click the current star to clear the value.</p>
                    <Rating value={rating2} clearable onChange={setRating2} />
                    <p className="help mt-2">Value: {rating2 ?? "cleared"}</p>
                </div>

                {/* Half stars */}
                <div className="box">
                    <p className="subtitle is-5">Half stars</p>
                    <Rating value={rating3} allowHalf clearable onChange={setRating3} />
                    <p className="help mt-2">Value: {rating3 ?? "none"}</p>
                </div>

                {/* Readonly */}
                <div className="box">
                    <p className="subtitle is-5">Readonly</p>
                    <Rating value={4} readonly />
                </div>

                {/* Max */}
                <div className="box">
                    <p className="subtitle is-5">Custom max (max=10)</p>
                    <Rating max={10} value={7} onChange={() => {}} />
                </div>

                {/* Sizes */}
                <div className="box">
                    <p className="subtitle is-5">Sizes</p>
                    <div className="is-flex" style={{ flexDirection: "column", gap: "0.75rem" }}>
                        {[ElementSize.Small, ElementSize.Normal, ElementSize.Medium, ElementSize.Large].map(s => (
                            <div key={s} className="is-flex is-align-items-center" style={{ gap: "1rem" }}>
                                <span className="has-text-grey is-size-7" style={{ width: 60 }}>{s}</span>
                                <Rating size={s} value={3} readonly />
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── SegmentedControl ─────────────────────────────────── */}
                <h1 className="title is-3 mt-6">SegmentedControl</h1>

                {/* With icons */}
                <div className="box">
                    <p className="subtitle is-5">View switcher (with icons)</p>
                    <SegmentedControl options={VIEW_OPTIONS} value={view} onChange={setView} />
                    <p className="help mt-2">Active view: <strong>{view}</strong></p>
                </div>

                {/* Text only */}
                <div className="box">
                    <p className="subtitle is-5">Text-only options</p>
                    <SegmentedControl options={FREQ_OPTIONS} value={freq} onChange={setFreq} />
                    <p className="help mt-2">Frequency: <strong>{freq}</strong></p>
                </div>

                {/* Disabled option */}
                <div className="box">
                    <p className="subtitle is-5">With disabled option</p>
                    <SegmentedControl options={PRIORITY_OPTIONS} value={priority} onChange={setPriority} />
                </div>

                {/* Fully disabled */}
                <div className="box">
                    <p className="subtitle is-5">Fully disabled</p>
                    <SegmentedControl options={FREQ_OPTIONS} value="weekly" onChange={() => {}} disabled />
                </div>

                {/* Full width */}
                <div className="box">
                    <p className="subtitle is-5">Full width</p>
                    <SegmentedControl options={VIEW_OPTIONS} value={view} onChange={setView} fullWidth />
                </div>

                {/* Colors */}
                <div className="box">
                    <p className="subtitle is-5">Color variants</p>
                    <p className="help mb-3">Click to try each color, then select a segment.</p>
                    <div className="buttons mb-3">
                        {([
                            ElementColor.Primary,
                            ElementColor.Link,
                            ElementColor.Info,
                            ElementColor.Success,
                            ElementColor.Warning,
                            ElementColor.Danger,
                        ] as const).map(c => (
                            <button
                                key={c}
                                type="button"
                                className={`button is-small ${segColor === c ? "is-primary" : "is-light"}`}
                                onClick={() => setSegColor(c)}
                            >
                                {c}
                            </button>
                        ))}
                    </div>
                    <SegmentedControl options={VIEW_OPTIONS} value={view} onChange={setView} color={segColor} />
                </div>

                {/* Sizes */}
                <div className="box">
                    <p className="subtitle is-5">Sizes</p>
                    <div className="is-flex" style={{ flexDirection: "column", gap: "0.75rem" }}>
                        {[ElementSize.Small, ElementSize.Normal, ElementSize.Medium, ElementSize.Large].map(s => (
                            <div key={s} className="is-flex is-align-items-center" style={{ gap: "1rem" }}>
                                <span className="has-text-grey is-size-7" style={{ width: 60 }}>{s}</span>
                                <SegmentedControl options={VIEW_OPTIONS} value="grid" onChange={() => {}} size={s} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RatingAndSegmentedControlExamples;
