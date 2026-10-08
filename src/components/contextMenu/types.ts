import { ReactNode } from "react";

import { BaseElementProps, DisableableElement } from "@bbr/types";

/** A single context menu item */
export type ContextMenuItem = {
    /** Unique key */
    key: string;

    /** Display label. When omitted the item is treated as a divider */
    label?: string;

    /** Bootstrap icon name (without `bi-` prefix) */
    icon?: string;

    /** Whether this item is disabled */
    disabled?: boolean;

    /** Called when the item is clicked */
    onClick?: () => void;
};

/** ContextMenu component props */
export type ContextMenuProps =
    & BaseElementProps
    & DisableableElement
    & {
        /** Items to show in the menu */
        items: ContextMenuItem[];

        /** The element that triggers the context menu on right-click */
        children: ReactNode;
    };
