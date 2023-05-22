import { isNullOrUndefined } from "@bodynarf/utils";

import { DataAttributes } from "@bbr";

/**
 * Map object with key-value pairs to html data attributes format
 * @param dataAttributes Object with data attribute values
 * @returns Object that could be injected into react html element as data-* attribute values
 */
export const mapDataAttributes = (dataAttributes: DataAttributes): object => {
    const mappedAttributes =
        Object
            .entries(dataAttributes)
            .reduce((result, [key, value]) => {
                if (isNullOrUndefined(value)) {
                    return result;
                }

                const newKey = key.startsWith("data-") ? key : `data-${key}`;

                result[newKey] = value;
                return result;
            }, {} as any);

    return mappedAttributes;
};
