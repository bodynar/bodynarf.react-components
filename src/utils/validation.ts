import { isNullOrUndefined } from "@bodynarf/utils";

import { ElementColor, ValidationState, ValidationStatus } from "@bbr";

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
    if (isNullOrUndefined(validationState) || validationState!.status === ValidationStatus.None) {
        return isNullOrUndefined(style)
            ? ""
            : `is-${style}`;
    }

    return validationState!.status === ValidationStatus.Invalid
        ? "is-danger"
        : "is-success";
};
