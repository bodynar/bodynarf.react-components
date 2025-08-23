import { FC } from "react";

import { isNullOrUndefined } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";

import { SimpleButtonProps } from "../..";

/** Simple button component, without icon */
const SimpleButton: FC<SimpleButtonProps> = ({
    className, disabled,
    onClick,
    caption,

    title, data
}) => {
    const dataAttributes = isNullOrUndefined(data)
        ? undefined
        : mapDataAttributes(data!);

    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={className}

            title={title}
            {...dataAttributes}
        >
            {caption}
        </button>
    );
};

export default SimpleButton;
