import { ReactNode } from "react";

import { BaseElementProps, ElementColor } from "@bbr/types";
import { ButtonProps } from "@bbr/components/button";

/** EmptyState component props */
export type EmptyStateProps = BaseElementProps & {
    /**
     * Main heading text.
     * @example "No results found"
     */
    title: string;

    /** Secondary descriptive text shown below the title */
    description?: string;

    /**
     * Icon name (without `bi-` prefix).
     * @default "inbox"
     */
    icon?: string;

    /**
     * Color applied to the icon and title.
     * @default ElementColor.Default
     */
    color?: ElementColor;

    /**
     * Optional call-to-action button config.
     * Rendered below the description when provided.
     */
    action?: ButtonProps;

    /**
     * Arbitrary content placed below the description (alternative to `action`).
     * Use this for anything more complex than a single button.
     */
    children?: ReactNode;

    /**
     * Display the component in a compact horizontal layout.
     * @default false
     */
    compact?: boolean;
};
