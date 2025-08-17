import { FC, useMemo } from "react";
import { Link, useLocation } from "react-router";

import { displayName } from "package.json";

import routeList, { isRootMenuItem, RouteMenuItem } from "@app/pages/routing";

import "./styles.scss";

/** Main site menu */
const LeftMenu: FC = () => {
    const { pathname } = useLocation();

    const activeItem = useMemo(
        () => routeList
            .flatMap(x => isRootMenuItem(x) ? x.children : [x])
            .filter(({ path }) => path.startsWith(pathname))
            .pop(),
        []
    );

    return (
        <div className="left-menu py-4 px-2">
            <div role="header">
                {displayName}
            </div>
            <div role="menu">
                {routeList.map(routeItem =>
                    isRootMenuItem(routeItem)
                        ? <MenuItemGroup key={routeItem.name} />
                        : <MenuItem key={routeItem.path} {...routeItem} activeItem={activeItem} />
                )}
            </div>
            <div role="links">

            </div>
        </div>
    );
};

const MenuItemGroup: FC = () => {
    return (
        <>
        </>
    );
};

const MenuItem: FC<RouteMenuItem & { activeItem?: RouteMenuItem; }> = ({
    path, caption, activeItem,
}) => {
    return (
        <li>
            <Link
                to={path}
                className={activeItem?.path === path ? "is-active" : undefined}
            >
                {caption}
            </Link>
        </li>
    );
};

export default LeftMenu;
