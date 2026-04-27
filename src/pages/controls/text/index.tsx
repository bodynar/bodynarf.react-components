import { FC, useRef } from "react";

import Icon from "@bodynarf/react.components/components/icon";
import TextComponent from "@bodynarf/react.components/components/primitives/text";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";
import Log, { LogRef } from "@app/sharedComponents/log";

/** Text component demo */
const Text: FC = () => {
    const onValueChangeLogRef = useRef<LogRef>(null);
    const onBlurLogRef = useRef<LogRef>(null);
    const onKeyDownLogRef = useRef<LogRef>(null);
    const onKeyUpLogRef = useRef<LogRef>(null);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Text"
                version="0.1"
                description="Component for entering single-line text values."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="The component can be rendered without any props."
                code={
                    <CodeExample
                        code={[
                            `import Text from "@bodynarf/react.components/components/primitives/text";`,
                            "",
                            `<Text />`,
                        ].join("\n")}
                    />
                }
            >
                <TextComponent />
            </ComponentUseCase>

            <hr />
            <div><h4 className="subtitle is-4 has-text-weight-semibold">Custom component props</h4></div>

            <ComponentUseCase
                captionIsCode
                caption="label"
                description="Optional label configuration rendered next to the input."
                code={
                    <CodeExample
                        code={[
                            `import Text from "@bodynarf/react.components/components/primitives/text";`,
                            "",
                            `<Text`,
                            `    label={{ caption: "Text demo", horizontal: false }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <TextComponent label={{ caption: "Text demo", horizontal: false }} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="defaultValue"
                description="Sets the initial value of the input. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import Text from "@bodynarf/react.components/components/primitives/text";`,
                            "",
                            `<Text`,
                            `    defaultValue="bodynarf bulma react"`,
                            `    label={{ caption: "Text demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <TextComponent
                    defaultValue="bodynarf bulma react"
                    label={{ caption: "Text demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="placeholder"
                description="Placeholder text shown when the input is empty. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import Text from "@bodynarf/react.components/components/primitives/text";`,
                            "",
                            `<Text`,
                            `    placeholder="Enter text here"`,
                            `    label={{ caption: "Text demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <TextComponent
                    placeholder="Enter text here"
                    label={{ caption: "Text demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="rounded"
                description="Applies border-radius to the component. Disabled by default."
                code={
                    <CodeExample
                        code={[
                            `import Text from "@bodynarf/react.components/components/primitives/text";`,
                            "",
                            `<Text`,
                            `    rounded`,
                            `    label={{ caption: "Text demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <TextComponent
                    rounded
                    label={{ caption: "Text demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="Renders a non-interactive disabled input. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import Text from "@bodynarf/react.components/components/primitives/text";`,
                            "",
                            `<Text`,
                            `    disabled`,
                            `    label={{ caption: "Text demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <TextComponent
                    disabled
                    label={{ caption: "Text demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="readonly"
                description="Renders the input in a read-only state. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import Text from "@bodynarf/react.components/components/primitives/text";`,
                            "",
                            `<Text`,
                            `    readonly`,
                            `    defaultValue="read only value"`,
                            `    label={{ caption: "Text demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <TextComponent
                    readonly
                    defaultValue="read only value"
                    label={{ caption: "Text demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentSizeCase
                captionIsCode
                caption="size"
                description="Controls the visual size of the component. Supports all ElementSize values."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import Text from "@bodynarf/react.components/components/primitives/text";`,
                            "",
                            `<Text`,
                            `    size={ElementSize.${id}}`,
                            `    label={{ caption: "Text demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
                componentProvider={size =>
                    <TextComponent
                        size={size}
                        label={{ caption: "Text demo", horizontal: true }}
                    />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="loading"
                description="Displays a loading spinner inside the component. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import Text from "@bodynarf/react.components/components/primitives/text";`,
                            "",
                            `<Text`,
                            `    loading`,
                            `    label={{ caption: "Text demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <TextComponent
                    loading
                    label={{ caption: "Text demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentColorCase
                captionIsCode
                caption="style"
                description="Color applied to the input border. Supports all ElementColor values."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import Text from "@bodynarf/react.components/components/primitives/text";`,
                            "",
                            `<Text`,
                            `    style={ElementColor.${id}}`,
                            `    label={{ caption: "Text demo", horizontal: false }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
                componentProvider={style =>
                    <TextComponent
                        style={style}
                        label={{ caption: "Text demo", horizontal: false }}
                    />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="name"
                description="Specifies the HTML name attribute for use as a form element."
                code={
                    <CodeExample
                        code={[
                            `import Text from "@bodynarf/react.components/components/primitives/text";`,
                            "",
                            `<Text`,
                            `    name="firstName"`,
                            `    label={{ caption: "Text demo", horizontal: false }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <TextComponent
                    name="firstName"
                    label={{ caption: "Text demo", horizontal: false }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="autoFocus"
                description={
                    <>
                        Sets focus on the input on initial render.
                        <br />
                        <Icon name="exclamation-triangle-fill" className="has-text-warning" />
                        {` `}
                        Only 1 element on the page can have this flag.
                    </>
                }
                code={
                    <CodeExample
                        code={[
                            `import Text from "@bodynarf/react.components/components/primitives/text";`,
                            "",
                            `<Text`,
                            `    autoFocus`,
                            `    label={{ caption: "Text demo", horizontal: false }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <TextComponent
                    autoFocus
                    label={{ caption: "Text demo", horizontal: false }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onValueChange"
                description="Called when the input value changes. Receives the new string value."
                code={
                    <CodeExample
                        code={[
                            `import Text from "@bodynarf/react.components/components/primitives/text";`,
                            "",
                            `<Text`,
                            `    label={{ caption: "Text demo", horizontal: true }}`,
                            `    onValueChange={value => console.log("value:", value)}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <TextComponent
                    label={{ caption: "Text demo", horizontal: true }}
                    onValueChange={value => onValueChangeLogRef.current?.append(`value: ${value}`)}
                />
                <Log ref={onValueChangeLogRef} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onBlur"
                description="Called when the input loses focus."
                code={
                    <CodeExample
                        code={[
                            `import Text from "@bodynarf/react.components/components/primitives/text";`,
                            "",
                            `<Text`,
                            `    onBlur={() => console.log("blurred")}`,
                            `    label={{ caption: "Text demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <TextComponent
                    label={{ caption: "Text demo", horizontal: true }}
                    onBlur={() => onBlurLogRef.current?.append("blurred")}
                />
                <Log ref={onBlurLogRef} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onKeyDown"
                description="Called when a key is pressed while the input is focused."
                code={
                    <CodeExample
                        code={[
                            `import Text from "@bodynarf/react.components/components/primitives/text";`,
                            "",
                            `<Text`,
                            `    onKeyDown={e => console.log("keyDown:", e.key)}`,
                            `    label={{ caption: "Text demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <TextComponent
                    label={{ caption: "Text demo", horizontal: true }}
                    onKeyDown={e => onKeyDownLogRef.current?.append(`keyDown: ${e.key}`)}
                />
                <Log ref={onKeyDownLogRef} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onKeyUp"
                description="Called when a key is released while the input is focused."
                code={
                    <CodeExample
                        code={[
                            `import Text from "@bodynarf/react.components/components/primitives/text";`,
                            "",
                            `<Text`,
                            `    onKeyUp={e => console.log("keyUp:", e.key)}`,
                            `    label={{ caption: "Text demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <TextComponent
                    label={{ caption: "Text demo", horizontal: true }}
                    onKeyUp={e => onKeyUpLogRef.current?.append(`keyUp: ${e.key}`)}
                />
                <Log ref={onKeyUpLogRef} />
            </ComponentUseCase>
        </section>
    );
};

export default Text;
