import { BaseElementProps, ElementColor, SizableElement, StylableElement } from "@bbr/types";

/** Single step item */
export interface StepItem {
    /** Unique step identifier */
    id: string;

    /** Step title/label */
    title: string;

    /** Optional step description */
    description?: string;

    /** Optional bootstrap icon name (e.g., "check", "person") */
    icon?: string;

    /** Is step clickable (can navigate to this step) */
    clickable?: boolean;
}

/** Step status */
export type StepStatus = "completed" | "current" | "upcoming";

/** Stepper component props */
export type StepperProps =
    & BaseElementProps
    & SizableElement
    & StylableElement
    & {
        /** Array of steps to display */
        steps: Array<StepItem>;

        /** Currently active step id */
        currentStep: string;

        /**
         * Component color for completed/active steps
         * @deprecated [Will be removed in v1.18] Use `style` prop instead.
         */
        color?: ElementColor;

        /**
         * Display stepper vertically.
         * @default false
         */
        vertical?: boolean;

        /**
         * Show step numbers instead of icons.
         * @default true
         */
        showNumbers?: boolean;

        /**
         * Allow clicking on completed steps to navigate back.
         * @default false
         */
        clickable?: boolean;

        /**
         * Show connector lines between steps.
         * @default true
         */
        showConnectors?: boolean;

        /**
         * Use animated connectors for completed steps.
         * @default false
         */
        animated?: boolean;

        /**
         * Show arrow connectors (line with arrowhead) between steps.
         * When enabled, replaces regular connectors with arrow-style connectors.
         * @default false
         */
        showArrows?: boolean;

        /**
         * Display variant.
         * - `default` — circles connected by lines.
         * - `panel` — full-width attached chevron/flag steps.
         * @default "default"
         */
        variant?: "default" | "panel";

        /**
         * Handler when a step is clicked (only works with clickable=true).
         * @param step The clicked step
         * @param index Step index
         */
        onStepClick?: (step: StepItem, index: number) => void;
    };
