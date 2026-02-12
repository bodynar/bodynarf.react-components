import { FC, useCallback, useState } from "react";

import { ElementColor, ElementSize, Stepper as StepperComponent, StepItem } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

const basicSteps: Array<StepItem> = [
    { id: "step1", title: "Account Setup" },
    { id: "step2", title: "Personal Info" },
    { id: "step3", title: "Confirmation" },
];

const stepsWithDescriptions: Array<StepItem> = [
    { id: "step1", title: "Sign Up", description: "Create your account" },
    { id: "step2", title: "Profile", description: "Fill in your details" },
    { id: "step3", title: "Verify", description: "Confirm your email" },
    { id: "step4", title: "Done", description: "Start using the app" },
];

const stepsWithIcons: Array<StepItem> = [
    { id: "step1", title: "Cart", icon: "fa-shopping-cart" },
    { id: "step2", title: "Shipping", icon: "fa-truck" },
    { id: "step3", title: "Payment", icon: "fa-credit-card" },
    { id: "step4", title: "Complete", icon: "fa-check" },
];

/** Stepper component demo */
const Stepper: FC = () => {
    const [currentStep, setCurrentStep] = useState("step1");
    const [clickLog, setClickLog] = useState("");

    const handleStepClick = useCallback(
        (step: StepItem, index: number) => {
            setClickLog(
                t => t
                    + "\n"
                    + new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getMilliseconds()
                    + " => " + `clicked step "${step.title}" at index ${index}`
            );
            setCurrentStep(step.id);
        },
        []
    );

    const [interactiveStep, setInteractiveStep] = useState("step1");
    const handleNext = useCallback(() => {
        const steps = ["step1", "step2", "step3", "step4"];
        const currentIndex = steps.indexOf(interactiveStep);
        if (currentIndex < steps.length - 1) {
            setInteractiveStep(steps[currentIndex + 1]);
        }
    }, [interactiveStep]);

    const handlePrev = useCallback(() => {
        const steps = ["step1", "step2", "step3", "step4"];
        const currentIndex = steps.indexOf(interactiveStep);
        if (currentIndex > 0) {
            setInteractiveStep(steps[currentIndex - 1]);
        }
    }, [interactiveStep]);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Stepper"
                description={
                    <>
                        Stepper - a component for displaying multi-step processes or wizards.
                        <br />
                        Useful for checkout flows, registration processes, or any multi-stage workflow.
                    </>
                }
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Minimal configuration: component with steps and current step"
                code={
                    <CodeExample
                        code={[
                            `import { Stepper, StepItem } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `const steps: Array<StepItem> = [`,
                            `    { id: "step1", title: "Account Setup" },`,
                            `    { id: "step2", title: "Personal Info" },`,
                            `    { id: "step3", title: "Confirmation" },`,
                            `];`,
                            "",
                            `<Stepper`,
                            `    steps={steps}`,
                            `    currentStep="step2"`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <StepperComponent
                    steps={basicSteps}
                    currentStep="step2"
                />
            </ComponentUseCase>

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">
                    Custom component props
                </h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="description"
                description="Each step can have an optional description displayed below the title"
                code={
                    <CodeExample
                        code={[
                            `import { Stepper, StepItem } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `const steps: Array<StepItem> = [`,
                            `    { id: "step1", title: "Sign Up", description: "Create your account" },`,
                            `    { id: "step2", title: "Profile", description: "Fill in your details" },`,
                            `    { id: "step3", title: "Verify", description: "Confirm your email" },`,
                            `    { id: "step4", title: "Done", description: "Start using the app" },`,
                            `];`,
                            "",
                            `<Stepper`,
                            `    steps={steps}`,
                            `    currentStep="step2"`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <StepperComponent
                    steps={stepsWithDescriptions}
                    currentStep="step2"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="icon"
                description="Each step can have a custom icon (Font Awesome class name)"
                code={
                    <CodeExample
                        code={[
                            `import { Stepper, StepItem } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `const steps: Array<StepItem> = [`,
                            `    { id: "step1", title: "Cart", icon: "fa-shopping-cart" },`,
                            `    { id: "step2", title: "Shipping", icon: "fa-truck" },`,
                            `    { id: "step3", title: "Payment", icon: "fa-credit-card" },`,
                            `    { id: "step4", title: "Complete", icon: "fa-check" },`,
                            `];`,
                            "",
                            `<Stepper`,
                            `    steps={steps}`,
                            `    currentStep="step2"`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <StepperComponent
                    steps={stepsWithIcons}
                    currentStep="step2"
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onStepClick"
                description="Handler for step click events. Receives the clicked step item and its index. Requires clickable prop to be true."
                code={
                    <CodeExample
                        code={[
                            `import { useCallback, useState } from "react";`,
                            "",
                            `import { Stepper, StepItem } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            `const [currentStep, setCurrentStep] = useState("step1");`,
                            "",
                            `const handleStepClick = useCallback((step: StepItem, index: number) => {`,
                            `    console.log("Clicked:", step.title, "at index:", index);`,
                            `    setCurrentStep(step.id);`,
                            `}, []);`,
                            "/* ... */",
                            "",
                            `<Stepper`,
                            `    steps={steps}`,
                            `    currentStep={currentStep}`,
                            `    clickable`,
                            `    onStepClick={handleStepClick}`,
                            `/>`,
                        ].join("\n")}
                    />
                }
            >
                <StepperComponent
                    steps={basicSteps}
                    currentStep={currentStep}
                    clickable
                    onStepClick={handleStepClick}
                />
                <p style={{ whiteSpace: "pre-line" }}>
                    {clickLog}
                </p>
            </ComponentUseCase>

            <ComponentUseCase
                caption="Interactive example"
                description="A stepper with navigation buttons to move between steps"
                code={
                    <CodeExample
                        code={[
                            `import { useCallback, useState } from "react";`,
                            "",
                            `import { Button, Stepper, StepItem } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            `const [currentStep, setCurrentStep] = useState("step1");`,
                            "",
                            `<Stepper`,
                            `    steps={steps}`,
                            `    currentStep={currentStep}`,
                            `/>`,
                            `<Button caption="Previous" onClick={handlePrev} />`,
                            `<Button caption="Next" onClick={handleNext} />`,
                        ].join("\n")}
                    />
                }
            >
                <StepperComponent
                    steps={stepsWithDescriptions}
                    currentStep={interactiveStep}
                />
                <div className="buttons mt-3">
                    <button
                        type="button"
                        className="button"
                        onClick={handlePrev}
                        disabled={interactiveStep === "step1"}
                    >
                        Previous
                    </button>
                    <button
                        type="button"
                        className="button is-primary"
                        onClick={handleNext}
                        disabled={interactiveStep === "step4"}
                    >
                        Next
                    </button>
                </div>
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="vertical"
                description="Display the stepper in vertical orientation"
                code={
                    <CodeExample
                        code={[
                            `import { Stepper } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            '<Stepper',
                            `    steps={steps}`,
                            `    currentStep="step2"`,
                            `    vertical`,
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <StepperComponent
                    steps={stepsWithDescriptions}
                    currentStep="step2"
                    vertical
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="showNumbers"
                description="Show step numbers instead of icons (default: true)"
                code={
                    <CodeExample
                        code={[
                            `import { Stepper } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            '<Stepper',
                            `    steps={steps}`,
                            `    currentStep="step2"`,
                            `    showNumbers={false}`,
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <StepperComponent
                    steps={basicSteps}
                    currentStep="step2"
                    showNumbers={false}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="animated"
                description="Use animated connectors for completed steps"
                code={
                    <CodeExample
                        code={[
                            `import { Stepper } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            '<Stepper',
                            `    steps={steps}`,
                            `    currentStep="step2"`,
                            `    animated`,
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <StepperComponent
                    steps={basicSteps}
                    currentStep="step2"
                    animated
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="showArrows"
                description="Show arrow-style connectors between steps"
                code={
                    <CodeExample
                        code={[
                            `import { Stepper } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            '<Stepper',
                            `    steps={steps}`,
                            `    currentStep="step2"`,
                            `    showArrows`,
                            '/>',
                        ].join("\n")}
                    />
                }
            >
                <StepperComponent
                    steps={basicSteps}
                    currentStep="step2"
                    showArrows
                />
            </ComponentUseCase>

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">
                    Size and color variations
                </h4>
            </div>

            <ComponentSizeCase
                captionIsCode
                caption="size"
                description="The component supports all sizes defined in the ElementSize type"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementSize, Stepper } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            '<Stepper',
                            `    steps={steps}`,
                            `    currentStep="step2"`,
                            `    size={ElementSize.${id}}`,
                            '/>',
                        ].join("\n")}
                    />
                }
                componentProvider={(size: ElementSize) =>
                    <StepperComponent
                        steps={basicSteps}
                        currentStep="step2"
                        size={size}
                    />
                }
            />

            <ComponentColorCase
                captionIsCode
                caption="color"
                description="The component supports all colors defined in the ElementColor type"
                codeProvider={id =>
                    <CodeExample
                        code={[
                            `import { ElementColor, Stepper } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            '<Stepper',
                            `    steps={steps}`,
                            `    currentStep="step2"`,
                            `    color={ElementColor.${id}}`,
                            '/>',
                        ].join("\n")}
                    />
                }
                componentProvider={(color: ElementColor) =>
                    <StepperComponent
                        steps={basicSteps}
                        currentStep="step2"
                        color={color}
                    />
                }
            />
        </section>
    );
};

export default Stepper;
