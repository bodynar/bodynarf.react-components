import { CSSProperties, ReactNode } from "react";

import { BaseElementProps } from "@bbr/types";

/** Direction of the stack main axis */
export type StackDirection =
    | "row"
    | "column";

/** Stack component props */
export type StackProps = BaseElementProps & {
    /** Stack content */
    children: ReactNode;

    /**
     * Direction of the stack main axis.
     * @default "column"
    */
    direction?: StackDirection;

    /**
     * Gap between the children.
     * Numeric values are treated as pixels, string values are used as is
     * @default "8px"
    */
    gap?: string | number;

    /** Children alignment on the cross axis (`align-items`) */
    align?: CSSProperties["alignItems"];

    /** Children distribution on the main axis (`justify-content`) */
    justify?: CSSProperties["justifyContent"];

    /** Children wrapping behavior (`flex-wrap`) */
    wrap?: CSSProperties["flexWrap"];
};
