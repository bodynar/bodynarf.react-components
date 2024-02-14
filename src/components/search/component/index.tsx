import { ChangeEvent, useCallback, useState } from "react";

import { generateGuid, getClassName, isNullOrUndefined } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";
import Button from "@bbr/components/button";
import { SearchProps } from "@bbr/components/search";

import "./style.scss";

/** Search component */
export default function Search({
    searchType, onSearch, caption,
    name, defaultValue,
    size,
    isLoading = false, rounded = false, disabled,

    className, title, data,
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

    const elClassName: string = getClassName([
        "bbr-search",
        "control",
        className,
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

    const dataAttributes = isNullOrUndefined(data)
        ? undefined
        : mapDataAttributes(data!);

    if (searchType === "byButton") {
        return (
            <div className="field has-addons">
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
    else {
        return (
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
        );
    }
}
