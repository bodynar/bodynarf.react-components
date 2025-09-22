/* eslint-disable react/no-multi-comp */
import { FC, ReactNode } from "react";

import { getClassName, isNullOrUndefined } from "@bodynarf/utils";

import { getPositionClassName, getSizeClassName, mapDataAttributes } from "@bbr/utils";
import { ElementIcon, ElementPosition, ElementSize } from "@bbr/types";
import Icon from "@bbr/components/icon";

import { BreadCrumb, BreadcrumbsProps } from "..";

const defaultElementGenerator: (bc: BreadCrumb) => ReactNode = ((bc) => <BreadCrumbItem item={bc} />);

/**
 * Breadcrumbs navigation panel
 * @description If items are not specified, an empty component will be displayed.
*/
const BreadCrumbs: FC<BreadcrumbsProps> = ({
    items,
    position = ElementPosition.Left, size = ElementSize.Normal, separator = "arrow",
    elementGenerator = defaultElementGenerator,

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
                href={item.href ?? item.path}
            >
                {item.caption}
            </a>
        );
    }

    if (icon?.position === ElementPosition.Right) {
        return (
            <a
                href={item.href ?? item.path}
            >
                {item.caption}
                <Icon {...icon!} />
            </a>
        );
    }

    return (
        <a
            href={item.href ?? item.path}
        >

            <Icon {...icon!} />
            {item.caption}
        </a>
    );
};
