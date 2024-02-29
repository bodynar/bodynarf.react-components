import { BaseElementProps, ElementColor, ElementSize } from "@bbr/types";

/** Accordion panel props type */
export interface AccordionProps extends BaseElementProps {
    /** Content that should be collapsed inside */
    children: React.ReactNode;

    /** Collapsible panel caption */
    caption: string;

    /** Default expanded state */
    defaultExpanded?: boolean;

    /** Panel size */
    size?: ElementSize;

    /** Color */
    style?: ElementColor;

    /** Extra handler for toggling visibility. Doesn't affect component logic */
    onToggle?: (collapsed: boolean) => void;
}
