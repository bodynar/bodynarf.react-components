import { FC, useCallback, useState, } from "react";

import { ElementPosition, SelectableItem, Button as ButtonComponent, ButtonStyle } from "@bodynarf/react.components";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentEnumCase from "@app/sharedComponents/enumSelectionCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import CodeExample from "@app/sharedComponents/codeExample";

const types: Array<string> = [
    ButtonStyle.Default, ButtonStyle.Primary, ButtonStyle.Link,
    ButtonStyle.Info, ButtonStyle.Success, ButtonStyle.Warning,
    ButtonStyle.Danger, ButtonStyle.White, ButtonStyle.Light,
    ButtonStyle.Dark, ButtonStyle.Black, ButtonStyle.Text,
    ButtonStyle.Ghost,
].map(x => x.capitalize());

const typesAsSelectItems = Object
    .values(ButtonStyle)
    .map((x, i) => ({
        displayValue: x.capitalize(),
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
                baseTypeName="BaseElementProps"
            />

            <ComponentUseCase
                caption="Minimal use"
                description="The minimal set of props includes the button type and a caption"
                code={
                    <CodeExample
                        code={[
                            `import ButtonComponent, { ButtonStyle } from "@bodynarf/react.components/components/button";`,
                            "",
                            "/* ... */",
                            "",
                            '<ButtonComponent',
                            '    caption="Minimal use"',
                            '    style={ButtonStyle.Primary}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <ButtonComponent
                    caption="Minimal use"
                    style={ButtonStyle.Primary}
                />
            </ComponentUseCase>

            <ComponentUseCase
                caption="Minimal use"
                description="For the minimal set of props, you can also use an icon instead of a caption"
                code={
                    <CodeExample
                        code={[
                            `import ButtonComponent, { ButtonStyle } from "@bodynarf/react.components/components/button";`,
                            "",
                            "/* ... */",
                            "",
                            '<ButtonComponent',
                            '    style={ButtonStyle.Primary}',
                            '    icon={{ name: "broadcast" }}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <ButtonComponent
                    style={ButtonStyle.Primary}
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
                            `import ButtonComponent, { ButtonStyle } from "@bodynarf/react.components/components/button";`,
                            "",
                            "/* ... */",
                            "",
                            '<ButtonComponent',
                            '    style={ButtonStyle.Primary}',
                            '    caption="Icon with caption"',
                            '    icon={{ name: "broadcast", position: ElementPosition.Right }}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <ButtonComponent
                    style={ButtonStyle.Primary}
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
                            `import ButtonComponent, { ButtonStyle } from "@bodynarf/react.components/components/button";`,
                            "",
                            "/* ... */",
                            "",
                            '<ButtonComponent',
                            `    style={ButtonStyle.${type}}`,
                            '    caption="Different types"',
                            '/>',
                        ].join("\n")}
                    />
                }
                componentProvider={
                    (value: ButtonStyle) =>
                        <ButtonComponent
                            style={value}
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
                            `import ButtonComponent, { ButtonStyle } from "@bodynarf/react.components/components/button";`,
                            "",
                            "/* ... */",
                            "",
                            '<ButtonComponent',
                            `    size={ElementSize.${size}}`,
                            '    caption="Different sizes"',
                            '    style={ButtonStyle.Primary}',
                            '/>',
                        ].join("\n")}
                    />
                }
                componentProvider={
                    size =>
                        <ButtonComponent
                            size={size}
                            style={ButtonStyle.Primary}
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
                            `import ButtonComponent, { ButtonStyle } from "@bodynarf/react.components/components/button";`,
                            "",
                            "/* ... */",
                            "",
                            '<ButtonComponent',
                            '    light',
                            '    caption="Light button"',
                            '    style={ButtonStyle.Primary}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <ButtonComponent
                    light
                    caption="Light button"
                    style={ButtonStyle.Primary}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="outlined"
                description="The button can be styled as 'outlined' (border only)"
                code={
                    <CodeExample
                        code={[
                            `import ButtonComponent, { ButtonStyle } from "@bodynarf/react.components/components/button";`,
                            "",
                            "/* ... */",
                            "",
                            '<ButtonComponent',
                            '    outlined',
                            '    caption="Outlined button"',
                            '    style={ButtonStyle.Primary}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <ButtonComponent
                    outlined
                    caption="Outlined button"
                    style={ButtonStyle.Primary}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="rounded"
                description="The button can be styled with rounded corners"
                code={
                    <CodeExample
                        code={[
                            `import ButtonComponent, { ButtonStyle } from "@bodynarf/react.components/components/button";`,
                            "",
                            "/* ... */",
                            "",
                            '<ButtonComponent',
                            '    rounded',
                            '    caption="Rounded button"',
                            '    style={ButtonStyle.Primary}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <ButtonComponent
                    rounded
                    caption="Rounded button"
                    style={ButtonStyle.Primary}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="isLoading"
                description="The button can be set to a loading state"
                code={
                    <CodeExample
                        code={[
                            `import ButtonComponent, { ButtonStyle } from "@bodynarf/react.components/components/button";`,
                            "",
                            "/* ... */",
                            "",
                            '<ButtonComponent',
                            '    isLoading',
                            '    caption="Loading button"',
                            '    style={ButtonStyle.Primary}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <ButtonComponent
                    isLoading
                    caption="Loading button"
                    style={ButtonStyle.Primary}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="The button can be disabled"
                code={
                    <CodeExample
                        code={[
                            `import ButtonComponent, { ButtonStyle } from "@bodynarf/react.components/components/button";`,
                            "",
                            "/* ... */",
                            "",
                            '<ButtonComponent',
                            '    disabled',
                            '    caption="Disabled button"',
                            '    style={ButtonStyle.Primary}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <ButtonComponent
                    disabled
                    caption="Disabled button"
                    style={ButtonStyle.Primary}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="static"
                description="The button can be made static (inactive with cleared colors)"
                code={
                    <CodeExample
                        code={[
                            `import ButtonComponent, { ButtonStyle } from "@bodynarf/react.components/components/button";`,
                            "",
                            "/* ... */",
                            "",
                            '<ButtonComponent',
                            '    static',
                            '    caption="Static button"',
                            '    style={ButtonStyle.Primary}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <ButtonComponent
                    static
                    caption="Static button"
                    style={ButtonStyle.Primary}
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
                            "",
                            `import ButtonComponent, { ButtonStyle } from "@bodynarf/react.components/components/button";`,
                            "",
                            "/* ... */",
                            "const CLICK_HANDLE_FN = useCallback(() => { /* handler fn */}, []);",
                            "/* ... */",
                            "",
                            '<ButtonComponent',
                            '    caption="Click me!"',
                            '    onClick={CLICK_HANDLE_FN}',
                            '    style={ButtonStyle.Primary}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <ButtonComponent
                    caption="Click me!"
                    onClick={appendText}
                    style={ButtonStyle.Primary}
                />
                <p style={{ whiteSpace: "pre-line" }}>
                    {text}
                </p>
            </ComponentUseCase>
        </section>
    );
};

export default Button;
