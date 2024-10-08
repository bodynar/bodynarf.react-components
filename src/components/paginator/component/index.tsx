import { useCallback, useMemo, MouseEvent } from "react";

import { getClassName, isNullOrEmpty, isNullOrUndefined } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";
import { ElementPosition, ElementSize } from "@bbr/types";

import { PaginatorProps } from "../..";

/**
 * Paginator component.
 * Used for visualization of paging configuration
*/
export default function Paginator({
    count, onPageChange, currentPage = 0,
    position = ElementPosition.Left, size = ElementSize.Normal,
    rounded = false, showNextButtons = false,
    nearPagesCount = 3,

    className, title, data,
}: PaginatorProps): JSX.Element {
    const pageChange = useCallback(
        (event: MouseEvent<HTMLElement>) => {
            const target = event.target as HTMLElement;

            const pageRaw = target.dataset["page"];

            if (isNullOrEmpty(pageRaw)) {
                return;
            }

            const page = +pageRaw!;

            if (page !== currentPage && page > 0 && page <= count) {
                onPageChange(page);
            }
        }, [onPageChange, currentPage, count]);

    const pageNumbers = useMemo(() => generatePageNumbers(currentPage, count, nearPagesCount), [currentPage, count, nearPagesCount]);

    const canGoBack = useMemo(() => currentPage > 1, [currentPage]);
    const canGoForward = useMemo(() => currentPage < count, [currentPage, count]);

    if (pageNumbers.length <= 1) {
        return <></>;
    }

    const classNames = getClassName([
        "bbr-paginator",
        "pagination",
        className,
        paginationPositionToClassMap.get(position),
        rounded ? "is-rounded" : "",
        size === ElementSize.Normal ? "" : `is-${size}`,
    ]);

    const dataAttributes = isNullOrUndefined(data)
        ? undefined
        : mapDataAttributes(data!);

    return (
        <nav
            role="navigation"
            className={classNames}
            aria-label="pagination"

            title={title}
            {...dataAttributes}
        >
            {showNextButtons &&
                <>
                    <a
                        className={`pagination-previous${canGoBack ? "" : " is-disabled"}`}
                        data-page={currentPage - 1}
                        onClick={pageChange}
                    >
                        Previous
                    </a>
                    <a
                        className={`pagination-next${canGoForward ? "" : " is-disabled"}`}
                        data-page={currentPage + 1}
                        onClick={pageChange}
                    >
                        Next page
                    </a>
                </>
            }
            <ul className="pagination-list">
                {currentPage !== 1 && !pageNumbers.includes(1) &&
                    <>
                        <li>
                            <a
                                className="pagination-link"
                                aria-label="Goto page 1"
                                data-page={1}
                                onClick={pageChange}
                            >
                                1
                            </a>
                        </li>
                        <li>
                            <span className="pagination-ellipsis">&hellip;</span>
                        </li>
                    </>
                }
                {pageNumbers.map(x =>
                    <li key={x}>
                        <a
                            className={`pagination-link${currentPage === x ? " is-current" : ""}`}
                            aria-label={`Goto page ${x}`}
                            data-page={x}
                            onClick={pageChange}
                        >
                            {x}
                        </a>
                    </li>
                )}
                {currentPage != count && !pageNumbers.includes(count) &&
                    <>
                        <li>
                            <span className="pagination-ellipsis">&hellip;</span>
                        </li>
                        <li>
                            <a
                                className="pagination-link"
                                aria-label={`Goto page ${count}`}
                                data-page={count}
                                onClick={pageChange}
                            >
                                {count}
                            </a>
                        </li>
                    </>
                }
            </ul>
        </nav>
    );
}

/**
 * Position setting to css class name map
 */
const paginationPositionToClassMap: Map<ElementPosition, string> = new Map([
    [ElementPosition.Left, ""],
    [ElementPosition.Center, "is-centered"],
    [ElementPosition.Right, "is-right"]
]);

/**
 * Get nearest numbers from each side (left & right)
 * @param page Number of current page
 * @param count Amount of pages
 * @param size Amount of pages from left & right to current page
 * @throws Current page is greater than pages amount
 * @returns Array of nearest numbers to current page
 */
const generatePageNumbers = (page: number, count: number, size: number): Array<number> => {
    if (page < 0 || count <= 0 || page > count) {
        return [];
    }

    return [
        ...new Array(size).fill(page).map((_, i) => page - i - 1).filter(x => x > 0 && x < page).reverse(),
        page,
        ...new Array(size).fill(page).map((_, i) => page + i + 1).filter(x => x > 0 && x > page && x <= count)
    ];
};
