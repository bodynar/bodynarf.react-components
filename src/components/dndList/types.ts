import { ReactNode } from "react";

import { BaseElementProps } from "@bbr/types";

/** Shape of an item that can be reordered by {@link DndList}. Must have a stable unique `id`. */
export type DndListItem = {
    /** Unique identifier of the item (used as the drag key and for reorder math). */
    id: string | number;
};

/**
 * Drag-and-drop list props.
 *
 * Renders each item via a render prop and lets the user reorder them
 * using native HTML5 drag-and-drop (no external dependencies).
 *
 * @typeParam T Concrete item type — must extend {@link DndListItem}.
 */
export type DndListProps<T extends DndListItem> =
    & BaseElementProps
    & {
        /** Ordered list of items to render and reorder. */
        items: T[];

        /** When `true`, a drag handle icon is shown and the item body keeps the default cursor. */
        withHandle?: boolean;

        /** Render prop: returns the content for a single item at a given index. */
        children: (item: T, index: number) => ReactNode;

        /** Called with the reordered items whenever the user finishes dragging an item to a new position. */
        onReorder: (items: T[]) => void;
    };
