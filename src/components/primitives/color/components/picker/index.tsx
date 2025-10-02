/* eslint-disable react/no-multi-comp */
import { ChangeEvent, FC } from "react";

import { getClassName, getFontColorFromString, isNotNullish, isNullish } from "@bodynarf/utils";

import { ElementPosition, BaseInputElementProps } from "@bbr/types";
import { getSizeClassName, mapDataAttributes } from "@bbr/utils";
import InternalHint from "@bbr/internalComponent/hint";

import { ColorPickerCssProperties, ColorPickerPreviewConfig } from "../..";

/** Props of `ColorPickerControl` */
export type ColorPickerControlProps = Omit<
    BaseInputElementProps<string>,
    | "placeholder"
    | "rounded" | "readonly"
    | "loading" | "className"
    | "onKeyDown" | "onKeyUp"
> & {
    /** Current color value */
    value: string;

    /** Control unique identifier */
    id: string;

    /** Class names of control */
    elementClassName: string;

    /** Preview element configuration */
    previewConfig?: ColorPickerPreviewConfig;

    /** Handler of control value change*/
    onValueChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

/** Color picker container component */
const ColorPickerControl: FC<ColorPickerControlProps> = ({
    value, defaultValue, onValueChange,
    elementClassName,
    disabled = false, autoFocus = false,
    previewConfig, size,
    id, title, data,

    hint, validationState,
}) => {
    if (isNotNullish(previewConfig)) {
        return (
            <PickerWithPreview
                id={id}
                size={size}
                data={data}
                value={value}
                title={title}
                disabled={disabled}
                defaultValue={defaultValue}
                onValueChange={onValueChange}
                previewConfig={previewConfig}
                elementClassName={elementClassName}
            />
        );
    }

    return (
        <>
            <div className="control bbr-input">
                <input
                    id={id}
                    name={id}
                    {...data}
                    type="color"
                    title={title}
                    disabled={disabled}
                    autoFocus={autoFocus}
                    onChange={onValueChange}
                    defaultValue={defaultValue}
                    className={elementClassName}
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
const PickerWithPreview: FC<
    & Omit<ColorPickerControlProps, "previewConfig">
    & Required<Pick<ColorPickerControlProps, "previewConfig">>
> = ({
    elementClassName,
    disabled, size,
    defaultValue, onValueChange, value, autoFocus = false,
    id, title, data,
    previewConfig,
    hint, validationState,
}) => {
        const classNames = getClassName([
            "bbr-color-picker__preview",
            "button",
            "is-outlined",
            getSizeClassName(size)
        ]);

        const color = getFontColorFromString(value);
        const dataAttributes = isNullish(data)
            ? undefined
            : mapDataAttributes(data);

        const controlContainerClassName = getClassName([
            "control",
            "bbr-input",
            "is-flex-grow-1",
            previewConfig.position === ElementPosition.Left ? "ml-1" : "mr-1",
        ]);

        if (previewConfig.position === ElementPosition.Right) {
            return (
                <div className="is-flex is-flex-direction-row is-flex-wrap-nowrap is-justify-content-start">
                    <div className={controlContainerClassName}>
                        <input
                            id={id}
                            name={id}
                            type="color"
                            title={title}
                            disabled={disabled}
                            {...dataAttributes}
                            autoFocus={autoFocus}
                            onChange={onValueChange}
                            defaultValue={defaultValue}
                            className={elementClassName}
                        />
                    </div>
                    <button
                        type="button"
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
        }

        return (
            <div className="is-flex is-flex-direction-row is-flex-wrap-nowrap is-justify-content-start">
                <button
                    type="button"
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
                        id={id}
                        name={id}
                        type="color"
                        title={title}
                        disabled={disabled}
                        {...dataAttributes}
                        autoFocus={autoFocus}
                        onChange={onValueChange}
                        defaultValue={defaultValue}
                        className={elementClassName}
                    />
                </div>
                <InternalHint
                    hint={hint}
                    validationState={validationState}
                />
            </div>
        );
    };
