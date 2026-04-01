import { BundledLanguage, codeToHtml } from "shiki";

/** Pending highlight record */
type PendingRecord = {
    status: "pending";
    promise: Promise<void>;
};

/** Successful highlight record */
type SuccessRecord = {
    status: "success";
    result: string;
};

/** Error highlight record */
type ErrorRecord = {
    status: "error";
    error: unknown;
};

/** Union type of all possible record states */
type RecordType = PendingRecord | SuccessRecord | ErrorRecord;

/** Cache for highlighted code records */
const cache = new Map<string, RecordType>();

/**
 * Build cache key from code and language
 * @param code Source code string
 * @param lang Language identifier
 * @returns Unique cache key
 */
const getKey = (code: string, lang: BundledLanguage) =>
    `${lang}:${code}`;

/**
 * Get syntax-highlighted HTML for given code.
 * Uses Shiki with "one-light" theme. Throws a promise while pending (for use with React Suspense)
 * @param code Source code to highlight
 * @param lang Language of the code
 * @returns Highlighted HTML string
 */
export const getHighlightedCode = (
    code: string,
    lang: BundledLanguage
): string => {
    const key = getKey(code, lang);

    const cached = cache.get(key);

    if (!cached) {
        let record: RecordType = {
            status: "pending",
            promise: Promise.resolve(), // временно, заменим ниже
        };

        const promise = codeToHtml(code, {
            lang,
            theme: "one-light",
        }).then(
            (result) => {
                record = {
                    status: "success",
                    result,
                };

                cache.set(key, record);
            },
            (error: unknown) => {
                record = {
                    status: "error",
                    error,
                };

                cache.set(key, record);
            }
        );

        record = {
            status: "pending",
            promise,
        };

        cache.set(key, record);
        throw promise;
    }

    if (cached.status === "pending") {
        throw cached.promise;
    }

    if (cached.status === "error") {
        throw cached.error;
    }

    return cached.result;
};
