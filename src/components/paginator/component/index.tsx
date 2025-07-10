import { useCallback, useMemo, MouseEvent, FC } from "react";

import { getClassName, isNullOrEmpty, isNullOrUndefined } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";
import { ElementPosition, ElementSize } from "@bbr/types";

import { PaginatorProps } from "../..";

/**
 * Paginator component.
 * Used for visualization of paging configuration
*/
const Paginator: FC<PaginatorProps> = ({
    count, onPageChange, currentPage = 0,
    position = ElementPosition.Left, size = ElementSize.Normal,
    rounded = false, showNextButtons = false,
    nearPagesCount = 3, resources,

    className, title, data,
}) => {
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
                        onClick={pageChange}
                        data-page={currentPage - 1}
                        title={canGoBack ? resources?.previousPageTitle : undefined}
                        className={`pagination-previous${canGoBack ? "" : " is-disabled"}`}
                    >
                        {resources?.previousPageCaption ?? "Previous"}
                    </a>
                    <a
                        onClick={pageChange}
                        data-page={currentPage + 1}
                        title={canGoForward ? resources?.nextPageTitle : undefined}
                        className={`pagination-next${canGoForward ? "" : " is-disabled"}`}
                    >
                        {resources?.nextPageCaption ?? "Next page"}
                    </a>
                </>
            }
            <ul className="pagination-list">
                {currentPage !== 1 && !pageNumbers.includes(1) &&
                    <>
                        <li>
                            <a
                                data-page={1}
                                onClick={pageChange}
                                className="pagination-link"
                                title={resources?.openConcretePageTitleTemplate?.format(1)}
                                aria-label={resources?.openConcretePageTitleTemplate?.format(1)}
                            >
                                1
                            </a>
                        </li>
                        <li>
                            <span className="pagination-ellipsis">
                                &hellip;
                            </span>
                        </li>
                    </>
                }
                {pageNumbers.map(x =>
                    <li key={x}>
                        <a
                            data-page={x}
                            onClick={pageChange}
                            aria-label={resources?.openConcretePageTitleTemplate?.format(x)}
                            className={`pagination-link${currentPage === x ? " is-current" : ""}`}
                            title={currentPage === x ? undefined : resources?.openConcretePageTitleTemplate?.format(x)}
                        >
                            {x}
                        </a>
                    </li>
                )}
                {currentPage != count && !pageNumbers.includes(count) &&
                    <>
                        <li>
                            <span className="pagination-ellipsis">
                                &hellip;
                            </span>
                        </li>
                        <li>
                            <a
                                data-page={count}
                                onClick={pageChange}
                                className="pagination-link"
                                title={resources?.openConcretePageTitleTemplate?.format(count)}
                                aria-label={resources?.openConcretePageTitleTemplate?.format(count)}
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

export default Paginator;

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
