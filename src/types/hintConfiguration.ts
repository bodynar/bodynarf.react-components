import { ElementIcon } from "@bbr/types";

/** Hint configuration */
export type HintConfiguration = {
    /** Textual content */
    content: string;

    /** Is hint in italic style */
    italic?: boolean;

    /** Is hint has grey color */
    grey?: boolean;

    /** Optional icon */
    icon?: ElementIcon;
};
