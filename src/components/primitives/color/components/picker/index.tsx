import { ChangeEvent } from "react";

import { getClassName, getFontColorFromString, isNullOrUndefined } from "@bodynarf/utils";

import { ElementPosition } from "@bbr/types";
import { mapDataAttributes } from "@bbr/utils";
import { BaseInputElementProps } from "@bbr/components";
import InternalHint from "@bbr/components/primitives/internal/hint";
import { ColorPickerCssProperties, ColorPickerPreviewConfig } from "../..";

/** Props of `ColorPickerControl` */
export interface ColorPickerControlProps extends Omit<
    BaseInputElementProps<string>,
    | "onValueChange" | "placeholder"
    | "rounded" | "readonly"
    | "loading" | "className"
> {
    /** Preview element configuration */
    previewConfig?: ColorPickerPreviewConfig;

    /** Current color value */
    value: string;

    /** Control unique identifier */
    id: string;

    /** Class names of control */
    elementClassName: string;

    /** Handler of control value change*/
    onValueChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

/** Color picker container component */
const ColorPickerControl = ({
    elementClassName,
    disabled, previewConfig, size,
    defaultValue, onValueChange, value,
    id, title, data,

    hint, validationState,
}: ColorPickerControlProps): JSX.Element => {
    if (!isNullOrUndefined(previewConfig)) {
        return (
            <PickerWithPreview
                id={id}
                size={size}
                value={value}
                disabled={disabled}
                elementClassName={elementClassName}
                defaultValue={defaultValue}
                onValueChange={onValueChange}
                previewConfig={previewConfig}

                title={title}
                data={data}
            />
        );
    }

    return (
        <>
            <div className="control bbr-input">
                <input
                    type="color"

                    id={id}
                    name={id}
                    disabled={disabled}
                    className={elementClassName}
                    onChange={onValueChange}
                    defaultValue={defaultValue}

                    title={title}
                    {...data}
                />
            </div>
            <InternalHint
                hint={hint}
                validationState={validationState}
            />
        </>
    );
};

export default ColorPickerControl;

/** Picker sub component with preview */
const PickerWithPreview = ({
    elementClassName,
    disabled, size,
    defaultValue, onValueChange, value,
    id, title, data,
    previewConfig,
    hint, validationState,
}: ColorPickerControlProps): JSX.Element => {
    const classNames = getClassName([
        "bbr-color-picker__preview",
        "button",
        "is-outlined",
        isNullOrUndefined(size) ? "" : `is-${size}`
    ]);

    const color = getFontColorFromString(value);
    const dataAttributes = isNullOrUndefined(data)
        ? undefined
        : mapDataAttributes(data!);

    const controlContainerClassName = getClassName([
        "control",
        "bbr-input",
        "is-flex-grow-1",
        previewConfig!.position === ElementPosition.Left ? "ml-1" : "mr-1",
    ]);

    if (previewConfig!.position === ElementPosition.Left) {
        return (
            <div className="is-flex is-flex-direction-row is-flex-wrap-nowrap is-justify-content-start">
                <button
                    className={classNames}
                    style={{
                        "--color-picker__background-color": value,
                        "--color-picker__color": color,
                    } as ColorPickerCssProperties}
                >
                    {value}
                </button>
                <div className={controlContainerClassName}>
                    <input
                        type="color"

                        id={id}
                        name={id}
                        disabled={disabled}
                        onChange={onValueChange}
                        defaultValue={defaultValue}
                        className={elementClassName}

                        title={title}
                        {...dataAttributes}
                    />
                </div>
                <InternalHint
                    hint={hint}
                    validationState={validationState}
                />
            </div>
        );
    }

    return (
        <div className="is-flex is-flex-direction-row is-flex-wrap-nowrap is-justify-content-start">
            <div className={controlContainerClassName}>
                <input
                    type="color"

                    id={id}
                    name={id}
                    disabled={disabled}
                    onChange={onValueChange}
                    defaultValue={defaultValue}
                    className={elementClassName}

                    title={title}
                    {...dataAttributes}
                />
            </div>
            <button
                className={classNames}
                style={{
                    "--color-picker__background-color": value,
                    "--color-picker__color": color,
                } as ColorPickerCssProperties}
            >
                {value}
            </button>
            <InternalHint
                hint={hint}
                validationState={validationState}
            />
        </div>
    );
};
