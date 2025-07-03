import { useCallback, useState } from "react";

import { ActionFn, isNullish } from "@bodynarf/utils";

/**
 * Get debounced handler
 * @param handler Action to handle
 * @param debounceTime Amount of seconds to stay inactive
 * @returns Pair: current state, is in debounce state; handler with debounce
 * @example
 * ```
 * const [debounce, onReloadClick] = useDebounceHandler(reloadData, 3);
 *
 * <Button
 *   disabled={!debounce}
 *   onClick={onReloadClick}
 * />
 * ```
 */
export const useDebounceHandler = (
    handler: () => Promise<void>,
    debounceTime: number
): [boolean, ActionFn] => {
    const [debounceTimer, setDebounceTimer] = useState<number>();

    const debounceHandler = useCallback(() => {
        handler()
            .then(() => {
                setDebounceTimer(
                    setTimeout(() => {
                        clearTimeout(debounceTimer!);
                        setDebounceTimer(undefined);
                    }, debounceTime * 1000)
                );
            });
    }, [handler, debounceTime, debounceTimer]);

    return [isNullish(debounceTimer), debounceHandler];
};
