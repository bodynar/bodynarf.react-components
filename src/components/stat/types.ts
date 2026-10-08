import { BaseElementProps, ElementColor, StylableElement } from "@bbr/types";

/** Direction of a statistic trend */
export enum StatTrendDirection {
    Up = "up",
    Down = "down",
    Neutral = "neutral",
}

/** Trend indicator attached to a stat */
export type StatTrend = {
    /** Trend label, e.g. "+12%" */
    label: string;

    /** Visual direction */
    direction: StatTrendDirection;
};

/** Stat component props */
export type StatProps =
    & BaseElementProps
    & StylableElement
    & {
        /** Primary numeric or text value */
        value: string | number;

        /** Descriptive label shown below the value */
        label: string;

        /** Bootstrap icon name (without `bi-` prefix) */
        icon?: string;

        /**
         * Accent colour applied to the icon badge.
         * @deprecated [Will be removed in v1.18] Use `style` prop instead.
         * @default ElementColor.Primary
         */
        color?: ElementColor;

        /** Optional trend badge */
        trend?: StatTrend;
    };
