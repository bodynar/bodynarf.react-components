import { FC, useCallback, useMemo, useState } from "react";

import { createPortal } from "react-dom";
import { useNavigate } from "react-router";

import { ElementSize } from "@bodynarf/react.components";
import { useEventListener } from "@bodynarf/react.components/hooks";
import SearchComponent from "@bodynarf/react.components/components/search";

import routeList, { isRootMenuItem, RouteMenuItem } from "@app/pages/routing";

import styles from "./styles.module.scss";

interface SearchItem {
    caption: string;
    path: string;
    groupCaption?: string;
}

/** All leaf route items flattened with their group caption */
const allItems: SearchItem[] = routeList.flatMap(item =>
    isRootMenuItem(item)
        ? item.children.map(child => ({
            caption: child.caption,
            path: child.path,
            groupCaption: item.caption,
        }))
        : [{ caption: item.caption, path: (item as RouteMenuItem).path }]
);

/** Sidebar menu search — shows overlay + dropdown when typing */
const MenuSearch: FC = () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const [isFocused, setIsFocused] = useState(false);
    const [closeKey, setCloseKey] = useState(0);
    const [activeIndex, setActiveIndex] = useState(-1);

    const isOpen = query.trim().length > 0 && isFocused;

    const filteredItems = useMemo((): SearchItem[] => {
        if (query.trim().length === 0) {
            return [];
        }

        const lower = query.trim().toLowerCase();

        return allItems
            .filter(item => item.caption.toLowerCase().includes(lower))
            .slice(0, 5);
    }, [query]);

    const close = useCallback(() => {
        setQuery("");
        setIsFocused(false);
        setActiveIndex(-1);
        setCloseKey(k => k + 1);
    }, []);

    const handleOverlayClick = useCallback(() => {
        setIsFocused(false);
        setActiveIndex(-1);
    }, []);

    useEventListener("keydown", useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") {
            close();
            return;
        }

        if (!isOpen || filteredItems.length === 0) {
            return;
        }

        if (e.key === "ArrowDown") {
            e.preventDefault();
            setActiveIndex(i => (i + 1) % filteredItems.length);
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setActiveIndex(i => (i <= 0 ? filteredItems.length - 1 : i - 1));
        } else if (e.key === "Enter") {
            if (activeIndex >= 0 && activeIndex < filteredItems.length) {
                e.preventDefault();
                navigate(filteredItems[activeIndex].path);
                close();
            }
        }
    }, [close, isOpen, filteredItems, activeIndex, navigate]));

    const handleSelect = useCallback((path: string) => {
        navigate(path);
        close();
    }, [navigate, close]);

    const handleQueryChange = useCallback((value: string) => {
        setQuery(value);
        setActiveIndex(-1);
    }, []);

    return (
        <>
            {isOpen ? createPortal(
                <div
                    className={styles.overlay}
                    onClick={handleOverlayClick}
                />,
                document.body
            ) : null}
            <div
                className={styles.container}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            >
                <SearchComponent
                    key={closeKey}
                    caption="Search by name..."
                    onSearch={handleQueryChange}
                    searchType="byTyping"
                    size={ElementSize.Small}
                />
                {query.trim().length > 0 ? (
                    <div className={`${styles.dropdown}${isOpen ? ` ${styles["dropdown--open"]}` : ""}`}>
                        {/* onMouseDown preventDefault keeps input focused when clicking items */}
                        <ul onMouseDown={e => e.preventDefault()} role="listbox">
                            {filteredItems.length > 0
                                ? filteredItems.map((item, index) => (
                                    <li
                                        key={item.path}
                                        role="option"
                                        aria-selected={index === activeIndex}
                                        className={`${styles.item}${index === activeIndex ? ` ${styles["item--active"]}` : ""}`}
                                        onClick={() => handleSelect(item.path)}
                                    >
                                        <span>{item.caption}</span>
                                        {item.groupCaption != null && (
                                            <span className={`has-text-grey ml-1 ${styles["item__group"]}`}>
                                                ({item.groupCaption})
                                            </span>
                                        )}
                                    </li>
                                ))
                                : (
                                    <li className={`has-text-grey ${styles["no-results"]}`}>
                                        No results
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default MenuSearch;
