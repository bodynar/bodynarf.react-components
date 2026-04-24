import { FC, useRef } from "react";

import { Card as CardComponent } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";
import Log, { LogRef } from "@app/sharedComponents/log";

/** Card component demo */
const Card: FC = () => {
    const onClickLogRef = useRef<LogRef>(null);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Card"
                version="1.15"
                baseTypeName="BaseElementProps"
                description="Generic content container. Compound component with optional Card.Header, Card.Body and Card.Footer sub-components."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="The minimal setup — only Card.Body is required."
                code={
                    <CodeExample
                        code={[
                            `import { Card } from "@bodynarf/react.components";`,
                            "",
                            "<Card>",
                            "    <Card.Body>",
                            "        <p>Card body content goes here.</p>",
                            "    </Card.Body>",
                            "</Card>",
                        ].join("\n")}
                    />
                }
            >
                <CardComponent>
                    <CardComponent.Body>
                        <p>Card body content goes here.</p>
                    </CardComponent.Body>
                </CardComponent>
            </ComponentUseCase>

            <hr />
            <div><h4 className="subtitle is-4 has-text-weight-semibold">Card props</h4></div>

            <ComponentUseCase
                captionIsCode
                caption="children"
                description="Card content — compose Card.Header, Card.Body and Card.Footer as children."
                code={
                    <CodeExample
                        code={[
                            `import { Card } from "@bodynarf/react.components";`,
                            "",
                            "<Card>",
                            "    <Card.Header>",
                            "        <p className=\"card-header-title\">Title</p>",
                            "    </Card.Header>",
                            "    <Card.Body>",
                            "        <p>Body content.</p>",
                            "    </Card.Body>",
                            "    <Card.Footer>",
                            "        <a className=\"card-footer-item\">Action</a>",
                            "    </Card.Footer>",
                            "</Card>",
                        ].join("\n")}
                    />
                }
            >
                <CardComponent>
                    <CardComponent.Header>
                        <p className="card-header-title">Title</p>
                    </CardComponent.Header>
                    <CardComponent.Body>
                        <p>Body content.</p>
                    </CardComponent.Body>
                    <CardComponent.Footer>
                        <a className="card-footer-item">Action</a>
                    </CardComponent.Footer>
                </CardComponent>
            </ComponentUseCase>

            <hr />
            <div><h4 className="subtitle is-4 has-text-weight-semibold">Card.Header props</h4></div>

            <ComponentUseCase
                captionIsCode
                caption="children"
                description="Header content — typically a title element with class card-header-title and/or icon buttons."
                code={
                    <CodeExample
                        code={[
                            `import { Card } from "@bodynarf/react.components";`,
                            "",
                            "<Card>",
                            "    <Card.Header>",
                            "        <p className=\"card-header-title\">Card title</p>",
                            "    </Card.Header>",
                            "    <Card.Body>",
                            "        <p>Body content.</p>",
                            "    </Card.Body>",
                            "</Card>",
                        ].join("\n")}
                    />
                }
            >
                <CardComponent>
                    <CardComponent.Header>
                        <p className="card-header-title">Card title</p>
                    </CardComponent.Header>
                    <CardComponent.Body>
                        <p>Body content.</p>
                    </CardComponent.Body>
                </CardComponent>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onClick"
                description="Called when the header area is clicked. Makes the header interactive (e.g. collapse/expand)."
                code={
                    <CodeExample
                        code={[
                            `import { Card } from "@bodynarf/react.components";`,
                            "",
                            "<Card>",
                            "    <Card.Header onClick={() => console.log(\"header clicked\")}>",
                            "        <p className=\"card-header-title\">Clickable header</p>",
                            "    </Card.Header>",
                            "    <Card.Body>",
                            "        <p>Body content.</p>",
                            "    </Card.Body>",
                            "</Card>",
                        ].join("\n")}
                    />
                }
            >
                <CardComponent>
                    <CardComponent.Header onClick={() => onClickLogRef.current?.append("header clicked")}>
                        <p className="card-header-title">Clickable header</p>
                    </CardComponent.Header>
                    <CardComponent.Body>
                        <p>Click the header above.</p>
                    </CardComponent.Body>
                </CardComponent>
                <Log ref={onClickLogRef} />
            </ComponentUseCase>

            <hr />
            <div><h4 className="subtitle is-4 has-text-weight-semibold">Card.Body props</h4></div>

            <ComponentUseCase
                captionIsCode
                caption="children"
                description="Body content — any ReactNode. This is the main content area of the card."
                code={
                    <CodeExample
                        code={[
                            `import { Card } from "@bodynarf/react.components";`,
                            "",
                            "<Card>",
                            "    <Card.Body>",
                            "        <p>Any ReactNode can be placed here.</p>",
                            "    </Card.Body>",
                            "</Card>",
                        ].join("\n")}
                    />
                }
            >
                <CardComponent>
                    <CardComponent.Body>
                        <p>Any ReactNode can be placed here.</p>
                    </CardComponent.Body>
                </CardComponent>
            </ComponentUseCase>

            <hr />
            <div><h4 className="subtitle is-4 has-text-weight-semibold">Card.Footer props</h4></div>

            <ComponentUseCase
                captionIsCode
                caption="children"
                description="Footer content — typically anchor or button elements with class card-footer-item."
                code={
                    <CodeExample
                        code={[
                            `import { Card } from "@bodynarf/react.components";`,
                            "",
                            "<Card>",
                            "    <Card.Body>",
                            "        <p>Content.</p>",
                            "    </Card.Body>",
                            "    <Card.Footer>",
                            "        <a className=\"card-footer-item\">Save</a>",
                            "        <a className=\"card-footer-item\">Cancel</a>",
                            "    </Card.Footer>",
                            "</Card>",
                        ].join("\n")}
                    />
                }
            >
                <CardComponent>
                    <CardComponent.Body>
                        <p>Content.</p>
                    </CardComponent.Body>
                    <CardComponent.Footer>
                        <a className="card-footer-item">Save</a>
                        <a className="card-footer-item">Cancel</a>
                    </CardComponent.Footer>
                </CardComponent>
            </ComponentUseCase>
        </section>
    );
};

export default Card;
