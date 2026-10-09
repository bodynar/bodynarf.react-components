import { CSSProperties, FC, useCallback, useRef, useState } from "react";

import ActionBarComponent from "@bodynarf/react.components/components/actionBar";
import CheckboxComponent from "@bodynarf/react.components/components/primitives/checkbox";
import { ButtonStyle } from "@bodynarf/react.components";

import Log, { LogRef } from "@app/sharedComponents/log";
import ComponentUseCase from "@app/sharedComponents/useCase";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

// nudge the demo panel away from the site chrome (back-to-top button)
const playgroundStyle = {
    "--action-bar-bottom": "5rem",
    "--action-bar-top": "5rem",
} as CSSProperties;

const documents = [
    { id: 1, name: "Quarterly report.pdf", size: "1.2 MB" },
    { id: 2, name: "Budget.xlsx", size: "340 KB" },
    { id: 3, name: "Roadmap.md", size: "12 KB" },
    { id: 4, name: "Logo.png", size: "890 KB" },
];

/** ActionBar component demo */
const ActionBar: FC = () => {
    const logRef = useRef<LogRef>(null);
    const appendLog = useCallback(
        (text: string) => logRef.current?.append(text),
        []
    );

    const [selected, setSelected] = useState<number[]>([]);
    const [position, setPosition] = useState<"bottom" | "top">("bottom");
    const [open, setOpen] = useState(false);

    const toggle = (id: number, checked: boolean): void => {
        setSelected(selected =>
            checked
                ? [...selected, id]
                : selected.filter(x => x !== id)
        );
    };

    return (
        <section style={playgroundStyle}>
            <DemoComponentTitleInfoMessage
                name="ActionBar"
                version="1.16"
                baseTypeName="BaseElementProps"
                description="Floating panel with actions for the selected items. Pinned to a screen edge — the centered `bottom` / `top` positions, or any FloatButton corner."
            />

            <p className="is-size-7 has-text-grey mb-2">
                Select rows below — the panel appears at the chosen edge of the screen (offset from the site controls). The page renders a single live panel.
            </p>

            <ComponentUseCase
                caption="Minimal use"
                description="The panel requires `open` and a list of `actions` (each action is a Button configuration — at least a caption or an icon)."
                code={
                    <CodeExample
                        code={[
                            `import ActionBar from "@bodynarf/react.components/components/actionBar";`,
                            "",
                            "<ActionBar",
                            `    open={selected.length > 0}`,
                            `    content={selected.length + " items selected"}`,
                            "    actions={[",
                            `        { caption: "Download", icon: { name: "download" }, onClick: () => {} },`,
                            `        { caption: "Delete",   icon: { name: "trash" },    onClick: () => {} },`,
                            "    ]}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <table className="table is-fullwidth is-hoverable is-striped">
                    <thead>
                        <tr>
                            <th style={{ width: "48px" }} />
                            <th>Name</th>
                            <th>Size</th>
                        </tr>
                    </thead>
                    <tbody>
                        {documents.map(doc =>
                            <tr key={doc.id}>
                                <td>
                                    <CheckboxComponent
                                        checked={selected.includes(doc.id)}
                                        onValueChange={checked => toggle(doc.id, checked)}
                                    />
                                </td>
                                <td>{doc.name}</td>
                                <td>{doc.size}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <Log ref={logRef} />
            </ComponentUseCase>

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">
                    Custom component props
                </h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="open"
                description="Panel visibility. The hidden panel is not unmounted, so the exit transition is played. Reset the selection to hide the panel:"
                code={
                    <CodeExample
                        code={[
                            `const [open, setOpen] = useState(false);`,
                            "",
                            "<ActionBar",
                            "    open={open}",
                            "    actions={actions}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <button
                    type="button"
                    className={`button is-small ${open ? "is-primary" : ""}`}
                    onClick={() => setOpen(!open)}
                >
                    {open ? "Hide panel" : "Show panel"}
                </button>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="content"
                description="Left part of the panel — usually a summary like `5 items selected`."
                code={
                    <CodeExample
                        code={[
                            "<ActionBar",
                            "    open={open}",
                            `    content={count + " items selected"}`,
                            "    actions={actions}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <p className="is-size-7 has-text-grey">
                    Already applied — the live panel shows the number of selected rows.
                </p>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="closable / onClose"
                description="The close (×) button is rendered by default; `onClose` is called when it is clicked. Here it clears the selection."
                code={
                    <CodeExample
                        code={[
                            "<ActionBar",
                            "    open={open}",
                            "    closable",
                            "    onClose={clearSelection}",
                            "    actions={actions}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <p className="is-size-7 has-text-grey">
                    Click × on the live panel — the selection is cleared and the panel hides.
                </p>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="position"
                description={`Screen edge to pin the panel to: centered "bottom" (default) / "top", or a FloatButton corner ("bottom-right" etc.).`}
                code={
                    <CodeExample
                        code={[
                            "<ActionBar",
                            `    position="top"`,
                            "    open={open}",
                            "    actions={actions}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <div className="buttons">
                    {(["bottom", "top"] as const).map(x =>
                        <button
                            key={x}
                            type="button"
                            className={`button is-small ${position === x ? "is-primary" : ""}`}
                            onClick={() => setPosition(x)}
                        >
                            {x}
                        </button>
                    )}
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="actions"
                description="Each action is a Button configuration: `caption` / `icon` (at least one), optional `style`, `title`, `disabled` and `onClick`."
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            "",
                            "const actions = [",
                            `    { caption: "Download", icon: { name: "download" },      onClick: () => {} },`,
                            `    { caption: "Share",    icon: { name: "share" } },`,
                            `    { caption: "Delete",   icon: { name: "trash" },        style: ButtonStyle.Danger, onClick: () => {} },`,
                            "];",
                        ].join("\n")}
                    />
                }
            >
                <p className="is-size-7 has-text-grey">
                    The live panel renders these three actions — try them with rows selected.
                </p>
            </ComponentUseCase>

            <ActionBarComponent
                open={open || selected.length > 0}
                content={selected.length > 0 ? `${selected.length} ${selected.length === 1 ? "item" : "items"} selected` : "Nothing selected"}
                closable
                onClose={() => { setSelected([]); appendLog("Panel closed"); }}
                position={position}
                actions={[
                    { caption: "Download", icon: { name: "download" }, onClick: () => appendLog(`Download ${selected.length} items`) },
                    { caption: "Share", icon: { name: "share" } },
                    { caption: "Delete", icon: { name: "trash" }, style: ButtonStyle.Danger, onClick: () => { appendLog(`Delete ${selected.length} items`); setSelected([]); } },
                ]}
            />
        </section>
    );
};

export default ActionBar;
