import { BaseElementProps, ElementIcon } from "@bbr/types";

/** Anchor component props type */
export interface AnchorProps extends BaseElementProps {
    /** Configuration od inner icon */
    icon?: ElementIcon;

    /** Should css hovering effects be disabled */
    disableHovering?: boolean;

    /** Link destination */
    href?: string;

    /** Link caption  */
    caption?: string;

    /** Where to open the linked document */
    target?: "_blank" | "_top";

    /** Click handler */
    onClick?: () => void;
}
