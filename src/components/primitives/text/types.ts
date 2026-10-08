import { BaseNotNullableInputElementProps, BlurableElement, ElementWithAddons, KeyboardElement } from "@bbr/types";

/** Text input component props type */
export type TextProps =
    & BaseNotNullableInputElementProps<string>
    & BlurableElement
    & KeyboardElement
    & ElementWithAddons;
