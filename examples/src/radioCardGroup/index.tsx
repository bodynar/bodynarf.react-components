import { FC, useState } from "react";

import RadioCardGroup from "@bodynarf/react.components/components/radioCardGroup";
import { ElementColor, ElementSize, RadioCardItem } from "@bodynarf/react.components";

// ─── RadioCardGroup items ─────────────────────────────────────────────────────

const DEPLOY_ITEMS: RadioCardItem[] = [
    {
        value: "cloud", label: "Cloud", description: "Managed hosting, zero maintenance",
        icon: { name: "cloud-arrow-up" },
    },
    {
        value: "server", label: "On-premise", description: "Full control, own hardware",
        icon: { name: "hdd-rack" },
    },
    {
        value: "local", label: "Local", description: "Runs on your machine",
        icon: { name: "pc-display" },
    },
];

const LAYOUT_ITEMS: RadioCardItem[] = [
    { value: "grid", label: "Grid", icon: { name: "grid" } },
    { value: "list", label: "List", icon: { name: "list-ul" } },
    { value: "table", label: "Table", icon: { name: "table" } },
    { value: "kanban", label: "Kanban", icon: { name: "kanban" } },
    { value: "gallery", label: "Gallery", icon: { name: "image" } },
    { value: "cards", label: "Cards", icon: { name: "card-list" } },
];

const CONTACT_ITEMS: RadioCardItem[] = [
    { value: "email", label: "Email", description: "alice@example.com", icon: { name: "envelope" } },
    { value: "chat", label: "Chat", description: "Internal messenger", icon: { name: "chat-dots" } },
    { value: "phone", label: "Phone", description: "+1 555 0100", icon: { name: "telephone" }, disabled: true },
];

/** RadioCardGroup examples */
const RadioCardGroupExamples: FC = () => {
    const [deploy, setDeploy] = useState("cloud");
    const [layout, setLayout] = useState("list");
    const [contact, setContact] = useState("email");
    const [style, setStyle] = useState<ElementColor>(ElementColor.Primary);
    const [fallback, setFallback] = useState("Yes");

    return (
        <section className="section">
            <div className="container">

                {/* ── RadioCardGroup ───────────────────────────────────── */}
                <h1 className="title is-3">RadioCardGroup</h1>

                {/* Single selection */}
                <div className="box">
                    <p className="subtitle is-5">Single selection (uncontrolled)</p>
                    <p className="help mb-4">
                        Default value via <code>defaultValue</code>, selection reported through <code>onChange</code>.
                    </p>
                    <RadioCardGroup items={DEPLOY_ITEMS} defaultValue={deploy} onChange={setDeploy} />
                    <p className="help mt-2">Selected: <strong>{deploy}</strong></p>
                </div>

                {/* Grid */}
                <div className="box">
                    <p className="subtitle is-5">Grid (columns=3)</p>
                    <p className="help mb-4">Cards are laid out with a CSS grid.</p>
                    <RadioCardGroup
                        columns={3}

                        items={LAYOUT_ITEMS}
                        value={layout}
                        onChange={setLayout}
                    />
                    <p className="help mt-2">Selected: <strong>{layout}</strong></p>
                </div>

                {/* Accent color */}
                <div className="box">
                    <p className="subtitle is-5">Accent color (style)</p>
                    <p className="help mb-4">Tints the selected card, focus ring and icon.</p>
                    <div className="buttons mb-3">
                        {(Object.values(ElementColor) as ElementColor[]).map(c => (
                            <button
                                key={c}
                                type="button"
                                className={`button is-small ${style === c ? "is-primary" : ""}`}
                                onClick={() => setStyle(c)}
                            >
                                {c}
                            </button>
                        ))}
                    </div>
                    <RadioCardGroup items={LAYOUT_ITEMS} defaultValue="list" style={style} />
                </div>

                {/* Without values */}
                <div className="box">
                    <p className="subtitle is-5">Without values</p>
                    <p className="help mb-4">
                        When <code>value</code> is omitted, the card <code>label</code> is used as the selection key.
                    </p>
                    <RadioCardGroup
                        items={[
                            { label: "Yes" },
                            { label: "No" },
                            { label: "Maybe", description: "Decide later" },
                        ]}
                        defaultValue="Yes"
                        onChange={setFallback}
                    />
                    <p className="help mt-2">Selected: <strong>{fallback}</strong></p>
                </div>

                {/* Disabled card */}
                <div className="box">
                    <p className="subtitle is-5">Disabled card</p>
                    <p className="help mb-4">The <code>Phone</code> card is disabled and cannot be selected.</p>
                    <RadioCardGroup
                        items={CONTACT_ITEMS}
                        value={contact}
                        onChange={setContact}
                    />
                </div>

                {/* Controlled */}
                <div className="box">
                    <p className="subtitle is-5">Controlled mode</p>
                    <p className="help mb-4">Parent owns <code>value</code> + <code>onChange</code>.</p>
                    <RadioCardGroup
                        items={CONTACT_ITEMS}
                        value={contact}
                        onChange={setContact}
                    />
                    <div className="buttons mt-3">
                        <button type="button" className="button is-small is-primary is-light" onClick={() => setContact("email")}>
                            Set Email
                        </button>
                        <button type="button" className="button is-small is-primary is-light" onClick={() => setContact("chat")}>
                            Set Chat
                        </button>
                    </div>
                </div>

                {/* Sizes */}
                <div className="box">
                    <p className="subtitle is-5">Sizes</p>
                    <div className="is-flex" style={{ gap: "1rem", flexWrap: "wrap", alignItems: "flex-start" }}>
                        {[ElementSize.Small, ElementSize.Normal, ElementSize.Medium, ElementSize.Large].map(s => (
                            <div key={s} style={{ minWidth: 160 }}>
                                <p className="help mb-1">{s}</p>
                                <RadioCardGroup
                                    size={s}

                                    items={[{ value: "opt", label: "Option", description: `${s} size` }]}
                                    defaultValue="opt"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RadioCardGroupExamples;
