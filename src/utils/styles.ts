import { ElementPosition, ElementSize } from "@bbr/types";
import { isNullish } from "@bodynarf/utils";

/** Element position to bulma class name map */
const positionToClassMap: Map<ElementPosition, string> = new Map([
    [ElementPosition.Left, ""],
    [ElementPosition.Center, "is-centered"],
    [ElementPosition.Right, "is-right"]
]);

/**
 * Get class name for element position
 * @param position Position of element value
 * @returns Related class name
 */
export const getPositionClassName = (position: ElementPosition): string => {
    return positionToClassMap.get(position) ?? "";
};

/** Element size to bulma class name map */
const sizeToClassMap: Map<ElementSize, string> = new Map([
    [ElementSize.Small, "is-small"],
    [ElementSize.Normal, "is-normal"],
    [ElementSize.Medium, "is-medium"],
    [ElementSize.Large, "is-large"],
]);

/**
 * Get class name for element size
 * @param position Size of element value
 * @returns Related class name
 */
export const getSizeClassName = (size?: ElementSize): string => {
    return isNullish(size)
        ? ""
        : sizeToClassMap.get(size) ?? "";
};

