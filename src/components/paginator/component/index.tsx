import { useCallback, useMemo, MouseEvent, FC } from "react";

import { getClassName, isNullOrEmpty, isNullish } from "@bodynarf/utils";

import { getPositionClassName, getSizeClassName, mapDataAttributes } from "@bbr/utils";
import { ElementPosition, ElementSize } from "@bbr/types";

import { PaginatorProps } from "../..";
import PaginatorNextButtons from "../components/nextButtons";
import PaginatorNavButtons from "../components/navButtons";

/**
 * Paginator component.
 * Used for visualization of paging configuration
*/
const Paginator: FC<PaginatorProps> = ({
    count, onPageChange, currentPage = 0,
    position = ElementPosition.Left, size = ElementSize.Normal,
    rounded = false,
    nearPagesCount = 3, resources,
    showNextButtons = false, nextButtonsConfig, pageButtonsConfig,

    className, title, data,
}) => {
    if (currentPage > count) {
        throw new Error(`Current page "${currentPage}" must be less than amount of pages "${count}"`);
    }

    const pageNumbers = useMemo(() => generatePageNumbers(currentPage, count, nearPagesCount), [currentPage, count, nearPagesCount]);

    const canGoBack = useMemo(() => currentPage > 1, [currentPage]);
    const canGoForward = useMemo(() => currentPage < count, [currentPage, count]);

    const goBack = useCallback(() => onPageChange(currentPage - 1), [currentPage, onPageChange]);
    const goForward = useCallback(() => onPageChange(currentPage + 1), [currentPage, onPageChange]);

    const pageChange = useCallback(
        (event: MouseEvent<HTMLElement>) => {
            const target = event.target as HTMLElement;

            const pageRaw = target.dataset["page"];

            if (isNullish(pageRaw) || isNullOrEmpty(pageRaw)) {
                return;
            }

            const pageNumber = Number.parseInt(pageRaw);

            if (isNaN(pageNumber)) {
                return;
            }

            if (pageNumber === currentPage || pageNumber <= 0 || pageNumber > count) {
                return;
            }

            onPageChange(pageNumber);
        }, [onPageChange, currentPage, count]);

    if (pageNumbers.length <= 1) {
        return null;
    }

    const classNames = getClassName([
        "bbr-paginator",
        "pagination",
        className,
        getPositionClassName(position),
        rounded ? "is-rounded" : "",
        getSizeClassName(size),
    ]);

    const dataAttributes = mapDataAttributes(data);

    return (
        <nav
            {...dataAttributes}

            title={title}
            role="navigation"
            className={classNames}
            aria-label="pagination"
        >
            <PaginatorNextButtons
                size={size}
                goBack={goBack}
                rounded={rounded}
                goForward={goForward}
                canGoBack={canGoBack}
                resources={resources}
                pageChange={pageChange}
                currentPage={currentPage}
                canGoForward={canGoForward}
                showNextButtons={showNextButtons}
                nextButtonsConfig={nextButtonsConfig}
            />

            <PaginatorNavButtons
                size={size}
                count={count}
                goBack={goBack}
                rounded={rounded}
                goForward={goForward}
                resources={resources}
                canGoBack={canGoBack}
                pageChange={pageChange}
                pageNumbers={pageNumbers}
                currentPage={currentPage}
                canGoForward={canGoForward}
                pageButtonsConfig={pageButtonsConfig}
                nextButtonsConfig={nextButtonsConfig}
            />
        </nav>
    );
};

export default Paginator;

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
