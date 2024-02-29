import { isNullOrUndefined } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";

import { SimpleButtonProps } from "../..";

/** Simple button component, without icon */
const SimpleButton = ({
    className, disabled,
    onClick,
    caption,

    title, data
}: SimpleButtonProps): JSX.Element => {
    const dataAttributes = isNullOrUndefined(data)
        ? undefined
        : mapDataAttributes(data!);

    return (
        <button
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
