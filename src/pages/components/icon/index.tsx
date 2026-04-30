import { FC, useCallback, useRef } from "react";

import IconComponent from "@bodynarf/react.components/components/icon";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import CodeExample from "@app/sharedComponents/codeExample";
import Log, { LogRef } from "@app/sharedComponents/log";

/** Icon component demo */
const Icon: FC = () => {
    const onClickLogRef = useRef<LogRef>(null);

    const handleClick = useCallback(() => {
        onClickLogRef.current?.append("clicked");
    }, []);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Icon"
                version="0.1"
                baseTypeName="BaseElementProps"
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
                            '<IconComponent name="alarm" />',
                        ].join("\n")}
                    />
                }
            >
                <IconComponent name="alarm" />
            </ComponentUseCase>

            <hr />
            <div><h4 className="subtitle is-4 has-text-weight-semibold">Custom component props</h4></div>

            <ComponentUseCase
                captionIsCode
                caption="name"
                description="Bootstrap icon name without the bi- prefix. Find icon names on the Bootstrap Icons website."
                code={
                    <CodeExample
                        code={[
                            `import IconComponent from "@bodynarf/react.components/components/icon";`,
                            "",
                            '<IconComponent name="star-fill" />',
                        ].join("\n")}
                    />
                }
            >
                <IconComponent name="star-fill" />
            </ComponentUseCase>

            <ComponentSizeCase
                captionIsCode
                caption="size"
                description="The component supports all available sizes."
                codeProvider={size =>
                    <CodeExample
                        code={[
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import IconComponent from "@bodynarf/react.components/components/icon";`,
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
                description="Click handler. When provided, the icon becomes interactive. And gets a 'is-clickable' class for styling."
                code={
                    <CodeExample
                        code={[
                            `import { useCallback } from "react";`,
                            "",
                            `import IconComponent from "@bodynarf/react.components/components/icon";`,
                            "",
                            "const handleClick = useCallback(() => {",
                            '    console.log("clicked");',
                            "}, []);",
                            "",
                            '<IconComponent',
                            '    name="alarm"',
                            '    onClick={handleClick}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <IconComponent
                    name="alarm"
                    onClick={handleClick}
                />
                <Log ref={onClickLogRef} />
            </ComponentUseCase>
        </section>
    );
};

export default Icon;
