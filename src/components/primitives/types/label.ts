/** Input label configuration */
export interface InputLabel {
    /** Label textual content to describe input requirements */
    caption: string;

    /** Should component be on same line with label */
    horizontal: boolean;

    /** Additional class names */
    className?: string;

    /** Class name for label parent container in horizontal mode */
    horizontalContainerClassName?: string;

    /** Class name for input parent container in horizontal mode */
    horizontalFieldContainerClassName?: string;
}
