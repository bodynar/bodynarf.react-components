import { BaseElementProps, SizableElement } from "@bbr/types";
import { AvatarProps, AvatarShape } from "@bbr/components/avatar";

/**
 * AvatarGroup component props.
 * Every avatar is rendered with the same group-level `size`
 * (item `size` values are ignored to keep the overlapping row uniform)
 */
export type AvatarGroupProps =
    & BaseElementProps
    & SizableElement
    & {
        /** Avatars to display in the group */
        items: AvatarProps[];

        /**
         * Maximum number of avatars shown before the rest
         * collapse into a `+N` overflow indicator.
         * @default 5
         */
        maxVisible?: number;

        /**
         * Shape applied to every avatar in the group.
         * `shape` of a specific item takes priority.
         * @default AvatarShape.Circle
         */
        shape?: AvatarShape;

        /**
         * Title of the popover with the collapsed avatars.
         * @default "More"
         */
        overflowPopoverTitle?: string;
    };
