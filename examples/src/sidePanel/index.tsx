import { FC, useState } from "react";

import SidePanel from "@bodynarf/react.components/components/sidePanel";
import Button from "@bodynarf/react.components/components/button";
import { ButtonStyle, ElementPosition, SidePanelSize } from "@bodynarf/react.components";

const SidePanelExamples: FC = () => {
    const [rightOpen,    setRightOpen]    = useState(false);
    const [leftOpen,     setLeftOpen]     = useState(false);
    const [smallOpen,    setSmallOpen]    = useState(false);
    const [mediumOpen,   setMediumOpen]   = useState(false);
    const [largeOpen,    setLargeOpen]    = useState(false);
    const [noOverlay,    setNoOverlay]    = useState(false);
    const [customWidth,  setCustomWidth]  = useState(false);

    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-3">SidePanel</h1>

                {/* Positions */}
                <div className="box">
                    <p className="subtitle is-5">Position</p>
                    <div className="buttons">
                        <Button style={ButtonStyle.Primary} caption="Open Right (default)" onClick={() => setRightOpen(true)} />
                        <Button style={ButtonStyle.Info}    caption="Open Left"            onClick={() => setLeftOpen(true)} />
                    </div>
                </div>

                {/* Sizes */}
                <div className="box">
                    <p className="subtitle is-5">Sizes</p>
                    <div className="buttons">
                        <Button style={ButtonStyle.Default} caption="Small (10%)"  onClick={() => setSmallOpen(true)} />
                        <Button style={ButtonStyle.Default} caption="Medium (25%)" onClick={() => setMediumOpen(true)} />
                        <Button style={ButtonStyle.Default} caption="Large (40%)"  onClick={() => setLargeOpen(true)} />
                    </div>
                </div>

                {/* Custom width */}
                <div className="box">
                    <p className="subtitle is-5">Custom Width</p>
                    <Button style={ButtonStyle.Warning} caption="Open 500px wide" onClick={() => setCustomWidth(true)} />
                </div>

                {/* No overlay click close */}
                <div className="box">
                    <p className="subtitle is-5">Close on Overlay Click</p>
                    <Button style={ButtonStyle.Danger} caption="Open (overlay click does NOT close)" onClick={() => setNoOverlay(true)} />
                </div>

                {/* Panels */}
                <SidePanel isOpen={rightOpen} onClose={() => setRightOpen(false)} position={ElementPosition.Right}>
                    <SidePanel.Title showCloseButton>Right Panel</SidePanel.Title>
                    <SidePanel.Body>
                        <p>This is a right-aligned side panel (default position).</p>
                        <br />
                        <p>Use <code>SidePanel.Title</code> and <code>SidePanel.Body</code> for structured content.</p>
                    </SidePanel.Body>
                </SidePanel>

                <SidePanel isOpen={leftOpen} position={ElementPosition.Left} onClose={() => setLeftOpen(false)}>
                    <SidePanel.Title showCloseButton>Left Panel</SidePanel.Title>
                    <SidePanel.Body>
                        <p>This panel slides in from the left side.</p>
                    </SidePanel.Body>
                </SidePanel>

                <SidePanel isOpen={smallOpen} size={SidePanelSize.Small} onClose={() => setSmallOpen(false)}>
                    <SidePanel.Title showCloseButton>Small (10%)</SidePanel.Title>
                    <SidePanel.Body>
                        <p>Small 10% width panel.</p>
                    </SidePanel.Body>
                </SidePanel>

                <SidePanel isOpen={mediumOpen} size={SidePanelSize.Medium} onClose={() => setMediumOpen(false)}>
                    <SidePanel.Title showCloseButton>Medium (25%)</SidePanel.Title>
                    <SidePanel.Body>
                        <p>Medium 25% width panel.</p>
                    </SidePanel.Body>
                </SidePanel>

                <SidePanel isOpen={largeOpen} size={SidePanelSize.Large} onClose={() => setLargeOpen(false)}>
                    <SidePanel.Title showCloseButton>Large (40%)</SidePanel.Title>
                    <SidePanel.Body>
                        <p>Large 40% width panel.</p>
                    </SidePanel.Body>
                </SidePanel>

                <SidePanel isOpen={customWidth} customWidth="500px" onClose={() => setCustomWidth(false)}>
                    <SidePanel.Title showCloseButton>Custom 500px</SidePanel.Title>
                    <SidePanel.Body>
                        <p>This panel uses <code>customWidth=500</code> (px).</p>
                    </SidePanel.Body>
                </SidePanel>

                <SidePanel isOpen={noOverlay} closeOnOverlayClick={false} onClose={() => setNoOverlay(false)}>
                    <SidePanel.Title showCloseButton>No Overlay Close</SidePanel.Title>
                    <SidePanel.Body>
                        <p>Clicking outside this panel will NOT close it.</p>
                        <br />
                        <Button style={ButtonStyle.Danger} caption="Close" onClick={() => setNoOverlay(false)} />
                    </SidePanel.Body>
                </SidePanel>
            </div>
        </section>
    );
};

export default SidePanelExamples;
