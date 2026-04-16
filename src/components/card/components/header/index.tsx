import { FC } from "react";

import { getClassName, isNotNullish } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";

import { CardHeaderProps } from "../..";

/** Card header section */
const CardHeader: FC<CardHeaderProps> = ({
    children,
    onClick,
    className, title, data,
}) => {
    const elClassName = getClassName([
        "bbr-card__header",
        "card-header",
        isNotNullish(onClick) ? "is-clickable" : "",
        className,
    ]);

    const dataAttributes = mapDataAttributes(data);

    return (
        <header
            {...dataAttributes}

            title={title}
            onClick={onClick}
            className={elClassName}
        >
            {children}
        </header>
    );
};

export default CardHeader;
