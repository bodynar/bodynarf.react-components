import { ChangeEvent, useCallback } from "react";

import { generateGuid, getClassName, getValueOrDefault } from "@bodynarf/utils";

import { InputSize } from "../../../types";
import { MultilineProps } from "../..";
import { getValidationValues } from "../../../../../utils";

/** Multiline textual input component with describing label */
const MultilineWithLabel = ({
    defaultValue, onValueChange, validationState, readonly, disabled,
    name,
    className, size, style, rounded, loading,
    label, placeholder,
    fixed, rows,
    onBlur
}: MultilineProps): JSX.Element => {
    const onChange = useCallback(
        (event: ChangeEvent<HTMLTextAreaElement>) => onValueChange(event.target.value),
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
        "textarea",
        fixed === true ? "has-fixed-size" : "",
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
            <div className="app-input field is-horizontal">
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
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="app-input field">
            <label
                className={labelClassName}
                htmlFor={id}
            >
                {label!.caption}
            </label>
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
        </div>
    );
};

export default MultilineWithLabel;
