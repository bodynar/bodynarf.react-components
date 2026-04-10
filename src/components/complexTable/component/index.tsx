/* eslint-disable custom/functional-component-definition */ // Rule disabled: Generic component required
import { FC, useCallback, useEffect, useMemo, useState } from "react";

import { getClassName, isNotNullish, isNullish, isNullOrEmpty } from "@bodynarf/utils";
import { Paginator, SortColumn, Table, TableHeading } from "@bbr/components";
import { ElementColor, ElementPosition } from "@bbr/types";

import "./styles.scss";

import { ComplexTableItem, ComplexTableItemProps, ComplexTableProps } from "../types";
import EmptyComplexTable from "../components/emptyTable";
import ComplexTableItemCmp from "../components/tableItem";
import ComplexTableToolbar from "../components/toolbar";
import SelectionBar from "../components/selectionBar";

/** Heading for the actions column */
const ACTIONS_HEADING: TableHeading = {
    caption: "",
    sortable: false,
    className: "complex-table__actions-column",
};

/* Complex table with pagination and filtering */
const ComplexTable = <TItem extends ComplexTableItem & Record<string, unknown>>({
    items,
    itemComponent = ComplexTableItemCmp as unknown as FC<ComplexTableItemProps<TItem>>,
    pagesCount, currentPage, paginatorSize,
    position = ElementPosition.Left, showNextButtons = true,
    loading = false,
    hasActiveSearch = false,
    onSearch, onSortChange, onPageChange, onSelectionChange, onRowClick,
    actions,
    containerRef,
    selection,
    searchPlaceholder = "Search",
    ...tableProps
}: ComplexTableProps<TItem>): JSX.Element | null => {
    const [currentSortColumn, setCurrentSortColumn] = useState<SortColumn | undefined>();
    const [selectedRows, setSelectedRows] = useState<Array<string>>([]);
    const [selectable, setSelectable] = useState(false);

    const headings = useMemo(() => {
        let result = tableProps.headings;

        if (isNotNullish(actions) && actions.length > 0) {
            result = [...result, ACTIONS_HEADING];
        }

        return result;
    }, [tableProps.headings, actions]);

    const toggleButton = useMemo(
        () => isNotNullish(selection)
            ? {
                caption: selectable ? "Disable selection" : "Enable selection",
                onClick: () => setSelectable(prev => !prev),
            }
            : undefined,
        [selection, selectable],
    );

    const handleHeaderClick = useCallback((heading: TableHeading) => {
        if (!heading.sortable || isNullOrEmpty(heading.name)) {
            return;
        }

        setCurrentSortColumn(prev => {
            let next: SortColumn | undefined;

            if (isNullish(prev) || prev.columnName !== heading.name) {
                next = { columnName: heading.name!, ascending: true };
            } else if (prev.ascending) {
                next = { columnName: heading.name!, ascending: false };
            } else {
                next = undefined;
            }

            onSortChange?.(next);

            return next;
        });
    }, [onSortChange]);

    const handleSelectedRowsChange = useCallback((rows: Array<string>) => {
        setSelectedRows(rows);
        onSelectionChange?.(rows);
    }, [onSelectionChange]);

    useEffect(() => {
        if (!selectable) {
            setSelectedRows([]);
            onSelectionChange?.([]);
        }
    }, [selectable, onSelectionChange]);

    const wrapperClassName = getClassName([
        "complex-table__wrapper",
        isNotNullish(onSearch) ? "complex-table__wrapper--with-search" : undefined,
        isNotNullish(selection) ? "complex-table__wrapper--with-toolbar" : undefined,
        tableProps.className,
    ]);

    if (items.length === 0) {
        return (
            <div className={wrapperClassName}>
                <ComplexTableToolbar
                    onSearch={onSearch}
                    toggleButton={toggleButton}
                    disabled={!hasActiveSearch}
                    searchPlaceholder={searchPlaceholder}
                />

                <EmptyComplexTable
                    {...tableProps}
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
                onSearch={onSearch}
                toggleButton={toggleButton}
                searchPlaceholder={searchPlaceholder}
            />

            <SelectionBar
                selectedCount={selectedRows.length}
                selectionActions={selection?.actions}
            />

            <Table
                {...tableProps}

                fullWidth
                hoverable
                headings={headings}
                selectable={selectable}
                selectedRows={selectedRows}
                onHeaderClick={handleHeaderClick}
                currentSortColumn={currentSortColumn}
                onSelectedRowsChange={handleSelectedRowsChange}
                rowCheckBoxConfig={{ style: ElementColor.Link, hasBackgroundColor: true, fixBackgroundColor: true }}
                headerCheckBoxConfig={{ style: ElementColor.Link, hasBackgroundColor: true, fixBackgroundColor: true }}
            >
                {items.map(item => {
                    const Item = itemComponent;

                    return (
                        <Item
                            key={item.id}

                            item={item}
                            actions={actions}
                            headings={headings}
                            onRowClick={onRowClick}
                        />
                    );
                })}
            </Table>

            {pagesCount > 1
                ? (
                    <Paginator
                        nearPagesCount={1}
                        count={pagesCount}
                        position={position}
                        size={paginatorSize}
                        currentPage={currentPage}
                        onPageChange={onPageChange}
                        showNextButtons={showNextButtons}
                        resources={{
                            nextPageCaption: "Next",
                            previousPageCaption: "Previous"
                        }}
                    />
                )
                : null
            }

            {loading
                ? (
                    <div className="complex-table__loading-overlay">
                        <div className="complex-table__spinner" />
                    </div>
                )
                : null
            }

        </div>
    );
};

export default ComplexTable;
