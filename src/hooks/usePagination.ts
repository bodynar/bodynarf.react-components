import { DependencyList, useCallback, useEffect, useMemo, useRef, useState } from "react";

/** Paginator hook state */
export interface PaginationState {
    /** Number of current page */
    currentPage: number;

    /** Amount of pages */
    pagesCount: number;

    /** Handler of page change */
    onPageChange: (page: number) => void;
}

/** Default page size */
const defaultPageSize: number = 30;

/**
 * Hook to pagination state, return hooked values and handler for pagination
 * @param length Pagination items count
 * @param size Page size. Default is 30
 * @param initPage Initial page. Default is 1
 * @param dependencies List of dependencies. On any dependency update current page will be set to 1
 * @returns Pair of hook-stored state and handler for slicing current page items
 */
export const usePagination = (
    length: number,
    size: number = defaultPageSize,
    initPage: number = 1,
    dependencies: DependencyList = []
): [PaginationState, (data: Array<any>) => Array<any>] => {
    const [currentPage, setCurrentPage] = useState(initPage);
    const count = useMemo(() => Math.ceil(length / size), [size, length]);
    const onChange = useCallback((page: number) => setCurrentPage(page), [setCurrentPage]);

    const paginate = useCallback(
        (data: Array<any>): Array<any> => {
            const limit = size;
            const offset = (currentPage - 1) * size;

            return data.slice(offset, offset + limit);
        },
        [size, currentPage]
    );

    const state = useMemo(() => ({
        currentPage: currentPage,
        pagesCount: count,
        onPageChange: onChange
    }), [currentPage, count, onChange]);

    const isInitialRender = useRef(true);

    useEffect(() => {
        if (isInitialRender.current) {
            isInitialRender.current = false;
        } else {
            setCurrentPage(1);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);

    return [state, paginate];
};
