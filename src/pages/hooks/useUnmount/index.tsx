import { FC } from "react";

import { useUnmount } from "@bodynarf/react.components";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import CodeExample from "@app/sharedComponents/codeExample";

/** useUnmount hook demo */
const UseUnmountPage: FC = () => {
    useUnmount(() => {
        // cleanup on unmount
    });

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="useUnmount"
                description="Runs a cleanup function only when the component unmounts. Useful for removing subscriptions or clearing resources."
            />

            <ComponentUseCase
                caption="Basic usage"
                description="The callback runs only once when the component unmounts. Navigate away to trigger the cleanup."
                code={
                    <CodeExample
                        code={[
                            `import { useUnmount } from "@bodynarf/react.components";`,
                            "",
                            "const MyComponent = () => {",
                            "    useUnmount(() => {",
                            "        console.log('Component unmounted!');",
                            "        cleanupResources();",
                            "    });",
                            "",
                            "    return <div>Content</div>;",
                            "};",
                        ].join("\n")}
                    />
                }
            >
                <span className="tag is-info is-medium">
                    Cleanup will run on unmount (check console when navigating away)
                </span>
            </ComponentUseCase>
        </section>
    );
};

export default UseUnmountPage;
