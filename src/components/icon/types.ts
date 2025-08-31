import { BaseElementProps, ClickableElement, ElementSize } from "@bbr/types";

/** Icon component props */
export type IconProps =
    & BaseElementProps
    & ClickableElement
    & {
        /**
         * Icon name. Must be without `bi-`
         * @example ["Arrow repeat", "arrow-repeat"]
         * // Icon name to icon class name.
         * // For class name check bootstrap icons website
        */
        name: string;

        /** Icon size */
        size?: ElementSize;
    };
