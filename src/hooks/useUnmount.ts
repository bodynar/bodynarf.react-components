import { DependencyList, useEffect, useRef } from "react";

import { ActionFn } from "@bodynarf/utils";

/**
 * Run cleanup function only on component unmount
 * @param cleanFn Cleanup function
 * @param dependencies Hook dependencies
 */
export const useUnmount = (
    cleanFn: ActionFn,
    dependencies: DependencyList = []
) => {
    const isUnmountRef = useRef(false);

    useEffect(() => {
        return () => {
            isUnmountRef.current = true;
        };
    }, []);

    useEffect(() => {
        return () => {
            if (!isUnmountRef.current) {
                return;
            }

            cleanFn();
        };
    }, [cleanFn, dependencies]);
};
