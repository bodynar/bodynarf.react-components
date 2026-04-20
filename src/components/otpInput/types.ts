import { BaseElementProps, ElementColor, ElementSize } from "@bbr/types";

/** OtpInput component props */
export type OtpInputProps = BaseElementProps & {
    /** Current OTP string value (length <= `length`) */
    value: string;

    /**
     * Number of character cells.
     * @default 6
     */
    length?: number;

    /**
     * Input type — "text" or "password".
     * @default "text"
     */
    type?: "text" | "password";

    /**
     * Restrict input to digits only.
     * @default true
     */
    numbersOnly?: boolean;

    /**
     * Auto-focus the first cell on mount.
     * @default false
     */
    autoFocus?: boolean;

    /**
     * Disable all cells.
     * @default false
     */
    disabled?: boolean;

    /**
     * Border colour applied to all cells.
     * @default ElementColor.Default
     */
    color?: ElementColor;

    /**
     * Size variant.
     * @default ElementSize.Normal
     */
    size?: ElementSize;

    /** Called with the new full string on every change */
    onChange: (value: string) => void;
};
