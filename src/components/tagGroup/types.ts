import { BaseElementProps, ElementColor, ElementSize } from "@bbr/types";
import { TagProps } from "@bbr/components/tag";

/** TagGroup component props */
export type TagGroupProps = BaseElementProps & {
    /** Controlled list of tag values */
    value: string[];

    /**
     * Tag color.
     * @default ElementColor.Primary
     */
    color?: ElementColor;

    /**
     * Tag size.
     * @default ElementSize.Normal
     */
    size?: Exclude<ElementSize, ElementSize.Small>;

    /**
     * Input placeholder text.
     * @default "Add tag…"
     */
    placeholder?: string;

    /**
     * Whether the user can add new tags.
     * @default true
     */
    addable?: boolean;

    /**
     * Whether the user can remove tags.
     * @default true
     */
    removable?: boolean;

    /**
     * Disable the entire component.
     * @default false
     */
    disabled?: boolean;

    /**
     * Keys that confirm adding a tag when pressed in the input.
     * @default ["Enter", ","]
     */
    confirmKeys?: string[];

    /**
     * Maximum number of tags allowed.
     * When reached, the input is hidden.
     */
    maxTags?: number;

    /**
     * Additional configuration passed to each Tag
     */
    tagConfig?: Omit<
        TagProps,
        | "content" | "onRemove"
        | "size" | "style"
    >;

    /** Called when the tag list changes (add or remove) */
    onChange: (tags: string[]) => void;
};
