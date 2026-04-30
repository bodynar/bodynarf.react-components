import { FC, useCallback, useState } from "react";

import { getClassName, isNotNullish, Optional } from "@bodynarf/utils";

import { ElementColor } from "@bbr/types";
import { getSizeClassName, mapDataAttributes } from "@bbr/utils";
import Calendar from "@bbr/components/calendar";
import Popover from "@bbr/components/popover";

import "./style.scss";

import { DateRangePickerProps } from "..";

/** Single-calendar date range picker.
 *  First click sets the start, second click confirms the end.
 *  While choosing the end the hover position is shown as a live preview band. */
const DateRangePicker: FC<DateRangePickerProps> = ({
    value,
    onChange,
    style = ElementColor.Primary,
    size,
    minDate,
    maxDate,
    locale = "en-US",
    labelConfig,
    asPopover = true,

    className, title, data,
}) => {
    const [draft, setDraft] = useState<Optional<Date>>();
    const [hoverDate, setHoverDate] = useState<Optional<Date>>();

    const handleDayClick = useCallback((clicked: Optional<Date>) => {
        if (!clicked) {
            setDraft(undefined);
            setHoverDate(undefined);
            onChange?.({ start: undefined, end: undefined });

            return;
        }

        if (!isNotNullish(draft)) {
            // First click — anchor the start
            setDraft(clicked);
            onChange?.({ start: clicked, end: undefined });
        } else {
            // Second click — finalise the range (min/max order)
            const start = draft <= clicked ? draft : clicked;
            const end = draft <= clicked ? clicked : draft;
            setDraft(undefined);
            setHoverDate(undefined);
            onChange?.({ start, end });
        }
    }, [draft, onChange]);

    const handleDayHover = useCallback((d: Date | undefined) => {
        if (isNotNullish(draft)) {
            setHoverDate(d);
        }
    }, [draft]);

    const handleClear = useCallback(() => {
        setDraft(undefined);
        setHoverDate(undefined);
        onChange?.({ start: undefined, end: undefined });
    }, [onChange]);

    const selectedStart = value?.start;
    const selectedEnd = value?.end;

    // Props forwarded to Calendar for range display
    const calRangeStart = draft ?? selectedStart;
    const calRangeEnd = draft ? undefined : selectedEnd;
    const calHoverDate = isNotNullish(draft) ? hoverDate : undefined;
    // Pass a value only for initial-month positioning; circle rendering uses range props
    const calValue = draft ?? selectedStart ?? selectedEnd;

    const dataAttributes = mapDataAttributes(data);

    const elClassName = getClassName([
        "bbr-date-range-picker",
        className,
    ]);

    const labelClassName = getClassName([
        "bbr-date-range-picker__label",
        getSizeClassName(size),
    ]);

    const labelContent = (
        <>
            <span className="bbr-date-range-picker__label-text">
                {formatLabel(selectedStart, selectedEnd, draft, locale, labelConfig)}
            </span>
            {(isNotNullish(selectedStart) || isNotNullish(draft)) && (
                <button
                    type="button"
                    onClick={handleClear}
                    className="delete is-small"
                    aria-label={labelConfig?.clearAriaLabel ?? "Clear range"}
                />
            )}
        </>
    );

    const calendar = (
        <Calendar
            value={calValue}

            size={size}
            style={style}
            locale={locale}
            minDate={minDate}
            maxDate={maxDate}
            rangeEnd={calRangeEnd}
            hoverDate={calHoverDate}
            onChange={handleDayClick}
            rangeStart={calRangeStart}
            onDayHover={handleDayHover}
        />
    );

    return (
        <div
            {...dataAttributes}

            title={title}
            className={elClassName}
        >
            {asPopover
                ? (
                    <Popover>
                        <Popover.Trigger>
                            <div className={labelClassName}>
                                {labelContent}
                            </div>
                        </Popover.Trigger>
                        <Popover.Content>
                            {calendar}
                        </Popover.Content>
                    </Popover>
                )
                : (
                    <>
                        <div className={labelClassName}>
                            {labelContent}
                        </div>
                        {calendar}
                    </>
                )
            }
        </div>
    );
};

function formatLabel(
    start: Optional<Date>,
    end: Optional<Date>,
    draft: Optional<Date>,
    locale: string,
    cfg: DateRangePickerProps["labelConfig"],
): string {
    const placeholder = cfg?.placeholder ?? "Select range";
    const separator = cfg?.separator ?? " → ";
    const pending = cfg?.pendingSuffix ?? "…";

    const fmt = (d: Date) => d.toLocaleDateString(locale);

    if (isNotNullish(draft)) {
        return `${fmt(draft)}${separator}${pending}`;
    }

    if (isNotNullish(start) && isNotNullish(end)) {
        return `${fmt(start)}${separator}${fmt(end)}`;
    }

    if (isNotNullish(start)) {
        return `${fmt(start)}${separator}${pending}`;
    }

    return placeholder;
}

export default DateRangePicker;

