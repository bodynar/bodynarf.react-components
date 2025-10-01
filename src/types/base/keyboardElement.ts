import { KeyboardEventHandler } from "react";

/** Element with keyboard events */
export type KeyboardElement = {
    /** Key down handler */
    onKeyDown?: KeyboardEventHandler;

    /** Key up handler */
    onKeyUp?: KeyboardEventHandler;
};
