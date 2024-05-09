import { getClassName, isNullOrUndefined } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";

import { TableProps } from "..";
import "./style.scss";

import TableHeader from "../components/heading";

/**
 * Tiny table component.
 * If no sorting is use - use `any` as generic param
 */
function Table<TItem>({
    headings,

    hasBorder = false, hoverable = false, narrow = false,
    fullWidth = false, zebra = false, headerBorderless = false,
    hasStickyHeader = false, headerWithBorder = false,

    currentSortColumn, onHeaderClick,
    children,

    className, title, data,
    onClick,
}: TableProps<TItem>): JSX.Element {
    const elClassName = getClassName([
        "bbr-table",
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
            onClick={onClick}
            {...dataAttributes}
        >
            <thead>
                <tr>
                    {headings.map((heading, i) =>
                        <TableHeader
                            key={i}

                            {...heading}
                            onClick={onHeaderClick}
                            sortColumn={currentSortColumn}
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
