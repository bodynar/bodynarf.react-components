import { ChangeEvent, useCallback, useState } from "react";

import { generateGuid, getClassName, isNullOrUndefined } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { mapDataAttributes } from "@bbr/utils";
import Button from "@bbr/components/button";

import "./style.scss";
import { SearchProps } from "..";

/** Search component */
export default function Search({
    searchType, onSearch, caption,
    name = generateGuid(), defaultValue = "",
    size = ElementSize.Normal,
    isLoading = false, rounded = false, disabled = false,

    className, title, data,
}: SearchProps): JSX.Element {
    const [elementName] = useState<string>(name);
    const [searchValue, setSearchValue] = useState<string>(defaultValue);

    const onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const elementValue: string = event.target.value;

            if (searchType === "byTyping") {
                onSearch(elementValue);
            }

            setSearchValue(elementValue);
        }, [onSearch, searchType]);

    const onSearchButtonClick = useCallback(() => onSearch(searchValue), [onSearch, searchValue]);

    const elClassName: string = getClassName([
        "bbr-search",
        "control",
        className,
        `is-${size}`,
        isLoading ? "is-loading" : "",
        searchType === "byButton" ? "is-expanded" : "",
    ]);

    const inputClassName: string = getClassName([
        "input",
        "is-unselectable",
        `is-${size}`,
        rounded ? "is-rounded" : "",
    ]);

    const dataAttributes = isNullOrUndefined(data)
        ? undefined
        : mapDataAttributes(data!);

    if (searchType === "byButton") {
        return (
            <div
                className="field has-addons"
            >
                <div className={elClassName}>
                    <input
                        type="search"
                        name={elementName}
                        disabled={disabled}
                        onChange={onChange}
                        placeholder={caption}
                        defaultValue={searchValue}
                        className={inputClassName}

                        title={title}
                        {...dataAttributes}
                    />
                </div>
                <div className="control">
                    <Button
                        type="info"
                        size={size}
                        caption="Search"
                        disabled={disabled}
                        isLoading={isLoading}
                        onClick={onSearchButtonClick}
                    />
                </div>
            </div>
        );
    }

    return (
        <div
            className={elClassName}
        >
            <input
                type="search"
                name={elementName}
                disabled={disabled}
                onChange={onChange}
                placeholder={caption}
                defaultValue={searchValue}
                className={inputClassName}

                title={title}
                {...dataAttributes}
            />
        </div>
    );
}
