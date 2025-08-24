import { FC, useCallback, useState, } from "react";

import { ElementPosition, SelectableItem } from "@bodynarf/react.components";
import ButtonComponent, { ButtonType } from "@bodynarf/react.components/components/button";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentEnumCase from "@app/sharedComponents/enumSelectionCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import CodeExample from "@app/sharedComponents/codeExample";

const types: Array<ButtonType> = [
    "primary", "link", "info",
    "success", "warning", "danger", "white",
    "light", "dark", "black", "text", "ghost"
];

const typesAsSelectItems = types.map((x, i) => ({
    displayValue: x,
    id: i.toString(),
    value: x,
}) as SelectableItem);

/** Button component demo */
const Button: FC = () => {

    const [text, setText] = useState("");
    const appendText = useCallback(
        () => setText(
            t => t
                + "\n"
                + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getMilliseconds()
                + " => " + "clicked"
        ),
        []
    );

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Button"
                hidePropsNotice
            />

            <ComponentUseCase
                caption="Minimal use"
                description="The minimal set of props includes the button type and a caption"
                code={
                    <CodeExample
                        code={[
                            `import ButtonComponent from "@bodynarf/react.components/components/button";`,
                            "",
                            "/* ... */",
                            "",
                            '<ButtonComponent',
                            '    type="primary"',
                            '    caption="Minimal use"',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <ButtonComponent
                    type="primary"
                    caption="Minimal use"
                />
            </ComponentUseCase>

            <ComponentUseCase
                caption="Minimal use"
                description="For the minimal set of props, you can also use an icon instead of a caption"
                code={
                    <CodeExample
                        code={[
                            `import ButtonComponent from "@bodynarf/react.components/components/button";`,
                            "",
                            "/* ... */",
                            "",
                            '<ButtonComponent',
                            '    type="primary"',
                            '    icon={{ name: "broadcast" }}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <ButtonComponent
                    type="primary"
                    icon={{ name: "broadcast" }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                caption="Icon and caption"
                description="An icon and a caption can be combined together"
                code={
                    <CodeExample
                        code={[
                            `import { ElementPosition } from "@bodynarf/react.components";`,
                            `import ButtonComponent from "@bodynarf/react.components/components/button";`,
                            "",
                            "/* ... */",
                            "",
                            '<ButtonComponent',
                            '    type="primary"',
                            '    caption="Icon with caption"',
                            '    icon={{ name: "broadcast", position: ElementPosition.Right }}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <ButtonComponent
                    type="primary"
                    caption="Icon with caption"
                    icon={{ name: "broadcast", position: ElementPosition.Right }}
                />
            </ComponentUseCase>

            <ComponentEnumCase
                caption="Types"
                enumNames={types}
                lookupValues={typesAsSelectItems}
                description="The component has its own set of styles, defined by its type"
                codeProvider={type =>
                    <CodeExample
                        code={[
                            `import ButtonComponent from "@bodynarf/react.components/components/button";`,
                            "",
                            "/* ... */",
                            "",
                            '<ButtonComponent',
                            `    type="${type}"`,
                            '    caption="Different types"',
                            '/>',
                        ].join("\n")}
                    />
                }
                componentProvider={
                    (value: ButtonType) =>
                        <ButtonComponent
                            type={value}
                            caption="Different types"
                        />
                }
            />

            <ComponentSizeCase
                caption="size"
                captionIsCode
                description="Button supports all available sizes"
                codeProvider={size =>
                    <CodeExample
                        code={[
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import ButtonComponent from "@bodynarf/react.components/components/button";`,
                            "",
                            "/* ... */",
                            "",
                            '<ButtonComponent',
                            '    type="primary"',
                            `    size={ElementSize.${size}}`,
                            '    caption="Different sizes"',
                            '/>',
                        ].join("\n")}
                    />
                }
                componentProvider={
                    size =>
                        <ButtonComponent
                            size={size}
                            type="primary"
                            caption="Different sizes"
                        />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="light"
                description="The button style can be made lighter. Works with all available types"
                code={
                    <CodeExample
                        code={[
                            `import ButtonComponent from "@bodynarf/react.components/components/button";`,
                            "",
                            "/* ... */",
                            "",
                            '<ButtonComponent',
                            '    light',
                            '    type="primary"',
                            '    caption="Light button"',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <ButtonComponent
                    light
                    type="primary"
                    caption="Light button"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="outlined"
                description="The button can be styled as 'outlined' (border only)"
                code={
                    <CodeExample
                        code={[
                            `import ButtonComponent from "@bodynarf/react.components/components/button";`,
                            "",
                            "/* ... */",
                            "",
                            '<ButtonComponent',
                            '    outlined',
                            '    type="primary"',
                            '    caption="Outlined button"',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <ButtonComponent
                    outlined
                    type="primary"
                    caption="Outlined button"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="rounded"
                description="The button can be styled with rounded corners"
                code={
                    <CodeExample
                        code={[
                            `import ButtonComponent from "@bodynarf/react.components/components/button";`,
                            "",
                            "/* ... */",
                            "",
                            '<ButtonComponent',
                            '    rounded',
                            '    type="primary"',
                            '    caption="Rounded button"',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <ButtonComponent
                    rounded
                    type="primary"
                    caption="Rounded button"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="isLoading"
                description="The button can be set to a loading state"
                code={
                    <CodeExample
                        code={[
                            `import ButtonComponent from "@bodynarf/react.components/components/button";`,
                            "",
                            "/* ... */",
                            "",
                            '<ButtonComponent',
                            '    isLoading',
                            '    type="primary"',
                            '    caption="Loading button"',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <ButtonComponent
                    isLoading
                    type="primary"
                    caption="Loading button"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="The button can be disabled"
                code={
                    <CodeExample
                        code={[
                            `import ButtonComponent from "@bodynarf/react.components/components/button";`,
                            "",
                            "/* ... */",
                            "",
                            '<ButtonComponent',
                            '    disabled',
                            '    type="primary"',
                            '    caption="Disabled button"',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <ButtonComponent
                    disabled
                    type="primary"
                    caption="Disabled button"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="static"
                description="The button can be made static (inactive with cleared type color)"
                code={
                    <CodeExample
                        code={[
                            `import ButtonComponent from "@bodynarf/react.components/components/button";`,
                            "",
                            "/* ... */",
                            "",
                            '<ButtonComponent',
                            '    static',
                            '    type="primary"',
                            '    caption="Static button"',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <ButtonComponent
                    static
                    type="primary"
                    caption="Static button"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onClick"
                description="Handling the button click event"
                code={
                    <CodeExample
                        code={[
                            `import { useCallback } from "react"`,
                            `import ButtonComponent from "@bodynarf/react.components/components/button";`,
                            "",
                            "/* ... */",
                            "const CLICK_HANDLE_FN = useCallback(() => { /* handler fn */}, []);",
                            "",
                            "",
                            '<ButtonComponent',
                            '    type="primary"',
                            '    caption="Click me!"',
                            '    onClick={CLICK_HANDLE_FN}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <ButtonComponent
                    type="primary"
                    caption="Click me!"
                    onClick={appendText}
                />
                <p style={{ whiteSpace: "pre-line" }}>
                    {text}
                </p>
            </ComponentUseCase>
        </section>
    );
};

export default Button;
