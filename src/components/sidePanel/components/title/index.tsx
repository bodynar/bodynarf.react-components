import { FC } from "react";

import { getClassName } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";

import { SidePanelTitleProps } from "../..";
import { useSidePanelContext } from "../../component/context";

/** SidePanel header with optional close button */
const SidePanelTitle: FC<SidePanelTitleProps> = ({
    children,
    showCloseButton = true,
    closeLabel = "Close panel",
    className, title, data,
}) => {
    const { onClose } = useSidePanelContext();

    const elClassName = getClassName([
        "bbr-side-panel__title",
        className,
    ]);

    const dataAttributes = mapDataAttributes(data);

    return (
        <div
            {...dataAttributes}

            title={title}
            className={elClassName}
        >
            <span className="bbr-side-panel__title-text">
                {children}
            </span>
            {!!showCloseButton && (
                <button
                    type="button"
                    onClick={onClose}
                    aria-label={closeLabel}
                    className="bbr-side-panel__close delete"
                />
            )}
        </div>
    );
};

export default SidePanelTitle;
