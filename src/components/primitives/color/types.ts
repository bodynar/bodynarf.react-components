import { CSSProperties } from "react";

import { Color } from "@bodynarf/utils";

import { ElementFloatPosition, BaseInputElementProps } from "@bbr/types";

/** Color picker props type */
export interface ColorPickerProps extends Omit<BaseInputElementProps<Color>,
    | "style" | "loading"
    | "readonly" | "placeholder"
> {
    /**
     * Preview text configuration.
     * If provided - outlined button-like element will be rendered near picker according to configuration
     */
    preview?: ColorPickerPreviewConfig;
}

/** Color picker custom css properties */
export interface ColorPickerCssProperties extends CSSProperties {
    /** Selected color to use as background color */
    "--color-picker__background-color": string;

    /** Color of text to contrast with background color */
    "--color-picker__color": string;
}

/** Configuration type for preview element of color picker */
export interface ColorPickerPreviewConfig {
    /** Placement of preview element */
    position: ElementFloatPosition;
}
