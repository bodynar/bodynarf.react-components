import { useCallback, useState } from "react";

import { isNullOrUndefined } from "@bodynarf/utils";

import { ElementColor, ElementSize, SelectableItem } from "@bodynarf/react.components";

import { Colors, Sizes } from ".";

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
    const [item, setItem] = useState(Sizes.selectableItems[0]);

    const onItemSelect = useCallback(
        (item?: SelectableItem) => {
            if (isNullOrUndefined(item)) {
                return;
            }

            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            setItem(item!);
        }, []);

    const size = item!.value as ElementSize;

    return {
        selectedValue: item,
        value: size,
        onValueSelect: onItemSelect
    };
};

/**
 * Get color lookup parameters
 * @returns Lookup parameters to use with components
 */
export const useColorSelection = (): LookupSelectionParams<ElementColor> => {
    const [item, setItem] = useState(Colors.selectableItems[0]);

    const onItemSelect = useCallback(
        (item?: SelectableItem) => {
            if (isNullOrUndefined(item)) {
                return;
            }

            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            setItem(item!);
        }, []);

    const size = item!.value as ElementColor;

    return {
        selectedValue: item,
        value: size,
        onValueSelect: onItemSelect
    };
};