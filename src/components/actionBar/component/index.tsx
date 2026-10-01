import { FC } from "react";

import { getClassName, isNullish } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { getSizeClassName, mapDataAttributes } from "@bbr/utils";
import Button, { ButtonStyle } from "@bbr/components/button";

import "./style.scss";

import { ActionBarPosition, ActionBarProps } from "..";

/** Default screen edge the panel is pinned to. */
const DEFAULT_POSITION: ActionBarPosition = "bottom";

/** Floating action panel pinned to a screen edge, e.g. with actions for selected table rows. */
const ActionBar: FC<ActionBarProps> = ({
    open,
    onClose,
    content,
    actions,
    size,
    position = DEFAULT_POSITION,
    closable = true,

    className, title, data,
}) => {
    const elClassName = getClassName([
        "bbr-action-bar",
        `bbr-action-bar--${position}`,
        getSizeClassName(size, ElementSize.Normal),
        open ? "" : "bbr-action-bar--hidden",
        className,
    ]);

    const dataAttributes = mapDataAttributes(data);

    const hasContent = !isNullish(content);
    const hasSeparator = hasContent && (actions.length > 0 || closable);

    return (
        <div
            {...dataAttributes}

            title={title}
            className={elClassName}
        >
            {hasContent
                ? <div className="bbr-action-bar__content">
                    {content}
                  </div>
                : null
            }

            {hasSeparator
                ? <span className="bbr-action-bar__separator" />
                : null
            }

            {actions.map(({ caption, icon, style, disabled, title, onClick }, index) => (
                <Button
                    key={title ?? caption ?? icon?.name ?? index}

                    icon={icon}
                    size={size}
                    title={title}
                    onClick={onClick}
                    caption={caption}
                    disabled={disabled}
                    style={style ?? ButtonStyle.Default}
                />
            ))}

            {closable
                ? <Button
                    size={size}
                    title="Close"
                    onClick={onClose}
                    icon={{ name: "x-lg" }}
                    style={ButtonStyle.Default}
                    className="bbr-action-bar__close"
                  />
                : null
            }
        </div>
    );
};

export default ActionBar;
