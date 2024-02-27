import { isNullOrUndefined } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";

import { SimpleAnchorProps } from "../..";

/** Simple anchor component, without icon */
const SimpleAnchor = ({
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

export default SimpleAnchor;
