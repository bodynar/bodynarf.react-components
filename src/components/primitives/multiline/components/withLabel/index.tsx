import { ChangeEvent, useCallback } from "react";

import { generateGuid, getClassName, getValueOrDefault, isNullOrUndefined } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { getStyleClassName, mapDataAttributes } from "@bbr/utils";

import { MultilineProps } from "@bbr/components/multiline";
import ComponentWithLabel from "@bbr/components/primitives/internal/componentWithLabel";
import InternalHint from "@bbr/components/primitives/internal/hint";

/** Multiline textual input component with describing label */
const MultilineWithLabel = ({
    defaultValue, onValueChange, validationState, readonly, disabled,
    name,
    size, style, loading = false,
    label, placeholder,
    fixed = false, rows,
    onBlur,

    className, title, data,
    hint,
}: MultilineProps): JSX.Element => {
    const onChange = useCallback(
        (event: ChangeEvent<HTMLTextAreaElement>) => onValueChange(event.target.value),
        [onValueChange]
    );

    const id = name ?? generateGuid();
    const elSizeClassName = "is-{0}".format(getValueOrDefault(size, ElementSize.Normal));

    const elClassName = getClassName([
        className,
        elSizeClassName,
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
            id={id}
            label={label!}
            size={getValueOrDefault(size, ElementSize.Normal)}
        >
            <div className={inputContainerClassName}>
                <textarea
                    id={id}
                    name={id}
                    rows={rows}
                    onBlur={onBlur}
                    readOnly={readonly}
                    disabled={disabled}
                    onChange={onChange}
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
