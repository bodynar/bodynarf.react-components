import { BaseElementProps, SizableElement } from "@bbr/types";

/** Shared skeleton base props */
type SkeletonBaseProps = BaseElementProps;

/** Props for the Skeleton.Block variant — rectangular placeholder */
export type SkeletonBlockProps = SkeletonBaseProps & {
    /** Explicit width (CSS value, e.g. "200px", "100%") */
    width?: string;

    /** Explicit height (CSS value, e.g. "1em", "80px") */
    height?: string;
};

/** Props for the Skeleton.Text variant — one or more text-line placeholders */
export type SkeletonTextProps = SkeletonBaseProps & {
    /**
     * Number of lines to render.
     * @default 1
     */
    lines?: number;

    /**
     * Width of the last line as a CSS value.
     * Shorter last line gives a more realistic text block appearance.
     * @default "70%"
     */
    lastLineWidth?: string;
};

/** Props for the Skeleton.Avatar variant — circular or square placeholder */
export type SkeletonAvatarProps = SkeletonBaseProps & SizableElement & {
    /**
     * Render as a square instead of a circle.
     * @default false
     */
    square?: boolean;
};

/** Props for the Skeleton.Button variant — button-shaped placeholder */
export type SkeletonButtonProps = SkeletonBaseProps & SizableElement & {
    /** Explicit width (CSS value). Overrides size-based width. */
    width?: string;
};
