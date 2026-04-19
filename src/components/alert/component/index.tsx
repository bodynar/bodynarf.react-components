import { FC } from "react";

import { emptyFn, getClassName, isNotNullish } from "@bodynarf/utils";

import { ElementColor } from "@bbr/types";
import { getElementColorClassName, mapDataAttributes } from "@bbr/utils";

import "./style.scss";

import { AlertProps } from "..";

/** Persistent inline notification block based on Bulma `.message` */
const Alert: FC<AlertProps> = ({
    children,
    color = ElementColor.Info,
    header,
    closable = true,
    onClose = emptyFn,

    className, title, data,
}) => {
    const elClassName = getClassName([
        "bbr-alert",
        "message",
        getElementColorClassName(color),
        className,
    ]);

    const dataAttributes = mapDataAttributes(data);

    return (
        <article
            {...dataAttributes}

            title={title}
            className={elClassName}
        >
            {isNotNullish(header) && (
                <div className="message-header">
                    <p>
                        {header}
                    </p>

                    {closable ? (
                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="close"
                            className="delete"
                        />
                    ) : null}
                </div>
            )}
            <div className="message-body">
                {children}
            </div>
        </article>
    );
};

export default Alert;
