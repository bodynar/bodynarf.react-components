import { ChangeEvent, FC, useCallback, useState } from "react";

import { getClassName } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { getSizeClassName, mapDataAttributes } from "@bbr/utils";
import Button, { ButtonStyle } from "@bbr/components/button";
import Icon from "@bbr/components/icon";

import "./style.scss";
import { SearchProps } from "..";

/** Search component */
const Search: FC<SearchProps> = ({
    searchType, onSearch, caption,
    defaultValue = "",
    size = ElementSize.Normal,
    isLoading = false, rounded = false, disabled = false,
    autoFocus = false,
    searchButtonCaption = "Search", searchButtonTitle,
    showIcon = false,

    className, title, data,
}) => {
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
        getSizeClassName(size),
        isLoading ? "is-loading" : "",
        searchType === "byButton" ? "is-expanded" : "",
        showIcon ? "has-icons-left" : "",
    ]);

    const inputClassName: string = getClassName([
        "input",
        "is-unselectable",
        getSizeClassName(size),
        rounded ? "is-rounded" : "",
    ]);

    const dataAttributes = mapDataAttributes(data);

    if (searchType === "byButton") {
        return (
            <div
                className="field has-addons"
            >
                <div className={elClassName}>
                    <input
                        type="search"
                        title={title}
                        disabled={disabled}
                        onChange={onChange}
                        {...dataAttributes}
                        placeholder={caption}
                        autoFocus={autoFocus}
                        defaultValue={searchValue}
                        className={inputClassName}
                    />
                    {showIcon
                        ? (
                            <span className={`icon is-left ${getSizeClassName(size)}`}>
                                <Icon
                                    size={size}
                                    name="search"
                                />
                            </span>
                        )
                        : null
                    }
                </div>
                <div className="control">
                    <Button
                        size={size}
                        rounded={rounded}
                        disabled={disabled}
                        isLoading={isLoading}
                        style={ButtonStyle.Info}
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
                title={title}
                disabled={disabled}
                onChange={onChange}
                {...dataAttributes}
                placeholder={caption}
                autoFocus={autoFocus}
                defaultValue={searchValue}
                className={inputClassName}
            />
            {showIcon
                ? (
                    <span className={`icon is-left ${getSizeClassName(size)}`}>
                        <Icon
                            size={size}
                            name="search"
                        />
                    </span>
                )
                : null
            }
        </div>
    );
};

export default Search;
