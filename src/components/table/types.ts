import { ReactNode } from "react";

import { BaseElementProps } from "@bbr/types";

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

    /** Header click handler */
    onHeaderClick?: (columnName: TableHeading) => void;
};
