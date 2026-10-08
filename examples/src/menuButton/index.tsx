import { FC, useState } from "react";

import MenuButton from "@bodynarf/react.components/components/menuButton";
import { ButtonStyle, ElementSize, MenuButtonEntry } from "@bodynarf/react.components";

const basicActions = (log: (caption: string) => void): [MenuButtonEntry, ...MenuButtonEntry[]] => [
    { id: "edit",   caption: "Edit",   onClick: () => log("Edit") },
    { id: "copy",   caption: "Copy",   onClick: () => log("Copy") },
    { id: "delete", caption: "Delete", onClick: () => log("Delete") },
];

const actionsWithIcons = (log: (caption: string) => void): [MenuButtonEntry, ...MenuButtonEntry[]] => [
    { id: "edit",   caption: "Edit",   icon: { name: "pencil" }, onClick: () => log("Edit") },
    { id: "copy",   caption: "Copy",   icon: { name: "copy" },   onClick: () => log("Copy") },
    { id: "delete", caption: "Delete", icon: { name: "trash" },  onClick: () => log("Delete") },
];

const actionsWithDivider = (log: (caption: string) => void): [MenuButtonEntry, ...MenuButtonEntry[]] => [
    { id: "edit",   caption: "Edit",   icon: { name: "pencil" }, onClick: () => log("Edit") },
    { id: "copy",   caption: "Copy",   icon: { name: "copy" },   onClick: () => log("Copy") },
    { id: "div-1",  type: "divider" },
    { id: "delete", caption: "Delete", icon: { name: "trash" },  onClick: () => log("Delete") },
];

const actionsWithDisabled = (log: (caption: string) => void): [MenuButtonEntry, ...MenuButtonEntry[]] => [
    { id: "edit",    caption: "Edit",    onClick: () => log("Edit") },
    { id: "archive", caption: "Archive", onClick: () => log("Archive"), disabled: true },
    { id: "div-1",   type: "divider" },
    { id: "delete",  caption: "Delete",  onClick: () => log("Delete"), disabled: true },
];

const actionsWithTooltips = (log: (caption: string) => void): [MenuButtonEntry, ...MenuButtonEntry[]] => [
    { id: "edit", caption: "Edit", title: "Edit the selected item (Ctrl+E)", onClick: () => log("Edit") },
    { id: "copy", caption: "Copy", title: "Copy to clipboard (Ctrl+C)",      onClick: () => log("Copy") },
];

const STYLES = [
    ButtonStyle.Default,
    ButtonStyle.Primary,
    ButtonStyle.Info,
    ButtonStyle.Success,
    ButtonStyle.Warning,
    ButtonStyle.Danger,
] as const;

const SIZES = [
    ElementSize.Small,
    ElementSize.Normal,
    ElementSize.Medium,
    ElementSize.Large,
] as const;

const MenuButtonExamples: FC = () => {
    const [lastAction, setLastAction] = useState("none");

    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-3">MenuButton</h1>

                <p className="block help">
                    The dropdown is rendered through the DropdownMenu component: it opens upward
                    automatically when there is no space below. Last action: <strong>{lastAction}</strong>.
                </p>

                {/* Basic */}
                <div className="box">
                    <p className="subtitle is-5">Basic</p>
                    <MenuButton
                        style={ButtonStyle.Default}
                        actions={basicActions(setLastAction)}
                    />
                </div>

                {/* Actions with icons */}
                <div className="box">
                    <p className="subtitle is-5">Actions with Icons</p>
                    <MenuButton
                        style={ButtonStyle.Default}
                        actions={actionsWithIcons(setLastAction)}
                    />
                </div>

                {/* Divider */}
                <div className="box">
                    <p className="subtitle is-5">With Divider</p>
                    <MenuButton
                        style={ButtonStyle.Default}
                        actions={actionsWithDivider(setLastAction)}
                    />
                </div>

                {/* Disabled actions */}
                <div className="box">
                    <p className="subtitle is-5">Disabled Actions</p>
                    <MenuButton
                        style={ButtonStyle.Default}
                        actions={actionsWithDisabled(setLastAction)}
                    />
                </div>

                {/* Item tooltips */}
                <div className="box">
                    <p className="subtitle is-5">Item Tooltips</p>
                    <p className="help mb-3">Hover an item to see its <code>title</code> tooltip.</p>
                    <MenuButton
                        style={ButtonStyle.Default}
                        actions={actionsWithTooltips(setLastAction)}
                    />
                </div>

                {/* Keep open on outside click */}
                <div className="box">
                    <p className="subtitle is-5">Keep Open on Outside Click</p>
                    <p className="help mb-3">
                        <code>hideOnOuterClick=false</code> — the menu stays open when clicking outside of it.
                    </p>
                    <MenuButton
                        style={ButtonStyle.Primary}
                        hideOnOuterClick={false}
                        actions={basicActions(setLastAction)}
                    />
                </div>

                {/* Disabled button */}
                <div className="box">
                    <p className="subtitle is-5">Disabled Button</p>
                    <MenuButton
                        style={ButtonStyle.Default}
                        actions={basicActions(setLastAction)}
                        disabled
                    />
                </div>

                {/* Styles */}
                <div className="box">
                    <p className="subtitle is-5">Styles</p>
                    <div className="buttons">
                        {STYLES.map(style => (
                            <MenuButton
                                key={style}
                                style={style}
                                title={style}
                                actions={basicActions(setLastAction)}
                            />
                        ))}
                    </div>
                </div>

                {/* Light styles */}
                <div className="box">
                    <p className="subtitle is-5">Light Styles</p>
                    <div className="buttons">
                        {STYLES.map(style => (
                            <MenuButton
                                key={style}
                                style={style}
                                title={style}
                                light
                                actions={basicActions(setLastAction)}
                            />
                        ))}
                    </div>
                </div>

                {/* Outlined */}
                <div className="box">
                    <p className="subtitle is-5">Outlined</p>
                    <div className="buttons">
                        {STYLES.map(style => (
                            <MenuButton
                                key={style}
                                style={style}
                                title={style}
                                outlined
                                actions={basicActions(setLastAction)}
                            />
                        ))}
                    </div>
                </div>

                {/* Rounded */}
                <div className="box">
                    <p className="subtitle is-5">Rounded</p>
                    <div className="buttons">
                        {STYLES.map(style => (
                            <MenuButton
                                key={style}
                                style={style}
                                title={style}
                                rounded
                                actions={basicActions(setLastAction)}
                            />
                        ))}
                    </div>
                </div>

                {/* Sizes */}
                <div className="box">
                    <p className="subtitle is-5">Sizes</p>
                    <div className="buttons" style={{ alignItems: "center" }}>
                        {SIZES.map(size => (
                            <MenuButton
                                key={size}
                                style={ButtonStyle.Primary}
                                size={size}
                                title={size}
                                actions={basicActions(setLastAction)}
                            />
                        ))}
                    </div>
                </div>

                {/* Custom icon */}
                <div className="box">
                    <p className="subtitle is-5">Custom Icon</p>
                    <div className="buttons">
                        <MenuButton
                            style={ButtonStyle.Primary}
                            icon="gear"
                            actions={basicActions(setLastAction)}
                        />
                        <MenuButton
                            style={ButtonStyle.Info}
                            icon="chevron-down"
                            actions={basicActions(setLastAction)}
                        />
                        <MenuButton
                            style={ButtonStyle.Success}
                            icon="list"
                            actions={basicActions(setLastAction)}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MenuButtonExamples;
