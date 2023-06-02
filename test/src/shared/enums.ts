import { ElementColor, ElementSize, SelectableItem } from "@bodynarf/react.components";

/** Colors object */
export const Colors = {
    /** All values */
    values: Object.values(ElementColor),

    /** All names */
    keys: Object.keys(ElementColor),

    /** All names as string, separated by comma */
    string: Object.keys(ElementColor).join(", "),

    /** All values as selectable items */
    selectableItems: Object.values(ElementColor).map((x, i) => ({
        displayValue: x,
        id: i.toString(),
        value: x,
    }) as SelectableItem),
};

/** Sizes object */
export const Sizes = {
    /** All values */
    values: Object.values(ElementSize),

    /** All names */
    keys: Object.keys(ElementSize),

    /** All names as string, separated by comma */
    string: Object.keys(ElementSize).join(", "),

    /** All values as selectable items */
    selectableItems: Object.values(ElementSize).map((x, i) => ({
        displayValue: x,
        id: i.toString(),
        value: x,
    }) as SelectableItem),
};