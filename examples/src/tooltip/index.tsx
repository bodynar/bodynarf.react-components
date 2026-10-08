import { FC, useState } from "react";

import Tooltip from "@bodynarf/react.components/components/tooltip";
import Button from "@bodynarf/react.components/components/button";
import { ButtonStyle, TooltipAnimation, TooltipCloseOn, TooltipPosition } from "@bodynarf/react.components";

const TooltipExamples: FC = () => {
    const [visible, setVisible] = useState(false);

    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-3">Tooltip</h1>

                {/* Positions */}
                <div className="box">
                    <p className="subtitle is-5">Positions</p>
                    <div className="is-flex is-flex-wrap-wrap" style={{ gap: "24px", padding: "32px 0" }}>
                        {[TooltipPosition.Top, TooltipPosition.Bottom, TooltipPosition.Left, TooltipPosition.Right].map(pos => (
                            <Tooltip key={pos} position={pos}>
                                <Tooltip.Target>
                                    <Button style={ButtonStyle.Default} caption={pos} onClick={() => {}} />
                                </Tooltip.Target>
                                <Tooltip.Hint>
                                    <span>Tooltip on {pos}</span>
                                </Tooltip.Hint>
                            </Tooltip>
                        ))}
                    </div>
                </div>

                {/* Animations */}
                <div className="box">
                    <p className="subtitle is-5">Animations</p>
                    <div className="is-flex" style={{ gap: "16px" }}>
                        <Tooltip animation={TooltipAnimation.None}>
                            <Tooltip.Target>
                                <Button style={ButtonStyle.Default} caption="No animation" onClick={() => {}} />
                            </Tooltip.Target>
                            <Tooltip.Hint><span>No animation</span></Tooltip.Hint>
                        </Tooltip>

                        <Tooltip animation={TooltipAnimation.Fade}>
                            <Tooltip.Target>
                                <Button style={ButtonStyle.Info} caption="Fade" onClick={() => {}} />
                            </Tooltip.Target>
                            <Tooltip.Hint><span>Fade animation</span></Tooltip.Hint>
                        </Tooltip>

                        <Tooltip animation={TooltipAnimation.Slide}>
                            <Tooltip.Target>
                                <Button style={ButtonStyle.Primary} caption="Slide" onClick={() => {}} />
                            </Tooltip.Target>
                            <Tooltip.Hint><span>Slide animation</span></Tooltip.Hint>
                        </Tooltip>
                    </div>
                </div>

                {/* Close on */}
                <div className="box">
                    <p className="subtitle is-5">Close Behavior</p>
                    <div className="is-flex" style={{ gap: "16px" }}>
                        <Tooltip closeOn={TooltipCloseOn.MouseLeave}>
                            <Tooltip.Target>
                                <Button style={ButtonStyle.Default} caption="MouseLeave" onClick={() => {}} />
                            </Tooltip.Target>
                            <Tooltip.Hint><span>Closes when mouse leaves the target</span></Tooltip.Hint>
                        </Tooltip>

                        <Tooltip closeOn={TooltipCloseOn.OutsideClick}>
                            <Tooltip.Target>
                                <Button style={ButtonStyle.Default} caption="OutsideClick" onClick={() => {}} />
                            </Tooltip.Target>
                            <Tooltip.Hint><span>Closes on click outside tooltip</span></Tooltip.Hint>
                        </Tooltip>

                        <Tooltip closeOn={TooltipCloseOn.Manual} visible={visible}>
                            <Tooltip.Target>
                                <Button style={ButtonStyle.Primary} caption={visible ? "Hide tooltip" : "Show tooltip"} onClick={() => setVisible(v => !v)} />
                            </Tooltip.Target>
                            <Tooltip.Hint><span>Manually controlled tooltip</span></Tooltip.Hint>
                        </Tooltip>
                    </div>
                </div>

                {/* Open delay */}
                <div className="box">
                    <p className="subtitle is-5">Open Delay (500ms)</p>
                    <Tooltip openDelay={500}>
                        <Tooltip.Target>
                            <Button style={ButtonStyle.Warning} caption="Hover (waits 500ms)" onClick={() => {}} />
                        </Tooltip.Target>
                        <Tooltip.Hint><span>Tooltip appeared after 500ms delay</span></Tooltip.Hint>
                    </Tooltip>
                </div>

                {/* Rich hint content */}
                <div className="box">
                    <p className="subtitle is-5">Rich Content Hint</p>
                    <Tooltip position={TooltipPosition.Right}>
                        <Tooltip.Target>
                            <Button style={ButtonStyle.Info} caption="Hover for details" onClick={() => {}} />
                        </Tooltip.Target>
                        <Tooltip.Hint>
                            <div>
                                <strong>Keyboard Shortcuts</strong>
                                <ul style={{ marginTop: "4px", paddingLeft: "16px" }}>
                                    <li><kbd>Ctrl+S</kbd> - Save</li>
                                    <li><kbd>Ctrl+Z</kbd> - Undo</li>
                                    <li><kbd>Ctrl+Shift+Z</kbd> - Redo</li>
                                </ul>
                            </div>
                        </Tooltip.Hint>
                    </Tooltip>
                </div>

                {/* Wrapping different elements */}
                <div className="box">
                    <p className="subtitle is-5">Wrap Any Element</p>
                    <div className="is-flex is-align-items-center" style={{ gap: "24px" }}>
                        <Tooltip>
                            <Tooltip.Target>
                                <span className="tag is-primary">Hover tag</span>
                            </Tooltip.Target>
                            <Tooltip.Hint><span>Tag tooltip</span></Tooltip.Hint>
                        </Tooltip>

                        <Tooltip>
                            <Tooltip.Target>
                                <input className="input" style={{ width: "200px" }} placeholder="Hover input" readOnly />
                            </Tooltip.Target>
                            <Tooltip.Hint><span>Input field tooltip</span></Tooltip.Hint>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TooltipExamples;
