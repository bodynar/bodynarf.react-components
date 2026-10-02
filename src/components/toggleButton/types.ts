import { BaseElementProps, ElementIcon, ElementSize } from "@bbr/types";
import { ButtonStyle } from "@bbr/components/button";

/** ToggleButton component props */
export type ToggleButtonProps =
    & BaseElementProps
    & {
        /**
         * Unique button value.
         * Used as a key when the button is rendered inside a `ToggleButtonGroup`
        */
        value: string;

        /** Button displaying text */
        caption?: string;

        /** Configuration of inner icon */
        icon?: ElementIcon;

        /** Is button active. When set, the component works in controlled mode */
        active?: boolean;

        /**
         * Is button active initially.
         * Applied only in uncontrolled mode
         * @default false
        */
        defaultActive?: boolean;

        /**
         * Button style.
         * @default ButtonStyle.Primary
        */
        style?: ButtonStyle;

        /** Button size  */
        size?: ElementSize;

        /**
         * Is inactive button outlined.
         * Active button is always solid
         * @default false
        */
        outlined?: boolean;

        /** Should button corners be rounded */
        rounded?: boolean;

        /** Is button disabled */
        disabled?: boolean;

        /** Called when the button active state changes */
        onToggle?: (active: boolean) => void;
    };
