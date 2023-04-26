import { getClassName } from "@bodynarf/utils";

import "./style.scss";

import { IconProps } from "..";
import { ElementSize } from "../..";

const sizeToClassMap: Map<ElementSize, string> = new Map([
    [ElementSize.Small, "bbr-icon--size-smal"],
    [ElementSize.Normal, ""],
    [ElementSize.Medium, "bbr-icon--size-medium"],
    [ElementSize.Large, "bbr-icon--size-large"]
]);

/**
 * Icon component. Based on bootstrap icons
 */
export default function Icon({
    name, size = ElementSize.Normal,
    className,
}: IconProps): JSX.Element {
    const classNames = getClassName([
        "bbr-icon",
        "bi",
        `bi-${name}`,
        sizeToClassMap.has(size) ? sizeToClassMap.get(size) : "",
        className
    ]);

    return (
        <i className={classNames}></i>
    );
}
