import { FC, useState } from "react";

import { SegmentedControl as SegmentedControlComponent } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

type View = "list" | "grid" | "table";

const viewOptions = [
    { value: "list", label: "List" },
    { value: "grid", label: "Grid" },
    { value: "table", label: "Table" },
] as Array<{ value: View; label: string }>;

const viewOptionsWithIcons = [
    { value: "list", label: "List", icon: "list-ul" },
    { value: "grid", label: "Grid", icon: "grid" },
    { value: "table", label: "Table", icon: "table" },
] as Array<{ value: View; label: string; icon?: string }>;

const abcOptions = [
    { value: "a", label: "Option A" },
    { value: "b", label: "Option B" },
    { value: "c", label: "Option C" },
];

/** SegmentedControl component demo */
const SegmentedControl: FC = () => {
    const [view, setView] = useState<View>("list");
    const [colorValue, setColorValue] = useState("a");
    const [sizeValue, setSizeValue] = useState("a");
    const [fullWidthValue, setFullWidthValue] = useState("a");
    const [disabledValue] = useState("a");
    const [disabledOptionValue, setDisabledOptionValue] = useState("a");

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="SegmentedControl"
                version="1.15"
                baseTypeName="BaseElementProps"
                description="Pill-style option selector (tab bar alternative) for switching between a small set of values. Fully controlled."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Provide options, value, and onChange — all three are required."
                code={
                    <CodeExample
                        code={[
                            `import { SegmentedControl } from "@bodynarf/react.components";`,
                            "",
                            `type View = "list" | "grid" | "table";`,
                            `const [view, setView] = useState<View>("list");`,
                            "",
                            `<SegmentedControl`,
                            `    value={view}`,
                            `    options={[`,
                            `        { value: "list", label: "List" },`,
                            `        { value: "grid", label: "Grid" },`,
                            `        { value: "table", label: "Table" },`,
                            `    ]}`,
                            `    onChange={setView}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <SegmentedControlComponent
                        value={view}
                        options={viewOptions}
                        onChange={v => setView(v as View)}
                    />
                    <p className="mt-2 has-text-grey">Selected: {view}</p>
                </div>
            </ComponentUseCase>

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">Custom component props</h4>
            </div>

            <ComponentColorCase
                captionIsCode
                caption="color"
                description="Accent color applied to the active segment. Defaults to Primary."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { SegmentedControl, ElementColor } from "@bodynarf/react.components";`,
                            "",
                            `<SegmentedControl`,
                            `    color={ElementColor.${id}}`,
                            `    value={value}`,
                            `    options={[...]}`,
                            `    onChange={setValue}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
                componentProvider={color =>
                    <SegmentedControlComponent
                        color={color}
                        value={colorValue}
                        options={abcOptions}
                        onChange={setColorValue}
                    />
                }
            />

            <ComponentSizeCase
                captionIsCode
                caption="size"
                description="Size of the control. Supports all ElementSize values."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { SegmentedControl, ElementSize } from "@bodynarf/react.components";`,
                            "",
                            `<SegmentedControl`,
                            `    size={ElementSize.${id}}`,
                            `    value={value}`,
                            `    options={[...]}`,
                            `    onChange={setValue}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
                componentProvider={size =>
                    <SegmentedControlComponent
                        size={size}
                        value={sizeValue}
                        options={abcOptions}
                        onChange={setSizeValue}
                    />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="fullWidth"
                description="Stretch the control to fill the full container width."
                code={
                    <CodeExample
                        code={[
                            `import { SegmentedControl } from "@bodynarf/react.components";`,
                            "",
                            `<SegmentedControl`,
                            `    fullWidth`,
                            `    value={value}`,
                            `    options={[...]}`,
                            `    onChange={setValue}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <SegmentedControlComponent
                    fullWidth
                    value={fullWidthValue}
                    options={abcOptions}
                    onChange={setFullWidthValue}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="Disable all options globally."
                code={
                    <CodeExample
                        code={[
                            `import { SegmentedControl } from "@bodynarf/react.components";`,
                            "",
                            `<SegmentedControl`,
                            `    disabled`,
                            `    value={value}`,
                            `    options={[...]}`,
                            `    onChange={setValue}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <SegmentedControlComponent
                    disabled
                    value={disabledValue}
                    options={abcOptions}
                    onChange={() => undefined}
                />
            </ComponentUseCase>

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">SegmentedOption props</h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="icon"
                description="Bootstrap icon name (without bi- prefix) displayed next to the label."
                code={
                    <CodeExample
                        code={[
                            `import { SegmentedControl } from "@bodynarf/react.components";`,
                            "",
                            `<SegmentedControl`,
                            `    value={view}`,
                            `    options={[`,
                            `        { value: "list", label: "List", icon: "list-ul" },`,
                            `        { value: "grid", label: "Grid", icon: "grid" },`,
                            `        { value: "table", label: "Table", icon: "table" },`,
                            `    ]}`,
                            `    onChange={setView}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <SegmentedControlComponent
                    value={view}
                    options={viewOptionsWithIcons}
                    onChange={v => setView(v as View)}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled (option)"
                description="Individual options can be disabled independently."
                code={
                    <CodeExample
                        code={[
                            `import { SegmentedControl } from "@bodynarf/react.components";`,
                            "",
                            `<SegmentedControl`,
                            `    value={value}`,
                            `    options={[`,
                            `        { value: "a", label: "Option A" },`,
                            `        { value: "b", label: "Option B", disabled: true },`,
                            `        { value: "c", label: "Option C" },`,
                            `    ]}`,
                            `    onChange={setValue}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <SegmentedControlComponent
                    value={disabledOptionValue}
                    options={[
                        { value: "a", label: "Option A" },
                        { value: "b", label: "Option B", disabled: true },
                        { value: "c", label: "Option C" },
                    ]}
                    onChange={setDisabledOptionValue}
                />
            </ComponentUseCase>
        </section>
    );
};

export default SegmentedControl;
