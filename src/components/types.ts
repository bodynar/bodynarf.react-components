/** Base interface for component props */
export interface BaseElementProps {
    /** Additional class names */
    className?: string;

    /** Title */
    title?: string;

    /** Extra data-* attributes */
    data?: DataAttributes;
}

/**
 * Html data-* attributes
 * @description All keys with defined values will be mapped injected into html element as data-{key} attributes
*/
export interface DataAttributes {
    /** Single data-* attribute value */
    [key: string]: any;
}

/** Input component size variety */
export enum ElementSize {
    /** Font size is 0.75rem */
    Small = "small",

    /** Font size is 1rem. Default */
    Normal = "normal",

    /** Font size is 1.25rem */
    Medium = "medium",

    /** Font size is 1.5rem */
    Large = "large",
}

/** Input component border-color type */
export enum ElementColor {
    /** color: transparent */
    Default = "default",

    /** color: seawave green */
    Primary = "primary",

    /** color: blue-violet */
    Link = "link",

    /** color: sky-blue */
    Info = "info",

    /** color: green */
    Success = "success",

    /** color: yellow */
    Warning = "warning",

    /** color: red */
    Danger = "danger",
}

/** Position of element */
export enum ElementPosition {
    /** Left aligned */
    Left = "left",

    /** Center aligned */
    Center = "center",

    /** Right aligned */
    Right = "right",
}

/** Element position, but without center placement */
export type ElementFloatPosition = ElementPosition.Left | ElementPosition.Right;

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
