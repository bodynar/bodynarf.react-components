import { FC, useMemo } from "react";

import { getClassName } from "@bodynarf/utils";

const YEARS_PER_PAGE = 12;

/** Props for the CalendarYearPicker subcomponent */
export type CalendarYearPickerProps = {
    /** First year of the 12-year range to render */
    yearRangeStart: number;

    /** The actual current year, used to highlight "this year" */
    currentYear: number;

    /** The year of the currently selected date, used to highlight the selected cell */
    selectedYear?: number;

    /** Minimum selectable date (inclusive). Years before `minDate.getFullYear()` are disabled */
    minDate?: Date;

    /** Maximum selectable date (inclusive). Years after `maxDate.getFullYear()` are disabled */
    maxDate?: Date;

    /** Called when the user clicks a year cell */
    onYearSelect: (year: number) => void;
};

/** 3×4 grid of years covering a 12-year range for year selection */
const CalendarYearPicker: FC<CalendarYearPickerProps> = ({
    yearRangeStart,
    currentYear,
    selectedYear,
    minDate,
    maxDate,
    onYearSelect,
}) => {
    const years = useMemo(() => {
        return Array.from({ length: YEARS_PER_PAGE }, (_, i) => {
            const year = yearRangeStart + i;

            const isDisabled =
                (minDate !== undefined && year < minDate.getFullYear()) ||
                (maxDate !== undefined && year > maxDate.getFullYear());

            return { year, isDisabled };
        });
    }, [yearRangeStart, minDate, maxDate]);

    return (
        <div className="bbr-calendar__picker">
            {years.map(({ year, isDisabled }) => {
                const isSelected = year === selectedYear;
                const isCurrent = year === currentYear && !isSelected;

                const itemClassName = getClassName([
                    "bbr-calendar__picker-item",
                    isSelected ? "bbr-calendar__picker-item--selected" : "",
                    isCurrent ? "bbr-calendar__picker-item--current" : "",
                    isDisabled ? "bbr-calendar__picker-item--disabled" : "",
                ]);

                return (
                    <button
                        key={year}

                        type="button"
                        disabled={isDisabled}
                        className={itemClassName}
                        onClick={() => onYearSelect(year)}
                    >
                        {year}
                    </button>
                );
            })}
        </div>
    );
};

export default CalendarYearPicker;
