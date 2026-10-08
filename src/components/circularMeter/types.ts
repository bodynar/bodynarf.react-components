import { BaseElementProps, ElementColor, SizableElement, StylableElement } from "@bbr/types";

/** Circular progress meter props. */
export type CircularMeterProps =
    & BaseElementProps
    & SizableElement
    & StylableElement
    & {
        /** Current value. */
        value: number;

        /** Minimum value. @default 0 */
        min?: number;

        /** Maximum value. @default 100 */
        max?: number;

        /** Step used in the interactive mode (drag / arrow keys). @default 1 */
        step?: number;

        /**
         * Color of the value arc.
         * @deprecated [Will be removed in v1.18] Use `style` prop instead.
         */
        color?: ElementColor;

        /** CSS color of the background track (overrides the default). */
        trackColor?: string;

        /** Stroke width of the arc and track (in viewBox units). @default 10 */
        strokeWidth?: number;

        /** Caption rendered under the value in the center. */
        label?: string;

        /** Value template; `{value}` is replaced with the current value. @default "{value}" */
        valueTemplate?: string;

        /** Read-only mode. When `false` the meter is interactive (drag / arrow keys). @default true */
        readonly?: boolean;

        /** Called with the new value when the user interacts with the meter. */
        onChange?: (value: number) => void;
    };
