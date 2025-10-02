import { FC } from "react";

import { isNullish } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";

import { SimpleButtonProps } from "../..";

/** Simple button component, without icon */
const SimpleButton: FC<SimpleButtonProps> = ({
    className, disabled,
    onClick,
    caption,

    title, data
}) => {
    const dataAttributes = isNullish(data)
        ? undefined
        : mapDataAttributes(data);

    return (
        <button
            type="button"
            title={title}
            onClick={onClick}
            disabled={disabled}
            {...dataAttributes}
            className={className}
        >
            {caption}
        </button>
    );
};

export default SimpleButton;
