import { FC, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, useLocation } from "react-router";

import { isNullOrEmpty, getClassName } from "@bodynarf/utils";

import { ElementColor, Tag } from "@bodynarf/react.components";
import { displayName, dependencies, devDependencies } from "package.json";

import routeList, { isRootMenuItem, RouteMenuItem, MenuItem as MenuItemModel } from "@app/pages/routing";

import bulmaLogo from "@app/assets/logos/Bulma Icon.svg";
import reactLogo from "@app/assets/logos/React-icon.svg";
import githubLogo from "@app/assets/logos/github Icon.svg";
import npmLogo from "@app/assets/logos/npm Icon.svg";

import styles from "./styles.module.scss";
import Icon from "@bodynarf/react.components/components/icon";

import MenuSearch from "../menuSearch";

/** Truncate caption to max 20 characters */
const truncateCaption = (caption: string): string =>
    caption.length > 20 ? `${caption.slice(0, 20)}\u2026` : caption;

/** component lib version */
const packageVersion = dependencies["@bodynarf/react.components"];

/** component lib version (major.minor only) */
const packageVersionShort = packageVersion.split(".").slice(0, 2).join(".");

/** bulma css lib version */
const bulmaVersion = devDependencies.bulma;

/** Site sidebar menu */
const LeftMenu: FC = () => {
    const { pathname } = useLocation();

    const activeItem = useMemo(
        () => routeList
            .flatMap(x => isRootMenuItem(x) ? x.children : [x])
            .filter(({ path }) => path === pathname)
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
                        rel="noreferrer"
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
                        rel="noreferrer"
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
                    Package ver.:
                    {` `}
                    {packageVersion}
                </span>
                <span
                    title="Version of Bulma package"
                    className="is-block is-italic has-text-grey is-size-7"
                >
                    Bulma ver.:
                    {` `}
                    {bulmaVersion}
                </span>
            </div>

            <MenuSearch />

            <ul className={`${styles.menu} mt-4`}>
                {routeList.map(routeItem =>
                    isRootMenuItem(routeItem)
                        ?
                        <MenuItemGroup
                            key={routeItem.name}

                            {...routeItem}
                            activeItem={activeItem}
                        />
                        :
                        <MenuItem
                            key={routeItem.path}
                            {...routeItem}
                            activeItem={activeItem}
                        />
                )}
            </ul>
            <div className={`${styles.links} pt-4 is-flex mt-4 pr-6 is-justify-content-space-around is-align-items-center`}>
                <a
                    target="_blank"
                    rel="noreferrer"
                    title="Open github repository"
                    className="is-flex is-flex-direction-column is-align-items-center"
                    href="https://github.com/bodynar/bodynarf.react-components"
                >
                    <img
                        src={githubLogo}
                        alt="Github logo"
                    />
                    {` `}
                    Github
                </a>
                <a
                    target="_blank"
                    rel="noreferrer"
                    title="Open package in npm page"
                    className="is-flex is-flex-direction-column is-align-items-center"
                    href="https://www.npmjs.com/package/@bodynarf/react.components"
                >
                    <img
                        src={npmLogo}
                        alt="Npm logo"
                    />
                    {` `}
                    npm
                </a>
            </div>
        </div>
    );
};

/** Menu item with sub items */
const MenuItemGroup: FC<MenuItemModel & { activeItem?: RouteMenuItem; }> = ({
    name, caption, children, activeItem, defaultCollapsed = false,
}) => {
    const containsActive = activeItem != null && children.some(c => c.path === activeItem.path);
    const storageKey = `bbr-menu-collapsed-${name}`;

    const [collapsed, setIsCollapsed] = useState(() => {
        const stored = localStorage.getItem(storageKey);
        if (stored !== null) {
            return stored === "true" && !containsActive;
        }
        return defaultCollapsed && !containsActive;
    });

    // Expand group whenever the active item changes to be inside it
    useEffect(() => {
        if (containsActive) {
            setIsCollapsed(false);
        }
    }, [containsActive]);

    const onCollapseToggle = useCallback(() => {
        setIsCollapsed(x => {
            const next = !x;
            localStorage.setItem(storageKey, String(next));
            return next;
        });
    }, [storageKey]);

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
                title={caption}
                className={className}
                onClick={onCollapseToggle}
            >
                {truncateCaption(caption)}
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
    path, caption, activeItem, createVersion, updateVersion,
}) => {
    const liRef = useRef<HTMLLIElement>(null);
    const isNew = !isNullOrEmpty(createVersion) && createVersion === packageVersionShort;
    const isUpdated = !isNullOrEmpty(updateVersion) && updateVersion === packageVersionShort;
    const isActive = activeItem?.path === path;

    // Scroll this item into view when it becomes active
    useEffect(() => {
        if (isActive && liRef.current != null) {
            liRef.current.scrollIntoView({ block: "nearest", behavior: "smooth" });
        }
    }, [isActive]);

    const className = getClassName([
        "is-flex",
        "is-align-items-center",
        isActive ? styles["is-active"] : undefined,
    ]);

    return (
        <li ref={liRef}>
            <Link
                to={path}
                title={caption}
                className={className}
            >
                {isNew ? (
                    <Tag
                        title="New"
                        content="NEW"
                        className="mr-2"
                        style={ElementColor.Danger}
                    />
                ) : isUpdated ? (
                    <Tag
                        content="UPD"
                        title="Updated"
                        className="mr-2"
                        style={ElementColor.Info}
                    />
                ) : null}
                {truncateCaption(caption)}
            </Link>
        </li>
    );
};

export default LeftMenu;
