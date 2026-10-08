import { ChangeEvent, FC, useCallback } from "react";

import { emptyFn, generateGuid, getClassName, isNotNullish, isNullish } from "@bodynarf/utils";

import { ElementSize, LabeledElement } from "@bbr/types";
import { getSizeClassName, getStyleClassName, mapDataAttributes, renderControlWithAddons } from "@bbr/utils";
import ComponentWithLabel from "@bbr/internalComponent/componentWithLabel";
import InternalHint from "@bbr/internalComponent/hint";

import { MultilineProps } from "../..";

/** Multiline textual input component with describing label */
const MultilineWithLabel: FC<
    Omit<MultilineProps, "label"> & LabeledElement
> = ({
    defaultValue, onValueChange = emptyFn, validationState,
    name = generateGuid(),
    size = ElementSize.Normal, style,
    label, placeholder,
    readonly = false, disabled = false,
    loading = false, fixed = false, autoFocus = false,
    rows,
    onBlur,
    onKeyDown,
    onKeyUp,

    className, title, data,
    hint,
    addonLeft, addonRight,
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

        const hasAddons = isNotNullish(addonLeft) || isNotNullish(addonRight);

        const inputContainerClassName = getClassName([
            "control",
            loading ? "is-loading" : "",
            hasAddons ? "is-expanded" : "",
        ]);

        const dataAttributes = isNullish(data)
            ? undefined
            : mapDataAttributes(data);

        return (
            <ComponentWithLabel
                id={name}
                size={size}
                label={label}
            >
                {renderControlWithAddons(
                    <div className={inputContainerClassName}>
                        <textarea
                            {...dataAttributes}

                            id={name}
                            name={name}
                            rows={rows}
                            title={title}
                            onBlur={onBlur}
                            onKeyUp={onKeyUp}
                            disabled={disabled}
                            onChange={onChange}
                            readOnly={readonly}
                            autoFocus={autoFocus}
                            onKeyDown={onKeyDown}
                            className={elClassName}
                            placeholder={placeholder}
                            defaultValue={defaultValue}
                        />
                    </div>,
                    addonLeft,
                    addonRight
                )}
                <InternalHint
                    hint={hint}
                    validationState={validationState}
                />
            </ComponentWithLabel>
        );
    };

export default MultilineWithLabel;
