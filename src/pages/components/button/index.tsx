import { FC, useRef } from "react";

import ButtonComponent from "@bodynarf/react.components/components/button";
import { ElementPosition, ButtonStyle } from "@bodynarf/react.components";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import CodeExample from "@app/sharedComponents/codeExample";
import Log, { LogRef } from "@app/sharedComponents/log";

/** Button component demo */
const Button: FC = () => {
    const onClickLogRef = useRef<LogRef>(null);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Button"
                version="0.1"
                baseTypeName="BaseElementProps"
            />

            <ComponentUseCase
                caption="Minimal use"
                description="The minimal set of props: style and either caption or icon."
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import Button from "@bodynarf/react.components/components/button";`,
                            "",
                            '<Button caption="Minimal use" style={ButtonStyle.Primary} />',
                        ].join("\n")}
                    />
                }
            >
                <ButtonComponent caption="Minimal use" style={ButtonStyle.Primary} />
            </ComponentUseCase>

            <hr />
            <div><h4 className="subtitle is-4 has-text-weight-semibold">Custom component props</h4></div>

            <ComponentUseCase
                captionIsCode
                caption="style"
                description="Button color style. Uses the ButtonStyle enum — covers all Bulma button colors."
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import Button from "@bodynarf/react.components/components/button";`,
                            "",
                            `<Button caption="Default"  style={ButtonStyle.Default} />`,
                            `<Button caption="Primary"  style={ButtonStyle.Primary} />`,
                            `<Button caption="Link"     style={ButtonStyle.Link} />`,
                            `<Button caption="Info"     style={ButtonStyle.Info} />`,
                            `<Button caption="Success"  style={ButtonStyle.Success} />`,
                            `<Button caption="Warning"  style={ButtonStyle.Warning} />`,
                            `<Button caption="Danger"   style={ButtonStyle.Danger} />`,
                            `<Button caption="White"    style={ButtonStyle.White} />`,
                            `<Button caption="Light"    style={ButtonStyle.Light} />`,
                            `<Button caption="Dark"     style={ButtonStyle.Dark} />`,
                            `<Button caption="Black"    style={ButtonStyle.Black} />`,
                            `<Button caption="Text"     style={ButtonStyle.Text} />`,
                            `<Button caption="Ghost"    style={ButtonStyle.Ghost} />`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex is-flex-wrap-wrap" style={{ gap: "0.5rem" }}>
                    {Object.values(ButtonStyle).map(s => (
                        <ButtonComponent key={s} caption={s.charAt(0).toUpperCase() + s.slice(1)} style={s} />
                    ))}
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="caption"
                description="Text displayed inside the button."
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import Button from "@bodynarf/react.components/components/button";`,
                            "",
                            `<Button caption="Click me" style={ButtonStyle.Primary} />`,
                        ].join("\n")}
                    />
                }
            >
                <ButtonComponent caption="Click me" style={ButtonStyle.Primary} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="icon"
                description="Bootstrap icon shown inside the button. Provide name (without bi- prefix) and optionally position, size or className. Can be used with or without caption."
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle, ElementPosition } from "@bodynarf/react.components";`,
                            `import Button from "@bodynarf/react.components/components/button";`,
                            "",
                            `// Icon only`,
                            `<Button style={ButtonStyle.Primary} icon={{ name: "broadcast" }} />`,
                            "",
                            `// Icon + caption, icon on the right`,
                            `<Button`,
                            `    caption="Stream"`,
                            `    style={ButtonStyle.Primary}`,
                            `    icon={{ name: "broadcast", position: ElementPosition.Right }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "0.5rem" }}>
                    <ButtonComponent style={ButtonStyle.Primary} icon={{ name: "broadcast" }} />
                    <ButtonComponent style={ButtonStyle.Primary} caption="Left icon" icon={{ name: "broadcast", position: ElementPosition.Left }} />
                    <ButtonComponent style={ButtonStyle.Primary} caption="Right icon" icon={{ name: "broadcast", position: ElementPosition.Right }} />
                </div>
            </ComponentUseCase>

            <ComponentSizeCase
                captionIsCode
                caption="size"
                description="Button supports all available sizes."
                codeProvider={size =>
                    <CodeExample
                        code={[
                            `import { ButtonStyle, ElementSize } from "@bodynarf/react.components";`,
                            `import Button from "@bodynarf/react.components/components/button";`,
                            "",
                            '<Button',
                            '    caption="Button"',
                            '    style={ButtonStyle.Primary}',
                            `    size={ElementSize.${size}}`,
                            '/>',
                        ].join("\n")}
                    />
                }
                componentProvider={size =>
                    <ButtonComponent size={size} style={ButtonStyle.Primary} caption="Button" />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="light"
                description="Use the light variant of the assigned style color."
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import Button from "@bodynarf/react.components/components/button";`,
                            "",
                            '<Button',
                            '   light',
                            '   caption="Light button"',
                            '   style={ButtonStyle.Primary}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <ButtonComponent light caption="Light button" style={ButtonStyle.Primary} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="outlined"
                description="Render the button with a border only — no filled background."
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import Button from "@bodynarf/react.components/components/button";`,
                            "",
                            '<Button',
                            '   outlined',
                            '   caption="Outlined"',
                            '   style={ButtonStyle.Primary}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <ButtonComponent outlined caption="Outlined" style={ButtonStyle.Primary} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="rounded"
                description="Render the button with fully rounded corners (pill shape)."
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import Button from "@bodynarf/react.components/components/button";`,
                            "",
                            '<Button',
                            '   rounded',
                            '   caption="Rounded"',
                            '   style={ButtonStyle.Primary}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <ButtonComponent rounded caption="Rounded" style={ButtonStyle.Primary} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="isLoading"
                description="Show a loading spinner inside the button. The button remains in place but is not interactive."
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import Button from "@bodynarf/react.components/components/button";`,
                            "",
                            '<Button',
                            '   isLoading',
                            '   caption="Loading"',
                            '   style={ButtonStyle.Primary}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <ButtonComponent isLoading caption="Loading" style={ButtonStyle.Primary} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="Disable the button — it is not clickable and is visually dimmed."
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import Button from "@bodynarf/react.components/components/button";`,
                            "",
                            '<Button',
                            '   disabled',
                            '   caption="Disabled"',
                            '   style={ButtonStyle.Primary}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <ButtonComponent disabled caption="Disabled" style={ButtonStyle.Primary} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="static"
                description="Make the button non-interactive with cleared colors. Use inside button groups to show a label."
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import Button from "@bodynarf/react.components/components/button";`,
                            "",
                            '<Button',
                            '   static',
                            '   caption="Static"',
                            '   style={ButtonStyle.Primary}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <ButtonComponent static caption="Static" style={ButtonStyle.Primary} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onClick"
                description="Called when the button is clicked."
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import Button from "@bodynarf/react.components/components/button";`,
                            "",
                            '<Button',
                            '    caption="Click me"',
                            '    style={ButtonStyle.Primary}',
                            '    onClick={() => console.log("clicked")}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <ButtonComponent
                    caption="Click me"
                    style={ButtonStyle.Primary}
                    onClick={() => onClickLogRef.current?.append("onClick fired")}
                />
                <Log ref={onClickLogRef} />
            </ComponentUseCase>
        </section>
    );
};


export default Button;
