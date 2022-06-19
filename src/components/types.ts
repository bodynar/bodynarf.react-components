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

/** Allowed element sizes */
export type ElementSize =
    | 'small'
    | 'medium' /** default size */
    | 'large';

/** Allowed icon position */
export type IconPosition =
    | 'left'
    | 'right';

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
