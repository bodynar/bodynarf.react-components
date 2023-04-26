import { ElementIcon } from "..";

/** Anchor component props type */
export interface AnchorProps {
    /** Link destination */
    href?: string;

    /** Link caption  */
    caption?: string;

    /** Click handler */
    onClick?: () => void;

    /** Configuration od inner icon */
    icon?: ElementIcon;

    /** Title of anchor */
    title?: string;

    /** Where to open the linked document */
    target?: "_blank" | "_top";

    /** Additional class names */
    className?: string;

    /** Should css hovering effects be disabled */
    disableHovering?: boolean;
}

export interface SimpleAnchorProps {
    /** Link destination */
    href?: string;

    /** Class names */
    className: string;

    /** Click handler */
    onClick?: () => void;

    /** Link caption  */
    caption?: string;

    /** Title of anchor */
    title?: string;

    /** Where to open the linked document */
    target?: "_blank" | "_top";
}

export interface AnchorWithIconProps extends SimpleAnchorProps {
    /** Configuration of icon */
    icon: ElementIcon;
}

