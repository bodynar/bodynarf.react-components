import { Children, cloneElement, forwardRef, isValidElement, useCallback, useMemo } from "react";

import { getClassName } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";
import CheckBox from "@bbr/components/primitives/checkbox";

import { TableProps } from "..";
import "./style.scss";

import TableHeader from "../components/heading";

/**
 * Tiny table component
 */
const Table = forwardRef<HTMLTableElement, TableProps>(({
    headings,

    hasBorder = false, hoverable = false, narrow = false,
    fullWidth = false, zebra = false, headerBorderless = false,
    hasStickyHeader = false, headerWithBorder = false,

    currentSortColumn, onHeaderClick,
    children,

    selectable = false,
    selectedRows = [],
    onSelectedRowsChange,
    headerCheckBoxConfig,
    rowCheckBoxConfig,

    className, title, data,
}, ref) => {
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

    const dataAttributes = mapDataAttributes(data);

    const rowKeys = useMemo(
        () => Children.map(children, (child) =>
            isValidElement(child) ? String(child.key) : null
        )?.filter((key): key is string => key !== null) ?? [],
        [children],
    );

    const allSelected = selectable && rowKeys.length > 0 && selectedRows.length === rowKeys.length;
    const someSelected = selectable && selectedRows.length > 0 && !allSelected;

    const onSelectAllChange = useCallback(
        () => {
            if (!onSelectedRowsChange) {
                return;
            }

            if (allSelected) {
                onSelectedRowsChange([]);
            } else {
                onSelectedRowsChange([...rowKeys]);
            }
        },
        [allSelected, rowKeys, onSelectedRowsChange],
    );

    const onRowSelectChange = useCallback(
        (key: string) => {
            if (!onSelectedRowsChange) {
                return;
            }

            if (selectedRows.includes(key)) {
                onSelectedRowsChange(selectedRows.filter(k => k !== key));
            } else {
                onSelectedRowsChange([...selectedRows, key]);
            }
        },
        [selectedRows, onSelectedRowsChange],
    );

    return (
        <table
            ref={ref}
            title={title}
            {...dataAttributes}
            className={elClassName}
        >
            <thead>
                <tr>
                    {selectable
                        ? (
                            <th className="bbr-table__select-cell">
                                <CheckBox
                                    checked={allSelected}
                                    {...headerCheckBoxConfig}
                                    indeterminate={someSelected}
                                    onValueChange={onSelectAllChange}
                                />
                            </th>
                        )
                        : null
                    }
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
                {selectable
                    ? Children.map(children, (child) => {
                        if (!isValidElement(child)) {
                            return child;
                        }

                        const key = String(child.key);

                        const selectionCell = (
                            <td className="bbr-table__select-cell">
                                <CheckBox
                                    {...rowCheckBoxConfig}
                                    checked={selectedRows.includes(key)}
                                    onValueChange={() => onRowSelectChange(key)}
                                />
                            </td>
                        );

                        return cloneElement(child, { selectionCell } as Record<string, unknown>);
                    })
                    : children
                }
            </tbody>
        </table>
    );
});

Table.displayName = "Table";

export default Table;
