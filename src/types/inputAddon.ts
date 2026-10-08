import {
    ClickableElement,
    DisableableElement,
    ElementWithIcon,
    StylableElement,
} from "@bbr/types";

/** Static, non-interactive text addon attached to an input. */
export type InputTextAddon =
    & StylableElement
    & {
        /** Discriminator for a text addon. */
        type: "text";

        /** Text shown inside the addon. */
        content: string;
    };

/** Static, non-interactive icon addon attached to an input. */
export type InputIconAddon =
    & Required<ElementWithIcon>
    & StylableElement
    & {
        /** Discriminator for an icon addon. */
        type: "icon";
    };

/**
 * Interactive button addon attached to an input.
 * `onClick` comes from {@link ClickableElement} and stays required — a button addon must do something
 */
export type InputButtonAddon =
    & ElementWithIcon
    & DisableableElement
    & Required<ClickableElement>
    & StylableElement
    & {
        /** Discriminator for a button addon. */
        type: "button";

        /** Button caption. */
        caption?: string;
    };

/**
 * Addon that can be attached to the left or right of an input primitive.
 * @see InputTextAddon, InputIconAddon, InputButtonAddon
 */
export type InputAddon = InputTextAddon | InputIconAddon | InputButtonAddon;
