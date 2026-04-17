import { Children, FC, ReactNode, isValidElement, useCallback, useEffect, useMemo, useState } from "react";

import { getClassName, isNotNullish, isNotNullOrEmpty } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { getSizeClassName, mapDataAttributes } from "@bbr/utils";
import Button from "@bbr/components/button";
import Icon from "@bbr/components/icon";

import "./style.scss";

import { ModalWrapperProps } from "..";
import ModalWrapperBody from "../components/body";
import ModalWrapperFooter from "../components/footer";
import ModalWrapperHeader from "../components/header";
import { ModalWrapperContext } from "./context";

const emptyActions: ModalWrapperProps["actions"] = [];

/** Modal window wrapper component */
const ModalWrapper: FC<ModalWrapperProps> = ({
    children,
    actions = emptyActions,
    onCloseClick,
    title,
    size = ElementSize.Normal,
    showCloseButton = true,
    showMaximizeButton = false,
    closeOnBackgroundClick = true,
    closeOnEscape = true,
    onEnterPress,

    className, data,
}) => {
    const [isMaximized, setIsMaximized] = useState(false);

    const contextValue = useMemo(() => ({ onClose: onCloseClick }), [onCloseClick]);

    const onBackgroundClick = useCallback(() => {
        if (closeOnBackgroundClick) {
            onCloseClick();
        }
    }, [closeOnBackgroundClick, onCloseClick]);

    const toggleMaximize = useCallback(() => {
        setIsMaximized(prev => !prev);
    }, []);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape" && closeOnEscape) {
                onCloseClick();
            } else if (event.key === "Enter" && isNotNullish(onEnterPress)) {
                onEnterPress();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [closeOnEscape, onCloseClick, onEnterPress]);

    // Scan children for compound sub-components
    let slotHeader: ReactNode = null;
    let slotBody: ReactNode = null;
    let slotFooter: ReactNode = null;

    Children.forEach(children, child => {
        if (!isValidElement(child)) { return; }
        if (child.type === ModalWrapperHeader) { slotHeader = child; }
        else if (child.type === ModalWrapperBody) { slotBody = child; }
        else if (child.type === ModalWrapperFooter) { slotFooter = child; }
    });

    const isCompound = slotBody !== null;

    const elClassName = getClassName([
        "bbr-modal",
        "modal",
        "is-active",
        getSizeClassName(size),
        isMaximized ? "bbr-modal--maximized" : undefined,
        className,
    ]);

    const dataAttributes = mapDataAttributes(data);

    const hasLegacyTitle = isNotNullOrEmpty(title);
    const hasLegacyActions = actions.length > 0;
    const hasLegacyHeader = hasLegacyTitle || showCloseButton || showMaximizeButton;

    const headerButtons = (
        <>
            {!!showMaximizeButton && (
                <Icon
                    onClick={toggleMaximize}
                    className="bbr-modal__maximize"
                    title={isMaximized ? "Restore" : "Maximize"}
                    name={isMaximized ? "arrows-angle-contract" : "arrows-angle-expand"}
                />
            )}
            {!!showCloseButton && (
                <button
                    type="button"
                    aria-label="close"
                    className="delete"
                    onClick={onCloseClick}
                />
            )}
        </>
    );

    return (
        <ModalWrapperContext.Provider value={contextValue}>
            <div
                {...dataAttributes}

                className={elClassName}
            >
                <div
                    onClick={onBackgroundClick}
                    className="modal-background"
                />
                <div className="modal-card">
                    {isCompound
                        ? (
                            <>
                                {slotHeader}
                                {slotBody}
                                {slotFooter}
                            </>
                        )
                        : (
                            <>
                                {!!hasLegacyHeader && (
                                    <header className="modal-card-head">
                                        {!!hasLegacyTitle && (
                                            <p className="modal-card-title">
                                                {title}
                                            </p>
                                        )}
                                        {headerButtons}
                                    </header>
                                )}
                                <section className="modal-card-body">
                                    {children}
                                </section>
                                {!!hasLegacyActions && (
                                    <footer className="modal-card-foot">
                                        {actions.map((buttonProps) => (
                                            <Button
                                                key={buttonProps.caption ?? buttonProps.icon?.className}

                                                {...buttonProps}
                                            />
                                        ))}
                                    </footer>
                                )}
                            </>
                        )
                    }
                </div>
            </div>
        </ModalWrapperContext.Provider>
    );
};

export default ModalWrapper;
