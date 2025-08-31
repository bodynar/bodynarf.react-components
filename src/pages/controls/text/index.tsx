import { FC, useCallback, useState } from "react";
import { emptyFn } from "@bodynarf/utils";
import TextComponent from "@bodynarf/react.components/components/primitives/text";
import Icon from "@bodynarf/react.components/components/icon";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

/** Text component demo */
const Text: FC = () => {
    const [onValueChangeLog, setOnValueChangeLog] = useState("");
    const appendOnValueChangeLog = useCallback(
        (value?: string) => setOnValueChangeLog(
            t => t
                + "\n"
                + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getMilliseconds()
                + " => " + `new value: ${value}`
        ),
        []
    );

    const [onBlurLog, setOnBlurLog] = useState("");
    const appendOnBlurLog = useCallback(
        () => setOnBlurLog(
            t => t
                + "\n"
                + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getMilliseconds()
                + " => " + "component lost focus"
        ),
        []
    );

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Number"
                description="Component for entering numeric values"
            />

            <div className="block">
                <p>
                    For better readability in examples, the
                    {` `}
                    <code>
                        label
                    </code>
                    {` `}
                    prop is included. However, it is not required.
                </p>
            </div>

            <ComponentUseCase
                caption="Minimal use"
                description="Minimal configuration is absent, the component can be used 'empty'"
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import TextComponent from "@bodynarf/react.components/components/primitives/text";`,
                            "",
                            "/* ... */",
                            "",
                            `<TextComponent />`,
                        ].join("\n")}
                    />
                }
            >
                <TextComponent
                    onValueChange={emptyFn} // todo: remove this after lib update
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
                caption="onBlur"
                description="Handler for the component blur event. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import { useCallback } from "react"`,
                            "",
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import TextComponent from "@bodynarf/react.components/components/primitives/text";`,
                            "",
                            "/* ... */",
                            "const ON_BLUR_HANDLE_FN = useCallback(() => { /* handler fn */}, []);",
                            "/* ... */",
                            "",
                            `<TextComponent`,
                            "    onValueChange={emptyFn} // TODO: Replace with your own handler function",
                            "    onBlur={ON_BLUR_HANDLE_FN}",
                            `    label={{ caption: "Text demo", horizontal: true }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <TextComponent
                    onValueChange={emptyFn}
                    onBlur={appendOnBlurLog}
                    label={{ caption: "Text demo", horizontal: true }}
                />
                <p style={{ whiteSpace: "pre-line" }}>
                    {onBlurLog}
                </p>
            </ComponentUseCase>

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">
                    Base props implementation
                    {` `}
                    <code>
                        BaseInputElementProps
                    </code>
                </h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="defaultValue"
                description="Option to set the initial value of the component. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import TextComponent from "@bodynarf/react.components/components/primitives/text";`,
                            "",
                            "/* ... */",
                            "",
                            `<TextComponent`,
                            "    onValueChange={emptyFn} // TODO: Replace with your own handler function",
                            '    defaultValue="bodynarf bulma react"',
                            `    label={{ caption: "Text demo", horizontal: true }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <TextComponent
                    onValueChange={emptyFn}
                    defaultValue="bodynarf bulma react"
                    label={{ caption: "Text demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="placeholder"
                description="Option to specify the component's placeholder. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import TextComponent from "@bodynarf/react.components/components/primitives/text";`,
                            "",
                            "/* ... */",
                            "",
                            `<TextComponent`,
                            '    placeholder="Text demo control"',
                            "    onValueChange={emptyFn} // TODO: Replace with your own handler function",
                            `    label={{ caption: "Text demo", horizontal: true }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <TextComponent
                    placeholder="Text demo control"
                    onValueChange={emptyFn}
                    label={{ caption: "Text demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="rounded"
                description="Option to apply border-radius to the component. Disabled by default."
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import TextComponent from "@bodynarf/react.components/components/primitives/text";`,
                            "",
                            "/* ... */",
                            "",
                            `<TextComponent`,
                            `    rounded`,
                            "    onValueChange={emptyFn} // TODO: Replace with your own handler function",
                            `    label={{ caption: "Text demo", horizontal: true }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <TextComponent
                    rounded
                    onValueChange={emptyFn}
                    label={{ caption: "Text demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="Option to render the component as disabled. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import TextComponent from "@bodynarf/react.components/components/primitives/text";`,
                            "",
                            "/* ... */",
                            "",
                            `<TextComponent`,
                            `    disabled`,
                            "    onValueChange={emptyFn} // TODO: Replace with your own handler function",
                            `    label={{ caption: "Text demo", horizontal: true }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <TextComponent
                    disabled
                    onValueChange={emptyFn}
                    label={{ caption: "Text demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="readonly"
                description="Option to render the component in readonly state. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import TextComponent from "@bodynarf/react.components/components/primitives/text";`,
                            "",
                            "/* ... */",
                            "",
                            `<TextComponent`,
                            `    readonly`,
                            "    onValueChange={emptyFn} // TODO: Replace with your own handler function",
                            `    label={{ caption: "Text demo", horizontal: true }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <TextComponent
                    readonly
                    onValueChange={emptyFn}
                    label={{ caption: "Text demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentSizeCase
                caption="Sizes"
                description="The component supports all sizes defined in the ElementSize type"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import TextComponent from "@bodynarf/react.components/components/primitives/text";`,
                            "",
                            "/* ... */",
                            "",
                            `<TextComponent`,
                            `    size={ElementSize.${id}}`,
                            "    onValueChange={emptyFn} // TODO: Replace with your own handler function",
                            `    label={{ caption: "Text demo", horizontal: true }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
                componentProvider={
                    size =>
                        <TextComponent
                            size={size}
                            onValueChange={emptyFn}
                            label={{ caption: "Text demo", horizontal: true }}
                        />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="label"
                description="Option to specify the component label. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import TextComponent from "@bodynarf/react.components/components/primitives/text";`,
                            "",
                            "/* ... */",
                            "",
                            `<TextComponent`,
                            "    onValueChange={emptyFn} // TODO: Replace with your own handler function",
                            `    label={{ caption: "Text demo", horizontal: false }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <TextComponent
                    loading
                    onValueChange={emptyFn}
                    label={{ caption: "Text demo", horizontal: false }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="loading"
                description="Option to render the component in a loading state. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import TextComponent from "@bodynarf/react.components/components/primitives/text";`,
                            "",
                            "/* ... */",
                            "",
                            `<TextComponent`,
                            `    loading`,
                            "    onValueChange={emptyFn} // TODO: Replace with your own handler function",
                            `    label={{ caption: "Text demo", horizontal: true }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <TextComponent
                    loading
                    onValueChange={emptyFn}
                    label={{ caption: "Text demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentColorCase
                caption="Colors"
                description="Component supports all available colors"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import TextComponent from "@bodynarf/react.components/components/primitives/text";`,
                            "",
                            "/* ... */",
                            "",
                            `<TextComponent`,
                            `    style={ElementColor.${id}}`,
                            "    onValueChange={emptyFn} // TODO: Replace with your own handler function",
                            `    label={{ caption: "Text demo", horizontal: true }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
                componentProvider={
                    style =>
                        <TextComponent
                            style={style}
                            onValueChange={emptyFn}
                            label={{ caption: "Text demo", horizontal: true }}
                        />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="name"
                description="Option to specify the component name. Used as a form element attribute."
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import TextComponent from "@bodynarf/react.components/components/primitives/text";`,
                            "",
                            "/* ... */",
                            "",
                            '<TextComponent',
                            '    name="firstName"',
                            '    onValueChange={emptyFn} // TODO: Replace with your own handler function',
                            '    label={{ caption: "Text demo", horizontal: true }}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <TextComponent
                    name="firstName"
                    onValueChange={emptyFn}
                    label={{ caption: "Text demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="autoFocus"
                description={
                    <>
                        Option to set focus on the component input field on initial render
                        <br />
                        <Icon
                            name="exclamation-triangle-fill"
                            className="has-text-warning"
                        />
                        {` `}
                        <span>
                            Only 1 element on the page can have this flag
                        </span>
                        <br />
                        <span className="is-italic">
                            Refresh the page and check which component (from the presented examples) received automatic focus
                        </span>
                    </>
                }
                code={
                    <CodeExample
                        code={[
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import TextComponent from "@bodynarf/react.components/components/primitives/text";`,
                            "",
                            "/* ... */",
                            "",
                            '<TextComponent',
                            '    autoFocus',
                            '    onValueChange={emptyFn} // TODO: Replace with your own handler function',
                            '    label={{ caption: "Text demo", horizontal: true }}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <TextComponent
                    autoFocus
                    onValueChange={emptyFn}
                    label={{ caption: "Text demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onValueChange"
                description="Option for handling the onValueChange event. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import { useCallback } from "react"`,
                            "",
                            `import { emptyFn } from "@bodynarf/utils";`,
                            `import TextComponent from "@bodynarf/react.components/components/primitives/text";`,
                            "",
                            "/* ... */",
                            "const ON_VALUE_CHANGE_HANDLE_FN = useCallback((value: number) => { /* handler fn */}, []);",
                            "/* ... */",
                            "",
                            `<TextComponent`,
                            "    onValueChange={ON_VALUE_CHANGE_HANDLE_FN}",
                            `    label={{ caption: "Text demo", horizontal: true }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <TextComponent
                    onValueChange={appendOnValueChangeLog}
                    label={{ caption: "Text demo", horizontal: true }}
                />
                <p style={{ whiteSpace: "pre-line" }}>
                    {onValueChangeLog}
                </p>
            </ComponentUseCase>
        </section>
    );
};

export default Text;
