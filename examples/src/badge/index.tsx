import { FC, useState } from "react";

import Badge from "@bodynarf/react.components/components/badge";
import { ElementColor } from "@bodynarf/react.components";

/** All Badge component variations */
const BadgeExamples: FC = () => {
    const [count, setCount] = useState(0);
    const [hidden, setHidden] = useState(false);

    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-3">Badge</h1>

                {/* Numeric badge */}
                <div className="box">
                    <p className="subtitle is-5">Numeric badge</p>
                    <p className="help mb-4">Values 1, 5, 42, 99, 100 — last overflows the default max (99).</p>
                    <div className="is-flex" style={{ gap: "2rem", flexWrap: "wrap" }}>
                        {[1, 5, 42, 99, 100].map(v => (
                            <Badge key={v} value={v}>
                                <button type="button" className="button is-light">Notifications</button>
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Custom max */}
                <div className="box">
                    <p className="subtitle is-5">Custom max</p>
                    <p className="help mb-4">max=9, 20, 999 — value exceeds each limit.</p>
                    <div className="is-flex" style={{ gap: "2rem", flexWrap: "wrap" }}>
                        <Badge value={10} max={9}>
                            <button type="button" className="button is-light">max=9</button>
                        </Badge>
                        <Badge value={50} max={20}>
                            <button type="button" className="button is-light">max=20</button>
                        </Badge>
                        <Badge value={1000} max={999}>
                            <button type="button" className="button is-light">max=999</button>
                        </Badge>
                    </div>
                </div>

                {/* Dot badge */}
                <div className="box">
                    <p className="subtitle is-5">Dot badge</p>
                    <p className="help mb-4">Small dot with no text — useful as a "has new" signal.</p>
                    <div className="is-flex" style={{ gap: "2rem", flexWrap: "wrap" }}>
                        <Badge dot>
                            <button type="button" className="button is-light">
                                <span className="icon"><i className="bi bi-bell" /></span>
                            </button>
                        </Badge>
                        <Badge dot color={ElementColor.Success}>
                            <button type="button" className="button is-light">
                                <span className="icon"><i className="bi bi-chat" /></span>
                            </button>
                        </Badge>
                        <Badge dot color={ElementColor.Warning}>
                            <button type="button" className="button is-light">
                                <span className="icon"><i className="bi bi-envelope" /></span>
                            </button>
                        </Badge>
                    </div>
                </div>

                {/* Colors */}
                <div className="box">
                    <p className="subtitle is-5">Colors — numeric</p>
                    <p className="help mb-4">All 7 <code>ElementColor</code> variants.</p>
                    <div className="is-flex" style={{ gap: "2rem", flexWrap: "wrap" }}>
                        {([
                            [ElementColor.Default, "Default"],
                            [ElementColor.Primary, "Primary"],
                            [ElementColor.Link, "Link"],
                            [ElementColor.Info, "Info"],
                            [ElementColor.Success, "Success"],
                            [ElementColor.Warning, "Warning"],
                            [ElementColor.Danger, "Danger"],
                        ] as const).map(([color, label]) => (
                            <Badge key={color} value={7} color={color}>
                                <button type="button" className="button is-light">{label}</button>
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* hidden */}
                <div className="box">
                    <p className="subtitle is-5">hidden</p>
                    <p className="help mb-4">Hides the badge without unmounting the child.</p>
                    <Badge value={5} hidden={hidden}>
                        <button type="button" className="button is-light">Messages</button>
                    </Badge>
                    <button type="button" className="button is-small ml-4" onClick={() => setHidden(h => !h)}>
                        Toggle hidden
                    </button>
                </div>

                {/* Interactive counter */}
                <div className="box">
                    <p className="subtitle is-5">Interactive counter</p>
                    <p className="help mb-4">Overflow kicks in at 99.</p>
                    <div className="is-flex is-align-items-center" style={{ gap: "1rem" }}>
                        <Badge value={count}>
                            <button type="button" className="button is-primary is-light">Inbox</button>
                        </Badge>
                        <div className="buttons">
                            <button type="button" className="button is-small is-success is-light" onClick={() => setCount(c => c + 1)}>+1</button>
                            <button type="button" className="button is-small is-danger is-light" onClick={() => setCount(c => Math.max(0, c - 1))}>-1</button>
                            <button type="button" className="button is-small is-light" onClick={() => setCount(0)}>Reset</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BadgeExamples;
