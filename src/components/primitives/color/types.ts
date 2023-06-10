import { CSSProperties } from "react";

import { Color } from "@bodynarf/utils";

import { BaseInputElementProps } from "@bbr";

/** Color picker props type */
export interface ColorPickerProps extends Omit<BaseInputElementProps<Color>,
    "style" | "loading"
    | "size" | "readonly" | "placeholder"
> {
    /**
     * Show text with color preview.
     * If set - outlined button-like element on the right will be rendered
     */
    showPreview?: boolean;
}

/** Color picker custom css properties */
export interface ColorPickerCssProperties extends CSSProperties {
    /** Selected color to use as background color */
    "--color-picker__background-color": string;

    /** Color of text to contrast with background color */
    "--color-picker__color": string;
}