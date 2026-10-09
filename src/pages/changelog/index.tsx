import { FC, ReactNode, useCallback, useMemo, useState } from "react";
import { Link } from "react-router";

import { ElementColor, Tag } from "@bodynarf/react.components";
import Icon from "@bodynarf/react.components/components/icon";
import changelogRaw from "@bodynarf/react.components/changelog.md?raw";

import routeList, { isRootMenuItem, RouteMenuItem } from "@app/pages/routing";

/** Library changelog on GitHub */
const CHANGELOG_URL = "https://github.com/bodynar/bodynarf.react-components/blob/master/changelog.md";

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

/** Split a changelog bullet line into bold name / marker / description parts (undefined when there is no em dash) */
const parseChangelogLine = (line: string): { name: string; middle: string; description: string } | undefined => {
    const nameMatch = line.match(/^\*\*([^*]+)\*\*/);
    const dashIndex = line.indexOf("—");

    if (dashIndex === -1 || nameMatch === null || nameMatch[0].length > dashIndex) {
        return undefined;
    }

    return {
        name: nameMatch[1],
        middle: line.slice(nameMatch[0].length, dashIndex).trim(),
        description: line.slice(dashIndex + 1).trim(),
    };
};

/** Single changelog bullet: `**Name** <any marker> — description`, optionally with nested sub-points */
const ChangelogItem: FC<{ item: ChangelogItemModel }> = ({ item }) => {
    const { line, subs } = item;
    const parsed = parseChangelogLine(line);

    return (
        <li>
            {parsed === undefined
                ? renderInlineMarkdown(line)
                : (
                    <>
                        <strong>{parsed.name}</strong>
                        {parsed.middle !== "" && <> {renderInlineMarkdown(parsed.middle)}</>}
                        {" — "}
                        {renderInlineMarkdown(parsed.description)}
                    </>
                )}
            {subs.length > 0 && (
                <ul style={{ listStyle: "circle", paddingLeft: "1.25rem", marginTop: "0.25rem" }}>
                    {subs.map(sub => <li key={sub}>{renderInlineMarkdown(sub)}</li>)}
                </ul>
            )}
        </li>
    );
};

/** Normalize a component name into a matching key: "Tag Group" / "TagGroup" → "taggroup" */
const normalizeKey = (value: string): string =>
    value.toLowerCase().replace(/[^a-z0-9]/g, "");

/**
 * Aggregate changelog bullets apply to many demo pages at once and cannot be matched by name —
 * map their normalized bullet name to the affected page keys and a short summary
 */
const aggregateBullets: Record<string, { pages: string[]; summary: string }> = {
    inputprimitives: {
        pages: ["text", "password", "multiline", "number", "autocomplete", "dateinput", "timepicker"],
        summary: "gained `addonLeft` / `addonRight` addons (text / icon / button)",
    },
    colorsunification: {
        pages: [
            "alert", "badge", "circularmeter", "emptystate", "notification", "otpinput",
            "progress", "segmentedcontrol", "spinner", "stat", "stepper", "taggroup",
            "timeline", "toast",
        ],
        summary: "`color` is deprecated — use `style` instead (removal in v1.18)",
    },
    borderbeam: {
        pages: ["animations"],
        summary: "added `.bbr-border-beam--*` CSS classes — animated border ring, 6 colors and 4 gradient presets",
    },
};

/** Bold name of a changelog bullet, empty string when the line does not start with one */
const bulletName = (line: string): string => {
    const nameMatch = line.match(/^\*\*([^*]+)\*\*/);
    return nameMatch !== null ? nameMatch[1] : "";
};

/** Changelog specifics for a demo page: descriptions of the version bullets mentioning it */
const specificsForItem = (demoVersion: string, caption: string): string[] => {
    const pageKey = normalizeKey(caption);
    const result: string[] = [];

    const push = (text: string): void => {
        if (text !== "" && !result.includes(text)) {
            result.push(text);
        }
    };

    for (const block of sectionsForVersion(demoVersion)) {
        for (const section of block.sections) {
            for (const item of section.items) {
                const name = bulletName(item.line);

                if (name === "") {
                    continue;
                }

                const nameParts = name.split("/").map(normalizeKey);
                const aggregate = aggregateBullets[normalizeKey(name)];

                if (nameParts.includes(pageKey)) {
                    const parsed = parseChangelogLine(item.line);
                    push(parsed !== undefined ? parsed.description : item.subs.join(" "));
                } else if (aggregate !== undefined && aggregate.pages.includes(pageKey)) {
                    push(aggregate.summary);
                }
            }
        }
    }

    return result;
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
                        href={CHANGELOG_URL}
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
                const removed = official.flatMap(block =>
                    block.sections
                        .filter(section => section.caption === "Removed")
                        .flatMap(section => section.items)
                );
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
                            {official.length > 0 && (
                                <a
                                    href={`${CHANGELOG_URL}#v${official[0].version.replace(/\./g, "")}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    title="Open this version in the library changelog on GitHub"
                                    onClick={e => e.stopPropagation()}
                                >
                                    <Icon name="box-arrow-up-right" />
                                </a>
                            )}
                        </h2>

                        {isOpen && (removed.length > 0 || entry.added.length > 0 || entry.updated.length > 0) ? (
                            <div>
                                {removed.length > 0 ? (
                                    <div className="mb-4">
                                        <p className="has-text-weight-semibold is-size-6 mb-2">
                                            Removed
                                        </p>
                                        <ul style={{ listStyle: "disc", paddingLeft: "1.5rem" }}>
                                            {removed.map(item =>
                                                <ChangelogItem key={item.line} item={item} />
                                            )}
                                        </ul>
                                    </div>
                                ) : null}

                                {entry.updated.length > 0 ? (
                                    <div className="mb-4">
                                        <p className="has-text-weight-semibold mb-2 is-flex is-align-items-center" style={{ gap: "0.5rem" }}>
                                            <Tag
                                                content="UPD"
                                                style={ElementColor.Info}
                                            />
                                            Updated
                                        </p>
                                        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                                            {entry.updated.map(item => (
                                                <li key={item.path} className="mb-2 is-flex is-align-items-flex-start" style={{ gap: "0.4rem" }}>
                                                    <span className="has-text-grey is-size-7" style={{ minWidth: "6rem" }}>
                                                        {entry.groupLabel(item)}
                                                    </span>
                                                    <div>
                                                        <Link to={item.path} className="has-text-link">
                                                            {item.caption}
                                                        </Link>
                                                        {specificsForItem(entry.version, item.caption).map(specific =>
                                                            <p key={specific} className="is-size-7 has-text-grey mb-0">
                                                                {renderInlineMarkdown(specific)}
                                                            </p>
                                                        )}
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : null}

                                {entry.added.length > 0 ? (
                                    <div>
                                        <p className="has-text-weight-semibold mb-2 is-flex is-align-items-center" style={{ gap: "0.5rem" }}>
                                            <Tag
                                                content="ADD"
                                                style={ElementColor.Danger}
                                            />
                                            Added
                                        </p>
                                        <ul style={{ listStyle: "none", paddingLeft: 0 }}>
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
                            </div>
                        ) : null}
                    </div>
                );
            })}
        </>
    );
};

export default Changelog;
