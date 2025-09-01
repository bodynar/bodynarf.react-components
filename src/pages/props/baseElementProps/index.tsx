import { FC } from "react";

import IconComponent from "@bodynarf/react.components/components/icon";

import ComponentUseCase from "@app/sharedComponents/useCase";
import CodeExample from "@app/sharedComponents/codeExample";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";

import "./style.scss";

/* BaseElementProps type members demo */
const BaseElementProps: FC = () => {
    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="BaseElementProps"
                description="All props of the components implemented in this library inherit from the BaseElementProps type, which contains optional parameters for element markup"
            />

            <ComponentUseCase
                captionIsCode
                caption="className"
                description="Option to specify an additional CSS class. Not set by default"
                code={
                    <CodeExample
                        code={[
                            '/* style.scss file */',
                            '.color-is-crimson {',
                            '    color: crimson !important;',
                            '}',
                            '/* */',
                            'import IconComponent from "@bodynarf/react.components/components/icon";',
                            '',
                            '/* */',
                            '',
                            '<IconComponent',
                            '    name="alarm"',
                            '    className="color-is-crimson"',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <IconComponent
                    name="alarm"
                    className="color-is-crimson"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="title"
                description="Option to specify the text displayed on hover. Not set by default"
                code={
                    <CodeExample
                        code={[
                            'import IconComponent from "@bodynarf/react.components/components/icon";',
                            '',
                            '/* */',
                            '',
                            '<IconComponent',
                            '    name="pie-chart-fill"',
                            '    title="BaseElementProps title prop"',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <IconComponent
                    name="pie-chart-fill"
                    title="BaseElementProps title prop"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="data"
                description="Option to set data-* attributes of the element. Not set by default"
                code={
                    <CodeExample
                        code={[
                            '/* style.scss file */',
                            '[data-name="John Doe"] {',
                            '    font-size: 20px;',
                            '    color: teal !important;',
                            '}',
                            '/* */',
                            'import IconComponent from "@bodynarf/react.components/components/icon";',
                            '',
                            '/* */',
                            '<IconComponent',
                            '    name="alarm"',
                            '    data={{',
                            '        myProperty: 10,',
                            '        name: "John Doe",',
                            '    }}',
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <IconComponent
                    name="alarm"
                    data={{
                        myProperty: 10,
                        name: "John Doe",
                    }}
                />
            </ComponentUseCase>
        </section>
    );
};

export default BaseElementProps;
