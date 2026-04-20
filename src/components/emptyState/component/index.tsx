import { FC } from "react";

import { getClassName, isNotNullish } from "@bodynarf/utils";

import { ElementColor } from "@bbr/types";
import { getElementColorClassName, mapDataAttributes } from "@bbr/utils";
import Button from "@bbr/components/button";
import Icon from "@bbr/components/icon";

import "./style.scss";

import { EmptyStateProps } from "..";

/** Empty-state placeholder shown when a list or panel has no content */
const EmptyState: FC<EmptyStateProps> = ({
    title,
    description,
    icon = "inbox",
    color = ElementColor.Default,
    action,
    children,
    compact = false,

    className, title: elTitle, data,
}) => {
    const dataAttributes = mapDataAttributes(data);

    const elClassName = getClassName([
        "bbr-empty-state",
        compact ? "bbr-empty-state--compact" : "",
        className,
    ]);

    const iconClassName = getClassName([
        "bbr-empty-state__icon",
        getElementColorClassName(color),
    ]);

    const titleClassName = getClassName([
        "bbr-empty-state__title",
        getElementColorClassName(color),
    ]);

    return (
        <div
            {...dataAttributes}

            title={elTitle}
            className={elClassName}
        >
            <Icon
                name={icon}
                className={iconClassName}
            />

            <p className={titleClassName}>
                {title}
            </p>

            {isNotNullish(description) && (
                <p className="bbr-empty-state__description">
                    {description}
                </p>
            )}

            {isNotNullish(action) && (
                <div className="bbr-empty-state__action">
                    <Button {...action} />
                </div>
            )}

            {isNotNullish(children) && (
                <div className="bbr-empty-state__action">
                    {children}
                </div>
            )}
        </div>
    );
};

export default EmptyState;
