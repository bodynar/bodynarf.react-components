import { BaseElementProps, ClickableElement, SizableElement } from "@bbr/types";

/** Icon component props */
export type IconProps =
    & BaseElementProps
    & ClickableElement
    & SizableElement
    & {
        /**
         * Icon name. Must be without `bi-`
         * @example ["Arrow repeat", "arrow-repeat"]
         * // Icon name to icon class name.
         * // For class name check bootstrap icons website
        */
        name: string;
    };
