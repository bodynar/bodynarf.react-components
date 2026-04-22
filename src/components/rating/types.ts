import { BaseElementProps, ElementSize } from "@bbr/types";

/** Rating component props */
export type RatingProps = BaseElementProps & {
    /**
     * Current rating value (0 – `max`).
     * Supports half-steps (e.g. 3.5).
     */
    value?: number;

    /**
     * Maximum number of stars.
     * @default 5
     */
    max?: number;

    /**
     * Icon size for each star.
     * @default ElementSize.Normal
     */
    size?: ElementSize;

    /**
     * Render in read-only mode — no hover / click interactions.
     * @default false
     */
    readonly?: boolean;

    /**
     * Allow clearing the rating by clicking the currently selected star.
     * @default true
     */
    clearable?: boolean;

    /**
     * Allow half-star values (0.5 increments).
     * @default false
     */
    allowHalf?: boolean;

    /** Called when the user selects a value */
    onChange?: (value: number) => void;
};
