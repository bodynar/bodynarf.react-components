import { FC, useCallback, useMemo } from "react";

import { getClassName } from "@bodynarf/utils";

import { ElementPosition } from "@bbr/types";
import { mapDataAttributes } from "@bbr/utils";
import { useEventListener } from "@bbr/hooks";

import "./style.scss";

import { SidePanelProps } from "..";
import { SidePanelContext } from "./context";

/** Sliding side panel with Title and Body sub-components */
const SidePanel: FC<SidePanelProps> = ({
    children,
    isOpen,
    onClose,
    position = ElementPosition.Left,
    size,
    customWidth,
    closeOnOverlayClick = true,
    className, title, data,
}) => {
    const contextValue = useMemo(() => ({ onClose }), [onClose]);

    const onOverlayClick = useCallback(() => {
        if (closeOnOverlayClick) {
            onClose();
        }
    }, [closeOnOverlayClick, onClose]);

    const onKeyDown = useCallback((event: KeyboardEvent) => {
        if (isOpen && event.key === "Escape") {
            onClose();
        }
    }, [isOpen, onClose]);

    useEventListener("keydown", onKeyDown);

    const overlayClassName = getClassName([
        "bbr-side-panel__overlay",
        isOpen ? "bbr-side-panel__overlay--open" : undefined,
    ]);

    const panelClassName = getClassName([
        "bbr-side-panel",
        `bbr-side-panel--${position}`,
        isOpen ? "bbr-side-panel--open" : undefined,
        className,
    ]);

    const dataAttributes = mapDataAttributes(data);

    const resolvedWidth = customWidth ?? size;
    const panelStyle = resolvedWidth !== undefined
        ? { width: `${resolvedWidth}vw`, maxWidth: "none" }
        : undefined;

    return (
        <SidePanelContext.Provider value={contextValue}>
            <div
                aria-hidden={!isOpen}
                onClick={onOverlayClick}
                className={overlayClassName}
            />
            <aside
                {...dataAttributes}

                role="dialog"
                title={title}
                aria-modal="true"
                style={panelStyle}
                aria-hidden={!isOpen}
                className={panelClassName}
            >
                {children}
            </aside>
        </SidePanelContext.Provider>
    );
};

export default SidePanel;
