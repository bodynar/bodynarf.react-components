import { FC, useState } from "react";

import SplitButton from "@bodynarf/react.components/components/splitButton";
import { ButtonStyle, ElementSize, SplitButtonAction } from "@bodynarf/react.components";

const saveActions = (log: (caption: string) => void): [SplitButtonAction, ...SplitButtonAction[]] => [
    { id: "save",       caption: "Save",          onClick: () => log("Save") },
    { id: "save-draft", caption: "Save as Draft", onClick: () => log("Save as Draft") },
    { id: "publish",    caption: "Publish",       onClick: () => log("Publish") },
];

const actionsWithIcons = (log: (caption: string) => void): [SplitButtonAction, ...SplitButtonAction[]] => [
    { id: "edit",   caption: "Edit",   icon: { name: "pencil" }, onClick: () => log("Edit") },
    { id: "copy",   caption: "Copy",   icon: { name: "copy" },   onClick: () => log("Copy") },
    { id: "delete", caption: "Delete", icon: { name: "trash" },  onClick: () => log("Delete"), disabled: true },
];

const exportActions = (log: (caption: string) => void): [SplitButtonAction, ...SplitButtonAction[]] => [
    { id: "csv",  caption: "Export as CSV",  onClick: () => log("Export CSV") },
    { id: "xlsx", caption: "Export as XLSX", onClick: () => log("Export XLSX") },
    { id: "pdf",  caption: "Export as PDF",  onClick: () => log("Export PDF") },
];

const SplitButtonExamples: FC = () => {
    const [lastAction, setLastAction] = useState("none");

    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-3">SplitButton</h1>

                <p className="block help">
                    The dropdown is rendered through the DropdownMenu component: it opens upward
                    automatically when there is no space below. Last action: <strong>{lastAction}</strong>.
                </p>

                {/* Basic */}
                <div className="box">
                    <p className="subtitle is-5">Basic</p>
                    <SplitButton
                        style={ButtonStyle.Primary}
                        caption="Save"
                        actions={saveActions(setLastAction)}
                        onClick={() => setLastAction("Save (primary)")}
                    />
                </div>

                {/* With icons in dropdown */}
                <div className="box">
                    <p className="subtitle is-5">Actions with Icons</p>
                    <SplitButton
                        style={ButtonStyle.Info}
                        caption="Actions"
                        actions={actionsWithIcons(setLastAction)}
                        onClick={() => setLastAction("Default action")}
                    />
                </div>

                {/* Export button */}
                <div className="box">
                    <p className="subtitle is-5">Export Button</p>
                    <SplitButton
                        style={ButtonStyle.Success}
                        caption="Export"
                        icon={{ name: "download" }}
                        actions={exportActions(setLastAction)}
                        onClick={() => setLastAction("Export (primary)")}
                    />
                </div>

                {/* Keep open on outside click */}
                <div className="box">
                    <p className="subtitle is-5">Keep Open on Outside Click</p>
                    <p className="help mb-3">
                        <code>hideOnOuterClick=false</code> — the dropdown stays open when clicking outside of it.
                    </p>
                    <SplitButton
                        style={ButtonStyle.Primary}
                        caption="Save"
                        hideOnOuterClick={false}
                        actions={saveActions(setLastAction)}
                        onClick={() => setLastAction("Save (primary)")}
                    />
                </div>

                {/* Styles */}
                <div className="box">
                    <p className="subtitle is-5">Styles</p>
                    <div className="buttons">
                        {([ButtonStyle.Default, ButtonStyle.Primary, ButtonStyle.Info, ButtonStyle.Success, ButtonStyle.Warning, ButtonStyle.Danger] as ButtonStyle[]).map(style => (
                            <SplitButton
                                key={style}
                                style={style}
                                caption={style}
                                actions={[
                                    { id: "a1", caption: "Option 1", onClick: () => setLastAction(`${style}: Option 1`) },
                                    { id: "a2", caption: "Option 2", onClick: () => setLastAction(`${style}: Option 2`) },
                                ] as [SplitButtonAction, ...SplitButtonAction[]]}
                                onClick={() => setLastAction(`${style} (primary)`)}
                            />
                        ))}
                    </div>
                </div>

                {/* Sizes */}
                <div className="box">
                    <p className="subtitle is-5">Sizes</p>
                    <div className="buttons">
                        {[ElementSize.Small, ElementSize.Normal, ElementSize.Medium, ElementSize.Large].map(size => (
                            <SplitButton
                                key={size}
                                style={ButtonStyle.Primary}
                                caption={size}
                                size={size}
                                actions={[{ id: "a1", caption: "Option 1", onClick: () => setLastAction(`${size}: Option 1`) }] as [SplitButtonAction, ...SplitButtonAction[]]}
                                onClick={() => setLastAction(`${size} (primary)`)}
                            />
                        ))}
                    </div>
                </div>

                {/* Modifiers */}
                <div className="box">
                    <p className="subtitle is-5">Modifiers</p>
                    <div className="buttons">
                        <SplitButton
                            style={ButtonStyle.Primary}
                            caption="Outlined"
                            outlined
                            actions={saveActions(setLastAction)}
                            onClick={() => setLastAction("Outlined (primary)")}
                        />
                        <SplitButton
                            style={ButtonStyle.Primary}
                            caption="Rounded"
                            rounded
                            actions={saveActions(setLastAction)}
                            onClick={() => setLastAction("Rounded (primary)")}
                        />
                        <SplitButton
                            style={ButtonStyle.Primary}
                            caption="Light"
                            light
                            actions={saveActions(setLastAction)}
                            onClick={() => setLastAction("Light (primary)")}
                        />
                        <SplitButton
                            style={ButtonStyle.Primary}
                            caption="Loading"
                            isLoading
                            actions={saveActions(setLastAction)}
                            onClick={() => setLastAction("Loading (primary)")}
                        />
                        <SplitButton
                            style={ButtonStyle.Primary}
                            caption="Disabled"
                            disabled
                            actions={saveActions(setLastAction)}
                            onClick={() => setLastAction("Disabled (primary)")}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SplitButtonExamples;
