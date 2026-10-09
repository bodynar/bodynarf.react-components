import { FC, ReactNode, useCallback, useMemo, useState } from "react";
import { Link } from "react-router";

import { ElementColor, Tag } from "@bodynarf/react.components";
import Icon from "@bodynarf/react.components/components/icon";
import changelogRaw from "@bodynarf/react.components/changelog.md?raw";

import routeList, { isRootMenuItem, RouteMenuItem } from "@app/pages/routing";

interface VersionEntry {
    version: string;
    added: RouteMenuItem[];
    updated: RouteMenuItem[];
    groupLabel: (item: RouteMenuItem) => string;
}

/** Single changelog bullet with its nested sub-points */
interface ChangelogItemModel {
    line: string;
    subs: string[];
}

/** Single `### section` block of the library changelog */
interface ChangelogSection {
    caption: string;
    items: ChangelogItemModel[];
}

/** Single `## vX.Y.Z` block of the library changelog */
interface ChangelogVersion {
    version: string;
    sections: ChangelogSection[];
}

/** Compare version strings like "1.15" > "1.6" numerically */
const compareVersionsDesc = (a: string, b: string): number => {
    const [aMaj, aMin] = a.split(".").map(Number);
    const [bMaj, bMin] = b.split(".").map(Number);
    if (bMaj !== aMaj) return bMaj - aMaj;
    return bMin - aMin;
};

