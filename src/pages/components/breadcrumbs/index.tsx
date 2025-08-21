import { FC, ReactNode, useMemo } from "react";

import { ElementPosition, SelectableItem } from "@bodynarf/react.components";
import BreadcrumbsComponent, { BreadCrumb } from "@bodynarf/react.components/components/breadcrumbs";

import ComponentUseCase from "@app/sharedComponents/useCase";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentEnumCase from "@app/sharedComponents/enumSelectionCase";
import ComponentPositionCase from "@app/sharedComponents/positionUse";

const separators: Array<"arrow" | "bullet" | "dot" | "succeeds"> = [
    "arrow", "bullet", "dot", "succeeds"
];

/** Breadcrumbs component demo */
const Breadcrumbs: FC = () => {
    const items = [
        { active: false, caption: "Source", path: "#/source", },
        { active: false, caption: "Subfolder", path: "#/subfolder", },
        { active: false, caption: "Target", path: "#/target", },
        { active: false, caption: "Current", path: "#/current", },
    ];

    const separatorsAsSelectItems = useMemo(
        () => separators.map((x, i) => ({
            displayValue: x,
            id: i.toString(),
            value: x,
        }) as SelectableItem),
        []
    );

    return (
        <section>
            <DemoComponentTitleInfoMessage
                hidePropsNotice
                name="Breadcrumbs"
                description="Breadcrumbs is a navigation component that displays the current page’s location within a hierarchy. It shows a sequence of links (or items) representing the navigation path, making it easier for users to move back to previous sections."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Minimal configuration requires only items passed to the items prop"
                code={
                    <CodeExample
                        code={[
                            `import BreadcrumbsComponent from "@bodynarf/react.components/components/breadcrumbs";`,
                            "",
                            "/* ... */",
                            "const items = [];",
                            '    { caption: "Source", href: "#/source", },',
                            '    { caption: "Subfolder", href: "#/subfolder", },',
                            '    { caption: "Target", href: "#/target", },',
                            '    { caption: "Current", href: "#/current", },',
                            "/* ... */",
                            "",
                            '<BreadcrumbsComponent items={items} />',
                        ].join("\n")}
                    />
                }
            >
                <BreadcrumbsComponent items={items} />
            </ComponentUseCase>

            <ComponentSizeCase
                caption="Sizes"
                description="The component supports all sizes defined in the ElementSize type"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import BreadcrumbsComponent from "@bodynarf/react.components/components/breadcrumbs";`,
                            "",
                            "/* ... */",
                            "const items = [];",
                            '    { caption: "Source", href: "#/source", },',
                            '    { caption: "Subfolder", href: "#/subfolder", },',
                            '    { caption: "Target", href: "#/target", },',
                            '    { caption: "Current", href: "#/current", },',
                            "/* ... */",
                            "",
                            `<BreadcrumbsComponent items={items} size={ElementSize.${id}} />`,
                        ].join("\n")}
                    />
                }
                componentProvider={
                    size =>
                        <BreadcrumbsComponent
                            items={items}
                            size={size}
                        />
                }
            />

            <ComponentPositionCase
                caption="Positions"
                description="The component supports 3 different positions"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementPosition } from "@bodynarf/react.components";`,
                            `import BreadcrumbsComponent from "@bodynarf/react.components/components/breadcrumbs";`,
                            "",
                            "/* ... */",
                            "const items = [];",
                            '    { caption: "Source", href: "#/source", },',
                            '    { caption: "Subfolder", href: "#/subfolder", },',
                            '    { caption: "Target", href: "#/target", },',
                            '    { caption: "Current", href: "#/current", },',
                            "/* ... */",
                            "",
                            `<BreadcrumbsComponent items={items} position={ElementPosition.${id}} />`,
                        ].join("\n")}
                    />
                }
                componentProvider={
                    (position: ElementPosition) =>
                        <BreadcrumbsComponent
                            items={items}
                            position={position}
                        />
                }
            />

            <ComponentEnumCase
                captionIsCode
                caption="separator"
                enumNames={separators}
                placeholder="Separator type"
                lookupValues={separatorsAsSelectItems}
                description="Item separators can have different styles"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import BreadcrumbsComponent from "@bodynarf/react.components/components/breadcrumbs";`,
                            "",
                            "/* ... */",
                            "const items = [];",
                            '    { caption: "Source", href: "#/source", },',
                            '    { caption: "Subfolder", href: "#/subfolder", },',
                            '    { caption: "Target", href: "#/target", },',
                            '    { caption: "Current", href: "#/current", },',
                            "/* ... */",
                            "",
                            `<BreadcrumbsComponent items={items} separator="${id}" />`,
                        ].join("\n")}
                    />
                }
                componentProvider={
                    (value: "arrow" | "bullet" | "dot" | "succeeds") =>
                        <BreadcrumbsComponent
                            items={items}
                            separator={value}
                        />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="elementGenerator"
                description="It is possible to use a custom generator (template) for rendering breadcrumb items"
                code={
                    <CodeExample
                        code={[
                            `import { ReactNode } from "react";`,
                            `import BreadcrumbsComponent, { BreadCrumb } from "@bodynarf/react.components/components/breadcrumbs";`,
                            "",
                            "/* ... */",
                            "const customElementGenerator: (bc: BreadCrumb) => ReactNode = ((bc) => (",
                            '    <button type="button">',
                            "        {bc.caption}",
                            "    </button>",
                            "));",
                            "/* ... */",
                            "const items = [];",
                            '    { caption: "Source", href: "#/source", },',
                            '    { caption: "Subfolder", href: "#/subfolder", },',
                            '    { caption: "Target", href: "#/target", },',
                            '    { caption: "Current", href: "#/current", },',
                            "/* ... */",
                            "",
                            '<BreadcrumbsComponent',
                            '    items={items}',
                            '    elementGenerator={customElementGenerator}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <BreadcrumbsComponent
                    items={items}

                    elementGenerator={customElementGenerator}
                />
            </ComponentUseCase>

        </section>
    );
};

export default Breadcrumbs;

const customElementGenerator: (bc: BreadCrumb) => ReactNode = ((bc) => (
    <button type="button">
        {bc.caption}
    </button>
));
