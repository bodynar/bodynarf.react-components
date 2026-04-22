import { BaseElementProps, ElementColor, ElementSize } from "@bbr/types";

/** A single option in the segmented control */
export type SegmentedOption<T extends string = string> = {
    /** Option value — must be unique */
    value: T;

    /** Display label */
    label: string;

    /** Bootstrap icon name (without `bi-` prefix) */
    icon?: string;

    /** Whether this option is disabled */
    disabled?: boolean;
};

/** SegmentedControl component props */
export type SegmentedControlProps<T extends string = string> = BaseElementProps & {
    /** Available options */
    options: SegmentedOption<T>[];

    /** Currently selected value */
    value: T;

    /**
     * Size variant.
     * @default ElementSize.Normal
     */
    size?: ElementSize.Small | ElementSize.Normal | ElementSize.Medium | ElementSize.Large;

    /**
     * Accent colour applied to the active segment.
     * @default ElementColor.Primary
     */
    color?: ElementColor;

    /**
     * Stretch to fill the full container width.
     * @default false
     */
    fullWidth?: boolean;

    /**
     * Disable all options globally.
     * @default false
     */
    disabled?: boolean;

    /** Called when the user selects a different option */
    onChange: (value: T) => void;
};
