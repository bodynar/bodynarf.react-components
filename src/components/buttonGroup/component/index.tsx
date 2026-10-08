import { FC } from "react";

import { getClassName } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";
import Button from "@bbr/components/button";

import "./style.scss";

import { ButtonGroupProps } from "..";

/** Group of attached buttons sharing a single style. */
const ButtonGroup: FC<ButtonGroupProps> = ({
    items,
    style,
    size,
    outlined = false,
    rounded = false,
    light = false,
    vertical = false,

    className, title, data,
}) => {
    const containerClassName = getClassName([
        "bbr-button-group",
        "buttons",
        "has-addons",
        vertical ? "is-vertical" : "",
        rounded ? "bbr-button-group--rounded" : "",
        className,
    ]);

    const dataAttributes = mapDataAttributes(data);

    return (
        <div
            {...dataAttributes}

            title={title}
            className={containerClassName}
        >
            {items.map((item, index) => {
                const handleClick = item.onClick;

                return (
                    <Button
                        key={item.title ?? item.caption ?? index}

                        size={size}
                        light={light}
                        style={style}
                        icon={item.icon}
                        title={item.title}
                        outlined={outlined}
                        onClick={handleClick}
                        caption={item.caption}
                        disabled={item.disabled}
                    />
                );
            })}
        </div>
    );
};

export default ButtonGroup;
