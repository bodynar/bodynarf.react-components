import { BaseElementProps, BaseInputElementProps, ElementFloatPosition } from "@bbr/types";

/** File upload component props type */
export type FileUploadProps = BaseElementProps & Pick<
    BaseInputElementProps<File>,
    | "onValueChange" | "disabled"
    | "size" | "style"
    | "name"
> & {
    /** Input element placeholder */
    placeholder: string;

    /**
     * Position of a upload file
     *
     * ! NOTE: Right alignment cannot be used with boxed style
     */
    alignment?: ElementFloatPosition;

    /**
     * Display file name after selection
     *
     * Default is `true`
     */
    displayFileName?: boolean;

    /**
     * Is boxed block
     *
     * ! NOTE: Cannot be used with Right alignment
     */
    boxed?: boolean;

    /** Title for clear button */
    clearSelectionTitle?: string;
};
