import { BaseNotNullableInputElementProps, BlurableElement, KeyboardElement } from "@bbr/types";

/** Multiline textual input component props type */
export type MultilineProps = Omit<BaseNotNullableInputElementProps<string>, "rounded">
    & BlurableElement
    & KeyboardElement
    & {
        /** Is input should be resizable */
        fixed?: boolean;

        /** Number of initial rows count */
        rows?: number;
    };
