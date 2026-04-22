import { FC } from "react";

import { getClassName } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";

import { CardBodyProps } from "../..";

/** Card body section */
const CardBody: FC<CardBodyProps> = ({
    children,
    className, title, data,
}) => {
    const elClassName = getClassName([
        "bbr-card__body",
        "card-content",
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

export default CardBody;
