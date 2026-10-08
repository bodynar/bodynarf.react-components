import { InputAddon } from "@bbr/types";

/** Element with side addons attached to the control */
export type ElementWithAddons = {
    /** Optional addon rendered before the control. */
    addonLeft?: InputAddon;

    /** Optional addon rendered after the control. */
    addonRight?: InputAddon;
};
