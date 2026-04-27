import { FC, useState } from "react";

import SidePanelComponent from "@bodynarf/react.components/components/sidePanel";
import { SidePanelSize, ElementPosition } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

/** SidePanel component demo */
const SidePanel: FC = () => {
    const [isMinimalOpen, setIsMinimalOpen] = useState(false);
    const [isTitleOpen, setIsTitleOpen] = useState(false);
    const [isSizeSmallOpen, setIsSizeSmallOpen] = useState(false);
    const [isSizeNormalOpen, setIsSizeNormalOpen] = useState(false);
    const [isSizeMediumOpen, setIsSizeMediumOpen] = useState(false);
    const [isSizeLargeOpen, setIsSizeLargeOpen] = useState(false);
    const [isCustomWidthOpen, setIsCustomWidthOpen] = useState(false);
    const [customWidth, setCustomWidth] = useState("320");
    const [isRightOpen, setIsRightOpen] = useState(false);
    const [isNoOverlayClose, setIsNoOverlayClose] = useState(false);
    const [isCloseButtonOpen, setIsCloseButtonOpen] = useState(false);
    const [isCloseLabelOpen, setIsCloseLabelOpen] = useState(false);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="SidePanel"
                version="1.15"
                baseTypeName="BaseElementProps"
                description="Sliding side panel with backdrop overlay for detail views, settings and filters. Compound component: SidePanel.Title + SidePanel.Body. Closes on Escape and backdrop click."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Minimal setup — isOpen and onClose are required."
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            "",
                            `import SidePanel from "@bodynarf/react.components/components/sidePanel";`,
                            "",
                            `const [isOpen, setIsOpen] = useState(false);`,
                            "",
                            `<SidePanel`,
                            `    isOpen={isOpen}`,
                            `    onClose={() => setIsOpen(false)}`,
                            `>`,
                            `    <SidePanel.Body>`,
                            `        <p>Side panel content.</p>`,
                            `    </SidePanel.Body>`,
                            `</SidePanel>`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <button type="button" className="button" onClick={() => setIsMinimalOpen(true)}>
                        Open side panel
                    </button>
                    <SidePanelComponent isOpen={isMinimalOpen} onClose={() => setIsMinimalOpen(false)}>
                        <SidePanelComponent.Body>
                            <p>Side panel content.</p>
                        </SidePanelComponent.Body>
                    </SidePanelComponent>
                </div>
            </ComponentUseCase>

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">Custom component props</h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="size"
                description="Controls the panel width via predefined SidePanelSize values (percentage of viewport width): Small=10%, Normal=15%, Medium=25%, Large=40%."
                code={
                    <CodeExample
                        code={[
                            `import { SidePanelSize } from "@bodynarf/react.components";`,
                            `import SidePanel from "@bodynarf/react.components/components/sidePanel";`,
                            "",
                            "/* ... */",
                            "",
                            `<SidePanel`,
                            `    isOpen={isOpen}`,
                            `    onClose={onClose}`,
                            `    size={SidePanelSize.Small}`,
                            `>`,
                            `    <SidePanel.Body>`,
                            `        <p>Small (10vw)</p>`,
                            `    </SidePanel.Body>`,
                            `</SidePanel>`,
                        ].join("\n")}
                    />
                }
            >
                <div className="buttons">
                    <button type="button" className="button" onClick={() => setIsSizeSmallOpen(true)}>Small</button>
                    <button type="button" className="button" onClick={() => setIsSizeNormalOpen(true)}>Normal</button>
                    <button type="button" className="button" onClick={() => setIsSizeMediumOpen(true)}>Medium</button>
                    <button type="button" className="button" onClick={() => setIsSizeLargeOpen(true)}>Large</button>
                </div>
                <SidePanelComponent isOpen={isSizeSmallOpen} onClose={() => setIsSizeSmallOpen(false)} size={SidePanelSize.Small}>
                    <SidePanelComponent.Title>Small</SidePanelComponent.Title>
                    <SidePanelComponent.Body><p>SidePanelSize.Small — 10% viewport width</p></SidePanelComponent.Body>
                </SidePanelComponent>
                <SidePanelComponent isOpen={isSizeNormalOpen} onClose={() => setIsSizeNormalOpen(false)} size={SidePanelSize.Normal}>
                    <SidePanelComponent.Title>Normal</SidePanelComponent.Title>
                    <SidePanelComponent.Body><p>SidePanelSize.Normal — 15% viewport width</p></SidePanelComponent.Body>
                </SidePanelComponent>
                <SidePanelComponent isOpen={isSizeMediumOpen} onClose={() => setIsSizeMediumOpen(false)} size={SidePanelSize.Medium}>
                    <SidePanelComponent.Title>Medium</SidePanelComponent.Title>
                    <SidePanelComponent.Body><p>SidePanelSize.Medium — 25% viewport width</p></SidePanelComponent.Body>
                </SidePanelComponent>
                <SidePanelComponent isOpen={isSizeLargeOpen} onClose={() => setIsSizeLargeOpen(false)} size={SidePanelSize.Large}>
                    <SidePanelComponent.Title>Large</SidePanelComponent.Title>
                    <SidePanelComponent.Body><p>SidePanelSize.Large — 40% viewport width</p></SidePanelComponent.Body>
                </SidePanelComponent>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="customWidth"
                description="Override the predefined size with an exact pixel width."
                code={
                    <CodeExample
                        code={[
                            `import SidePanel from "@bodynarf/react.components/components/sidePanel";`,
                            "",
                            "/* ... */",
                            "",
                            `<SidePanel`,
                            `    isOpen={isOpen}`,
                            `    onClose={onClose}`,
                            `    customWidth="320px"`,
                            `>`,
                            `    <SidePanel.Body>`,
                            `        <p>Exactly 320px wide.</p>`,
                            `    </SidePanel.Body>`,
                            `</SidePanel>`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <div className="buttons">
                        <button type="button" className="button" onClick={() => { setCustomWidth("200"); setIsCustomWidthOpen(true); }}>200px</button>
                        <button type="button" className="button" onClick={() => { setCustomWidth("320"); setIsCustomWidthOpen(true); }}>320px</button>
                        <button type="button" className="button" onClick={() => { setCustomWidth("500"); setIsCustomWidthOpen(true); }}>500px</button>
                        <button type="button" className="button" onClick={() => { setCustomWidth("700"); setIsCustomWidthOpen(true); }}>700px</button>
                    </div>
                    <SidePanelComponent isOpen={isCustomWidthOpen} onClose={() => setIsCustomWidthOpen(false)} customWidth={customWidth}>
                        <SidePanelComponent.Title>Custom width</SidePanelComponent.Title>
                        <SidePanelComponent.Body><p>This panel is exactly {customWidth}px wide.</p></SidePanelComponent.Body>
                    </SidePanelComponent>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="position"
                description="Slide direction — Left (default) or Right."
                code={
                    <CodeExample
                        code={[
                            `import { ElementPosition } from "@bodynarf/react.components";`,
                            `import SidePanel from "@bodynarf/react.components/components/sidePanel";`,
                            "",
                            `<SidePanel`,
                            `    isOpen={isOpen}`,
                            `    onClose={onClose}`,
                            `    position={ElementPosition.Right}`,
                            `>`,
                            `    <SidePanel.Body>`,
                            `        <p>Slides from the right.</p>`,
                            `    </SidePanel.Body>`,
                            `</SidePanel>`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <button type="button" className="button" onClick={() => setIsRightOpen(true)}>
                        Open from right
                    </button>
                    <SidePanelComponent isOpen={isRightOpen} onClose={() => setIsRightOpen(false)} position={ElementPosition.Right}>
                        <SidePanelComponent.Title>Right panel</SidePanelComponent.Title>
                        <SidePanelComponent.Body><p>This panel slides in from the right.</p></SidePanelComponent.Body>
                    </SidePanelComponent>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="closeOnOverlayClick"
                description="Whether clicking the backdrop overlay closes the panel. Defaults to true. Set to false to require explicit close action."
                code={
                    <CodeExample
                        code={[
                            `import SidePanel from "@bodynarf/react.components/components/sidePanel";`,
                            "",
                            "/* ... */",
                            "",
                            `<SidePanel`,
                            `    isOpen={isOpen}`,
                            `    onClose={onClose}`,
                            `    closeOnOverlayClick={false}`,
                            `>`,
                            `    <SidePanel.Body>`,
                            `        <p>Clicking backdrop won't close this.</p>`,
                            `    </SidePanel.Body>`,
                            `</SidePanel>`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <button type="button" className="button" onClick={() => setIsNoOverlayClose(true)}>
                        Open (no overlay close)
                    </button>
                    <SidePanelComponent isOpen={isNoOverlayClose} onClose={() => setIsNoOverlayClose(false)} closeOnOverlayClick={false}>
                        <SidePanelComponent.Title showCloseButton closeLabel="Close me">Overlay close disabled</SidePanelComponent.Title>
                        <SidePanelComponent.Body><p>Clicking the backdrop does nothing. Use the close button or press Escape.</p></SidePanelComponent.Body>
                    </SidePanelComponent>
                </div>
            </ComponentUseCase>

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">SidePanel.Title props</h4>
            </div>

            <ComponentUseCase
                caption="Minimal use"
                description="SidePanel.Title renders a header with the provided text."
                code={
                    <CodeExample
                        code={[
                            `import SidePanel from "@bodynarf/react.components/components/sidePanel";`,
                            "",
                            "/* ... */",
                            "",
                            `<SidePanel`,
                            `    isOpen={isOpen}`,
                            `    onClose={onClose}`,
                            `>`,
                            `    <SidePanel.Title>Panel title</SidePanel.Title>`,
                            `    <SidePanel.Body>`,
                            `        <p>Content</p>`,
                            `    </SidePanel.Body>`,
                            `</SidePanel>`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <button type="button" className="button" onClick={() => setIsTitleOpen(true)}>
                        Open with title
                    </button>
                    <SidePanelComponent isOpen={isTitleOpen} onClose={() => setIsTitleOpen(false)} size={SidePanelSize.Medium}>
                        <SidePanelComponent.Title>Panel title</SidePanelComponent.Title>
                        <SidePanelComponent.Body><p>Panel body.</p></SidePanelComponent.Body>
                    </SidePanelComponent>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="showCloseButton"
                description="Show a close button inside the title bar."
                code={
                    <CodeExample
                        code={[
                            `import SidePanel from "@bodynarf/react.components/components/sidePanel";`,
                            "",
                            "/* ... */",
                            "",
                            `<SidePanel`,
                            `    isOpen={isOpen}`,
                            `    onClose={onClose}`,
                            `>`,
                            `    <SidePanel.Title showCloseButton>`,
                            `        Panel title`,
                            `    </SidePanel.Title>`,
                            `    <SidePanel.Body>`,
                            `        <p>Content</p>`,
                            `    </SidePanel.Body>`,
                            `</SidePanel>`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <button type="button" className="button" onClick={() => setIsCloseButtonOpen(true)}>
                        Open with close button
                    </button>
                    <SidePanelComponent isOpen={isCloseButtonOpen} onClose={() => setIsCloseButtonOpen(false)} size={SidePanelSize.Medium}>
                        <SidePanelComponent.Title showCloseButton>Panel with close button</SidePanelComponent.Title>
                        <SidePanelComponent.Body><p>Click the ✕ button in the header to close.</p></SidePanelComponent.Body>
                    </SidePanelComponent>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="closeLabel"
                description="Accessible label for the close button. Only relevant when showCloseButton is true."
                code={
                    <CodeExample
                        code={[
                            `import SidePanel from "@bodynarf/react.components/components/sidePanel";`,
                            "",
                            "/* ... */",
                            "",
                            `<SidePanel`,
                            `    isOpen={isOpen}`,
                            `    onClose={onClose}`,
                            `>`,
                            `    <SidePanel.Title`,
                            `       showCloseButton`,
                            `       closeLabel="Dismiss panel"`,
                            `    >`,
                            `        Panel title`,
                            `    </SidePanel.Title>`,
                            `    <SidePanel.Body>`,
                            `        <p>Content</p>`,
                            `    </SidePanel.Body>`,
                            `</SidePanel>`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <button type="button" className="button" onClick={() => setIsCloseLabelOpen(true)}>
                        Open
                    </button>
                    <SidePanelComponent isOpen={isCloseLabelOpen} onClose={() => setIsCloseLabelOpen(false)} size={SidePanelSize.Medium}>
                        <SidePanelComponent.Title showCloseButton closeLabel="Dismiss panel">Custom close label</SidePanelComponent.Title>
                        <SidePanelComponent.Body><p>The close button has a custom accessible label.</p></SidePanelComponent.Body>
                    </SidePanelComponent>
                </div>
            </ComponentUseCase>
        </section>
    );
};

export default SidePanel;
