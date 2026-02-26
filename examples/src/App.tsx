import { ElementColor, ElementSize, Slider } from "@bodynarf/react.components";

import "./App.scss";

const sizes = [ElementSize.Small, ElementSize.Normal, ElementSize.Medium, ElementSize.Large];
const colors = [undefined, ElementColor.Primary, ElementColor.Link, ElementColor.Info, ElementColor.Success, ElementColor.Warning, ElementColor.Danger];

const sizeLabels: Record<string, string> = {
    "small": "Small",
    "normal": "Normal",
    "medium": "Medium",
    "large": "Large",
};

const colorLabels: Record<string, string> = {
    "undefined": "Default",
    "primary": "Primary",
    "link": "Link",
    "info": "Info",
    "success": "Success",
    "warning": "Warning",
    "danger": "Danger",
};

const App = () => {
    return (
        <section className="section">
            <div className="container">
                <h1 className="title">Slider Component - All Variations</h1>

                <div className="box">
                    <h2 className="subtitle">Basic Slider</h2>
                    <Slider />
                </div>

                <div className="box">
                    <h2 className="subtitle">With Value Tooltip</h2>
                    <Slider showValue defaultValue={50} />
                </div>

                <div className="box">
                    <h2 className="subtitle">With Value Tooltip (Bottom)</h2>
                    <Slider showValue valuePosition="bottom" defaultValue={50} style={ElementColor.Info} />
                </div>

                <div className="box slider-minimal-value">
                    <h2 className="subtitle">Minimal Value Display (No Background)</h2>
                    <Slider showValue valuePosition="bottom" defaultValue={50} />
                </div>

                <div className="box">
                    <h2 className="subtitle">With Min/Max Labels</h2>
                    <Slider showMinMax min={0} max={100} defaultValue={30} />
                </div>

                <div className="box">
                    <h2 className="subtitle">With Value Formatter</h2>
                    <Slider
                        showValue
                        min={0}
                        max={100}
                        defaultValue={75}
                        valueFormatter={(v) => `${v}%`}
                    />
                </div>

                <div className="box">
                    <h2 className="subtitle">Without Progress Fill</h2>
                    <Slider showProgress={false} defaultValue={60} />
                </div>

                <div className="box">
                    <h2 className="subtitle">Circle Style</h2>
                    <Slider circle showValue defaultValue={45} />
                </div>

                <div className="box">
                    <h2 className="subtitle">Custom Range (0-10, step 0.5)</h2>
                    <Slider
                        min={0}
                        max={10}
                        step={0.5}
                        showValue
                        showMinMax
                        defaultValue={5}
                    />
                </div>

                <div className="box">
                    <h2 className="subtitle">Disabled</h2>
                    <Slider disabled defaultValue={40} />
                </div>

                <div className="box">
                    <h2 className="subtitle">All Sizes</h2>
                    <div className="columns is-multiline">
                        {sizes.map(size => (
                            <div className="column is-6" key={size}>
                                <p className="mb-2"><strong>{sizeLabels[size]}</strong></p>
                                <Slider size={size} showValue defaultValue={50} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="box">
                    <h2 className="subtitle">All Colors</h2>
                    <div className="columns is-multiline">
                        {colors.map((color, i) => (
                            <div className="column is-6" key={i}>
                                <p className="mb-2"><strong>{colorLabels[String(color)]}</strong></p>
                                <Slider style={color} showValue defaultValue={50 + i * 5} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="box">
                    <h2 className="subtitle">Vertical Sliders</h2>
                    <div className="is-flex" style={{ gap: "3rem", height: "250px" }}>
                        {colors.slice(1, 5).map((color, i) => (
                            <div key={i} className="has-text-centered">
                                <Slider
                                    vertical
                                    verticalHeight="200px"
                                    style={color}
                                    showValue
                                    defaultValue={30 + i * 15}
                                />
                                <p className="mt-2">{colorLabels[String(color)]}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="box">
                    <h2 className="subtitle">Temperature Slider</h2>
                    <Slider
                        min={-20}
                        max={40}
                        step={1}
                        showValue
                        showMinMax
                        defaultValue={22}
                        style={ElementColor.Danger}
                        valueFormatter={(v) => `${v}°C`}
                    />
                </div>

                <div className="box">
                    <h2 className="subtitle">Volume Slider</h2>
                    <Slider
                        min={0}
                        max={100}
                        showValue
                        circle
                        defaultValue={65}
                        style={ElementColor.Info}
                        valueFormatter={(v) => `🔊 ${v}`}
                    />
                </div>
            </div>
        </section>
    );
};

export default App;
