import { BaseElementProps, SizableElement, StylableElement } from "@bbr/types";

/** Accordion panel props type */
export type AccordionProps =
    & BaseElementProps
    & SizableElement
    & StylableElement
    & {
        /** Content that should be collapsed inside */
        children: React.ReactNode;

        /**
         * Collapsible panel caption.
         * Optional when the `Accordion.Header` slot is used to render custom header content;
         * the slot content takes precedence over this string.
         * @deprecated Since v1.16 — use the {@link Accordion.Header} slot instead.
         */
        caption?: string;

        /** Default expanded state */
        defaultExpanded?: boolean;

        /** Extra handler for toggling visibility. Doesn't affect component logic */
        onToggle?: (collapsed: boolean) => void;
    };

/** Props for the {@link Accordion.Header} slot — custom content rendered in the panel header. */
export type AccordionHeaderProps = {
    /** Content rendered inside the accordion header. */
    children: React.ReactNode;
};
