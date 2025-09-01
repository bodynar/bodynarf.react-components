import { ReactNode } from "react";

import { BaseElementProps, ElementIcon, ElementPosition, ElementSize } from "@bbr/types";

/** Breadcrumb item */
export interface BreadCrumb {
    /**
     * Displayed text
     * @deprecated Use `caption` instead
     */
    title?: string;

    /** Displayable caption */
    caption: string;

    /**
     * Page address
     * @deprecated Since v1.2.0 Use `href`
     */
    path?: string;

    /** Link address */
    href: string;

    /**
     * Is current page. Will be not clickable
     * @deprecated Since v1.2.0 Not used anymore
     */
    active?: boolean;

    /** Bootstrap icon class name */
    icon?: ElementIcon;
}

/** Breadcrumbs component props type */
export type BreadcrumbsProps = BaseElementProps & {
    /** Breadcrumbs items */
    items: Array<BreadCrumb>;

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

    /** Panel size */
    size?: ElementSize;

    /** Items position */
    position?: ElementPosition;

    /** Items separator. By default `arrow` */
    separator?: "arrow" | "bullet" | "dot" | "succeeds";
};
