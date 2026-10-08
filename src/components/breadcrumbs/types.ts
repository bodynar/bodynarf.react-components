import { ReactNode } from "react";

import { BaseElementProps, ElementIcon, ElementPosition, SizableElement } from "@bbr/types";

/** Breadcrumb item */
export interface BreadCrumb {
    /** Displayable caption */
    caption: string;

    /** Link address */
    href: string;

    /** Bootstrap icon class name */
    icon?: ElementIcon;
}

/** Breadcrumbs component props type */
export type BreadcrumbsProps =
    & BaseElementProps
    & SizableElement
    & {
        /** Breadcrumbs items */
        items: Array<BreadCrumb>;

        /** Items position */
        position?: ElementPosition;

        /** Items separator. By default `arrow` */
        separator?: "arrow" | "bullet" | "dot" | "succeeds";

        /**
         * Accessible label for the `<nav>` landmark.
         * @default "breadcrumbs"
         */
        ariaLabel?: string;

        /**
         * Function that generates each element
         * @example
         * elementGenerator={breadCrumb =>
         *  <div>
         *     {breadCrumb.icon &&
         *         <span>
         *             <Icon {...breadCrumb.icon} />
         *         </span>
         *     }
         *     <span>
         *         {breadCrumb.caption}
         *     </span>
         *  </div>
         * }
        */
        elementGenerator?: (bc: BreadCrumb) => ReactNode;
    };
