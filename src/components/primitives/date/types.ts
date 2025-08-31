import { BaseInputElementProps, BaseNullableInputElementProps, BlurableElement } from "@bbr/types";

/** Date input component props type */
export type DateProps = Omit<
    BaseNullableInputElementProps<Date>,
    "placeholder" | "label"
> & BlurableElement & Required<Pick<BaseInputElementProps<unknown>, "label">>;
