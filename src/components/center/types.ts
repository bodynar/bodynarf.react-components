import { ReactNode } from "react";

import { BaseElementProps } from "@bbr/types";

/** Axis along which the content is centered */
export type CenterAxis =
    | "horizontal"
    | "vertical"
    | "both";

/** Center component props */
export type CenterProps = BaseElementProps & {
    /** Content to center */
    children: ReactNode;

    /**
     * Axis to center the content along.
     * Component is positioned relative to the nearest parent with `position: relative`
     * @default "both"
    */
    axis?: CenterAxis;
};
