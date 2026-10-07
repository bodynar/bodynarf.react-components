import { BaseNullableInputElementProps, BlurableElement, ElementWithAddons, KeyboardElement } from "@bbr/types";

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
export type TimePickerProps =
    & BaseNullableInputElementProps<TimeValue>
    & BlurableElement
    & KeyboardElement
    & {
        /**
         * Control variant.
         * - `input` — single masked text input with keyboard segment stepping.
         * - `picker` — read-only display that opens a popover with scrollable time columns.
         * @default "input"
         */
        variant?: "input" | "picker";

        /**
         * Show seconds segment in the mask ("HH:mm:ss").
         * @default false
         */
        showSeconds?: boolean;

        /**
         * Kept for backward compatibility.
         * The masked input ignores it — arrow keys always step segments by 1.
         * @default 1
         */
        step?: number;

        /**
         * Minimum allowed time value (format: "HH:MM" or "HH:MM:SS").
         * Typed and stepped values outside the bounds are rejected.
         */
        min?: string;

        /**
         * Maximum allowed time value (format: "HH:MM" or "HH:MM:SS").
         * Typed and stepped values outside the bounds are rejected.
         */
        max?: string;
    }
    & {
        /** Controlled value. When provided, the picker operates in controlled mode. */
        value?: TimeValue;

        /**
         * Use a 12-hour mask ("hh:mm[:ss]") with an in-control AM/PM toggle
         * instead of the 24-hour mask. Values are still exchanged as 24h TimeValue.
         */
        use12Hours?: boolean;

        /** Show a clear (×) button that resets the value to `undefined`. */
        clearable?: boolean;

        /** Title attribute for the clear button. @default "Clear" */
        clearTitle?: string;
    }
    & ElementWithAddons;
