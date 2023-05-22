import { BaseElementProps, ElementColor, ElementSize } from "@bbr/components";

/** Tag item prop types */
export interface TagProps extends BaseElementProps {
    /** Tag content */
    content: string;

    /**
     * Element size.
     * `Small` isn"t allowed
    */
    size?: ElementSize;

    /** Element color */
    style?: ElementColor;

    /** Is element with rounded border */
    rounded?: boolean;

    /** Is element has light color */
    lightColor?: boolean;

    /** Click handler */
    onClick?: () => void;

    /** Manual color scheme */
    customColor?: {
        /** Text color */
        color: string;

        /** Background color */
        backgroundColor: string;
    };
}
