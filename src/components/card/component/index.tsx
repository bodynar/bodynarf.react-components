import { FC } from "react";

import { getClassName } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";

import { CardProps } from "..";

import "./style.scss";

/** Card container */
const Card: FC<CardProps> = ({
    children,
    className, title, data,
}) => {
    const elClassName = getClassName([
        "bbr-card",
        "card",
        className,
    ]);

    const dataAttributes = mapDataAttributes(data);

    return (
        <div
            {...dataAttributes}

            title={title}
            className={elClassName}
        >
            {children}
        </div>
    );
};

export default Card;

