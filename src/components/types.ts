/** Base interface for component props */
export type BaseElementProps = {
    /** Additional class names */
    className?: string;

    /** Title */
    title?: string;

    /** Extra data-* attributes */
    data?: {
        /**Will add data-{key} attribute to element */
        [key: string]: any;
    };
};

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
};

/** Allowed icon position */
export type IconPosition =
    | "left"
    | "right";

/** Icon for component  */
export type ElementIcon = {
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

    /**
     * Position
     * Works only with other content
    */
    position?: IconPosition;
};
