import {
    BaseElementProps,
    ButtonStylableElement,
    DisableableElement,
    ElementWithIcon,
    OutlinedElement,
    RoundedElement,
    SizableElement,
} from "@bbr/types";

/** ToggleButton component props */
export type ToggleButtonProps =
    & BaseElementProps
    & ElementWithIcon
    & SizableElement
    & ButtonStylableElement
    & OutlinedElement
    & RoundedElement
    & DisableableElement
    & {
        /** Button displaying text */
        caption?: string;

        /**
         * Is button active.
         * When set, the component works in controlled mode.
         * State changes are reported via {@link ToggleButtonProps.onToggle} only —
         * updating `active` itself does not emit anything
        */
        active?: boolean;

        /**
         * Is button active initially.
         * Applied only when {@link ToggleButtonProps.active} is not set
         * @default false
        */
        defaultActive?: boolean;

        /**
         * Called when the button active state changes.
         * Receives the next active state
        */
        onToggle?: (active: boolean) => void;
    };
