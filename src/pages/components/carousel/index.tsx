import { FC, useRef, useState } from "react";

import CarouselComponent from "@bodynarf/react.components/components/carousel";
import { CarouselEffect } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";
import Log, { LogRef } from "@app/sharedComponents/log";

const slides = [
    {
        key: "slide1",
        children: (
            <div style={{ height: "180px", background: "#3273dc", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "1.5rem", borderRadius: "6px" }}>
                Slide 1
            </div>
        ),
    },
    {
        key: "slide2",
        children: (
            <div style={{ height: "180px", background: "#23d160", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "1.5rem", borderRadius: "6px" }}>
                Slide 2
            </div>
        ),
    },
    {
        key: "slide3",
        children: (
            <div style={{ height: "180px", background: "#ff3860", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "1.5rem", borderRadius: "6px" }}>
                Slide 3
            </div>
        ),
    },
];

/** Carousel component demo */
const Carousel: FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const onChangeLogRef = useRef<LogRef>(null);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Carousel"
                version="1.15"
                baseTypeName="BaseElementProps"
                description="Slides carousel for image galleries, banners and onboarding flows. Supports Fade and Slide effects, auto-play, loop, dots and arrow navigation."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Provide items with key and children. Default effect is Fade."
                code={
                    <CodeExample
                        code={[
                            `import Carousel from "@bodynarf/react.components/components/carousel";`,
                            "",
                            `<Carousel`,
                            `    items={[`,
                            `        { key: "s1", children: <div>Slide 1</div> },`,
                            `        { key: "s2", children: <div>Slide 2</div> },`,
                            `    ]}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <CarouselComponent items={slides} />
            </ComponentUseCase>

            <hr />
            <div><h4 className="subtitle is-4 has-text-weight-semibold">Custom component props</h4></div>

            <ComponentUseCase
                captionIsCode
                caption="items"
                description="Array of CarouselItem objects — each requires a unique key and children (ReactNode)."
                code={
                    <CodeExample
                        code={[
                            `import Carousel from "@bodynarf/react.components/components/carousel";`,
                            "",
                            `<Carousel`,
                            `    items={[`,
                            `        { key: "a", children: <div>Slide A</div> },`,
                            `        { key: "b", children: <div>Slide B</div> },`,
                            `        { key: "c", children: <div>Slide C</div> },`,
                            `    ]}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <CarouselComponent items={slides} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="effect"
                description="Transition effect when switching slides. CarouselEffect.Fade (default) or CarouselEffect.Slide."
                code={
                    <CodeExample
                        code={[
                            `import { CarouselEffect } from "@bodynarf/react.components";`,
                            `import Carousel from "@bodynarf/react.components/components/carousel";`,
                            "",
                            `<Carousel items={slides} effect={CarouselEffect.Fade} />`,
                            `<Carousel items={slides} effect={CarouselEffect.Slide} />`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex is-flex-direction-column" style={{ gap: "1rem" }}>
                    <div>
                        <p className="mb-1 has-text-grey">CarouselEffect.Fade</p>
                        <CarouselComponent items={slides} effect={CarouselEffect.Fade} />
                    </div>
                    <div>
                        <p className="mb-1 has-text-grey">CarouselEffect.Slide</p>
                        <CarouselComponent items={slides} effect={CarouselEffect.Slide} />
                    </div>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="autoPlay"
                description="Auto-advance slides automatically. Defaults to false."
                code={
                    <CodeExample
                        code={[
                            `import Carousel from "@bodynarf/react.components/components/carousel";`,
                            "",
                            `<Carousel items={slides} autoPlay />`,
                        ].join("\n")}
                    />
                }
            >
                <CarouselComponent items={slides} autoPlay />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="interval"
                description="Auto-play interval in milliseconds. Defaults to 3000. Only used when autoPlay is true."
                code={
                    <CodeExample
                        code={[
                            `import Carousel from "@bodynarf/react.components/components/carousel";`,
                            "",
                            `<Carousel`,
                            `    autoPlay`,
                            `    items={slides}`,
                            `    interval={1000}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <CarouselComponent items={slides} autoPlay interval={1000} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="showDots"
                description="Show navigation dots below the slides. Defaults to true."
                code={
                    <CodeExample
                        code={[
                            `import Carousel from "@bodynarf/react.components/components/carousel";`,
                            "",
                            `<Carousel items={slides} showDots={false} />`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex is-flex-direction-column" style={{ gap: "1rem" }}>
                    <div>
                        <p className="mb-1 has-text-grey">showDots: true (default)</p>
                        <CarouselComponent items={slides} />
                    </div>
                    <div>
                        <p className="mb-1 has-text-grey">showDots: false</p>
                        <CarouselComponent items={slides} showDots={false} />
                    </div>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="showArrows"
                description="Show previous/next arrow buttons. Defaults to true."
                code={
                    <CodeExample
                        code={[
                            `import Carousel from "@bodynarf/react.components/components/carousel";`,
                            "",
                            `<Carousel items={slides} showArrows={false} />`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex is-flex-direction-column" style={{ gap: "1rem" }}>
                    <div>
                        <p className="mb-1 has-text-grey">showArrows: true (default)</p>
                        <CarouselComponent items={slides} />
                    </div>
                    <div>
                        <p className="mb-1 has-text-grey">showArrows: false</p>
                        <CarouselComponent items={slides} showArrows={false} />
                    </div>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="loop"
                description="Loop back to the first slide after the last and vice versa. Defaults to true."
                code={
                    <CodeExample
                        code={[
                            `import Carousel from "@bodynarf/react.components/components/carousel";`,
                            "",
                            `<Carousel items={slides} loop={false} />`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex is-flex-direction-column" style={{ gap: "1rem" }}>
                    <div>
                        <p className="mb-1 has-text-grey">loop: true (default)</p>
                        <CarouselComponent items={slides} />
                    </div>
                    <div>
                        <p className="mb-1 has-text-grey">loop: false — arrows disable at boundaries</p>
                        <CarouselComponent items={slides} loop={false} />
                    </div>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="activeIndex"
                description="Controlled active slide index. When provided together with onChange the carousel becomes fully controlled."
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            "",
                            `import Carousel from "@bodynarf/react.components/components/carousel";`,
                            "",
                            `const [activeIndex, setActiveIndex] = useState(0);`,
                            "",
                            `<Carousel`,
                            `    items={slides}`,
                            `    activeIndex={activeIndex}`,
                            `    onChange={setActiveIndex}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <CarouselComponent items={slides} activeIndex={activeIndex} onChange={setActiveIndex} />
                <p className="mt-1 has-text-grey">Active slide index: {activeIndex}</p>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onChange"
                description="Called when the active slide changes. Receives the new zero-based index."
                code={
                    <CodeExample
                        code={[
                            `import Carousel from "@bodynarf/react.components/components/carousel";`,
                            "",
                            `<Carousel`,
                            `    items={slides}`,
                            `    onChange={index => console.log("slide changed to", index)}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <CarouselComponent
                    items={slides}
                    onChange={index => onChangeLogRef.current?.append(`onChange: ${index}`)}
                />
                <Log ref={onChangeLogRef} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="prevSlideLabel"
                description="Accessible aria-label for the &quot;previous slide&quot; arrow button. Defaults to &quot;Previous slide&quot;."
                code={
                    <CodeExample
                        code={[
                            `import Carousel from "@bodynarf/react.components/components/carousel";`,
                            "",
                            `<Carousel`,
                            `    items={slides}`,
                            `    prevSlideLabel="Назад"`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <CarouselComponent items={slides} prevSlideLabel="Назад" />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="nextSlideLabel"
                description="Accessible aria-label for the &quot;next slide&quot; arrow button. Defaults to &quot;Next slide&quot;."
                code={
                    <CodeExample
                        code={[
                            `import Carousel from "@bodynarf/react.components/components/carousel";`,
                            "",
                            `<Carousel items={slides} nextSlideLabel="Вперёд" />`,
                        ].join("\n")}
                    />
                }
            >
                <CarouselComponent items={slides} nextSlideLabel="Вперёд" />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="goToSlideLabel"
                description="Template for the dot button aria-label. Must contain {0} which is replaced with the 1-based slide number. Defaults to &quot;Go to slide {0}&quot;."
                code={
                    <CodeExample
                        code={[
                            `import Carousel from "@bodynarf/react.components/components/carousel";`,
                            "",
                            `<Carousel items={slides} goToSlideLabel="Перейти к слайду {0}" />`,
                        ].join("\n")}
                    />
                }
            >
                <CarouselComponent items={slides} goToSlideLabel="Перейти к слайду {0}" />
            </ComponentUseCase>
        </section>
    );
};

export default Carousel;
