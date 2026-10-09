import { FC, useCallback, useRef } from "react";

import AvatarGroupComponent from "@bodynarf/react.components/components/avatarGroup";
import { AvatarProps, AvatarShape } from "@bodynarf/react.components";

import Log, { LogRef } from "@app/sharedComponents/log";
import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

const team: AvatarProps[] = [
    { initials: "AB", color: "#3273dc" },
    { initials: "CD", color: "#23d160" },
    { initials: "EF", color: "#ffdd57" },
    { initials: "GH", color: "#ff3860" },
    { initials: "IJ", color: "#8e44ad" },
    { initials: "KL", color: "#00d1b2" },
    { initials: "MN", color: "#f39c12" },
    { initials: "OP", color: "#555555" },
];

/** AvatarGroup component demo */
const AvatarGroup: FC = () => {
    const logRef = useRef<LogRef>(null);
    const appendLog = useCallback(
        (text: string) => logRef.current?.append(text),
        []
    );

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="AvatarGroup"
                version="1.16"
                baseTypeName="BaseElementProps"
                description="Overlapping stack of avatars. Avatars beyond `maxVisible` collapse into a `+N` indicator with a popover listing the rest. Group-level `size` is forced on every avatar to keep the row uniform."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Provide the list of avatars (same props as for a single Avatar: `initials`, `src`, `icon`, `color`)."
                code={
                    <CodeExample
                        code={[
                            `import AvatarGroup from "@bodynarf/react.components/components/avatarGroup";`,
                            "",
                            "<AvatarGroup",
                            "    items={[",
                            `        { initials: "AB", color: "#3273dc" },`,
                            `        { initials: "CD", color: "#23d160" },`,
                            `        { initials: "EF", color: "#ffdd57" },`,
                            "    ]}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <AvatarGroupComponent
                    items={[
                        { initials: "AB", color: "#3273dc" },
                        { initials: "CD", color: "#23d160" },
                        { initials: "EF", color: "#ffdd57" },
                    ]}
                />
            </ComponentUseCase>

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">
                    Custom component props
                </h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="maxVisible"
                description="Maximum number of avatars shown before the rest collapse into a `+N` overflow indicator. Click it to open a popover with the hidden avatars. Defaults to `5`."
                code={
                    <CodeExample
                        code={[
                            `import AvatarGroup from "@bodynarf/react.components/components/avatarGroup";`,
                            "",
                            "<AvatarGroup",
                            `    maxVisible={3}`,
                            "    items={…}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <AvatarGroupComponent items={team} maxVisible={3} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="overflowPopoverTitle"
                description="Title of the popover with the collapsed avatars. Defaults to `More`."
                code={
                    <CodeExample
                        code={[
                            `import AvatarGroup from "@bodynarf/react.components/components/avatarGroup";`,
                            "",
                            "<AvatarGroup",
                            `    maxVisible={3}`,
                            `    overflowPopoverTitle="Rest of the team"`,
                            "    items={…}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <AvatarGroupComponent items={team} maxVisible={3} overflowPopoverTitle="Rest of the team" />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="shape"
                description="Shape applied to every avatar in the group: `Circle` (default), `Square` or `RoundedSquare`. A `shape` of a specific item takes priority."
                code={
                    <CodeExample
                        code={[
                            `import { AvatarShape } from "@bodynarf/react.components";`,
                            `import AvatarGroup from "@bodynarf/react.components/components/avatarGroup";`,
                            "",
                            "<AvatarGroup",
                            `    shape={AvatarShape.Square}`,
                            "    items={…}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex is-flex-direction-column" style={{ gap: "12px" }}>
                    <AvatarGroupComponent items={team.slice(0, 3)} shape={AvatarShape.Circle} />
                    <AvatarGroupComponent items={team.slice(0, 3)} shape={AvatarShape.Square} />
                    <AvatarGroupComponent items={team.slice(0, 3)} shape={AvatarShape.RoundedSquare} />
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="AvatarProps"
                description="Each item accepts the full single-avatar configuration: `initials` with a `color` background, an `icon` name, an image via `src`/`alt`, a `shape`, a `status` dot and an `onClick` handler."
                code={
                    <CodeExample
                        code={[
                            `import { AvatarProps, AvatarShape, AvatarStatus } from "@bodynarf/react.components";`,
                            `import AvatarGroup from "@bodynarf/react.components/components/avatarGroup";`,
                            "",
                            `const items: AvatarProps[] = [`,
                            `    { initials: "AB", color: "#3273dc" },`,
                            `    { icon: "person", color: "#23d160" },`,
                            `    { initials: "EF", status: AvatarStatus.Online },`,
                            `    { initials: "GH", shape: AvatarShape.Square, onClick: () => {} },`,
                            "];",
                            "",
                            "<AvatarGroup",
                            `    maxVisible={2}`,
                            "    items={items}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <AvatarGroupComponent
                    maxVisible={2}
                    items={[
                        { initials: "AB", color: "#3273dc" },
                        { icon: "person", color: "#23d160" },
                        { initials: "EF", status: AvatarStatus.Online },
                        { initials: "GH", shape: AvatarShape.Square, onClick: () => appendLog("Avatar clicked") },
                    ]}
                />
                <Log ref={logRef} />
            </ComponentUseCase>

            <ComponentSizeCase
                captionIsCode
                caption="size"
                description="The component supports all sizes defined in ElementSize. The group size is forced on every avatar — item sizes are ignored."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import AvatarGroup from "@bodynarf/react.components/components/avatarGroup";`,
                            "",
                            "<AvatarGroup",
                            `    size={ElementSize.${id}}`,
                            "    items={…}",
                            "/>",
                        ].join("\n")}
                    />
                }
                componentProvider={size =>
                    <AvatarGroupComponent items={team.slice(0, 3)} size={size} />
                }
            />
        </section>
    );
};

export default AvatarGroup;
