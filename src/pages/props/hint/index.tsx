import { FC } from "react";

import { ElementPosition, Text as TextComponent } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

/** Hint input prop demo */
const HintProp: FC = () => {
    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Hint"
                description={
                    <>
                        A hint displayed below an input field.
                        <br />
                        The hint can be used with any component whose props type inherits from
                        {` `}
                        <code>
                            BaseInputElementProps
                        </code>
                        {` `}
                        .
                    </>
                }
            />

            <ComponentUseCase
                caption="Minimal use"
                description="To use a hint, you only need to provide its content."
                code={
                    <CodeExample
                        code={[
                            `import TextComponent from "@bodynarf/react.components/components/primitives/text";`,
                            "",
                            "/* ... */",
                            "",
                            `<TextComponent`,
                            '    hint={{ content: "Describing hint" }}',
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <TextComponent
                    hint={{ content: "Describing hint" }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="italic"
                description="Option to display the hint text in italic. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import TextComponent from "@bodynarf/react.components/components/primitives/text";`,
                            "",
                            "/* ... */",
                            "",
                            `<TextComponent`,
                            '    hint={{ content: "Example: Agosto", italic: true }}',
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <TextComponent
                    hint={{ content: "Example: Agosto", italic: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="grey"
                description="Option to display the hint text in grey. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import TextComponent from "@bodynarf/react.components/components/primitives/text";`,
                            "",
                            "/* ... */",
                            "",
                            `<TextComponent`,
                            '    hint={{ content: "Personal Identification Number", grey: true }}',
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <TextComponent
                    hint={{ content: "Personal Identification Number", grey: true }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="icon"
                description="Option to display an icon inside the hint. Not set by default."
                code={
                    <CodeExample
                        code={[
                            `import { ElementPosition } from "@bodynarf/react.components";`,
                            `import TextComponent from "@bodynarf/react.components/components/primitives/text";`,
                            "",
                            "/* ... */",
                            "",
                            `<TextComponent`,
                            '    hint={{ content: "Think outside the box", icon: { name: "box", position: ElementPosition.Right } }}',
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <TextComponent
                    hint={{ content: "Think outside the box", icon: { name: "box", position: ElementPosition.Right } }}
                />
            </ComponentUseCase>
        </section>
    );
};

export default HintProp;
