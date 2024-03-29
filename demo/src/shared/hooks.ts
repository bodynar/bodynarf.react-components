import { useCallback, useState } from "react";

import { isNullOrUndefined } from "@bodynarf/utils";

import { ElementColor, ElementPosition, ElementSize, SelectableItem } from "@bodynarf/react.components";

import { Colors, Positions, Sizes } from ".";

/** Lookup parameters for selection enums */
export interface LookupSelectionParams<T> {
    /** Selected value */
    selectedValue: SelectableItem;

    /** Current value */
    value: T;

    /** Handler of value selection */
    onValueSelect: (lookupValue?: SelectableItem) => void;
}

/**
 * Get size lookup parameters
 * @returns Lookup parameters to use with components
 */
export const useSizeSelection = (): LookupSelectionParams<ElementSize> => {
    return useGenericSelection<ElementSize>(Sizes.selectableItems);
};

/**
 * Get color lookup parameters
 * @returns Lookup parameters to use with components
 */
export const useColorSelection = (): LookupSelectionParams<ElementColor> => {
    return useGenericSelection<ElementColor>(Colors.selectableItems);
};

/**
 * Get position lookup parameters
 * @returns Lookup parameters to use with components
 */
export const usePositionSelection = (): LookupSelectionParams<ElementPosition> => {
    return useGenericSelection<ElementPosition>(Positions.selectableItems);
};

/**
 * Get custom lookup parameters
 * @param lookupValues Lookup values
 * @returns Lookup parameters to use with components
 */
export const useGenericSelection = <TValue>(lookupValues: Array<SelectableItem>): LookupSelectionParams<TValue> => {
    const [item, setItem] = useState(lookupValues[0]);

    const onItemSelect = useCallback(
        (item?: SelectableItem) => {
            if (isNullOrUndefined(item)) {
                return;
            }

            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            setItem(item!);
        }, []);

    const value = item!.value as TValue;

    return {
        selectedValue: item,
        value,
        onValueSelect: onItemSelect
    };
};
