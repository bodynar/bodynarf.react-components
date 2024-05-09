import { FC } from "react";

import { getClassName, isNullOrUndefined } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";
import { ElementIcon, ElementPosition, ElementSize } from "@bbr/types";
import Icon from "@bbr/components/icon";

import { BreadCrumb, BreadcrumbsProps } from "..";

/**
 * Breadcrumbs navigation panel
 * @description If items are not specified, an empty component will be displayed.
*/
const BreadCrumbs: FC<BreadcrumbsProps> = ({
    items,
    position = ElementPosition.Left, size = ElementSize.Normal, separator = "arrow",
    elementGenerator = ((bc) => <BreadCrumbItem item={bc} />),

    className, title, data,
}) => {
    if (items.length <= 1) {
        return <></>;
    }

    const elClassName = getClassName([
        "bbr-breadcrumbs",
        "breadcrumb",
        className,
        size === ElementSize.Normal ? undefined : `is-${size}`,
        `has-${separator}-separator`,
        position === ElementPosition.Left ? undefined : `is-${position}`,
    ]);

    const dataAttributes = isNullOrUndefined(data)
        ? undefined
        : mapDataAttributes(data!);

    return (
        <nav
            className={elClassName}
            aria-label="breadcrumbs"

            title={title}
            {...dataAttributes}
        >
            <ul>
                {items.map(breadCrumb =>
                    <li
                        key={breadCrumb.path}
                        className={breadCrumb.active ? "is-active" : undefined}
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

    /** Bootstrap icon class name */
    icon?: ElementIcon;
};

/** Template for single breadcrumb */
const BreadCrumbItem: FC<BreadCrumbItemProps> = ({
    item, icon
}) => {
    if (isNullOrUndefined(icon)) {
        return (
            <a
                href={item.path}
                aria-current={item.active ? "page" : undefined}
            >
                {item.title}
            </a>
        );
    }

    if (icon?.position === ElementPosition.Right) {
        return (
            <a
                href={item.path}
                aria-current={item.active ? "page" : undefined}
            >
                {item.title}
                <Icon {...icon!} />
            </a>
        );
    }

    return (
        <a
            href={item.path}
            aria-current={item.active ? "page" : undefined}
        >

            <Icon {...icon!} />
            {item.title}
        </a>
    );
};
