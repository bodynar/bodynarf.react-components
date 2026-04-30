/** localStorage key prefix for view settings */
export const LS_PREFIX = "vs/v1/";

/** localStorage keys for view settings */
export const LS_KEYS = {
    /** Key for storing selected sizes */
    sizes: `${LS_PREFIX}sizes`,

    /** Key for storing selected colors */
    colors: `${LS_PREFIX}colors`,
} as const;

/** View mode options */
export type ViewMode = "dropdown" | "buttons";

/** Preview options for customization */
export const previewOptions = [
    { value: "a", label: "Option A" },
    { value: "b", label: "Option B" },
    { value: "c", label: "Option C" },
];
