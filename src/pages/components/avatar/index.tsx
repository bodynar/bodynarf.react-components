import { FC, useRef } from "react";

import { Avatar as AvatarComponent, AvatarShape, AvatarStatus } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";
import Log, { LogRef } from "@app/sharedComponents/log";

/** Avatar component demo */
const Avatar: FC = () => {
    const onClickLogRef = useRef<LogRef>(null);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Avatar"
                version="1.15"
                baseTypeName="BaseElementProps"
                description="User avatar with automatic fallback chain: image → initials → icon. Supports status indicator dot and multiple shapes."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Provide src to render an image avatar."
                code={
                    <CodeExample
                        code={[
                            `import { Avatar } from "@bodynarf/react.components";`,
                            "",
                            `<Avatar src="https://i.pravatar.cc/80" alt="User" />`,
                        ].join("\n")}
                    />
                }
            >
                <AvatarComponent src="https://i.pravatar.cc/80" alt="User" />
            </ComponentUseCase>

            <hr />
            <div>
                <h4 className="subtitle is-4 has-text-weight-semibold">Custom component props</h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="src"
                description="Image source URL. When provided, the avatar renders as an image."
                code={
                    <CodeExample
                        code={[
                            `import { Avatar } from "@bodynarf/react.components";`,
                            "",
                            `<Avatar src="https://i.pravatar.cc/80" alt="User" />`,
                        ].join("\n")}
                    />
                }
            >
                <AvatarComponent src="https://i.pravatar.cc/80" alt="User" />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="alt"
                description="Alt text for the image element. Used for accessibility."
                code={
                    <CodeExample
                        code={[
                            `import { Avatar } from "@bodynarf/react.components";`,
                            "",
                            `<Avatar src="https://i.pravatar.cc/80" alt="Jane Doe" />`,
                        ].join("\n")}
                    />
                }
            >
                <AvatarComponent src="https://i.pravatar.cc/80" alt="Jane Doe" />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="initials"
                description="Text shown when no image is provided or the image fails to load."
                code={
                    <CodeExample
                        code={[
                            `import { Avatar } from "@bodynarf/react.components";`,
                            "",
                            `<Avatar initials="JD" color="#4a90e2" />`,
                        ].join("\n")}
                    />
                }
            >
                <AvatarComponent initials="JD" color="#4a90e2" />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="icon"
                description="Bootstrap icon name (without bi- prefix) shown as fallback when neither image nor initials are provided."
                code={
                    <CodeExample
                        code={[
                            `import { Avatar } from "@bodynarf/react.components";`,
                            "",
                            `<Avatar icon="person-fill" color="#888" />`,
                        ].join("\n")}
                    />
                }
            >
                <AvatarComponent icon="person-fill" color="#888" />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="color"
                description="Background color for initials or icon mode. Accepts any valid CSS color value."
                code={
                    <CodeExample
                        code={[
                            `import { Avatar } from "@bodynarf/react.components";`,
                            "",
                            `<Avatar initials="AB" color="#e74c3c" />`,
                            `<Avatar initials="CD" color="#2ecc71" />`,
                            `<Avatar initials="EF" color="#9b59b6" />`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "12px" }}>
                    <AvatarComponent initials="AB" color="#e74c3c" />
                    <AvatarComponent initials="CD" color="#2ecc71" />
                    <AvatarComponent initials="EF" color="#9b59b6" />
                </div>
            </ComponentUseCase>

            <ComponentSizeCase
                captionIsCode
                caption="size"
                description="Controls avatar dimensions. Uses ElementSize — Small, Normal, Medium, Large."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { Avatar, ElementSize } from "@bodynarf/react.components";`,
                            "",
                            `<Avatar initials="AB" color="#3273dc" size={ElementSize.${id}} />`,
                        ].join("\n")}
                    />
                }
                componentProvider={size =>
                    <AvatarComponent initials="AB" color="#3273dc" size={size} />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="shape"
                description="Avatar shape. Circle (default), Square or RoundedSquare."
                code={
                    <CodeExample
                        code={[
                            `import { Avatar, AvatarShape } from "@bodynarf/react.components";`,
                            "",
                            `<Avatar initials="CI" color="#3273dc" shape={AvatarShape.Circle} />`,
                            `<Avatar initials="SQ" color="#23d160" shape={AvatarShape.Square} />`,
                            `<Avatar initials="RS" color="#ff470f" shape={AvatarShape.RoundedSquare} />`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "12px", alignItems: "center" }}>
                    <div style={{ textAlign: "center" }}>
                        <AvatarComponent initials="CI" color="#3273dc" shape={AvatarShape.Circle} />
                        <p className="mt-1 has-text-grey" style={{ fontSize: "0.75rem" }}>Circle</p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <AvatarComponent initials="SQ" color="#23d160" shape={AvatarShape.Square} />
                        <p className="mt-1 has-text-grey" style={{ fontSize: "0.75rem" }}>Square</p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <AvatarComponent initials="RS" color="#ff470f" shape={AvatarShape.RoundedSquare} />
                        <p className="mt-1 has-text-grey" style={{ fontSize: "0.75rem" }}>RoundedSquare</p>
                    </div>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="status"
                description="Status indicator dot shown on the avatar. One of: Online, Away, Offline."
                code={
                    <CodeExample
                        code={[
                            `import { Avatar, AvatarStatus } from "@bodynarf/react.components";`,
                            "",
                            `<Avatar initials="ON" color="#23d160" status={AvatarStatus.Online} />`,
                            `<Avatar initials="AW" color="#ffdd57" status={AvatarStatus.Away} />`,
                            `<Avatar initials="OF" color="#999"    status={AvatarStatus.Offline} />`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "12px", alignItems: "center" }}>
                    <div style={{ textAlign: "center" }}>
                        <AvatarComponent initials="ON" color="#23d160" status={AvatarStatus.Online} />
                        <p className="mt-1 has-text-grey" style={{ fontSize: "0.75rem" }}>Online</p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <AvatarComponent initials="AW" color="#ffdd57" status={AvatarStatus.Away} />
                        <p className="mt-1 has-text-grey" style={{ fontSize: "0.75rem" }}>Away</p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <AvatarComponent initials="OF" color="#999" status={AvatarStatus.Offline} />
                        <p className="mt-1 has-text-grey" style={{ fontSize: "0.75rem" }}>Offline</p>
                    </div>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onClick"
                description="Called when the avatar is clicked. Makes the avatar interactive."
                code={
                    <CodeExample
                        code={[
                            `import { Avatar } from "@bodynarf/react.components";`,
                            "",
                            `<Avatar`,
                            `    initials="JD"`,
                            `    color="#4a90e2"`,
                            `    onClick={() => console.log("avatar clicked")}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <AvatarComponent
                    initials="JD"
                    color="#4a90e2"
                    onClick={() => onClickLogRef.current?.append("onClick fired")}
                />
                <Log ref={onClickLogRef} />
            </ComponentUseCase>
        </section>
    );
};

export default Avatar;
