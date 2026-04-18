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

    /** Called when the user selects a day or clears the selection */
    onChange?: (date?: Date) => void;
};

/** Configuration for footer buttons in the calendar panel */
export type CalendarFooterButtonConfig = Omit<
    ButtonProps,
    | "onClick" | "static" | "size" | "disabled" | "style"
>;
