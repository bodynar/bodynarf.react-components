/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";

import { ActionFn, SimpleFn } from "@bodynarf/utils";

/**
 * Executes the provided function only once during the component's initial render (mount)
 * @param fn Function to be called only on the initial render of the component
 */
export const useMount = (fn: ActionFn) => {
    useEffect(() => fn(), []);
};

/**
 * Executes the provided function only once during the component's initial render (mount) with unsubscribe
 * @param fn Function to be called only on the initial render of the component
 */
export const useMountWithUnsubscribe = (fn: SimpleFn<ActionFn>) => {
    useEffect(fn, []);
};
