import { BaseElementProps, ClickableElement, ElementColor, ElementSize } from "@bbr/types";

/** Chip item prop types */
export type ChipProps =
    & BaseElementProps
    & ClickableElement
    & {
        /** Chip content */
        content: string;

        /**
         * Element size.
         * `Small` isn't allowed
        */
        size?: Exclude<ElementSize, ElementSize.Small>;

        /** Element color */
        style?: ElementColor;

        /** Is element with rounded border */
        rounded?: boolean;

        /** Is element has light color */
        lightColor?: boolean;

        /** Manual color scheme */
        customColor?: {
            /** Text color */
            color: string;

            /** Background color */
            backgroundColor: string;
        };

        /**
         * Called when the remove (×) button is clicked.
         * When provided, a delete icon is rendered inside the chip.
         */
        onRemove?: () => void;
    };
