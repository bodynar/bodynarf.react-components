import { isSameDay, startOfDay } from "@bodynarf/utils";

/** A single cell in the calendar day grid */
export interface DayCell {
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

/**
 * Builds the flat array of {@link DayCell} objects for a calendar month grid.
 * The grid always starts on Monday and is padded with leading / trailing cells
 * from adjacent months so that every row is exactly 7 days wide.
 *
 * @param displayDate - Any date within the month to render.
 * @param today       - The current calendar day (normalised to midnight).
 * @param selectedDate - The currently selected date, if any.
 * @param minDate     - Lower bound of the selectable range (inclusive), if any.
 * @param maxDate     - Upper bound of the selectable range (inclusive), if any.
 */
export const buildDayCells = (
    displayDate: Date,
    today: Date,
    selectedDate?: Date,
    minDate?: Date,
    maxDate?: Date,
): DayCell[] => {
    const year = displayDate.getFullYear();
    const month = displayDate.getMonth();

    const firstDay = new Date(year, month, 1);
    // Monday-based: getDay() returns 0=Sun → shift so Mon=0 … Sun=6
    const dayOfWeek = (firstDay.getDay() + 6) % 7;

    const minNorm = minDate ? startOfDay(minDate) : undefined;
    const maxNorm = maxDate ? startOfDay(maxDate) : undefined;

    const isDisabled = (d: Date): boolean =>
        (minNorm !== undefined && d < minNorm)
        || (maxNorm !== undefined && d > maxNorm);

    const makeCell = (d: Date, isCurrentMonth: boolean): DayCell => ({
        date: d,
        isCurrentMonth,
        isToday: isSameDay(d, today),
        isSelected: selectedDate ? isSameDay(d, selectedDate) : false,
        isDisabled: isDisabled(d),
    });

    const cells: DayCell[] = [];

    // Leading days from previous month
    for (let i = dayOfWeek - 1; i >= 0; i--) {
        cells.push(makeCell(new Date(year, month, -i), false));
    }

    // Days of the current month
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    for (let i = 1; i <= daysInMonth; i++) {
        cells.push(makeCell(new Date(year, month, i), true));
    }

    // Trailing days from next month — fill to complete rows
    const remaining = (7 - (cells.length % 7)) % 7;
    for (let i = 1; i <= remaining; i++) {
        cells.push(makeCell(new Date(year, month + 1, i), false));
    }

    return cells;
};
