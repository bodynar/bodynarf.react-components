import { ChangeEvent, useCallback } from "react";

import { generateGuid, getClassName, getValueOrDefault, isStringEmpty } from "@bodynarf/utils";

import "../../../../common.scss";

import { ElementSize } from "../../..";
import { getValidationValues } from "../../../../utils";
import { DateProps } from "../..";

/** Date input component */
const DatePicker = ({
    defaultValue, onValueChange, readonly, disabled, validationState,
    name,
    size, className, rounded, loading, style,
    label,
    onBlur
}: DateProps): JSX.Element => {
    const onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) =>
            onValueChange(
                isStringEmpty(event.target.value)
                    ? undefined
                    : new Date(event.target.value)
            ),
        [onValueChange]
    );

    const id = name || generateGuid();
    const elSizeClassName = "is-{0}".format(getValueOrDefault(size, ElementSize.Normal));

    const [isValidationDefined, styleClassName, validationMessages] = getValidationValues(style, validationState);

    const elClassName = getClassName([
        className,
        elSizeClassName,
        styleClassName,
        rounded === true ? "is-rounded" : "",
        "input",
    ]);

    const inputContainerClassName = getClassName([
        "control",
        loading === true ? "is-loading" : "",
    ]);
    const stingifiedDefValue = defaultValue?.toISOString().split("T")[0];

    const labelClassName = getClassName([
        "label",
        !label.horizontal ? elSizeClassName : "",
        label.className
    ]);

    if (label.horizontal) {
        const labelContainerClassName = getClassName([
            "field-label",
            elSizeClassName,
            label.horizontalContainerClassName
        ]);

        const fieldContainerClassName = getClassName([
            "field-body",
            label.horizontalFieldContainerClassName
        ]);

        return (
            <div className="bbr-input field is-horizontal">
                <div className={labelContainerClassName}>
                    <label
                        className={labelClassName}
                        htmlFor={id}
                    >
                        {label.caption}
                    </label>
                </div>
                <div className={fieldContainerClassName}>
                    <div className="field">
                        <div className={inputContainerClassName}>
                            <input
                                type="date"
                                className={elClassName}
                                readOnly={readonly}
                                disabled={disabled}
                                defaultValue={stingifiedDefValue}
                                onChange={onChange}
                                onBlur={onBlur}
                                name={id}
                                id={id}
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
        <div className="bbr-input field">
            <label
                className={labelClassName}
                htmlFor={id}
            >
                {label.caption}
            </label>
            <div className={inputContainerClassName}>
                <input
                    type="date"
                    className={elClassName}
                    readOnly={readonly}
                    disabled={disabled}
                    defaultValue={stingifiedDefValue}
                    onChange={onChange}
                    onBlur={onBlur}
                    name={id}
                    id={id}
                />
            </div>
            {isValidationDefined && validationMessages.length > 0 &&
                <p className={`help m-help ${styleClassName}`}>{validationMessages.join("\n")}</p>
            }
        </div>
    );
};

export default DatePicker;
