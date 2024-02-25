/** Component value validation status */
export enum ValidationStatus {
    /** Validation wasn"t been performed */
    None = "none",

    /** Value is valid */
    Valid = "valid",

    /** Value is invalid due some validator check */
    Invalid = "invalid",
}
