/** Position of element */
export enum ElementPosition {
    /** Left aligned */
    Left = "left",

    /** Center aligned */
    Center = "center",

    /** Right aligned */
    Right = "right",
}

/** Element position, but without center placement */
export type ElementFloatPosition = ElementPosition.Left | ElementPosition.Right;
