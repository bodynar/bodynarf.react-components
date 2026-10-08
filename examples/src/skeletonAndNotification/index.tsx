import { FC, useState } from "react";

import Skeleton from "@bodynarf/react.components/components/skeleton";
import NotificationContainer from "@bodynarf/react.components/components/notification";
import { ElementColor, ElementPosition, ElementSize, NotificationItem, useNotification } from "@bodynarf/react.components";

// ─── Notification wiring ──────────────────────────────────────────────────────

const COLORS: { color: ElementColor; label: string; cls: string }[] = [
    { color: ElementColor.Primary, label: "Primary", cls: "is-primary" },
    { color: ElementColor.Success, label: "Success", cls: "is-success" },
    { color: ElementColor.Info,    label: "Info",    cls: "is-info"    },
    { color: ElementColor.Warning, label: "Warning", cls: "is-warning" },
    { color: ElementColor.Danger,  label: "Danger",  cls: "is-danger"  },
];

let notifIdSeq = 1;

const NotificationDemo: FC = () => {
    const { add } = useNotification();

    const push = (color: ElementColor, closable: boolean, autoClose?: number) => {
        const item: NotificationItem = {
            id: String(notifIdSeq++),
            content: `Notification #${notifIdSeq - 1}: ${color} ${closable ? "(closable)" : ""} ${autoClose ? `(auto-close ${autoClose}ms)` : ""}`,
            color,
            closable,
            autoClose,
        };
        add(item);
    };

    return (
        <div>
            <div className="buttons">
                {COLORS.map(({ color, label, cls }) => (
                    <button
                        key={color}
                        type="button"
                        className={`button is-small ${cls} is-light`}
                        onClick={() => push(color, true, 4000)}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <button type="button" className="button is-small is-light mb-2" onClick={() => push(ElementColor.Primary, false)}>
                Persistent (not closable)
            </button>
        </div>
    );
};

/** Skeleton + Notification examples */
const SkeletonAndNotificationExamples: FC = () => {
    const [loading, setLoading] = useState(true);
    const [position, setPosition] = useState<ElementPosition.Left | ElementPosition.Right>(ElementPosition.Right);

    return (
        <section className="section">
            <div className="container">

                {/* ── Skeleton ─────────────────────────────────────────── */}
                <h1 className="title is-3">Skeleton</h1>

                {/* Skeleton.Text */}
                <div className="box">
                    <p className="subtitle is-5">Skeleton.Text</p>
                    <p className="help mb-4">Defaults to 1 line; last line is shorter (70 %).</p>
                    <div className="mb-3">
                        <p className="help mb-1">1 line (default)</p>
                        <Skeleton.Text />
                    </div>
                    <div className="mb-3">
                        <p className="help mb-1">3 lines</p>
                        <Skeleton.Text lines={3} />
                    </div>
                    <div>
                        <p className="help mb-1">5 lines, lastLineWidth="40%"</p>
                        <Skeleton.Text lines={5} lastLineWidth="40%" />
                    </div>
                </div>

                {/* Skeleton.Block */}
                <div className="box">
                    <p className="subtitle is-5">Skeleton.Block</p>
                    <div className="is-flex" style={{ gap: "1rem", flexWrap: "wrap" }}>
                        <div>
                            <p className="help mb-1">Auto width, 80px height</p>
                            <Skeleton.Block height="80px" />
                        </div>
                        <div>
                            <p className="help mb-1">200px × 100px</p>
                            <Skeleton.Block width="200px" height="100px" />
                        </div>
                        <div>
                            <p className="help mb-1">60px × 60px (square avatar placeholder)</p>
                            <Skeleton.Block width="60px" height="60px" />
                        </div>
                    </div>
                </div>

                {/* Skeleton.Avatar */}
                <div className="box">
                    <p className="subtitle is-5">Skeleton.Avatar</p>
                    <div className="is-flex is-align-items-center" style={{ gap: "1.5rem", flexWrap: "wrap" }}>
                        <div className="has-text-centered">
                            <Skeleton.Avatar />
                            <p className="help mt-1">Normal (circle)</p>
                        </div>
                        <div className="has-text-centered">
                            <Skeleton.Avatar square />
                            <p className="help mt-1">square</p>
                        </div>
                    </div>
                </div>

                {/* Skeleton.Button */}
                <div className="box">
                    <p className="subtitle is-5">Skeleton.Button</p>
                    <div className="is-flex is-align-items-center" style={{ gap: "1rem", flexWrap: "wrap" }}>
                        <div>
                            <p className="help mb-1">Small</p>
                            <Skeleton.Button size={ElementSize.Small} />
                        </div>
                        <div>
                            <p className="help mb-1">Normal</p>
                            <Skeleton.Button />
                        </div>
                        <div>
                            <p className="help mb-1">Medium, 200px</p>
                            <Skeleton.Button size={ElementSize.Medium} width="200px" />
                        </div>
                        <div>
                            <p className="help mb-1">Large</p>
                            <Skeleton.Button size={ElementSize.Large} />
                        </div>
                    </div>
                </div>

                {/* Skeleton card layout */}
                <div className="box">
                    <p className="subtitle is-5">Card layout skeleton</p>
                    <p className="help mb-4">Click the button to toggle between skeleton and loaded state.</p>
                    <button
                        type="button"
                        className="button is-small is-light mb-4"
                        onClick={() => setLoading(l => !l)}
                    >
                        {loading ? "Show content" : "Show skeleton"}
                    </button>

                    {loading ? (
                        <div style={{ maxWidth: 320 }}>
                            <div className="is-flex is-align-items-center mb-3" style={{ gap: "0.75rem" }}>
                                <Skeleton.Avatar />
                                <div style={{ flex: 1 }}>
                                    <Skeleton.Text lines={2} lastLineWidth="60%" />
                                </div>
                            </div>
                            <Skeleton.Block height="150px" />
                            <div className="mt-3">
                                <Skeleton.Text lines={3} />
                            </div>
                            <div className="mt-3 is-flex" style={{ gap: "0.5rem" }}>
                                <Skeleton.Button />
                                <Skeleton.Button />
                            </div>
                        </div>
                    ) : (
                        <div className="card" style={{ maxWidth: 320 }}>
                            <div className="card-content">
                                <div className="media mb-0">
                                    <div className="media-left">
                                        <figure className="image is-48x48">
                                            <img className="is-rounded" src="https://i.pravatar.cc/48?img=5" alt="avatar" />
                                        </figure>
                                    </div>
                                    <div className="media-content">
                                        <p className="title is-6">Alice Johnson</p>
                                        <p className="subtitle is-7">@alice</p>
                                    </div>
                                </div>
                                <div className="content mt-3">
                                    <p className="is-size-7">This is some example card content that was hidden behind a skeleton.</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* ── Notification ─────────────────────────────────────── */}
                <h1 className="title is-3 mt-6">Notification</h1>

                <div className="box">
                    <p className="subtitle is-5">Notification container</p>
                    <p className="help mb-4">
                        Colored buttons push a toast. Auto-close is 4 s.
                        The persistent one (last button) has no auto-close and must be dismissed manually.
                    </p>

                    {/* Position selector */}
                    <div className="is-flex is-align-items-center mb-4" style={{ gap: "0.75rem" }}>
                        <span className="is-size-7 has-text-grey">Position:</span>
                        <div className="buttons are-small">
                            <button
                                type="button"
                                className={`button ${position === ElementPosition.Right ? "is-primary" : "is-light"}`}
                                onClick={() => setPosition(ElementPosition.Right)}
                            >
                                Right
                            </button>
                            <button
                                type="button"
                                className={`button ${position === ElementPosition.Left ? "is-primary" : "is-light"}`}
                                onClick={() => setPosition(ElementPosition.Left)}
                            >
                                Left
                            </button>
                        </div>
                    </div>

                    <NotificationContainer.Provider>
                        <NotificationDemo />
                        <NotificationContainer position={position} maxVisible={5} />
                    </NotificationContainer.Provider>
                </div>
            </div>
        </section>
    );
};

export default SkeletonAndNotificationExamples;
