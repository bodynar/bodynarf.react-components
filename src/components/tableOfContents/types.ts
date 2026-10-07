import { BaseElementProps } from "@bbr/types";

/** A single entry in a {@link TableOfContentsProps} list. */
export type TableOfContentsItem = {
    /** Visible text of the entry. */
    label: string;

    /** CSS selector of the target element to observe and scroll to (e.g. `"#section-1"`). */
    anchor: string;

    /** Nesting level used to indent the entry (`padding-left`). Defaults to `0`. */
    order?: number;
};

/**
 * Table of contents props.
 *
 * Renders a navigation list that highlights the currently visible section
 * (via `IntersectionObserver`) and smoothly scrolls to it on click.
 */
export type TableOfContentsProps =
    & BaseElementProps
    & {
        /** Ordered list of entries. */
        items: TableOfContentsItem[];
    };
