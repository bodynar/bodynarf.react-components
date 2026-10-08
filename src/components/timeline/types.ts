import { BaseElementProps, ElementColor, SizableElement, StylableElement } from "@bbr/types";

/** Single timeline event item */
export interface TimelineItem extends StylableElement {
    /** Unique event identifier */
    id: string;

    /** Event title/label */
    title: string;

    /** Optional event description or content */
    content?: string;

    /** Optional timestamp or date string */
    timestamp?: string;

    /**
     * Optional bootstrap icon name (without `bi-` prefix).
     * @example "check", "person"
     */
    icon?: string;

    /**
     * Optional color override for this specific item
     * @deprecated [Will be removed in v1.18] Use `style` prop instead.
     */
    color?: ElementColor;

    /** Optional custom marker content (text or icon) */
    marker?: string;
}

/** Timeline component props */
export type TimelineProps =
    & BaseElementProps
    & SizableElement
    & StylableElement
    & {
        /** Array of timeline events to display */
        items: Array<TimelineItem>;

        /**
         * Default color for timeline markers
         * @deprecated [Will be removed in v1.18] Use `style` prop instead.
         */
        color?: ElementColor;

        /**
         * Display timeline on the left side (markers on left, content on right).
         * When false, timeline is centered with alternating content.
         * @default true
         */
        leftAligned?: boolean;

        /**
         * Show connector lines between events.
         * @default true
         */
        showConnectors?: boolean;

        /**
         * Use animated appearance for items.
         * @default false
         */
        animated?: boolean;

        /**
         * Show timestamps on separate side from content.
         * Only works when leftAligned is false (centered mode).
         * @default false
         */
        showTimestampsSeparate?: boolean;

        /**
         * Render markers as hollow (outlined) circles.
         * @default false
         */
        hollow?: boolean;
    };
