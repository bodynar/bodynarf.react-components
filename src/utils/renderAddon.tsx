/* eslint-disable custom/component-pascal-case */ // Render utilities, not React components
import { ReactNode } from "react";

import { getClassName, isNotNullish, isNullish } from "@bodynarf/utils";

import { ElementColor, InputAddon } from "@bbr/types";
import Button, { ButtonStyle } from "@bbr/components/button";
import Icon from "@bbr/components/icon";

/**
 * Map an {@link ElementColor} to the matching {@link ButtonStyle} for a button addon.
 * @param color Optional element color. Falls back to {@link ButtonStyle.Default}.
 */
const colorToButtonStyle = (color?: ElementColor): ButtonStyle => {
    switch (color) {
        case ElementColor.Primary: return ButtonStyle.Primary;
        case ElementColor.Link: return ButtonStyle.Link;
        case ElementColor.Info: return ButtonStyle.Info;
        case ElementColor.Success: return ButtonStyle.Success;
        case ElementColor.Warning: return ButtonStyle.Warning;
        case ElementColor.Danger: return ButtonStyle.Danger;
        default: return ButtonStyle.Default;
    }
};

/**
 * Build the Bulma color class for a static addon.
 * @param color Optional element color.
 */
const getAddonColorClassName = (color?: ElementColor): string =>
    isNotNullish(color) ? `is-${color}` : "";

/**
 * Render a single {@link InputAddon} as a Bulma control (`<p class="control">`).
 *
 * - `text`  → static button with the text.
 * - `icon`  → static button wrapping the icon.
 * - `button`→ interactive {@link Button}.
 *
 * @param addon Addon configuration.
 * @returns React node wrapped in `<p class="control">`.
 */
export const renderAddon = (addon: InputAddon): ReactNode => {
    if (addon.type === "button") {
        const handleClick = addon.onClick;

        return (
            <p className="control">
                <Button
                    icon={addon.icon}
                    onClick={handleClick}
                    caption={addon.caption}
                    disabled={addon.disabled}
                    style={colorToButtonStyle(addon.style)}
                />
            </p>
        );
    }

    if (addon.type === "icon") {
        return (
            <p className="control">
                <a className={getClassName(["button", "is-static", getAddonColorClassName(addon.style)])}>
                    <Icon
                        name={addon.icon.name}

                        size={addon.icon.size}
                        className={addon.icon.className}
                    />
                </a>
            </p>
        );
    }

    return (
        <p className="control">
            <a className={getClassName(["button", "is-static", getAddonColorClassName(addon.style)])}>
                {addon.content}
            </a>
        </p>
    );
};

/**
 * Wrap an input control with optional left/right addons.
 *
 * When neither addon is provided, returns the control unchanged (backward compatible).
 * Otherwise wraps it in a Bulma `field has-addons` container with the addons on each side.
 *
 * @param control The input control node (e.g. `<div class="control is-expanded">…</div>`).
 * @param addonLeft Optional addon rendered before the control.
 * @param addonRight Optional addon rendered after the control.
 */
export const renderControlWithAddons = (
    control: ReactNode,
    addonLeft?: InputAddon,
    addonRight?: InputAddon
): ReactNode => {
    if (isNullish(addonLeft) && isNullish(addonRight)) {
        return control;
    }

    return (
        <div className="field has-addons">
            {isNotNullish(addonLeft) ? renderAddon(addonLeft) : null}
            {control}
            {isNotNullish(addonRight) ? renderAddon(addonRight) : null}
        </div>
    );
};
