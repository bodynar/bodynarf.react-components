import { ChangeEvent, useCallback } from "react";

import { generateGuid, getClassName, getValueOrDefault } from "@bodynarf/utils";

import { ElementSize } from "@bbr/components";
import { getValidationValues } from "@bbr/utils";

import { MultilineProps } from "@bbr/components/multiline";
import ComponentWithLabel from "@bbr/components/primitives/internal/componentWithLabel";

/** Multiline textual input component with describing label */
const MultilineWithLabel = ({
    defaultValue, onValueChange, validationState, readonly, disabled,
    name,
    className, size, style, loading = false,
    label, placeholder,
    fixed = false, rows,
    onBlur
}: MultilineProps): JSX.Element => {
    const onChange = useCallback(
        (event: ChangeEvent<HTMLTextAreaElement>) => onValueChange(event.target.value),
        [onValueChange]
    );

    const id = name || generateGuid();
    const elSizeClassName = "is-{0}".format(getValueOrDefault(size, ElementSize.Normal));

    const [isValidationDefined, styleClassName, validationMessages] = getValidationValues(style, validationState);

    const elClassName = getClassName([
        className,
        elSizeClassName,
        styleClassName,
        "textarea",
        fixed ? "has-fixed-size" : "",
    ]);

    const inputContainerClassName = getClassName([
        "control",
        loading ? "is-loading" : "",
    ]);

    return (
        <ComponentWithLabel
            id={id}
            label={label!}
            size={getValueOrDefault(size, ElementSize.Normal)}
        >
            <div className={inputContainerClassName}>
                <textarea
                    className={elClassName}
                    placeholder={placeholder}
                    readOnly={readonly}
                    disabled={disabled}
                    defaultValue={defaultValue}
                    onChange={onChange}
                    onBlur={onBlur}
                    name={id}
                    id={id}
                    rows={rows}
                />
            </div>
            {isValidationDefined && validationMessages.length > 0 &&
                <p className={`help m-help ${styleClassName}`}>{validationMessages.join("\n")}</p>
            }
        </ComponentWithLabel>
    );
};

export default MultilineWithLabel;
