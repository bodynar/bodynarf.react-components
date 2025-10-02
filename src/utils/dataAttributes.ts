import { isNullish } from "@bodynarf/utils";

import { DataAttributes } from "@bbr/types";

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
                if (isNullish(value)) {
                    return result;
                }

                const newKey = key.toLocaleLowerCase().startsWith("data-")
                    ? key.toLocaleLowerCase()
                    : `data-${key}`;

                result[newKey] = value;
                return result;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            }, {} as any);

    return mappedAttributes;
};
