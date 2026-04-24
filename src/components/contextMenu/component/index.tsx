import {
    FC,
    MouseEvent as ReactMouseEvent,
    useCallback,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from "react";
import { createPortal } from "react-dom";

import { getClassName, isNotNullish } from "@bodynarf/utils";

import Icon from "@bbr/components/icon";

import { mapDataAttributes } from "@bbr/utils";

import "./style.scss";

import { ContextMenuProps } from "..";

/** Attaches a right-click context menu to its children */
const ContextMenu: FC<ContextMenuProps> = ({
    items,
    children,
    disabled = false,

    className, title, data,
}) => {
    const [position, setPosition] = useState<{ x: number; y: number; } | null>(null);
    const [adjusted, setAdjusted] = useState<{ x: number; y: number; } | null>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const close = useCallback(() => {
        setPosition(null);
        setAdjusted(null);
    }, []);

    const handleContextMenu = useCallback((e: ReactMouseEvent<HTMLDivElement>) => {
        if (disabled) {
            return;
        }

        e.preventDefault();
        setAdjusted(null);
        setPosition({ x: e.clientX, y: e.clientY });
    }, [disabled]);

    const handleItemClick = useCallback((handler?: () => void) => {
        close();
        handler?.();
    }, [close]);

    // Measure the rendered menu and flip it upward / leftward when it would overflow the viewport
    useLayoutEffect(() => {
        if (!position || !menuRef.current) {
            return;
        }

        const { offsetHeight, offsetWidth } = menuRef.current;
        const y = position.y + offsetHeight > window.innerHeight ? position.y - offsetHeight : position.y;
        const x = position.x + offsetWidth > window.innerWidth ? position.x - offsetWidth : position.x;

        setAdjusted({ x, y });
    }, [position]);

    // Close on outside click or Escape
    useEffect(() => {
        if (position === null) {
            return undefined;
        }

        const onMouseDown = (e: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                close();
            }
        };

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                close();
            }
        };

        document.addEventListener("mousedown", onMouseDown);
        document.addEventListener("keydown", onKeyDown);
        window.addEventListener("scroll", close, true);

        return () => {
            document.removeEventListener("mousedown", onMouseDown);
            document.removeEventListener("keydown", onKeyDown);
            window.removeEventListener("scroll", close, true);
        };
    }, [position, close]);

    const dataAttributes = mapDataAttributes(data);

    const wrapperClassName = getClassName([
        "bbr-context-menu",
        className,
    ]);

    // While adjusted coords are not yet measured, render hidden at the raw click position
    // so useLayoutEffect can read offsetHeight/offsetWidth before the first paint.
    const menuStyle = adjusted
        ? { top: adjusted.y, left: adjusted.x }
        : { top: position?.y ?? 0, left: position?.x ?? 0, visibility: "hidden" as const };

    return (
        <div
            {...dataAttributes}

            title={title}
            className={wrapperClassName}
            onContextMenu={handleContextMenu}
        >
            {children}

            {isNotNullish(position) && createPortal(
                <div
                    role="menu"
                    ref={menuRef}
                    style={menuStyle}
                    className="bbr-context-menu__dropdown dropdown-content"
                >
                    {items.map(item => {
                        if (!item.label) {
                            return (
                                <hr
                                    key={item.key}

                                    className="dropdown-divider"
                                />
                            );
                        }

                        return (
                            <a
                                key={item.key}

                                role="menuitem"
                                onClick={item.disabled ? undefined : () => handleItemClick(item.onClick)}
                                className={getClassName([
                                    "bbr-context-menu__item",
                                    item.disabled ? "is-disabled" : "",
                                ])}
                            >
                                {item.icon ? (
                                    <Icon
                                        name={item.icon}
                                        className="bbr-context-menu__icon"
                                    />
                                ) : null}
                                {item.label}
                            </a>
                        );
                    })}
                </div>,
                document.body,
            )}
        </div>
    );
};

export default ContextMenu;