/** Parse the library changelog.md (shipped inside the npm package) into version blocks */
const parseChangelog = (raw: string): ChangelogVersion[] => {
    const result: ChangelogVersion[] = [];
    let currentVersion: ChangelogVersion | undefined;
    let currentSection: ChangelogSection | undefined;

    for (const line of raw.split(/\r?\n/)) {
        const versionMatch = line.match(/^## v(\d+(?:\.\d+)+)$/);
        if (versionMatch !== null) {
            currentVersion = { version: versionMatch[1], sections: [] };
            result.push(currentVersion);
            currentSection = undefined;
            continue;
        }

        const sectionMatch = line.match(/^### (.+)$/);
        if (sectionMatch !== null && currentVersion !== undefined) {
            currentSection = { caption: sectionMatch[1].trim(), items: [] };
            currentVersion.sections.push(currentSection);
            continue;
        }

        const itemMatch = line.match(/^- (.+)$/);
        if (itemMatch !== null && currentVersion !== undefined) {
            // bullets may appear directly under the version header, without a `### section`
            if (currentSection === undefined) {
                currentSection = { caption: "Changes", items: [] };
                currentVersion.sections.push(currentSection);
            }
            currentSection.items.push({ line: itemMatch[1].trim(), subs: [] });
            continue;
        }

        const subMatch = line.match(/^ +- (.+)$/);
        if (subMatch !== null && currentSection !== undefined && currentSection.items.length > 0) {
            const lastItem = currentSection.items[currentSection.items.length - 1];
            lastItem.subs.push(subMatch[1].trim());
        }
    }

    return result;
};

const changelogVersions = parseChangelog(changelogRaw);

/**
 * All library changelog blocks related to a major.minor demo version
 * (e.g. "1.15" → v1.15.1 + v1.15.0), newest first
 */
const sectionsForVersion = (demoVersion: string): ChangelogVersion[] =>
    changelogVersions.filter(x => x.version === demoVersion || x.version.startsWith(`${demoVersion}.`));

/** Render inline markdown (bold / italic / code) of a changelog bullet */
const renderInlineMarkdown = (text: string): ReactNode => {
    const match = text.match(/^([\s\S]*?)(\*\*[^*]+\*\*|`[^`]+`|\*[^*]+\*)([\s\S]*)$/);

    if (match === null) {
        return text;
    }

    const [, before = "", token = "", rest = ""] = match;

    let rendered: ReactNode = token;
    if (token.startsWith("**")) {
        rendered = <strong>{token.slice(2, -2)}</strong>;
    } else if (token.startsWith("`")) {
        rendered = <code>{token.slice(1, -1)}</code>;
    } else {
        rendered = <em>{token.slice(1, -1)}</em>;
    }

    return (
        <>
            {before}
            {rendered}
            {renderInlineMarkdown(rest)}
        </>
    );
};

/** Single changelog bullet: `**Name** <any marker> — description`, optionally with nested sub-points */
const ChangelogItem: FC<{ item: ChangelogItemModel }> = ({ item }) => {
    const { line, subs } = item;
    const nameMatch = line.match(/^\*\*([^*]+)\*\*/);
    const dashIndex = line.indexOf("—");

    if (dashIndex === -1 || nameMatch === null || nameMatch[0].length > dashIndex) {
        return (
            <li>
                {renderInlineMarkdown(line)}
                {subs.length > 0 && (
                    <ul style={{ listStyle: "circle", paddingLeft: "1.25rem", marginTop: "0.25rem" }}>
                        {subs.map(sub => <li key={sub}>{renderInlineMarkdown(sub)}</li>)}
                    </ul>
                )}
            </li>
        );
    }

    const name = nameMatch[1];
    const middle = line.slice(nameMatch[0].length, dashIndex).trim();
    const description = line.slice(dashIndex + 1).trim();

    return (
        <li>
            <strong>{name}</strong>
            {middle !== "" && <> {renderInlineMarkdown(middle)}</>}
            {" — "}
            {renderInlineMarkdown(description)}
            {subs.length > 0 && (
                <ul style={{ listStyle: "circle", paddingLeft: "1.25rem", marginTop: "0.25rem" }}>
                    {subs.map(sub => <li key={sub}>{renderInlineMarkdown(sub)}</li>)}
                </ul>
            )}
        </li>
    );
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
                    Items in each list are ordered by menu group (Components, Controls, …), alphabetically inside a group.
                    {" Descriptions are taken from the "}
                    <a
                        href="https://github.com/bodynar/bodynarf.react-components/blob/master/changelog.md"
                        target="_blank"
                        rel="noreferrer"
                    >
                        library changelog
                    </a>
                    {" shipped inside the npm package."}
                </p>
            </div>

            {entries.map((entry, index) => {
                const isOpen = openIndices.has(index);
                const official = sectionsForVersion(entry.version);
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

                        {isOpen && official.length > 0 ? (
                            <div className="mb-4">
                                <p className="is-size-7 has-text-weight-semibold has-text-grey mb-2">
                                    Library changelog
                                </p>
                                {official.map(block =>
                                    <div key={block.version} className="mb-3">
                                        {official.length > 1 && (
                                            <p className="is-size-7 has-text-grey mb-1">
                                                v{block.version}
                                            </p>
                                        )}
                                        {block.sections.map(section =>
                                            <div key={section.caption} className="mb-2">
                                                <p className="has-text-weight-semibold is-size-6 mb-1">
                                                    {section.caption}
                                                </p>
                                                <ul style={{ listStyle: "disc", paddingLeft: "1.5rem" }}>
                                                    {section.items.map(item =>
                                                        <ChangelogItem key={item.line} item={item} />
                                                    )}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        ) : null}

                        {isOpen && (entry.added.length > 0 || entry.updated.length > 0) ? (
                            <div>
                                <p className="is-size-7 has-text-weight-semibold has-text-grey mb-2">
                                    Demo pages
                                </p>

                                {entry.added.length > 0 ? (
                                    <div className="mb-3">
                                        <p className="has-text-weight-semibold mb-2 is-flex is-align-items-center" style={{ gap: "0.5rem" }}>
                                            <Tag
                                                content="NEW"
                                                style={ElementColor.Danger}
                                            />
                                            Added
                                        </p>
                                        <ul style={{ listStyle: "none", paddingLeft: "0.5rem" }}>
                                            {entry.added.map(item => (
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
                                ) : null}

                                {entry.updated.length > 0 ? (
                                    <div>
                                        <p className="has-text-weight-semibold mb-2 is-flex is-align-items-center" style={{ gap: "0.5rem" }}>
                                            <Tag
                                                content="UPD"
                                                style={ElementColor.Info}
                                            />
                                            Updated
                                        </p>
                                        <ul style={{ listStyle: "none", paddingLeft: "0.5rem" }}>
                                            {entry.updated.map(item => (
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
                                ) : null}
                            </div>
                        ) : null}
                    </div>
                );
            })}
        </>
    );
};

export default Changelog;
