import { BaseInputElementProps, BaseNullableInputElementProps, BlurableElement, KeyboardElement } from "@bbr/types";

/**
 * Date input component props type
 * @deprecated Since v1.15. Use `DateInputProps` from `dateInput` component instead. Will be removed in v1.16.
 */
export type DateProps =
    & Omit<
        BaseNullableInputElementProps<Date>,
        "placeholder" | "label"
    > & BlurableElement
    & KeyboardElement
    & Required<Pick<BaseInputElementProps<unknown>, "label">>
    ;
