import { DataAttributes } from "@bbr/types";

/** Base interface for component props */
export interface BaseElementProps {
    /** Additional class names */
    className?: string;

    /** Title */
    title?: string;

    /** Extra data-* attributes */
    data?: DataAttributes;

    /**
     * Handle component click
     * @param event Mouse synth event
     */
    onClick?: (event: React.MouseEvent) => void;
}
