import { FC } from "react";

import { useWindowSize } from "@bodynarf/react.components/hooks";

import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import ComponentUseCase from "@app/sharedComponents/useCase";
import CodeExample from "@app/sharedComponents/codeExample";

/** useWindowSize hook demo */
const UseWindowSize: FC = () => {
    const { width, height } = useWindowSize();

    const breakpoint =
        width < 768 ? "Mobile (<768px)"
        : width < 1024 ? "Tablet (768–1023px)"
        : width < 1280 ? "Desktop (1024–1279px)"
        : "Widescreen (≥1280px)";

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="useWindowSize"
                version="1.15"
                description="Reactively tracks the browser window dimensions. Updates on every resize event. Returns { width, height } of the current viewport."
            />

            <ComponentUseCase
                caption="Live viewport dimensions"
                description="Resize the browser window to see the values update in real time."
                code={
                    <CodeExample
                        code={[
                            `import { useWindowSize } from "@bodynarf/react.components/hooks";`,
                            "",
                            `const { width, height } = useWindowSize();`,
                            "",
                            `<p>Width: {width}px</p>`,
                            `<p>Height: {height}px</p>`,
                        ].join("\n")}
                    />
                }
            >
                <div className="notification is-info is-light">
                    <p><strong>Width:</strong> {width}px</p>
                    <p><strong>Height:</strong> {height}px</p>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                caption="Responsive logic"
                description="Use the window dimensions to derive breakpoint information or render different layouts."
                code={
                    <CodeExample
                        code={[
                            `import { useWindowSize } from "@bodynarf/react.components/hooks";`,
                            "",
                            `const { width } = useWindowSize();`,
                            "",
                            `const isMobile = width < 768;`,
                            "",
                            `return isMobile ? <MobileLayout /> : <DesktopLayout />;`,
                        ].join("\n")}
                    />
                }
            >
                <div>
                    <p>Current breakpoint: <strong className="has-text-primary">{breakpoint}</strong></p>
                    <p className="has-text-grey is-size-7 mt-1">Resize the window to see this update.</p>
                </div>
            </ComponentUseCase>
        </section>
    );
};

export default UseWindowSize;
