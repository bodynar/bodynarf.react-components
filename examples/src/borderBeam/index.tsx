import { FC } from "react";


const COLORS = [
    { cls: "bbr-border-beam--primary", label: "primary" },
    { cls: "bbr-border-beam--info", label: "info" },
    { cls: "bbr-border-beam--success", label: "success" },
    { cls: "bbr-border-beam--warning", label: "warning" },
    { cls: "bbr-border-beam--danger", label: "danger" },
    { cls: "bbr-border-beam--link", label: "link" },
];

const PRESETS = [
    { cls: "bbr-border-beam--ocean", label: "ocean", hint: "#0077ff → #00cfff" },
    { cls: "bbr-border-beam--aurora", label: "aurora", hint: "#00ff88 → #0066ff → #aa00ff" },
    { cls: "bbr-border-beam--fire", label: "fire", hint: "#ff0000 → #ff8800 → #ffff00" },
    { cls: "bbr-border-beam--rainbow", label: "rainbow", hint: "full spectrum" },
];

const BorderBeamExamples: FC = () => (
    <section className="section">
        <div className="container">
            <h1 className="title is-3">Border Beam</h1>

            <p className="block help">
                Pure-CSS animated rotating border ring. Apply <code>bbr-border-beam</code> (plus a variant) to any element
                — it sets <code>position: relative</code> and renders a masked <code>::before</code> behind it.
                Respects <code>prefers-reduced-motion</code> (animation stops).
            </p>

            {/* Single color */}
            <p className="subtitle is-5">Single color</p>
            <div className="columns is-multiline">
                {COLORS.map(v => (
                    <div key={v.cls} className="column is-4">
                        <div className={`box bbr-border-beam ${v.cls}`}>
                            <p className="title is-6">{v.label}</p>
                            <p className="help">{v.cls}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Gradient presets */}
            <p className="subtitle is-5 mt-6">Gradient presets</p>
            <div className="columns is-multiline">
                {PRESETS.map(v => (
                    <div key={v.cls} className="column is-3">
                        <div className={`box bbr-border-beam ${v.cls}`}>
                            <p className="title is-6">{v.label}</p>
                            <p className="help">{v.hint}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* On a button */}
            <p className="subtitle is-5 mt-6">On a button &amp; rounded card</p>
            <div className="field is-grouped">
                <div className="control">
                    <button
                        type="button"
                        className="button is-medium bbr-border-beam bbr-border-beam--ocean"
                    >
                        Beam button
                    </button>
                </div>
                <div className="control">
                    <div
                        className="bbr-border-beam bbr-border-beam--aurora"
                        style={{ borderRadius: "9999px", padding: "0.5rem 1.25rem", background: "#fff" }}
                    >
                        pill with aurora beam
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default BorderBeamExamples;
