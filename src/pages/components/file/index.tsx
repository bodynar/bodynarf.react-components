import { FC, useCallback, useRef } from "react";

import FileComponent from "@bodynarf/react.components/components/file";
import Icon from "@bodynarf/react.components/components/icon";
import { ElementPosition } from "@bodynarf/react.components";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import CodeExample from "@app/sharedComponents/codeExample";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import Log, { LogRef } from "@app/sharedComponents/log";

/** File component demo */
const File: FC = () => {
    const onValueChangeLogRef = useRef<LogRef>(null);

    const handleValueChange = useCallback((value?: globalThis.File) => {
        onValueChangeLogRef.current?.append(
            value == null ? "value changed to none" : `value changed to ${value.name} | ${value.size}`
        );
    }, []);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="File"
                version="1.11"
                baseTypeName="BaseElementProps"
                description="A component for selecting a file for further processing"
            />

            <ComponentUseCase
                caption="Minimal use"
                description="To use the component, you need to specify the placeholder prop and a handler for the file selection event"
                code={
                    <CodeExample
                        code={[
                            `import FileComponent from "@bodynarf/react.components/components/file";`,
                            "",
                            '<FileComponent',
                            '    placeholder="File"',
                            '    onValueChange={() => {}}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <FileComponent
                    placeholder="File"
                    onValueChange={() => {}}
                />
            </ComponentUseCase>

            <hr />
            <div>
                <h4 className="subtitle is-4 has-text-weight-semibold">Custom component props</h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="placeholder"
                description="Text shown on the file input button when no file is selected."
                code={
                    <CodeExample
                        code={[
                            `import FileComponent from "@bodynarf/react.components/components/file";`,
                            "",
                            '<FileComponent',
                            '    onValueChange={() => {}}',
                            '    placeholder="Choose a file..."',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <FileComponent
                    placeholder="Choose a file..."
                    onValueChange={() => {}}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="Disable the component — file selection is not allowed. Disabled by default."
                code={
                    <CodeExample
                        code={[
                            `import FileComponent from "@bodynarf/react.components/components/file";`,
                            "",
                            '<FileComponent',
                            '    disabled',
                            '    placeholder="File"',
                            '    onValueChange={() => {}}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <FileComponent
                    disabled
                    placeholder="File"
                    onValueChange={() => {}}
                />
            </ComponentUseCase>

            <ComponentSizeCase
                captionIsCode
                caption="size"
                description="The component supports all available sizes."
                codeProvider={size =>
                    <CodeExample
                        code={[
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import FileComponent from "@bodynarf/react.components/components/file";`,
                            "",
                            '<FileComponent',
                            '    placeholder="File"',
                            '    onValueChange={() => {}}',
                            `    size={ElementSize.${size}}`,
                            '/>',
                        ].join("\n")}
                    />
                }
                componentProvider={
                    size =>
                        <FileComponent
                            size={size}
                            placeholder="File"
                            onValueChange={() => {}}
                        />
                }
            />

            <ComponentColorCase
                captionIsCode
                caption="style"
                description="The component supports all available colors."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import FileComponent from "@bodynarf/react.components/components/file";`,
                            "",
                            '<FileComponent',
                            '    placeholder="File"',
                            '    onValueChange={() => {}}',
                            `    style={ElementColor.${id}}`,
                            '/>',
                        ].join("\n")}
                    />
                }
                componentProvider={
                    style =>
                        <FileComponent
                            style={style}
                            placeholder="File"
                            onValueChange={() => {}}
                        />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="name"
                description="HTML name attribute for the input element. Used as the form element identifier."
                code={
                    <CodeExample
                        code={[
                            `import FileComponent from "@bodynarf/react.components/components/file";`,
                            "",
                            '<FileComponent',
                            '    name="docFile"',
                            '    placeholder="File"',
                            '    onValueChange={() => {}}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <FileComponent
                    name="docFile"
                    placeholder="File"
                    onValueChange={() => {}}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="accept"
                description="File types/extensions allowed for selection. Not defined by default. Accepts MIME types (image/png), file extensions (.png), or audio/*, video/*, image/*. See the MDN accept attribute documentation for details."
                code={
                    <CodeExample
                        code={[
                            `import FileComponent from "@bodynarf/react.components/components/file";`,
                            "",
                            '<FileComponent',
                            '    placeholder="File"',
                            '    onValueChange={() => {}}',
                            '    accept="image/png, image/jpeg"',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <FileComponent
                    placeholder="File"
                    onValueChange={() => {}}
                    accept="image/png, image/jpeg"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="alignment"
                description={
                    <>
                        Horizontal alignment of the upload button. Supports
                        {` `}
                        <code>ElementPosition.Left</code>
                        {` `}
                        and
                        {` `}
                        <code>ElementPosition.Right</code>
                        .
                        <br />
                        <Icon name="exclamation-triangle-fill" className="has-text-warning" />
                        {` `}
                        Right alignment cannot be used together with
                        {` `}
                        <code>boxed</code>.
                    </>
                }
                code={
                    <CodeExample
                        code={[
                            `import { ElementPosition } from "@bodynarf/react.components";`,
                            `import FileComponent from "@bodynarf/react.components/components/file";`,
                            "",
                            '<FileComponent',
                            '    placeholder="File"',
                            '    onValueChange={() => {}}',
                            `    alignment={ElementPosition.Right}`,
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <FileComponent
                    alignment={ElementPosition.Right}
                    placeholder="File"
                    onValueChange={() => {}}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="displayFileName"
                description="Show the selected file name next to the button. Enabled by default — set to false to hide it."
                code={
                    <CodeExample
                        code={[
                            `import FileComponent from "@bodynarf/react.components/components/file";`,
                            "",
                            '<FileComponent',
                            '    placeholder="File"',
                            '    displayFileName={false}',
                            '    onValueChange={() => {}}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <FileComponent
                    placeholder="File"
                    onValueChange={() => {}}
                    displayFileName={false}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="boxed"
                description={
                    <>
                        Use the boxed display mode. Disabled by default.
                        <br />
                        <Icon name="exclamation-triangle-fill" className="has-text-warning" />
                        {` `}
                        Cannot be used together with
                        {` `}
                        <code>alignment=&#123;ElementPosition.Right&#125;</code>.
                    </>
                }
                code={
                    <CodeExample
                        code={[
                            `import FileComponent from "@bodynarf/react.components/components/file";`,
                            "",
                            '<FileComponent',
                            '    boxed',
                            '    placeholder="File"',
                            '    onValueChange={() => {}}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <FileComponent
                    boxed
                    placeholder="File"
                    onValueChange={() => {}}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="clearSelectionTitle"
                description="Title attribute of the clear-selection button (shown after a file is chosen)."
                code={
                    <CodeExample
                        code={[
                            `import FileComponent from "@bodynarf/react.components/components/file";`,
                            "",
                            '<FileComponent',
                            '    placeholder="File"',
                            '    onValueChange={() => {}}',
                            '    clearSelectionTitle="Remove file"',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <FileComponent
                    placeholder="File"
                    onValueChange={() => {}}
                    clearSelectionTitle="Remove file"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onValueChange"
                description="Callback fired when the selected file changes. Receives the selected File or undefined when cleared."
                code={
                    <CodeExample
                        code={[
                            `import { useCallback } from "react";`,
                            "",
                            `import FileComponent from "@bodynarf/react.components/components/file";`,
                            "",
                            "const handleValueChange = useCallback((value?: File) => {",
                            "    console.log(value);",
                            "}, []);",
                            "",
                            '<FileComponent',
                            '    placeholder="File"',
                            '    onValueChange={handleValueChange}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <FileComponent
                    placeholder="File"
                    onValueChange={handleValueChange}
                />
                <Log ref={onValueChangeLogRef} />
            </ComponentUseCase>
        </section>
    );
};

export default File;
