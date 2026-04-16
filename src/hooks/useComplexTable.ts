import { useState, useCallback, useEffect, useRef, RefObject } from "react";

import { isNotNullish } from "@bodynarf/utils";
import { SortColumn } from "@bbr/components/table";

/** Default page size */
const DEFAULT_PAGE_SIZE = 30;

/** Paged request parameters */
export type PagedRequest = {
    /** Offset from the beginning of the list */
    offset: number;

    /** Maximum number of items */
    limit: number;

    /** Search query */
    search?: string;

    /** Column name to sort by */
    sortBy?: string;

    /** Sort order */
    sortOrder?: "asc" | "desc";
};

/** Options for the `useComplexTable` hook */
export type UseComplexTableOptions = {
    /** Total number of available items (known at initialization) */
    totalCount: number;

    /** Number of items per page */
    pageSize?: number;

    /**
     * Function to load a page of items.
     * @returns Total number of available items
     */
    loadPage: (params: PagedRequest) => Promise<number>;
};

/** Result of the `useComplexTable` hook */
export type UseComplexTableResult = {
    /** Selected item identifiers */
    selectedIds: Array<string>;

    /** Props to spread onto `ComplexTable` */
    tableProps: {
        /** Reference to the table container for scroll management */
        containerRef: RefObject<HTMLDivElement>;

        /** Total number of pages */
        pagesCount: number;

        /** Current page */
        currentPage: number;

        /** Whether an active search query is present */
        hasActiveSearch: boolean;

        /** Data loading flag */
        loading: boolean;

        /** Page change handler */
        onPageChange: (page: number) => void;

        /** Search handler */
        onSearch: (query: string) => void;

        /** Sort change handler */
        onSortChange: (sortColumn?: SortColumn) => void;

        /** Selection change handler */
        onSelectionChange: (selectedIds: Array<string>) => void;
    };
};

/**
 * Hook for managing `ComplexTable` state with server-side pagination, search, sorting, and multi-selection.
 *
 * Assumes the first page of data is already loaded and passed to `ComplexTable` as `items`,
 * and the total number of items is known at initialization (`totalCount`).
 *
 * @example
 * ```tsx
 * const { tableProps, selectedIds } = useComplexTable({
 *     totalCount: agents.totalCount,
 *     loadPage: async (params) => {
 *         const result = await api.getItems(params);
 *         dispatch(setItems(result.items));
 *         return result.total;
 *     },
 * });
 *
 * <ComplexTable
 *     {...tableProps}
 *     items={items}
 *     headings={headings}
 *     noItemsCaption="No records"
 * />
 * ```
 */
export function useComplexTable({
    loadPage,
    totalCount,
    pageSize = DEFAULT_PAGE_SIZE,
}: UseComplexTableOptions): UseComplexTableResult {
    const [total, setTotal] = useState(totalCount);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState<string | undefined>();
    const [sort, setSort] = useState<SortColumn | undefined>();
    const [selectedIds, setSelectedIds] = useState<Array<string>>([]);

    useEffect(() => {
        setTotal(totalCount);
    }, [totalCount]);

    const tableContainerRef = useRef<HTMLDivElement>(null);

    const pagesCount = Math.ceil(total / pageSize);

    const searchRef = useRef(search);
    const sortRef = useRef(sort);

    searchRef.current = search;
    sortRef.current = sort;

    const scrollToTop = useCallback(() => {
        tableContainerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, []);

    const handleLoadPage = useCallback(async (page: number) => {
        setLoading(true);

        try {
            const newTotal = await loadPage({
                offset: (page - 1) * pageSize,
                limit: pageSize,
                search: searchRef.current,
                sortBy: sortRef.current?.columnName,
                sortOrder: sortRef.current ? (sortRef.current.ascending ? "asc" : "desc") : undefined,
            });

            setTotal(newTotal);
            setCurrentPage(page);
            scrollToTop();
        } finally {
            setLoading(false);
        }
    }, [loadPage, pageSize, scrollToTop]);

    const onSearch = useCallback((query: string) => {
        const searchValue = query.length > 0 ? query : undefined;

        setSearch(searchValue);
        setLoading(true);

        loadPage({
            offset: 0,
            limit: pageSize,
            search: searchValue,
            sortBy: sortRef.current?.columnName,
            sortOrder: sortRef.current ? (sortRef.current.ascending ? "asc" : "desc") : undefined
        })
            .then(newTotal => {
                setTotal(newTotal);
                setCurrentPage(1);
                scrollToTop();
            })
            .finally(() => setLoading(false));
    }, [loadPage, pageSize, scrollToTop]);

    const onSortChange = useCallback((sortColumn?: SortColumn) => {
        setSort(sortColumn);
        setLoading(true);

        loadPage({
            offset: 0,
            limit: pageSize,
            search: searchRef.current,
            sortBy: sortColumn?.columnName,
            sortOrder: sortColumn ? (sortColumn.ascending ? "asc" : "desc") : undefined
        })
            .then(newTotal => {
                setTotal(newTotal);
                setCurrentPage(1);
                scrollToTop();
            })
            .finally(() => setLoading(false));
    }, [loadPage, pageSize, scrollToTop]);

    const onSelectionChange = useCallback((ids: Array<string>) => {
        setSelectedIds(ids);
    }, []);

    return {
        selectedIds,
        tableProps: {
            containerRef: tableContainerRef,
            pagesCount,
            currentPage,
            hasActiveSearch: isNotNullish(search),
            loading,
            onPageChange: handleLoadPage,
            onSearch,
            onSortChange,
            onSelectionChange,
        },
    };
}
