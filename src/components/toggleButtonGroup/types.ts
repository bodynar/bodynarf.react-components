import { BaseElementProps, ElementSize } from "@bbr/types";
import { ButtonProps, ButtonStyle } from "@bbr/components/button";

/** A single button in a {@link ToggleButtonGroupProps} */
export type ToggleButtonGroupItem =
    & Pick<ButtonProps, "caption" | "icon" | "disabled" | "title">
    & {
        /** Unique button value across all group items */
        value: string;
    };

/** ToggleButtonGroup component props */
export type ToggleButtonGroupProps =
    & BaseElementProps
    & {
        /** Buttons to render */
        items: ToggleButtonGroupItem[];

        /**
         * Selection mode.
         * `single` - only one button can be active at a time (radio behavior);
         * `multiple` - every button toggles independently (checkbox behavior)
        */
        mode: "single" | "multiple";

        /**
         * Selected value (`single` mode) or values (`multiple` mode).
         * When set, the component works in controlled mode.
         * Selection changes are reported via {@link ToggleButtonGroupProps.onChange}
         * only — updating `value` itself does not emit anything
        */
        value?: string | string[];

        /**
         * Selected value (`single` mode) or values (`multiple` mode) initially.
         * Applied only in uncontrolled mode
        */
        defaultValue?: string | string[];

        /** Shared button style applied to every button */
        style?: ButtonStyle;

        /** Shared button size applied to every button */
        size?: ElementSize;

        /**
         * Are inactive buttons outlined.
         * Active buttons are always solid
         * @default false
        */
        outlined?: boolean;

        /** Should buttons have rounded corners */
        rounded?: boolean;

        /**
         * Is group laid out vertically
         * @default false
        */
        vertical?: boolean;

        /**
         * Called when selection changes.
         * Receives a single value in `single` mode and a list of values in `multiple` mode
        */
        onChange?: (value: string | string[]) => void;
    };
