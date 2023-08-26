import { getClassName, isNullOrUndefined } from "@bodynarf/utils";

import { ElementSize } from "@bbr";

import { BreadCrumb } from "../types";

/** Breadcrumbs component props type */
export interface BreadcrumbsProps {
    /** Breadcrumbs items */
    items: Array<BreadCrumb>;

    /**
     * Function that generates each element
     * @example
     * <Link to={breadCrumb.path}>
     *     {breadCrumb.icon &&
     *         <span>
     *             <Icon {...breadCrumb.icon} />
     *         </span>
     *     }
     *     <span>
     *         {breadCrumb.title}
     *     </span>
     * </Link>
     * 
    */
    elementGenerator: (bc: BreadCrumb) => JSX.Element;

    /** Panel size */
    size?: ElementSize;

    /** Items position */
    position?: "centered" | "right";

    /** Items separator. By default `arrow` */
    separator?: "arrow" | "bullet" | "dot" | "succeeds";

    /** Container extra class name */
    className?: string;
}

/** Breadcrumbs navigation panel */
const BreadCrumbs = ({
    items,
    size, position, separator = "arrow",
    className,
    elementGenerator,
}: BreadcrumbsProps): JSX.Element => {
    if (items.length <= 1) {
        return <></>;
    }

    const elClassName = getClassName([
        "breadcrumb",
        isNullOrUndefined(size) ? undefined : `is-${size}`,
        `has-${separator}-separator`,
        isNullOrUndefined(position) ? undefined : `is-${position}`,
        className
    ]);

    return (
        <nav
            className={elClassName}
            aria-label="breadcrumbs"
        >
            <ul>
                {items.map(breadCrumb =>
                    <li
                        className={breadCrumb.active ? "is-active" : undefined}
                        key={breadCrumb.path}
                        aria-current={breadCrumb.active ? "page" : undefined}
                    >
                        {elementGenerator(breadCrumb)}
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default BreadCrumbs;
