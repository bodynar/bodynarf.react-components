import { ChangeEvent, useCallback, useState } from "react";

import { generateGuid, getClassName } from "@bodynarf/utils";

import "./style.scss";

import Button from "@bbr/components/button";

import { SearchProps } from "@bbr/components/search";

/** Search component */
export default function Search({
    searchType, onSearch, caption,
    name, defaultValue,
    size,
    isLoading = false, rounded = false, disabled,
}: SearchProps): JSX.Element {
    const [elementName] = useState<string>(name || generateGuid());
    const [searchValue, setSearchValue] = useState<string>(defaultValue || "");

    const onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const elementValue: string = event.target.value;

            if (searchType === "byTyping") {
                onSearch(elementValue);
            }

            setSearchValue(elementValue);
        }, [onSearch, searchType]);

    const onSearchButtonClick = useCallback(() => onSearch(searchValue), [onSearch, searchValue]);

    const className: string = getClassName([
        "bbr-search",
        "control",
        `is-${(size || "normal")}`,
        isLoading ? "is-loading" : "",
        searchType === "byButton" ? "is-expanded" : "",
    ]);

    const inputClassName: string = getClassName([
        "input",
        "is-unselectable",
        `is-${(size || "normal")}`,
        rounded ? "is-rounded" : "",
    ]);

    if (searchType === "byButton") {
        return (
            <div className="field has-addons">
                <div className={className}>
                    <input
                        type="search"
                        name={elementName}
                        disabled={disabled}
                        onChange={onChange}
                        placeholder={caption}
                        defaultValue={searchValue}
                        className={inputClassName}
                    />
                </div>
                <div className="control">
                    <Button
                        type="info"
                        caption="Search"
                        size={size}
                        disabled={disabled}
                        isLoading={isLoading}
                        onClick={onSearchButtonClick}
                    />
                </div>
            </div>
        );
    }
    else {
        return (
            <div className={className}>
                <input
                    type="search"
                    name={elementName}
                    defaultValue={searchValue}
                    className={inputClassName}
                    disabled={disabled}
                    onChange={onChange}
                    placeholder={caption}
                />
            </div>
        );
    }
}
