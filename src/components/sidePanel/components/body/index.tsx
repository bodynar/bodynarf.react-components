import { FC } from "react";

import { getClassName } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";

import { SidePanelBodyProps } from "../..";

/** SidePanel scrollable body */
const SidePanelBody: FC<SidePanelBodyProps> = ({
    children,
    className, title, data,
}) => {
    const elClassName = getClassName([
        "bbr-side-panel__body",
        className,
    ]);

    const dataAttributes = mapDataAttributes(data);

    return (
        <div
            {...dataAttributes}

            title={title}
            className={elClassName}
        >
            {children}
        </div>
    );
};

export default SidePanelBody;
