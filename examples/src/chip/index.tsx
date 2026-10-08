import { FC, useState } from "react";

import Chip from "@bodynarf/react.components/components/chip";
import { ElementColor, ElementSize } from "@bodynarf/react.components";

const ChipExamples: FC = () => {
    const [chips, setChips] = useState(["React", "TypeScript", "Vite", "Bulma", "BBR"]);

    const removeChip = (c: string) => setChips(prev => prev.filter(x => x !== c));

    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-3">Chip</h1>

                {/* Basic */}
                <div className="box">
                    <p className="subtitle is-5">Basic</p>
                    <div className="tags">
                        <Chip content="Label" />
                        <Chip content="Info"    style={ElementColor.Info}    />
                        <Chip content="Success" style={ElementColor.Success} />
                        <Chip content="Warning" style={ElementColor.Warning} />
                        <Chip content="Danger"  style={ElementColor.Danger}  />
                        <Chip content="Primary" style={ElementColor.Primary} />
                        <Chip content="Link"    style={ElementColor.Link}    />
                    </div>
                </div>

                {/* Light color variants */}
                <div className="box">
                    <p className="subtitle is-5">Light Color Variants</p>
                    <div className="tags">
                        <Chip content="Default light" lightColor />
                        <Chip content="Info light"    lightColor style={ElementColor.Info}    />
                        <Chip content="Success light" lightColor style={ElementColor.Success} />
                        <Chip content="Warning light" lightColor style={ElementColor.Warning} />
                        <Chip content="Danger light"  lightColor style={ElementColor.Danger}  />
                        <Chip content="Primary light" lightColor style={ElementColor.Primary} />
                    </div>
                </div>

                {/* Sizes */}
                <div className="box">
                    <p className="subtitle is-5">Sizes</p>
                    <div className="tags">
                        <Chip content="Normal (default)" style={ElementColor.Primary} />
                        <Chip content="Medium"           style={ElementColor.Primary} size={ElementSize.Medium} />
                        <Chip content="Large"            style={ElementColor.Primary} size={ElementSize.Large}  />
                    </div>
                </div>

                {/* Rounded */}
                <div className="box">
                    <p className="subtitle is-5">Rounded</p>
                    <div className="tags">
                        <Chip content="Rounded default" rounded />
                        <Chip content="Rounded primary" rounded style={ElementColor.Primary} />
                        <Chip content="Rounded danger"  rounded style={ElementColor.Danger}  />
                    </div>
                </div>

                {/* Removable */}
                <div className="box">
                    <p className="subtitle is-5">Removable Chips</p>
                    <div className="tags">
                        {chips.map(c => (
                            <Chip
                                key={c}
                                content={c}
                                style={ElementColor.Primary}
                                onRemove={() => removeChip(c)}
                            />
                        ))}
                    </div>
                    {chips.length === 0 && <p className="help">All chips removed. Refresh to reset.</p>}
                </div>

                {/* Removable + light */}
                <div className="box">
                    <p className="subtitle is-5">Removable + Light</p>
                    <div className="tags">
                        <Chip content="Info"    lightColor style={ElementColor.Info}    onRemove={() => alert("Remove Info")}    />
                        <Chip content="Success" lightColor style={ElementColor.Success} onRemove={() => alert("Remove Success")} />
                        <Chip content="Warning" lightColor style={ElementColor.Warning} onRemove={() => alert("Remove Warning")} />
                        <Chip content="Danger"  lightColor style={ElementColor.Danger}  onRemove={() => alert("Remove Danger")}  />
                    </div>
                </div>

                {/* Removable + rounded */}
                <div className="box">
                    <p className="subtitle is-5">Removable + Rounded</p>
                    <div className="tags">
                        <Chip content="Primary" rounded style={ElementColor.Primary} onRemove={() => alert("Remove Primary")} />
                        <Chip content="Info"    rounded style={ElementColor.Info}    onRemove={() => alert("Remove Info")}    />
                        <Chip content="Danger"  rounded style={ElementColor.Danger}  onRemove={() => alert("Remove Danger")}  />
                    </div>
                </div>

                {/* Removable + sizes */}
                <div className="box">
                    <p className="subtitle is-5">Removable + Sizes</p>
                    <div className="tags">
                        <Chip content="Normal" style={ElementColor.Primary}                           onRemove={() => alert("Remove Normal")} />
                        <Chip content="Medium" style={ElementColor.Primary} size={ElementSize.Medium} onRemove={() => alert("Remove Medium")} />
                        <Chip content="Large"  style={ElementColor.Primary} size={ElementSize.Large}  onRemove={() => alert("Remove Large")}  />
                    </div>
                </div>

                {/* Clickable */}
                <div className="box">
                    <p className="subtitle is-5">Clickable</p>
                    <div className="tags">
                        <Chip content="Click me"   style={ElementColor.Info}    onClick={() => alert("Clicked: Info")}    />
                        <Chip content="And me"     style={ElementColor.Success} onClick={() => alert("Clicked: Success")} />
                        <Chip content="Or me too"  style={ElementColor.Warning} onClick={() => alert("Clicked: Warning")} />
                    </div>
                </div>

                {/* Clickable + removable */}
                <div className="box">
                    <p className="subtitle is-5">Clickable + Removable</p>
                    <div className="tags">
                        <Chip
                            content="Click or remove"
                            style={ElementColor.Info}
                            onClick={() => alert("Clicked chip")}
                            onRemove={() => alert("Removed chip")}
                        />
                    </div>
                </div>

                {/* Custom color */}
                <div className="box">
                    <p className="subtitle is-5">Custom Color</p>
                    <div className="tags">
                        <Chip content="Hot pink"    customColor={{ color: "#fff", backgroundColor: "#e91e8c" }} />
                        <Chip content="Deep ocean"  customColor={{ color: "#fff", backgroundColor: "#1565c0" }} />
                        <Chip content="Forest"      customColor={{ color: "#fff", backgroundColor: "#2e7d32" }} />
                        <Chip content="Amber"       customColor={{ color: "#000", backgroundColor: "#ffc107" }} />
                    </div>
                </div>

                {/* Custom color + removable */}
                <div className="box">
                    <p className="subtitle is-5">Custom Color + Removable</p>
                    <div className="tags">
                        <Chip content="Hot pink"   customColor={{ color: "#fff", backgroundColor: "#e91e8c" }} onRemove={() => alert("Remove Hot pink")}   />
                        <Chip content="Deep ocean" customColor={{ color: "#fff", backgroundColor: "#1565c0" }} onRemove={() => alert("Remove Deep ocean")} />
                        <Chip content="Forest"     customColor={{ color: "#fff", backgroundColor: "#2e7d32" }} onRemove={() => alert("Remove Forest")}     />
                        <Chip content="Amber"      customColor={{ color: "#000", backgroundColor: "#ffc107" }} onRemove={() => alert("Remove Amber")}      />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChipExamples;
