/** Default BCP 47 locale tag used when no locale is explicitly provided */
const DEFAULT_LOCALE = "en-US";

/**
 * Returns an array of 12 month names localized for the given locale.
 *
 * @param locale - BCP 47 language tag (e.g. `"en-US"`, `"ru-RU"`). Defaults to `"en-US"`.
 * @param format - Display format: `"long"` for full names, `"short"` for abbreviated. Defaults to `"long"`.
 * @returns Array of 12 strings representing month names, January at index 0.
 *
 * @example
 * // ["January", "February", ..., "December"]
 * getMonthNames("en-US", "long");
 *
 * @example
 * // ["Jan", "Feb", ..., "Dec"]
 * getMonthNames("en-US", "short");
 *
 * @example
 * // ["январь", "февраль", ..., "декабрь"]
 * getMonthNames("ru-RU", "long");
 */
export const getMonthNames = (locale = DEFAULT_LOCALE, format: "long" | "short" = "long"): string[] =>
    Array.from({ length: 12 }, (_, i) =>
        new Intl.DateTimeFormat(locale, { month: format }).format(new Date(2000, i, 1))
    );

/**
 * Returns an array of 7 short weekday labels starting from Monday, localized for the given locale.
 * Uses the week of 2000-01-03 (a known Monday) as the reference point.
 *
 * @param locale - BCP 47 language tag. Defaults to `"en-US"`.
 * @returns Array of 7 strings in Monday–Sunday order.
 *
 * @example
 * // ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
 * getWeekdayLabels("en-US");
 *
 * @example
 * // ["пн", "вт", "ср", "чт", "пт", "сб", "вс"]
 * getWeekdayLabels("ru-RU");
 */
export const getWeekdayLabels = (locale = DEFAULT_LOCALE): string[] => {
    const fmt = new Intl.DateTimeFormat(locale, { weekday: "short" });
    // 2000-01-03 is a Monday; iterating 0-6 covers Mon through Sun
    return Array.from({ length: 7 }, (_, i) => fmt.format(new Date(2000, 0, 3 + i)));
};

/**
 * Returns `true` when two Date values fall on the same calendar day (year, month and day of month).
 * Time components are ignored.
 *
 * @param a - First date to compare.
 * @param b - Second date to compare.
 *
 * @example
 * isSameDay(new Date(2026, 3, 10, 12, 0), new Date(2026, 3, 10, 23, 59)); // true
 * isSameDay(new Date(2026, 3, 10), new Date(2026, 3, 11)); // false
 */
export const isSameDay = (a: Date, b: Date): boolean =>
    a.getFullYear() === b.getFullYear()
    && a.getMonth() === b.getMonth()
    && a.getDate() === b.getDate();

/**
 * Returns a new Date set to midnight (00:00:00.000) of the given date's local calendar day.
 * Useful for min/max comparisons that should ignore time.
 *
 * @param date - Source date.
 *
 * @example
 * startOfDay(new Date(2026, 3, 10, 15, 30, 0));
 * // → new Date(2026, 3, 10, 0, 0, 0, 0)
 */
export const startOfDay = (date: Date): Date =>
    new Date(date.getFullYear(), date.getMonth(), date.getDate());

/**
 * Returns a new Date set to the start of the current calendar day (midnight, local time).
 * Equivalent to `startOfDay(new Date())`.
 *
 * @example
 * getToday(); // → new Date(2026, 3, 18, 0, 0, 0, 0)
 */
export const getToday = (): Date => startOfDay(new Date());
