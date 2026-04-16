import { FC } from "react";

import { mapDataAttributes } from "@bbr/utils";

import { SimpleButtonProps } from "../..";

/** Simple button component, without icon */
const SimpleButton: FC<SimpleButtonProps> = ({
    className, disabled,
    onClick,
    caption,

    title, data
}) => {
    const dataAttributes = mapDataAttributes(data);

    return (
        <button
            {...dataAttributes}

            type="button"
            title={title}
            onClick={onClick}
            disabled={disabled}
            className={className}
        >
            {caption}
        </button>
    );
};

export default SimpleButton;
