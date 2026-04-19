import { FC, useEffect } from "react";

import { getClassName, isNotNullish } from "@bodynarf/utils";

import { ElementColor } from "@bbr/types";
import { mapDataAttributes } from "@bbr/utils";
import Button, { ButtonStyle } from "@bbr/components/button";
import Icon from "@bbr/components/icon";

import "./style.scss";

import { ConfirmDialogProps } from "..";

/** Confirmation dialog — a focused modal asking the user to confirm or cancel an action */
const ConfirmDialog: FC<ConfirmDialogProps> = ({
    visible,
    title = "Are you sure?",
    message,
    confirmLabel = "Confirm",
    cancelLabel = "Cancel",
    confirmColor = ElementColor.Danger,
    isLoading = false,
    icon = "exclamation-triangle",
    cancellable = false,
    onConfirm,
    onCancel,

    className, title: elTitle, data,
}) => {
    useEffect(() => {
        if (!visible || cancellable) {
            return undefined;
        }

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onCancel();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [visible, cancellable, onCancel]);

    if (!visible) {
        return null;
    }

    const dataAttributes = mapDataAttributes(data);
    const confirmButtonStyle = colorToButtonStyle(confirmColor);

    const modalClassName = getClassName([
        "bbr-confirm-dialog",
        "modal",
        "is-active",
        className,
    ]);

    return (
        <div
            {...dataAttributes}

            title={elTitle}
            className={modalClassName}
        >
            <div
                className="modal-background"
                onClick={cancellable ? undefined : onCancel}
            />
            <div className="modal-card bbr-confirm-dialog__card">
                <header className="modal-card-head bbr-confirm-dialog__head">
                    <Icon
                        name={icon}
                        className="bbr-confirm-dialog__icon"
                    />
                    <p className="modal-card-title">
                        {title}
                    </p>
                </header>

                {isNotNullish(message) && (
                    <section className="modal-card-body bbr-confirm-dialog__body">
                        {typeof message === "string"
                            ? (
                                <p>
                                    {message}
                                </p>
                            ) : message
                        }
                    </section>
                )}

                <footer className="modal-card-foot bbr-confirm-dialog__foot">
                    <Button
                        onClick={onCancel}
                        disabled={isLoading}
                        caption={cancelLabel}
                        style={ButtonStyle.Light}
                    />

                    <Button
                        onClick={onConfirm}
                        disabled={isLoading}
                        isLoading={isLoading}
                        caption={confirmLabel}
                        style={confirmButtonStyle}
                    />
                </footer>
            </div>
        </div>
    );
};

/** Map from ElementColor to the corresponding ButtonStyle */
const elementColorToButtonStyle = new Map<ElementColor, ButtonStyle>([
    [ElementColor.Default, ButtonStyle.Default],
    [ElementColor.Primary, ButtonStyle.Primary],
    [ElementColor.Link, ButtonStyle.Link],
    [ElementColor.Info, ButtonStyle.Info],
    [ElementColor.Success, ButtonStyle.Success],
    [ElementColor.Warning, ButtonStyle.Warning],
    [ElementColor.Danger, ButtonStyle.Danger],
]);

/** Map ElementColor to ButtonStyle */
function colorToButtonStyle(color: ElementColor): ButtonStyle {
    return elementColorToButtonStyle.get(color) ?? ButtonStyle.Default;
}

export default ConfirmDialog;
