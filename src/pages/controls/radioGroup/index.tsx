import { FC, useCallback, useState } from "react";

import { ElementColor, ElementSize, RadioGroup as RadioGroupComponent, RadioItem } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

const sampleItems: Array<RadioItem> = [
    { id: "1", value: "option1", displayValue: "Option 1" },
    { id: "2", value: "option2", displayValue: "Option 2" },
    { id: "3", value: "option3", displayValue: "Option 3" },
];

const sampleItemsWithDisabled: Array<RadioItem> = [
    { id: "1", value: "option1", displayValue: "Option 1" },
    { id: "2", value: "option2", displayValue: "Option 2 (disabled)", disabled: true },
    { id: "3", value: "option3", displayValue: "Option 3" },
];

/** RadioGroup component demo */
const RadioGroup: FC = () => {
    const [onValueChangeLog, setOnValueChangeLog] = useState("");
    const appendOnValueChangeLog = useCallback(
        (item: RadioItem) => setOnValueChangeLog(
            t => t
                + "\n"
                + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getMilliseconds()
                + " => " + `selected: ${item.displayValue} (value: ${item.value})`
        ),
        []
    );

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="RadioGroup"
                description={
                    <>
                        RadioGroup - a component for single selection from multiple options with Bulma styling.
                        <br />
                        Supports various styles including horizontal layout, filled background, and custom colors.
                    </>
                }
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Minimal configuration: provide an array of items for selection"
                code={
                    <CodeExample
                        code={[
                            `import { RadioGroup, RadioItem } from "@bodynarf/react.components";`,
                            "",
                            "const items: Array<RadioItem> = [",
                            `    { id: "1", value: "option1", displayValue: "Option 1" },`,
                            `    { id: "2", value: "option2", displayValue: "Option 2" },`,
                            `    { id: "3", value: "option3", displayValue: "Option 3" },`,
                            "];",
                            "",
                            "/* ... */",
                            "",
                            "<RadioGroup",
                            "    items={items}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <RadioGroupComponent
                    items={sampleItems}
                />
            </ComponentUseCase>

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">
                    Custom component props
                </h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="value"
                description="Pre-select an option by providing the item id"
                code={
                    <CodeExample
                        code={[
                            `import { RadioGroup, RadioItem } from "@bodynarf/react.components";`,
                            "",
                            "const items: Array<RadioItem> = [",
                            `    { id: "1", value: "option1", displayValue: "Option 1" },`,
                            `    { id: "2", value: "option2", displayValue: "Option 2" },`,
                            `    { id: "3", value: "option3", displayValue: "Option 3" },`,
                            "];",
                            "",
                            "/* ... */",
                            "",
                            "<RadioGroup",
                            "    items={items}",
                            `    value="2"`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <RadioGroupComponent
                    items={sampleItems}
                    value="2"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onValueChange"
                description="Handler for the value change event. Called when a different option is selected."
                code={
                    <CodeExample
                        code={[
                            `import { useCallback } from "react";`,
                            "",
                            `import { RadioGroup, RadioItem } from "@bodynarf/react.components";`,
                            "",
                            "const items: Array<RadioItem> = [",
                            `    { id: "1", value: "option1", displayValue: "Option 1" },`,
                            `    { id: "2", value: "option2", displayValue: "Option 2" },`,
                            `    { id: "3", value: "option3", displayValue: "Option 3" },`,
                            "];",
                            "",
                            "/* ... */",
                            `const handleValueChange = useCallback((item: RadioItem) => {`,
                            `    console.log("Selected:", item.displayValue);`,
                            `}, []);`,
                            "/* ... */",
                            "",
                            "<RadioGroup",
                            "    items={items}",
                            "    onValueChange={handleValueChange}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <RadioGroupComponent
                    items={sampleItems}
                    onValueChange={appendOnValueChangeLog}
                />
                <p style={{ whiteSpace: "pre-line" }}>
                    {onValueChangeLog}
                </p>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="horizontal"
                description="Display options in a horizontal row instead of vertical stack"
                code={
                    <CodeExample
                        code={[
                            `import { RadioGroup, RadioItem } from "@bodynarf/react.components";`,
                            "",
                            "const items: Array<RadioItem> = [",
                            `    { id: "1", value: "option1", displayValue: "Option 1" },`,
                            `    { id: "2", value: "option2", displayValue: "Option 2" },`,
                            `    { id: "3", value: "option3", displayValue: "Option 3" },`,
                            "];",
                            "",
                            "/* ... */",
                            "",
                            "<RadioGroup",
                            "    items={items}",
                            "    horizontal",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <RadioGroupComponent
                    items={sampleItems}
                    horizontal
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="block"
                description="Display options with filled background style"
                code={
                    <CodeExample
                        code={[
                            `import { RadioGroup, RadioItem } from "@bodynarf/react.components";`,
                            "",
                            "const items: Array<RadioItem> = [",
                            `    { id: "1", value: "option1", displayValue: "Option 1" },`,
                            `    { id: "2", value: "option2", displayValue: "Option 2" },`,
                            `    { id: "3", value: "option3", displayValue: "Option 3" },`,
                            "];",
                            "",
                            "/* ... */",
                            "",
                            "<RadioGroup",
                            "    items={items}",
                            "    block",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <RadioGroupComponent
                    items={sampleItems}
                    block
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="circle"
                description="Use circular radio button style (enabled by default)"
                code={
                    <CodeExample
                        code={[
                            `import { RadioGroup, RadioItem } from "@bodynarf/react.components";`,
                            "",
                            "const items: Array<RadioItem> = [",
                            `    { id: "1", value: "option1", displayValue: "Option 1" },`,
                            `    { id: "2", value: "option2", displayValue: "Option 2" },`,
                            `    { id: "3", value: "option3", displayValue: "Option 3" },`,
                            "];",
                            "",
                            "/* ... */",
                            "",
                            "<RadioGroup",
                            "    items={items}",
                            "    circle={false}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <RadioGroupComponent
                    items={sampleItems}
                    circle={false}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="withoutBorder"
                description="Remove the border from radio buttons"
                code={
                    <CodeExample
                        code={[
                            `import { RadioGroup, RadioItem } from "@bodynarf/react.components";`,
                            "",
                            "const items: Array<RadioItem> = [",
                            `    { id: "1", value: "option1", displayValue: "Option 1" },`,
                            `    { id: "2", value: "option2", displayValue: "Option 2" },`,
                            `    { id: "3", value: "option3", displayValue: "Option 3" },`,
                            "];",
                            "",
                            "/* ... */",
                            "",
                            "<RadioGroup",
                            "    items={items}",
                            "    withoutBorder",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <RadioGroupComponent
                    items={sampleItems}
                    withoutBorder
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="hasBackgroundColor"
                description="Add background color to the radio buttons (requires style prop)"
                code={
                    <CodeExample
                        code={[
                            `import { RadioGroup, RadioItem, ElementColor } from "@bodynarf/react.components";`,
                            "",
                            "const items: Array<RadioItem> = [",
                            `    { id: "1", value: "option1", displayValue: "Option 1" },`,
                            `    { id: "2", value: "option2", displayValue: "Option 2" },`,
                            `    { id: "3", value: "option3", displayValue: "Option 3" },`,
                            "];",
                            "",
                            "/* ... */",
                            "",
                            "<RadioGroup",
                            "    items={items}",
                            "    hasBackgroundColor",
                            "    style={ElementColor.Primary}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <RadioGroupComponent
                    items={sampleItems}
                    hasBackgroundColor
                    style={ElementColor.Primary}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled items"
                description="Individual items can be disabled by setting the disabled property"
                code={
                    <CodeExample
                        code={[
                            `import { RadioGroup, RadioItem } from "@bodynarf/react.components";`,
                            "",
                            "const items: Array<RadioItem> = [",
                            `    { id: "1", value: "option1", displayValue: "Option 1" },`,
                            `    { id: "2", value: "option2", displayValue: "Option 2 (disabled)", disabled: true },`,
                            `    { id: "3", value: "option3", displayValue: "Option 3" },`,
                            "];",
                            "",
                            "/* ... */",
                            "",
                            "<RadioGroup",
                            "    items={items}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <RadioGroupComponent
                    items={sampleItemsWithDisabled}
                />
            </ComponentUseCase>

            <ComponentUseCase
                caption="Combined styles"
                description="Multiple style options can be combined"
                code={
                    <CodeExample
                        code={[
                            `import { RadioGroup, RadioItem, ElementColor } from "@bodynarf/react.components";`,
                            "",
                            "const items: Array<RadioItem> = [",
                            `    { id: "1", value: "option1", displayValue: "Option 1" },`,
                            `    { id: "2", value: "option2", displayValue: "Option 2" },`,
                            `    { id: "3", value: "option3", displayValue: "Option 3" },`,
                            "];",
                            "",
                            "/* ... */",
                            "",
                            "<RadioGroup",
                            "    items={items}",
                            "    horizontal",
                            "    style={ElementColor.Success}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <RadioGroupComponent
                    items={sampleItems}
                    horizontal
                    style={ElementColor.Success}
                />
            </ComponentUseCase>

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">
                    Size and color variations
                </h4>
            </div>

            <ComponentSizeCase
                captionIsCode
                caption="size"
                description="The component supports all sizes defined in the ElementSize type"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementSize, RadioGroup, RadioItem } from "@bodynarf/react.components";`,
                            "",
                            "const items: Array<RadioItem> = [",
                            `    { id: "1", value: "option1", displayValue: "Option 1" },`,
                            `    { id: "2", value: "option2", displayValue: "Option 2" },`,
                            `    { id: "3", value: "option3", displayValue: "Option 3" },`,
                            "];",
                            "",
                            "/* ... */",
                            "",
                            '<RadioGroup',
                            '    items={items}',
                            `    size={ElementSize.${id}}`,
                            '/>',
                        ].join("\n")}
                    />
                }
                componentProvider={(size: ElementSize) =>
                    <RadioGroupComponent
                        items={sampleItems}
                        size={size}
                    />
                }
            />

            <ComponentColorCase
                captionIsCode
                caption="style"
                description="The component supports all colors defined in the ElementColor type"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementColor, RadioGroup, RadioItem } from "@bodynarf/react.components";`,
                            "",
                            "const items: Array<RadioItem> = [",
                            `    { id: "1", value: "option1", displayValue: "Option 1" },`,
                            `    { id: "2", value: "option2", displayValue: "Option 2" },`,
                            `    { id: "3", value: "option3", displayValue: "Option 3" },`,
                            "];",
                            "",
                            "/* ... */",
                            "",
                            '<RadioGroup',
                            '    items={items}',
                            `    style={ElementColor.${id}}`,
                            '/>',
                        ].join("\n")}
                    />
                }
                componentProvider={(color: ElementColor) =>
                    <RadioGroupComponent
                        items={sampleItems}
                        style={color}
                    />
                }
            />
        </section>
    );
};

export default RadioGroup;
