import { ChangeEvent, useCallback, useState } from "react";

import { getClassName, isNullOrUndefined } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { mapDataAttributes } from "@bbr/utils";
import Button from "@bbr/components/button";

import "./style.scss";
import { SearchProps } from "..";

/** Search component */
export default function Search({
    searchType, onSearch, caption,
    defaultValue = "",
    size = ElementSize.Normal,
    isLoading = false, rounded = false, disabled = false,
    autoFocus = false,
    searchButtonCaption = "Search", searchButtonTitle,

    className, title, data,
}: SearchProps): JSX.Element {
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
                        disabled={disabled}
                        onChange={onChange}
                        placeholder={caption}
                        autoFocus={autoFocus}
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
                        disabled={disabled}
                        isLoading={isLoading}
                        title={searchButtonTitle}
                        caption={searchButtonCaption}
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
                disabled={disabled}
                onChange={onChange}
                placeholder={caption}
                autoFocus={autoFocus}
                defaultValue={searchValue}
                className={inputClassName}

                title={title}
                {...dataAttributes}
            />
        </div>
    );
}
