import { BaseInputElementProps, BaseNullableInputElementProps, BlurableElement, KeyboardElement } from "@bbr/types";

/** Date input component props type */
export type DateProps =
    & Omit<
        BaseNullableInputElementProps<Date>,
        "placeholder" | "label"
    > & BlurableElement
    & KeyboardElement
    & Required<Pick<BaseInputElementProps<unknown>, "label">>
    ;
