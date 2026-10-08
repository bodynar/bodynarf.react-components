import { BaseElementProps, ElementColor, SizableElement, StylableElement } from "@bbr/types";

/** Progress component props */
export type ProgressProps =
    & BaseElementProps
    & SizableElement
    & StylableElement
    & {
        /** Current progress value (0-100) */
        value?: number;

        /** Maximum value (100 by default) */
        max?: number;

        /** Minimum value (0 by default) */
        min?: number;

        /**
         * Element color
         * @deprecated [Will be removed in v1.18] Use `style` prop instead.
         */
        color?: ElementColor;

        /** Show percentage text (true by default) */
        showValue?: boolean;

        /** Is indeterminate loader */
        indeterminate?: boolean;

        /** Loading text for indeterminate state */
        loadingText?: string;

        /** Animate progress bar within current value range (true by default) */
        animated?: boolean;
    };
