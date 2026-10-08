import { FC } from "react";

import ButtonGroup from "@bodynarf/react.components/components/buttonGroup";
import { ButtonStyle, ElementSize } from "@bodynarf/react.components";


const ButtonGroupExamples: FC = () => (
    <section className="section">
        <div className="container">
            <h1 className="title is-3">Button Group</h1>

            <p className="block help">
                A set of attached buttons sharing one style, size, and variant. Use <code>vertical</code> to stack them.
            </p>

            {/* Horizontal */}
            <div className="box">
                <p className="subtitle is-5">Horizontal</p>
                <ButtonGroup
                    style={ButtonStyle.Primary}
                    items={[
                        { caption: "Save", icon: { name: "save" }, onClick: () => console.log("save") },
                        { caption: "Edit", icon: { name: "pencil" }, onClick: () => console.log("edit") },
                        { caption: "Delete", icon: { name: "trash" }, disabled: true },
                    ]}
                />
            </div>

            {/* Vertical */}
            <div className="box">
                <p className="subtitle is-5">Vertical</p>
                <div style={{ maxWidth: "240px" }}>
                    <ButtonGroup
                        vertical
                        style={ButtonStyle.Link}
                        items={[
                            { caption: "Profile", icon: { name: "person" } },
                            { caption: "Settings", icon: { name: "gear" } },
                            { caption: "Logout", icon: { name: "box-arrow-right" } },
                        ]}
                    />
                </div>
            </div>

            {/* Variants */}
            <div className="box">
                <p className="subtitle is-5">Variants</p>
                <div className="field">
                    <ButtonGroup
                        outlined
                        style={ButtonStyle.Info}
                        items={[
                            { caption: "Left" },
                            { caption: "Center" },
                            { caption: "Right" },
                        ]}
                    />
                </div>
                <div className="field">
                    <ButtonGroup
                        rounded
                        light
                        style={ButtonStyle.Success}
                        items={[
                            { caption: "Yes" },
                            { caption: "No" },
                            { caption: "Maybe" },
                        ]}
                    />
                </div>
            </div>

            {/* Sizes & colors */}
            <div className="box">
                <p className="subtitle is-5">Sizes &amp; colors</p>
                {([ElementSize.Small, ElementSize.Normal, ElementSize.Medium, ElementSize.Large] as ElementSize[]).map(sz => (
                    <div key={sz} className="field">
                        <ButtonGroup
                            size={sz}
                            style={ButtonStyle.Warning}
                            items={[
                                { caption: `${sz} A` },
                                { caption: `${sz} B` },
                            ]}
                        />
                    </div>
                ))}
                <div className="field">
                    <ButtonGroup
                        style={ButtonStyle.Danger}
                        items={[
                            { caption: "Cancel" },
                            { caption: "Confirm" },
                        ]}
                    />
                </div>
            </div>
        </div>
    </section>
);

export default ButtonGroupExamples;
