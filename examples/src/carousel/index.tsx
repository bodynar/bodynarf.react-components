import { FC, useState } from "react";

import Carousel from "@bodynarf/react.components/components/carousel";
import { CarouselEffect } from "@bodynarf/react.components";

const SLIDE_STYLE: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    fontSize: "1.5rem",
    fontWeight: 600,
    borderRadius: 6,
};

const SLIDES_COLORS = [
    { key: "s1", bg: "#3273dc", label: "Slide 1" },
    { key: "s2", bg: "#23d160", label: "Slide 2" },
    { key: "s3", bg: "#ff3860", label: "Slide 3" },
    { key: "s4", bg: "#ffdd57", label: "Slide 4" },
];

const makeItems = (keys: typeof SLIDES_COLORS) =>
    keys.map(({ key, bg, label }) => ({
        key,
        children: (
            <div style={{ ...SLIDE_STYLE, background: bg, color: "#fff" }}>
                {label}
            </div>
        ),
    }));

/** All Carousel component variations */
const CarouselExamples: FC = () => {
    const [controlled, setControlled] = useState(0);

    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-3">Carousel</h1>

                {/* Default (Fade effect) */}
                <div className="box">
                    <p className="subtitle is-5">Default — Fade effect</p>
                    <p className="help mb-4">Uncontrolled. Arrows + dots visible. Loop enabled.</p>
                    <Carousel items={makeItems(SLIDES_COLORS)} />
                </div>

                {/* Slide effect */}
                <div className="box">
                    <p className="subtitle is-5">Slide effect</p>
                    <p className="help mb-4"><code>effect=&#123;CarouselEffect.Slide&#125;</code></p>
                    <Carousel items={makeItems(SLIDES_COLORS)} effect={CarouselEffect.Slide} />
                </div>

                {/* Auto-play */}
                <div className="box">
                    <p className="subtitle is-5">Auto-play (1.5 s)</p>
                    <p className="help mb-4"><code>autoPlay interval=&#123;1500&#125;</code></p>
                    <Carousel items={makeItems(SLIDES_COLORS)} autoPlay interval={1500} />
                </div>

                {/* No arrows / no dots */}
                <div className="box">
                    <p className="subtitle is-5">No arrows, no dots</p>
                    <p className="help mb-4"><code>showArrows=&#123;false&#125; showDots=&#123;false&#125;</code></p>
                    <Carousel items={makeItems(SLIDES_COLORS)} showArrows={false} showDots={false} autoPlay />
                </div>

                {/* No loop */}
                <div className="box">
                    <p className="subtitle is-5">No loop</p>
                    <p className="help mb-4"><code>loop=&#123;false&#125;</code> — arrows disable at boundaries.</p>
                    <Carousel items={makeItems(SLIDES_COLORS)} loop={false} />
                </div>

                {/* Controlled */}
                <div className="box">
                    <p className="subtitle is-5">Controlled</p>
                    <p className="help mb-4">Parent owns <code>activeIndex</code>.</p>
                    <Carousel
                        items={makeItems(SLIDES_COLORS)}
                        activeIndex={controlled}
                        onChange={setControlled}
                    />
                    <div className="buttons mt-3">
                        {SLIDES_COLORS.map((s, i) => (
                            <button
                                key={s.key}
                                type="button"
                                className={`button is-small ${controlled === i ? "is-primary" : "is-light"}`}
                                onClick={() => setControlled(i)}
                            >
                                {s.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Single slide */}
                <div className="box">
                    <p className="subtitle is-5">Single slide</p>
                    <p className="help mb-4">Arrows and dots are automatically hidden.</p>
                    <Carousel items={[makeItems(SLIDES_COLORS)[0]]} />
                </div>
            </div>
        </section>
    );
};

export default CarouselExamples;
