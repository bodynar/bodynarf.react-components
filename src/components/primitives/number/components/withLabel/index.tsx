import { ChangeEvent, useCallback } from "react";

import { generateGuid, getClassName, getValueOrDefault, isNullOrUndefined, isStringEmpty } from "@bodynarf/utils";

import { ElementSize } from "@bbr/components";
import { getStyleClassName, mapDataAttributes } from "@bbr/utils";

import { NumberProps } from "@bbr/components/number";
import ComponentWithLabel from "@bbr/components/primitives/internal/componentWithLabel";
import InternalHint from "@bbr/components/primitives/internal/hint";

/** Number component with label */
const NumberWithLabel = ({
    onValueChange, readonly, disabled, defaultValue, validationState,
    name,
    size, style, rounded = false, loading = false,
    label, placeholder,
    onBlur,
    step = 1,

    className, title, data,
    hint,
}: NumberProps): JSX.Element => {
    const onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) =>
            onValueChange(isStringEmpty(event.target.value) ? undefined : +event.target.value),
        [onValueChange]
    );

    const id = name || generateGuid();
    const elSizeClassName = "is-{0}".format(getValueOrDefault(size, ElementSize.Normal));

    const elClassName = getClassName([
        className,
        elSizeClassName,
        rounded ? "is-rounded" : "",
        getStyleClassName(style, validationState),
        "input",
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
                <input
                    type="number"

                    id={id}
                    name={id}
                    step={step}
                    onBlur={onBlur}
                    onChange={onChange}
                    readOnly={readonly}
                    disabled={disabled}
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

export default NumberWithLabel;
