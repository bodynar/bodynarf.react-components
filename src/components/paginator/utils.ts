/**
 * Get nearest page numbers from each side (left & right) of the current page.
 * @param page Current page number
 * @param count Total amount of pages
 * @param size Amount of pages to show from each side of the current page
 * @returns Array of page numbers to display
 */
export const generatePageNumbers = (page: number, count: number, size: number): Array<number> => {
    if (page <= 0 || count <= 0 || page > count || size < 0) {
        return [];
    }

    return [
        ...new Array(size).fill(page).map((_, i) => page - i - 1).filter(x => x > 0 && x < page).reverse(),
        page,
        ...new Array(size).fill(page).map((_, i) => page + i + 1).filter(x => x > 0 && x > page && x <= count),
    ];
};
