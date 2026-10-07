import {
    BaseElementProps,
    ClickableElement,
    DisableableElement,
    ElementWithIcon,
    OutlinedElement,
    RoundedElement,
    SizableElement,
} from "@bbr/types";
import { ButtonStyle } from "@bbr/components/button";

/** A single button in a {@link ButtonGroupProps}. */
export type ButtonGroupItem =
    & ElementWithIcon
    & DisableableElement
    & ClickableElement
    & Pick<BaseElementProps, "title">
    & {
        /** Button caption. */
        caption?: string;
    };

/** Props for a group of attached buttons sharing a single style. */
export type ButtonGroupProps =
    & BaseElementProps
    & SizableElement
    & OutlinedElement
    & RoundedElement
    & {
        /** Buttons to render. */
        items: ButtonGroupItem[];

        /** Shared button style applied to every button. */
        style: ButtonStyle;

        /** Whether buttons use the light color variant. */
        light?: boolean;

        /** Whether the group is laid out vertically (default `false`). */
        vertical?: boolean;
    };
