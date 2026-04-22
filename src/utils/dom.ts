/**
 * Determines whether a dropdown list should open upward based on available viewport space.
 *
 * @param element - The trigger/container element (e.g. the dropdown wrapper)
 * @param itemCount - Number of items in the list (used to estimate list height)
 * @returns `true` if there is more space above the element than below
 */
export const shouldOpenUpward = (element: HTMLElement, itemCount: number): boolean => {
    const rect = element.getBoundingClientRect();
    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;

    const estimatedHeight =
        Math.min(itemCount, 8) * 33 // 33 = 21px item height + 12px padding, 8 - max items in list
        + 20; // 16px - padding top-bottom + 4px margin-top

    return spaceBelow < estimatedHeight && spaceAbove > spaceBelow;
};
