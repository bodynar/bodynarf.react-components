import { BaseElementProps, ClickableElement, ElementIcon, ElementSize, OutlinedElement, RoundedElement, StylableElement } from "@bbr/types";

/** Tag item prop types */
export type TagProps =
    & BaseElementProps
    & ClickableElement
    & StylableElement
    & OutlinedElement
    & RoundedElement
    & {
        /** Tag content */
        content: string;

        /** Icon rendered before the tag content */
        iconLeft?: ElementIcon;

        /** Icon rendered after the tag content */
        iconRight?: ElementIcon;

        /**
         * Element size.
         * `Small` isn"t allowed
        */
        size?: Exclude<ElementSize, ElementSize.Small>;

        /**
         * Is element has light color.
         * Soft-deprecated in favor of `light`
        */
        lightColor?: boolean;

        /** Is element has light color. Synonym of `lightColor` */
        light?: boolean;

        /** Manual color scheme */
        customColor?: {
            /** Text color */
            color: string;

            /** Background color */
            backgroundColor: string;
        };

        /**
         * Called when the remove (×) button is clicked.
         * When provided, a delete button is rendered alongside the tag.
         */
        onRemove?: () => void;
    };
