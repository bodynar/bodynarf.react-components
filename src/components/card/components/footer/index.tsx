import { FC } from "react";

import { getClassName } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";

import { CardFooterProps } from "../..";

/** Card footer section */
const CardFooter: FC<CardFooterProps> = ({
    children,
    className, title, data,
}) => {
    const elClassName = getClassName([
        "bbr-card__footer",
        "card-footer",
        className,
    ]);

    const dataAttributes = mapDataAttributes(data);

    return (
        <footer
            {...dataAttributes}

            title={title}
            className={elClassName}
        >
            {children}
        </footer>
    );
};

export default CardFooter;
