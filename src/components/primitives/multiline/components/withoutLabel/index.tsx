import { ChangeEvent, FC, useCallback } from "react";

import { emptyFn, generateGuid, getClassName, isNullOrUndefined } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { getSizeClassName, getStyleClassName, mapDataAttributes } from "@bbr/utils";
import InternalHint from "@bbr/internalComponent/hint";

import { MultilineProps } from "../..";

/** Multiline textual input component without describing label*/
const MultilineWithoutLabel: FC<MultilineProps> = ({
    defaultValue, onValueChange = emptyFn, validationState,
    name = generateGuid(),
    size = ElementSize.Normal, style,
    placeholder,
    readonly = false, disabled = false,
    loading = false, fixed = false, autoFocus = false,
    rows,
    onBlur,

    className, title, data,
    hint,
}) => {
    const onChange = useCallback(
        (event: ChangeEvent<HTMLTextAreaElement>) => onValueChange(event.target.value),
        [onValueChange]
    );

    const elClassName = getClassName([
        className,
        getSizeClassName(size, ElementSize.Normal),
        getStyleClassName(style, validationState),
        "textarea",
        fixed ? "has-fixed-size" : "",
    ]);

    const inputContainerClassName = getClassName([
        "control",
        "bbr-input",
        loading ? "is-loading" : "",
    ]);

    const dataAttributes = isNullOrUndefined(data)
        ? undefined
        : mapDataAttributes(data!);

    return (
        <div
            className="bbr-field field"
        >
            <div className={inputContainerClassName}>
                <textarea
                    id={name}
                    name={name}
                    rows={rows}
                    onBlur={onBlur}
                    readOnly={readonly}
                    disabled={disabled}
                    onChange={onChange}
                    autoFocus={autoFocus}
                    className={elClassName}
                    placeholder={placeholder}
                    defaultValue={defaultValue}

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
};

export default MultilineWithoutLabel;
