import { ChangeEvent, FC, FocusEvent, useCallback } from "react";

import { emptyFn, generateGuid, getClassName, isStringEmpty } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { getSizeClassName, getStyleClassName, mapDataAttributes } from "@bbr/utils";
import InternalHint from "@bbr/internalComponent/hint";

import { NumberProps } from "../..";

/** Number component without label */
const NumberWithoutLabel: FC<NumberProps> = ({
    onValueChange = emptyFn, defaultValue, validationState,
    name = generateGuid(),
    size, style,
    readonly = false, disabled = false, autoFocus = false,
    rounded = false, loading = false,
    placeholder,
    onBlur,
    onKeyDown,
    onKeyUp,
    step = 1,
    resetToDefaultOnBlur = false,

    className, title, data,
    hint,
}) => {
    const onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) =>
            onValueChange(isStringEmpty(event.target.value) ? undefined : +event.target.value),
        [onValueChange]
    );

    const onInputBlur = useCallback(
        (event: FocusEvent<HTMLInputElement>) => {
            if (resetToDefaultOnBlur && isStringEmpty(event.target.value)) {
                const resetValue = defaultValue ?? 0;
                event.target.value = resetValue.toString();
                onValueChange(resetValue);
            }
            onBlur?.();
        },
        [resetToDefaultOnBlur, defaultValue, onValueChange, onBlur]
    );

    const elClassName = getClassName([
        className,
        getSizeClassName(size, ElementSize.Normal),
        rounded ? "is-rounded" : "",
        getStyleClassName(style, validationState),
        "input",
    ]);

    const containerClassName = getClassName([
        "control",
        "bbr-input",
        loading ? "is-loading" : "",
    ]);

    const dataAttributes = mapDataAttributes(data);

    return (
        <div
            className="bbr-field field"
        >
            <div className={containerClassName}>
                <input
                    id={name}
                    step={step}
                    name={name}
                    title={title}
                    type="number"
                    onKeyUp={onKeyUp}
                    onChange={onChange}
                    readOnly={readonly}
                    disabled={disabled}
                    {...dataAttributes}
                    onBlur={onInputBlur}
                    onKeyDown={onKeyDown}
                    autoFocus={autoFocus}
                    className={elClassName}
                    placeholder={placeholder}
                    defaultValue={defaultValue}
                />
            </div>
            <InternalHint
                hint={hint}
                validationState={validationState}
            />
        </div>
    );
};

export default NumberWithoutLabel;
