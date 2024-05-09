import { isNullOrUndefined } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";

import { AnchorProps } from "../..";

/** Simple anchor component, without icon */
const SimpleAnchor = ({
    href, className, caption, target,

    title, data,
}: AnchorProps): JSX.Element => {
    const dataAttributes = isNullOrUndefined(data)
        ? undefined
        : mapDataAttributes(data!);

    return (
        <a
            href={href}
            target={target}
            className={className}

            title={title}
            {...dataAttributes}
        >
            {caption}
        </a>
    );
};

export default SimpleAnchor;
