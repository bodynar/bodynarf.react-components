import { MouseEventHandler } from "react";

/** Element with click event */
export type ClickableElement = {
    /**
     * Click handler
     * @param event Mouse event from the clicked element
     */
    onClick?: MouseEventHandler<HTMLElement>;
};

