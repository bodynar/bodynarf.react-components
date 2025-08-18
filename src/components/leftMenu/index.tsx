import { FC, useCallback, useMemo, useState } from "react";
import { Link, useLocation } from "react-router";

import { getClassName } from "@bodynarf/utils";

import { displayName, dependencies, devDependencies } from "package.json";

import routeList, { isRootMenuItem, RouteMenuItem, MenuItem as MenuItemModel } from "@app/pages/routing";

import bulmaLogo from "@app/assets/logos/Bulma Icon.svg";
import reactLogo from "@app/assets/logos/React-icon.svg";
import githubLogo from "@app/assets/logos/github Icon.svg";
import npmLogo from "@app/assets/logos/npm Icon.svg";

import styles from "./styles.module.scss";
import Icon from "@bodynarf/react.components/components/icon";

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
                            alt="Bulma logo"
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
                            alt="React logo"
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
            <div className={`${styles.links} pt-4 is-flex mt-4 pr-6 is-justify-content-space-around is-align-items-center`}>
                <a
                    target="_blank"
                    title="Open github repository"
                    className="is-flex is-flex-direction-column is-align-items-center"
                    href="https://github.com/bodynar/bodynarf.react-components"
                >
                    <img
                        src={githubLogo}
                        alt="Github logo"
                    />
                    Github
                </a>
                <a
                    target="_blank"
                    title="Open package in npm page"
                    className="is-flex is-flex-direction-column is-align-items-center"
                    href="https://www.npmjs.com/package/@bodynarf/react.components"
                >
                    <img
                        src={npmLogo}
                        alt="Npm logo"
                    />
                    npm
                </a>
            </div>
        </div>
    );
};

/** Menu item with sub items */
const MenuItemGroup: FC<MenuItemModel & { activeItem?: RouteMenuItem; }> = ({
    caption, children, activeItem
}) => {
    const [collapsed, setIsCollapsed] = useState(false);

    const onCollapseToggle = useCallback(() => setIsCollapsed(x => !x), [setIsCollapsed]);

    const className = getClassName([
        "is-block",
        "pb-2",
        "is-clickable",
        "has-text-weight-semibold",
        collapsed ? styles["is-collapsed"] : undefined,
    ]);

    return (
        <li role="group">
            <span
                className={className}
                onClick={onCollapseToggle}
            >
                {caption}
                <Icon
                    name="chevron-right"
                    className="is-pulled-right"
                />
            </span>
            {!collapsed &&
                <ul>
                    {children.map(routeItem =>
                        <MenuItem
                            key={routeItem.path}
                            {...routeItem}
                            activeItem={activeItem}
                        />
                    )}
                </ul>
            }
        </li>
    );
};

/** Menu item with link */
const MenuItem: FC<RouteMenuItem & { activeItem?: RouteMenuItem; }> = ({
    path, caption, activeItem,
}) => {
    return (
        <li>
            <Link
                to={path}
                className={activeItem?.path === path ? styles["is-active"] : undefined}
            >
                {caption}
            </Link>
        </li>
    );
};

export default LeftMenu;
