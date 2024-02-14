import { getClassName, isNullOrUndefined } from "@bodynarf/utils";

import { BaseElementProps } from "@bbr/components/types";
import { mapDataAttributes } from "@bbr/utils";

import { SortColumn, TableHeading } from "..";
import TableHeader from "../components/heading";

/** Table props type */
export interface TableProps<TItem> extends BaseElementProps {
    /** Header row */
    headings: Array<TableHeading<TItem>>;

    /** Table body */
    children?: React.ReactNode;

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
    currentSortColumn?: SortColumn<TItem>;

    /** Header click handler */
    onHeaderClick?: (columnName: TableHeading<TItem>) => void;
}

/**
 * Tiny table component.
 * If no sorting is use - use `any` as generic param
 */
function Table<TItem>({
    headings,
    hasBorder, hoverable, narrow, fullWidth, zebra, headerBorderless,
    hasStickyHeader, headerWithBorder,
    currentSortColumn, onHeaderClick,
    children,

    className, title, data,
}: TableProps<TItem>): JSX.Element {
    const elClassName = getClassName([
        "table",
        className,
        hasBorder ? "is-bordered" : "",
        hoverable ? "is-hoverable" : "",
        narrow ? "is-narrow" : "",
        fullWidth ? "is-fullwidth" : "",
        zebra ? "is-striped" : "",
        hasStickyHeader ? "has-sticky-header" : "",
        headerWithBorder ? "has-borderless-header has-shadow-bordered-header" : "",
        headerBorderless ? "has-borderless-header" : "",
    ]);

    const dataAttributes = isNullOrUndefined(data)
        ? undefined
        : mapDataAttributes(data!);

    return (
        <table
            className={elClassName}

            title={title}
            {...dataAttributes}
        >
            <thead>
                <tr>
                    {headings.map((heading, i) =>
                        <TableHeader
                            key={i}
                            {...heading}
                            sortColumn={currentSortColumn}
                            onClick={onHeaderClick}
                        />
                    )}
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    );
}

export default Table;
