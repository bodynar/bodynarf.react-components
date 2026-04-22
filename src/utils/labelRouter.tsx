import { FC } from "react";

import { isNullish } from "@bodynarf/utils";

import { LabelConfiguration } from "@bbr/types";

/**
 * Creates a label-routing component that delegates to `WithLabel` or `WithoutLabel`
 * based on whether the `label` prop is provided.
 *
 * @param WithoutLabel - Component to render when `label` is absent
 * @param WithLabel    - Component to render when `label` is present
 * @returns A single `FC<T>` that routes to the appropriate sub-component
 */
export const createLabelRouter = <T extends { label?: LabelConfiguration }>(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    WithoutLabel: FC<any>,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    WithLabel: FC<any>,
): FC<T> => {
    const Router: FC<T> = ({ label, ...rest }) =>
        isNullish(label)
            ? (
                <WithoutLabel
                    {...rest}

                    label={label}
                />
            )
            : (
                <WithLabel
                    {...rest}

                    label={label}
                />
            );

    return Router;
};
