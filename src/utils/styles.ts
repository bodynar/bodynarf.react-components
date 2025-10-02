import { isNullish } from "@bodynarf/utils";

import { ElementColor, ElementPosition, ElementSize } from "@bbr/types";

/**
 * Map of element positions to their corresponding Bulma CSS class names.
 * Used to convert ElementPosition enum values to CSS classes.
 *
 * @example
 * // Returns "is-centered"
 * positionToClassMap.get(ElementPosition.Center);
 *
 * @example
 * // Returns "is-right"
 * positionToClassMap.get(ElementPosition.Right);
 */
const positionToClassMap: Map<ElementPosition, string> = new Map([
    [ElementPosition.Left, ""],
    [ElementPosition.Center, "is-centered"],
    [ElementPosition.Right, "is-right"]
]);

/**
 * Get the Bulma CSS class name for a given element position.
 *
 * This function maps ElementPosition enum values to their corresponding
 * Bulma CSS classes for positioning elements.
 *
 * @param position - The position of the element (ElementPosition enum value)
 * @returns The corresponding Bulma CSS class name or empty string for default position
 *
 * @example
 * // Returns "is-centered"
 * getPositionClassName(ElementPosition.Center);
 *
 * @example
 * // Returns ""
 * getPositionClassName(ElementPosition.Left);
 */
export const getPositionClassName = (position: ElementPosition): string => {
    return positionToClassMap.get(position) ?? "";
};

/**
 * Map of element sizes to their corresponding Bulma CSS class names.
 * Used to convert ElementSize enum values to CSS classes.
 *
 * @example
 * // Returns "is-small"
 * sizeToClassMap.get(ElementSize.Small);
 *
 * @example
 * // Returns "is-large"
 * sizeToClassMap.get(ElementSize.Large);
 */
const sizeToClassMap: Map<ElementSize, string> = new Map([
    [ElementSize.Small, "is-small"],
    [ElementSize.Normal, "is-normal"],
    [ElementSize.Medium, "is-medium"],
    [ElementSize.Large, "is-large"],
]);

/**
 * Get the Bulma CSS class name for a given element size.
 *
 * This function maps ElementSize enum values to their corresponding
 * Bulma CSS classes for sizing elements. Returns empty string if size is nullish
 * or if size equals to skipValue parameter.
 *
 * @param size - The size of the element (ElementSize enum value)
 * @param skipValue - Size value that should be ignored and return empty string
 * @returns The corresponding Bulma CSS class name or empty string if size is nullish or equals skipValue
 *
 * @example
 * // Returns "is-medium"
 * getSizeClassName(ElementSize.Medium);
 *
 * @example
 * // Returns ""
 * getSizeClassName(null);
 *
 * @example
 * // Returns ""
 * getSizeClassName(undefined);
 *
 * @example
 * // Returns ""
 * getSizeClassName(ElementSize.Small, ElementSize.Small);
 */
export const getSizeClassName = (size?: ElementSize, skipValue?: ElementSize): string => {
    return isNullish(size)
        ? ""
        : size === skipValue
            ? ""
            : sizeToClassMap.get(size) ?? "";
};

/**
 * Get the Bulma CSS class name for a given element color.
 *
 * This function converts ElementColor enum values to their corresponding
 * Bulma CSS classes for coloring elements. Returns empty string for Default color.
 *
 * @param color - The color of the element (ElementColor enum value)
 * @returns The corresponding Bulma CSS class name or empty string for default color
 *
 * @example
 * // Returns "is-primary"
 * getElementColorClassName(ElementColor.Primary);
 *
 * @example
 * // Returns ""
 * getElementColorClassName(ElementColor.Default);
 *
 * @example
 * // Returns ""
 * getElementColorClassName(null);
 */
export const getElementColorClassName = (color?: ElementColor): string => {
    return color === ElementColor.Default ? "" : `is-${color}`;
};
