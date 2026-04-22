import { BaseElementProps, ElementColor, ElementSize } from "@bbr/types";
import { ButtonProps } from "../button";

/** Possible display modes of the calendar panel */
export type CalendarView = "days" | "month-picker" | "year-picker";

/** Calendar panel component props */
export type CalendarProps = BaseElementProps & {
    /** Currently selected date */
    value?: Date;

    /** Bulma color style applied to accent elements and the panel border */
    style?: ElementColor;

    /** Component size; controls font size and minimum panel width */
    size?: ElementSize;

    /** Minimum selectable date (inclusive). Days before this date are rendered as disabled */
    minDate?: Date;

    /** Maximum selectable date (inclusive). Days after this date are rendered as disabled */
    maxDate?: Date;

    /** Configuration for the "Today" button in the calendar footer */
    todayButtonConfig?: CalendarFooterButtonConfig;

    /** Configuration for the "Clear" button in the calendar footer */
    clearButtonConfig?: Omit<CalendarFooterButtonConfig, "light">;

    /** Initial view mode when the panel mounts. Defaults to the day-grid view */
    initialView?: "month" | "year";

    /**
     * BCP 47 locale tag used to localise month names and weekday labels.
     * @example "en-US" | "ru-RU" | "de-DE"
     * @default "en-US"
     */
    locale?: string;

    /** Start bound of an active date range. When set, single-selection highlighting is suppressed */
    rangeStart?: Date;

    /** Confirmed end bound of the date range */
    rangeEnd?: Date;

    /** Tentative hover date shown as a preview range end while the user picks the second bound */
    hoverDate?: Date;

    /**
     * Accessible label for the "previous" navigation button.
     * @default "Previous"
     */
    prevLabel?: string;

    /**
     * Accessible label for the "next" navigation button.
     * @default "Next"
     */
    nextLabel?: string;

    /** Called when the pointer enters a day cell; called with undefined when the pointer leaves the grid */
    onDayHover?: (date: Date | undefined) => void;

    /** Called when the user selects a day or clears the selection */
    onChange?: (date?: Date) => void;
};

/** Configuration for footer buttons in the calendar panel */
export type CalendarFooterButtonConfig = Omit<
    ButtonProps,
    | "onClick" | "static" | "size" | "disabled" | "style"
>;
