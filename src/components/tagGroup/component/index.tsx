import { FC, KeyboardEvent, useCallback, useRef, useState } from "react";

import { getClassName, isNotNullOrEmpty } from "@bodynarf/utils";

import { ElementColor, ElementSize } from "@bbr/types";
import { mapDataAttributes } from "@bbr/utils";
import Tag from "@bbr/components/tag";

import "./style.scss";

import { TagGroupProps } from "..";

const DEFAULT_CONFIRM_KEYS = ["Enter", ","];

/** Editable list of tags */
const TagGroup: FC<TagGroupProps> = ({
    value,
    color = ElementColor.Primary,
    size = ElementSize.Normal,
    placeholder = "Add tag…",
    addable = true,
    removable = true,
    disabled = false,
    confirmKeys = DEFAULT_CONFIRM_KEYS,
    maxTags,
    onChange,

    className, title, data,
}) => {
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const canAdd = addable && !disabled && (maxTags === undefined || value.length < maxTags);

    const addTag = useCallback((raw: string) => {
        const trimmed = raw.trim().replace(/,$/, "");

        if (!isNotNullOrEmpty(trimmed)) {
            return;
        }

        if (value.includes(trimmed)) {
            return;
        }

        if (maxTags !== undefined && value.length >= maxTags) {
            return;
        }

        onChange([...value, trimmed]);
        setInputValue("");
    }, [value, maxTags, onChange]);

    const removeTag = useCallback((tag: string) => {
        if (!removable || disabled) { return; }
        onChange(value.filter(t => t !== tag));
    }, [value, removable, disabled, onChange]);

    const handleKeyDown = useCallback((e: KeyboardEvent<HTMLInputElement>) => {
        if (confirmKeys.includes(e.key)) {
            e.preventDefault();
            addTag(inputValue);
        } else if (e.key === "Backspace" && inputValue === "" && value.length > 0) {
            removeTag(value[value.length - 1]);
        }
    }, [confirmKeys, inputValue, value, addTag, removeTag]);

    const dataAttributes = mapDataAttributes(data);

    const elClassName = getClassName([
        "bbr-tag-group",
        "field",
        disabled ? "bbr-tag-group--disabled" : "",
        className,
    ]);

    return (
        <div
            {...dataAttributes}

            title={title}
            className={elClassName}
            onClick={() => inputRef.current?.focus()}
        >
            {value.map(tag => (
                <div
                    key={tag}

                    className="control"
                >
                    <Tag
                        size={size}
                        content={tag}
                        style={color}
                        className="bbr-tag-group__tag"
                        onRemove={removable && !disabled ? () => removeTag(tag) : undefined}
                    />
                </div>
            ))}
            {canAdd ? (
                <div className="control bbr-tag-group__input-control">
                    <input
                        type="text"
                        ref={inputRef}
                        value={inputValue}
                        disabled={disabled}
                        onKeyDown={handleKeyDown}
                        className="bbr-tag-group__input"
                        onBlur={() => addTag(inputValue)}
                        onChange={e => setInputValue(e.target.value)}
                        placeholder={value.length === 0 ? placeholder : ""}
                    />
                </div>
            ) : null}
        </div>
    );
};

export default TagGroup;
