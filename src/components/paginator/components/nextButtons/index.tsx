import { FC } from "react";

import { ActionFn, getClassName, isNullish } from "@bodynarf/utils";

import Button from "@bbr/components/button";

import { PaginatorProps } from "../..";

/** Props for {@link PaginatorNextButtons} */
export type PaginatorNextButtonsProps =
    & Pick<PaginatorProps, "nextButtonsConfig" | "size" | "rounded">
    & {
        /** Indicates if the previous page button should be enabled */
        canGoBack: boolean;

        /** Indicates if the next page button should be enabled */
        canGoForward: boolean;

        /** Function to go to the previous page */
        goBack: ActionFn;

        /** Function to go to the next page */
        goForward: ActionFn;
    };

/** Previous\next buttons rendered at the outer edges (`nextButtonsConfig.style = "aside"`) */
const PaginatorNextButtons: FC<PaginatorNextButtonsProps> = ({
    nextButtonsConfig, size, rounded,
    canGoBack, canGoForward, goBack, goForward,
}) => {
    if (isNullish(nextButtonsConfig) || nextButtonsConfig.style !== "aside") {
        return null;
    }

    const previousClassName = getClassName([
        nextButtonsConfig.previousButtonConfig.className,
        "pagination-previous"
    ]);

    const nextClassName = getClassName([
        nextButtonsConfig.nextButtonConfig.className,
        "pagination-next"
    ]);

    return (
        <>
            <Button
                {...nextButtonsConfig.previousButtonConfig}

                size={size}
                onClick={goBack}
                rounded={rounded}
                disabled={!canGoBack}
                className={previousClassName}
            />
            <Button
                {...nextButtonsConfig.nextButtonConfig}

                size={size}
                rounded={rounded}
                onClick={goForward}
                disabled={!canGoForward}
                className={nextClassName}
            />
        </>
    );
};

export default PaginatorNextButtons;
