/* eslint-disable custom/functional-component-definition */ // Rule disabled: Generic component required
import { FC, useCallback, useEffect, useMemo, useState } from "react";

import { getClassName, isNotNullish, isNullish, isNullOrEmpty } from "@bodynarf/utils";
import { Paginator, SortColumn, Table, TableHeading } from "@bbr/components";

import "./styles.scss";

import { ComplexTableItem, ComplexTableItemProps, ComplexTableProps } from "../types";
import EmptyComplexTable from "../components/emptyTable";
import ComplexTableItemDefaultComponent from "../components/tableItem";
import ComplexTableToolbar from "../components/toolbar";
import SelectionBar from "../components/selectionBar";

/** Heading for the actions column */
const ACTIONS_HEADING: TableHeading = {
    caption: "",
    sortable: false,
    className: "bbr-complex-table__actions-column",
};

/* Complex table with pagination and filtering */
const ComplexTable = <TItem extends ComplexTableItem & Record<string, unknown>>({
    headings, className, currentSortColumn,
    items,
    noItemsCaption,
    tableConfig, paginatorConfig, searchConfig, selectionBarConfig,
    onRowClick,

    selectedRows,
    onPageChange, onSearch, onSortChange, onSelectionChange,

    actions,
    itemComponent = ComplexTableItemDefaultComponent as unknown as FC<ComplexTableItemProps<TItem>>,
    pagesCount, currentPage,
    loading = false,
    hasActiveSearch = false,
    containerRef, tableRef,
}: ComplexTableProps<TItem>): JSX.Element | null => {
    const [selectable, setSelectable] = useState(false);

    const headingColumns = useMemo(() => {
        let result = headings;

        if (isNotNullish(actions) && actions.length > 0) {
            result = [...result, ACTIONS_HEADING];
        }

        return result;
    }, [headings, actions]);

    const handleHeaderClick = useCallback((heading: TableHeading) => {
        if (!heading.sortable || isNullOrEmpty(heading.name)) {
            return;
        }

        let next: SortColumn | undefined;

        if (isNullish(currentSortColumn) || currentSortColumn.columnName !== heading.name) {
            next = { columnName: heading.name!, ascending: true };
        } else if (currentSortColumn.ascending) {
            next = { columnName: heading.name!, ascending: false };
        } else {
            next = undefined;
        }

        onSortChange?.(next);
    }, [currentSortColumn, onSortChange]);

    const toggleMultiSelect = useCallback(() => setSelectable(prev => !prev), []);

    useEffect(() => {
        if (!selectable) {
            onSelectionChange([]);
        }
    }, [selectable, onSelectionChange]);

    const wrapperClassName = getClassName([
        "bbr-complex-table__wrapper",
        isNotNullish(onSearch) ? "bbr-complex-table__wrapper--with-search" : undefined,
        isNotNullish(selectionBarConfig) || isNotNullish(searchConfig) ? "bbr-complex-table__wrapper--with-toolbar" : undefined,
        className,
    ]);

    if (items.length === 0) {
        return (
            <div className={wrapperClassName}>
                <ComplexTableToolbar
                    loading={loading}
                    onSearch={onSearch}
                    disabled={!hasActiveSearch}
                    searchConfig={searchConfig}
                    selectionBarConfig={selectionBarConfig}
                    toggleMultiSelection={toggleMultiSelect}
                />

                <EmptyComplexTable
                    headings={headingColumns}
                    tableConfig={tableConfig}
                    searchConfig={searchConfig}
                    noItemsCaption={noItemsCaption}
                    hasActiveSearch={hasActiveSearch}
                />
            </div>
        );
    }

    return (
        <div
            ref={containerRef}
            className={wrapperClassName}
        >
            <ComplexTableToolbar
                loading={loading}
                onSearch={onSearch}
                searchConfig={searchConfig}
                selectionBarConfig={selectionBarConfig}
                toggleMultiSelection={toggleMultiSelect}
            />

            <SelectionBar
                loading={loading}
                selectedRows={selectedRows}
                selectionBarConfig={selectionBarConfig}
            />

            <Table
                {...tableConfig}

                ref={tableRef}
                className={className}
                selectable={selectable}
                headings={headingColumns}
                selectedRows={selectedRows}
                onHeaderClick={handleHeaderClick}
                currentSortColumn={currentSortColumn}
                onSelectedRowsChange={onSelectionChange}
            >
                {items.map(item => {
                    const Item = itemComponent;

                    return (
                        <Item
                            key={item.id}

                            item={item}
                            actions={actions}
                            onRowClick={onRowClick}
                            headings={headingColumns}
                        />
                    );
                })}
            </Table>

            {pagesCount > 1
                ? (
                    <Paginator
                        {...paginatorConfig}

                        count={pagesCount}
                        currentPage={currentPage}
                        onPageChange={onPageChange}
                    />
                )
                : null
            }

            {loading
                ? (
                    <div className="bbr-complex-table__loading-overlay">
                        <div className="bbr-complex-table__spinner" />
                    </div>
                )
                : null
            }

        </div>
    );
};

export default ComplexTable;
