import { FC, useState } from "react";

import { Rating as RatingComponent } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

/** Rating component demo */
const Rating: FC = () => {
    const [value, setValue] = useState(3);
    const [halfValue, setHalfValue] = useState(3.5);
    const [clearableValue, setClearableValue] = useState(3);
    const [maxValue, setMaxValue] = useState(3);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Rating"
                version="1.15"
                baseTypeName="BaseElementProps"
                description="Star-based rating input for reviews and feedback forms. Supports half-star increments and read-only display mode."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="No props required. Provide onChange to make it interactive."
                code={
                    <CodeExample
                        code={[
                            `import { Rating } from "@bodynarf/react.components";`,
                            "",
                            "const [value, setValue] = useState(3);",
                            "",
                            `<Rating value={value} onChange={setValue} />`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <RatingComponent value={value} onChange={setValue} />
                    <p className="mt-1 has-text-grey">Selected: {value}</p>
                </div>
            </ComponentUseCase>

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">Custom component props</h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="max"
                description="Maximum number of stars. Defaults to 5."
                code={
                    <CodeExample
                        code={[
                            `import { Rating } from "@bodynarf/react.components";`,
                            "",
                            `<Rating value={value} max={10} onChange={setValue} />`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <RatingComponent value={maxValue} max={10} onChange={setMaxValue} />
                    <p className="mt-1 has-text-grey">Selected: {maxValue} / 10</p>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="allowHalf"
                description="Enable half-star values (0.5 increments)."
                code={
                    <CodeExample
                        code={[
                            `import { Rating } from "@bodynarf/react.components";`,
                            "",
                            "const [value, setValue] = useState(3.5);",
                            "",
                            `<Rating value={value} allowHalf onChange={setValue} />`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <RatingComponent value={halfValue} allowHalf onChange={setHalfValue} />
                    <p className="mt-1 has-text-grey">Selected: {halfValue}</p>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="clearable"
                description="Allow clicking the currently selected star to reset the value to 0."
                code={
                    <CodeExample
                        code={[
                            `import { Rating } from "@bodynarf/react.components";`,
                            "",
                            `<Rating value={value} clearable onChange={setValue} />`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <RatingComponent value={clearableValue} clearable onChange={setClearableValue} />
                    <p className="mt-1 has-text-grey">Selected: {clearableValue} (click active star to clear)</p>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="readonly"
                description="Render in read-only display mode — no hover or click interactions."
                code={
                    <CodeExample
                        code={[
                            `import { Rating } from "@bodynarf/react.components";`,
                            "",
                            `<Rating value={4.5} allowHalf readonly />`,
                        ].join("\n")}
                    />
                }
            >
                <RatingComponent value={4.5} allowHalf readonly />
            </ComponentUseCase>

            <ComponentSizeCase
                captionIsCode
                caption="size"
                description="Rating supports all ElementSize values."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { Rating, ElementSize } from "@bodynarf/react.components";`,
                            "",
                            `<Rating value={3} size={ElementSize.${id}} />`,
                        ].join("\n")}
                    />
                }
                componentProvider={size =>
                    <RatingComponent value={3} size={size} />
                }
            />

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">BaseElementProps</h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="className"
                description="Additional CSS class names applied to the root element."
                code={
                    <CodeExample
                        code={[
                            `import { Rating } from "@bodynarf/react.components";`,
                            "",
                            `<Rating value={3} className="my-custom-class" />`,
                        ].join("\n")}
                    />
                }
            >
                <RatingComponent value={3} className="has-text-danger" />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="title"
                description="Native HTML title attribute shown as a tooltip on hover."
                code={
                    <CodeExample
                        code={[
                            `import { Rating } from "@bodynarf/react.components";`,
                            "",
                            `<Rating value={3} title="Your rating" />`,
                        ].join("\n")}
                    />
                }
            >
                <RatingComponent value={3} title="Your rating" />
            </ComponentUseCase>
        </section>
    );
};

export default Rating;
