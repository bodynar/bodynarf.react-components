import { FC, MouseEvent } from "react";

import { ActionFn, getClassName, isNotNullish } from "@bodynarf/utils";

import { PaginatorProps } from "@bbr/components/paginator";
import Button from "@bbr/components/button";
import { ElementSize } from "@bbr/types";

import { PaginatorInternalNavButton } from "../navButton";

/** Mapping of element sizes to corresponding margin class names */
const paginatorInternalNavButtonSizeToMarginSizeMap: Map<ElementSize, 1 | 2 | 3 | 4> = new Map([
    [ElementSize.Small, 1],
    [ElementSize.Normal, 2],
    [ElementSize.Medium, 3],
    [ElementSize.Large, 4],
]);

/** Props for {@link PaginatorNavButtons} */
export type PaginatorNavButtonsProps =
    & Pick<
        PaginatorProps,
        | "currentPage" | "count" | "resources"
        | "nextButtonsConfig" | "pageButtonsConfig" | "rounded"
    >
    & Required<Pick<PaginatorProps, "size">>
    & {
        /** Array of page numbers to be displayed */
        pageNumbers: Array<number>;

        /** Indicates if the previous page button should be enabled */
        canGoBack: boolean;

        /** Indicates if the next page button should be enabled */
        canGoForward: boolean;

        /** Function to go to the previous page */
        goBack: ActionFn;

        /** Function to go to the next page */
        goForward: ActionFn;

        /** Function to handle page change event */
        pageChange: (event: MouseEvent<HTMLElement>) => void;
    };

/** Component for rendering paginator navigation buttons */
const PaginatorNavButtons: FC<PaginatorNavButtonsProps> = ({
    canGoBack, canGoForward, goBack, goForward,
    currentPage, count, resources,
    pageNumbers, pageChange, nextButtonsConfig, pageButtonsConfig,
    size, rounded,
}) => {
    const shouldNextButtonsBeShown = isNotNullish(nextButtonsConfig) && nextButtonsConfig.style === "inline";

    if (shouldNextButtonsBeShown) {
        const backButtonClassName = getClassName([
            nextButtonsConfig.previousButtonConfig.className,
            `mr-${paginatorInternalNavButtonSizeToMarginSizeMap.get(size) ?? 2}`,
        ]);

        const beforeButtonClassName = getClassName([
            nextButtonsConfig.nextButtonConfig.className,
            `ml-${paginatorInternalNavButtonSizeToMarginSizeMap.get(size) ?? 2}`,
        ]);

        return (
            <ul className="pagination-list">
                <Button
                    {...nextButtonsConfig.previousButtonConfig}

                    size={size}
                    onClick={goBack}
                    rounded={rounded}
                    disabled={!canGoBack}
                    className={backButtonClassName}
                />

                <PaginatorInternalNavButtons
                    size={size}
                    count={count}
                    rounded={rounded}
                    resources={resources}
                    pageChange={pageChange}
                    pageNumbers={pageNumbers}
                    currentPage={currentPage}
                    pageButtonsConfig={pageButtonsConfig}
                />

                <Button
                    {...nextButtonsConfig.nextButtonConfig}

                    size={size}
                    rounded={rounded}
                    onClick={goForward}
                    disabled={!canGoForward}
                    className={beforeButtonClassName}
                />
            </ul>
        );
    }

    return (
        <ul className="pagination-list">
            <PaginatorInternalNavButtons
                size={size}
                count={count}
                rounded={rounded}
                resources={resources}
                pageChange={pageChange}
                pageNumbers={pageNumbers}
                currentPage={currentPage}
                pageButtonsConfig={pageButtonsConfig}
            />
        </ul>
    );
};

export default PaginatorNavButtons;

/** Props for {@link PaginatorInternalNavButtons} */
type PaginatorInternalNavButtonsProps =
    & Pick<
        PaginatorNavButtonsProps,
        | "currentPage" | "count" | "resources"
        | "pageNumbers" | "pageChange" | "pageButtonsConfig"
        | "rounded"
    >
    & Required<Pick<PaginatorProps, "size">>;

// Internal reusable component
// eslint-disable-next-line react/no-multi-comp
const PaginatorInternalNavButtons: FC<PaginatorInternalNavButtonsProps> = ({
    currentPage, count, resources,
    pageNumbers, pageChange, size, rounded, pageButtonsConfig,
}) => {
    return (
        <>
            {currentPage !== 1 && !pageNumbers.includes(1) &&
                <>
                    <li>
                        <PaginatorInternalNavButton
                            page={1}
                            size={size}
                            isBeforeEllipsis
                            rounded={rounded}
                            onClick={pageChange}
                            resources={resources}
                            isCurrentPage={currentPage === 1}
                            pageButtonsConfig={pageButtonsConfig}
                            className={`pagination-link${currentPage === 1 ? " is-current" : ""}`}
                        />
                    </li>
                    <li>
                        <span className="pagination-ellipsis">
                            &hellip;
                        </span>
                    </li>
                </>
            }

            {pageNumbers.map((x, i) =>
                <li
                    key={x}
                >
                    <PaginatorInternalNavButton
                        page={x}
                        size={size}
                        rounded={rounded}
                        onClick={pageChange}
                        resources={resources}
                        isCurrentPage={currentPage === x}
                        pageButtonsConfig={pageButtonsConfig}
                        isBeforeEllipsis={i === pageNumbers.length - 1}
                        className={`pagination-link${currentPage === x ? " is-current" : ""}`}
                    />
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
                        <PaginatorInternalNavButton
                            size={size}
                            page={count}
                            isBeforeEllipsis
                            rounded={rounded}
                            onClick={pageChange}
                            resources={resources}
                            className="pagination-link"
                            pageButtonsConfig={pageButtonsConfig}
                        />
                    </li>
                </>
            }
        </>
    );
};
