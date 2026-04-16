import { ReactElement, ReactNode } from "react";

import { BaseElementProps } from "@bbr/types";
import { CheckBoxProps } from "@bbr/components/primitives/checkbox";

/** Checkbox visual configuration for table selection column */
export type TableCheckBoxConfig = Pick<CheckBoxProps,
    | "size" | "style"
    | "rounded" | "block"
    | "withoutBorder"
    | "hasBackgroundColor" | "fixBackgroundColor"
>;

export interface TableHeading {
    /** Caption to display */
    caption: string;

    /** Is column sortable  */
    sortable: boolean;

    /** Class names */
    className?: string;

    /** Name of model column*/
    name?: string;
}

/** Generic sort column model */
export interface SortColumn {
    /** Column name */
    columnName: string;

    /** Is column sorted ascending */
    ascending: boolean;
}

/** Table props type */
export type TableProps = BaseElementProps & {
    /** Header row */
    headings: Array<TableHeading>;

    /** Table body */
    children: ReactNode;

    /** Add border to all cells */
    hasBorder?: boolean;

    /** Is row hover effect active */
    hoverable?: boolean;

    /** Reduce space between cells */
    narrow?: boolean;

    /** Use all container width */
    fullWidth?: boolean;

    /** Is header sticks to page on scroll */
    hasStickyHeader?: boolean;

    /**
     * Header has border.
     * @description Applied only with `hasStickyHeader` sets as `true`. Adds border effect
    */
    headerWithBorder?: boolean;

    /** Header has no borders */
    headerBorderless?: boolean;

    /**
     * Should rows be stripped.
     * @description Even rows will have gray background
    */
    zebra?: boolean;

    /** Current sort column */
    currentSortColumn?: SortColumn;

    /**
     * Enable multiple row selection.
     * @description Adds a checkbox column to the table.
     * Each child row element **must** have a unique `key` prop — it is used as the selection identifier
     */
    selectable?: boolean;

    /**
     * Keys of currently selected rows.
     * @description Values correspond to `key` props of child row elements
     */
    selectedRows?: Array<string>;

    /** Visual configuration for the "select all" checkbox in the header */
    headerCheckBoxConfig?: TableCheckBoxConfig;

    /** Visual configuration for row selection checkboxes */
    rowCheckBoxConfig?: TableCheckBoxConfig;

    /** Header click handler */
    onHeaderClick?: (columnName: TableHeading) => void;

    /** Callback when selected rows change */
    onSelectedRowsChange?: (selectedRows: Array<string>) => void;
};

/**
 * Selection cell injected by Table when `selectable` is enabled.
 * @description Row components should accept this prop and render it as the first `<td>` inside their `<tr>`
 */
export type TableSelectionCellProps = {
    /** Checkbox cell element to render inside the row */
    selectionCell?: ReactElement;

    /** Whether the row is selected */
    selected?: boolean;
};
