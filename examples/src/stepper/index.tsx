import { FC, useState } from "react";

import Stepper from "@bodynarf/react.components/components/stepper";
import Button from "@bodynarf/react.components/components/button";
import { ButtonStyle, ElementColor, ElementSize, StepItem } from "@bodynarf/react.components";

const STEPS: Array<StepItem> = [
    { id: "1", title: "Account",  description: "Create your account"        },
    { id: "2", title: "Profile",  description: "Set up your profile"        },
    { id: "3", title: "Settings", description: "Configure preferences"      },
    { id: "4", title: "Confirm",  description: "Review and submit"          },
];

const STEPS_WITH_ICONS: Array<StepItem> = [
    { id: "1", title: "Cart",     icon: "cart", description: "Review cart" },
    { id: "2", title: "Shipping", icon: "truck", description: "Enter address" },
    { id: "3", title: "Payment",  icon: "credit-card", description: "Pay" },
    { id: "4", title: "Done",     icon: "check-circle", description: "Order placed" },
];

const StepperExamples: FC = () => {
    const [current1, setCurrent1] = useState("1");
    const [current2] = useState("2");

    const goNext = () => {
        const idx = STEPS.findIndex(s => s.id === current1);
        if (idx < STEPS.length - 1) setCurrent1(STEPS[idx + 1].id);
    };
    const goPrev = () => {
        const idx = STEPS.findIndex(s => s.id === current1);
        if (idx > 0) setCurrent1(STEPS[idx - 1].id);
    };

    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-3">Stepper</h1>

                {/* Basic horizontal */}
                <div className="box">
                    <p className="subtitle is-5">Basic Horizontal</p>
                    <Stepper steps={STEPS} currentStep={current1} />
                    <div className="buttons mt-4">
                        <Button style={ButtonStyle.Default}  caption="Back"  onClick={goPrev} disabled={current1 === "1"} />
                        <Button style={ButtonStyle.Primary}  caption="Next"  onClick={goNext} disabled={current1 === "4"} />
                    </div>
                </div>

                {/* With numbers */}
                <div className="box">
                    <p className="subtitle is-5">Show Numbers</p>
                    <Stepper steps={STEPS} currentStep={current2} showNumbers />
                </div>

                {/* With icons */}
                <div className="box">
                    <p className="subtitle is-5">With Icons</p>
                    <Stepper steps={STEPS_WITH_ICONS} currentStep="2" showNumbers={false} />
                </div>

                {/* Vertical */}
                <div className="box">
                    <p className="subtitle is-5">Vertical</p>
                    <Stepper steps={STEPS} currentStep={current1} vertical />
                </div>

                {/* Colors */}
                <div className="box">
                    <p className="subtitle is-5">Colors</p>
                    <div className="mb-3">
                        <p className="help mb-1">Primary</p>
                        <Stepper steps={STEPS} currentStep="2" color={ElementColor.Primary} />
                    </div>
                    <div className="mb-3">
                        <p className="help mb-1">Link</p>
                        <Stepper steps={STEPS} currentStep="2" color={ElementColor.Link} />
                    </div>
                    <div className="mb-3">
                        <p className="help mb-1">Info</p>
                        <Stepper steps={STEPS} currentStep="3" color={ElementColor.Info} />
                    </div>
                    <div className="mb-3">
                        <p className="help mb-1">Success</p>
                        <Stepper steps={STEPS} currentStep="3" color={ElementColor.Success} />
                    </div>
                    <div className="mb-3">
                        <p className="help mb-1">Warning</p>
                        <Stepper steps={STEPS} currentStep="2" color={ElementColor.Warning} />
                    </div>
                    <div className="mb-3">
                        <p className="help mb-1">Danger</p>
                        <Stepper steps={STEPS} currentStep="3" color={ElementColor.Danger} />
                    </div>
                </div>

                {/* Sizes */}
                <div className="box">
                    <p className="subtitle is-5">Sizes</p>
                    {[ElementSize.Small, ElementSize.Normal, ElementSize.Medium, ElementSize.Large].map(size => (
                        <div key={size} className="mb-3">
                            <p className="help mb-1">{size}</p>
                            <Stepper steps={STEPS} currentStep="2" size={size} />
                        </div>
                    ))}
                </div>

                {/* Animated */}
                <div className="box">
                    <p className="subtitle is-5">Animated</p>
                    <Stepper steps={STEPS} currentStep={current1} animated color={ElementColor.Primary} />
                </div>

                {/* Clickable */}
                <div className="box">
                    <p className="subtitle is-5">Clickable Steps</p>
                    <Stepper
                        steps={STEPS.map(s => ({ ...s, clickable: true }))}
                        currentStep={current1}
                        clickable
                        onStepClick={(step) => setCurrent1(step.id)}
                    />
                </div>

                {/* Panel variant */}
                <div className="box">
                    <p className="subtitle is-5">Panel Variant</p>
                    <p className="help mb-3">
                        Full-width attached chevron steps (<code>variant=&quot;panel&quot;</code>).
                    </p>
                    <div className="mb-4">
                        <Stepper steps={STEPS} currentStep={current1} variant="panel" color={ElementColor.Primary} />
                    </div>
                    <div className="mb-4">
                        <Stepper steps={STEPS} currentStep="3" variant="panel" color={ElementColor.Success} />
                    </div>
                    <Stepper steps={STEPS_WITH_ICONS} currentStep="2" variant="panel" color={ElementColor.Info} showNumbers={false} />
                </div>
            </div>
        </section>
    );
};

export default StepperExamples;
