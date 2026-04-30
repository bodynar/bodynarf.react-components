import { DependencyList, useCallback, useEffect } from "react";

import { isNullish, isNull, ActionFn } from "@bodynarf/utils";

/**
 * Subscribe to component outside click
 * @param selector Component root selector
 * @param clickHandleCondition Condition to handle document click
 * @param clickHandleChange Handler of outside component click
 * @param clickListenCondition Condition to start listening document clicks
 * @param dependencies Additional dependencies to update hook
 */
export const useComponentOutsideClick = (
    selector: string,
    clickHandleCondition: boolean,
    clickHandleChange: ActionFn,
    clickListenCondition = false,
    dependencies: DependencyList = []
): void => {
    const onDocumentClick = useCallback(
        (event: MouseEvent): void => {
            if (clickHandleCondition) {
                const target: HTMLElement = event.target as HTMLElement;

                if (isNullish(target)) {
                    return;
                }

                // If the target was removed from DOM during React re-render
                // (e.g. a calendar header button replaced on view switch),
                // closest() would always return null for a detached node —
                // treating it as an outside click incorrectly. Skip such events.
                if (!document.contains(target)) {
                    return;
                }

                const relatedComponent: Element | null =
                    target.closest(selector);

                if (isNull(relatedComponent)) {
                    clickHandleChange();
                }
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [clickHandleCondition, selector, clickHandleChange, dependencies]);

    useEffect(() => {
        if (clickListenCondition) {
            document.addEventListener("click", onDocumentClick);

            return (): void => document.removeEventListener("click", onDocumentClick);
        }

        return () => { };
    }, [clickListenCondition, onDocumentClick]);
};
