import { useState, useCallback, useEffect, useRef } from "react";

import { isNotNullish } from "@bodynarf/utils";
import { SortColumn } from "@bbr/components/table";

/** Размер страницы по умолчанию */
const DEFAULT_PAGE_SIZE = 25;

/** Параметры запроса постраничной загрузки */
export type PagedRequest = {
    /** Смещение от начала списка */
    offset: number;

    /** Максимальное количество элементов */
    limit: number;

    /** Поисковый запрос */
    search?: string;

    /** Имя столбца для сортировки */
    sortBy?: string;

    /** Порядок сортировки */
    sortOrder?: "asc" | "desc";
};

/** Опции хука `useComplexTable` */
export type UseComplexTableOptions = {
    /** Общее количество доступных элементов (известно при инициализации) */
    totalCount: number;

    /** Количество элементов на странице */
    pageSize?: number;

    /**
     * Функция загрузки страницы элементов.
     * @returns Общее количество доступных элементов
     */
    loadPage: (params: PagedRequest) => Promise<number>;
};

/** Результат хука `useComplexTable` */
export type UseComplexTableResult = {
    /** Идентификаторы выбранных элементов */
    selectedIds: Array<string>;

    /** Пропсы для передачи в `ComplexTable` через spread */
    tableProps: {
        /** Ссылка на контейнер таблицы для управления прокруткой */
        containerRef: React.RefObject<HTMLTableElement | null>;

        /** Общее количество страниц */
        pagesCount: number;

        /** Текущая страница */
        currentPage: number;

        /** Флаг наличия активного поискового запроса */
        hasActiveSearch: boolean;

        /** Флаг загрузки данных */
        loading: boolean;

        /** Обработчик смены страницы */
        onPageChange: (page: number) => void;

        /** Обработчик поиска */
        onSearch: (query: string) => void;

        /** Обработчик изменения сортировки */
        onSortChange: (sortColumn?: SortColumn) => void;

        /** Обработчик изменения выбранных элементов */
        onSelectionChange: (selectedIds: Array<string>) => void;
    };
};

/**
 * Хук управления состоянием `ComplexTable` с серверной пагинацией, поиском, сортировкой и множественным выбором.
 *
 * Предполагается, что первая страница данных уже загружена и передана в `ComplexTable` как `items`,
 * а общее количество элементов известно при инициализации (`totalCount`).
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
 *     noItemsCaption="Записей нет"
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

    const tableContainerRef = useRef<HTMLTableElement | null>(null);

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
                sortOrder: sortRef.current?.ascending ? "asc" : "desc",
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

        loadPage({ offset: 0, limit: pageSize, search: searchValue, sortBy: sortRef.current?.columnName, sortOrder: sortRef.current?.ascending ? "asc" : "desc" })
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

        loadPage({ offset: 0, limit: pageSize, search: searchRef.current, sortBy: sortColumn?.columnName, sortOrder: sortColumn?.ascending ? "asc" : "desc" })
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
