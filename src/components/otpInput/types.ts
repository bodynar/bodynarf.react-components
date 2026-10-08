import { BaseElementProps, DisableableElement, ElementColor, SizableElement, StylableElement } from "@bbr/types";

/** OtpInput component props */
export type OtpInputProps =
    & BaseElementProps
    & SizableElement
    & DisableableElement
    & StylableElement
    & {
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
         * Border colour applied to all cells.
         * @deprecated [Will be removed in v1.18] Use `style` prop instead.
         * @default ElementColor.Default
         */
        color?: ElementColor;

        /** Called with the new full string on every change */
        onChange: (value: string) => void;
    };
