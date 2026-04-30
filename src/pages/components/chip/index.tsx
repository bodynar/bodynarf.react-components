import { FC, useRef } from "react";

import ChipComponent from "@bodynarf/react.components/components/chip";
import { ElementColor, ElementSize } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";
import Log, { LogRef } from "@app/sharedComponents/log";

/** Chip component demo */
const Chip: FC = () => {
    const onClickLogRef = useRef<LogRef>(null);
    const onRemoveLogRef = useRef<LogRef>(null);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Chip"
                version="1.15"
                baseTypeName="BaseElementProps"
                description="Compact element similar to Tag, but with the delete button rendered inside the chip itself. Supports all Tag features: colors, sizes, rounded, light variants."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Only content is required."
                code={
                    <CodeExample
                        code={[
                            `import Chip from "@bodynarf/react.components/components/chip";`,
                            "",
                            `<Chip content="React" />`,
                        ].join("\n")}
                    />
                }
            >
                <ChipComponent content="React" />
            </ComponentUseCase>

            <hr />
            <div><h4 className="subtitle is-4 has-text-weight-semibold">Custom component props</h4></div>

            <ComponentUseCase
                captionIsCode
                caption="content"
                description="Text displayed inside the chip. This is the only required prop."
                code={
                    <CodeExample
                        code={[
                            `import Chip from "@bodynarf/react.components/components/chip";`,
                            "",
                            `<Chip content="TypeScript" />`,
                        ].join("\n")}
                    />
                }
            >
                <ChipComponent content="TypeScript" />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="size"
                description="Chip supports Normal, Medium and Large sizes. Small is not supported."
                code={
                    <CodeExample
                        code={[
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import Chip from "@bodynarf/react.components/components/chip";`,
                            "",
                            `<Chip content="Chip" size={ElementSize.Normal} />`,
                            `<Chip content="Chip" size={ElementSize.Medium} />`,
                            `<Chip content="Chip" size={ElementSize.Large} />`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "24px", alignItems: "flex-end" }}>
                    {([
                        [ElementSize.Normal, "Normal"],
                        [ElementSize.Medium, "Medium"],
                        [ElementSize.Large,  "Large"],
                    ] as const).map(([size, label]) => (
                        <div key={label} className="is-flex is-flex-direction-column is-align-items-center" style={{ gap: "4px" }}>
                            <ChipComponent content="Chip" size={size} />
                            <span className="has-text-grey is-size-7">{label}</span>
                        </div>
                    ))}
                </div>
            </ComponentUseCase>

            <ComponentColorCase
                captionIsCode
                caption="style"
                description="Color variant of the chip."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import Chip from "@bodynarf/react.components/components/chip";`,
                            "",
                            `<Chip content="Chip" style={ElementColor.${id}} />`,
                        ].join("\n")}
                    />
                }
                componentProvider={style =>
                    <ChipComponent content="Chip" style={style} />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="rounded"
                description="Render chip with rounded (pill-style) borders."
                code={
                    <CodeExample
                        code={[
                            `import Chip from "@bodynarf/react.components/components/chip";`,
                            "",
                            `<Chip content="Rounded chip" rounded />`,
                        ].join("\n")}
                    />
                }
            >
                <ChipComponent content="Rounded chip" rounded />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="lightColor"
                description="Use the light variant of the assigned color."
                code={
                    <CodeExample
                        code={[
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import Chip from "@bodynarf/react.components/components/chip";`,
                            "",
                            `<Chip`,
                            `    lightColor`,
                            `    content="Light chip"`,
                            `    style={ElementColor.Primary}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <ChipComponent content="Light chip" style={ElementColor.Primary} lightColor />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="customColor"
                description="Manually override text and background colors via an object with color and backgroundColor fields."
                code={
                    <CodeExample
                        code={[
                            `import Chip from "@bodynarf/react.components/components/chip";`,
                            "",
                            `<Chip`,
                            `    content="Custom color"`,
                            `    customColor={{ color: "#fff", backgroundColor: "#7c3aed" }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <ChipComponent
                    content="Custom color"
                    customColor={{ color: "#fff", backgroundColor: "#7c3aed" }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="removeLabel"
                description="aria-label for the remove (×) button. Defaults to &quot;Remove&quot;."
                code={
                    <CodeExample
                        code={[
                            `import Chip from "@bodynarf/react.components/components/chip";`,
                            "",
                            `<Chip`,
                            `    content="Chip"`,
                            `    removeLabel="Close"`,
                            `    onRemove={() => undefined}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <ChipComponent
                    content="Chip"
                    removeLabel="Close"
                    onRemove={() => undefined}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onClick"
                description="Called when the chip body is clicked."
                code={
                    <CodeExample
                        code={[
                            `import Chip from "@bodynarf/react.components/components/chip";`,
                            "",
                            `<Chip`,
                            `    content="Clickable"`,
                            `    onClick={() => console.log("clicked")}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <ChipComponent
                    content="Clickable"
                    style={ElementColor.Info}
                    onClick={() => onClickLogRef.current?.append("onClick fired")}
                />
                <Log ref={onClickLogRef} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onRemove"
                description="Called when the × button inside the chip is clicked. When provided, a delete icon is rendered inside the chip."
                code={
                    <CodeExample
                        code={[
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import Chip from "@bodynarf/react.components/components/chip";`,
                            "",
                            `<Chip`,
                            `    content="Removable"`,
                            `    style={ElementColor.Danger}`,
                            `    onRemove={() => console.log("removed")}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <ChipComponent
                    content="Removable"
                    style={ElementColor.Danger}
                    onRemove={() => onRemoveLogRef.current?.append("onRemove fired")}
                />
                <Log ref={onRemoveLogRef} />
            </ComponentUseCase>
        </section>
    );
};

export default Chip;
