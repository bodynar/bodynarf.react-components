import { FC, useCallback, useMemo, useState } from "react";
import { Link } from "react-router";

import { ElementColor, Tag } from "@bodynarf/react.components";
import Icon from "@bodynarf/react.components/components/icon";

import routeList, { isRootMenuItem, RouteMenuItem } from "@app/pages/routing";

interface VersionEntry {
    version: string;
    added: RouteMenuItem[];
    updated: RouteMenuItem[];
    groupLabel: (item: RouteMenuItem) => string;
}

/** Compare version strings like "1.15" > "1.6" numerically */
const compareVersionsDesc = (a: string, b: string): number => {
    const [aMaj, aMin] = a.split(".").map(Number);
    const [bMaj, bMin] = b.split(".").map(Number);
    if (bMaj !== aMaj) return bMaj - aMaj;
    return bMin - aMin;
};

/** Changelog — all added / updated items grouped by version */
const Changelog: FC = () => {
    const [openIndices, setOpenIndices] = useState<Set<number>>(() => new Set([0]));

    const toggleEntry = useCallback((index: number) => {
        setOpenIndices(prev => {
            const next = new Set(prev);
            if (next.has(index)) {
                next.delete(index);
            } else {
                next.add(index);
            }
            return next;
        });
    }, []);

    const entries = useMemo((): VersionEntry[] => {
        const allFlatItems = routeList.flatMap(item =>
            isRootMenuItem(item)
                ? item.children.map(child => ({ ...child, groupCaption: item.caption }))
                : [{ ...(item as RouteMenuItem), groupCaption: "" }]
        );

        const groupLabelMap = new Map<string, string>(
            allFlatItems.map(item => [item.path, item.groupCaption])
        );

        const map = new Map<string, { added: RouteMenuItem[]; updated: RouteMenuItem[] }>();

        const ensure = (v: string) => {
            if (!map.has(v)) {
                map.set(v, { added: [], updated: [] });
            }
            return map.get(v)!;
        };

        for (const item of allFlatItems) {
            if (item.createVersion) {
                ensure(item.createVersion).added.push(item);
            }
            if (item.updateVersion) {
                ensure(item.updateVersion).updated.push(item);
            }
        }

        return Array.from(map.entries())
            .sort(([a], [b]) => compareVersionsDesc(a, b))
            .map(([version, data]) => ({
                version,
                ...data,
                groupLabel: (item: RouteMenuItem) => groupLabelMap.get(item.path) ?? "",
            }));
    }, []);

    return (
        <>
            <div className="block">
                <h1 className="title is-1">
                    Changelog
                </h1>
                <p className="has-text-grey">
                    All additions and updates to the documentation, grouped by library version.
                </p>
            </div>

            {entries.map((entry, index) => {
                const isOpen = openIndices.has(index);
                return (
                    <div
                        key={entry.version}
                        className="block"
                        style={{ borderLeft: `3px solid ${isOpen ? "#485fc7" : "rgba(72,95,199,0.3)"}`, paddingLeft: "1.25rem", marginBottom: "1rem" }}
                    >
                        <h2
                            className="title is-4 mb-0 is-flex is-align-items-center is-clickable"
                            style={{ color: "#485fc7", gap: "0.5rem", paddingBottom: isOpen ? "0.75rem" : "0" }}
                            onClick={() => toggleEntry(index)}
                        >
                            <span style={{ transition: "transform 0.15s ease", transform: isOpen ? "rotate(90deg)" : "rotate(0deg)", display: "inline-flex" }}>
                                <Icon name="chevron-right" />
                            </span>
                            v{entry.version}
                        </h2>

                    {isOpen && entry.added.length > 0 && (
                        <div className="mb-3">
                            <p className="has-text-weight-semibold mb-2 is-flex is-align-items-center" style={{ gap: "0.5rem" }}>
                                <Tag
                                    content="NEW"
                                    style={ElementColor.Danger}
                                />
                                Added
                            </p>
                            <ul style={{ listStyle: "none", paddingLeft: "0.5rem" }}>
                                {entry.added
                                    .sort((a, b) => a.caption.localeCompare(b.caption))
                                    .map(item => (
                                        <li key={item.path} className="mb-1 is-flex is-align-items-center" style={{ gap: "0.4rem" }}>
                                            <span className="has-text-grey is-size-7" style={{ minWidth: "6rem" }}>
                                                {entry.groupLabel(item)}
                                            </span>
                                            <Link to={item.path} className="has-text-link">
                                                {item.caption}
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    )}

                    {isOpen && entry.updated.length > 0 && (
                        <div>
                            <p className="has-text-weight-semibold mb-2 is-flex is-align-items-center" style={{ gap: "0.5rem" }}>
                                <Tag
                                    content="UPD"
                                    style={ElementColor.Info}
                                />
                                Updated
                            </p>
                            <ul style={{ listStyle: "none", paddingLeft: "0.5rem" }}>
                                {entry.updated
                                    .sort((a, b) => a.caption.localeCompare(b.caption))
                                    .map(item => (
                                        <li key={item.path} className="mb-1 is-flex is-align-items-center" style={{ gap: "0.4rem" }}>
                                            <span className="has-text-grey is-size-7" style={{ minWidth: "6rem" }}>
                                                {entry.groupLabel(item)}
                                            </span>
                                            <Link to={item.path} className="has-text-link">
                                                {item.caption}
                                            </Link>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    )}
                    </div>
                );
            })}
        </>
    );
};

export default Changelog;
