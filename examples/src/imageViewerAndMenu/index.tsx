import { FC, useState } from "react";

import ImageViewer from "@bodynarf/react.components/components/imageViewer";
import Menu from "@bodynarf/react.components/components/menu";
import { MenuSectionConfig } from "@bodynarf/react.components";

// ─── Image Viewer ─────────────────────────────────────────────────────────────

const GALLERY = [
    {
        src: "https://picsum.photos/seed/bbr1/800/500",
        alt: "Nature landscape",
        caption: "A beautiful nature landscape",
    },
    {
        src: "https://picsum.photos/seed/bbr2/800/500",
        alt: "City at night",
        caption: "City lights at night",
    },
    {
        src: "https://picsum.photos/seed/bbr3/800/500",
        alt: "Mountain view",
        caption: "Majestic mountain scenery",
    },
];

// ─── Menu ─────────────────────────────────────────────────────────────────────

const MENU_SECTIONS: MenuSectionConfig[] = [
    {
        label: "General",
        items: [
            { id: "dashboard", label: "Dashboard", icon: "speedometer2", href: "#" },
            { id: "analytics", label: "Analytics",  icon: "bar-chart-line", href: "#" },
        ],
    },
    {
        label: "Settings",
        items: [
            { id: "profile",   label: "Profile",    icon: "person-circle", href: "#" },
            { id: "security",  label: "Security",   icon: "shield-lock",   href: "#" },
            { id: "billing",   label: "Billing",    icon: "credit-card",   href: "#", disabled: true },
        ],
    },
    {
        items: [
            { id: "logout", label: "Log out", icon: "box-arrow-right" },
        ],
    },
];

/** ImageViewer + Menu examples */
const ImageViewerAndMenuExamples: FC = () => {
    const [singleOpen,  setSingleOpen]  = useState(false);
    const [galleryOpen, setGalleryOpen] = useState(false);
    const [initIndex,   setInitIndex]   = useState(0);
    const [activeItem,  setActiveItem]  = useState("dashboard");

    return (
        <section className="section">
            <div className="container">

                {/* ── ImageViewer ──────────────────────────────────────── */}
                <h1 className="title is-3">ImageViewer</h1>

                {/* Single image */}
                <div className="box">
                    <p className="subtitle is-5">Single image</p>
                    <p className="help mb-4">Navigation arrows are hidden when only one image is provided.</p>
                    <button type="button" className="button is-primary is-light" onClick={() => setSingleOpen(true)}>
                        Open single image
                    </button>
                    <ImageViewer
                        images={[GALLERY[0]]}
                        visible={singleOpen}
                        onClose={() => setSingleOpen(false)}
                    />
                </div>

                {/* Gallery */}
                <div className="box">
                    <p className="subtitle is-5">Gallery (3 images)</p>
                    <p className="help mb-4">Click a thumbnail to open the viewer at that image.</p>
                    <div className="is-flex" style={{ gap: "0.75rem", flexWrap: "wrap" }}>
                        {GALLERY.map((img, idx) => (
                            <img
                                key={idx}
                                src={img.src}
                                alt={img.alt}
                                style={{ width: 120, height: 80, objectFit: "cover", cursor: "pointer", borderRadius: 4 }}
                                onClick={() => { setInitIndex(idx); setGalleryOpen(true); }}
                            />
                        ))}
                    </div>
                    <ImageViewer
                        images={GALLERY}
                        visible={galleryOpen}
                        initialIndex={initIndex}
                        onClose={() => setGalleryOpen(false)}
                    />
                </div>

                {/* ── Menu ─────────────────────────────────────────────── */}
                <h1 className="title is-3 mt-6">Menu</h1>

                {/* Basic menu */}
                <div className="box">
                    <p className="subtitle is-5">Navigation menu with sections</p>
                    <p className="help mb-4">
                        Controlled via <code>activeItemId</code> / <code>onItemClick</code>.
                        "Billing" is disabled.
                    </p>
                    <div className="columns">
                        <div className="column is-narrow" style={{ minWidth: 220 }}>
                            <Menu
                                sections={MENU_SECTIONS}
                                activeItemId={activeItem}
                                onItemClick={setActiveItem}
                            />
                        </div>
                        <div className="column">
                            <div className="notification is-light">
                                Active item: <strong>{activeItem}</strong>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Menu without labels */}
                <div className="box">
                    <p className="subtitle is-5">Single section without section label</p>
                    <div style={{ maxWidth: 200 }}>
                        <Menu
                            sections={[{
                                items: [
                                    { id: "new",    label: "New file",    icon: "file-plus" },
                                    { id: "open",   label: "Open",        icon: "folder2-open" },
                                    { id: "save",   label: "Save",        icon: "floppy" },
                                    { id: "export", label: "Export…",     icon: "box-arrow-up" },
                                ],
                            }]}
                            activeItemId="new"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImageViewerAndMenuExamples;
