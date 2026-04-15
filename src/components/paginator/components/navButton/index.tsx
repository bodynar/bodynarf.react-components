import { FC, MouseEventHandler } from "react";

import { getClassName, isNotNullish } from "@bodynarf/utils";
import { PaginatorProps } from "@bbr/components/paginator";
import Button from "@bbr/components/button";

/** Props for {@link PaginatorInternalNavButton} */
export type PaginatorInternalNavButtonProps =
    & Pick<
        PaginatorProps,
        "pageButtonsConfig" | "size" | "resources" | "rounded"
    >
    & {
        /** Target page number for the button */
        page: number;

        /** CSS class for the button */
        className: string;

        /** Indicates if the button represents the current page */
        isCurrentPage?: boolean;

        /** Click event handler for the button */
        onClick: MouseEventHandler<HTMLElement>;
    };

/** Internal reusable component for paginator navigation button */
export const PaginatorInternalNavButton: FC<PaginatorInternalNavButtonProps> = ({
    page, className, onClick, isCurrentPage = false,
    pageButtonsConfig, size, resources, rounded,
}) => {
    if (isNotNullish(pageButtonsConfig)) {
        const buttonClassName = getClassName([
            pageButtonsConfig.className,
            className,
        ]);

        return (
            <Button
                {...pageButtonsConfig}

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
