import { FC } from "react";

import { ElementPosition, Breadcrumbs as BreadcrumbsComponent, BreadCrumb } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentPositionCase from "@app/sharedComponents/positionUse";

const items: BreadCrumb[] = [
    { caption: "Source", href: "#/source" },
    { caption: "Subfolder", href: "#/subfolder" },
    { caption: "Target", href: "#/target" },
    { caption: "Current", href: "#/current" },
];

const itemsWithIcons: BreadCrumb[] = [
    { caption: "Home", href: "#/home", icon: { name: "house" } },
    { caption: "Library", href: "#/library", icon: { name: "collection" } },
    { caption: "Data", href: "#/data", icon: { name: "database" } },
];

const customElementGenerator = (bc: BreadCrumb) => (
    <button type="button" className="button is-small is-light">
        {bc.caption}
    </button>
);

/** Breadcrumbs component demo */
const Breadcrumbs: FC = () => {
    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Breadcrumbs"
                version="1.8"
                baseTypeName="BaseElementProps"
                description="Navigation component that shows the current page location within a hierarchy as a sequence of links."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Only items is required."
                code={
                    <CodeExample
                        code={[
                            `import { Breadcrumbs } from "@bodynarf/react.components";`,
                            "",
                            `const items = [`,
                            `    { caption: "Source", href: "#/source" },`,
                            `    { caption: "Subfolder", href: "#/subfolder" },`,
                            `    { caption: "Current", href: "#/current" },`,
                            `];`,
                            "",
                            `<Breadcrumbs items={items} />`,
                        ].join("\n")}
                    />
                }
            >
                <BreadcrumbsComponent items={items} />
            </ComponentUseCase>

            <hr />
            <div><h4 className="subtitle is-4 has-text-weight-semibold">Custom component props</h4></div>

            <ComponentUseCase
                captionIsCode
                caption="items"
                description="Array of BreadCrumb objects. Each item requires caption (display text) and href (link address). Optionally accepts an icon."
                code={
                    <CodeExample
                        code={[
                            `import { Breadcrumbs } from "@bodynarf/react.components";`,
                            "",
                            `<Breadcrumbs`,
                            `    items={[`,
                            `        { caption: "Home", href: "#/home", icon: { name: "house" } },`,
                            `        { caption: "Library", href: "#/library", icon: { name: "collection" } },`,
                            `        { caption: "Data", href: "#/data", icon: { name: "database" } },`,
                            `    ]}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <BreadcrumbsComponent items={itemsWithIcons} />
            </ComponentUseCase>

            <ComponentSizeCase
                captionIsCode
                caption="size"
                description="The component supports all sizes defined in ElementSize."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { Breadcrumbs, ElementSize } from "@bodynarf/react.components";`,
                            "",
                            `<Breadcrumbs items={items} size={ElementSize.${id}} />`,
                        ].join("\n")}
                    />
                }
                componentProvider={size =>
                    <BreadcrumbsComponent items={items} size={size} />
                }
            />

            <ComponentPositionCase
                captionIsCode
                caption="position"
                description="Horizontal alignment of the breadcrumb list."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { Breadcrumbs, ElementPosition } from "@bodynarf/react.components";`,
                            "",
                            `<Breadcrumbs items={items} position={ElementPosition.${id}} />`,
                        ].join("\n")}
                    />
                }
                componentProvider={(position: ElementPosition) =>
                    <BreadcrumbsComponent items={items} position={position} />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="separator"
                description='Separator style between items. One of: "arrow" (default), "bullet", "dot", "succeeds".'
                code={
                    <CodeExample
                        code={[
                            `import { Breadcrumbs } from "@bodynarf/react.components";`,
                            "",
                            `<Breadcrumbs items={items} separator="arrow" />`,
                            `<Breadcrumbs items={items} separator="bullet" />`,
                            `<Breadcrumbs items={items} separator="dot" />`,
                            `<Breadcrumbs items={items} separator="succeeds" />`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex is-flex-direction-column" style={{ gap: "0.75rem" }}>
                    {(["arrow", "bullet", "dot", "succeeds"] as const).map(sep => (
                        <div key={sep}>
                            <p className="mb-1 has-text-grey">{sep}</p>
                            <BreadcrumbsComponent items={items} separator={sep} />
                        </div>
                    ))}
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="ariaLabel"
                description='Accessible label for the nav landmark. Defaults to "breadcrumbs".'
                code={
                    <CodeExample
                        code={[
                            `import { Breadcrumbs } from "@bodynarf/react.components";`,
                            "",
                            `<Breadcrumbs items={items} ariaLabel="page navigation" />`,
                        ].join("\n")}
                    />
                }
            >
                <BreadcrumbsComponent items={items} ariaLabel="page navigation" />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="elementGenerator"
                description="Custom render function for each breadcrumb item. Receives the BreadCrumb object and returns a ReactNode."
                code={
                    <CodeExample
                        code={[
                            `import { ReactNode } from "react";`,
                            `import { Breadcrumbs, BreadCrumb } from "@bodynarf/react.components";`,
                            "",
                            `const customElementGenerator = (bc: BreadCrumb): ReactNode => (`,
                            `    <button type="button" className="button is-small is-light">`,
                            `        {bc.caption}`,
                            `    </button>`,
                            `);`,
                            "",
                            `<Breadcrumbs items={items} elementGenerator={customElementGenerator} />`,
                        ].join("\n")}
                    />
                }
            >
                <BreadcrumbsComponent items={items} elementGenerator={customElementGenerator} />
            </ComponentUseCase>

            <hr />
            <div><h4 className="subtitle is-4 has-text-weight-semibold">BreadCrumb props</h4></div>

            <ComponentUseCase
                captionIsCode
                caption="caption"
                description="Display text of the breadcrumb item."
                code={
                    <CodeExample
                        code={[
                            `import { Breadcrumbs } from "@bodynarf/react.components";`,
                            "",
                            `<Breadcrumbs`,
                            `    items={[`,
                            `        { caption: "Home", href: "#/" },`,
                            `        { caption: "Settings", href: "#/settings" },`,
                            `    ]}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <BreadcrumbsComponent
                    items={[
                        { caption: "Home", href: "#/" },
                        { caption: "Settings", href: "#/settings" },
                    ]}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="href"
                description="Link address for the breadcrumb item. Used as the href of the rendered anchor element."
                code={
                    <CodeExample
                        code={[
                            `import { Breadcrumbs } from "@bodynarf/react.components";`,
                            "",
                            `<Breadcrumbs`,
                            `    items={[`,
                            `        { caption: "Home", href: "/" },`,
                            `        { caption: "Docs", href: "/docs" },`,
                            `        { caption: "API", href: "/docs/api" },`,
                            `    ]}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <BreadcrumbsComponent
                    items={[
                        { caption: "Home", href: "/" },
                        { caption: "Docs", href: "/docs" },
                        { caption: "API", href: "/docs/api" },
                    ]}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="icon"
                description="Bootstrap icon shown before the caption. Provide name (without bi- prefix) and optionally position, size or className."
                code={
                    <CodeExample
                        code={[
                            `import { Breadcrumbs } from "@bodynarf/react.components";`,
                            "",
                            `<Breadcrumbs`,
                            `    items={[`,
                            `        { caption: "Home", href: "#/", icon: { name: "house" } },`,
                            `        { caption: "Projects", href: "#/projects", icon: { name: "folder" } },`,
                            `        { caption: "Report", href: "#/report", icon: { name: "file-text" } },`,
                            `    ]}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <BreadcrumbsComponent
                    items={[
                        { caption: "Home", href: "#/", icon: { name: "house" } },
                        { caption: "Projects", href: "#/projects", icon: { name: "folder" } },
                        { caption: "Report", href: "#/report", icon: { name: "file-text" } },
                    ]}
                />
            </ComponentUseCase>
        </section>
    );
};

export default Breadcrumbs;
