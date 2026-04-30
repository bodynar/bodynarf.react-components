import { FC, useState } from "react";

import ImageViewerComponent from "@bodynarf/react.components/components/imageViewer";

import ComponentUseCase from "@app/sharedComponents/useCase";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

const images = [
    { src: "https://picsum.photos/seed/bbr1/800/600", alt: "Image 1", caption: "Caption for image 1" },
    { src: "https://picsum.photos/seed/bbr2/800/600", alt: "Image 2", caption: "Caption for image 2" },
    { src: "https://picsum.photos/seed/bbr3/800/600", alt: "Image 3" },
];

/** ImageViewer component demo */
const ImageViewer: FC = () => {
    const [openKey, setOpenKey] = useState<string | null>(null);
    const [galleryIndex, setGalleryIndex] = useState(0);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="ImageViewer"
                version="1.15"
                baseTypeName="BaseElementProps"
                description="Lightbox-style fullscreen overlay for viewing single images and galleries. Supports keyboard navigation and closes on Escape. Fully controlled (visible + onClose)."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Pass an images array with at least one entry, set visible, and handle onClose."
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            "",
                            `import ImageViewer from "@bodynarf/react.components/components/imageViewer";`,
                            "",
                            "const [isOpen, setIsOpen] = useState(false);",
                            "",
                            `<button onClick={() => setIsOpen(true)}>Open</button>`,
                            `<ImageViewer`,
                            `    visible={isOpen}`,
                            `    onClose={() => setIsOpen(false)}`,
                            `    images={[{ src: "/photo.jpg", alt: "Photo" }]}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <button
                    type="button"
                    className="button"
                    onClick={() => setOpenKey("minimal")}
                >
                    Open viewer
                </button>
                {openKey === "minimal" ? (
                    <ImageViewerComponent
                        images={[{ src: "https://picsum.photos/seed/bbr1/800/600", alt: "Sample image" }]}
                        visible
                        onClose={() => setOpenKey(null)}
                    />
                ) : null}
            </ComponentUseCase>

            <hr />
            <div>
                <h4 className="subtitle is-4 has-text-weight-semibold">
                    Custom component props
                </h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="images"
                description="Array of ImageViewerImage entries. Each entry has a required src, optional alt, and optional caption. When a single image is passed, navigation arrows are hidden."
                code={
                    <CodeExample
                        code={[
                            `import ImageViewer from "@bodynarf/react.components/components/imageViewer";`,
                            "",
                            `const images = [`,
                            `    { src: "/photo1.jpg", alt: "Photo 1", caption: "First image" },`,
                            `    { src: "/photo2.jpg", alt: "Photo 2" },`,
                            `];`,
                            "",
                            `<ImageViewer`,
                            `    images={images}`,
                            `    visible={isOpen}`,
                            `    onClose={() => setIsOpen(false)}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <button
                    type="button"
                    className="button"
                    onClick={() => setOpenKey("images")}
                >
                    Open gallery (3 images)
                </button>
                {openKey === "images" ? (
                    <ImageViewerComponent
                        images={images}
                        visible
                        onClose={() => setOpenKey(null)}
                    />
                ) : null}
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="visible"
                description="Controls whether the overlay is shown. The component is fully controlled — toggle this flag to open or close."
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            "",
                            `import ImageViewer from "@bodynarf/react.components/components/imageViewer";`,
                            "",
                            "const [isOpen, setIsOpen] = useState(false);",
                            "",
                            `<button onClick={() => setIsOpen(true)}>Open</button>`,
                            `<ImageViewer`,
                            `    images={images}`,
                            `    visible={isOpen}`,
                            `    onClose={() => setIsOpen(false)}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <button
                    type="button"
                    className="button"
                    onClick={() => setOpenKey("visible")}
                >
                    Open (visible = true)
                </button>
                {openKey === "visible" ? (
                    <ImageViewerComponent
                        images={images}
                        visible
                        onClose={() => setOpenKey(null)}
                    />
                ) : null}
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onClose"
                description="Callback fired when the viewer requests to close: Escape key, overlay click, or close button. Should set visible to false."
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            "",
                            `import ImageViewer from "@bodynarf/react.components/components/imageViewer";`,
                            "",
                            "const [isOpen, setIsOpen] = useState(false);",
                            "",
                            `<ImageViewer`,
                            `    images={images}`,
                            `    visible={isOpen}`,
                            `    onClose={() => setIsOpen(false)}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <button
                    type="button"
                    className="button"
                    onClick={() => setOpenKey("onClose")}
                >
                    Open (close via Escape / overlay / button)
                </button>
                {openKey === "onClose" ? (
                    <ImageViewerComponent
                        images={images}
                        visible
                        onClose={() => setOpenKey(null)}
                    />
                ) : null}
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="initialIndex"
                description="Index of the image that is shown first when the viewer opens. Defaults to 0. Click a thumbnail to open at the corresponding index."
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            "",
                            `import ImageViewer from "@bodynarf/react.components/components/imageViewer";`,
                            "",
                            "const [isOpen, setIsOpen] = useState(false);",
                            "const [startIndex, setStartIndex] = useState(0);",
                            "",
                            `{images.map((img, i) => (`,
                            `    <img`,
                            `        key={img.src}`,
                            `        src={img.src}`,
                            `        onClick={() => { setStartIndex(i); setIsOpen(true); }}`,
                            `    />`,
                            `))}`,
                            `<ImageViewer`,
                            `    images={images}`,
                            `    visible={isOpen}`,
                            `    initialIndex={startIndex}`,
                            `    onClose={() => setIsOpen(false)}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "8px", flexWrap: "wrap" }}>
                    {images.map((img, i) => (
                        <img
                            key={img.src}
                            src={img.src}
                            alt={img.alt}
                            style={{ width: "100px", height: "75px", objectFit: "cover", cursor: "pointer", borderRadius: "4px" }}
                            onClick={() => { setGalleryIndex(i); setOpenKey("initialIndex"); }}
                        />
                    ))}
                </div>
                {openKey === "initialIndex" ? (
                    <ImageViewerComponent
                        images={images}
                        visible
                        initialIndex={galleryIndex}
                        onClose={() => setOpenKey(null)}
                    />
                ) : null}
            </ComponentUseCase>

            <hr />
            <div>
                <h4 className="subtitle is-4 has-text-weight-semibold">
                    ImageViewerImage props
                </h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="caption"
                description="Optional text displayed below the image inside the viewer overlay."
                code={
                    <CodeExample
                        code={[
                            `import ImageViewer from "@bodynarf/react.components/components/imageViewer";`,
                            "",
                            `<ImageViewer`,
                            `    images={[`,
                            `        { src: "/photo.jpg", alt: "Photo", caption: "A beautiful landscape" },`,
                            `    ]}`,
                            `    visible={isOpen}`,
                            `    onClose={() => setIsOpen(false)}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <button
                    type="button"
                    className="button"
                    onClick={() => setOpenKey("caption")}
                >
                    Open (with caption)
                </button>
                {openKey === "caption" ? (
                    <ImageViewerComponent
                        images={[{ src: "https://picsum.photos/seed/bbr1/800/600", alt: "Landscape", caption: "A beautiful landscape" }]}
                        visible
                        onClose={() => setOpenKey(null)}
                    />
                ) : null}
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="alt"
                description="Alt text for the image element. Used by screen readers and shown if the image fails to load."
                code={
                    <CodeExample
                        code={[
                            `import ImageViewer from "@bodynarf/react.components/components/imageViewer";`,
                            "",
                            `<ImageViewer`,
                            `    visible={isOpen}`,
                            `    onClose={() => setIsOpen(false)}`,
                            `    images={[{ src: "/photo.jpg", alt: "A scenic mountain view" }]}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <button
                    type="button"
                    className="button"
                    onClick={() => setOpenKey("alt")}
                >
                    Open (with alt)
                </button>
                {openKey === "alt" ? (
                    <ImageViewerComponent
                        images={[{ src: "https://picsum.photos/seed/bbr2/800/600", alt: "A scenic mountain view" }]}
                        visible
                        onClose={() => setOpenKey(null)}
                    />
                ) : null}
            </ComponentUseCase>
        </section>
    );
};

export default ImageViewer;
