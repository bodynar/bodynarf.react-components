import { FC, Ref } from "react";

import { IconProps, PaginatorProps, SearchProps, SortColumn, SplitButtonProps, TableProps, TableSelectionCellProps } from "@bbr/components";
import { ButtonProps } from "@bbr/components/button";
import { BaseElementProps } from "@bbr/types";

// Used in jsdoc
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useComplexTable } from "@bbr/hooks";

/** Table item type */
export type ComplexTableItem = {
    /** Unique item identifier */
    id: string;
};

/** {@link ComplexTable} component props type */
export type ComplexTableProps<TItem extends ComplexTableItem = ComplexTableItem> =
    & Pick<TableProps,
        | "headings"
        | "className"
        | "currentSortColumn"
    >
    & {
        /** Table items */
        items: Array<TItem>;

        /** Text to display when there are no items */
        noItemsCaption: string;

        /**
         * Total number of pages. Used for pagination.
         * Must be passed from the hook {@link useComplexTable} to work correctly.
         */
        pagesCount: number;

        /**
         * Current page number. Used for pagination.
         * Must be passed from the hook {@link useComplexTable} to work correctly.
         */
        currentPage: number;

        /**
         * Keys of currently selected rows.
         * @description Values correspond to `key` props of child row elements
         * Must be passed from the hook {@link useComplexTable} to work correctly.
         */
        selectedRows?: Array<string>;

        /** Component for rendering a table item */
        itemComponent?: FC<ComplexTableItemProps<TItem>>;

        /** Configuration for the inner table */
        tableConfig?: ComplexTableInnerTableProps;

        /** Configuration for the paginator */
        paginatorConfig?: ComplexTablePaginatorConfig;

        /**
         * Configuration for selection bar.
         * If not provided, a default selection bar with the same actions as in `selection` is rendered.
         */
        selectionBarConfig?: ComplexTableSelectionBarConfig;

        /**
         * Configuration for the search field. If provided, a search bar is displayed
        */
        searchConfig?: ComplexTableSearchConfig;

        /** Row actions */
        actions?: Array<ComplexTableAction>;

        /**
         * Whether an active search query is present. Affects the text displayed when no items are found.
         * Must be passed from the hook {@link useComplexTable} to work correctly.
         */
        hasActiveSearch?: boolean;

        /**
         * Data loading flag. Displays an overlay over the table when `true`.
         * Must be passed from the hook {@link useComplexTable} to work correctly.
         */
        loading?: boolean;

        /** Ref for the table container (scroll management) */
        /**
         * Ref for the table container. Used for scroll management in the hook.
         * Must be passed from the hook {@link useComplexTable} to work correctly.
         */
        containerRef?: Ref<HTMLDivElement>;

        /** Ref for the inner table element */
        tableRef?: Ref<HTMLTableElement>;

        /**
         * Page change handler
         * Must be passed from the hook {@link useComplexTable} to work correctly.
         * @param page Page number
         */
        onPageChange: (page: number) => void;

        /**
         * Search handler.
         * Must be passed from the hook {@link useComplexTable} to work correctly.
         * @param query Search query
         */
        onSearch: (query: string) => void;

        /**
         * Sort change handler.
         * Called when a sortable column header is clicked.
         * Toggle order: ascending → descending → no sorting
         * Must be passed from the hook {@link useComplexTable} to work correctly.
         * @param sortColumn Current sort or `undefined` when reset
         */
        onSortChange: (sortColumn?: SortColumn) => void;

        /**
         * Selected items change handler.
         * Called when the set of selected rows changes
         * Must be passed from the hook {@link useComplexTable} to work correctly.
         * @param selectedIds Selected item identifiers
         */
        onSelectionChange: (selectedIds: Array<string>) => void;

        /**
         * Table row click handler
         * @param itemId Item identifier
         */
        onRowClick?: (itemId: string) => void;
    };

// #region Table item props types

/** {@link ComplexTableItem} component props type */
export type ComplexTableItemProps<TItem extends ComplexTableItem = ComplexTableItem> =
    & TableSelectionCellProps
    & Pick<TableProps, "headings">
    & {
        /** Table item */
        item: TItem;

        /** Row actions */
        actions?: Array<ComplexTableAction>;

        /**
         * Table row click handler
         * @param itemId Item identifier
         */
        onRowClick?: (itemId: string) => void;
    };

/** Table row action type */
export type ComplexTableAction =
    & Omit<IconProps, "onClick">
    & {
        /** Action icon click handler */
        onClick: (itemId: string) => void;
    };

// #endregion Table item props types

/** {@link ComplexTable} search configuration */
export type ComplexTableSearchConfig = {
    /** Search field placeholder */
    searchPlaceholder: string;

    /** Text to display when no items match the search query */
    noItemsFoundBySearchCaption: string;

    /** Configuration for the search field */
    searchProps?: Omit<SearchProps, "onSearch">;
};

/** Props for the inner table of {@link ComplexTable} */
export type ComplexTableInnerTableProps = Omit<
    TableProps,
    | "headings" | "children" | "currentSortColumn"
    | "selectable" | "selectedRows" | "onSelectedRowsChange"
>;

/** Props for the paginator of {@link ComplexTable} */
export type ComplexTablePaginatorConfig = Omit<
    PaginatorProps,
    | "count" | "currentPage" | "onPageChange"
>;

/** Common props for the selection bar of {@link ComplexTable} */
export type ComplexTableSelectionBarBase =
    & BaseElementProps
    & {
        /** Configuration for the multi-selection toggle button */
        multiSelectionToggleButtonConfig: Omit<ButtonProps, "onClick">;

        /**
         * Placeholder for the selected items count in the selection bar.
         * @param count Selected items count
         * @return Placeholder text
         */
        selectedCountPlaceholder: (count: number) => string;
    };

/** Selection bar rendered as a list of separate buttons */
export type ComplexTableSelectionBarButtonList =
    & ComplexTableSelectionBarBase
    & {
        /** Type of the selection bar */
        type: "Button list";

        /** Actions rendered as individual buttons */
        actions: Array<ButtonProps>;
    };

/** Selection bar rendered as a split button */
export type ComplexTableSelectionBarSplitButton =
    & ComplexTableSelectionBarBase
    & {
        /** Type of the selection bar */
        type: "SplitButton";

        /** Configuration for the split button */
        splitButtonConfig: SplitButtonProps;
    };

/** Props for the selection bar of {@link ComplexTable} */
export type ComplexTableSelectionBarConfig = ComplexTableSelectionBarButtonList | ComplexTableSelectionBarSplitButton;
