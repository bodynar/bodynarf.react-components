import { MouseEvent, FC } from "react";

import { ActionFn, isNotNullish } from "@bodynarf/utils";

import Button from "@bbr/components/button";

import { PaginatorProps } from "../..";

/** Props for {@link PaginatorNextButtons} */
export type PaginatorNextButtonsProps =
    & Pick<
        PaginatorProps,
        | "nextButtonsConfig" | "showNextButtons"
        | "resources" | "currentPage" | "size" | "rounded"
    >
    & {
        /** Indicates if the previous page button should be enabled */
        canGoBack: boolean;

        /** Indicates if the next page button should be enabled */
        canGoForward: boolean;

        /** Function to go to the previous page */
        goBack: ActionFn;

        /** Function to go to the next page */
        goForward: ActionFn;

        /**
         * Function to handle page change event
         * @param event Mouse event triggered by clicking on a page link
         */
        pageChange: (event: MouseEvent<HTMLElement>) => void;
    };

/** Next\previous buttons component */
const PaginatorNextButtons: FC<PaginatorNextButtonsProps> = ({
    nextButtonsConfig, size, rounded,
    showNextButtons, resources, currentPage,
    canGoBack, canGoForward, goBack, goForward, pageChange,
}) => {
    const shouldBeVisibleByButtons = isNotNullish(nextButtonsConfig) && nextButtonsConfig.style === "aside";

    if (!showNextButtons && !shouldBeVisibleByButtons) {
        return null;
    }

    if (shouldBeVisibleByButtons) {
        return (
            <>
                <Button
                    {...nextButtonsConfig.previousButtonConfig}

                    size={size}
                    onClick={goBack}
                    rounded={rounded}
                    disabled={!canGoBack}
                />
                <Button
                    {...nextButtonsConfig.nextButtonConfig}

                    size={size}
                    rounded={rounded}
                    onClick={goForward}
                    disabled={!canGoForward}
                />
            </>
        );
    }

    return (
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
    );
};

export default PaginatorNextButtons;
