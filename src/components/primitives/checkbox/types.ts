import { BaseInputElementProps } from "..";

/** Checkbox component props type */
export interface CheckBoxProps extends BaseInputElementProps<boolean> {
    /** Is full colored checkbox */
    block?: boolean;

    /** Remove the checkbox border */
    withoutBorder?: boolean;

    /** 
     * Checkbox has background color.
     * Only works if style is set
    */
    hasBackgroundColor?: boolean;

    /**
     * Set unchecked background as transparent.
     * Only used with `hasBackgroundColor` set as `true`
     * @example `{ style: ElementColor.Info, hasBackgrounColor: true, fixBackgroundColor: true }` -
    */
    fixBackgroundColor?: boolean;

    /**
     * Display component with label as form element.
     * Label will be placed at left
     */
    isFormLabel?: boolean;
}
