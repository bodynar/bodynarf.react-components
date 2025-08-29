import { ChangeEvent, useCallback } from "react";

import { emptyFn, generateGuid, getClassName, isNullOrUndefined } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { getStyleClassName, mapDataAttributes } from "@bbr/utils";
import ComponentWithLabel from "@bbr/internalComponent/componentWithLabel";
import InternalHint from "@bbr/internalComponent/hint";

import { MultilineProps } from "../..";

/** Multiline textual input component with describing label */
const MultilineWithLabel = ({
    defaultValue, onValueChange = emptyFn, validationState,
    name = generateGuid(),
    size = ElementSize.Normal, style,
    label, placeholder,
    readonly = false, disabled = false,
    loading = false, fixed = false, autoFocus = false,
    rows,
    onBlur,

    className, title, data,
    hint,
}: MultilineProps): JSX.Element => {
    const onChange = useCallback(
        (event: ChangeEvent<HTMLTextAreaElement>) => onValueChange(event.target.value),
        [onValueChange]
    );

    const elClassName = getClassName([
        className,
        size === ElementSize.Normal ? "" : `is-${size}`,
        getStyleClassName(style, validationState),
        "textarea",
        fixed ? "has-fixed-size" : "",
    ]);

    const inputContainerClassName = getClassName([
        "control",
        loading ? "is-loading" : "",
    ]);

    const dataAttributes = isNullOrUndefined(data)
        ? undefined
        : mapDataAttributes(data!);

    return (
        <ComponentWithLabel
            id={name}
            size={size}
            label={label!}
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
        </ComponentWithLabel>
    );
};

export default MultilineWithLabel;
