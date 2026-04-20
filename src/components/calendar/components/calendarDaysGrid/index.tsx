import { FC, useMemo } from "react";

import { getClassName } from "@bodynarf/utils";

import { DayCell, buildDayCells, getWeekdayLabels, startOfDay } from "../../utils";

/** Props for the CalendarDaysGrid subcomponent */
export type CalendarDaysGridProps = {
    /** The month/year whose days are rendered */
    displayDate: Date;

    /** BCP 47 locale tag forwarded to weekday label formatting */
    locale: string;

    /** The currently selected date, if any */
    selectedDate?: Date;

    /** Minimum selectable date (inclusive). Days before this are disabled */
    minDate?: Date;

    /** Maximum selectable date (inclusive). Days after this are disabled */
    maxDate?: Date;

    /** Start of a selected date range. When set, suppresses single-selection styling */
    rangeStart?: Date;

    /** End of a confirmed date range */
    rangeEnd?: Date;

    /** Hover preview date — used to show a tentative range end while the user is
     *  choosing the second bound. Only meaningful when rangeStart is set and rangeEnd is not */
    hoverDate?: Date;

    /** Called when the user clicks a day cell */
    onDayClick: (date: Date) => void;

    /** Called when the pointer enters a day cell; undefined when pointer leaves the grid */
    onDayHover?: (date: Date | undefined) => void;
};

/** Returns the BEM modifier class for a day cell based on the active date range. */
function computeRangeClass(
    cellDate: Date,
    rangeStart: Date | undefined,
    rangeEnd: Date | undefined,
    hoverDate: Date | undefined,
): string {
    if (!rangeStart) {
        return "";
    }

    const cellTime = startOfDay(cellDate).getTime();
    const startTime = startOfDay(rangeStart).getTime();
    const effectiveEnd = rangeEnd ?? hoverDate;

    if (!effectiveEnd) {
        return cellTime === startTime ? "bbr-calendar__day--range-anchor" : "";
    }

    const endTime = startOfDay(effectiveEnd).getTime();
    const lo = Math.min(startTime, endTime);
    const hi = Math.max(startTime, endTime);

    if (lo === hi) {
        return cellTime === lo ? "bbr-calendar__day--range-anchor" : "";
    }

    if (cellTime === lo) {
        return "bbr-calendar__day--range-start";
    }
    if (cellTime === hi) {
        return "bbr-calendar__day--range-end";
    }
    if (cellTime > lo && cellTime < hi) {
        return "bbr-calendar__day--in-range";
    }

    return "";
}

/** Calendar days grid: weekday headers + day cells laid out in a 7-column grid */
const CalendarDaysGrid: FC<CalendarDaysGridProps> = ({
    displayDate,
    selectedDate,
    minDate,
    maxDate,
    locale,
    rangeStart,
    rangeEnd,
    hoverDate,
    onDayClick,
    onDayHover,
}) => {
    const today = useMemo(() => startOfDay(new Date()), []);

    const weekdayLabels = useMemo(() => getWeekdayLabels(locale), [locale]);

    const days = useMemo<DayCell[]>(
        () => buildDayCells(displayDate, today, selectedDate, minDate, maxDate),
        [displayDate, selectedDate, minDate, maxDate, today],
    );

    const isRangeMode = !!rangeStart;

    return (
        <div className="bbr-calendar__body">
            <div className="bbr-calendar__weekdays">
                {weekdayLabels.map(label => (
                    <span
                        key={label}

                        className="bbr-calendar__weekday"
                    >
                        {label}
                    </span>
                ))}
            </div>

            <div
                className="bbr-calendar__days"
                onMouseLeave={() => onDayHover?.(undefined)}
            >
                {days.map(cell => {
                    const rangeClass = computeRangeClass(cell.date, rangeStart, rangeEnd, hoverDate);

                    const dayClassName = getClassName([
                        "bbr-calendar__day",
                        cell.isToday ? "bbr-calendar__day--today" : "",
                        (!isRangeMode && cell.isSelected) ? "bbr-calendar__day--selected" : "",
                        !cell.isCurrentMonth ? "bbr-calendar__day--other-month" : "",
                        cell.isDisabled ? "bbr-calendar__day--disabled" : "",
                        rangeClass,
                    ]);

                    return (
                        <button
                            key={cell.date.toISOString()}

                            type="button"
                            className={dayClassName}
                            disabled={cell.isDisabled}
                            aria-pressed={cell.isSelected}
                            onClick={() => onDayClick(cell.date)}
                            onMouseEnter={() => onDayHover?.(cell.date)}
                            aria-current={cell.isToday ? "date" : undefined}
                        >
                            <span className="bbr-calendar__day-inner">
                                {cell.date.getDate()}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default CalendarDaysGrid;
