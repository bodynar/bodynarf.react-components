import { BaseElementProps, ElementIcon, ElementPosition, ElementSize } from "@bbr/types";

/** Breadcrumb item */
export interface BreadCrumb {
    /** Displayed text */
    title: string; // TODO: rename to caption|text & use title as html title

    /** Page address */
    path: string;

    // TODO: use href
    // /** Link address */
    // href: string;

    /** Is current page. Will be not clickable */
    active: boolean;

    /** Bootstrap icon class name */
    icon?: ElementIcon;
}

/** Breadcrumbs component props type */
export interface BreadcrumbsProps extends BaseElementProps {
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
     *         {breadCrumb.title}
     *     </span>
     *  </div>
     * }
    */
    elementGenerator?: (bc: BreadCrumb) => JSX.Element;

    /** Panel size */
    size?: ElementSize;

    /** Items position */
    position?: ElementPosition;

    /** Items separator. By default `arrow` */
    separator?: "arrow" | "bullet" | "dot" | "succeeds";
}
