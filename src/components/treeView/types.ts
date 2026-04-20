import { BaseElementProps, ElementColor, ElementSize } from "@bbr/types";

/** A single node in the tree */
export type TreeNode = {
    /** Unique identifier */
    id: string;

    /** Display label */
    label: string;

    /** Bootstrap icon name (without `bi-` prefix) */
    icon?: string;

    /** Child nodes */
    children?: TreeNode[];

    /**
     * Whether this node is disabled.
     * @default false
     */
    disabled?: boolean;
};

/** Style configuration for the BBR Checkbox rendered inside each tree node */
export type TreeViewCheckboxConfig = {
    /** Bulma color applied to the checkbox */
    style?: ElementColor;

    /** Render the checkbox as a circle */
    rounded?: boolean;

    /** Size of the checkbox */
    size?: ElementSize;

    /** Fill the checkbox background with the accent color when checked */
    hasBackgroundColor?: boolean;

    /**
     * Keep the unchecked background transparent when `hasBackgroundColor` is true.
     * @see CheckBoxProps.fixBackgroundColor
     */
    fixBackgroundColor?: boolean;
};

/** TreeView component props */
export type TreeViewProps = BaseElementProps & {
    /** Root-level nodes */
    nodes: TreeNode[];

    /**
     * Set of expanded node ids (controlled).
     * When provided the component is fully controlled.
     */
    expandedIds?: Set<string>;

    /**
     * Set of selected node ids.
     * When provided the component is fully controlled.
     */
    selectedIds?: Set<string>;

    /**
     * Allow selecting multiple nodes simultaneously.
     * Enables Ctrl+Click (toggle individual) and Shift+Click (range select).
     * @default false
     */
    multiSelect?: boolean;

    /**
     * Show a checkbox next to each node label.
     * Recommended together with `multiSelect`.
     * When `checkboxConfig` is provided, checkboxes are shown automatically.
     * @default false
     */
    showCheckboxes?: boolean;

    /**
     * Optional configuration for the BBR Checkbox rendered in each node.
     * When provided, checkboxes are shown regardless of `showCheckboxes`.
     */
    checkboxConfig?: TreeViewCheckboxConfig;

    /**
     * Accent color used for the selected-node highlight.
     * @default ElementColor.Link  (blue)
     */
    selectionColor?: ElementColor;

    /** Called when a node's expand/collapse state changes */
    onToggleExpand?: (id: string, expanded: boolean) => void;

    /** Called when a node is selected / deselected */
    onSelect?: (id: string, selected: boolean) => void;
};

