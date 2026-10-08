import { FC, useState } from "react";

import FloatButton from "@bodynarf/react.components/components/floatButton";
import { ButtonStyle, ElementSize, FloatPosition } from "@bodynarf/react.components";


const POSITIONS: FloatPosition[] = ["bottom-right", "bottom-left", "top-right", "top-left"];
const STYLES: ButtonStyle[] = [ButtonStyle.Primary, ButtonStyle.Info, ButtonStyle.Success, ButtonStyle.Warning, ButtonStyle.Danger];
const SIZES: ElementSize[] = [ElementSize.Small, ElementSize.Normal, ElementSize.Medium, ElementSize.Large];

const FloatButtonExamples: FC = () => {
    const [position, setPosition] = useState<FloatPosition>("bottom-right");
    const [style, setStyle] = useState<ButtonStyle>(ButtonStyle.Primary);
    const [size, setSize] = useState<ElementSize>(ElementSize.Normal);
    const [withCaption, setWithCaption] = useState(false);
    const [clicks, setClicks] = useState(0);

    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-3">Float Button</h1>

                <p className="block help">
                    A fixed-position floating action button pinned to a viewport corner. Configure it below — the live button updates instantly.
                </p>

                <div className="box">
                    <p className="subtitle is-5">Configuration</p>

                    <div className="field">
                        <label className="label">Position</label>
                        <div className="buttons">
                            {POSITIONS.map(p => (
                                <button
                                    key={p}
                                    type="button"
                                    className={`button is-small ${position === p ? "is-primary" : ""}`}
                                    onClick={() => setPosition(p)}
                                >
                                    {p}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Style</label>
                        <div className="buttons">
                            {STYLES.map(s => (
                                <button
                                    key={s}
                                    type="button"
                                    className={`button is-small is-${s} ${style === s ? "is-outlined" : ""}`}
                                    onClick={() => setStyle(s)}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Size</label>
                        <div className="buttons">
                            {SIZES.map(sz => (
                                <button
                                    key={sz}
                                    type="button"
                                    className={`button is-small ${size === sz ? "is-primary" : ""}`}
                                    onClick={() => setSize(sz)}
                                >
                                    {sz}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="field">
                        <label className="checkbox">
                            <input
                                type="checkbox"
                                checked={withCaption}
                                onChange={e => setWithCaption(e.target.checked)}
                            />
                            {" "}With caption
                        </label>
                    </div>

                    <p className="help">Clicks on the float button: <strong>{clicks}</strong></p>
                </div>

                {/* The floating button itself — pinned to the viewport */}
                <FloatButton
                    icon="plus-lg"
                    caption={withCaption ? "Add" : undefined}
                    position={position}
                    style={style}
                    size={size}
                    tooltip="Add new item"
                    onClick={() => setClicks(c => c + 1)}
                />
            </div>
        </section>
    );
};

export default FloatButtonExamples;
