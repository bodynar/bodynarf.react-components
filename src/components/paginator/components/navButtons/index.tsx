import { FC, MouseEvent } from "react";

import { ActionFn, isNotNullish } from "@bodynarf/utils";
import { PaginatorProps } from "@bbr/components/paginator";
import Button from "@bbr/components/button";

import { PaginatorInternalNavButton } from "../navButton";

/** Props for {@link PaginatorNavButtons} */
export type PaginatorNavButtonsProps =
    & Pick<
        PaginatorProps,
        | "currentPage" | "count"
        | "resources"
        | "nextButtonsConfig" | "pageButtonsConfig"
        | "size" | "rounded"
    > & {
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
        return (
            <ul className="pagination-list">
                <Button
                    {...nextButtonsConfig.previousButtonConfig}

                    size={size}
                    onClick={goBack}
                    rounded={rounded}
                    disabled={!canGoBack}
                />

                <PaginatorInternalNavButtons
                    count={count}
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
                />
            </ul>
        );
    }

    return (
        <ul className="pagination-list">
            <PaginatorInternalNavButtons
                size={size}
                count={count}
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
type PaginatorInternalNavButtonsProps = Pick<
    PaginatorNavButtonsProps,
    | "currentPage" | "count" | "resources"
    | "pageNumbers" | "pageChange" | "pageButtonsConfig"
    | "size" | "rounded"
>;

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
                    <PaginatorInternalNavButton
                        page={x}
                        size={size}
                        rounded={rounded}
                        onClick={pageChange}
                        resources={resources}
                        isCurrentPage={currentPage === x}
                        pageButtonsConfig={pageButtonsConfig}
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


