import { FC } from "react";

import SkeletonComponent from "@bodynarf/react.components/components/skeleton";
import { ElementSize } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

/** Skeleton component demo */
const Skeleton: FC = () => {
    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Skeleton"
                version="1.15"
                baseTypeName="BaseElementProps"
                description="Shimmer placeholders for content loading states. Compound component with sub-variants: Skeleton.Text, Skeleton.Block, Skeleton.Avatar, Skeleton.Button."
            />

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">Skeleton.Text</h4>
            </div>

            <ComponentUseCase
                caption="Minimal use"
                description="Single text-line placeholder with no props."
                code={
                    <CodeExample
                        code={[
                            `import Skeleton from "@bodynarf/react.components/components/skeleton";`,
                            "",
                            `<Skeleton.Text />`,
                        ].join("\n")}
                    />
                }
            >
                <div style={{ maxWidth: "300px" }}>
                    <SkeletonComponent.Text />
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="lines"
                description="Number of text-line placeholders to render."
                code={
                    <CodeExample
                        code={[
                            `import Skeleton from "@bodynarf/react.components/components/skeleton";`,
                            "",
                            `<Skeleton.Text lines={3} />`,
                        ].join("\n")}
                    />
                }
            >
                <div style={{ maxWidth: "300px" }}>
                    <SkeletonComponent.Text lines={3} />
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="lastLineWidth"
                description="CSS width of the last line. Used with multiple lines to mimic natural text endings."
                code={
                    <CodeExample
                        code={[
                            `import Skeleton from "@bodynarf/react.components/components/skeleton";`,
                            "",
                            `<Skeleton.Text lines={3} lastLineWidth="60%" />`,
                        ].join("\n")}
                    />
                }
            >
                <div style={{ maxWidth: "300px" }}>
                    <SkeletonComponent.Text lines={3} lastLineWidth="60%" />
                </div>
            </ComponentUseCase>

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">Skeleton.Block</h4>
            </div>

            <ComponentUseCase
                caption="Minimal use"
                description="Rectangular placeholder with default dimensions."
                code={
                    <CodeExample
                        code={[
                            `import Skeleton from "@bodynarf/react.components/components/skeleton";`,
                            "",
                            `<Skeleton.Block />`,
                        ].join("\n")}
                    />
                }
            >
                <SkeletonComponent.Block />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="width"
                description="CSS width of the block placeholder."
                code={
                    <CodeExample
                        code={[
                            `import Skeleton from "@bodynarf/react.components/components/skeleton";`,
                            "",
                            `<Skeleton.Block width="200px" />`,
                        ].join("\n")}
                    />
                }
            >
                <SkeletonComponent.Block width="200px" />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="height"
                description="CSS height of the block placeholder."
                code={
                    <CodeExample
                        code={[
                            `import Skeleton from "@bodynarf/react.components/components/skeleton";`,
                            "",
                            `<Skeleton.Block width="200px" height="120px" />`,
                        ].join("\n")}
                    />
                }
            >
                <SkeletonComponent.Block width="200px" height="120px" />
            </ComponentUseCase>

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">Skeleton.Avatar</h4>
            </div>

            <ComponentUseCase
                caption="Minimal use"
                description="Circular avatar placeholder with default size."
                code={
                    <CodeExample
                        code={[
                            `import Skeleton from "@bodynarf/react.components/components/skeleton";`,
                            "",
                            `<Skeleton.Avatar />`,
                        ].join("\n")}
                    />
                }
            >
                <SkeletonComponent.Avatar />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="size"
                description="Controls the avatar placeholder size using ElementSize values."
                code={
                    <CodeExample
                        code={[
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import Skeleton from "@bodynarf/react.components/components/skeleton";`,
                            "",
                            `<Skeleton.Avatar size={ElementSize.Small} />`,
                            `<Skeleton.Avatar size={ElementSize.Normal} />`,
                            `<Skeleton.Avatar size={ElementSize.Medium} />`,
                            `<Skeleton.Avatar size={ElementSize.Large} />`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "12px", alignItems: "flex-end" }}>
                    <SkeletonComponent.Avatar size={ElementSize.Small} />
                    <SkeletonComponent.Avatar size={ElementSize.Normal} />
                    <SkeletonComponent.Avatar size={ElementSize.Medium} />
                    <SkeletonComponent.Avatar size={ElementSize.Large} />
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="square"
                description="Render the avatar placeholder as a square instead of a circle."
                code={
                    <CodeExample
                        code={[
                            `import Skeleton from "@bodynarf/react.components/components/skeleton";`,
                            "",
                            `<Skeleton.Avatar square />`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "12px", alignItems: "flex-end" }}>
                    <SkeletonComponent.Avatar />
                    <SkeletonComponent.Avatar square />
                </div>
            </ComponentUseCase>

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">Skeleton.Button</h4>
            </div>

            <ComponentUseCase
                caption="Minimal use"
                description="Button-shaped placeholder with default size."
                code={
                    <CodeExample
                        code={[
                            `import Skeleton from "@bodynarf/react.components/components/skeleton";`,
                            "",
                            `<Skeleton.Button />`,
                        ].join("\n")}
                    />
                }
            >
                <SkeletonComponent.Button />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="size"
                description="Controls the button placeholder size using ElementSize values."
                code={
                    <CodeExample
                        code={[
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import Skeleton from "@bodynarf/react.components/components/skeleton";`,
                            "",
                            `<Skeleton.Button size={ElementSize.Small} />`,
                            `<Skeleton.Button size={ElementSize.Normal} />`,
                            `<Skeleton.Button size={ElementSize.Medium} />`,
                            `<Skeleton.Button size={ElementSize.Large} />`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "12px", alignItems: "flex-end" }}>
                    <SkeletonComponent.Button size={ElementSize.Small} />
                    <SkeletonComponent.Button size={ElementSize.Normal} />
                    <SkeletonComponent.Button size={ElementSize.Medium} />
                    <SkeletonComponent.Button size={ElementSize.Large} />
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="width"
                description="CSS width of the button placeholder."
                code={
                    <CodeExample
                        code={[
                            `import Skeleton from "@bodynarf/react.components/components/skeleton";`,
                            "",
                            `<Skeleton.Button width="180px" />`,
                        ].join("\n")}
                    />
                }
            >
                <SkeletonComponent.Button width="180px" />
            </ComponentUseCase>
        </section>
    );
};

export default Skeleton;
