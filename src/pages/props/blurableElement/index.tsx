import { FC, FocusEventHandler, useCallback, useRef } from "react";

import TextComponent from "@bodynarf/react.components/components/primitives/text";

import ComponentUseCase from "@app/sharedComponents/useCase";
import CodeExample from "@app/sharedComponents/codeExample";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import Log, { LogRef } from "@app/sharedComponents/log";

/** BlurableElement demo */
const BlurableElementDemo: FC = () => {
    const onBlurLogRef = useRef<LogRef>(null);

    const handleBlur: FocusEventHandler<HTMLElement> = useCallback(
        () => {
            onBlurLogRef.current?.append("blurred");
        },
        []
    );

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="BlurableElement"
                description={
                    <>
                        Blur event handler for components that support focus management.
                        <br />
                        The BlurableElement type provides an optional handler for the blur (focus out) event.
                        <br />
                        It can be used with any component whose props type inherits from{" "}
                        <code>BlurableElement</code>.
                    </>
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="onBlur"
                description="Handler called when the element loses focus."
                code={
                    <CodeExample
                        code={[
                            `import { FocusEventHandler } from "react";`,
                            "",
                            `import Text from "@bodynarf/react.components/components/primitives/text";`,
                            "",
                            `const handleBlur: FocusEventHandler<HTMLElement> = () => {`,
                            `    console.log("blurred");`,
                            `};`,
                            "",
                            `<Text`,
                            `    onBlur={handleBlur}`,
                            `    label={{ caption: "Text demo", horizontal: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <TextComponent
                    onBlur={handleBlur}
                    label={{ caption: "Text demo", horizontal: true }}
                />
                <Log ref={onBlurLogRef} />
            </ComponentUseCase>
        </section>
    );
};

export default BlurableElementDemo;
