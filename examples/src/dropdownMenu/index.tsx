import { FC, useState } from "react";

import DropdownMenu from "@bodynarf/react.components/components/dropdownMenu";
import { DropdownMenuItem } from "@bodynarf/react.components";

/** DropdownMenu examples */
const DropdownMenuExamples: FC = () => {
    const [lastAction, setLastAction] = useState("none");

    const fileItems: DropdownMenuItem[] = [
        { key: "file-header", label: "File actions", type: "header" },
        { key: "open", label: "Open", icon: { name: "folder2-open" }, onClick: () => setLastAction("Open") },
        { key: "duplicate", label: "Duplicate", icon: { name: "copy" }, onClick: () => setLastAction("Duplicate") },
        { key: "file-sep", type: "separator" },
        { key: "rename", label: "Rename", onClick: () => setLastAction("Rename") },
        { key: "delete", label: "Delete", icon: { name: "trash3" }, disabled: true },
    ];

    const viewItems: DropdownMenuItem[] = [
        { key: "refresh", label: "Refresh", icon: { name: "arrow-clockwise" }, onClick: () => setLastAction("Refresh") },
        { key: "compact", label: "Compact list", onClick: () => setLastAction("Compact list") },
        { key: "details", label: "Show details", onClick: () => setLastAction("Show details") },
    ];

    return (
        <section className="section">
            <div className="container">

                {/* ── DropdownMenu ─────────────────────────────────────── */}
                <h1 className="title is-3">DropdownMenu</h1>

                {/* Basic */}
                <div className="box">
                    <p className="subtitle is-5">Basic</p>
                    <p className="help mb-4">
                        Items with and without icons, a header, a separator and a disabled item.
                        Last action: <strong>{lastAction}</strong>
                    </p>
                    <div className="is-flex" style={{ gap: "1.5rem", flexWrap: "wrap" }}>
                        <DropdownMenu
                            items={fileItems}
                            trigger={<button type="button" className="button is-primary is-light">File</button>}
                        />
                        <DropdownMenu
                            items={viewItems}
                            trigger={
                                <button type="button" className="button is-info is-light">
                                    <span className="icon"><i className="bi bi-eye" /></span>
                                    <span>View</span>
                                </button>
                            }
                        />
                    </div>
                </div>

                {/* Disabled */}
                <div className="box">
                    <p className="subtitle is-5">Disabled</p>
                    <p className="help mb-4">
                        With <code>disabled</code> the popover never opens.
                    </p>
                    <DropdownMenu
                        disabled

                        items={[{ key: "noop", label: "Nothing to see here" }]}
                        trigger={<button type="button" className="button is-light">Unavailable</button>}
                    />
                </div>
            </div>
        </section>
    );
};

export default DropdownMenuExamples;
