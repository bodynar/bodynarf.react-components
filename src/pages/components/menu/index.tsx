import { FC, useCallback, useRef, useState } from "react";

import { Menu as MenuComponent } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";
import Log, { LogRef } from "@app/sharedComponents/log";

/** Menu component demo */
const Menu: FC = () => {
    const [activeId, setActiveId] = useState("dashboard");
    const onItemClickLogRef = useRef<LogRef>(null);

    const handleItemClick = useCallback((id: string) => {
        onItemClickLogRef.current?.append(`clicked: ${id}`);
    }, []);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Menu"
                version="1.15"
                baseTypeName="BaseElementProps"
                description="Vertical navigation sidebar based on Bulma .menu. Supports grouped sections, icons, active item highlight and disabled items."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Provide sections with items. Each section can have an optional label."
                code={
                    <CodeExample
                        code={[
                            `import { Menu } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<Menu`,
                            `    sections={[`,
                            `        {`,
                            `            items: [`,
                            `                { id: "home", label: "Home" },`,
                            `                { id: "about", label: "About" },`,
                            `            ]`,
                            `        }`,
                            `    ]}`,
                            `    onItemClick={id => console.log(id)}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div style={{ width: "200px" }}>
                    <MenuComponent
                        sections={[
                            {
                                items: [
                                    { id: "home", label: "Home" },
                                    { id: "about", label: "About" },
                                ]
                            }
                        ]}
                        onItemClick={() => undefined}
                    />
                </div>
            </ComponentUseCase>

            <hr />
            <div><h4>Custom component props</h4></div>

            <ComponentUseCase
                captionIsCode
                caption="sections"
                description="Array of section configs, each with an optional label and a list of items. Multiple sections are stacked vertically."
                code={
                    <CodeExample
                        code={[
                            `import { Menu } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<Menu`,
                            `    sections={[`,
                            `        {`,
                            `            label: "Main",`,
                            `            items: [`,
                            `                { id: "home", label: "Home" },`,
                            `                { id: "dashboard", label: "Dashboard" },`,
                            `            ]`,
                            `        },`,
                            `        {`,
                            `            label: "Account",`,
                            `            items: [`,
                            `                { id: "profile", label: "Profile" },`,
                            `                { id: "logout", label: "Log out" },`,
                            `            ]`,
                            `        },`,
                            `    ]}`,
                            `    onItemClick={id => console.log(id)}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div style={{ width: "200px" }}>
                    <MenuComponent
                        sections={[
                            {
                                label: "Main",
                                items: [
                                    { id: "s-home", label: "Home" },
                                    { id: "s-dashboard", label: "Dashboard" },
                                ]
                            },
                            {
                                label: "Account",
                                items: [
                                    { id: "s-profile", label: "Profile" },
                                    { id: "s-logout", label: "Log out" },
                                ]
                            },
                        ]}
                        onItemClick={() => undefined}
                    />
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="activeItemId"
                description="ID of the currently active item. The matching item receives the is-active highlight."
                code={
                    <CodeExample
                        code={[
                            `import { Menu } from "@bodynarf/react.components";`,
                            "",
                            `const [activeId, setActiveId] = useState("dashboard");`,
                            "",
                            `<Menu`,
                            `    activeItemId={activeId}`,
                            `    sections={[{ items: [...] }]}`,
                            `    onItemClick={setActiveId}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div style={{ width: "200px" }}>
                    <MenuComponent
                        activeItemId={activeId}
                        sections={[
                            {
                                items: [
                                    { id: "dashboard", label: "Dashboard", icon: "speedometer2" },
                                    { id: "analytics", label: "Analytics", icon: "bar-chart" },
                                    { id: "reports", label: "Reports", icon: "file-earmark-text" },
                                ]
                            }
                        ]}
                        onItemClick={setActiveId}
                    />
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onItemClick"
                description="Callback fired when a non-disabled item is clicked. Receives the id of the clicked item."
                code={
                    <CodeExample
                        code={[
                            `import { useCallback } from "react";`,
                            `import { Menu } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `const handleItemClick = useCallback((id: string) => {`,
                            `    console.log("clicked:", id);`,
                            `}, []);`,
                            "",
                            `<Menu`,
                            `    sections={[{ items: [...] }]}`,
                            `    onItemClick={handleItemClick}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div style={{ width: "200px" }}>
                    <MenuComponent
                        sections={[
                            {
                                items: [
                                    { id: "oc-home", label: "Home" },
                                    { id: "oc-about", label: "About" },
                                    { id: "oc-contact", label: "Contact" },
                                ]
                            }
                        ]}
                        onItemClick={handleItemClick}
                    />
                </div>
                <Log ref={onItemClickLogRef} />
            </ComponentUseCase>

            <hr />
            <div><h4>MenuItemConfig props</h4></div>

            <ComponentUseCase
                captionIsCode
                caption="icon"
                description="Bootstrap icon name (without the bi- prefix) shown to the left of the item label."
                code={
                    <CodeExample
                        code={[
                            `import { Menu } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<Menu`,
                            `    sections={[`,
                            `        {`,
                            `            items: [`,
                            `                { id: "dash", label: "Dashboard", icon: "speedometer2" },`,
                            `                { id: "users", label: "Users", icon: "people" },`,
                            `                { id: "settings", label: "Settings", icon: "gear" },`,
                            `            ]`,
                            `        }`,
                            `    ]}`,
                            `    onItemClick={() => undefined}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div style={{ width: "200px" }}>
                    <MenuComponent
                        sections={[
                            {
                                items: [
                                    { id: "i-dash", label: "Dashboard", icon: "speedometer2" },
                                    { id: "i-users", label: "Users", icon: "people" },
                                    { id: "i-settings", label: "Settings", icon: "gear" },
                                ]
                            }
                        ]}
                        onItemClick={() => undefined}
                    />
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="Mark an item as disabled — it is not clickable and is visually dimmed. Default is false."
                code={
                    <CodeExample
                        code={[
                            `import { Menu } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<Menu`,
                            `    sections={[`,
                            `        {`,
                            `            items: [`,
                            `                { id: "active", label: "Active item" },`,
                            `                { id: "disabled", label: "Disabled item", disabled: true },`,
                            `            ]`,
                            `        }`,
                            `    ]}`,
                            `    onItemClick={() => undefined}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div style={{ width: "200px" }}>
                    <MenuComponent
                        sections={[
                            {
                                items: [
                                    { id: "d-active", label: "Active item" },
                                    { id: "d-disabled", label: "Disabled item", disabled: true },
                                ]
                            }
                        ]}
                        onItemClick={() => undefined}
                    />
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="href"
                description="Navigation URL. When provided the item renders as an <a> tag instead of a button."
                code={
                    <CodeExample
                        code={[
                            `import { Menu } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<Menu`,
                            `    sections={[`,
                            `        {`,
                            `            items: [`,
                            `                { id: "ext", label: "GitHub", href: "https://github.com", icon: "github" },`,
                            `                { id: "local", label: "Regular item" },`,
                            `            ]`,
                            `        }`,
                            `    ]}`,
                            `    onItemClick={() => undefined}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div style={{ width: "200px" }}>
                    <MenuComponent
                        sections={[
                            {
                                items: [
                                    { id: "h-ext", label: "GitHub", href: "https://github.com", icon: "github" },
                                    { id: "h-local", label: "Regular item" },
                                ]
                            }
                        ]}
                        onItemClick={() => undefined}
                    />
                </div>
            </ComponentUseCase>

            <hr />
            <div><h4>MenuSectionConfig props</h4></div>

            <ComponentUseCase
                captionIsCode
                caption="label"
                description="Optional label displayed above the section items as a group header."
                code={
                    <CodeExample
                        code={[
                            `import { Menu } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<Menu`,
                            `    sections={[`,
                            `        { label: "Navigation", items: [{ id: "home", label: "Home" }] },`,
                            `        { items: [{ id: "about", label: "About" }] }, // no label`,
                            `    ]}`,
                            `    onItemClick={() => undefined}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div style={{ width: "200px" }}>
                    <MenuComponent
                        sections={[
                            {
                                label: "Navigation",
                                items: [
                                    { id: "l-home", label: "Home" },
                                    { id: "l-dash", label: "Dashboard" },
                                ]
                            },
                            {
                                items: [
                                    { id: "l-no-label", label: "Section without label" },
                                ]
                            },
                        ]}
                        onItemClick={() => undefined}
                    />
                </div>
            </ComponentUseCase>

            <hr />
            <div><h4>BaseElementProps</h4></div>

            <ComponentUseCase
                captionIsCode
                caption="className"
                description="Additional CSS class name applied to the root menu element."
                code={
                    <CodeExample
                        code={[
                            `import { Menu } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<Menu`,
                            `    className="my-custom-menu"`,
                            `    sections={[{ items: [{ id: "home", label: "Home" }] }]}`,
                            `    onItemClick={() => undefined}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div style={{ width: "200px" }}>
                    <MenuComponent
                        className="has-background-light p-2"
                        sections={[
                            {
                                items: [
                                    { id: "cn-home", label: "Home" },
                                    { id: "cn-about", label: "About" },
                                ]
                            }
                        ]}
                        onItemClick={() => undefined}
                    />
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="title"
                description="HTML title attribute applied to the root element. Shown as a native browser tooltip on hover."
                code={
                    <CodeExample
                        code={[
                            `import { Menu } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `<Menu`,
                            `    title="Navigation menu"`,
                            `    sections={[{ items: [{ id: "home", label: "Home" }] }]}`,
                            `    onItemClick={() => undefined}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div style={{ width: "200px" }}>
                    <MenuComponent
                        title="Navigation menu"
                        sections={[
                            {
                                items: [
                                    { id: "t-home", label: "Home" },
                                    { id: "t-about", label: "About" },
                                ]
                            }
                        ]}
                        onItemClick={() => undefined}
                    />
                </div>
            </ComponentUseCase>
        </section>
    );
};

export default Menu;
