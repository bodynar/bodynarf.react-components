import { FC, useCallback, useRef, useState } from "react";

import ToggleButtonComponent from "@bodynarf/react.components/components/toggleButton";
import ToggleButtonGroup from "@bodynarf/react.components/components/toggleButtonGroup";
import { ButtonStyle, SelectableItem } from "@bodynarf/react.components";

import Log, { LogRef } from "@app/sharedComponents/log";
import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentEnumCase from "@app/sharedComponents/enumSelectionCase";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

const styleNames: Array<string> = [
    ButtonStyle.Default, ButtonStyle.Primary, ButtonStyle.Link,
    ButtonStyle.Info, ButtonStyle.Success, ButtonStyle.Warning,
    ButtonStyle.Danger, ButtonStyle.White, ButtonStyle.Light,
    ButtonStyle.Dark, ButtonStyle.Black, ButtonStyle.Text,
    ButtonStyle.Ghost,
].map(x => x.capitalize());

const stylesAsSelectList: Array<SelectableItem> =
    Object.values(ButtonStyle).map((x, i) => ({
        displayValue: x.capitalize(),
        id: i.toString(),
        value: x,
    }) as SelectableItem);

/** ToggleButton & ToggleButtonGroup components demo */
const ToggleButton: FC = () => {
    const logRef = useRef<LogRef>(null);
    const appendLog = useCallback(
        (text: string) => logRef.current?.append(text),
        []
    );

    const [active, setActive] = useState(true);
    const [singleValue, setSingleValue] = useState<string | undefined>("day");
    const [multipleValues, setMultipleValues] = useState<string[]>(["tag-1", "tag-3"]);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="ToggleButton"
                version="1.16"
                baseTypeName="BaseElementProps"
                description={"Pressable button with an active (pressed) state.\n`ToggleButtonGroup` renders a set of toggle buttons with radio (`single`) or checkbox (`multiple`) selection behavior."}
            />

            <ComponentUseCase
                caption="Minimal use"
                description="At least a caption or an icon must be provided. Use defaultActive to press the button initially."
                code={
                    <CodeExample
                        code={[
                            `import ToggleButton from "@bodynarf/react.components/components/toggleButton";`,
                            "",
                            "<ToggleButton",
                            `    caption="Mute"`,
                            `    defaultActive={false}`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <ToggleButtonComponent caption="Mute" defaultActive={false} />
            </ComponentUseCase>

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">
                    Custom component props
                </h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="active / onToggle"
                description="Controlled mode: setting active does not emit onToggle — handle the state change in the handler and pass the new value back."
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            `import ToggleButton from "@bodynarf/react.components/components/toggleButton";`,
                            "",
                            `const [active, setActive] = useState(true);`,
                            "",
                            "<ToggleButton",
                            `    caption="Notifications"`,
                            "    active={active}",
                            "    onToggle={setActive}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <ToggleButtonComponent
                    caption="Notifications"
                    active={active}
                    onToggle={value => { setActive(value); appendLog(`Notifications: ${value}`); }}
                />
                <Log ref={logRef} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="icon"
                description="Any Bootstrap icon (without the bi- prefix). An icon-only toggle button is a compact icon press button."
                code={
                    <CodeExample
                        code={[
                            `import ToggleButton from "@bodynarf/react.components/components/toggleButton";`,
                            "",
                            "<ToggleButton",
                            `    icon={{ name: "volume-up" }}`,
                            "    defaultActive",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "12px" }}>
                    <ToggleButtonComponent icon={{ name: "volume-up" }} defaultActive />
                    <ToggleButtonComponent caption="Pin" icon={{ name: "pin-angle" }} />
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="outlined"
                description="With outlined set the button is outlined while inactive and solid while active."
                code={
                    <CodeExample
                        code={[
                            `import ToggleButton from "@bodynarf/react.components/components/toggleButton";`,
                            "",
                            "<ToggleButton",
                            "    outlined",
                            `    caption="Outline"`,
                            "    defaultActive",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "12px" }}>
                    <ToggleButtonComponent outlined caption="Inactive" />
                    <ToggleButtonComponent outlined caption="Active" defaultActive />
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="rounded"
                description="Round the button corners."
                code={
                    <CodeExample
                        code={[
                            `import ToggleButton from "@bodynarf/react.components/components/toggleButton";`,
                            "",
                            "<ToggleButton",
                            "    rounded",
                            `    caption="Rounded"`,
                            "    defaultActive",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "12px" }}>
                    <ToggleButtonComponent rounded caption="Inactive" />
                    <ToggleButtonComponent rounded caption="Active" defaultActive />
                </div>
            </ComponentUseCase>

            <ComponentSizeCase
                captionIsCode
                caption="size"
                description="The component supports all sizes defined in ElementSize."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementSize } from "@bodynarf/react.components";`,
                            `import ToggleButton from "@bodynarf/react.components/components/toggleButton";`,
                            "",
                            "<ToggleButton",
                            `    size={ElementSize.${id}}`,
                            `    caption="Sized"`,
                            "    defaultActive",
                            "/>",
                        ].join("\n")}
                    />
                }
                componentProvider={size =>
                    <ToggleButtonComponent size={size} caption="Sized" defaultActive />
                }
            />

            <ComponentEnumCase
                captionIsCode
                caption="style"
                enumNames={styleNames}
                lookupValues={stylesAsSelectList}
                description="Button color. The component supports all styles defined in ButtonStyle."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import ToggleButton from "@bodynarf/react.components/components/toggleButton";`,
                            "",
                            "<ToggleButton",
                            `    style={ButtonStyle.${id}}`,
                            `    caption="Styled"`,
                            "    defaultActive",
                            "/>",
                        ].join("\n")}
                    />
                }
                componentProvider={style =>
                    <ToggleButtonComponent style={style as unknown as ButtonStyle} caption="Styled" defaultActive />
                }
            />

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">
                    ToggleButtonGroup
                </h4>
            </div>

            <ComponentUseCase
                caption="Minimal use — single mode"
                description="A group requires items (each with a unique value) and a mode. In `single` mode only one button can be active at a time (radio behavior)."
                code={
                    <CodeExample
                        code={[
                            `import ToggleButtonGroup from "@bodynarf/react.components/components/toggleButtonGroup";`,
                            "",
                            "<ToggleButtonGroup",
                            `    mode="single"`,
                            `    defaultValue="day"`,
                            "    items={[",
                            `        { value: "day",   icon: { name: "sun" } },`,
                            `        { value: "week",  icon: { name: "calendar-week" } },`,
                            `        { value: "month", icon: { name: "calendar-month" } },`,
                            "    ]}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <ToggleButtonGroup
                    mode="single"
                    defaultValue="day"
                    items={[
                        { value: "day", icon: { name: "sun" }, title: "Day" },
                        { value: "week", icon: { name: "calendar-week" }, title: "Week" },
                        { value: "month", icon: { name: "calendar-month" }, title: "Month" },
                    ]}
                />
            </ComponentUseCase>

            <ComponentUseCase
                caption="multiple mode"
                description="In `multiple` mode every button toggles independently (checkbox behavior). The controlled value is a string array."
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            `import ToggleButtonGroup from "@bodynarf/react.components/components/toggleButtonGroup";`,
                            "",
                            `const [values, setValues] = useState(["tag-1", "tag-3"]);`,
                            "",
                            "<ToggleButtonGroup",
                            `    mode="multiple"`,
                            "    value={values}",
                            "    onChange={setValues}",
                            "    items={[",
                            `        { value: "tag-1", caption: "Frontend" },`,
                            `        { value: "tag-2", caption: "Backend" },`,
                            `        { value: "tag-3", caption: "DevOps" },`,
                            "    ]}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <ToggleButtonGroup
                    mode="multiple"
                    value={multipleValues}
                    onChange={value => {
                        setMultipleValues(value as string[]);
                        appendLog(`Selected: [${(value as string[]).join(", ")}]`);
                    }}
                    items={[
                        { value: "tag-1", caption: "Frontend" },
                        { value: "tag-2", caption: "Backend" },
                        { value: "tag-3", caption: "DevOps" },
                        { value: "tag-4", caption: "QA" },
                    ]}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="value / onChange"
                description="Controlled selection. In `single` mode the value is a single string; use onChange to update it."
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            `import ToggleButtonGroup from "@bodynarf/react.components/components/toggleButtonGroup";`,
                            "",
                            `const [value, setValue] = useState("day");`,
                            "",
                            "<ToggleButtonGroup",
                            `    mode="single"`,
                            "    value={value}",
                            "    onChange={setValue}",
                            "    items={…}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <ToggleButtonGroup
                    mode="single"
                    value={singleValue}
                    onChange={value => {
                        setSingleValue(value as string);
                        appendLog(`View: ${value}`);
                    }}
                    items={[
                        { value: "day", caption: "Day" },
                        { value: "week", caption: "Week" },
                        { value: "month", caption: "Month" },
                    ]}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="vertical"
                description="Lay the group out vertically."
                code={
                    <CodeExample
                        code={[
                            `import ToggleButtonGroup from "@bodynarf/react.components/components/toggleButtonGroup";`,
                            "",
                            "<ToggleButtonGroup",
                            "    vertical",
                            `    mode="single"`,
                            "    items={…}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <ToggleButtonGroup
                    vertical
                    mode="single"
                    defaultValue="list"
                    items={[
                        { value: "list", icon: { name: "list-ul" }, title: "List view" },
                        { value: "grid", icon: { name: "grid" }, title: "Grid view" },
                        { value: "table", icon: { name: "table" }, title: "Table view" },
                    ]}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="style / size / outlined / rounded"
                description="Just like on a single ToggleButton, the shared appearance props are applied to every button in the group."
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import ToggleButtonGroup from "@bodynarf/react.components/components/toggleButtonGroup";`,
                            "",
                            "<ToggleButtonGroup",
                            `    mode="multiple"`,
                            `    style={ButtonStyle.Primary}`,
                            "    outlined",
                            "    rounded",
                            "    items={…}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <ToggleButtonGroup
                    mode="multiple"
                    style={ButtonStyle.Primary}
                    outlined
                    rounded
                    defaultValue={["s", "m"]}
                    items={[
                        { value: "s", caption: "S" },
                        { value: "m", caption: "M" },
                        { value: "l", caption: "L" },
                        { value: "xl", caption: "XL" },
                    ]}
                />
            </ComponentUseCase>
        </section>
    );
};

export default ToggleButton;
