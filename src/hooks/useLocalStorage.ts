import { useState } from "react";

import { localStorage as storage } from "@bodynarf/utils";

/**
 * Stores state in localStorage and keeps it in sync.
 *
 * @template T - Type of the stored value
 * @param key - Storage key
 * @param initial - Initial value
 * @returns A tuple [value, setValue] similar to useState
 *
 * @example
 * const [token, setToken] = useLocalStorage("token", "");
 */
export const useLocalStorage = <T>(key: string, initial: T) => {
    const [value, setValue] = useState<T>(() =>
        storage.getRecord<T>(key) ?? initial
    );

    const setStoredValue = (newValue: T) => {
        setValue(newValue);
        storage.saveRecord(key, newValue);
    };

    return [value, setStoredValue] as const;
};
