import { FC, MouseEventHandler } from "react";

import { getClassName, isNotNullish } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { PaginatorProps } from "@bbr/components/paginator";
import Button from "@bbr/components/button";

/** Mapping of element sizes to corresponding margin class names */
const PaginatorInternalNavButtonSizeToMarginClassNameMap: Map<ElementSize, string> = new Map([
    [ElementSize.Small, "mr-1"],
    [ElementSize.Normal, "mr-2"],
    [ElementSize.Medium, "mr-3"],
    [ElementSize.Large, "mr-4"],
]);

/** Props for {@link PaginatorInternalNavButton} */
export type PaginatorInternalNavButtonProps =
    & Pick<
        PaginatorProps,
        "pageButtonsConfig" | "resources" | "rounded"
    >
    & Required<Pick<PaginatorProps, "size">>
    & {
        /** Target page number for the button */
        page: number;

        /** CSS class for the button */
        className: string;

        /** Indicates if the button represents the current page */
        isCurrentPage?: boolean;

        /** Indicates if the button is positioned before an ellipsis */
        isBeforeEllipsis?: boolean;

        /** Click event handler for the button */
        onClick: MouseEventHandler<HTMLElement>;
    };

/** Internal reusable component for paginator navigation button */
export const PaginatorInternalNavButton: FC<PaginatorInternalNavButtonProps> = ({
    page, className, onClick, isCurrentPage = false,
    pageButtonsConfig, size, resources, rounded, isBeforeEllipsis = false,
}) => {
    if (isNotNullish(pageButtonsConfig)) {
        const buttonClassName = getClassName([
            isCurrentPage
                ? pageButtonsConfig.active.className
                : pageButtonsConfig.default.className,
            isBeforeEllipsis ? undefined : PaginatorInternalNavButtonSizeToMarginClassNameMap.get(size),
        ]);

        return (
            <Button
                {...(isCurrentPage
                    ? pageButtonsConfig.active
                    : pageButtonsConfig.default
                )}

                size={size}
                data={{ page }}
                rounded={rounded}
                onClick={onClick}
                caption={String(page)}
                className={buttonClassName}
                title={isCurrentPage ? undefined : resources?.openConcretePageTitleTemplate?.format(page)}
            />
        );
    }

    return (
        <a
            data-page={page}
            onClick={onClick}
            className={className}
            aria-label={resources?.openConcretePageTitleTemplate?.format(page)}
            title={isCurrentPage ? undefined : resources?.openConcretePageTitleTemplate?.format(page)}
        >
            {page}
        </a>
    );
};
