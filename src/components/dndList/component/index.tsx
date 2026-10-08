/* eslint-disable custom/functional-component-definition */ // Rule disabled: Generic component required
import { DragEvent, useState } from "react";

import { getClassName } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";
import Icon from "@bbr/components/icon";

import "./style.scss";

import { DndListItem, DndListProps } from "..";

/** Bootstrap icon used as the default drag handle. */
const HANDLE_ICON_NAME = "grip-vertical";

/**
 * Move an element within an array from one index to another, returning a new array.
 * @param items Source array (not mutated).
 * @param from Index of the element to move.
 * @param to Target index to insert the element at.
 * @returns A new array with the element moved.
 */
const arrayMove = <TItem,>(items: TItem[], from: number, to: number): TItem[] => {
    if (from === to || from < 0 || to < 0 || from >= items.length || to >= items.length) {
        return items;
    }

    const next = items.slice();
    const [moved] = next.splice(from, 1);

    next.splice(to, 0, moved);

    return next;
};

/** Drag-and-drop list that reorders its items via native HTML5 DnD. */
const DndList = <T extends DndListItem>({
    items,
    children,
    onReorder,
    withHandle = false,

    className, title, data,
}: DndListProps<T>): JSX.Element => {
    const [draggedId, setDraggedId] = useState<T["id"] | null>(null);
    const [dragOverId, setDragOverId] = useState<T["id"] | null>(null);

    const onItemDragStart = (id: T["id"]) => (event: DragEvent<HTMLDivElement>) => {
        setDraggedId(id);

        event.dataTransfer.effectAllowed = "move";
    };

    const onItemDragOver = (id: T["id"]) => (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();

        if (draggedId === null || draggedId === id) {
            return;
        }

        setDragOverId(id);

        event.dataTransfer.dropEffect = "move";
    };

    const onItemDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();
    };

    const onItemDragEnd = () => {
        if (draggedId !== null && dragOverId !== null && draggedId !== dragOverId) {
            const from = items.findIndex(item => item.id === draggedId);
            const to = items.findIndex(item => item.id === dragOverId);

            if (from !== -1 && to !== -1) {
                onReorder(arrayMove(items, from, to));
            }
        }

        setDraggedId(null);
        setDragOverId(null);
    };

    const containerClassName = getClassName([
        "bbr-dnd-list",
        draggedId !== null ? "is-drag-active" : "",
        className,
    ]);

    const dataAttributes = mapDataAttributes(data);

    return (
        <div
            {...dataAttributes}

            title={title}
            className={containerClassName}
        >
            {items.map((item, index) => {
                const itemId = item.id;

                const itemClassName = getClassName([
                    "bbr-dnd-list__item",
                    withHandle ? "has-handle" : "",
                    draggedId === itemId ? "is-dragging" : "",
                    dragOverId === itemId ? "is-drag-over" : "",
                ]);

                return (
                    <div
                        key={itemId}

                        draggable
                        onDrop={onItemDrop}
                        className={itemClassName}
                        onDragEnd={onItemDragEnd}
                        onDragOver={onItemDragOver(itemId)}
                        onDragStart={onItemDragStart(itemId)}
                    >
                        {withHandle
                            ? (
                                <span className="bbr-dnd-list__handle">
                                    <Icon name={HANDLE_ICON_NAME} />
                                </span>
                            )
                            : null}
                        {children(item, index)}
                    </div>
                );
            })}
        </div>
    );
};

export default DndList;
