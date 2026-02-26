import { BaseNotNullableInputElementProps, BlurableElement } from "@bbr/types";

/** Slider/Range component props type */
export type SliderProps = Omit<BaseNotNullableInputElementProps<number>,
    | "readonly" | "validationState"
    | "loading" | "placeholder"
    | "hint" | "autofocus"
    | "label" | "rounded"
> & BlurableElement & {
    /** Minimum value */
    min?: number;

    /** Maximum value */
    max?: number;

    /**
     * Step increment.
     * @default 1
     */
    step?: number;

    /**
     * Display current value as tooltip/bubble above the slider.
     * @default false
     */
    showValue?: boolean;

    /**
     * Position of the value tooltip in horizontal mode.
     * @default "top"
     */
    valuePosition?: "top" | "bottom";

    /**
     * Display min and max labels below the slider.
     * @default false
     */
    showMinMax?: boolean;

    /**
     * Fill the track from start to current value with color.
     * @default true
     */
    showProgress?: boolean;

    /**
     * Make the slider vertical instead of horizontal.
     * @default false
     */
    vertical?: boolean;

    /**
     * Height of the slider in vertical mode (in px or any CSS unit).
     * @default "200px"
     */
    verticalHeight?: string;

    /**
     * Display as circle/rounded style.
     * @default false
     */
    circle?: boolean;

    /**
     * Format the displayed value.
     * Used when `showValue` is true.
     * @example (value) => `${value}%`
     * @example (value) => `${value}°C`
     */
    valueFormatter?: (value: number) => string;
};
