import { BaseElementProps, ButtonStylableElement, ClickableElement, FloatPosition, SizableElement } from "@bbr/types";

/** Floating action button props. */
export type FloatButtonProps =
    & BaseElementProps
    & ClickableElement
    & SizableElement
    & ButtonStylableElement
    & {
        /** Bootstrap icon name (without the `bi-` prefix). */
        icon: string;

        /** Optional caption shown next to the icon. */
        caption?: string;

        /** Screen corner to pin the button to. Defaults to `bottom-right`. */
        position?: FloatPosition;

        /** Tooltip text (button `title` attribute). */
        tooltip?: string;
    };
