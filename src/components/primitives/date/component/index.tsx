import { ChangeEvent, useCallback } from "react";

import { generateGuid, getClassName, getValueOrDefault, isNullOrUndefined, isStringEmpty } from "@bodynarf/utils";

import "../../../../common.scss";

import { ElementSize } from "@bbr/types";
import { getStyleClassName, mapDataAttributes } from "@bbr/utils";
import ComponentWithLabel from "@bbr/components/primitives/internal/componentWithLabel";

import { DateProps } from "@bbr/components/date";
import InternalHint from "@bbr/components/internal/hint";

/** Date input component */
const DatePicker = ({
    defaultValue, onValueChange, readonly, disabled, validationState,
    name,
    size, rounded = false, loading = false, style,
    label,
    onBlur,

    className, title, data,
    hint,
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

    const id = name ?? generateGuid();
    const elSizeClassName = "is-{0}".format(getValueOrDefault(size, ElementSize.Normal));

    const elClassName = getClassName([
        className,
        elSizeClassName,
        getStyleClassName(style, validationState),
        rounded ? "is-rounded" : "",
        "input",
    ]);

    const inputContainerClassName = getClassName([
        "control",
        loading ? "is-loading" : "",
    ]);

    const stringifiedDefValue = defaultValue?.toISOString().split("T")[0];

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
                <input
                    type="date"

                    id={id}
                    name={id}
                    onBlur={onBlur}
                    readOnly={readonly}
                    disabled={disabled}
                    onChange={onChange}
                    className={elClassName}
                    defaultValue={stringifiedDefValue}

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

export default DatePicker;
