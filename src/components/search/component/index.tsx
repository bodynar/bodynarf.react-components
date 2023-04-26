import { ChangeEvent, useCallback, useState } from "react";

import { generateGuid, getClassName } from "@bodynarf/utils";

import "./style.scss";

import { SearchProps } from "../..";
import Button from "../../button";

/** Search component */
export default function Search({
    searchType, onSearch, caption,
    name, defaultValue,
    size, isLoading, rounded, disabled,
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
        isLoading === true ? "is-loading" : "",
        searchType === "byButton" ? "is-expanded" : "",
    ]);

    const inputClassName: string = getClassName([
        "input",
        "is-unselectable",
        `is-${(size || "normal")}`,
        rounded === true ? "is-rounded" : "",
    ]);

    if (searchType === "byButton") {
        return (
            <div className="field has-addons">
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
                <div className="control">
                    <Button
                        caption="Search"
                        type="info"
                        onClick={onSearchButtonClick}
                        isLoading={isLoading}
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
