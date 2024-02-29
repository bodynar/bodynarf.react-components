import { ElementFloatPosition, ElementSize } from "@bbr/types";

/** Icon for component  */
export interface ElementIcon {
    /**
     * Icon name. Must be without `bi-`
     * @see https://icons.getbootstrap.com/
     * @example <Icon name="info-square-fill" />
     * // Will render icon "Info square fill"
     * // https://icons.getbootstrap.com/icons/info-square-fill/
    */
    name: string;

    /** Additional classname */
    className?: string;

    /** Icon size */
    size?: ElementSize;

    /**
     * Position
     * Works only with other content
    */
    position?: ElementFloatPosition;
}
