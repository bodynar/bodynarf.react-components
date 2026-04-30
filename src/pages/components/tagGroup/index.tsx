import { FC, useState } from "react";

import TagGroupComponent from "@bodynarf/react.components/components/tagGroup";
import { ElementSize } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

/** TagGroup component demo */
const TagGroup: FC = () => {
    const [tags, setTags] = useState(["React", "TypeScript"]);
    const [placeholderTags, setPlaceholderTags] = useState<string[]>([]);
    const [addableTags, setAddableTags] = useState(["React", "TypeScript"]);
    const [removableTags, setRemovableTags] = useState(["React", "TypeScript"]);
    const [disabledTags] = useState(["React", "TypeScript"]);
    const [limitTags, setLimitTags] = useState(["One", "Two", "Three"]);
    const [confirmKeysTags, setConfirmKeysTags] = useState<string[]>([]);
    const [colorTags, setColorTags] = useState(["Alpha", "Beta"]);
    const [tagConfigTags, setTagConfigTags] = useState(["Rounded", "Light", "Custom"]);
    const [sizeTags] = useState(["Tag A", "Tag B"]);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="TagGroup"
                version="1.15"
                baseTypeName="BaseElementProps"
                description="Editable tag list for label management, filtering and multi-value inputs. Supports add/remove, duplicate prevention, configurable confirm keys and max tag limit."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Provide value and onChange. Type and press Enter or comma to add a tag."
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            "",
                            `import TagGroup from "@bodynarf/react.components/components/tagGroup";`,
                            "",
                            `const [tags, setTags] = useState(["React", "TypeScript"]);`,
                            "",
                            `<TagGroup`,
                            `    value={tags}`,
                            `    onChange={setTags}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <TagGroupComponent value={tags} onChange={setTags} />
                    <p className="mt-1 has-text-grey">Tags: {JSON.stringify(tags)}</p>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="placeholder"
                description='Placeholder text shown in the input field. Default is "Add tag…".'
                code={
                    <CodeExample
                        code={[
                            `import TagGroup from "@bodynarf/react.components/components/tagGroup";`,
                            "",
                            `<TagGroup`,
                            `    value={tags}`,
                            `    onChange={setTags}`,
                            `    placeholder="Type and press Enter..."`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <TagGroupComponent
                    value={placeholderTags}
                    placeholder="Type and press Enter..."
                    onChange={setPlaceholderTags}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="addable"
                description="Whether the user can add new tags. Defaults to true. Set to false to make the list read-only for additions."
                code={
                    <CodeExample
                        code={[
                            `import TagGroup from "@bodynarf/react.components/components/tagGroup";`,
                            "",
                            `<TagGroup`,
                            `    value={tags}`,
                            `    addable={false}`,
                            `    onChange={setTags}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <TagGroupComponent
                    value={addableTags}
                    addable={false}
                    onChange={setAddableTags}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="removable"
                description="Whether the user can remove tags. Defaults to true. Set to false to prevent deletion."
                code={
                    <CodeExample
                        code={[
                            `import TagGroup from "@bodynarf/react.components/components/tagGroup";`,
                            "",
                            `<TagGroup`,
                            `    value={tags}`,
                            `    removable={false}`,
                            `    onChange={setTags}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <TagGroupComponent
                    value={removableTags}
                    removable={false}
                    onChange={setRemovableTags}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="disabled"
                description="Disables the entire component. No tags can be added or removed."
                code={
                    <CodeExample
                        code={[
                            `import TagGroup from "@bodynarf/react.components/components/tagGroup";`,
                            "",
                            `<TagGroup`,
                            `    value={tags}`,
                            `    disabled`,
                            `    onChange={setTags}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <TagGroupComponent
                    value={disabledTags}
                    disabled
                    onChange={() => undefined}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="maxTags"
                description="Limit the number of tags. The input is hidden once the limit is reached."
                code={
                    <CodeExample
                        code={[
                            `import TagGroup from "@bodynarf/react.components/components/tagGroup";`,
                            "",
                            `<TagGroup`,
                            `    value={tags}`,
                            `    maxTags={5}`,
                            `    onChange={setTags}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <TagGroupComponent value={limitTags} maxTags={5} onChange={setLimitTags} />
                    <p className="mt-1 has-text-grey">{limitTags.length}/5 tags</p>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="confirmKeys"
                description='Keys that confirm adding a tag when pressed in the input. Default: ["Enter", ","]. The example below uses Space and Tab.'
                code={
                    <CodeExample
                        code={[
                            `import TagGroup from "@bodynarf/react.components/components/tagGroup";`,
                            "",
                            `<TagGroup`,
                            `    value={tags}`,
                            `    onChange={setTags}`,
                            `    confirmKeys={[" ", "Tab"]}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <TagGroupComponent
                    value={confirmKeysTags}
                    confirmKeys={[" ", "Tab"]}
                    onChange={setConfirmKeysTags}
                    placeholder="Press Space or Tab to add"
                />
            </ComponentUseCase>

            <ComponentColorCase
                captionIsCode
                caption="color"
                description="Tag color applied to all tags in the group"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import TagGroup from "@bodynarf/react.components/components/tagGroup";`,
                            "",
                            `<TagGroup`,
                            `    value={tags}`,
                            `    onChange={setTags}`,
                            `    color={ElementColor.${id}}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
                componentProvider={color =>
                    <TagGroupComponent
                        value={colorTags}
                        color={color}
                        onChange={setColorTags}
                    />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="tagConfig"
                description={
                    <>
                        Additional configuration passed to every rendered tag.
                        Accepts all <code>TagProps</code> except <code>content</code>, <code>onRemove</code>, <code>size</code> and <code>style</code> (those are controlled by TagGroup directly).
                        Useful for <code>rounded</code>, <code>lightColor</code> and <code>customColor</code>.
                    </>
                }
                code={
                    <CodeExample
                        code={[
                            `import TagGroup from "@bodynarf/react.components/components/tagGroup";`,
                            "",
                            `<TagGroup`,
                            `    value={tags}`,
                            `    onChange={setTags}`,
                            `    tagConfig={{ rounded: true, lightColor: true }}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "24px", flexWrap: "wrap", alignItems: "flex-start" }}>
                    <div>
                        <p className="mb-2 is-italic has-text-grey is-size-7">rounded</p>
                        <TagGroupComponent
                            value={tagConfigTags}
                            tagConfig={{ rounded: true }}
                            onChange={setTagConfigTags}
                        />
                    </div>
                    <div>
                        <p className="mb-2 is-italic has-text-grey is-size-7">lightColor</p>
                        <TagGroupComponent
                            value={tagConfigTags}
                            tagConfig={{ lightColor: true }}
                            onChange={setTagConfigTags}
                        />
                    </div>
                    <div>
                        <p className="mb-2 is-italic has-text-grey is-size-7">rounded + lightColor</p>
                        <TagGroupComponent
                            value={tagConfigTags}
                            tagConfig={{ rounded: true, lightColor: true }}
                            onChange={setTagConfigTags}
                        />
                    </div>
                    <div>
                        <p className="mb-2 is-italic has-text-grey is-size-7">customColor</p>
                        <TagGroupComponent
                            value={tagConfigTags}
                            tagConfig={{ customColor: { color: "#fff", backgroundColor: "#7c3aed" } }}
                            onChange={setTagConfigTags}
                        />
                    </div>
                </div>
            </ComponentUseCase>

            <ComponentSizeCase
                captionIsCode
                caption="size"
                description="TagGroup supports Normal, Medium and Large sizes. Small is not supported."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import TagGroup from "@bodynarf/react.components/components/tagGroup";`,
                            "",
                            `<TagGroup`,
                            `    value={tags}`,
                            `    onChange={setTags}`,
                            `    size={ElementSize.${id}}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
                componentProvider={size =>
                    <TagGroupComponent
                        value={sizeTags}
                        size={size === ElementSize.Small ? ElementSize.Normal : size}
                        onChange={() => undefined}
                    />
                }
            />
        </section>
    );
};

export default TagGroup;
