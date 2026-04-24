import { FC, ReactNode } from "react";

import { getClassName, isNullish } from "@bodynarf/utils";

import { getPositionClassName, getSizeClassName, mapDataAttributes } from "@bbr/utils";
import { ElementPosition, ElementSize } from "@bbr/types";
import Icon from "@bbr/components/icon";

import "./style.scss";

import { BreadCrumb, BreadcrumbsProps } from "..";

const DefaultElementGenerator: (bc: BreadCrumb) => ReactNode = (
    (bc) => (
        <BreadCrumbItem
            item={bc}
        />
    )
);

/**
 * Breadcrumbs navigation panel
 * @description If items are not specified, an empty component will be displayed.
*/
const BreadCrumbs: FC<BreadcrumbsProps> = ({
    items,
    position = ElementPosition.Left, size = ElementSize.Normal, separator = "arrow",
    elementGenerator = DefaultElementGenerator,
    ariaLabel = "breadcrumbs",

    className, title, data,
}) => {
    if (items.length <= 1) {
        return null;
    }

    const elClassName = getClassName([
        "bbr-breadcrumbs",
        "breadcrumb",
        className,
        getSizeClassName(size),
        `has-${separator}-separator`,
        getPositionClassName(position),
    ]);

    const dataAttributes = mapDataAttributes(data);

    return (
        <nav
            {...dataAttributes}

            title={title}
            aria-label={ariaLabel}
            className={elClassName}
        >
            <ul>
                {items.map((breadCrumb, i, a) =>
                    <li
                        key={breadCrumb.href ?? breadCrumb.path}

                        className={i === a.length - 1 ? "is-active" : undefined}
                    >
                        {elementGenerator(breadCrumb)}
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default BreadCrumbs;

/** Props of `BreadCrumbItem` */
type BreadCrumbItemProps = {
    /** Breadcrumb item */
    item: BreadCrumb;
};

/** Template for single breadcrumb */
const BreadCrumbItem: FC<BreadCrumbItemProps> = ({
    item
}) => {
    if (isNullish(item.icon)) {
        return (
            <a
                href={item.href ?? item.path}
            >
                {item.caption}
            </a>
        );
    }

    if (item.icon.position === ElementPosition.Right) {
        return (
            <a
                href={item.href ?? item.path}
            >
                {item.caption}
                <Icon {...item.icon} />
            </a>
        );
    }

    return (
        <a
            href={item.href ?? item.path}
        >

            <Icon {...item.icon} />
            {item.caption}
        </a>
    );
};
