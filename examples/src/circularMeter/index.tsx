import { FC, useState } from "react";

import CircularMeter from "@bodynarf/react.components/components/circularMeter";
import { ElementColor, ElementSize } from "@bodynarf/react.components";


const CircularMeterExamples: FC = () => {
    const [battery, setBattery] = useState(65);
    const [volume, setVolume] = useState(40);

    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-3">Circular Meter</h1>

                <p className="block help">
                    SVG progress ring. Pass <code>readonly=&#123;false&#125;</code> + <code>onChange</code> to make it draggable / keyboard-driven.
                </p>

                {/* Values & colors */}
                <div className="box">
                    <p className="subtitle is-5">Values &amp; colors</p>
                    <div className="is-flex is-flex-wrap-wrap is-align-items-center" style={{ gap: "1.5rem" }}>
                        <div className="has-text-centered">
                            <CircularMeter value={25} color={ElementColor.Primary} valueTemplate="{value}%" label="primary" />
                        </div>
                        <div className="has-text-centered">
                            <CircularMeter value={60} color={ElementColor.Info} valueTemplate="{value}%" label="info" />
                        </div>
                        <div className="has-text-centered">
                            <CircularMeter value={85} color={ElementColor.Success} valueTemplate="{value}%" label="success" />
                        </div>
                        <div className="has-text-centered">
                            <CircularMeter value={42} color={ElementColor.Warning} valueTemplate="{value}%" label="warning" />
                        </div>
                        <div className="has-text-centered">
                            <CircularMeter value={12} color={ElementColor.Danger} valueTemplate="{value}%" label="danger" />
                        </div>
                    </div>
                </div>

                {/* Sizes */}
                <div className="box">
                    <p className="subtitle is-5">Sizes</p>
                    <div className="is-flex is-flex-wrap-wrap is-align-items-center" style={{ gap: "1.5rem" }}>
                        {([ElementSize.Small, ElementSize.Normal, ElementSize.Medium, ElementSize.Large] as ElementSize[]).map((sz, i) => (
                            <div key={sz} className="has-text-centered">
                                <CircularMeter value={20 + i * 20} size={sz} color={ElementColor.Link} valueTemplate="{value}%" label={sz} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Custom range & template */}
                <div className="box">
                    <p className="subtitle is-5">Custom range &amp; track color</p>
                    <p className="help mb-3">min=0, max=250, value=175, custom track color</p>
                    <CircularMeter
                        value={175}
                        min={0}
                        max={250}
                        step={5}
                        color={ElementColor.Primary}
                        trackColor="#e8e8e8"
                        valueTemplate="{value} / 250"
                        label="points"
                        size={ElementSize.Medium}
                    />
                </div>

                {/* Interactive */}
                <div className="box">
                    <p className="subtitle is-5">Interactive (drag / arrow keys)</p>
                    <div className="is-flex is-flex-wrap-wrap is-align-items-center" style={{ gap: "2.5rem" }}>
                        <div className="has-text-centered">
                            <p className="help mb-2">Battery</p>
                            <CircularMeter
                                value={battery}
                                readonly={false}
                                step={1}
                                color={ElementColor.Success}
                                valueTemplate="{value}%"
                                onChange={setBattery}
                                size={ElementSize.Medium}
                            />
                        </div>
                        <div className="has-text-centered">
                            <p className="help mb-2">Volume (step 5)</p>
                            <CircularMeter
                                value={volume}
                                readonly={false}
                                step={5}
                                color={ElementColor.Info}
                                valueTemplate="{value}"
                                label="vol"
                                onChange={setVolume}
                                size={ElementSize.Medium}
                            />
                        </div>
                    </div>
                    <p className="help mt-3">Click + drag on a meter, or focus it (Tab) and use ↑ / ↓ arrows.</p>
                </div>
            </div>
        </section>
    );
};

export default CircularMeterExamples;
