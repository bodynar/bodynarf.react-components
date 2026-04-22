import { FC, useMemo } from "react";

import { getClassName } from "@bodynarf/utils";

import { getMonthNames } from "../../utils";

/** Props for the CalendarMonthPicker subcomponent */
export type CalendarMonthPickerProps = {
    /** The year whose months are rendered */
    displayDate: Date;

    /** BCP 47 locale tag forwarded to month-name formatting */
    locale: string;

    /** The currently selected date, used to highlight the matching month cell */
    selectedDate?: Date;

    /** Minimum selectable date (inclusive). Months entirely before this are disabled */
    minDate?: Date;

    /** Maximum selectable date (inclusive). Months entirely after this are disabled */
    maxDate?: Date;

    /** Called when the user clicks a month cell */
    onMonthSelect: (month: number) => void;
};

/** 3×4 grid of abbreviated month names for month selection */
const CalendarMonthPicker: FC<CalendarMonthPickerProps> = ({
    displayDate,
    selectedDate,
    minDate,
    maxDate,
    locale,
    onMonthSelect,
}) => {
    const currentYear = displayDate.getFullYear();
    const selectedMonth = selectedDate?.getMonth();
    const isSelectedYear = selectedDate?.getFullYear() === currentYear;

    const months = useMemo(() => {
        return getMonthNames(locale, "short").map((name, index) => {
            const firstOfMonth = new Date(currentYear, index, 1);
            const lastOfMonth = new Date(currentYear, index + 1, 0);

            const isDisabled =
                (minDate !== undefined && lastOfMonth < new Date(minDate.getFullYear(), minDate.getMonth(), 1)) ||
                (maxDate !== undefined && firstOfMonth > new Date(maxDate.getFullYear(), maxDate.getMonth(), 1));

            return { name, index, isDisabled };
        });
    }, [currentYear, minDate, maxDate, locale]);

    return (
        <div className="bbr-calendar__picker">
            {months.map(({ name, index, isDisabled }) => {
                const isSelected = isSelectedYear && selectedMonth === index;
                const isCurrent = new Date().getFullYear() === currentYear && new Date().getMonth() === index;

                const itemClassName = getClassName([
                    "bbr-calendar__picker-item",
                    isSelected ? "bbr-calendar__picker-item--selected" : "",
                    isCurrent && !isSelected ? "bbr-calendar__picker-item--current" : "",
                    isDisabled ? "bbr-calendar__picker-item--disabled" : "",
                ]);

                return (
                    <button
                        key={index}

                        type="button"
                        disabled={isDisabled}
                        className={itemClassName}
                        onClick={() => onMonthSelect(index)}
                    >
                        {name}
                    </button>
                );
            })}
        </div>
    );
};

export default CalendarMonthPicker;
