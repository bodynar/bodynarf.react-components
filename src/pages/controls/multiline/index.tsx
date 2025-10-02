import { FC, useCallback, useState } from "react";

import { Multiline as MultilineComponent } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";
import Icon from "@bodynarf/react.components/components/icon";

/** Multiline component demo */
const Multiline: FC = () => {
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
                name="Multiline"
                description="Control for entering multiline text"
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
                            `import MultilineComponent from "@bodynarf/react.components/components/primitives/multiline";`,
                            "",
                            "/* ... */",
                            "",
                            `<MultilineComponent />`,
                        ].join("\n")}
                    />
                }
            >
                <MultilineComponent />
            </ComponentUseCase>

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">
                    Custom component props
                </h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="fixed"
                description="Option to prevent resizing of the component. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import MultilineComponent from "@bodynarf/react.components/components/primitives/multiline";`,
                            "",
                            "/* ... */",
                            "",
                            `<MultilineComponent`,
                            "    fixed",
                            `    label={{ caption: "Multiline demo", horizontal: true }}`,
                            "/>",
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
                description="Initial number of rows for the component. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import MultilineComponent from "@bodynarf/react.components/components/primitives/multiline";`,
                            "",
                            "/* ... */",
                            "",
                            `<MultilineComponent`,
                            "    rows={10}",
                            `    label={{ caption: "Multiline demo", horizontal: true }}`,
                            "/>",
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
                caption="onBlur"
                description="Handler for the component blur event. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import { useCallback } from "react"`,
                            "",
                            `import MultilineComponent from "@bodynarf/react.components/components/primitives/multiline";`,
                            "",
                            "/* ... */",
                            "const ON_BLUR_HANDLE_FN = useCallback(() => { /* handler fn */}, []);",
                            "/* ... */",
                            "",
                            `<MultilineComponent`,
                            "    onBlur={ON_BLUR_HANDLE_FN}",
                            `    label={{ caption: "Multiline demo", horizontal: true }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <MultilineComponent
                    onBlur={appendOnBlurLog}
                    label={{ caption: "Multiline demo", horizontal: true }}
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
                            `import MultilineComponent from "@bodynarf/react.components/components/primitives/multiline";`,
                            "",
                            "/* ... */",
                            "",
                            `<MultilineComponent`,
                            `    label={{ caption: "Multiline demo", horizontal: true }}`,
                            '    defaultValue={`first line \\nsecond line\\n\\tfin`}',
                            "/>",
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
                description="Option to specify the component's placeholder. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import MultilineComponent from "@bodynarf/react.components/components/primitives/multiline";`,
                            "",
                            "/* ... */",
                            "",
                            `<MultilineComponent`,
                            '    placeholder="Multiline demo control"',
                            `    label={{ caption: "Multiline demo", horizontal: true }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <MultilineComponent
                    placeholder="Multiline demo control"
                    label={{ caption: "Multiline demo", horizontal: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="Option to render the component as disabled. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import MultilineComponent from "@bodynarf/react.components/components/primitives/multiline";`,
                            "",
                            "/* ... */",
                            "",
                            `<MultilineComponent`,
                            `    disabled`,
                            `    label={{ caption: "Multiline demo", horizontal: true }}`,
                            "/>",
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
                description="Option to render the component in readonly state. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import MultilineComponent from "@bodynarf/react.components/components/primitives/multiline";`,
                            "",
                            "/* ... */",
                            "",
                            `<MultilineComponent`,
                            `    readonly`,
                            `    label={{ caption: "Multiline demo", horizontal: true }}`,
                            "/>",
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
                caption="Sizes"
                description="The component supports all sizes defined in the ElementSize type"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import MultilineComponent from "@bodynarf/react.components/components/primitives/multiline";`,
                            "",
                            "/* ... */",
                            "",
                            `<MultilineComponent`,
                            `    size={ElementSize.${id}}`,
                            `    label={{ caption: "Multiline demo", horizontal: true }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
                componentProvider={
                    size =>
                        <MultilineComponent
                            size={size}
                            label={{ caption: "Multiline demo", horizontal: true }}
                        />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="loading"
                description="Option to render the component in a loading state. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import MultilineComponent from "@bodynarf/react.components/components/primitives/multiline";`,
                            "",
                            "/* ... */",
                            "",
                            `<MultilineComponent`,
                            `    loading`,
                            `    label={{ caption: "Multiline demo", horizontal: true }}`,
                            "/>",
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
                caption="Colors"
                description="Component supports all available colors"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import MultilineComponent from "@bodynarf/react.components/components/primitives/multiline";`,
                            "",
                            "/* ... */",
                            "",
                            `<MultilineComponent`,
                            `    style={ElementColor.${id}}`,
                            `    label={{ caption: "Multiline demo", horizontal: false }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
                componentProvider={
                    style =>
                        <MultilineComponent
                            style={style}
                            label={{ caption: "Multiline demo", horizontal: false }}
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
                            `import MultilineComponent from "@bodynarf/react.components/components/primitives/multiline";`,
                            "",
                            "/* ... */",
                            "",
                            '<MultilineComponent',
                            '    name="symptoms"',
                            '    label={{ caption: "Multiline demo", horizontal: false }}',
                            '/>',
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
                            `import MultilineComponent from "@bodynarf/react.components/components/primitives/multiline";`,
                            "",
                            "/* ... */",
                            "",
                            '<MultilineComponent',
                            '    autoFocus',
                            '    label={{ caption: "Multiline demo", horizontal: false }}',
                            '/>',
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
                description="Option for handling the onValueChange event. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import { useCallback } from "react"`,
                            "",
                            `import MultilineComponent from "@bodynarf/react.components/components/primitives/multiline";`,
                            "",
                            "/* ... */",
                            "const ON_VALUE_CHANGE_HANDLE_FN = useCallback((value: string) => { /* handler fn */}, []);",
                            "/* ... */",
                            "",
                            `<MultilineComponent`,
                            "    onValueChange={ON_VALUE_CHANGE_HANDLE_FN}",
                            `    label={{ caption: "Multiline demo", horizontal: true }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <MultilineComponent
                    onValueChange={appendOnValueChangeLog}
                    label={{ caption: "Multiline demo", horizontal: true }}
                />
                <p style={{ whiteSpace: "pre-line" }}>
                    {onValueChangeLog}
                </p>
            </ComponentUseCase>
        </section>
    );
};

export default Multiline;
