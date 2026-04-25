import { FC, useRef, useState } from "react";

import { useComponentOutsideClick } from "@bodynarf/react.components";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import CodeExample from "@app/sharedComponents/codeExample";

/** useComponentOutsideClick hook demo */
const UseComponentOutsideClickPage: FC = () => {
    const [outsideOpen, setOutsideOpen] = useState(false);
    const [outsideClickLog, setOutsideClickLog] = useState("");
    const outsideRef = useRef<HTMLDivElement>(null);
    useComponentOutsideClick(
        "#outside-click-demo",
        outsideOpen,
        () => {
            setOutsideClickLog("Clicked outside!");
            setOutsideOpen(false);
        },
        outsideOpen,
    );

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="useComponentOutsideClick"
                description="Subscribes to clicks outside a component identified by a CSS selector. Useful for closing dropdowns, modals, and popovers."
            />

            <ComponentUseCase
                caption="Basic usage"
                description="Click the button to activate, then click anywhere outside to trigger the outside click handler."
                code={
                    <CodeExample
                        code={[
                            `import { useComponentOutsideClick } from "@bodynarf/react.components/hooks";`,
                            "",
                            "const MyComponent = () => {",
                            "    const [open, setOpen] = useState(false);",
                            "",
                            "    useComponentOutsideClick(",
                            `        "#my-component",`,
                            "        open,",
                            "        () => setOpen(false),",
                            "        open,",
                            "    );",
                            "",
                            "    return (",
                            `        <div id="my-component">`,
                            "            <button onClick={() => setOpen(true)}>Open</button>",
                            "            {open && <div>Click outside to close</div>}",
                            "        </div>",
                            "    );",
                            "};",
                        ].join("\n")}
                    />
                }
            >
                <div
                    id="outside-click-demo"
                    ref={outsideRef}
                >
                    <button
                        type="button"
                        className={`button is-small ${outsideOpen ? "is-warning" : "is-info"}`}
                        onClick={() => {
                            setOutsideOpen(true);
                            setOutsideClickLog("");
                        }}
                    >
                        {outsideOpen ? "Now click outside me!" : "Click to activate"}
                    </button>
                    {outsideClickLog !== "" &&
                        <span className="tag is-danger is-medium ml-2">
                            {outsideClickLog}
                        </span>
                    }
                </div>
            </ComponentUseCase>
        </section>
    );
};

export default UseComponentOutsideClickPage;
