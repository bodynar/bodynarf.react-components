import { DateFormatDescriptor, DateFormatPart } from "../types";

const FORMAT_TOKENS: Record<string, DateFormatPart["type"]> = {
    "dd": "day",
    "MM": "month",
    "yyyy": "year",
};

/**
 * Parse a date format string into a descriptor.
 * Supported tokens: `dd`, `MM`, `yyyy`.
 * Separator is auto-detected from the first non-alphanumeric character.
 *
 * @example parseFormat("dd.MM.yyyy") => { separator: ".", parts: [...] }
 */
export const parseFormat = (format: string): DateFormatDescriptor => {
    const separatorMatch = format.match(/[^a-zA-Z]/);
    const separator = separatorMatch ? separatorMatch[0] : ".";
    const tokens = format.split(separator);

    let offset = 0;
    const parts: DateFormatPart[] = tokens.map((token) => {
        const type = FORMAT_TOKENS[token];

        if (!type) {
            throw new Error(`Unknown format token: "${token}". Supported: dd, MM, yyyy`);
        }

        const length = token.length;
        const start = offset;
        const end = offset + length;

        offset = end + 1; // +1 for separator

        return { type, length, start, end };
    });

    return { separator, parts };
};

/**
 * Get the placeholder string for the format.
 * @example getPlaceholder({ separator: ".", parts: [...] }) => "dd.MM.yyyy"
 */
export const getPlaceholder = (desc: DateFormatDescriptor): string => {
    return desc.parts
        .map(p => {
            switch (p.type) {
                case "day": return "dd";
                case "month": return "MM";
                case "year": return "yyyy";
            }
        })
        .join(desc.separator);
};

/**
 * Get total length of the formatted string.
 */
export const getFormatLength = (desc: DateFormatDescriptor): number => {
    return desc.parts.reduce((sum, p) => sum + p.length, 0)
        + (desc.parts.length - 1); // separators
};

/**
 * Format a Date object into a string according to the descriptor.
 */
export const formatDate = (date: Date, desc: DateFormatDescriptor): string => {
    return desc.parts
        .map(p => {
            switch (p.type) {
                case "day": return String(date.getDate()).padStart(p.length, "0");
                case "month": return String(date.getMonth() + 1).padStart(p.length, "0");
                case "year": return String(date.getFullYear()).padStart(p.length, "0");
            }
        })
        .join(desc.separator);
};

/**
 * Try to parse a formatted string into a Date.
 * Returns `undefined` if the string is incomplete or invalid.
 */
export const parseDate = (text: string, desc: DateFormatDescriptor): Date | undefined => {
    if (text.length !== getFormatLength(desc)) {
        return undefined;
    }

    let day = 0;
    let month = 0;
    let year = 0;

    for (const part of desc.parts) {
        const raw = text.substring(part.start, part.end);

        if (!/^\d+$/.test(raw)) {
            return undefined;
        }

        const num = parseInt(raw, 10);

        switch (part.type) {
            case "day": day = num; break;
            case "month": month = num; break;
            case "year": year = num; break;
        }
    }

    if (!isValidDate(day, month, year)) {
        return undefined;
    }

    const date = new Date(year, month - 1, day);

    // Verify the date didn't roll over (e.g. Feb 30 → Mar 2)
    if (
        date.getFullYear() !== year
        || date.getMonth() !== month - 1
        || date.getDate() !== day
    ) {
        return undefined;
    }

    return date;
};

/**
 * Basic validation for day/month/year ranges.
 */
const isValidDate = (day: number, month: number, year: number): boolean => {
    if (year < 1 || year > 9999) {
        return false;
    }

    if (month < 1 || month > 12) {
        return false;
    }

    if (day < 1 || day > 31) {
        return false;
    }

    return true;
};

/**
 * Validate and constrain a single character being typed at a given position.
 * Returns the character if valid, or empty string if rejected.
 *
 * @param char The character being typed
 * @param position The 0-based position in the formatted string
 * @param currentText The current text value
 * @param desc The format descriptor
 */
export const validateCharAtPosition = (
    char: string,
    position: number,
    currentText: string,
    desc: DateFormatDescriptor,
): string => {
    // Check if position falls on a separator
    for (let i = 0; i < desc.parts.length - 1; i++) {
        if (position === desc.parts[i].end) {
            return char === desc.separator ? desc.separator : "";
        }
    }

    // Must be a digit
    if (!/^\d$/.test(char)) {
        return "";
    }

    const digit = parseInt(char, 10);

    // Find which part this position belongs to
    const part = desc.parts.find(p => position >= p.start && position < p.end);

    if (!part) {
        return "";
    }

    const posInPart = position - part.start;

    if (part.type === "day") {
        if (posInPart === 0 && digit > 3) {
            return "";
        }

        if (posInPart === 1) {
            const firstDigit = parseInt(currentText[part.start] ?? "0", 10);

            if (firstDigit === 3 && digit > 1) {
                return "";
            }

            if (firstDigit === 0 && digit === 0) {
                return "";
            }
        }
    }

    if (part.type === "month") {
        if (posInPart === 0 && digit > 1) {
            return "";
        }

        if (posInPart === 1) {
            const firstDigit = parseInt(currentText[part.start] ?? "0", 10);

            if (firstDigit === 1 && digit > 2) {
                return "";
            }

            if (firstDigit === 0 && digit === 0) {
                return "";
            }
        }
    }

    if (part.type === "year") {
        if (posInPart === 0 && digit === 0) {
            return "";
        }
    }

    return char;
};
