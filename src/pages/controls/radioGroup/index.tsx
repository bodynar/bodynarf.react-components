import { FC, useRef, useState } from "react";

import { ElementColor, RadioGroup as RadioGroupComponent, RadioItem } from "@bodynarf/react.components";
import "@bodynarf/react.components/components/primitives/radioGroup/component/style.scss";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";
import Log, { LogRef } from "@app/sharedComponents/log";

const sampleItems: Array<RadioItem> = [
    { id: "1", value: "option1", displayValue: "Option 1" },
    { id: "2", value: "option2", displayValue: "Option 2" },
    { id: "3", value: "option3", displayValue: "Option 3" },
];

/** RadioGroup component demo */
const RadioGroup: FC = () => {
    const [minimalValue, setMinimalValue] = useState<string | undefined>(undefined);
    const [valueValue, setValueValue] = useState<string | undefined>("2");
    const [nameValue, setNameValue] = useState<string | undefined>(undefined);
    const [disabledValue, setDisabledValue] = useState<string | undefined>(undefined);
    const [horizontalValue, setHorizontalValue] = useState<string | undefined>(undefined);
    const [blockValue, setBlockValue] = useState<string | undefined>(undefined);
    const [circleValue, setCircleValue] = useState<string | undefined>(undefined);
    const [withoutBorderValue, setWithoutBorderValue] = useState<string | undefined>(undefined);
    const [hasBackgroundColorValue, setHasBackgroundColorValue] = useState<string | undefined>(undefined);
    const [onValueChangeValue, setOnValueChangeValue] = useState<string | undefined>(undefined);
    const onValueChangeLogRef = useRef<LogRef>(null);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="RadioGroup"
                version="1.14"
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
                description="Provide an array of items — that is the only required prop."
                code={
                    <CodeExample
                        code={[
                            `import { RadioGroup, RadioItem } from "@bodynarf/react.components";`,
                            "",
                            `const items: Array<RadioItem> = [`,
                            `    { id: "1", value: "option1", displayValue: "Option 1" },`,
                            `    { id: "2", value: "option2", displayValue: "Option 2" },`,
                            `    { id: "3", value: "option3", displayValue: "Option 3" },`,
                            `];`,
                            "",
                            `<RadioGroup items={items} />`,
                        ].join("\n")}
                    />
                }
            >
                <RadioGroupComponent
                    items={sampleItems}
                    value={minimalValue}
                    onValueChange={item => setMinimalValue(item.id)}
                />
            </ComponentUseCase>

            <hr />
            <div><h4 className="subtitle is-4 has-text-weight-semibold">Custom component props</h4></div>

            <ComponentUseCase
                captionIsCode
                caption="value"
                description="Pre-selects an option by item id. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import { RadioGroup, RadioItem } from "@bodynarf/react.components";`,
                            "",
                            `const items: Array<RadioItem> = [`,
                            `    { id: "1", value: "option1", displayValue: "Option 1" },`,
                            `    { id: "2", value: "option2", displayValue: "Option 2" },`,
                            `    { id: "3", value: "option3", displayValue: "Option 3" },`,
                            `];`,
                            "",
                            `<RadioGroup`,
                            `    items={items}`,
                            `    value="2"`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <RadioGroupComponent
                    items={sampleItems}
                    value={valueValue}
                    onValueChange={item => setValueValue(item.id)}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="name"
                description="Specifies the HTML name attribute shared by all radio inputs in the group."
                code={
                    <CodeExample
                        code={[
                            `import { RadioGroup, RadioItem } from "@bodynarf/react.components";`,
                            "",
                            `const items: Array<RadioItem> = [`,
                            `    { id: "1", value: "option1", displayValue: "Option 1" },`,
                            `    { id: "2", value: "option2", displayValue: "Option 2" },`,
                            `    { id: "3", value: "option3", displayValue: "Option 3" },`,
                            `];`,
                            "",
                            `<RadioGroup`,
                            `    items={items}`,
                            `    name="myGroup"`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <RadioGroupComponent
                    items={sampleItems}
                    name="myGroup"
                    value={nameValue}
                    onValueChange={item => setNameValue(item.id)}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="Renders all radio inputs as non-interactive. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import { RadioGroup, RadioItem } from "@bodynarf/react.components";`,
                            "",
                            `const items: Array<RadioItem> = [`,
                            `    { id: "1", value: "option1", displayValue: "Option 1" },`,
                            `    { id: "2", value: "option2", displayValue: "Option 2" },`,
                            `    { id: "3", value: "option3", displayValue: "Option 3" },`,
                            `];`,
                            "",
                            `<RadioGroup`,
                            `    items={items}`,
                            `    disabled`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <RadioGroupComponent
                    items={sampleItems}
                    disabled
                    value={disabledValue}
                    onValueChange={item => setDisabledValue(item.id)}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="horizontal"
                description="Displays options in a horizontal row. Defaults to false (vertical)."
                code={
                    <CodeExample
                        code={[
                            `import { RadioGroup, RadioItem } from "@bodynarf/react.components";`,
                            "",
                            `const items: Array<RadioItem> = [`,
                            `    { id: "1", value: "option1", displayValue: "Option 1" },`,
                            `    { id: "2", value: "option2", displayValue: "Option 2" },`,
                            `    { id: "3", value: "option3", displayValue: "Option 3" },`,
                            `];`,
                            "",
                            `<RadioGroup`,
                            `    items={items}`,
                            `    horizontal`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <RadioGroupComponent
                    items={sampleItems}
                    horizontal
                    value={horizontalValue}
                    onValueChange={item => setHorizontalValue(item.id)}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="block"
                description="Applies filled background style to radio buttons. Defaults to false."
                code={
                    <CodeExample
                        code={[
                            `import { RadioGroup, RadioItem } from "@bodynarf/react.components";`,
                            "",
                            `const items: Array<RadioItem> = [`,
                            `    { id: "1", value: "option1", displayValue: "Option 1" },`,
                            `    { id: "2", value: "option2", displayValue: "Option 2" },`,
                            `    { id: "3", value: "option3", displayValue: "Option 3" },`,
                            `];`,
                            "",
                            `<RadioGroup`,
                            `    items={items}`,
                            `    block`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <RadioGroupComponent
                    items={sampleItems}
                    block
                    value={blockValue}
                    onValueChange={item => setBlockValue(item.id)}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="circle"
                description="Uses circular radio button style. Defaults to true; set to false to disable."
                code={
                    <CodeExample
                        code={[
                            `import { RadioGroup, RadioItem } from "@bodynarf/react.components";`,
                            "",
                            `const items: Array<RadioItem> = [`,
                            `    { id: "1", value: "option1", displayValue: "Option 1" },`,
                            `    { id: "2", value: "option2", displayValue: "Option 2" },`,
                            `    { id: "3", value: "option3", displayValue: "Option 3" },`,
                            `];`,
                            "",
                            `<RadioGroup`,
                            `    items={items}`,
                            `    circle={false}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <RadioGroupComponent
                    items={sampleItems}
                    circle={false}
                    value={circleValue}
                    onValueChange={item => setCircleValue(item.id)}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="withoutBorder"
                description="Removes the border from radio buttons. Defaults to false."
                code={
                    <CodeExample
                        code={[
                            `import { RadioGroup, RadioItem } from "@bodynarf/react.components";`,
                            "",
                            `const items: Array<RadioItem> = [`,
                            `    { id: "1", value: "option1", displayValue: "Option 1" },`,
                            `    { id: "2", value: "option2", displayValue: "Option 2" },`,
                            `    { id: "3", value: "option3", displayValue: "Option 3" },`,
                            `];`,
                            "",
                            `<RadioGroup`,
                            `    items={items}`,
                            `    withoutBorder`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <RadioGroupComponent
                    items={sampleItems}
                    withoutBorder
                    value={withoutBorderValue}
                    onValueChange={item => setWithoutBorderValue(item.id)}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="hasBackgroundColor"
                description="Applies background color to radio buttons. Only works when style is also set. Defaults to false."
                code={
                    <CodeExample
                        code={[
                            `import { RadioGroup, RadioItem, ElementColor } from "@bodynarf/react.components";`,
                            "",
                            `const items: Array<RadioItem> = [`,
                            `    { id: "1", value: "option1", displayValue: "Option 1" },`,
                            `    { id: "2", value: "option2", displayValue: "Option 2" },`,
                            `    { id: "3", value: "option3", displayValue: "Option 3" },`,
                            `];`,
                            "",
                            `<RadioGroup`,
                            `    items={items}`,
                            `    hasBackgroundColor`,
                            `    style={ElementColor.Primary}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <RadioGroupComponent
                    items={sampleItems}
                    hasBackgroundColor
                    style={ElementColor.Primary}
                    value={hasBackgroundColorValue}
                    onValueChange={item => setHasBackgroundColorValue(item.id)}
                />
            </ComponentUseCase>

            <ComponentSizeCase
                captionIsCode
                caption="size"
                description="Controls the visual size of the component. Supports all ElementSize values."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { RadioGroup, RadioItem, ElementSize } from "@bodynarf/react.components";`,
                            "",
                            `const items: Array<RadioItem> = [`,
                            `    { id: "1", value: "option1", displayValue: "Option 1" },`,
                            `    { id: "2", value: "option2", displayValue: "Option 2" },`,
                            `    { id: "3", value: "option3", displayValue: "Option 3" },`,
                            `];`,
                            "",
                            `<RadioGroup`,
                            `    items={items}`,
                            `    size={ElementSize.${id}}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
                componentProvider={size =>
                    <RadioGroupComponent items={sampleItems} size={size} />
                }
            />

            <ComponentColorCase
                captionIsCode
                caption="style"
                description="Colors the radio buttons. Supports all ElementColor values."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { RadioGroup, RadioItem, ElementColor } from "@bodynarf/react.components";`,
                            "",
                            `const items: Array<RadioItem> = [`,
                            `    { id: "1", value: "option1", displayValue: "Option 1" },`,
                            `    { id: "2", value: "option2", displayValue: "Option 2" },`,
                            `    { id: "3", value: "option3", displayValue: "Option 3" },`,
                            `];`,
                            "",
                            `<RadioGroup`,
                            `    items={items}`,
                            `    style={ElementColor.${id}}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
                componentProvider={style =>
                    <RadioGroupComponent items={sampleItems} style={style} />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="onValueChange"
                description="Called when the selected option changes. Receives the selected RadioItem."
                code={
                    <CodeExample
                        code={[
                            `import { RadioGroup, RadioItem } from "@bodynarf/react.components";`,
                            "",
                            `const items: Array<RadioItem> = [`,
                            `    { id: "1", value: "option1", displayValue: "Option 1" },`,
                            `    { id: "2", value: "option2", displayValue: "Option 2" },`,
                            `    { id: "3", value: "option3", displayValue: "Option 3" },`,
                            `];`,
                            "",
                            `<RadioGroup`,
                            `    items={items}`,
                            `    onValueChange={item => console.log("selected:", item.displayValue)}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <RadioGroupComponent
                    items={sampleItems}
                    value={onValueChangeValue}
                    onValueChange={item => {
                        setOnValueChangeValue(item.id);
                        onValueChangeLogRef.current?.append(`selected: ${item.displayValue} (value: ${item.value})`);
                    }}
                />
                <Log ref={onValueChangeLogRef} />
            </ComponentUseCase>
        </section>
    );
};

export default RadioGroup;
