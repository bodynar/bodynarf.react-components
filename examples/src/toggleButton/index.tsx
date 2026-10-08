import { FC, useState } from "react";

import ToggleButton from "@bodynarf/react.components/components/toggleButton";
import { ButtonStyle, ElementPosition, ElementSize } from "@bodynarf/react.components";

const ToggleButtonExamples: FC = () => {
    const [soundOn, setSoundOn] = useState(true);
    const [wifiOn, setWifiOn] = useState(false);

    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-3">Toggle Button</h1>

                <p className="block help">
                    Button that switches between an outlined (inactive) and a solid (active) state.
                    Works in controlled (<code>active</code>) and uncontrolled (<code>defaultActive</code>) modes.
                </p>

                {/* Uncontrolled */}
                <div className="box">
                    <p className="subtitle is-5">Uncontrolled</p>
                    <div className="buttons">
                        <ToggleButton

                            caption="Bold"
                            icon={{ name: "type-bold" }}

                            onToggle={active => console.log("bold:", active)}
                        />
                        <ToggleButton

                            caption="Italic"
                            icon={{ name: "type-italic" }}
                            defaultActive

                            onToggle={active => console.log("italic:", active)}
                        />
                        <ToggleButton

                            caption="Underline"
                            icon={{ name: "type-underline" }}
                        />
                    </div>
                    <p className="help mt-2">The component keeps its own state; <code>onToggle</code> reports the new value on every click.</p>
                </div>

                {/* Controlled */}
                <div className="box">
                    <p className="subtitle is-5">Controlled</p>
                    <div className="buttons">
                        <ToggleButton

                            caption="Sound"
                            icon={{ name: "volume-up" }}

                            active={soundOn}
                            onToggle={setSoundOn}
                        />
                        <ToggleButton

                            caption="Wi-Fi"
                            icon={{ name: "wifi", position: ElementPosition.Right }}

                            style={ButtonStyle.Info}
                            active={wifiOn}
                            onToggle={setWifiOn}
                        />
                    </div>
                    <p className="help mt-2">Sound: <code>{String(soundOn)}</code>; Wi-Fi: <code>{String(wifiOn)}</code>.</p>
                </div>

                {/* Styles */}
                <div className="box">
                    <p className="subtitle is-5">Styles</p>
                    <div className="buttons">
                        <ToggleButton caption="Primary" style={ButtonStyle.Primary} defaultActive />
                        <ToggleButton caption="Link"    style={ButtonStyle.Link}    defaultActive />
                        <ToggleButton caption="Info"    style={ButtonStyle.Info}    defaultActive />
                        <ToggleButton caption="Success" style={ButtonStyle.Success} defaultActive />
                        <ToggleButton caption="Warning" style={ButtonStyle.Warning} defaultActive />
                        <ToggleButton caption="Danger"  style={ButtonStyle.Danger}  defaultActive />
                    </div>
                    <p className="help mt-2">Inactive buttons are outlined, active ones are solid.</p>
                </div>

                {/* Sizes */}
                <div className="box">
                    <p className="subtitle is-5">Sizes</p>
                    <div className="buttons">
                        <ToggleButton caption="Small"  size={ElementSize.Small}  defaultActive />
                        <ToggleButton caption="Normal" size={ElementSize.Normal} defaultActive />
                        <ToggleButton caption="Medium" size={ElementSize.Medium} defaultActive />
                        <ToggleButton caption="Large"  size={ElementSize.Large}  defaultActive />
                    </div>
                </div>

                {/* Modifiers */}
                <div className="box">
                    <p className="subtitle is-5">Modifiers</p>
                    <div className="buttons">
                        <ToggleButton caption="Rounded"  rounded  defaultActive />
                        <ToggleButton caption="Not outlined (always solid)" />
                        <ToggleButton caption="Disabled" disabled defaultActive />
                        <ToggleButton caption="Disabled inactive" disabled />
                    </div>
                    <p className="help mt-2">Icon only (no caption)</p>
                    <div className="buttons mt-2">
                        <ToggleButton icon={{ name: "volume-up" }}   title="Volume" />
                        <ToggleButton icon={{ name: "moon-stars" }}  title="Night mode" defaultActive />
                        <ToggleButton icon={{ name: "bell" }}        title="Notifications" />
                        <ToggleButton icon={{ name: "lock" }}        title="Locked" disabled defaultActive />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ToggleButtonExamples;
