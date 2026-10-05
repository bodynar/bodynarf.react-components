import { ChangeEvent, FC, useCallback, useEffect, useMemo, useState } from "react";

import { generateGuid, getClassName, isNotNullish } from "@bodynarf/utils";

import { ElementColor, ElementSize } from "@bbr/types";
import { getSizeClassName, mapDataAttributes } from "@bbr/utils";
import Icon from "@bbr/components/icon";

import "./style.scss";

import { RadioCardGroupProps } from "..";

/** RadioCardGroup — single selection from a set of card-like options */
const RadioCardGroup: FC<RadioCardGroupProps> = ({
    items,
    value,
    defaultValue,
    onChange,
    name = generateGuid(),
    columns = 1,
    size = ElementSize.Normal,
    style = ElementColor.Primary,

    className, title, data,
}) => {
    const isControlled = isNotNullish(value);
    const [internalValue, setInternalValue] = useState<string | undefined>(defaultValue);

    useEffect(() => {
        if (isControlled) {
            setInternalValue(value);
        }
    }, [value, isControlled]);

    // An omitted item value falls back to its label
    const normalizedItems = useMemo(
        () => items.map(item => ({ ...item, value: item.value ?? item.label })),
        [items]
    );

    const onValueChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const nextValue = event.target.value;

        if (!isControlled) {
            setInternalValue(nextValue);
        }

        onChange?.(nextValue);
    }, [isControlled, onChange]);

    const currentValue = isControlled ? value : internalValue;

    const containerClassName = getClassName([
        "bbr-radio-card-group",
        `bbr-radio-card-group--${style}`,
        getSizeClassName(size, ElementSize.Normal),
        className,
    ]);

    const dataAttributes = mapDataAttributes(data);

    return (
        <div
            {...dataAttributes}

            title={title}
            role="radiogroup"
            className={containerClassName}
            style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
        >
            {normalizedItems.map(item => {
                const isSelected = item.value === currentValue;

                const cardClassName = getClassName([
                    "bbr-radio-card",
                    isSelected ? "is-selected" : "",
                    item.disabled ? "is-disabled" : "",
                ]);

                return (
                    <label
                        key={item.value}

                        className={cardClassName}
                    >
                        <input
                            type="radio"

                            name={name}
                            value={item.value}
                            checked={isSelected}
                            onChange={onValueChange}
                            disabled={item.disabled}

                            className="bbr-radio-card__input"
                        />
                        {item.icon
                            ? (
                                <span className="bbr-radio-card__icon">
                                    <Icon {...item.icon} />
                                </span>
                            )
                            : null
                        }
                        <span className="bbr-radio-card__label">
                            {item.label}
                        </span>
                        {item.description
                            ? (
                                <span className="bbr-radio-card__description">
                                    {item.description}
                                </span>
                            )
                            : null
                        }
                    </label>
                );
            })}
        </div>
    );
};

export default RadioCardGroup;
