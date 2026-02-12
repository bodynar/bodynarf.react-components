import { FC, useCallback, useMemo } from "react";

import { getClassName, isNullish } from "@bodynarf/utils";

import { ElementColor, ElementSize } from "@bbr/types";
import { getElementColorClassName, getSizeClassName, mapDataAttributes } from "@bbr/utils";

import "./style.scss";

import { StepItem, StepperProps, StepStatus } from "../types";

/** Get step status based on current step */
const getStepStatus = (
    steps: Array<StepItem>,
    currentStepId: string,
    stepId: string
): StepStatus => {
    const currentIndex = steps.findIndex(s => s.id === currentStepId);
    const stepIndex = steps.findIndex(s => s.id === stepId);

    if (stepIndex < currentIndex) {
        return "completed";
    }

    if (stepIndex === currentIndex) {
        return "current";
    }

    return "upcoming";
};

/** Stepper component for displaying step-by-step progress */
const Stepper: FC<StepperProps> = ({
    steps,
    currentStep,
    size = ElementSize.Normal,
    color = ElementColor.Primary,
    vertical = false,
    showNumbers = true,
    clickable = false,
    showConnectors = true,
    animated = false,
    showArrows = false,
    onStepClick,

    className,
    title,
    data,
}) => {
    const containerClassName = useMemo(() => getClassName([
        "bbr-stepper",
        className,
        getSizeClassName(size, ElementSize.Normal),
        getElementColorClassName(color),
        vertical ? "is-vertical" : "",
        showConnectors === true || showArrows === true ? "has-connectors" : "",
        animated ? "is-animated" : "",
    ]), [className, size, color, vertical, showConnectors, animated, showArrows]);

    const handleStepClick = useCallback(
        (step: StepItem, index: number, status: StepStatus) => {
            if (!clickable || isNullish(onStepClick)) {
                return;
            }

            const isStepClickable = step.clickable !== false && status === "completed";

            if (isStepClickable) {
                onStepClick(step, index);
            }
        },
        [clickable, onStepClick]
    );


    const dataAttributes = mapDataAttributes(data);

    return (
        <div
            title={title}
            {...dataAttributes}
            className={containerClassName}
        >
            {steps.map((step, index) => {
                const status = getStepStatus(steps, currentStep, step.id);
                const isClickable = clickable && step.clickable !== false && status === "completed";

                const stepClassName = getClassName([
                    "bbr-stepper-step",
                    `is-${status}`,
                    isClickable ? "is-clickable" : "",
                ]);

                return (
                    <div
                        key={step.id}

                        className={stepClassName}
                        onClick={() => handleStepClick(step, index, status)}
                    >
                        <div className="bbr-stepper-marker">
                            {status === "completed" && !showNumbers ? (
                                <span className="bbr-stepper-icon">
                                    <i className="fas fa-check" />
                                </span>
                            ) : step.icon && !showNumbers ? (
                                <span className="bbr-stepper-icon">
                                    <i className={`fas ${step.icon}`} />
                                </span>
                            ) : (
                                <span className="bbr-stepper-number">
                                    {index + 1}
                                </span>
                            )}
                        </div>
                        <div className="bbr-stepper-content">
                            <div className="bbr-stepper-title">
                                {step.title}
                            </div>
                            {step.description !== undefined && step.description !== "" && (
                                <div className="bbr-stepper-description">
                                    {step.description}
                                </div>
                            )}
                        </div>
                        {index < steps.length - 1 && (
                            <div
                                className={getClassName([
                                    "bbr-stepper-connector",
                                    status === "completed" ? "is-completed" : "",
                                    showArrows === true ? "has-arrow" : "",
                                    showConnectors !== true && showArrows !== true ? "is-hidden" : "",
                                ])}
                            />
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default Stepper;
