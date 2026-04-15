import { BaseElementProps, ElementPosition, ElementSize } from "@bbr/types";
import { ButtonProps } from "@bbr/components/button";

/** Configuration for the next buttons */
export type PaginatorDirectionStepButtonConfig = Omit<
    ButtonProps,
    | "onClick" | "disabled" | "size" | "rounded" | "caption"
>;

/** Props for {@link Paginator} component */
export type PaginatorProps = BaseElementProps & {
    /** Amount of pages */
    count: number;

    /** Current page */
    currentPage: number;

    /**
     * Page numbers position.
     * Useful with `showNextButtons = true`
    */
    position?: ElementPosition;

    /** Buttons should have rounded borders */
    rounded?: boolean;

    /** Size of paginator component elements */
    size?: ElementSize;

    /** Configuration for next buttons */
    nextButtonsConfig?: {
        /** Configuration for the previous button */
        previousButtonConfig: PaginatorDirectionStepButtonConfig & Pick<ButtonProps, "caption">;

        /** Configuration for the next button */
        nextButtonConfig: PaginatorDirectionStepButtonConfig & Pick<ButtonProps, "caption">;

        /** Buttons placement relative to page numbers: beside pages or at outer edges */
        style: "inline" | "aside";
    };

    /**
     * Display "Previous" \ "Next" buttons.
     * @deprecated Use `nextButtonsConfig` prop instead
     * @example
     * <Paginator
     *   ...
     *   nextButtonsConfig={{
     *     previousButtonConfig: { ... },
     *     nextButtonConfig: { ... }
     *   }}
     * />
     */
    showNextButtons?: boolean;

    /**
     * Max amount of pages from left & right from current page. `3` by default
     * @description If set to 2 it will show `[1, 2], 3, [4, 5]`
    */
    nearPagesCount?: number;

    /**
     * Resources for paginator component. Used for buttons captions and titles.
     * If not set, default values will be used.
     */
    resources?: {
        /**
         * Previous page button caption
         * @default "Previous"
         * @deprecated Use `nextButtonsConfig.previousButtonConfig.caption` prop instead
         */
        previousPageCaption?: string;

        /**
         * Previous page button title.
         * Visible only if set
         * @deprecated Use `nextButtonsConfig.previousButtonConfig.title` prop instead
         */
        previousPageTitle?: string;

        /**
         * Next page button caption
         * @default "Next page"
         * @deprecated Use `nextButtonsConfig.nextButtonConfig.caption` prop instead
         */
        nextPageCaption?: string;

        /**
         * Next page button title.
         * Visible only if set
         * @deprecated Use `nextButtonsConfig.nextButtonConfig.title` prop instead
         */
        nextPageTitle?: string;

        /**
         * Title for button for opening concrete page by its number.
         * Must be template with 1 parameter.
         * @example openConcretePageTitleTemplate="Open {0} page"
         */
        openConcretePageTitleTemplate?: string;
    };

    /**
     * Configuration for page buttons (with page numbers).
     * If set page number buttons will be rendered as `Button` components with full styling support.
     */
    pageButtonsConfig?: PaginatorDirectionStepButtonConfig;

    /** Page change handler */
    onPageChange: (page: number) => void;
};
