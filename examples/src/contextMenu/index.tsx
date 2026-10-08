import { FC, useState } from "react";

import ContextMenu from "@bodynarf/react.components/components/contextMenu";
import { ContextMenuItem } from "@bodynarf/react.components";

const FILE_ITEMS: ContextMenuItem[] = [
    { key: "open",   label: "Open",       icon: "folder2-open" },
    { key: "rename", label: "Rename",     icon: "pencil" },
    { key: "copy",   label: "Copy",       icon: "clipboard" },
    { key: "paste",  label: "Paste",      icon: "clipboard-check", disabled: true },
    { key: "sep1" },
    { key: "delete", label: "Delete",     icon: "trash" },
];

const TABLE_ITEMS: ContextMenuItem[] = [
    { key: "edit",   label: "Edit row",   icon: "pencil-square" },
    { key: "dup",    label: "Duplicate",  icon: "copy" },
    { key: "sep1" },
    { key: "pin",    label: "Pin to top", icon: "pin-angle" },
    { key: "hide",   label: "Hide row",   icon: "eye-slash" },
    { key: "sep2" },
    { key: "remove", label: "Remove",     icon: "trash",          disabled: false },
];

/** All ContextMenu component variations */
const ContextMenuExamples: FC = () => {
    const [lastAction, setLastAction] = useState("");

    const withAction = (items: ContextMenuItem[]): ContextMenuItem[] =>
        items.map(item => item.label
            ? { ...item, onClick: () => setLastAction(`"${item.label}" clicked`) }
            : item
        );

    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-3">ContextMenu</h1>

                {lastAction && (
                    <div className="notification is-info is-light mb-4">
                        Last action: <strong>{lastAction}</strong>
                        <button type="button" className="delete" onClick={() => setLastAction("")} />
                    </div>
                )}

                <p className="help mb-5">Right-click on any highlighted element below to open its context menu.</p>

                {/* File item */}
                <div className="box">
                    <p className="subtitle is-5">File / folder menu</p>
                    <p className="help mb-4">Includes a separator and a disabled "Paste" item.</p>
                    <ContextMenu items={withAction(FILE_ITEMS)}>
                        <div
                            className="p-4 has-background-light has-radius-normal"
                            style={{
                                border: "2px dashed #dbdbdb",
                                borderRadius: 6,
                                cursor: "context-menu",
                                userSelect: "none",
                            }}
                        >
                            <span className="icon-text">
                                <span className="icon"><i className="bi bi-folder2" /></span>
                                <span>project-files (right-click me)</span>
                            </span>
                        </div>
                    </ContextMenu>
                </div>

                {/* Table row */}
                <div className="box">
                    <p className="subtitle is-5">Table row menu</p>
                    <ContextMenu items={withAction(TABLE_ITEMS)}>
                        <table className="table is-fullwidth is-hoverable">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ cursor: "context-menu" }}>
                                    <td>001</td>
                                    <td>Alice Johnson</td>
                                    <td><span className="tag is-success">Active</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </ContextMenu>
                </div>

                {/* Disabled menu */}
                <div className="box">
                    <p className="subtitle is-5">Disabled</p>
                    <p className="help mb-4"><code>disabled=&#123;true&#125;</code> — suppresses the custom menu entirely.</p>
                    <ContextMenu items={withAction(FILE_ITEMS)} disabled>
                        <div
                            className="p-4 has-background-light"
                            style={{ border: "2px dashed #dbdbdb", borderRadius: 6, cursor: "not-allowed", opacity: 0.6 }}
                        >
                            Right-click me (no custom menu)
                        </div>
                    </ContextMenu>
                </div>

                {/* Icon-only */}
                <div className="box">
                    <p className="subtitle is-5">Items without icons</p>
                    <ContextMenu items={[
                        { key: "a", label: "Action A", onClick: () => setLastAction("Action A") },
                        { key: "b", label: "Action B", onClick: () => setLastAction("Action B") },
                        { key: "sep" },
                        { key: "c", label: "Action C (disabled)", disabled: true },
                    ]}>
                        <button type="button" className="button is-light">Right-click button</button>
                    </ContextMenu>
                </div>
            </div>
        </section>
    );
};

export default ContextMenuExamples;
