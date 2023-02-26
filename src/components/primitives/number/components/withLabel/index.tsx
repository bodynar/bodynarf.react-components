import { ChangeEvent, useCallback } from "react";

import { generateGuid, getClassName, getValueOrDefault, isStringEmpty } from "@bodynarf/utils";

import { NumberProps } from "../..";
import { InputSize } from "../../..";
import { getValidationValues } from "../../../../../utils";

/** Number component with label */
const NumberWithLabel = ({
    onValueChange, readonly, disabled, defaultValue, validationState,
    name,
    className, size, style, rounded, loading,
    label, placeholder,
    onBlur,
    step,
}: NumberProps): JSX.Element => {
    const onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) =>
            onValueChange(isStringEmpty(event.target.value) ? undefined : +event.target.value),
        [onValueChange]
    );

    const id = name || generateGuid();
    const elSizeClassName = "is-{0}".format(getValueOrDefault(size, InputSize.Normal));

    const [isValidationDefined, styleClassName, validationMessages] = getValidationValues(style, validationState);

    const elClassName = getClassName([
        className,
        elSizeClassName,
        rounded === true ? "is-rounded" : "",
        styleClassName,
        "input",
    ]);

    const inputContainerClassName = getClassName([
        "control",
        loading === true ? "is-loading" : "",
    ]);

    const labelClassName = getClassName([
        "label",
        !label!.horizontal ? elSizeClassName : "",
        label!.className
    ]);

    if (label!.horizontal) {
        const labelContainerClassName = getClassName([
            "field-label",
            elSizeClassName,
            label!.horizontalContainerClassName
        ]);

        const fieldContainerClassName = getClassName([
            "field-body",
            label!.horizontalFieldContainerClassName
        ]);

        return (
            <div className="bbr-input field is-horizontal">
                <div className={labelContainerClassName}>
                    <label
                        className={labelClassName}
                        htmlFor={id}
                    >
                        {label!.caption}
                    </label>
                </div>
                <div className={fieldContainerClassName}>
                    <div className="field">
                        <div className={inputContainerClassName}>
                            <input
                                type="number"
                                className={elClassName}
                                placeholder={placeholder}
                                readOnly={readonly}
                                disabled={disabled}
                                defaultValue={defaultValue}
                                onChange={onChange}
                                onBlur={onBlur}
                                name={id}
                                id={id}
                                step={step ?? 1}
                            />
                        </div>
                        {isValidationDefined && validationMessages.length > 0 &&
                            <p className={`help m-help ${styleClassName}`}>{validationMessages.join("\n")}</p>
                        }
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="field">
            <label
                className={labelClassName}
                htmlFor={id}
            >
                {label!.caption}
            </label>
            <div className={inputContainerClassName}>
                <input
                    type="number"
                    className={elClassName}
                    placeholder={placeholder}
                    readOnly={readonly}
                    disabled={disabled}
                    defaultValue={defaultValue}
                    onChange={onChange}
                    onBlur={onBlur}
                    name={id}
                    id={id}
                    step={step ?? 1}
                />
            </div>
            {isValidationDefined && validationMessages.length > 0 &&
                <p className={`help m-help ${styleClassName}`}>{validationMessages.join("\n")}</p>
            }
        </div>
    );
};

export default NumberWithLabel;
