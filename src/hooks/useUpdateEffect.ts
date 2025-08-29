import { useEffect, useRef, EffectCallback, DependencyList } from "react";

/**
 * A custom hook that works like `useEffect`, but skips execution on the initial render.
 *
 * @param effect - The effect callback to execute after updates (same signature as `useEffect`).
 * @param deps - Dependency array that controls when the effect should run.
 *
 * @example
 * ```tsx
 * useUpdateEffect(() => {
 *   console.log("This runs only after updates, not on the first render");
 * }, [someState]);
 * ```
 */
export const useUpdateEffect = (
    effect: EffectCallback,
    deps?: DependencyList
) => {
    const isFirstRender = useRef(true);

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        return effect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
};
