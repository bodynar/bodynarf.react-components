import { ReactNode } from "react";

import { BaseElementProps, ElementSize, FloatPosition } from "@bbr/types";
import { ButtonProps } from "@bbr/components/button";

/**
 * Screen edge where the {@link ActionBarProps} panel is pinned.
 * Extends {@link FloatPosition} with the centered `bottom` / `top` options,
 * as an action panel typically sits in the middle of a screen edge.
 */
export type ActionBarPosition =
    | FloatPosition
    | "bottom" /** bottom edge, centered */
    | "top" /** top edge, centered */
    ;

/**
 * Single action rendered inside the {@link ActionBarProps} as a `Button`.
 * At least one of `caption` / `icon` must be provided.
 */
export type ActionBarAction =
    & Pick<ButtonProps, "caption" | "icon" | "disabled" | "title" | "onClick">
    & Partial<Pick<ButtonProps, "style">>;

/** Floating action bar props. */
export type ActionBarProps = BaseElementProps & {
    /**
     * Is the panel visible.
     * Hidden panel is not unmounted, so the exit transition is played.
     */
    open: boolean;

    /** Actions displayed after the separator. */
    actions: ActionBarAction[];

    /** Left part of the panel, e.g. `5 items selected`. */
    content?: ReactNode;

    /** Show the close (×) button. Defaults to `true`. */
    closable?: boolean;

    /**
     * Panel size — single size applied to the panel and every action button.
     * @default ElementSize.Normal
     */
    size?: ElementSize;

    /** Screen edge to pin the panel to. Defaults to `bottom`. */
    position?: ActionBarPosition;

    /**
     * Called when the close (×) button is clicked.
     * The button is rendered only when {@link ActionBarProps.closable} is `true`.
     */
    onClose?: () => void;
};
