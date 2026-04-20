import { useState } from "react";

/**
 * Stores state in `sessionStorage` and keeps it in sync.
 * Mirrors the API of `useLocalStorage`.
 *
 * @template T - Type of the stored value
 * @param key - Storage key
 * @param initial - Initial / fallback value
 * @returns A tuple `[value, setValue]` similar to `useState`
 *
 * @example
 * const [step, setStep] = useSessionStorage("wizard-step", 0);
 */
export const useSessionStorage = <T>(key: string, initial: T) => {
    const [value, setValue] = useState<T>(() => {
        const item = sessionStorage.getItem(key);
        return item !== null ? (JSON.parse(item) as T) : initial;
    });

    const setStoredValue = (newValue: T) => {
        setValue(newValue);
        sessionStorage.setItem(key, JSON.stringify(newValue));
    };

    return [value, setStoredValue] as const;
};
