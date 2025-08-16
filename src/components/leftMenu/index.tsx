import { Link } from "react-router";

import { isNullOrEmpty } from "@bodynarf/utils";

import { RouteItem, routes } from "../../pages/routing";

/** Menu item model */
interface MenuItemProps {
    /** Unique name */
    caption: string;

    /** Target route link */
    path: string;

    /** Child routes */
    children?: Array<RouteItem>;

    /** Should be item be presented */
    display?: boolean;

    /** Current active item */
    activeItem: string;
}

/** Main site menu */
const LeftMenu = ({ activeItem }: { activeItem: string }): JSX.Element => {
    return (
        <>
            {routes.map(x =>
                <LinkGroup
                    key={x.path}
                    {...x}
                    activeItem={activeItem}
                />
            )}
        </>
    );
};

/** Menu links group heading */
const LinkGroup = (x: MenuItemProps): JSX.Element => {
    const { caption, children, activeItem } = x;

    if (!children || children.length === 0) {
        if (!isNullOrEmpty(caption)) {
            return (
                <ul className="menu-list">
                    <LinkComponent {...x} />
                </ul>
            );
        }

        return (<></>);
    }

    return (
        <>
            <p className="menu-label">
                {caption}
            </p>
            <ul className="menu-list">
                {children.map(x =>
                    <LinkComponent
                        key={x.path}
                        {...x}
                        activeItem={activeItem}
                    />
                )}
            </ul>
        </>
    );
};

/** Menu item with link */
const LinkComponent = ({ path, caption, activeItem }: MenuItemProps): JSX.Element => {
    return (
        <li>
            <Link
                key={path}
                to={path}
                className={activeItem === path ? "is-active" : undefined}
            >
                {caption}
            </Link>
        </li>
    );
};

export default LeftMenu;
