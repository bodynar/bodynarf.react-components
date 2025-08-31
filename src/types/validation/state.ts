import { ValidationStatus } from ".";

/** Component value validation state */
export interface ValidationState {
    /** Current status */
    status: ValidationStatus;

    /** Current status messages */
    messages?: Array<string>;
}
