import { useCallback, useState, FC } from "react";

import { getClassName, isNotNullish, isNullish } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";
import ToggleButton from "@bbr/components/toggleButton";

import "./style.scss";

import { ToggleButtonGroupItem, ToggleButtonGroupProps } from "..";

/** Normalize the incoming `value` / `defaultValue` into a list of selected values */
const normalizeValue = (value?: string | string[]): string[] => {
    if (isNullish(value)) {
        return [];
    }

    return Array.isArray(value)
        ? value
        : [value];
};

/**
 * ToggleButtonGroup component.
 * Group of attached toggle buttons with radio (`single`) or checkbox (`multiple`) behavior
 */
const ToggleButtonGroup: FC<ToggleButtonGroupProps> = ({
    items, mode,
    value: controlledValue,
    defaultValue,
    onChange,
    style,
    size,
    outlined = false,
    rounded = false,
    vertical = false,

    className, title, data,
}) => {
    const isControlled = isNotNullish(controlledValue);

    const [internalValue, setInternalValue] = useState<string[]>(() => normalizeValue(defaultValue));

    const onItemToggle = useCallback((item: ToggleButtonGroupItem, nextItemActive: boolean) => {
        const selectedValues = isControlled ? normalizeValue(controlledValue) : internalValue;

        if (mode === "single") {
            // radio behavior: an already active button stays active
            if (!nextItemActive) {
                return;
            }

            if (!isControlled) {
                setInternalValue([item.value]);
            }

            onChange?.(item.value);

            return;
        }

        const isSelected = selectedValues.includes(item.value);

        const nextValues =
            nextItemActive && !isSelected
                ? [...selectedValues, item.value]
                : !nextItemActive && isSelected
                    ? selectedValues.filter(value => value !== item.value)
                    : selectedValues;

        if (!isControlled) {
            setInternalValue(nextValues);
        }

        onChange?.(nextValues);
    }, [mode, isControlled, controlledValue, internalValue, onChange]);

    const selectedValues = isControlled ? normalizeValue(controlledValue) : internalValue;

    const elClassName = getClassName([
        "bbr-toggle-button-group",
        "buttons",
        "has-addons",
        vertical ? "is-vertical" : "",
        rounded ? "bbr-toggle-button-group--rounded" : "",
        className,
    ]);

    const dataAttributes = mapDataAttributes(data);

    return (
        <div
            {...dataAttributes}

            title={title}
            className={elClassName}
        >
            {items.map(item =>
                <ToggleButton
                    key={item.value}

                    icon={item.icon}
                    title={item.title}
                    caption={item.caption}
                    disabled={item.disabled}

                    active={selectedValues.includes(item.value)}
                    onToggle={nextItemActive => onItemToggle(item, nextItemActive)}

                    size={size}
                    style={style}
                    outlined={outlined}
                />
            )}
        </div>
    );
};

export default ToggleButtonGroup;
