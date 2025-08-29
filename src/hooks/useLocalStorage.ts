import { useState } from "react";

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
    const [value, setValue] = useState<T>(() => {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : initial;
    });

    const setStoredValue = (newValue: T) => {
        setValue(newValue);
        localStorage.setItem(key, JSON.stringify(newValue));
    };

    return [value, setStoredValue] as const;
};
