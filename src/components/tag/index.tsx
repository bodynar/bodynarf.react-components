import { getClassName, isNullOrUndefined } from "@bodynarf/utils";

import { InputColor, InputSize } from "../primitives";
import { BaseElementProps } from "../types";

import "./style.scss";

/** Tag item prop types */
interface TagProps extends BaseElementProps {
    /** Tag contnet*/
    content: string;

    /**
     * Element size.
     * `Small` isn't allowed
    */
    size?: InputSize;

    /** Element color */
    style?: InputColor;

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

    size ??= InputSize.Normal;
    style ??= InputColor.Default;

    if (!isNullOrUndefined(customColor)) {
        style = InputColor.Default;
    }

    const elClassName = getClassName([
        "bbr-tag",
        "tag",
        style === InputColor.Default ? "" : `is-${style}`,
        !isNullOrUndefined(customColor) ? "bbr-tag--custom" : "",
        lightColor === true && isNullOrUndefined(customColor) ? "is-light" : "",
        rounded === true ? "is-rounded" : "",
        size === InputSize.Normal || size === InputSize.Small ? "" : `is-${size}`,
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
