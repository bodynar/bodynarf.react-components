import { Color } from "@bodynarf/utils";

import { BaseElementProps, InputLabel, ValidationState } from "@bbr";
import { CSSProperties } from "react";

/** Color picker props type */
export interface ColorPickerProps extends BaseElementProps {
    /** Default color value */
    defaultValue?: Color;

    /** Label configuration */
    label?: InputLabel;

    /** Change extra handler */
    onChange?: (color: Color) => void;

    /** Name of element. Required for form elements */
    name?: string;

    /** Should be component disabled. Selecting is not allowed */
    disabled?: boolean;

    /** Current validation state */
    validationState?: ValidationState;

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