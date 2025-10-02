import { ChangeEvent, FC, useCallback, useRef, useState } from "react";

import { emptyFn, generateGuid, getClassName, isNullish, isNullOrUndefined, Optional } from "@bodynarf/utils";

import { ElementSize, ElementPosition } from "@bbr/types";
import { getSizeClassName, getStyleClassName, mapDataAttributes } from "@bbr/utils";
import Icon from "@bbr/components/icon";

import "./styles.scss";

import { FileUploadProps } from "..";

/** Component for selecting files */
const FileUpload: FC<FileUploadProps> = ({
    onValueChange = emptyFn,
    placeholder,
    name = generateGuid(),
    disabled = false,
    size = ElementSize.Normal, style,
    displayFileName = true, boxed = false,
    alignment = ElementPosition.Left,
    clearSelectionTitle = "Remove file selection",
    accept,

    className, title, data,
}) => {
    if (boxed && alignment === ElementPosition.Right) {
        throw new Error("Boxed style cannot be used with Right alignment");
    }

    const [selectedFileName, setSelectedFileName] = useState<Optional<string>>(undefined);
    const inputRef = useRef<HTMLInputElement>(null);

    const onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement>) => {
            const firstFile = event.target.files?.[0];
            onValueChange(firstFile);

            if (displayFileName && !isNullish(firstFile)) {
                const fileName = firstFile.name;

                setSelectedFileName(fileName);
            }
        },
        [displayFileName, onValueChange]
    );

    const onClearClick = useCallback(() => {
        inputRef.current!.value = "";

        onValueChange(undefined);
        setSelectedFileName(undefined);
    }, [onValueChange]);

    const containerClassName = getClassName([
        "bbr-fileUpload",
        "file",
        displayFileName ? "has-name" : "",
        alignment === ElementPosition.Right ? "is-right" : "",
        boxed ? "is-boxed" : "",
        getStyleClassName(style),
        getSizeClassName(size),
        disabled ? "is-disabled" : "",
        className,
    ]);

    const dataAttributes = isNullOrUndefined(data)
        ? undefined
        : mapDataAttributes(data!);

    const shouldDisplayFileName = displayFileName && !isNullish(selectedFileName);

    return (
        <div className={containerClassName}>
            {!!shouldDisplayFileName && alignment === ElementPosition.Right
                &&
                <Icon
                    name="x-lg"
                    size={size}
                    className="file-clear"
                    onClick={onClearClick}
                    title={clearSelectionTitle}
                />
            }
            <label className="file-label">
                <input
                    id={name}
                    type="file"
                    name={name}
                    title={title}
                    ref={inputRef}
                    accept={accept}
                    disabled={disabled}
                    onChange={onChange}
                    {...dataAttributes}
                    className="file-input"
                    placeholder={placeholder}
                />
                <span className="file-cta">
                    <span className="file-icon">
                        <Icon
                            size={size}
                            name="upload"
                        />
                    </span>
                    <span className="file-label">
                        {placeholder}
                    </span>
                </span>
                {!!shouldDisplayFileName
                    &&
                    <span
                        className="file-name"
                        title={selectedFileName}
                    >
                        {selectedFileName}
                    </span>
                }
            </label>
            {!!shouldDisplayFileName && alignment === ElementPosition.Left
                &&
                <Icon
                    name="x-lg"
                    size={size}
                    className="file-clear"
                    onClick={onClearClick}
                    title={clearSelectionTitle}
                />
            }
        </div>
    );
};

export default FileUpload;
