import { isNullish } from "@bodynarf/utils";

import { ElementColor, ValidationState, ValidationStatus } from "@bbr/types";

/**
 * Get className component prop based on current validation state and style
 *
 * (!) Validation className has priority
 * @param style Element style
 * @param validationState Current validation state
 * @returns Style className
 */
export const getStyleClassName = (
    style?: ElementColor,
    validationState?: ValidationState
): string => {
    if (isNullish(validationState) || validationState.status === ValidationStatus.None) {
        return isNullish(style)
            ? ""
            : `is-${style}`;
    }

    return validationState.status === ValidationStatus.Invalid
        ? "is-danger"
        : "is-success";
};
