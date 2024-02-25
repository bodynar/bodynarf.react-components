import { BaseElementProps, ElementPosition, ElementSize } from "@bbr/components";

export interface PaginatorProps extends BaseElementProps {
    /** Amount of pages */
    count: number;

    /** Page change handler */
    onPageChange: (page: number) => void;

    /** Current page */
    currentPage?: number;

    /**
     * Page numbers position.
     * Useful with `showNextButtons = true`
    */
    position?: ElementPosition;

    /** Buttons should have rounded borders */
    rounded?: boolean;

    /** Size of paginator component elements */
    size?: ElementSize;

    /** Display "Previous" \ "Next" buttons */
    showNextButtons?: boolean;

    /**
     * Max amount of pages from left & right from current page. `3` by default
     * @description If set to 2 it will show `[1, 2], 3, [4, 5]`
    */
    nearPagesCount?: number;
}
