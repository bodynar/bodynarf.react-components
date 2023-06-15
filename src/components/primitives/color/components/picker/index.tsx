import { ChangeEvent } from "react";

import { getClassName, getFontColorFromString, isNullOrUndefined } from "@bodynarf/utils";

import { ElementPosition, ElementSize } from "@bbr";
import { ColorPickerCssProperties, ColorPickerPreviewConfig } from "../..";

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

    /** Preview element configuration */
    previewConfig?: ColorPickerPreviewConfig;

    /** Component size */
    size?: ElementSize;

    /** Title */
    title?: string;
}

/** Color picker container component */
const ColorPickerControl = ({
    containerClassName, className,
    disabled, previewConfig, size,
    defaultColor, onValueChange, value,
    id, title, dataAttributes,

    isValidationDefined, validationMessages, styleClassName,
}: ColorPickerControlProps): JSX.Element => {
    if (!isNullOrUndefined(previewConfig)) {
        return <PickerWithPreview
            containerClassName={containerClassName}
            className={className}
            disabled={disabled}
            size={size}
            defaultColor={defaultColor}
            onValueChange={onValueChange}
            value={value}
            id={id}
            title={title}
            dataAttributes={dataAttributes}
            previewConfig={previewConfig}
            isValidationDefined={isValidationDefined}
            validationMessages={validationMessages}
            styleClassName={styleClassName}
        />;
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

/** Picker sub component with preview */
const PickerWithPreview = ({
    containerClassName, className,
    disabled, size,
    defaultColor, onValueChange, value,
    id, title, dataAttributes,
    previewConfig,
    isValidationDefined, validationMessages, styleClassName,
}: ColorPickerControlProps): JSX.Element => {
    const classNames = getClassName([
        "bbr-color-picker__preview",
        "button",
        "is-outlined",
        isNullOrUndefined(size) ? "" : `is-${size}`
    ]);

    const color = getFontColorFromString(value);

    const controlClassNames = getClassName([
        className,
        "is-flex-grow-0",
        previewConfig!.position === ElementPosition.Left ? "ml-1" : "mr-1"
    ]);

    if (previewConfig!.position === ElementPosition.Left) {
        return (
            <div className="is-flex is-flex-direction-row is-flex-wrap-nowrap is-justify-content-start">
                <div className={containerClassName}>
                    <button
                        className={classNames}
                        style={{
                            "--color-picker__background-color": value,
                            "--color-picker__color": color,
                        } as ColorPickerCssProperties}
                    >
                        {value}
                    </button>
                    <input
                        type="color"
                        className={controlClassNames}
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
            </div>
        );
    }

    return (
        <div className="is-flex is-flex-direction-row is-flex-wrap-nowrap is-justify-content-start">
            <div className={containerClassName}>
                <input
                    type="color"
                    className={controlClassNames}
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
                    className={classNames}
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
