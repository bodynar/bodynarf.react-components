import { BaseElementProps, ClickableElement, ElementColor, ElementSize } from "@bbr/types";

/** Tag item prop types */
export type TagProps =
    & BaseElementProps
    & ClickableElement
    & {
        /** Tag content */
        content: string;

        /**
         * Element size.
         * `Small` isn"t allowed
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
    };
