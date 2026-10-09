import { FC } from "react";

import StackComponent, { HStack, VStack } from "@bodynarf/react.components/components/stack";
import Tag from "@bodynarf/react.components/components/tag";

import ComponentUseCase from "@app/sharedComponents/useCase";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

/** Stack component demo */
const Stack: FC = () => {
    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Stack"
                version="1.16"
                baseTypeName="BaseElementProps"
                description={"Flexbox container with a configurable gap between the children.\n`HStack` and `VStack` are shortcuts with a fixed `direction` (row / column)."}
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Any children are stacked in a column with the default 8px gap."
                code={
                    <CodeExample
                        code={[
                            `import Stack from "@bodynarf/react.components/components/stack";`,
                            "",
                            `<Stack>`,
                            `    <span className="tag">First</span>`,
                            `    <span className="tag is-primary">Second</span>`,
                            `    <span className="tag is-info">Third</span>`,
                            `</Stack>`,
                        ].join("\n")}
                    />
                }
            >
                <StackComponent>
                    <Tag content="First" />
                    <Tag content="Second" />
                    <Tag content="Third" />
                </StackComponent>
            </ComponentUseCase>

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">
                    Custom component props
                </h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="direction"
                description="Main axis of the stack: `column` (default) or `row`."
                code={
                    <CodeExample
                        code={[
                            `import Stack from "@bodynarf/react.components/components/stack";`,
                            "",
                            `<Stack direction="row">…</Stack>`,
                            `<Stack direction="column">…</Stack>`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "24px", flexWrap: "wrap" }}>
                    <StackComponent direction="row">
                        <Tag content="row 1" />
                        <Tag content="row 2" />
                        <Tag content="row 3" />
                    </StackComponent>
                    <StackComponent direction="column">
                        <Tag content="column 1" />
                        <Tag content="column 2" />
                        <Tag content="column 3" />
                    </StackComponent>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="gap"
                description="Gap between the children. Numeric values are treated as pixels, string values are used as is (any CSS length)."
                code={
                    <CodeExample
                        code={[
                            `import Stack from "@bodynarf/react.components/components/stack";`,
                            "",
                            `<Stack gap={24}>…</Stack>`,
                            `<Stack gap="1.5rem">…</Stack>`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "24px", flexWrap: "wrap" }}>
                    <StackComponent direction="row" gap={24}>
                        <Tag content="gap 24" />
                        <Tag content="px" />
                        <Tag content="items" />
                    </StackComponent>
                    <StackComponent direction="row" gap="1.5rem">
                        <Tag content="gap 1.5rem" />
                        <Tag content="items" />
                    </StackComponent>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="align"
                description="Children alignment on the cross axis (`align-items`): `flex-start`, `center`, `flex-end`, `stretch`, `baseline`."
                code={
                    <CodeExample
                        code={[
                            `import Stack from "@bodynarf/react.components/components/stack";`,
                            "",
                            `<div style={{ height: 80 }}>`,
                            `    <Stack direction="row" align="center">…</Stack>`,
                            `</div>`,
                        ].join("\n")}
                    />
                }
            >
                <div style={{ height: "80px" }}>
                    <StackComponent direction="row" align="center">
                        <Tag content="start" />
                        <span className="tag is-primary is-medium">center</span>
                        <span className="tag is-info is-large">center</span>
                        <Tag content="end" />
                    </StackComponent>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="justify"
                description="Children distribution on the main axis (`justify-content`): `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly`."
                code={
                    <CodeExample
                        code={[
                            `import Stack from "@bodynarf/react.components/components/stack";`,
                            "",
                            `<Stack direction="row" justify="space-between">…</Stack>`,
                        ].join("\n")}
                    />
                }
            >
                <div style={{ border: "1px dashed #dbdbdb", padding: "8px" }}>
                    <StackComponent direction="row" justify="space-between">
                        <Tag content="first" />
                        <Tag content="middle" />
                        <Tag content="last" />
                    </StackComponent>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="wrap"
                description="Children wrapping behavior (`flex-wrap`). Combined with a constrained width the row wraps onto several lines."
                code={
                    <CodeExample
                        code={[
                            `import Stack from "@bodynarf/react.components/components/stack";`,
                            "",
                            `<Stack direction="row" wrap="wrap">…</Stack>`,
                        ].join("\n")}
                    />
                }
            >
                <div style={{ maxWidth: "320px", border: "1px dashed #dbdbdb", padding: "8px" }}>
                    <StackComponent direction="row" wrap="wrap">
                        <Tag content="tag 1" />
                        <Tag content="tag 2" />
                        <Tag content="tag 3" />
                        <Tag content="tag 4" />
                        <Tag content="tag 5" />
                        <Tag content="tag 6" />
                    </StackComponent>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                caption="HStack / VStack"
                description="Shortcuts for the most common directions: `HStack` is a row, `VStack` is a column. Both accept the same props as `Stack` except `direction`."
                code={
                    <CodeExample
                        code={[
                            `import { HStack, VStack } from "@bodynarf/react.components/components/stack";`,
                            "",
                            `<HStack gap={12}>…</HStack>`,
                            `<VStack gap={12}>…</VStack>`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "24px", flexWrap: "wrap" }}>
                    <HStack gap={12}>
                        <Tag content="HStack" />
                        <Tag content="item" />
                    </HStack>
                    <VStack gap={12}>
                        <Tag content="VStack" />
                        <Tag content="item" />
                    </VStack>
                </div>
            </ComponentUseCase>
        </section>
    );
};

export default Stack;
