import { getClassName, isNullOrUndefined } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";
import { ElementSize } from "@bbr/types";
import { IconProps } from "@bbr/components/icon";

import "./style.scss";

const sizeToClassMap: Map<ElementSize, string> = new Map([
    [ElementSize.Small, "bbr-icon--size-small"],
    [ElementSize.Normal, ""],
    [ElementSize.Medium, "bbr-icon--size-medium"],
    [ElementSize.Large, "bbr-icon--size-large"]
]);

/**
 * Icon component. Based on bootstrap icons
 */
export default function Icon({
    name, size = ElementSize.Normal,

    className, title, data,
}: IconProps): JSX.Element {
    const classNames = getClassName([
        "bbr-icon",
        "bi",
        `bi-${name}`,
        className,
        sizeToClassMap.has(size) ? sizeToClassMap.get(size) : "",
    ]);

    const dataAttributes = isNullOrUndefined(data)
        ? undefined
        : mapDataAttributes(data!);

    return (
        <i
            className={classNames}

            title={title}
            {...dataAttributes}
        ></i>
    );
}
