import { ReactNode } from "react";

import { BaseElementProps, ElementIcon, ElementPosition, ElementSize } from "@bbr/types";

/** Breadcrumb item */
export interface BreadCrumb {
    /** Displayable caption */
    caption: string;

    /** Link address */
    href: string;

    /**
     * Is current page. Will be not clickable
     * @deprecated Since v1.2.0 Not used anymore
     */
    active?: boolean;

    /** Bootstrap icon class name */
    icon?: ElementIcon;

    /**
     * Displayed text
     * @deprecated Use `caption` instead
     */
    title?: string;

    /**
     * Page address
     * @deprecated Since v1.2.0 Use `href`
     */
    path?: string;
}

/** Breadcrumbs component props type */
export type BreadcrumbsProps = BaseElementProps & {
    /** Breadcrumbs items */
    items: Array<BreadCrumb>;

    /** Panel size */
    size?: ElementSize;

    /** Items position */
    position?: ElementPosition;

    /** Items separator. By default `arrow` */
    separator?: "arrow" | "bullet" | "dot" | "succeeds";

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
