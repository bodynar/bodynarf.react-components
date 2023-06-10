import { ElementIcon } from "@bbr/components";

/** Anchor component props type */
export interface AnchorProps extends Omit<SimpleAnchorProps, "className"> {
    /** Configuration od inner icon */
    icon?: ElementIcon;

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

