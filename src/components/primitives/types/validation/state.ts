import { ValidationStatus } from "./status";

/** Form component value validation state */
export interface ValidationState {
    /** Current status */
    status: ValidationStatus;

    /** Current status messages */
    messages: Array<string>;
};
