/* eslint-disable react/prop-types */
import { Children, FC, ReactNode, isValidElement, useCallback, useId, useState } from "react";

import { getClassName, isNotNullish } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";
import { useComponentOutsideClick } from "@bbr/hooks";

import "./style.scss";

import { PopoverPosition, PopoverProps } from "..";
import { PopoverContent, PopoverTrigger } from "../components";

/** Popover — click-triggered floating panel with arbitrary content */
// eslint-disable-next-line custom/functional-component-definition
const Popover: FC<PopoverProps> & {
    Trigger: typeof PopoverTrigger;
    Content: typeof PopoverContent;
} = ({
    children,
    position = PopoverPosition.Bottom,
    visible: controlledVisible,
    onToggle,

    className, title, data,
}) => {
        const isControlled = isNotNullish(controlledVisible);
        const [internalVisible, setInternalVisible] = useState(false);
        const id = useId();

        const toggle = useCallback(() => {
            const next = !(isControlled ? controlledVisible! : internalVisible);

            if (!isControlled) {
                setInternalVisible(next);
            }

            onToggle?.(next);
        }, [isControlled, controlledVisible, internalVisible, onToggle]);

        const close = useCallback(() => {
            if (!isControlled) {
                setInternalVisible(false);
            }

            onToggle?.(false);
        }, [isControlled, onToggle]);

        useComponentOutsideClick(`#popover-${id.replace(/:/g, "")}`, isControlled ? controlledVisible! : internalVisible, close, true);

        const visible = isControlled ? controlledVisible! : internalVisible;
        const wrapperId = `popover-${id.replace(/:/g, "")}`;

        // Scan children for sub-components
        let triggerSlot: ReactNode = null;
        let contentSlot: ReactNode = null;

        Children.forEach(children, child => {
            if (!isValidElement(child)) {
                return;
            }

            if (child.type === PopoverTrigger) {
                triggerSlot = child;
            }

            else if (child.type === PopoverContent) {
                contentSlot = child;
            }
        });

        const dataAttributes = mapDataAttributes(data);

        const wrapperClassName = getClassName([
            "bbr-popover",
            `bbr-popover--${position}`,
            visible ? "is-active" : "",
            className,
        ]);

        return (
            <div
                {...dataAttributes}

                title={title}
                id={wrapperId}
                className={wrapperClassName}
            >
                <div
                    onClick={toggle}
                    className="bbr-popover__trigger"
                >
                    {triggerSlot}
                </div>
                {visible ? (
                    <div className="bbr-popover__panel">
                        <div className="bbr-popover__arrow" />
                        {contentSlot}
                    </div>
                ) : null}
            </div>
        );
    };

Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;

export default Popover;
