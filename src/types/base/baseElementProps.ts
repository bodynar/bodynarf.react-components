import { DataAttributes } from "@bbr/types";

/** Base interface for component props */
export type BaseElementProps = {
    /** Additional class names */
    className?: string;

    /** Title */
    title?: string;

    /** Extra data-* attributes */
    data?: DataAttributes;
};
