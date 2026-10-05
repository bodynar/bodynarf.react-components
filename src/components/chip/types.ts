import { BaseElementProps, ClickableElement, ElementSize, RoundedElement, StylableElement } from "@bbr/types";

/** Chip item prop types */
export type ChipProps =
    & BaseElementProps
    & ClickableElement
    & StylableElement
    & RoundedElement
    & {
        /** Chip content */
        content: string;

        /**
         * Element size.
         * `Small` isn't allowed
        */
        size?: Exclude<ElementSize, ElementSize.Small>;

        /** Is element has light color */
        lightColor?: boolean;

        /** Manual color scheme */
        customColor?: {
            /** Text color */
            color: string;

            /** Background color */
            backgroundColor: string;
        };

        /** `aria-label` for the remove button. Defaults to `"Remove"` */
        removeLabel?: string;

        /**
         * Called when the remove (×) button is clicked.
         * When provided, a delete icon is rendered inside the chip.
         */
        onRemove?: () => void;
    };
