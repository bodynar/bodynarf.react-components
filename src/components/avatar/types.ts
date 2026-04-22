import { BaseElementProps, ClickableElement, ElementSize } from "@bbr/types";

/** Avatar shape variant */
export enum AvatarShape {
    /** Circle */
    Circle = "circle",

    /** Square with no border radius */
    Square = "square",

    /** Square with small rounded corners (4px) */
    RoundedSquare = "rounded-square",
}

/** Avatar status variant */
export enum AvatarStatus {
    /** User is online */
    Online = "online",

    /** User is offline */
    Offline = "offline",

    /** User is away */
    Away = "away",
}

/** Avatar component props */
export type AvatarProps =
    & BaseElementProps
    & ClickableElement
    & {
        /** Image source URL */
        src?: string;

        /** Alt text for the image */
        alt?: string;

        /**
         * Initials to display when no image is provided or image fails to load.
         * @example "JD"
         */
        initials?: string;

        /**
         * Bootstrap icon name (without `bi-`) to display as fallback
         * when neither image nor initials are available.
         * @example "person-fill"
         */
        icon?: string;

        /** Avatar size */
        size?: ElementSize;

        /**
         * Avatar shape.
         * @default AvatarShape.Circle
         */
        shape?: AvatarShape;

        /** Status indicator */
        status?: AvatarStatus;

        /**
         * Background color for initials / icon mode.
         * Accepts any valid CSS color value.
         * @example "#4a90e2"
         */
        color?: string;
    };
