import { FC, useCallback, useRef } from "react";

import EmptyStateComponent from "@bodynarf/react.components/components/emptyState";
import { ButtonStyle } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";
import Log, { LogRef } from "@app/sharedComponents/log";

/** EmptyState component demo */
const EmptyState: FC = () => {
    const onActionLogRef = useRef<LogRef>(null);

    const handleAction = useCallback(() => {
        onActionLogRef.current?.append("action clicked");
    }, []);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="EmptyState"
                version="1.15"
                baseTypeName="BaseElementProps"
                description="Placeholder for empty lists, search results or pages with no data."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Only a title is required. Default icon is inbox."
                code={
                    <CodeExample
                        code={[
                            `import EmptyState from "@bodynarf/react.components/components/emptyState";`,
                            "",
                            `<EmptyState title="No items found" />`,
                        ].join("\n")}
                    />
                }
            >
                <EmptyStateComponent title="No items found" />
            </ComponentUseCase>

            <hr />
            <div>
                <h4 className="subtitle is-4 has-text-weight-semibold">Custom component props</h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="title"
                description="Main heading text displayed inside the empty state block."
                code={
                    <CodeExample
                        code={[
                            `import EmptyState from "@bodynarf/react.components/components/emptyState";`,
                            "",
                            `<EmptyState title="Nothing to show here" />`,
                        ].join("\n")}
                    />
                }
            >
                <EmptyStateComponent title="Nothing to show here" />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="description"
                description="Secondary descriptive text shown below the title."
                code={
                    <CodeExample
                        code={[
                            `import EmptyState from "@bodynarf/react.components/components/emptyState";`,
                            "",
                            `<EmptyState`,
                            `    title="No results"`,
                            `    description="Try adjusting your search query or filters."`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <EmptyStateComponent
                    title="No results"
                    description="Try adjusting your search query or filters."
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="icon"
                description="Bootstrap icon name (without bi- prefix) displayed above the title. Defaults to inbox."
                code={
                    <CodeExample
                        code={[
                            `import EmptyState from "@bodynarf/react.components/components/emptyState";`,
                            "",
                            `<EmptyState`,
                            `    icon="search"`,
                            `    title="No search results"`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <EmptyStateComponent
                    title="No search results"
                    icon="search"
                />
            </ComponentUseCase>

            <ComponentColorCase
                captionIsCode
                caption="color"
                description="Color applied to the icon and title. Defaults to Default."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import EmptyState from "@bodynarf/react.components/components/emptyState";`,
                            "",
                            `<EmptyState`,
                            `    title="Empty state"`,
                            `    color={ElementColor.${id}}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
                componentProvider={color =>
                    <EmptyStateComponent
                        title="Empty state"
                        color={color}
                    />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="action"
                description="Optional call-to-action button config (ButtonProps). Rendered below the description when provided."
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import EmptyState from "@bodynarf/react.components/components/emptyState";`,
                            "",
                            `<EmptyState`,
                            `    icon="cart"`,
                            `    title="Your cart is empty"`,
                            `    description="Add some items to get started."`,
                            `    action={{`,
                            `        caption: "Browse products",`,
                            `        style: ButtonStyle.Primary,`,
                            `        onClick: () => console.log("browse"),`,
                            `    }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <EmptyStateComponent
                    title="Your cart is empty"
                    description="Add some items to get started."
                    icon="cart"
                    action={{
                        caption: "Browse products",
                        style: ButtonStyle.Primary,
                        onClick: handleAction,
                    }}
                />
                <Log ref={onActionLogRef} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="children"
                description="Arbitrary content placed below the description. Use as an alternative to action for more complex layouts."
                code={
                    <CodeExample
                        code={[
                            `import EmptyState from "@bodynarf/react.components/components/emptyState";`,
                            "",
                            `<EmptyState`,
                            `    title="No data available"`,
                            `    description="You can import data or create a new entry."`,
                            `>`,
                            `    <div className="buttons">`,
                            `        <button className="button is-primary">Import</button>`,
                            `        <button className="button">Create new</button>`,
                            `    </div>`,
                            `</EmptyState>`,
                        ].join("\n")}
                    />
                }
            >
                <EmptyStateComponent
                    title="No data available"
                    description="You can import data or create a new entry."
                >
                    <div className="buttons">
                        <button type="button" className="button is-primary">Import</button>
                        <button type="button" className="button">Create new</button>
                    </div>
                </EmptyStateComponent>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="compact"
                description="Display the component in a compact horizontal layout. Disabled by default."
                code={
                    <CodeExample
                        code={[
                            `import EmptyState from "@bodynarf/react.components/components/emptyState";`,
                            "",
                            `<EmptyState`,
                            `    compact`,
                            `    title="No items"`,
                            `    description="Nothing to show here."`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <EmptyStateComponent
                    compact
                    title="No items"
                    description="Nothing to show here."
                />
            </ComponentUseCase>
        </section>
    );
};

export default EmptyState;
