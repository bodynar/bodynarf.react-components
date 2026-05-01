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
        setCloseKey(k => k + 1);
    }, []);

    const handleOverlayClick = useCallback(() => {
        setIsFocused(false);
    }, []);

    useEventListener("keydown", useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") {
            close();
        }
    }, [close]));

    const handleSelect = useCallback((path: string) => {
        navigate(path);
        close();
    }, [navigate, close]);

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
                    onSearch={setQuery}
                    searchType="byTyping"
                    size={ElementSize.Small}
                />
                {query.trim().length > 0 ? (
                    <div className={`${styles.dropdown}${isOpen ? ` ${styles["dropdown--open"]}` : ""}`}>
                        {/* onMouseDown preventDefault keeps input focused when clicking items */}
                        <ul onMouseDown={e => e.preventDefault()}>
                            {filteredItems.length > 0
                                ? filteredItems.map(item => (
                                    <li
                                        key={item.path}
                                        className={styles.item}
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
