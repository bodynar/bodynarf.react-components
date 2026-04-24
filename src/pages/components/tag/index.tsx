import { FC, useCallback, useRef } from "react";

import { ElementColor, ElementSize, SelectableItem, Tag as TagComponent } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";
import ComponentEnumCase from "@app/sharedComponents/enumSelectionCase";
import Log, { LogRef } from "@app/sharedComponents/log";

const sizes: Array<string> =
    Object
        .keys(ElementSize)
        .filter(x => x !== "Small");

const sizesAsSelectList: Array<SelectableItem> =
    Object
        .values(ElementSize)
        .filter(x => x !== ElementSize.Small)
        .map((x, i) => ({
            displayValue: x,
            id: i.toString(),
            value: x,
        }) as SelectableItem);

/** Tag component demo */
const Tag: FC = () => {
    const onClickLogRef = useRef<LogRef>(null);
    const onRemoveLogRef = useRef<LogRef>(null);

    const handleClick = useCallback(() => {
        onClickLogRef.current?.append("clicked");
    }, []);

    const handleRemove = useCallback(() => {
        onRemoveLogRef.current?.append("removed");
    }, []);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Tag"
                version="1.5"
                baseTypeName="BaseElementProps"
                description="A component for displaying information about a category or tag"
            />

            <ComponentUseCase
                caption="Minimal use"
                description="To use the component, you only need to provide the text content"
                code={
                    <CodeExample
                        code={[
                            `import Tag from "@bodynarf/react.components/components/tag";`,
                            "",
                            "/* ... */",
                            "",
                            '<Tag content="Minimal use" />',
                        ].join("\n")}
                    />
                }
            >
                <TagComponent content="Minimal use" />
            </ComponentUseCase>

            <hr />
            <div><h4 className="subtitle is-4 has-text-weight-semibold">Custom component props</h4></div>

            <ComponentUseCase
                captionIsCode
                caption="content"
                description="Text content displayed inside the tag."
                code={
                    <CodeExample
                        code={[
                            `import Tag from "@bodynarf/react.components/components/tag";`,
                            "",
                            "/* ... */",
                            "",
                            '<Tag content="Hello world" />',
                        ].join("\n")}
                    />
                }
            >
                <TagComponent content="Hello world" />
            </ComponentUseCase>

            <ComponentEnumCase
                captionIsCode
                caption="size"
                enumNames={sizes}
                lookupValues={sizesAsSelectList}
                description="The component supports all sizes defined in ElementSize, except Small"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import Tag from "@bodynarf/react.components/components/tag";`,
                            "",
                            "/* ... */",
                            "",
                            '<Tag',
                            '    content="Size tag"',
                            `    size={ElementSize.${id}}`,
                            '/>',
                        ].join("\n")}
                    />
                }
                componentProvider={
                    (value: Exclude<ElementSize, ElementSize.Small>) =>
                        <TagComponent
                            content="Size tag"
                            size={value}
                        />
                }
            />

            <ComponentColorCase
                captionIsCode
                caption="style"
                description="Element color from the ElementColor enum."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import Tag from "@bodynarf/react.components/components/tag";`,
                            "",
                            "/* ... */",
                            "",
                            '<Tag',
                            '    content="Style tag"',
                            `    style={ElementColor.${id}}`,
                            '/>',
                        ].join("\n")}
                    />
                }
                componentProvider={
                    style =>
                        <TagComponent
                            style={style}
                            content="Style tag"
                        />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="rounded"
                description="Display the tag with rounded corners. Disabled by default."
                code={
                    <CodeExample
                        code={[
                            `import Tag from "@bodynarf/react.components/components/tag";`,
                            "",
                            "/* ... */",
                            "",
                            '<Tag',
                            '    rounded',
                            '    content="Rounded tag"',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <TagComponent
                    rounded
                    content="Rounded tag"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="lightColor"
                description="Display light shades of the style color. Disabled by default."
                code={
                    <CodeExample
                        code={[
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import Tag from "@bodynarf/react.components/components/tag";`,
                            "",
                            "/* ... */",
                            "",
                            '<Tag',
                            '    lightColor',
                            '    content="Light color tag"',
                            '    style={ElementColor.Primary}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <TagComponent
                    lightColor
                    content="Light color tag"
                    style={ElementColor.Primary}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="customColor"
                description="Custom color scheme using CSS-valid values. Overrides style when provided."
                code={
                    <CodeExample
                        code={[
                            `import Tag from "@bodynarf/react.components/components/tag";`,
                            "",
                            "/* ... */",
                            "",
                            '<Tag',
                            '    content="Custom color tag"',
                            '    customColor={{ backgroundColor: "#76dffb", color: "white" }}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <TagComponent
                    content="Custom color tag"
                    customColor={{ backgroundColor: "#76dffb", color: "white" }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onClick"
                description="Click handler. When provided, the tag becomes interactive."
                code={
                    <CodeExample
                        code={[
                            `import { useCallback } from "react";`,
                            `import Tag from "@bodynarf/react.components/components/tag";`,
                            "",
                            "/* ... */",
                            "",
                            "const handleClick = useCallback(() => {",
                            '    console.log("clicked");',
                            "}, []);",
                            "",
                            '<Tag',
                            '    content="Clickable tag"',
                            '    onClick={handleClick}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <TagComponent
                    content="Clickable tag"
                    onClick={handleClick}
                />
                <Log ref={onClickLogRef} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onRemove"
                description="When provided, a delete (×) button is rendered alongside the tag. Clicking it fires the callback."
                code={
                    <CodeExample
                        code={[
                            `import { useCallback } from "react";`,
                            `import Tag from "@bodynarf/react.components/components/tag";`,
                            "",
                            "/* ... */",
                            "",
                            "const handleRemove = useCallback(() => {",
                            '    console.log("removed");',
                            "}, []);",
                            "",
                            '<Tag',
                            '    content="Removable tag"',
                            '    onRemove={handleRemove}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <TagComponent
                    content="Removable tag"
                    onRemove={handleRemove}
                />
                <Log ref={onRemoveLogRef} />
            </ComponentUseCase>
        </section>
    );
};

export default Tag;
