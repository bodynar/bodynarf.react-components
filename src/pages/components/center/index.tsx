import { CSSProperties, FC } from "react";

import CenterComponent from "@bodynarf/react.components/components/center";
import Tag from "@bodynarf/react.components/components/tag";

import ComponentUseCase from "@app/sharedComponents/useCase";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

const containerStyle: CSSProperties = {
    position: "relative",
    height: "160px",
    border: "1px dashed #dbdbdb",
    borderRadius: "4px",
};

/** Center component demo */
const Center: FC = () => {
    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Center"
                version="1.16"
                baseTypeName="BaseElementProps"
                description="Absolutely centers its content relative to the nearest parent with `position: relative`. By default centers on both axes."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Wrap any content — it will be centered on both axes inside the nearest positioned parent (the dashed box below)."
                code={
                    <CodeExample
                        code={[
                            `import Center from "@bodynarf/react.components/components/center";`,
                            "",
                            `<div style={{ position: "relative", height: 160 }}>`,
                            `    <Center>`,
                            `        <span className="tag is-primary">Centered</span>`,
                            `    </Center>`,
                            `</div>`,
                        ].join("\n")}
                    />
                }
            >
                <div style={containerStyle}>
                    <CenterComponent>
                        <Tag content="Centered" />
                    </CenterComponent>
                </div>
            </ComponentUseCase>

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">
                    Custom component props
                </h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="axis"
                description="Axis to center along: `horizontal` keeps the vertical position (centers left ↔ right), `vertical` keeps the horizontal position (centers top ↔ bottom), `both` (default) centers on both."
                code={
                    <CodeExample
                        code={[
                            `import Center from "@bodynarf/react.components/components/center";`,
                            "",
                            `<div style={{ position: "relative", height: 160 }}>`,
                            `    <Center axis="horizontal">…</Center>`,
                            `</div>`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "16px", flexWrap: "wrap" }}>
                    <div style={{ ...containerStyle, flex: "1 1 200px" }}>
                        <CenterComponent axis="horizontal">
                            <Tag content="horizontal" />
                        </CenterComponent>
                    </div>
                    <div style={{ ...containerStyle, flex: "1 1 200px" }}>
                        <CenterComponent axis="vertical">
                            <Tag content="vertical" />
                        </CenterComponent>
                    </div>
                    <div style={{ ...containerStyle, flex: "1 1 200px" }}>
                        <CenterComponent axis="both">
                            <Tag content="both" />
                        </CenterComponent>
                    </div>
                </div>
            </ComponentUseCase>
        </section>
    );
};

export default Center;
