import { MouseEvent, FC } from "react";

import { ActionFn, isNotNullish, isNullish } from "@bodynarf/utils";

import Button from "@bbr/components/button";

import { PaginatorProps } from "../..";

export type PaginatorNextButtonsProps =
    & Pick<
        PaginatorProps,
        | "nextButtonsConfig" | "showNextButtons"
        | "resources" | "currentPage"
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
    nextButtonsConfig,
    showNextButtons, resources, currentPage,
    canGoBack, canGoForward, goBack, goForward, pageChange,
}) => {
    if (!showNextButtons && isNullish(nextButtonsConfig)) {
        return null;
    }

    if (isNotNullish(nextButtonsConfig)) {
        return (
            <>
                <Button
                    {...nextButtonsConfig.previousButtonConfig}

                    onClick={goBack}
                    disabled={!canGoBack}
                />
                <Button
                    {...nextButtonsConfig.nextButtonConfig}

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
