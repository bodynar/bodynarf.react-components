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
     * Class name for icon.
     * Used to display icon from bootstrap-icons
    */
    className: string;

    /** Icon size */
    size?: ElementSize;

    /**
     * Position
     * Works only with other content
    */
    position?: IconPosition;
};
