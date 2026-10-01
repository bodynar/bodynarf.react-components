import { CSSProperties, FC } from "react";

import { getClassName } from "@bodynarf/utils";
import { mapDataAttributes } from "@bbr/utils";

import { StackProps } from "..";

/** Flexbox container that lays out its children in a row or column with a configurable gap */
const Stack: FC<StackProps> = ({
    children,
    direction = "column",
    gap = "8px",
    align, justify, wrap,

    className, title, data,
}) => {
    const elClassName = getClassName([
        "bbr-stack",
        `bbr-stack--${direction}`,
        className,
    ]);

    const elStyle: CSSProperties = {
        display: "flex",
        flexDirection: direction,
        gap: typeof gap === "number" ? `${gap}px` : gap,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap,
    };

    return (
        <div
            {...mapDataAttributes(data)}

            title={title}
            style={elStyle}
            className={elClassName}
        >
            {children}
        </div>
    );
};

/** Horizontal stack — `Stack` with `direction="row"` */
export const HStack: FC<Omit<StackProps, "direction">> = (props) => (
    <Stack
        {...props}

        direction="row"
    />
);

/** Vertical stack — `Stack` with `direction="column"` */
export const VStack: FC<Omit<StackProps, "direction">> = (props) => (
    <Stack
        {...props}

        direction="column"
    />
);

export default Stack;
