import { FC, ReactNode, useCallback } from "react";

import { getClassName } from "@bodynarf/utils";

import styles from "./styles.module.scss";

/** Available title sizes */
type TitleSize =
    | "is-1"
    | "is-2"
    | "is-3"
    | "is-4"
    | "is-5"
    | "is-6";

/** Map size to element builder */
const titleSizeToElementMap = new Map<TitleSize, (caption: string) => ReactNode>([
    ["is-1", caption => <h1>{caption}</h1>],
    ["is-2", caption => <h2>{caption}</h2>],
    ["is-3", caption => <h3>{caption}</h3>],
    ["is-4", caption => <h4>{caption}</h4>],
    ["is-5", caption => <h5>{caption}</h5>],
    ["is-6", caption => <h6>{caption}</h6>],
]);

/* Props type of `TitleWithLink` */
type TitleWithLinkProps = {
    /** */
    caption: string;

    /** Size */
    size: TitleSize;

    /** Title style */
    style: "title" | "subtitle";

    /** Unique block (across page) identifier */
    identifier: string;
};

/* Title element with link */
const TitleWithLink: FC<TitleWithLinkProps> = ({
    caption, identifier,
    size, style,
}) => {
    const onLinkClick = useCallback(
        () => navigator.clipboard.writeText(`${window.location.origin}${window.location.pathname}#${identifier}`),
        []
    );

    const className = getClassName([
        style,
        size,
        "is-block",
        styles["title-with-link"]
    ]);

    return (
        <a
            className={className}
            onClick={onLinkClick}
        >
            {titleSizeToElementMap.get(size)!(caption)}
        </a>
    );
};

export default TitleWithLink;
