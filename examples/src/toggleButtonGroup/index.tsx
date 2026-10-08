import { FC, useState } from "react";

import ToggleButtonGroup, { ToggleButtonGroupItem } from "@bodynarf/react.components/components/toggleButtonGroup";
import { ButtonStyle, ElementSize } from "@bodynarf/react.components";

const ALIGNMENT_ITEMS: ToggleButtonGroupItem[] = [
    { value: "left",    caption: "Left",    icon: { name: "text-left" } },
    { value: "center",  caption: "Center",  icon: { name: "text-center" } },
    { value: "right",   caption: "Right",   icon: { name: "text-right" } },
    { value: "justify", caption: "Justify", icon: { name: "justify" }, disabled: true, title: "Justify is disabled" },
];

const FORMAT_ITEMS: ToggleButtonGroupItem[] = [
    { value: "bold",      icon: { name: "type-bold" },      title: "Bold" },
    { value: "italic",    icon: { name: "type-italic" },    title: "Italic" },
    { value: "underline", icon: { name: "type-underline" }, title: "Underline" },
];

const VIEW_ITEMS: ToggleButtonGroupItem[] = [
    { value: "list", caption: "List", icon: { name: "list-ul" } },
    { value: "grid", caption: "Grid", icon: { name: "grid" } },
    { value: "table", caption: "Table", icon: { name: "table" } },
];

const ToggleButtonGroupExamples: FC = () => {
    const [view, setView] = useState("list");
    const [formats, setFormats] = useState<string[]>(["bold"]);

    const onViewChange = (value: string | string[]): void => {
        setView(Array.isArray(value) ? value[0] : value);
    };

    const onFormatsChange = (value: string | string[]): void => {
        setFormats(Array.isArray(value) ? value : [value]);
    };

    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-3">Toggle Button Group</h1>

                <p className="block help">
                    Group of attached toggle buttons.
                    <code> mode="single" </code> gives radio behavior (one active button),
                    <code> mode="multiple" </code> gives checkbox behavior (independent toggles).
                </p>

                {/* Single mode */}
                <div className="box">
                    <p className="subtitle is-5">Single mode (radio)</p>
                    <ToggleButtonGroup
                        mode="single"

                        items={ALIGNMENT_ITEMS}
                        defaultValue="center"

                        onChange={value => console.log("alignment:", value)}
                    />
                    <p className="help mt-2">Clicking an active button does not deselect it; <code>onChange</code> receives a single string.</p>
                </div>

                {/* Multiple mode */}
                <div className="box">
                    <p className="subtitle is-5">Multiple mode (checkbox)</p>
                    <ToggleButtonGroup
                        mode="multiple"

                        items={FORMAT_ITEMS}
                        defaultValue={["italic"]}

                        style={ButtonStyle.Link}
                        onChange={value => console.log("formats:", value)}
                    />
                    <p className="help mt-2">Every button toggles independently; <code>onChange</code> receives an array of strings.</p>
                </div>

                {/* Vertical */}
                <div className="box">
                    <p className="subtitle is-5">Vertical layout</p>
                    <ToggleButtonGroup
                        mode="single"

                        items={VIEW_ITEMS}
                        defaultValue="grid"

                        vertical
                        outlined
                        rounded
                        size={ElementSize.Medium}
                        style={ButtonStyle.Success}
                    />
                </div>

                {/* Controlled */}
                <div className="box">
                    <p className="subtitle is-5">Controlled value</p>
                    <ToggleButtonGroup
                        mode="single"

                        items={VIEW_ITEMS}
                        value={view}
                        onChange={onViewChange}

                        style={ButtonStyle.Info}
                    />
                    <p className="help mt-2">Selected view: <code>{view}</code></p>

                    <div className="mt-4">
                        <ToggleButtonGroup
                            mode="multiple"

                            items={FORMAT_ITEMS}
                            value={formats}
                            onChange={onFormatsChange}

                            style={ButtonStyle.Warning}
                        />
                    </div>
                    <p className="help mt-2">Selected formats: <code>{formats.length > 0 ? formats.join(", ") : "none"}</code></p>
                </div>
            </div>
        </section>
    );
};

export default ToggleButtonGroupExamples;
