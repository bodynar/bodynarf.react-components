import { ReactNode } from "react";

import { BaseElementProps, ClickableElement } from "@bbr/types";

/** Card container props */
export type CardProps = BaseElementProps & {
    /** Card content (Card.Header, Card.Body, Card.Footer) */
    children: ReactNode;
};

/** Card.Header sub-component props */
export type CardHeaderProps = BaseElementProps & ClickableElement & {
    /** Header content */
    children: ReactNode;
};

/** Card.Body sub-component props */
export type CardBodyProps = BaseElementProps & {
    /** Body content */
    children: ReactNode;
};

/** Card.Footer sub-component props */
export type CardFooterProps = BaseElementProps & {
    /** Footer content */
    children: ReactNode;
};
