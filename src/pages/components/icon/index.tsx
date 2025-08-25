import { FC, useCallback, useState } from "react";

import IconComponent from "@bodynarf/react.components/components/icon";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import CodeExample from "@app/sharedComponents/codeExample";

/** Icon component demo */
const Icon: FC = () => {
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
                name="Icon"
                hidePropsNotice
                description={
                    <>
                        The component uses icons from
                        {' '}
                        &quot;
                        <a
                            target="_blank"
                            rel="noreferrer"
                            className="is-underlined"
                            href="https://icons.getbootstrap.com/"
                        >
                            Bootstrap-icons
                        </a>
                        &quot;.
                        {`\n`}
                        The icon name is passed as a prop, excluding the
                        {' '}
                        <code>
                            bi-
                        </code>
                        {' '}
                        prefix.
                    </>
                }
            />

            <ComponentUseCase
                caption="Minimal use"
                description={
                    <p style={{ whiteSpace: "pre-line" }}>
                        The minimal set of props is the icon name.
                        <br />
                        <br />
                        In this example, the
                        &quot;
                        <a
                            target="_blank"
                            rel="noreferrer"
                            className="is-underlined"
                            href="https://icons.getbootstrap.com/icons/alarm/"
                        >
                            alarm
                        </a>
                        &quot;
                        {' '}
                        icon is used.
                        According to the Bootstrap Icons documentation, it can be applied with the class
                        {' '}
                        <code>
                            bi-alarm
                        </code>
                        .
                        However, in the component you only need to provide the name
                        {' '}
                        <code>
                            alarm
                        </code>
                        {' '}
                        (
                        <span className="is-italic">
                            since all icons come from this library, the
                            {' '}
                            <code>
                                bi-
                            </code>
                            {' '}
                            prefix is omitted
                        </span>
                        {' '}
                        ).
                    </p>
                }
                code={
                    <CodeExample
                        code={[
                            `import IconComponent from "@bodynarf/react.components/components/icon";`,
                            "",
                            "/* ... */",
                            "",
                            '<IconComponent name="alarm" />',
                        ].join("\n")}
                    />
                }
            >
                <IconComponent name="alarm" />
            </ComponentUseCase>

            <ComponentSizeCase
                caption="size"
                captionIsCode
                description="The component supports all available sizes"
                codeProvider={size =>
                    <CodeExample
                        code={[
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import IconComponent from "@bodynarf/react.components/components/icon";`,
                            "",
                            "/* ... */",
                            "",
                            '<IconComponent',
                            '    name="alarm"',
                            `    size={ElementSize.${size}}`,
                            '/>',
                        ].join("\n")}
                    />
                }
                componentProvider={
                    size =>
                        <IconComponent
                            name="book"
                            size={size}
                        />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="onClick"
                description="Handling the component click event"
                code={
                    <CodeExample
                        code={[
                            `import { useCallback } from "react"`,
                            `import IconComponent from "@bodynarf/react.components/components/icon";`,
                            "",
                            "/* ... */",
                            "const ON_CLICK_HANDLE_FN = useCallback(() => { /* handler fn */}, []);",
                            "",
                            "",
                            '<IconComponent',
                            '    name="alarm"',
                            '    onClick={ON_CLICK_HANDLE_FN}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <IconComponent
                    name="alarm"
                    onClick={appendText}
                />
                <p style={{ whiteSpace: "pre-line" }}>
                    {text}
                </p>
            </ComponentUseCase>
        </section>
    );
};

export default Icon;
