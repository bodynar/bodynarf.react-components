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

    const days = useMemo<DayCell[]>(
        () => buildDayCells(displayDate, today, selectedDate, minDate, maxDate),
        [displayDate, selectedDate, minDate, maxDate, today],
    );

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
