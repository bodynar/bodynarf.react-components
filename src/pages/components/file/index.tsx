import { FC, useCallback, useState } from "react";

import { emptyFn, isNullish } from "@bodynarf/utils";
import { ElementFloatPosition, ElementPosition, SelectableItem } from "@bodynarf/react.components";
import FileComponent from "@bodynarf/react.components/components/file";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import CodeExample from "@app/sharedComponents/codeExample";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import ComponentEnumCase from "@app/sharedComponents/enumSelectionCase";
import Icon from "@bodynarf/react.components/components/icon";

const floatPositions: Array<ElementFloatPosition> = [
    ElementPosition.Left,
    ElementPosition.Right
];

const floatPositionsAsSelectItems = floatPositions.map((x, i) => ({
    displayValue: x,
    id: i.toString(),
    value: x,
}) as SelectableItem);

/** File component demo */
const File: FC = () => {
    const [text, setText] = useState("");
    const appendText = useCallback(
        (value?: File) => setText(
            t => t
                + "\n"
                + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getMilliseconds()
                + " => " + "value changed to " + (isNullish(value) ? "none" : `${value?.name} | ${value?.size}`)
        ),
        []
    );

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="File"
                hidePropsNotice
                description="A component for selecting a file for further processing"
            />

            <ComponentUseCase
                caption="Minimal use"
                description="To use the component, it is required to specify the placeholder prop and a handler for the file selection event"
                code={
                    <CodeExample
                        code={[
                            `import FileComponent from "@bodynarf/react.components/components/file";`,
                            "",
                            "/* ... */",
                            "",
                            '<FileComponent',
                            '    placeholder="File"',
                            '    onValueChange={emptyFn} // TODO: Replace with your own handler function',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <FileComponent
                    placeholder="File"
                    onValueChange={emptyFn}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="Option to disable the component functionality and render it in a disabled state. Disabled by default"
                code={
                    <CodeExample
                        code={[
                            `import FileComponent from "@bodynarf/react.components/components/file";`,
                            "",
                            "/* ... */",
                            "",
                            '<FileComponent',
                            '    disabled',
                            '    placeholder="File"',
                            '    onValueChange={emptyFn} // TODO: Replace with your own handler function',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <FileComponent
                    disabled
                    placeholder="File"
                    onValueChange={emptyFn}
                />
            </ComponentUseCase>

            <ComponentSizeCase
                caption="size"
                captionIsCode
                description="The component supports all available sizes"
                codeProvider={size =>
                    <CodeExample
                        code={[
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import FileComponent from "@bodynarf/react.components/components/file";`,
                            "",
                            "/* ... */",
                            "",
                            '<FileComponent',
                            `    size={ElementSize.${size}}`,
                            `    placeholder="File"`,
                            '    onValueChange={emptyFn} // TODO: Replace with your own handler function',
                            '/>',
                        ].join("\n")}
                    />
                }
                componentProvider={
                    size =>
                        <FileComponent
                            size={size}
                            placeholder="File"
                            onValueChange={emptyFn}
                        />
                }
            />

            <ComponentColorCase
                caption="Colors"
                description="The component supports all available styles"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import AccordionComponent from "@bodynarf/react.components/components/accordion";`,
                            "",
                            "/* ... */",
                            "",
                            '<FileComponent',
                            `    size={ElementSize.${id}}`,
                            `    placeholder="File"`,
                            '    onValueChange={emptyFn} // TODO: Replace with your own handler function',
                            '/>',
                        ].join("\n")}
                    />
                }
                componentProvider={
                    style =>
                        <FileComponent
                            style={style}
                            placeholder="File"
                            onValueChange={emptyFn}
                        />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="name"
                description="Option to specify the component name. Used as the form element attribute"
                code={
                    <CodeExample
                        code={[
                            `import FileComponent from "@bodynarf/react.components/components/file";`,
                            "",
                            "/* ... */",
                            "",
                            '<FileComponent',
                            '    name="docFile"',
                            '    placeholder="File"',
                            '    onValueChange={emptyFn} // TODO: Replace with your own handler function',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <FileComponent
                    name="docFile"
                    placeholder="File"
                    onValueChange={emptyFn}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="accept"
                description={
                    <>
                        Option describes the types of files available for selection. Not defined by default.
                        See the detailed attribute description in the
                        {` `}
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/accept"
                        >
                            official documentation
                        </a>
                    </>
                }
                code={
                    <CodeExample
                        code={[
                            `import FileComponent from "@bodynarf/react.components/components/file";`,
                            "",
                            "/* ... */",
                            "",
                            '<FileComponent',
                            '    placeholder="File"',
                            '    onValueChange={emptyFn} // TODO: Replace with your own handler function',
                            '    accept="image/png, image/jpeg"',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <FileComponent
                    placeholder="File"
                    onValueChange={emptyFn}
                    accept="image/png, image/jpeg"
                />
            </ComponentUseCase>

            alignment

            <ComponentUseCase
                captionIsCode
                caption="displayFileName"
                description="Option to enable displaying the selected file name. Enabled by default"
                code={
                    <CodeExample
                        code={[
                            `import FileComponent from "@bodynarf/react.components/components/file";`,
                            "",
                            "/* ... */",
                            "",
                            '<FileComponent',
                            '    placeholder="File"',
                            '    onValueChange={emptyFn} // TODO: Replace with your own handler function',
                            '    displayFileName={false}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <FileComponent
                    placeholder="File"
                    onValueChange={emptyFn}
                    displayFileName={false}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="boxed"
                description={
                    <>
                        Option to use the boxed display mode. Disabled by default.
                        <br />
                        <Icon
                            name="exclamation-triangle-fill"
                            className="has-text-warning"
                        />
                        {` `}
                        <span>
                            Cannot be used with
                            {` `}
                            <code>
                                {`alignment={ElementPosition.right}`}
                            </code>
                        </span>
                    </>
                }
                code={
                    <CodeExample
                        code={[
                            `import FileComponent from "@bodynarf/react.components/components/file";`,
                            "",
                            "/* ... */",
                            "",
                            '<FileComponent',
                            '    boxed',
                            '    placeholder="File"',
                            '    onValueChange={emptyFn} // TODO: Replace with your own handler function',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <FileComponent
                    boxed
                    placeholder="File"
                    onValueChange={emptyFn}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="clearSelectionTitle"
                description="Prop to set the title text of the button for clearing the selected file"
                code={
                    <CodeExample
                        code={[
                            `import FileComponent from "@bodynarf/react.components/components/file";`,
                            "",
                            "/* ... */",
                            "",
                            '<FileComponent',
                            '    placeholder="File"',
                            '    onValueChange={emptyFn} // TODO: Replace with your own handler function',
                            '    clearSelectionTitle="ReMoVe FiLe"',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <FileComponent
                    placeholder="File"
                    onValueChange={emptyFn}
                    clearSelectionTitle="ReMoVe FiLe"
                />
            </ComponentUseCase>

            <ComponentEnumCase
                caption="Alignment"
                enumNames={floatPositions}
                lookupValues={floatPositionsAsSelectItems}
                description="The component can have different alignment options"
                codeProvider={value =>
                    <CodeExample
                        code={[
                            `import { ElementPosition } from "@bodynarf/react.components";`,
                            `import FileComponent from "@bodynarf/react.components/components/file";`,
                            "",
                            "/* ... */",
                            "",
                            '<FileComponent',
                            '    placeholder="File"',
                            '    onValueChange={emptyFn} // TODO: Replace with your own handler function',
                            `    alignment={ElementPosition.${value}}`,
                            '/>',
                        ].join("\n")}
                    />
                }
                componentProvider={
                    (value: ElementFloatPosition) =>
                        <FileComponent
                            alignment={value}
                            placeholder="File"
                            onValueChange={emptyFn}
                        />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="onValueChange"
                description="Handling the component file selection change event"
                code={
                    <CodeExample
                        code={[
                            `import { useCallback } from "react"`,
                            `import FileComponent from "@bodynarf/react.components/components/file";`,
                            "",
                            "/* ... */",
                            "const ON_VALUE_CHANGE_HANDLE_FN = useCallback((value?: File) => { /* handler fn */}, []);",
                            "",
                            "",
                            '<FileComponent',
                            `    placeholder="File"`,
                            '    onValueChange={ON_VALUE_CHANGE_HANDLE_FN}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <FileComponent
                    placeholder="File"
                    onValueChange={appendText}
                />
                <p style={{ whiteSpace: "pre-line" }}>
                    {text}
                </p>
            </ComponentUseCase>
        </section>
    );
};

export default File;
