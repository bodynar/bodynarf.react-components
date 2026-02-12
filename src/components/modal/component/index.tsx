import { FC, useCallback, useEffect } from "react";

import { getClassName, isNotNullish, isNotNullOrEmpty } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { getSizeClassName, mapDataAttributes } from "@bbr/utils";
import Button from "@bbr/components/button";

import "./style.scss";

import { ModalWrapperProps } from "..";

/** Modal window wrapper component */
const ModalWrapper: FC<ModalWrapperProps> = ({
    children,
    actions,
    onCloseClick,
    title,
    size = ElementSize.Normal,
    showCloseButton = true,
    closeOnBackgroundClick = true,
    closeOnEscape = true,
    onEnterPress,

    className, data,
}) => {
    const onBackgroundClick = useCallback(() => {
        if (closeOnBackgroundClick) {
            onCloseClick();
        }
    }, [closeOnBackgroundClick, onCloseClick]);

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

    const elClassName = getClassName([
        "bbr-modal",
        "modal",
        "is-active",
        getSizeClassName(size),
        className,
    ]);

    const dataAttributes = mapDataAttributes(data);

    const hasTitle = isNotNullOrEmpty(title);
    const hasHeader = hasTitle || showCloseButton;
    const hasActions = actions.length > 0;

    return (
        <div
            {...dataAttributes}
            className={elClassName}
        >
            <div
                onClick={onBackgroundClick}
                className="modal-background"
            />
            <div className="modal-card">
                {!!hasHeader && (
                    <header className="modal-card-head">
                        {!!hasTitle && (
                            <p className="modal-card-title">
                                {title}
                            </p>
                        )}
                        {!!showCloseButton && (
                            <button
                                type="button"
                                className="delete"
                                aria-label="close"
                                onClick={onCloseClick}
                            />
                        )}
                    </header>
                )}
                <section className="modal-card-body">
                    {children}
                </section>
                {!!hasActions && (
                    <footer className="modal-card-foot">
                        {actions.map((buttonProps) => (
                            <Button
                                key={buttonProps.caption ?? buttonProps.icon?.className}

                                {...buttonProps}
                            />
                        ))}
                    </footer>
                )}
            </div>
        </div>
    );
};

export default ModalWrapper;
