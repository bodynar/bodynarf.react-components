import { FC } from "react";

import Accordion from "@bodynarf/react.components/components/accordion";
import { ElementColor, ElementSize, Icon } from "@bodynarf/react.components";

const AccordionExamples: FC = () => (
    <section className="section">
        <div className="container">
            <h1 className="title is-3">Accordion</h1>

            {/* Colors */}
            <div className="box">
                <p className="subtitle is-5">Colors</p>
                <Accordion caption="Default (no color)">
                    <p>This is the default accordion panel without any color modifier.</p>
                </Accordion>
                <Accordion caption="Primary" style={ElementColor.Primary}>
                    <p>Primary colored accordion.</p>
                </Accordion>
                <Accordion caption="Info" style={ElementColor.Info}>
                    <p>Info colored accordion.</p>
                </Accordion>
                <Accordion caption="Success" style={ElementColor.Success}>
                    <p>Success colored accordion.</p>
                </Accordion>
                <Accordion caption="Warning" style={ElementColor.Warning}>
                    <p>Warning colored accordion.</p>
                </Accordion>
                <Accordion caption="Danger" style={ElementColor.Danger}>
                    <p>Danger colored accordion.</p>
                </Accordion>
            </div>

            {/* Sizes */}
            <div className="box">
                <p className="subtitle is-5">Sizes</p>
                <Accordion caption="Small" size={ElementSize.Small} style={ElementColor.Primary}>
                    <p>Small size accordion.</p>
                </Accordion>
                <Accordion caption="Normal (default)" size={ElementSize.Normal} style={ElementColor.Primary}>
                    <p>Normal size accordion.</p>
                </Accordion>
                <Accordion caption="Medium" size={ElementSize.Medium} style={ElementColor.Primary}>
                    <p>Medium size accordion.</p>
                </Accordion>
                <Accordion caption="Large" size={ElementSize.Large} style={ElementColor.Primary}>
                    <p>Large size accordion.</p>
                </Accordion>
            </div>

            {/* Default expanded */}
            <div className="box">
                <p className="subtitle is-5">Default Expanded</p>
                <Accordion caption="Collapsed by default">
                    <p>This panel starts collapsed (default behavior).</p>
                </Accordion>
                <Accordion caption="Expanded by default" defaultExpanded style={ElementColor.Info}>
                    <p>This panel starts expanded thanks to <code>defaultExpanded</code> prop.</p>
                </Accordion>
            </div>

            {/* onToggle callback */}
            <div className="box">
                <p className="subtitle is-5">onToggle Callback</p>
                <Accordion
                    caption="Toggle me"
                    style={ElementColor.Warning}
                    onToggle={(collapsed) => console.log("Accordion collapsed:", collapsed)}
                >
                    <p>Open the browser console and toggle this accordion to see the callback fired.</p>
                </Accordion>
            </div>

            {/* Rich content */}
            <div className="box">
                <p className="subtitle is-5">Rich Content</p>
                <Accordion caption="System Information" style={ElementColor.Link}>
                    <table className="table is-narrow is-fullwidth">
                        <tbody>
                            <tr><td><strong>OS</strong></td><td>Windows 11</td></tr>
                            <tr><td><strong>Node</strong></td><td>v22.14.0</td></tr>
                            <tr><td><strong>React</strong></td><td>18.x</td></tr>
                        </tbody>
                    </table>
                </Accordion>
                <Accordion caption="Release Notes v2.0" style={ElementColor.Success}>
                    <ul>
                        <li>New accordion component</li>
                        <li>Improved color system</li>
                        <li>Performance optimizations</li>
                    </ul>
                </Accordion>
            </div>

            {/* Custom header (Accordion.Header) */}
            <div className="box">
                <p className="subtitle is-5">Custom Header (Accordion.Header)</p>
                <p className="help mb-2">
                    The <code>Accordion.Header</code> slot renders arbitrary content in the header and takes precedence over the <code>caption</code> string.
                </p>
                <Accordion style={ElementColor.Primary}>
                    <Accordion.Header>
                        <span className="icon is-small mr-1">
                            <Icon name="gear" />
                        </span>
                        <span>Settings</span>
                    </Accordion.Header>
                    <p>Header rendered from custom content (icon + text). No <code>caption</code> prop is used.</p>
                </Accordion>
                <Accordion
                    caption="This caption is ignored"
                    style={ElementColor.Info}
                >
                    <Accordion.Header>
                        <strong>Header wins over caption</strong>
                    </Accordion.Header>
                    <p>When both <code>caption</code> and <code>Accordion.Header</code> are provided, the header content is shown.</p>
                </Accordion>
            </div>
        </div>
    </section>
);

export default AccordionExamples;
