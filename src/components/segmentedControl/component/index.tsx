import { FC } from "react";

import { getClassName, isNotNullOrEmpty } from "@bodynarf/utils";

import { ElementColor, ElementSize } from "@bbr/types";
import { getElementColorClassName, getSizeClassName, mapDataAttributes } from "@bbr/utils";
import Icon from "@bbr/components/icon";

import "./style.scss";

import { SegmentedControlProps } from "..";

/** Pill-style option selector — a compact alternative to radio buttons or tabs */
const SegmentedControl: FC<SegmentedControlProps> = ({
    options,
    value,
    onChange,
    color = ElementColor.Primary,
    size = ElementSize.Normal,
    fullWidth = false,
    disabled = false,

    className, title, data,
}) => {
    const dataAttributes = mapDataAttributes(data);

    const elClassName = getClassName([
        "bbr-segmented",
        "buttons",
        "has-addons",
        getSizeClassName(size, ElementSize.Normal),
        fullWidth ? "bbr-segmented--full" : "",
        disabled ? "bbr-segmented--disabled" : "",
        className,
    ]);

    return (
        <div
            {...dataAttributes}

            role="group"
            title={title}
            className={elClassName}
        >
            {options.map(option => (
                <SegmentedControlOption
                    key={option.value}

                    size={size}
                    color={color}
                    value={value}
                    option={option}
                    onChange={onChange}
                    disabled={disabled}
                />
            ))}
        </div>
    );
};

export default SegmentedControl;

/** Props for a single option within the segmented control */
type SegmentedControlOptionProps =
    & Pick<SegmentedControlProps, "value" | "onChange" | "color" | "size">
    & {
        /** The option data for this segment */
        option: SegmentedControlProps["options"][number];

        /** Whether the option is disabled */
        disabled?: boolean;
    };

/** A single option within the segmented control */
const SegmentedControlOption: FC<SegmentedControlOptionProps> = ({
    option, value, onChange, disabled,
    color = ElementColor.Primary, size = ElementSize.Normal,
}) => {
    const isActive = option.value === value;
    const isDisabled = disabled || option.disabled;

    const activeColorClass = color === ElementColor.Default ? "is-dark" : getElementColorClassName(color);

    const btnClassName = getClassName([
        "button",
        "bbr-segmented__btn",
        isActive ? `is-selected ${activeColorClass}` : "",
        getSizeClassName(size, ElementSize.Normal),
    ]);

    const iconContainerClassName = isNotNullOrEmpty(option.label) ? "icon" : undefined;

    return (
        <button
            key={option.value}

            type="button"
            disabled={isDisabled}
            aria-pressed={isActive}
            className={btnClassName}
            onClick={isDisabled ? undefined : () => onChange(option.value)}
        >
            {option.icon ? (
                <span className={iconContainerClassName}>
                    <Icon
                        size={size}
                        name={option.icon}
                    />
                </span>
            ) : null}
            <span>
                {option.label}
            </span>
        </button>
    );
};
