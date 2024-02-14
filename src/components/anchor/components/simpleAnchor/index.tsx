import { isNullOrUndefined } from "@bodynarf/utils";

import { SimpleAnchorProps } from "@bbr/components/anchor";
import { mapDataAttributes } from "@bbr/utils";

/** Simple anchor component, without icon */
export const SimpleAnchor = ({
    href, className, onClick, caption, target,

    title, data,
}: SimpleAnchorProps): JSX.Element => {
    const dataAttributes = isNullOrUndefined(data)
        ? undefined
        : mapDataAttributes(data!);

    return (
        <a
            href={href}
            target={target}
            onClick={onClick}
            className={className}

            title={title}
            {...dataAttributes}
        >
            {caption}
        </a>
    );
};
