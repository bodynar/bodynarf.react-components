import { BaseNullableInputElementProps, BlurableElement, KeyboardElement } from "@bbr/types";

/** Time value representation */
export interface TimeValue {
    /** Hours (0-23) */
    hours: number;

    /** Minutes (0-59) */
    minutes: number;

    /** Seconds (0-59), optional */
    seconds?: number;
}

/** TimePicker component props type */
export type TimePickerProps = BaseNullableInputElementProps<TimeValue>
    & BlurableElement
    & KeyboardElement
    & {
        /**
         * Show seconds input.
         * @default false
         */
        showSeconds?: boolean;

        /**
         * Step for minutes (and seconds if shown).
         * See html input step documentation.
         * @default 1
         */
        step?: number;

        /**
         * Minimum time value (format: "HH:MM" or "HH:MM:SS").
         */
        min?: string;

        /**
         * Maximum time value (format: "HH:MM" or "HH:MM:SS").
         */
        max?: string;
    };
