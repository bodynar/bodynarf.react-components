import { FC, Ref } from "react";

import { IconProps, PaginatorProps, SortColumn, TableProps, TableSelectionCellProps } from "@bbr/components";
import { ButtonStyle } from "@bbr/components/button";

/** Table row action type */
export type ComplexTableAction =
    & Omit<IconProps, "onClick">
    & {
        /** Action icon click handler */
        onClick: (itemId: string) => void;
    };

/** Table item type */
export type ComplexTableItem = {
    /** Unique item identifier */
    id: string;
};

/** Toolbar action type */
export type ToolbarAction = {
    /** Unique action identifier */
    id: string;

    /** Button text */
    caption: string;

    /** Button style */
    style?: ButtonStyle;

    /** Click handler */
    onClick: () => void;
};

/** Multi-selection configuration */
export type SelectionConfig = {
    /** Actions for selected items */
    actions: Array<ToolbarAction>;
};

/* `ComplexTable` component props type */
export type ComplexTableProps<TItem extends ComplexTableItem = ComplexTableItem> =
    & Pick<TableProps,
        | "headings"
        | "className"
        | "currentSortColumn"
        | "selectedRows"
    >
    & Pick<PaginatorProps, "position" | "showNextButtons">
    & {
        /** Table items */
        items: Array<TItem>;

        /** Total number of pages */
        pagesCount: number;

        /** Current page */
        currentPage: number;

        /** Text to display when there are no items */
        noItemsCaption: string;

        /** Whether an active search query is present (affects empty table text) */
        hasActiveSearch?: boolean;

        /** Data loading flag (displays an overlay over the table) */
        loading?: boolean;

        /** Multi-selection configuration. If provided, a selection toggle button and action bar are shown */
        selection?: SelectionConfig;

        /** Paginator size */
        paginatorSize?: PaginatorProps["size"];

        /** Search field placeholder */
        searchPlaceholder?: string;

        /** Ref for the table container (scroll management) */
        containerRef?: Ref<HTMLTableElement>;

        /** Component for rendering a table item */
        itemComponent?: FC<ComplexTableItemProps<TItem>>;

        /**
         * Actions for each table row.
         * Displayed as buttons in the last column
         */
        actions?: Array<ComplexTableAction>;

        /**
         * Page change handler
         * @param page Page number
         */
        onPageChange: (page: number) => void;

        /**
         * Table row click handler
         * @param itemId Item identifier
         */
        onRowClick?: (itemId: string) => void;

        /**
         * Search handler. If provided, a search bar is displayed
         * @param query Search query
         */
        onSearch?: (query: string) => void;

        /**
         * Sort change handler.
         * Called when a sortable column header is clicked.
         * Toggle order: ascending → descending → no sorting
         * @param sortColumn Current sort or `undefined` when reset
         */
        onSortChange?: (sortColumn?: SortColumn) => void;

        /**
         * Selected items change handler.
         * Called when the set of selected rows changes
         * @param selectedIds Selected item identifiers
         */
        onSelectionChange?: (selectedIds: Array<string>) => void;
    };

/** `ComplexTableItem` component props type */
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
