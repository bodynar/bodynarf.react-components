import { BaseElementProps, ElementColor, ElementSize } from "@bbr/types";

/** Spinner component props */
export type SpinnerProps = BaseElementProps & {
    /**
     * Spinner size.
     * @default ElementSize.Normal
     */
    size?: ElementSize;

    /**
     * Color variant.
     * @default ElementColor.Primary
     */
    color?: Exclude<ElementColor, ElementColor.Default>;

    /**
     * When true, the spinner is absolutely positioned and fills its
     * nearest `position: relative` ancestor, centering itself within it.
     * Useful to overlay a loading state on a card / panel / table.
     * @default false
     */
    overlay?: boolean;

    /**
     * Accessible label for the spinner status element.
     * @default "Loading"
     */
    loadingLabel?: string;
};
