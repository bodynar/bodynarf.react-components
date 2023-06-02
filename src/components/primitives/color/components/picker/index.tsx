import { ChangeEvent } from "react";

import { getFontColorFromString } from "@bodynarf/utils";

import { ColorPickerCssProperties } from "../..";

/** Color picker control container props */
export interface ColorPickerControlProps {
    /** Class names of control container */
    containerClassName: string;

    /** Class names of control */
    className: string;

    /** Default value for color control */
    defaultColor: string;

    /** Handler of control value change*/
    onValueChange: (event: ChangeEvent<HTMLInputElement>) => void;

    /** Control unique identifier */
    id: string;

    /** Extra data-* attributes */
    dataAttributes?: object;

    /** Is validation should be displayed */
    isValidationDefined: boolean;

    /** Validation messages */
    validationMessages: Array<string>;

    /** Validation style class name */
    styleClassName: string;

    /** Current color value */
    value: string;

    /** Should be component disabled. Selecting is not allowed */
    disabled?: boolean;

    /**
     * Show text with color preview.
     * If set - outlined button-like element on the right will be rendered
     */
    showPreview?: boolean;

    /** Title */
    title?: string;
}

/** Color picker container component */
const ColorPickerControl = ({
    containerClassName, className,
    disabled, showPreview,
    defaultColor, onValueChange, value,
    id, title, dataAttributes,

    isValidationDefined, validationMessages, styleClassName,
}: ColorPickerControlProps): JSX.Element => {
    const color = getFontColorFromString(value);

    if (showPreview) {
        return (
            <div className="columns">
                <div className={containerClassName}>
                    <input
                        type="color"
                        className={className}
                        disabled={disabled}
                        defaultValue={defaultColor}
                        onChange={onValueChange}
                        name={id}
                        id={id}
                        title={title}
                        {...dataAttributes}
                    />
                </div>
                <div className="column is-2">
                    <button
                        className="bbr-color-picker__preview button is-outlined"
                        style={{
                            "--color-picker__background-color": value,
                            "--color-picker__color": color,
                        } as ColorPickerCssProperties}
                    >
                        {value}
                    </button>
                </div>
                {isValidationDefined && validationMessages.length > 0 &&
                    <p className={`help m-help ${styleClassName}`}>{validationMessages.join("\n")}</p>
                }
            </div>
        );
    }

    return (
        <>
            <div className={containerClassName}>
                <input
                    type="color"
                    className={className}
                    disabled={disabled}
                    defaultValue={defaultColor}
                    onChange={onValueChange}
                    name={id}
                    id={id}
                    title={title}
                    {...dataAttributes}
                />
            </div>
            {isValidationDefined && validationMessages.length > 0 &&
                <p className={`help m-help ${styleClassName}`}>{validationMessages.join("\n")}</p>
            }
        </>
    );
};

export default ColorPickerControl;
