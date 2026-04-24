import { BaseElementProps, ElementColor, ElementSize } from "@bbr/types";

/** A date range — start and end dates */
export type DateRange = {
    /** Range start date (inclusive) */
    start: Date | undefined;

    /** Range end date (inclusive) */
    end: Date | undefined;
};

/** DateRangePicker component props */
export type DateRangePickerProps = BaseElementProps & {
    /** Currently selected range */
    value?: DateRange;

    /**
     * Bulma color style applied to accent elements.
     * @default ElementColor.Primary
     */
    style?: ElementColor;

    /** Component size */
    size?: ElementSize;

    /** Minimum selectable date (inclusive) */
    minDate?: Date;

    /** Maximum selectable date (inclusive) */
    maxDate?: Date;

    /**
     * BCP 47 locale for month/weekday labels.
     * @default "en-US"
     */
    locale?: string;

    /** Optional overrides for all user-visible text strings */
    labelConfig?: DateRangePickerLabelConfig;

    /**
     * Render the calendar inside a Popover that opens on label click.
     * When `false` (default) the calendar is always visible below the label.
     * @default true
     */
    asPopover?: boolean;

    /** Called when both start and end are selected, or when cleared */
    onChange?: (range: DateRange) => void;
};

/** Configurable user-visible texts rendered by the date range picker */
export type DateRangePickerLabelConfig = {
    /**
     * Shown in the label bar when no start date has been selected yet.
     * @default "Select range"
     */
    placeholder?: string;

    /**
     * String rendered between the start and end date in the label bar.
     * @default " → "
     */
    separator?: string;

    /**
     * Appended to the start date while waiting for the end date to be picked.
     * @default "…"
     */
    pendingSuffix?: string;

    /**
     * Accessible label for the clear (×) button.
     * @default "Clear range"
     */
    clearAriaLabel?: string;
};
