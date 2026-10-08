import { FC } from "react";

import Center, { CenterAxis } from "@bodynarf/react.components/components/center";

const AXES: CenterAxis[] = ["both", "horizontal", "vertical"];

const CenterExamples: FC = () => (
    <section className="section">
        <div className="container">
            <h1 className="title is-3">Center</h1>
            <p className="subtitle is-6">
                Centers its content relative to the nearest parent with <code>position: relative</code>.
                Has no intrinsic size — sized by content.
            </p>

            {/* Axes */}
            {AXES.map(axis => (
                <div key={axis} className="box">
                    <p className="subtitle is-5">axis = &quot;{axis}&quot;</p>
                    <div className="card" style={{ position: "relative", height: "160px" }}>
                        <Center axis={axis}>
                            <span className="tag is-primary">Centered content</span>
                        </Center>
                    </div>
                </div>
            ))}

            {/* Arbitrary content */}
            <div className="box">
                <p className="subtitle is-5">Arbitrary content</p>
                <div className="card" style={{ position: "relative", height: "200px" }}>
                    <Center>
                        <div className="has-text-centered">
                            <span className="icon is-large has-text-info">
                                <i className="bi bi-inbox" />
                            </span>
                            <p className="subtitle is-6 mt-2">Any markup can be centered</p>
                        </div>
                    </Center>
                </div>
            </div>
        </div>
    </section>
);

export default CenterExamples;
