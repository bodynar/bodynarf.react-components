/**
 * Get nearest numbers from each side (left & right)
 * @param page Number of current page
 * @param count Amount of pages
 * @param size Amount of pages from left & right to current page. Default is 3
 * @throws Current page is greater than pages amount
 * @returns Array of nearest numbers to current page
 */
export const generatePageNumbers = (page: number, count: number, size: number = 3): Array<number> => {
    if (page < 0 || count <= 0 || page > count || size > count) {
        throw new Error("getPageNumbers has ivalid config");
    }

    return [
        ...new Array(size).fill(page).map((_, i) => page - i - 1).filter(x => x > 0 && x < page).reverse(),
        page,
        ...new Array(size).fill(page).map((_, i) => page + i + 1).filter(x => x > 0 && x > page && x <= count)
    ];
};
