import { FC, useState } from "react";

import { useMount } from "@bodynarf/react.components/hooks";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import CodeExample from "@app/sharedComponents/codeExample";

/** useMount hook demo */
const UseMountPage: FC = () => {
    const [mountMessage, setMountMessage] = useState("");
    useMount(() => {
        setMountMessage("Component mounted!");
    });

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="useMount"
                description="Executes a function only once during the component's initial render (mount). Similar to useEffect with empty dependency array."
            />

            <ComponentUseCase
                caption="Basic usage"
                description="The callback runs only once when the component mounts."
                code={
                    <CodeExample
                        code={[
                            `import { useMount } from "@bodynarf/react.components/hooks";`,
                            "",
                            "const MyComponent = () => {",
                            "    useMount(() => {",
                            "        console.log('Component mounted!');",
                            "        initializeData(); // some initialization logic",
                            "    });",
                            "",
                            "    return <div>Content</div>;",
                            "};",
                        ].join("\n")}
                    />
                }
            >
                <span className="tag is-success is-medium">
                    {mountMessage}
                </span>
            </ComponentUseCase>
        </section>
    );
};

export default UseMountPage;
