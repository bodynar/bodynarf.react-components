import { FC, useState } from "react";

import TagGroup from "@bodynarf/react.components/components/tagGroup";
import { ElementColor, ElementSize } from "@bodynarf/react.components";

/** All TagGroup component variations */
const TagGroupExamples: FC = () => {
    const [basic,      setBasic]      = useState<string[]>(["react", "typescript"]);
    const [preloaded,  setPreloaded]  = useState<string[]>(["design", "ux", "accessibility"]);
    const [readOnly,   setReadOnly]   = useState<string[]>(["javascript", "css", "html"]);
    const [noAdd,      setNoAdd]      = useState<string[]>(["alpha", "beta"]);
    const [maxTags,    setMaxTags]    = useState<string[]>(["one", "two", "three"]);
    const [colorGroup, setColorGroup] = useState<string[]>(["primary"]);
    const [sizeGroup,  setSizeGroup]  = useState<string[]>(["medium"]);

    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-3">TagGroup</h1>

                {/* Basic */}
                <div className="box">
                    <p className="subtitle is-5">Basic (add + remove)</p>
                    <p className="help mb-4">Type a tag and press Enter or comma to add. Click × to remove.</p>
                    <TagGroup value={basic} onChange={setBasic} placeholder="Add a tag…" />
                    <p className="help mt-2">Tags: {basic.join(", ") || "(empty)"}</p>
                </div>

                {/* Pre-loaded tags */}
                <div className="box">
                    <p className="subtitle is-5">Pre-loaded tags</p>
                    <TagGroup value={preloaded} onChange={setPreloaded} />
                </div>

                {/* Add-only (removable=false) */}
                <div className="box">
                    <p className="subtitle is-5">Add-only (removable=false)</p>
                    <TagGroup value={noAdd} onChange={setNoAdd} removable={false} />
                </div>

                {/* Read-only (addable=false, removable=false) */}
                <div className="box">
                    <p className="subtitle is-5">Read-only (addable=false, removable=false)</p>
                    <TagGroup value={readOnly} onChange={setReadOnly} addable={false} removable={false} />
                </div>

                {/* Disabled */}
                <div className="box">
                    <p className="subtitle is-5">Disabled</p>
                    <TagGroup value={["disabled-tag"]} onChange={() => {}} disabled />
                </div>

                {/* maxTags */}
                <div className="box">
                    <p className="subtitle is-5">maxTags=4</p>
                    <p className="help mb-4">Input disappears once 4 tags are reached.</p>
                    <TagGroup value={maxTags} onChange={setMaxTags} maxTags={4} />
                    <p className="help mt-2">{maxTags.length}/4 tags</p>
                </div>

                {/* Custom confirm keys */}
                <div className="box">
                    <p className="subtitle is-5">confirmKeys = Enter only</p>
                    <p className="help mb-4">Comma no longer adds a tag.</p>
                    <TagGroup value={[]} onChange={() => {}} confirmKeys={["Enter"]} />
                </div>

                {/* Colors */}
                <div className="box">
                    <p className="subtitle is-5">Color variants</p>
                    <div className="is-flex" style={{ flexDirection: "column", gap: "0.75rem" }}>
                        {([
                            [ElementColor.Default, "Default"],
                            [ElementColor.Primary, "Primary"],
                            [ElementColor.Link,    "Link"   ],
                            [ElementColor.Info,    "Info"   ],
                            [ElementColor.Success, "Success"],
                            [ElementColor.Warning, "Warning"],
                            [ElementColor.Danger,  "Danger" ],
                        ] as const).map(([c, label]) => (
                            <div key={c} className="is-flex is-align-items-center" style={{ gap: "1rem" }}>
                                <span className="has-text-grey is-size-7" style={{ width: 64 }}>{label}</span>
                                <TagGroup
                                    value={colorGroup}
                                    onChange={setColorGroup}
                                    color={c}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sizes */}
                <div className="box">
                    <p className="subtitle is-5">Sizes (Normal and Medium only — no Small)</p>
                    <div className="is-flex" style={{ flexDirection: "column", gap: "0.75rem" }}>
                        {([
                            [ElementSize.Normal, "Normal"],
                            [ElementSize.Medium, "Medium"],
                        ] as const).map(([s, label]) => (
                            <div key={s} className="is-flex is-align-items-center" style={{ gap: "1rem" }}>
                                <span className="has-text-grey is-size-7" style={{ width: 64 }}>{label}</span>
                                <TagGroup
                                    value={sizeGroup}
                                    onChange={setSizeGroup}
                                    size={s}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TagGroupExamples;
