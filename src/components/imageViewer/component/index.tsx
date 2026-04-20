import { FC, useCallback, useEffect, useState } from "react";

import { getClassName } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";
import { useEventListener } from "@bbr/hooks";
import Icon from "@bbr/components/icon";

import "./style.scss";

import { ImageViewerProps } from "..";

/** Lightbox-style image viewer with gallery navigation */
const ImageViewer: FC<ImageViewerProps> = ({
    images,
    initialIndex = 0,
    visible,
    onClose,

    className, title, data,
}) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    const prev = useCallback(() => {
        setCurrentIndex(i => (i - 1 + images.length) % images.length);
    }, [images.length]);

    const next = useCallback(() => {
        setCurrentIndex(i => (i + 1) % images.length);
    }, [images.length]);

    const hasMultiple = images.length > 1;

    const onKeyDown = useCallback((e: globalThis.KeyboardEvent) => {
        if (!visible) {
            return;
        }

        if (e.key === "Escape") {
            onClose();
        }
        else if (e.key === "ArrowLeft" && hasMultiple) {
            prev();
        }
        else if (e.key === "ArrowRight" && hasMultiple) {
            next();
        }
    }, [visible, hasMultiple, prev, next, onClose]);

    useEventListener("keydown", onKeyDown, document);

    // Reset to initialIndex each time the viewer opens
    useEffect(() => {
        if (visible) {
            setCurrentIndex(initialIndex);
        }
    }, [visible, initialIndex]);

    if (!visible || images.length === 0) {
        return null;
    }

    const image = images[currentIndex];
    const dataAttributes = mapDataAttributes(data);

    const elClassName = getClassName([
        "bbr-image-viewer",
        "modal",
        "is-active",
        className,
    ]);

    return (
        <div
            {...dataAttributes}

            title={title}
            className={elClassName}
        >
            <div
                onClick={onClose}
                className="modal-background"
            />

            <div className="bbr-image-viewer__content">
                {/* Close */}
                <button
                    type="button"
                    onClick={onClose}
                    className="bbr-image-viewer__close modal-close is-large"
                />

                {/* Prev */}
                {hasMultiple ? (
                    <button
                        type="button"
                        onClick={prev}
                        className="bbr-image-viewer__nav bbr-image-viewer__nav--prev"
                    >
                        <Icon name="chevron-left" />
                    </button>
                ) : null}

                {/* Image */}
                <figure className="bbr-image-viewer__figure">
                    <img
                        src={image.src}
                        draggable={false}
                        alt={image.alt ?? ""}
                        className="bbr-image-viewer__img"
                    />
                    {image.caption ? (
                        <figcaption className="bbr-image-viewer__caption">
                            {image.caption}
                        </figcaption>
                    ) : null}
                </figure>

                {/* Next */}
                {hasMultiple ? (
                    <button
                        type="button"
                        onClick={next}
                        className="bbr-image-viewer__nav bbr-image-viewer__nav--next"
                    >
                        <Icon name="chevron-right" />
                    </button>
                ) : null}

                {/* Counter */}
                {hasMultiple ? (
                    <div className="bbr-image-viewer__counter">
                        {currentIndex + 1}
                        {' '}
                        /
                        {' '}
                        {images.length}
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default ImageViewer;
