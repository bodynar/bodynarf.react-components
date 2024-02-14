import { isNullOrUndefined } from "@bodynarf/utils";

import { SimpleButtonProps } from "@bbr/components/button";
import { mapDataAttributes } from "@bbr/utils";

/** Simple button component, without icon */
export const SimpleButton = ({
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
