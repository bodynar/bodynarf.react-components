import { ChangeEvent, useCallback } from "react";

import { generateGuid, getClassName, getValueOrDefault, } from "@bodynarf/utils";

import { ElementSize } from "@bbr/components";
import { getValidationValues } from "@bbr/utils";

import { TextProps } from "@bbr/components/text";
import ComponentWithLabel from "@bbr/components/primitives/internal/componentWithLabel";

/** Textual input with describing label */
const TextWithLabel = ({
    onValueChange, readonly, disabled, defaultValue, validationState,
    name,
    className, size, style,
    rounded = false, loading = false,
    label, placeholder,
    onBlur,
}: TextProps): JSX.Element => {
    const onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => onValueChange(event.target.value),
        [onValueChange]
    );

    const id = name || generateGuid();
    const elSizeClassName = "is-{0}".format(getValueOrDefault(size, ElementSize.Normal));

    const [isValidationDefined, styleClassName, validationMessages] = getValidationValues(style, validationState);

    const elClassName = getClassName([
        className,
        elSizeClassName,
        rounded ? "is-rounded" : "",
        styleClassName,
        "input",
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
                <input
                    type="text"
                    className={elClassName}
                    placeholder={placeholder}
                    readOnly={readonly}
                    disabled={disabled}
                    defaultValue={defaultValue}
                    onChange={onChange}
                    onBlur={onBlur}
                    name={id}
                    id={id}
                />
            </div>
            {isValidationDefined && validationMessages.length > 0 &&
                <p className={`help m-help ${styleClassName}`}>{validationMessages.join("\n")}</p>
            }
        </ComponentWithLabel>
    );
};

export default TextWithLabel;
