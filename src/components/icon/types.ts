import { ElementSize } from "..";

/** Icon component props */
export interface IconProps {
    /**
     * Icon name. Must be without `bi-`
     * @example ["Arrow repeat", "arrow-repeat"]
     * // Icon name to icon class name.
     * // For class name check bootstrap icons website
    */
    name: string;

    /** Additional classname */
    className?: string;

    /** Icon size */
    size?: ElementSize;
}