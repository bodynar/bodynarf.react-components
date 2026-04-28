import { FC, useRef } from "react";

import Icon from "@bodynarf/react.components/components/icon";
import MultilineComponent from "@bodynarf/react.components/components/primitives/multiline";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";
import Log, { LogRef } from "@app/sharedComponents/log";

/** Multiline component demo */
const Multiline: FC = () => {
    const onValueChangeLogRef = useRef<LogRef>(null);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Multiline"
                version="0.1"
                description="Control for entering multiline text"
            />

            <ComponentUseCase
                caption="Minimal use"
                description="The component can be rendered without any props."
                code={
                    <CodeExample
                        code={[
                            `import Multiline from "@bodynarf/react.components/components/primitives/multiline";`,
                            "",
                            "<Multiline />",
                        ].join("\n")}
                    />
                }
            >
                <MultilineComponent />
            </ComponentUseCase>

            <hr />
            <div><h4 className="subtitle is-4 has-text-weight-semibold">Custom component props</h4></div>

            <ComponentUseCase
                captionIsCode
                caption="fixed"
                description="Prevents the textarea from being resized. Disabled by default."
                code={
                    <CodeExample
                        code={[
                            `import Multiline from "@bodynarf/react.components/components/primitives/multiline";`,
                            "",
                            `<Multiline`,
                            `    fixed`,
                            `    label={{ caption: "Multiline demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <MultilineComponent
                    fixed
                    label={{ caption: "Multiline demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="rows"
                description="Sets the initial visible row count of the textarea. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import Multiline from "@bodynarf/react.components/components/primitives/multiline";`,
                            "",
                            `<Multiline`,
                            `    rows={10}`,
                            `    label={{ caption: "Multiline demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <MultilineComponent
                    rows={10}
                    label={{ caption: "Multiline demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="label"
                description="Optional label configuration rendered next to the textarea."
                code={
                    <CodeExample
                        code={[
                            `import Multiline from "@bodynarf/react.components/components/primitives/multiline";`,
                            "",
                            `<Multiline`,
                            `    label={{ caption: "Multiline demo", horizontal: false }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <MultilineComponent label={{ caption: "Multiline demo", horizontal: false }} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="defaultValue"
                description="Sets the initial text content. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import Multiline from "@bodynarf/react.components/components/primitives/multiline";`,
                            "",
                            `<Multiline`,
                            "    defaultValue={`first line \\nsecond line\\n\\tfin`}",
                            `    label={{ caption: "Multiline demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <MultilineComponent
                    label={{ caption: "Multiline demo", horizontal: true }}
                    defaultValue={`first line \nsecond line\n\tfin`}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="placeholder"
                description="Placeholder text shown when the textarea is empty. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import Multiline from "@bodynarf/react.components/components/primitives/multiline";`,
                            "",
                            `<Multiline`,
                            `    placeholder="Enter your text here..."`,
                            `    label={{ caption: "Multiline demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <MultilineComponent
                    placeholder="Enter your text here..."
                    label={{ caption: "Multiline demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="Renders a non-interactive disabled textarea. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import Multiline from "@bodynarf/react.components/components/primitives/multiline";`,
                            "",
                            `<Multiline`,
                            `    disabled`,
                            `    label={{ caption: "Multiline demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <MultilineComponent
                    disabled
                    label={{ caption: "Multiline demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="readonly"
                description="Renders the textarea in read-only mode — value is visible but not editable. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import Multiline from "@bodynarf/react.components/components/primitives/multiline";`,
                            "",
                            `<Multiline`,
                            `    readonly`,
                            `    label={{ caption: "Multiline demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <MultilineComponent
                    readonly
                    label={{ caption: "Multiline demo", horizontal: true }}
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
                            `import Multiline from "@bodynarf/react.components/components/primitives/multiline";`,
                            "",
                            `<Multiline`,
                            `    size={ElementSize.${id}}`,
                            `    label={{ caption: "Multiline demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
                componentProvider={size =>
                    <MultilineComponent
                        size={size}
                        label={{ caption: "Multiline demo", horizontal: true }}
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
                            `import Multiline from "@bodynarf/react.components/components/primitives/multiline";`,
                            "",
                            `<Multiline`,
                            `    loading`,
                            `    label={{ caption: "Multiline demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <MultilineComponent
                    loading
                    label={{ caption: "Multiline demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentColorCase
                captionIsCode
                caption="style"
                description="Color applied to the textarea border. Supports all ElementColor values."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import Multiline from "@bodynarf/react.components/components/primitives/multiline";`,
                            "",
                            `<Multiline`,
                            `    style={ElementColor.${id}}`,
                            `    label={{ caption: "Multiline demo", horizontal: false }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
                componentProvider={style =>
                    <MultilineComponent
                        style={style}
                        label={{ caption: "Multiline demo", horizontal: false }}
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
                            `import Multiline from "@bodynarf/react.components/components/primitives/multiline";`,
                            "",
                            `<Multiline`,
                            `    name="symptoms"`,
                            `    label={{ caption: "Multiline demo", horizontal: false }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <MultilineComponent
                    name="symptoms"
                    label={{ caption: "Multiline demo", horizontal: false }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="autoFocus"
                description={
                    <>
                        Sets focus on the textarea on initial render.
                        <br />
                        <Icon name="exclamation-triangle-fill" className="has-text-warning" />
                        {` `}
                        Only 1 element on the page can have this flag.
                    </>
                }
                code={
                    <CodeExample
                        code={[
                            `import Multiline from "@bodynarf/react.components/components/primitives/multiline";`,
                            "",
                            `<Multiline`,
                            `    autoFocus`,
                            `    label={{ caption: "Multiline demo", horizontal: false }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <MultilineComponent
                    autoFocus
                    label={{ caption: "Multiline demo", horizontal: false }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onValueChange"
                description="Called when the textarea value changes. Receives the new string value."
                code={
                    <CodeExample
                        code={[
                            `import Multiline from "@bodynarf/react.components/components/primitives/multiline";`,
                            "",
                            `<Multiline`,
                            `    onValueChange={value => console.log("value:", value)}`,
                            `    label={{ caption: "Multiline demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <MultilineComponent
                    label={{ caption: "Multiline demo", horizontal: true }}
                    onValueChange={value => onValueChangeLogRef.current?.append(`value: ${value}`)}
                />
                <Log ref={onValueChangeLogRef} />
            </ComponentUseCase>
        </section>
    );
};

export default Multiline;
