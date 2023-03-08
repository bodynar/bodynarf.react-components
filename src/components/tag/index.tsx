import { getClassName, isNullOrUndefined } from "@bodynarf/utils";

import { ElementColor, ElementSize, BaseElementProps } from "..";

import "./style.scss";

/** Tag item prop types */
interface TagProps extends BaseElementProps {
    /** Tag contnet*/
    content: string;

    /**
     * Element size.
     * `Small` isn"t allowed
    */
    size?: ElementSize;

    /** Element color */
    style?: ElementColor;

    /** Is element with rounded border */
    rounded?: boolean;

    /** Is element has light color */
    lightColor?: boolean;

    /** Click handler */
    onClick?: () => void;

    /** Manual color scheme */
    customColor?: {
        /** Text color */
        color: string;

        /** Background color */
        backgroundColor: string;
    };
}

/** Single tag item */
const Tag = ({
    content,
    size, style, rounded, lightColor, customColor,
    onClick,

    className, title,
}: TagProps): JSX.Element => {

    size ??= ElementSize.Normal;
    style ??= ElementColor.Default;

    if (!isNullOrUndefined(customColor)) {
        style = ElementColor.Default;
    }

    const elClassName = getClassName([
        "bbr-tag",
        "tag",
        style === ElementColor.Default ? "" : `is-${style}`,
        !isNullOrUndefined(customColor) ? "bbr-tag--custom" : "",
        lightColor === true && isNullOrUndefined(customColor) ? "is-light" : "",
        rounded === true ? "is-rounded" : "",
        size === ElementSize.Normal || size === ElementSize.Small ? "" : `is-${size}`,
        isNullOrUndefined(onClick) ? "" : "bbr-tag--clickable",
        className,
    ]);

    return (
        <span
            className={elClassName}
            onClick={onClick}
            title={title}
            color={customColor?.color}
            style={{
                color: customColor?.color,
                backgroundColor: customColor?.backgroundColor,
            }}
        >
            {content}
        </span>
    );
};

export default Tag;
