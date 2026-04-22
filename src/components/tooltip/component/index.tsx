import { Children, FC, ReactNode, isValidElement, useCallback, useEffect, useId, useRef, useState } from "react";

import { getClassName, isNotNullish } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";
import { useComponentOutsideClick, useTimeout } from "@bbr/hooks";

import "./style.scss";

import { TooltipAnimation, TooltipCloseOn, TooltipHintProps, TooltipPosition, TooltipProps, TooltipTargetProps } from "..";
import TooltipContent from "../components/content";
import TooltipHint from "../components/hint";
import TooltipTarget from "../components/target";

/** Tooltip component */
const Tooltip: FC<TooltipProps> = ({
    children,
    position = TooltipPosition.Top,
    animation = TooltipAnimation.Fade,
    closeOn = TooltipCloseOn.MouseLeave,
    openDelay = 0,
    lifetime,
    visible: controlledVisible,

    className, title, data,
}) => {
    const isControlled = isNotNullish(controlledVisible);

    const [internalVisible, setInternalVisible] = useState(false);

    const openTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const hideDelayRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const id = useId();

    const hide = useCallback(() => {
        if (openTimerRef.current !== null) {
            clearTimeout(openTimerRef.current);
            openTimerRef.current = null;
        }

        if (hideDelayRef.current !== null) {
            clearTimeout(hideDelayRef.current);
            hideDelayRef.current = null;
        }

        setInternalVisible(false);
    }, []);

    const scheduleHide = useCallback(() => {
        if (isControlled) {
            return;
        }

        if (hideDelayRef.current !== null) {
            clearTimeout(hideDelayRef.current);
        }

        hideDelayRef.current = setTimeout(() => {
            hideDelayRef.current = null;

            if (openTimerRef.current !== null) {
                clearTimeout(openTimerRef.current);
                openTimerRef.current = null;
            }

            setInternalVisible(false);
        }, 80);
    }, [isControlled]);

    const show = useCallback(() => {
        if (isControlled) {
            return;
        }

        if (hideDelayRef.current !== null) {
            clearTimeout(hideDelayRef.current);
            hideDelayRef.current = null;
        }

        if (openDelay > 0) {
            openTimerRef.current = setTimeout(() => setInternalVisible(true), openDelay);
        } else {
            setInternalVisible(true);
        }
    }, [isControlled, openDelay]);

    useComponentOutsideClick(
        `#tooltip-${id.replace(/:/g, "")}`,
        (isControlled ? controlledVisible! : internalVisible) && closeOn === TooltipCloseOn.OutsideClick,
        hide,
        true,
    );

    useEffect(() => {
        return () => {
            if (openTimerRef.current !== null) {
                clearTimeout(openTimerRef.current);
            }

            if (hideDelayRef.current !== null) {
                clearTimeout(hideDelayRef.current);
            }
        };
    }, []);

    useTimeout(hide, (isControlled ? controlledVisible! : internalVisible) && isNotNullish(lifetime) ? lifetime! : null);

    const visible = isControlled ? controlledVisible! : internalVisible;
    const triggerId = `tooltip-${id.replace(/:/g, "")}`;

    const wrapperClassName = getClassName([
        "bbr-tooltip",
        className,
    ]);

    const dataAttributes = mapDataAttributes(data);

    let hintContent: ReactNode = null;
    let targetContent: ReactNode = null;

    Children.forEach(children, child => {
        if (!isValidElement(child)) {
            return;
        }

        if (child.type === TooltipHint) {
            hintContent = (child.props as TooltipHintProps).children;
        } else if (child.type === TooltipTarget) {
            targetContent = (child.props as TooltipTargetProps).children;
        }
    });

    return (
        <div
            {...dataAttributes}

            title={title}
            id={triggerId}
            className={wrapperClassName}
            onMouseEnter={!isControlled ? show : undefined}
            onClick={!isControlled && closeOn === TooltipCloseOn.OutsideClick ? show : undefined}
            onMouseLeave={!isControlled && closeOn === TooltipCloseOn.MouseLeave ? scheduleHide : undefined}
        >
            <TooltipContent
                visible={visible}
                position={position}
                animation={animation}
            >
                {hintContent}
            </TooltipContent>
            {targetContent}
        </div>
    );
};

export default Tooltip;

