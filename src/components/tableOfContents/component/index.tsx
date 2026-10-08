import { FC, MouseEvent, useEffect, useState } from "react";

import { getClassName, isNotNullish } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";

import "./style.scss";

import { TableOfContentsItem, TableOfContentsProps } from "..";

/** Pixels of left padding applied per {@link TableOfContentsItem.order} level. */
const INDENT_PER_LEVEL = 16;

/**
 * Pick the entry to mark as active: the topmost currently-intersecting one.
 * Sorts visible entries by their vertical position and returns the first.
 */
const pickTopmostVisible = (entries: IntersectionObserverEntry[]): Element | null => {
    const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

    return visible.length > 0 ? visible[0].target : null;
};

/** Table of contents with scrollspy and smooth scrolling. */
const TableOfContents: FC<TableOfContentsProps> = ({
    items,
    title,

    className, data,
}) => {
    const [activeAnchor, setActiveAnchor] = useState<string | null>(null);

    useEffect(() => {
        const observed: { item: TableOfContentsItem; element: Element }[] = [];

        for (const item of items) {
            const element = document.querySelector(item.anchor);

            if (isNotNullish(element)) {
                observed.push({ item, element });
            }
        }

        if (observed.length === 0) {
            return;
        }

        const observer = new IntersectionObserver(
            entries => {
                const target = pickTopmostVisible(entries);

                if (isNotNullish(target)) {
                    const matched = observed.find(({ element }) => element === target);

                    if (isNotNullish(matched)) {
                        setActiveAnchor(matched.item.anchor);
                    }
                }
            },
            { rootMargin: "0px 0px -70% 0px", threshold: 0 }
        );

        observed.forEach(({ element }) => observer.observe(element));

        return () => observer.disconnect();
    }, [items]);

    const onItemClick = (anchor: string) => (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();

        const target = document.querySelector(anchor);

        if (isNotNullish(target)) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    const containerClassName = getClassName([
        "bbr-toc",
        className,
    ]);

    const dataAttributes = mapDataAttributes(data);

    return (
        <nav
            {...dataAttributes}

            className={containerClassName}
        >
            {isNotNullish(title)
                ? <p className="bbr-toc__title">
{title}
                  </p>
                : null
            }
            <ul className="bbr-toc__list">
                {items.map(item => {
                    const isActive = activeAnchor === item.anchor;

                    const linkClassName = getClassName([
                        "bbr-toc__link",
                        isActive ? "is-active" : "",
                    ]);

                    return (
                        <li
                            key={item.anchor}

                            className="bbr-toc__item"
                            style={{ paddingLeft: (item.order ?? 0) * INDENT_PER_LEVEL }}
                        >
                            <a
                                
                              href={item.anchor}
                              className={linkClassName}
                              onClick={onItemClick(item.anchor)}
                            
                            >
                                {item.label}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default TableOfContents;
