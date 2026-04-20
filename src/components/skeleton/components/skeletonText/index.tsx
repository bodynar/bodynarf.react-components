import { FC } from "react";

import { getClassName } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";

import { SkeletonTextProps } from "../..";

/** One or more text-line skeleton placeholders */
const SkeletonText: FC<SkeletonTextProps> = ({
    lines = 1,
    lastLineWidth = "70%",

    className, title, data,
}) => {
    const dataAttributes = mapDataAttributes(data);

    const elClassName = getClassName([
        "bbr-skeleton__text",
        className,
    ]);

    if (lines <= 1) {
        return (
            <div
                {...dataAttributes}

                title={title}
                className={elClassName}
            />
        );
    }

    return (
        <div
            {...dataAttributes}

            title={title}
            className={getClassName(["bbr-skeleton__text-group", className])}
        >
            {Array.from({ length: lines - 1 }).map((_, i) => (
                <div
                    key={i} // eslint-disable-line react/no-array-index-key

                    className="bbr-skeleton__text"
                />
            ))}
            <div
                className="bbr-skeleton__text"
                style={{ width: lastLineWidth }}
            />
        </div>
    );
};

export default SkeletonText;
