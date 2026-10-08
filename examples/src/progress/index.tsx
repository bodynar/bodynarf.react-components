import { FC, useState } from "react";

import Progress from "@bodynarf/react.components/components/progress";
import { ElementColor, ElementSize } from "@bodynarf/react.components";

const ProgressExamples: FC = () => {
    const [value, setValue] = useState(40);

    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-3">Progress</h1>

                {/* Basic */}
                <div className="box">
                    <p className="subtitle is-5">Basic</p>
                    <Progress value={65} />
                </div>

                {/* Show value */}
                <div className="box">
                    <p className="subtitle is-5">Show Value</p>
                    <Progress value={72} showValue />
                    <Progress value={30} showValue max={50} />
                </div>

                {/* Min / Max */}
                <div className="box">
                    <p className="subtitle is-5">Custom Min / Max</p>
                    <p className="help mb-2">value=7, min=0, max=10</p>
                    <Progress value={7} min={0} max={10} showValue />
                    <p className="help mt-3 mb-2">value=250, min=100, max=500</p>
                    <Progress value={250} min={100} max={500} showValue />
                </div>

                {/* Colors */}
                <div className="box">
                    <p className="subtitle is-5">Colors</p>
                    <div className="mb-2"><p className="help">Default</p><Progress value={60} /></div>
                    <div className="mb-2"><p className="help">Primary</p><Progress value={60} color={ElementColor.Primary} /></div>
                    <div className="mb-2"><p className="help">Info</p><Progress value={60} color={ElementColor.Info} /></div>
                    <div className="mb-2"><p className="help">Success</p><Progress value={60} color={ElementColor.Success} /></div>
                    <div className="mb-2"><p className="help">Warning</p><Progress value={60} color={ElementColor.Warning} /></div>
                    <div className="mb-2"><p className="help">Danger</p><Progress value={60} color={ElementColor.Danger} /></div>
                </div>

                {/* Sizes */}
                <div className="box">
                    <p className="subtitle is-5">Sizes</p>
                    <div className="mb-2"><p className="help">Small</p><Progress value={55} size={ElementSize.Small}  color={ElementColor.Primary} /></div>
                    <div className="mb-2"><p className="help">Normal</p><Progress value={55} size={ElementSize.Normal} color={ElementColor.Primary} /></div>
                    <div className="mb-2"><p className="help">Medium</p><Progress value={55} size={ElementSize.Medium} color={ElementColor.Primary} /></div>
                    <div className="mb-2"><p className="help">Large</p><Progress value={55} size={ElementSize.Large}  color={ElementColor.Primary} /></div>
                </div>

                {/* Indeterminate */}
                <div className="box">
                    <p className="subtitle is-5">Indeterminate</p>
                    <p className="help mb-2">No value provided - shows animated progress bar</p>
                    <Progress indeterminate color={ElementColor.Primary} />
                    <div className="mt-2"><Progress indeterminate color={ElementColor.Success} /></div>
                </div>

                {/* Animated */}
                <div className="box">
                    <p className="subtitle is-5">Animated (striped)</p>
                    <Progress value={60} animated color={ElementColor.Info} />
                </div>

                {/* Loading text */}
                <div className="box">
                    <p className="subtitle is-5">Loading Text</p>
                    <Progress indeterminate loadingText="Loading data..." color={ElementColor.Warning} />
                </div>

                {/* Interactive */}
                <div className="box">
                    <p className="subtitle is-5">Interactive</p>
                    <Progress value={value} showValue color={ElementColor.Primary} />
                    <div className="mt-3">
                        <input
                            type="range"
                            min={0}
                            max={100}
                            value={value}
                            onChange={e => setValue(Number(e.target.value))}
                            style={{ width: "100%" }}
                        />
                        <p className="help">Value: {value}%</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgressExamples;
