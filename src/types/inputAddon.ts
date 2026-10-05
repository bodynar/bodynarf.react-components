import { MouseEventHandler } from "react";

import { ElementColor, ElementIcon } from "@bbr/types";

/** Static, non-interactive text addon attached to an input. */
export type InputTextAddon = {
    /** Discriminator for a text addon. */
    type: "text";

    /** Text shown inside the addon. */
    content: string;

    /** Optional addon color. */
    color?: ElementColor;
};

/** Static, non-interactive icon addon attached to an input. */
export type InputIconAddon = {
    /** Discriminator for an icon addon. */
    type: "icon";

    /** Icon configuration. */
    icon: ElementIcon;

    /** Optional addon color. */
    color?: ElementColor;
};

/** Interactive button addon attached to an input. */
export type InputButtonAddon = {
    /** Discriminator for a button addon. */
    type: "button";

    /** Button caption. */
    caption?: string;

    /** Optional button icon. */
    icon?: ElementIcon;

    /** Button color. */
    style?: ElementColor;

    /** Whether the button is disabled. */
    disabled?: boolean;

    /** Click handler (required — a button addon must do something). */
    onClick: MouseEventHandler<HTMLElement>;
};

/**
 * Addon that can be attached to the left or right of an input primitive.
 * @see InputTextAddon, InputIconAddon, InputButtonAddon
 */
export type InputAddon = InputTextAddon | InputIconAddon | InputButtonAddon;
