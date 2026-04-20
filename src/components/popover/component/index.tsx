/* eslint-disable react/prop-types */
import { Children, FC, ReactNode, isValidElement, useCallback, useId, useState } from "react";

import { getClassName, isNotNullish } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";
import { useEventListener } from "@bbr/hooks";

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
    const visible = isControlled ? controlledVisible! : internalVisible;

    const id = useId();
    const wrapperId = `popover-${id.replace(/:/g, "")}`;

    const toggle = useCallback(() => {
        const next = !visible;

        if (!isControlled) {
            setInternalVisible(next);
        }

        onToggle?.(next);
    }, [visible, isControlled, onToggle]);

    const close = useCallback(() => {
        if (!isControlled) {
            setInternalVisible(false);
        }

        onToggle?.(false);
    }, [isControlled, onToggle]);

    const onDocumentClick = useCallback((event: MouseEvent) => {
        if (!visible) {
            return;
        }

        const target = event.target as HTMLElement;

        if (target.closest(`#${wrapperId}`) === null) {
            close();
        }
    }, [visible, wrapperId, close]);

    useEventListener("click", onDocumentClick, document);

    // Scan children for sub-components
    let triggerSlot: ReactNode = null;
    let contentSlot: ReactNode = null;

    Children.forEach(children, child => {
        if (!isValidElement(child)) { return; }
        if (child.type === PopoverTrigger) { triggerSlot = child; }
        else if (child.type === PopoverContent) { contentSlot = child; }
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
            {visible ? <div className="bbr-popover__panel">
                    <div className="bbr-popover__arrow" />
                    {contentSlot}
                       </div> : null}
        </div>
    );
};

Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;

export default Popover;
