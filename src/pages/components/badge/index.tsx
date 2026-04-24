import { FC } from "react";

import { Badge as BadgeComponent } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

/** Badge component demo */
const Badge: FC = () => {
    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Badge"
                version="1.15"
                baseTypeName="BaseElementProps"
                description="Overlay indicator (counter or dot) rendered on the top-right corner of any child element. Useful for unread counts, 'new' markers and notification badges."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Wrap any element with Badge and provide a value to display a numeric counter."
                code={
                    <CodeExample
                        code={[
                            `import { Badge } from "@bodynarf/react.components";`,
                            "",
                            "<Badge value={5}>",
                            "    <button className=\"button\">Messages</button>",
                            "</Badge>",
                        ].join("\n")}
                    />
                }
            >
                <BadgeComponent value={5}>
                    <button type="button" className="button">Messages</button>
                </BadgeComponent>
            </ComponentUseCase>

            <hr />
            <div>
                <h4 className="subtitle is-4 has-text-weight-semibold">Custom component props</h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="children"
                description="The element over which the badge is rendered. Can be any valid ReactNode."
                code={
                    <CodeExample
                        code={[
                            `import { Badge } from "@bodynarf/react.components";`,
                            "",
                            "<Badge value={3}>",
                            "    <span className=\"icon is-medium\">",
                            "        <i className=\"bi bi-bell\" />",
                            "    </span>",
                            "</Badge>",
                        ].join("\n")}
                    />
                }
            >
                <BadgeComponent value={3}>
                    <span className="icon is-medium">
                        <i className="bi bi-bell" />
                    </span>
                </BadgeComponent>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="value"
                description="Numeric value displayed on the badge. Mutually exclusive with dot."
                code={
                    <CodeExample
                        code={[
                            `import { Badge } from "@bodynarf/react.components";`,
                            "",
                            "<Badge value={42}>",
                            "    <button className=\"button\">Inbox</button>",
                            "</Badge>",
                        ].join("\n")}
                    />
                }
            >
                <BadgeComponent value={42}>
                    <button type="button" className="button">Inbox</button>
                </BadgeComponent>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="dot"
                description="When true, renders a small dot instead of a numeric value. Mutually exclusive with value."
                code={
                    <CodeExample
                        code={[
                            `import { Badge } from "@bodynarf/react.components";`,
                            "",
                            "<Badge dot>",
                            "    <button className=\"button\">Notifications</button>",
                            "</Badge>",
                        ].join("\n")}
                    />
                }
            >
                <BadgeComponent dot>
                    <button type="button" className="button">Notifications</button>
                </BadgeComponent>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="max"
                description="Maximum value to display. When value exceeds max, shows {max}+. Defaults to 99."
                code={
                    <CodeExample
                        code={[
                            `import { Badge } from "@bodynarf/react.components";`,
                            "",
                            `// value=150, max=99 → shows "99+"`,
                            "<Badge value={150} max={99}>",
                            "    <button className=\"button\">Messages</button>",
                            "</Badge>",
                            "",
                            `// value=8, max=5 → shows "5+"`,
                            "<Badge value={8} max={5}>",
                            "    <button className=\"button\">Alerts</button>",
                            "</Badge>",
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "1rem" }}>
                    <BadgeComponent value={150} max={99}>
                        <button type="button" className="button">Messages</button>
                    </BadgeComponent>
                    <BadgeComponent value={8} max={5}>
                        <button type="button" className="button">Alerts</button>
                    </BadgeComponent>
                </div>
            </ComponentUseCase>

            <ComponentColorCase
                captionIsCode
                caption="color"
                description="Color variant of the badge. Defaults to ElementColor.Danger."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { Badge, ElementColor } from "@bodynarf/react.components";`,
                            "",
                            "<Badge",
                            `    value={3}`,
                            `    color={ElementColor.${id}}`,
                            ">",
                            "    <button className=\"button\">Button</button>",
                            "</Badge>",
                        ].join("\n")}
                    />
                }
                componentProvider={color =>
                    <BadgeComponent value={3} color={color}>
                        <button type="button" className="button">Button</button>
                    </BadgeComponent>
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="hidden"
                description="Hide the badge entirely without unmounting it. Useful for toggling visibility. Defaults to false."
                code={
                    <CodeExample
                        code={[
                            `import { Badge } from "@bodynarf/react.components";`,
                            "",
                            `// Badge is present in the DOM but invisible`,
                            "<Badge value={5} hidden>",
                            "    <button className=\"button\">Messages</button>",
                            "</Badge>",
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "1rem" }}>
                    <div>
                        <p className="mb-2 has-text-grey">hidden: false</p>
                        <BadgeComponent value={5}>
                            <button type="button" className="button">Messages</button>
                        </BadgeComponent>
                    </div>
                    <div>
                        <p className="mb-2 has-text-grey">hidden: true</p>
                        <BadgeComponent value={5} hidden>
                            <button type="button" className="button">Messages</button>
                        </BadgeComponent>
                    </div>
                </div>
            </ComponentUseCase>
        </section>
    );
};

export default Badge;
