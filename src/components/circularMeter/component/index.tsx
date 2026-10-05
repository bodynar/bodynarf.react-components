import {
    CSSProperties,
    FC,
    KeyboardEvent,
    PointerEvent,
    useCallback,
    useMemo,
    useRef,
} from "react";

import { getClassName, isNotNullish, isNullish } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { getElementColorClassName, getSizeClassName, mapDataAttributes } from "@bbr/utils";

import "./style.scss";

import { CircularMeterProps } from "..";

/** SVG center coordinate (viewBox is 0 0 100 100). */
const CENTER = 50;

/** Arc radius (leaves room for the stroke width). */
const RADIUS = 45;

/** Arc circumference (2πr). */
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/** Default stroke width in viewBox units. */
const DEFAULT_STROKE_WIDTH = 8;

/** Clamp `value` into the `[min, max]` range. */
const clamp = (value: number, min: number, max: number): number =>
    Math.min(max, Math.max(min, value));

/** Format the value using a `{value}` template. */
const formatValue = (value: number, template?: string): string =>
    (template ?? "{value}").replace("{value}", Math.round(value).toString());

/** CircularMeter — SVG progress ring with an optional interactive mode. */
const CircularMeter: FC<CircularMeterProps> = ({
    value,
    min = 0,
    max = 100,
    step = 1,
    size = ElementSize.Normal,
    color,
    trackColor,
    strokeWidth = DEFAULT_STROKE_WIDTH,
    label,
    valueTemplate,
    readonly = true,
    onChange,

    className, title, data,
}) => {
    const svgRef = useRef<SVGSVGElement>(null);
    const draggingRef = useRef(false);

    const pct = useMemo(() => {
        const range = max - min;

        return range > 0 ? clamp((value - min) / range, 0, 1) : 0;
    }, [value, min, max]);

    const updateFromPointer = useCallback((event: PointerEvent<SVGSVGElement>) => {
        const svg = svgRef.current;

        if (isNullish(svg) || isNullish(onChange)) {
            return;
        }

        const rect = svg.getBoundingClientRect();
        const dx = event.clientX - (rect.left + rect.width / 2);
        const dy = event.clientY - (rect.top + rect.height / 2);

        // Angle measured clockwise from 12 o'clock (top): atan2(dx, -dy)
        let angle = Math.atan2(dx, -dy) * 180 / Math.PI;

        if (angle < 0) {
            angle += 360;
        }

        const ratio = angle / 360;
        const range = max - min;
        const snapped = Math.round((min + ratio * range) / step) * step;

        onChange(clamp(snapped, min, max));
    }, [onChange, min, max, step]);

    const onPointerDown = useCallback((event: PointerEvent<SVGSVGElement>) => {
        if (readonly || isNullish(onChange)) {
            return;
        }

        draggingRef.current = true;
        event.currentTarget.setPointerCapture(event.pointerId);
        updateFromPointer(event);
    }, [readonly, onChange, updateFromPointer]);

    const onPointerMove = useCallback((event: PointerEvent<SVGSVGElement>) => {
        if (!draggingRef.current) {
            return;
        }

        updateFromPointer(event);
    }, [updateFromPointer]);

    const stopDrag = useCallback(() => {
        draggingRef.current = false;
    }, []);

    const onKeyDown = useCallback((event: KeyboardEvent<SVGSVGElement>) => {
        if (readonly || isNullish(onChange)) {
            return;
        }

        let next = value;

        if (event.key === "ArrowUp" || event.key === "ArrowRight") {
            next = value + step;
        } else if (event.key === "ArrowDown" || event.key === "ArrowLeft") {
            next = value - step;
        } else {
            return;
        }

        event.preventDefault();
        onChange(clamp(next, min, max));
    }, [readonly, onChange, value, step, min, max]);

    const interactive = !readonly && isNotNullish(onChange);

    const containerClassName = getClassName([
        "bbr-circular-meter",
        getSizeClassName(size, ElementSize.Normal),
        getElementColorClassName(color),
        interactive ? "is-editable" : "",
        className,
    ]);

    const dataAttributes = mapDataAttributes(data);
    const trackStyle: CSSProperties | undefined = isNotNullish(trackColor) ? { stroke: trackColor } : undefined;
    const dashOffset = CIRCUMFERENCE * (1 - pct);

    return (
        <svg
            
          {...dataAttributes}

          ref={svgRef}
          role="slider"
          aria-valuemin={min}
          aria-valuemax={max}
          viewBox="0 0 100 100"
          aria-valuenow={value}
          onKeyDown={onKeyDown}
          onPointerUp={stopDrag}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          className={containerClassName}
          tabIndex={interactive ? 0 : undefined}

        >
            {title ? <title>
{title}
                     </title> : null}
            <circle
                
              r={RADIUS}
              cx={CENTER}
              cy={CENTER}
              fill="none"
              style={trackStyle}
              strokeWidth={strokeWidth}
              className="bbr-circular-meter__track"
            
            />
            <circle
                
              r={RADIUS}
              cx={CENTER}
              cy={CENTER}
              fill="none"
              strokeLinecap="round"
              strokeWidth={strokeWidth}
              strokeDashoffset={dashOffset}
              strokeDasharray={CIRCUMFERENCE}
              className="bbr-circular-meter__arc"
              transform={`rotate(-90 ${CENTER} ${CENTER})`}
            
            />
            <text
                x={CENTER}
                y={CENTER}
                textAnchor="middle"
                dominantBaseline="central"
                className="bbr-circular-meter__value"
            >
                {formatValue(value, valueTemplate)}
            </text>
            {label
                ? <text
                    x={CENTER}
                    y={CENTER + 16}
                    textAnchor="middle"
                    dominantBaseline="central"
                    className="bbr-circular-meter__label"
                  >
                    {label}
                  </text>
                : null
            }
        </svg>
    );
};

export default CircularMeter;
