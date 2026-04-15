import { useCallback, useMemo, MouseEvent, FC } from "react";

import { getClassName, isNullOrEmpty, isNullish } from "@bodynarf/utils";

import { getPositionClassName, getSizeClassName, mapDataAttributes } from "@bbr/utils";
import { ElementPosition, ElementSize } from "@bbr/types";

import { PaginatorProps } from "../..";
import { generatePageNumbers } from "../utils";
import PaginatorNextButtons from "../components/nextButtons";
import PaginatorNavButtons from "../components/navButtons";

/**
 * Paginator component.
 * Used for visualization of paging configuration
*/
const Paginator: FC<PaginatorProps> = ({
    count, onPageChange, currentPage = 1,
    position = ElementPosition.Left, size = ElementSize.Normal,
    rounded = false,
    nearPagesCount = 3, resources,
    showNextButtons = false, nextButtonsConfig, pageButtonsConfig,

    className, title, data,
}) => {
    const pageNumbers = useMemo(() => generatePageNumbers(currentPage, count, nearPagesCount), [currentPage, count, nearPagesCount]);

    const canGoBack = useMemo(() => currentPage > 1, [currentPage]);
    const canGoForward = useMemo(() => currentPage < count, [currentPage, count]);

    const goBack = useCallback(() => onPageChange(currentPage - 1), [currentPage, onPageChange]);
    const goForward = useCallback(() => onPageChange(currentPage + 1), [currentPage, onPageChange]);

    const pageChange = useCallback(
        (event: MouseEvent<HTMLElement>) => {
            const target = event.currentTarget;

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

    if (currentPage > count) {
        if (count > 0) {
            console.error(`[Paginator] currentPage (${currentPage}) is greater than count (${count})`);
        }

        return null;
    }

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
