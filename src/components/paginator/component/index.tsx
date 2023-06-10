import { useCallback, useMemo, MouseEvent } from "react";

import { getClassName, isNullOrEmpty } from "@bodynarf/utils";

import { generatePageNumbers, PaginatorProps } from "@bbr/components/paginator";

/**
 * Paginator component.
 * Used for visualization of paging configuration
*/
export default function Paginator({
    count, onPageChange, currentPage,
    position,
    size, className,
    rounded = false, showNextButtons = false,
    nearPagesCount
}: PaginatorProps): JSX.Element {
    const page = currentPage || 0;

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

    const pageNumbers = useMemo(() => generatePageNumbers(page, count, nearPagesCount), [page, count]);

    const canGoBack = useMemo(() => page > 1, [page]);
    const canGoForward = useMemo(() => page < count, [page, count]);

    if (pageNumbers.length <= 1) {
        return <></>;
    }

    const classNames = getClassName([
        "bbr-paginator",
        "pagination",
        paginationPositionToClassMap.has(position || "") ? paginationPositionToClassMap.get(position || "") : "",
        rounded ? "is-rounded" : "",
        isNullOrEmpty(size) ? "" : `is-${size}`,
        className
    ]);

    return (
        <nav className={classNames} role="navigation" aria-label="pagination">
            {showNextButtons &&
                <>
                    <a
                        className={`pagination-previous${canGoBack ? "" : " is-disabled"}`}
                        data-page={page - 1}
                        onClick={pageChange}
                    >
                        Previous
                    </a>
                    <a
                        className={`pagination-next${canGoForward ? "" : " is-disabled"}`}
                        data-page={page + 1}
                        onClick={pageChange}
                    >
                        Next page
                    </a>
                </>
            }
            <ul className="pagination-list">
                {page !== 1 && !pageNumbers.includes(1) &&
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
                            className={`pagination-link${page === x ? " is-current" : ""}`}
                            aria-label={`Goto page ${x}`}
                            data-page={x}
                            onClick={pageChange}
                        >
                            {x}
                        </a>
                    </li>
                )}
                {page != count && !pageNumbers.includes(count) &&
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
const paginationPositionToClassMap: Map<string, string> = new Map([
    ["center", "is-centered"],
    ["right", "is-right"]
]);
