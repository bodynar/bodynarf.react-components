import { FC, useMemo } from "react";

import { getClassName } from "@bodynarf/utils";

import { isSameDay, startOfDay, getWeekdayLabels } from "../../utils";

/** A single cell in the day grid */
interface DayCell {
    /** The date this cell represents */
    date: Date;

    /** Whether the date belongs to the currently displayed month */
    isCurrentMonth: boolean;

    /** Whether the date is today */
    isToday: boolean;

    /** Whether the date matches the selected value */
    isSelected: boolean;

    /** Whether the date falls outside the min/max range */
    isDisabled: boolean;
}

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

    /** Called when the user clicks a day cell */
    onDayClick: (date: Date) => void;
};

/** Calendar days grid: weekday headers + day cells laid out in a 7-column grid */
const CalendarDaysGrid: FC<CalendarDaysGridProps> = ({
    displayDate,
    selectedDate,
    minDate,
    maxDate,
    locale,
    onDayClick,
}) => {
    const today = useMemo(() => startOfDay(new Date()), []);

    const weekdayLabels = useMemo(() => getWeekdayLabels(locale), [locale]);

    const days = useMemo<DayCell[]>(() => {
        const year = displayDate.getFullYear();
        const month = displayDate.getMonth();

        const firstDay = new Date(year, month, 1);
        // Monday-based: getDay() returns 0=Sun, need Mon=0
        const dayOfWeek = (firstDay.getDay() + 6) % 7; // Mon=0 … Sun=6

        const minNorm = minDate ? startOfDay(minDate) : undefined;
        const maxNorm = maxDate ? startOfDay(maxDate) : undefined;

        const cells: DayCell[] = [];

        // Leading days from previous month
        for (let i = dayOfWeek - 1; i >= 0; i--) {
            const d = new Date(year, month, -i);
            cells.push({
                date: d,
                isCurrentMonth: false,
                isToday: isSameDay(d, today),
                isSelected: selectedDate ? isSameDay(d, selectedDate) : false,
                isDisabled:
                    (minNorm !== undefined && d < minNorm) ||
                    (maxNorm !== undefined && d > maxNorm),
            });
        }

        // Days of current month
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        for (let i = 1; i <= daysInMonth; i++) {
            const d = new Date(year, month, i);
            cells.push({
                date: d,
                isCurrentMonth: true,
                isToday: isSameDay(d, today),
                isSelected: selectedDate ? isSameDay(d, selectedDate) : false,
                isDisabled:
                    (minNorm !== undefined && d < minNorm) ||
                    (maxNorm !== undefined && d > maxNorm),
            });
        }

        // Trailing days from next month — fill to complete rows
        const remaining = (7 - (cells.length % 7)) % 7;
        for (let i = 1; i <= remaining; i++) {
            const d = new Date(year, month + 1, i);
            cells.push({
                date: d,
                isCurrentMonth: false,
                isToday: isSameDay(d, today),
                isSelected: selectedDate ? isSameDay(d, selectedDate) : false,
                isDisabled:
                    (minNorm !== undefined && d < minNorm) ||
                    (maxNorm !== undefined && d > maxNorm),
            });
        }

        return cells;
    }, [displayDate, selectedDate, minDate, maxDate, today]);

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

            <div className="bbr-calendar__days">
                {days.map(cell => {
                    const dayClassName = getClassName([
                        "bbr-calendar__day",
                        cell.isToday ? "bbr-calendar__day--today" : "",
                        cell.isSelected ? "bbr-calendar__day--selected" : "",
                        !cell.isCurrentMonth ? "bbr-calendar__day--other-month" : "",
                        cell.isDisabled ? "bbr-calendar__day--disabled" : "",
                    ]);

                    return (
                        <button
                            key={cell.date.toISOString()}

                            type="button"
                            className={dayClassName}
                            disabled={cell.isDisabled}
                            aria-pressed={cell.isSelected}
                            onClick={() => onDayClick(cell.date)}
                            aria-current={cell.isToday ? "date" : undefined}
                        >
                            {cell.date.getDate()}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default CalendarDaysGrid;
