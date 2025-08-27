import { FC } from "react";

import { getClassName, isNullOrUndefined } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";

import { TableProps } from "..";
import "./style.scss";

import TableHeader from "../components/heading";

/**
 * Tiny table component
 */
const Table: FC<TableProps> = ({
    headings,

    hasBorder = false, hoverable = false, narrow = false,
    fullWidth = false, zebra = false, headerBorderless = false,
    hasStickyHeader = false, headerWithBorder = false,

    currentSortColumn, onHeaderClick,
    children,

    className, title, data,
}) => {
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
            {...dataAttributes}
        >
            <thead>
                <tr>
                    {headings.map((heading, i) =>
                        <TableHeader
                            key={heading.name ?? i}

                            item={heading}
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
};

export default Table;
