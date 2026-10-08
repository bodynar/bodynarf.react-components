import { FC } from "react";

import Icon from "@bodynarf/react.components/components/icon";
import { ElementSize } from "@bodynarf/react.components";

// Bootstrap Icons names (bundled with Bulma/BBR)
const ICON_NAMES = [
    "house", "person", "gear", "bell", "search", "star",
    "heart", "trash", "pencil", "check-lg", "x-lg", "plus-lg",
    "arrow-left", "arrow-right", "arrow-up", "arrow-down",
    "box-arrow-right", "floppy", "cloud-upload", "download",
    "calendar", "clock", "envelope", "telephone",
    "lock", "unlock", "eye", "eye-slash",
    "info-circle", "exclamation-triangle", "question-circle",
    "check-circle", "x-circle", "dash-circle",
];

const IconExamples: FC = () => (
    <section className="section">
        <div className="container">
            <h1 className="title is-3">Icon</h1>

            {/* Gallery */}
            <div className="box">
                <p className="subtitle is-5">Icon Gallery</p>
                <p className="help mb-4">All icon names are Bootstrap Icons names.</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
                    {ICON_NAMES.map(name => (
                        <div key={name} style={{ textAlign: "center", width: "80px" }}>
                            <Icon name={name} />
                            <p className="help mt-1" style={{ fontSize: "0.65rem", wordBreak: "break-all" }}>{name}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Sizes */}
            <div className="box">
                <p className="subtitle is-5">Sizes</p>
                <div className="is-flex is-align-items-center" style={{ gap: "24px" }}>
                    <div style={{ textAlign: "center" }}>
                        <Icon name="star" size={ElementSize.Small} />
                        <p className="help">Small</p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <Icon name="star" size={ElementSize.Normal} />
                        <p className="help">Normal</p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <Icon name="star" size={ElementSize.Medium} />
                        <p className="help">Medium</p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <Icon name="star" size={ElementSize.Large} />
                        <p className="help">Large</p>
                    </div>
                </div>
            </div>

            {/* Clickable icon */}
            <div className="box">
                <p className="subtitle is-5">Clickable</p>
                <p className="help mb-3">Pass <code>onClick</code> to make the icon interactive.</p>
                <div className="is-flex" style={{ gap: "16px" }}>
                    <Icon name="pencil"    onClick={() => alert("Edit clicked")}   />
                    <Icon name="trash"     onClick={() => alert("Delete clicked")} />
                    <Icon name="star"      onClick={() => alert("Star clicked")}   />
                    <Icon name="envelope"  onClick={() => alert("Mail clicked")}   />
                </div>
            </div>

            {/* With className */}
            <div className="box">
                <p className="subtitle is-5">Custom className (color via Bulma)</p>
                <div className="is-flex" style={{ gap: "16px" }}>
                    <Icon name="heart"              className="has-text-danger"  />
                    <Icon name="check-circle"       className="has-text-success" />
                    <Icon name="exclamation-triangle" className="has-text-warning" />
                    <Icon name="info-circle"        className="has-text-info"    />
                    <Icon name="star"               className="has-text-primary" />
                </div>
            </div>
        </div>
    </section>
);

export default IconExamples;
