import { FC, useState } from "react";

import { useMount } from "@bodynarf/react.components/hooks";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import CodeExample from "@app/sharedComponents/codeExample";
import { ElementColor, ElementSize, Tag } from "@bodynarf/react.components";

/** useMount hook demo */
const UseMountPage: FC = () => {
    const [mountMessage, setMountMessage] = useState(false);
    useMount(() => {
        console.log('[useMount DEMO] Component mounted!');
        setMountMessage(true);
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
                            "        console.log('[useMount DEMO] Component mounted!');",
                            "        initializeData(); // some initialization logic",
                            "    });",
                            "",
                            "    return <div>Content</div>;",
                            "};",
                        ].join("\n")}
                    />
                }
            >
                <Tag
                    size={ElementSize.Medium}
                    style={mountMessage ? ElementColor.Success : ElementColor.Info}
                    content={mountMessage ? "Component mounted" : "Awaiting component mount"}
                />
            </ComponentUseCase>
        </section>
    );
};

export default UseMountPage;
