import { Children, cloneElement, forwardRef, isValidElement, useCallback, useMemo } from "react";

import { getClassName, isNotNullish } from "@bodynarf/utils";

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
        () => Children.map(children, (child) => {
            if (!isValidElement(child)) {
                return null;
            }
            if (child.key === null) {
                console.warn("[Table] A selectable row is missing a `key` prop and will be excluded from selection.");

                return null;
            }

            return String(child.key);
        })?.filter((key): key is string => key !== null) ?? [],
        [children],
    );

    const selectedCurrentRowKeys = useMemo(
        () => rowKeys.filter(key => selectedRows.includes(key)),
        [rowKeys, selectedRows],
    );

    const allSelected = selectable && rowKeys.length > 0 && selectedCurrentRowKeys.length === rowKeys.length;
    const someSelected = selectable && selectedCurrentRowKeys.length > 0 && !allSelected;

    const onSelectAllChange = useCallback(
        () => {
            if (!onSelectedRowsChange) {
                return;
            }

            if (allSelected) {
                onSelectedRowsChange(selectedRows.filter(key => !rowKeys.includes(key)));
            } else {
                onSelectedRowsChange([
                    ...selectedRows,
                    ...rowKeys.filter(key => !selectedRows.includes(key)),
                ]);
            }
        },
        [allSelected, rowKeys, selectedRows, onSelectedRowsChange],
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

    const stopPropagation = useCallback(
        (e: React.MouseEvent) => {
            const closestField = (e.target as HTMLElement).closest(".bbr-table__select-cell .bbr-field");

            if (isNotNullish(closestField)) {
                e.stopPropagation();
            }
        },
        [],
    );

    return (
        <table
            {...dataAttributes}

            ref={ref}
            title={title}
            className={elClassName}
        >
            <thead>
                <tr>
                    {selectable
                        ? (
                            <th className="bbr-table__select-cell">
                                <CheckBox
                                    {...headerCheckBoxConfig}

                                    checked={allSelected}
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

                        if (child.key === null) {
                            return child;
                        }

                        const key = String(child.key);

                        const selectionCell = (
                            <td
                                onClick={stopPropagation}
                                className="bbr-table__select-cell"
                            >
                                <CheckBox
                                    {...rowCheckBoxConfig}

                                    checked={selectedRows.includes(key)}
                                    onValueChange={() => onRowSelectChange(key)}
                                />
                            </td>
                        );

                        return cloneElement(child, {
                            selectionCell,
                            selected: selectedRows.includes(key),
                        } as Record<string, unknown>);
                    })
                    : children
                }
            </tbody>
        </table>
    );
});

Table.displayName = "Table";

export default Table;
