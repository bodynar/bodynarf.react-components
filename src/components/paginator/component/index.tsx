import { useCallback, useMemo, MouseEvent } from "react";

import { getClassName, isNullOrEmpty, isNullOrUndefined } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";
import { ElementPosition } from "@bbr/types";
import { PaginatorProps, generatePageNumbers } from "@bbr/components";

/**
 * Paginator component.
 * Used for visualization of paging configuration
*/
export default function Paginator({
    count, onPageChange, currentPage,
    position = ElementPosition.Left,
    size,
    rounded = false, showNextButtons = false,
    nearPagesCount,

    className, title, data,
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

    const pageNumbers = useMemo(() => generatePageNumbers(page, count, nearPagesCount), [page, count, nearPagesCount]);

    const canGoBack = useMemo(() => page > 1, [page]);
    const canGoForward = useMemo(() => page < count, [page, count]);

    if (pageNumbers.length <= 1) {
        return <></>;
    }

    const classNames = getClassName([
        "bbr-paginator",
        "pagination",
        className,
        paginationPositionToClassMap.get(position),
        rounded ? "is-rounded" : "",
        isNullOrEmpty(size) ? "" : `is-${size}`,
    ]);

    const dataAttributes = isNullOrUndefined(data)
        ? undefined
        : mapDataAttributes(data!);

    return (
        <nav
            className={classNames}
            role="navigation"
            aria-label="pagination"

            title={title}
            {...dataAttributes}
        >
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
const paginationPositionToClassMap: Map<ElementPosition, string> = new Map([
    [ElementPosition.Left, ""],
    [ElementPosition.Center, "is-centered"],
    [ElementPosition.Right, "is-right"]
]);
