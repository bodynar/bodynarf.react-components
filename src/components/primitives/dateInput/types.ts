import { BaseInputElementProps, BaseNullableInputElementProps, BlurableElement, KeyboardElement } from "@bbr/types";
import { CalendarProps } from "../../calendar";

/** DateInput component props */
export type DateInputProps =
    & Omit<BaseNullableInputElementProps<Date>, "placeholder">
    & BlurableElement
    & KeyboardElement
    & {
        /**
         * Date format pattern.
         * @default "dd.MM.yyyy"
         */
        format?: string;

        /**
         * Locale for calendar.
         * @default "en-US"
         */
        locale?: string;

        /** Minimum selectable date */
        minDate?: Date;

        /** Maximum selectable date */
        maxDate?: Date;

        /** Calendar appearance configuration */
        calendarConfig?: Omit<CalendarProps,
            | "value" | "onChange"
            | "minDate" | "maxDate"
            | "locale" | "size" | "style"
            | "rangeStart" | "rangeEnd" | "hoverDate" | "onDayHover"
            | "className" | "title" | "data"
        >;

        /** Label configuration. When provided, input is wrapped with a label */
        label?: BaseInputElementProps<unknown>["label"];
    };

/**
 * Parsed date format descriptor.
 * Used internally for masking and validation.
 */
export type DateFormatDescriptor = {
    /** Separator character (e.g. ".", "/", "-") */
    separator: string;

    /** Ordered parts of the format */
    parts: Array<DateFormatPart>;
};

/** Single part of a date format */
export type DateFormatPart = {
    /** Type of the part */
    type: "day" | "month" | "year";

    /** Length of the part (2 or 4) */
    length: number;

    /** Start index in the formatted string */
    start: number;

    /** End index in the formatted string (exclusive) */
    end: number;
};
