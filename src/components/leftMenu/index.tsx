import { FC, useMemo } from "react";
import { Link, useLocation } from "react-router";

import { displayName, dependencies, devDependencies } from "package.json";

import routeList, { isRootMenuItem, RouteMenuItem, MenuItem as MenuItemModel } from "@app/pages/routing";

import bulmaLogo from "@app/assets/logos/Bulma Icon.svg";
import reactLogo from "@app/assets/logos/React-icon.svg";

import styles from "./styles.module.scss";

/** component lib version */
const packageVersion = dependencies["@bodynarf/react.components"];

/** bulma css lib version */
const bulmaVersion = devDependencies.bulma;

/** Site sidebar menu */
const LeftMenu: FC = () => {
    const { pathname } = useLocation();

    const activeItem = useMemo(
        () => routeList
            .flatMap(x => isRootMenuItem(x) ? x.children : [x])
            .filter(({ path }) => path.startsWith(pathname))
            .pop(),
        [pathname]
    );

    return (
        <div className={`${styles["left-menu"]}`}>
            <div
                className={`${styles.header} py-2`}
            >
                <div className={`${styles.header__brand} is-flex is-align-items-center is-justify-content-flex-start is-flex-direction-row`}>
                    <a
                        target="_blank"
                        href="https://bulma.io/"
                        className="is-flex is-align-items-center"
                    >
                        <img
                            src={bulmaLogo}
                            title="Open Bulma website"
                        />
                    </a>
                    <a
                        target="_blank"
                        href="https://react.dev/"
                        className="is-flex is-align-items-center"
                    >
                        <img
                            src={reactLogo}
                            title="Open React website"
                        />
                    </a>
                    <span className="has-text-weight-medium">
                        {displayName}
                    </span>
                </div>
                <span
                    title="Version of BBR.Components package"
                    className="is-block is-italic has-text-grey is-size-7"
                >
                    Package ver.: {packageVersion}
                </span>
                <span
                    title="Version of Bulma package"
                    className="is-block is-italic has-text-grey is-size-7"
                >
                    Bulma ver.: {bulmaVersion}
                </span>
            </div>
            <ul className={`${styles.menu} mt-4`}>
                {routeList.map(routeItem =>
                    isRootMenuItem(routeItem)
                        ? <MenuItemGroup key={routeItem.name} {...routeItem} activeItem={activeItem} />
                        : <MenuItem key={routeItem.path} {...routeItem} activeItem={activeItem} />
                )}
            </ul>
            <div className={styles.links}>

            </div>
        </div>
    );
};

const MenuItemGroup: FC<MenuItemModel & { activeItem?: RouteMenuItem; }> = ({
    caption, children, activeItem
}) => {
    return (
        <li role="group">
            <span>{caption}</span>
            <ul>
                {children.map(routeItem =>
                    <MenuItem
                        key={routeItem.path}
                        {...routeItem}
                        activeItem={activeItem}
                    />
                )}
            </ul>
        </li>
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
