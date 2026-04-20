import { BaseElementProps } from "@bbr/types";

/** A single image entry in the gallery */
export type ImageViewerImage = {
    /** Image URL */
    src: string;

    /** Alt text for accessibility */
    alt?: string;

    /** Optional caption displayed below the image */
    caption?: string;
};

/** ImageViewer component props */
export type ImageViewerProps = BaseElementProps & {
    /**
     * List of images.
     * When a single image is passed, navigation arrows are hidden.
     */
    images: ImageViewerImage[];

    /**
     * Whether the viewer is open.
     */
    visible: boolean;

    /**
     * Index of the initially visible image.
     * @default 0
     */
    initialIndex?: number;

    /**
     * Called when the viewer is closed (Escape, overlay click, or close button).
     */
    onClose: () => void;
};
