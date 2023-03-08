import { isNullOrUndefined } from "@bodynarf/utils";

import { ElementColor, ValidationState, ValidationStatus } from "../components";

/**
 * Get current validation state values
 * @param style Component style color
 * @param validationState Current form item validation state
 * @returns [Is validation applicable; classname attribute value; validation messages]
 */
export const getValidationValues = (style?: ElementColor, validationState?: ValidationState): [boolean, string, Array<string>] => {
    const validationStateDefined = !isNullOrUndefined(validationState) && validationState!.status !== ValidationStatus.None;
    const styleClassName = getStyleClassName(style, validationState);

    const messages = validationState?.messages ?? [];

    return [validationStateDefined, styleClassName, messages];
}

/**
 * Get classname attribute value based on current validation state and form item component style prop
 * @param style Component style color
 * @param validationState Current form item validation state
 * @returns Classname attribute value
 */
export const getStyleClassName = (style?: ElementColor, validationState?: ValidationState): string => {
    if (isNullOrUndefined(validationState)) {
        return isNullOrUndefined(style) ? "" : `is-${style}`;
    }

    const { status } = validationState!;
    switch (status) {
        case ValidationStatus.Valid: {
            return "is-success";
        }
        case ValidationStatus.Invalid: {
            return "is-danger";
        }
    }

    return isNullOrUndefined(style) ? "" : `is-${style}`;
};
