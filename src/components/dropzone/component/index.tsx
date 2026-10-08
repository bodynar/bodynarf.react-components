import {
    ChangeEvent,
    Children,
    DragEvent,
    FC,
    MouseEvent,
    ReactNode,
    isValidElement,
    useId,
    useRef,
    useState,
} from "react";

import { emptyFn, getClassName, isNotNullish, isNullish } from "@bodynarf/utils";

import { getSizeClassName, getStyleClassName, mapDataAttributes } from "@bbr/utils";
import Icon from "@bbr/components/icon";

import "./style.scss";

import {
    DropzoneAcceptProps,
    DropzoneDragState,
    DropzoneIdleProps,
    DropzoneProps,
    DropzoneRejectProps,
} from "..";
import DropzoneAccept from "../components/accept";
import DropzoneIdle from "../components/idle";
import DropzoneReject from "../components/reject";

/** Default icon shown inside the drop area. */
const DEFAULT_ICON_NAME = "cloud-arrow-up";

/** Default main text shown inside the drop area. */
const DEFAULT_TEXT = "Drop files here or click to browse";

/**
 * Split an `accept` attribute value into normalized lower-cased tokens.
 * @param accept Raw `accept` attribute value (e.g. `"image/*,.pdf"`).
 * @returns Array of lower-cased tokens, or an empty array when no filter is set.
 */
const tokenizeAccept = (accept?: string): string[] => {
    if (isNullish(accept)) {
        return [];
    }

    return accept
        .split(",")
        .map(token => token.trim().toLowerCase())
        .filter(token => token.length > 0);
};

/**
 * Check whether a file matches the given accept tokens.
 * @param mimeType File MIME type (may be empty for extension-based tokens).
 * @param fileName File name (used for extension-based tokens).
 * @param tokens Normalized accept tokens from {@link tokenizeAccept}. Empty array means "accept everything".
 */
const matchesAccept = (mimeType: string, fileName: string, tokens: string[]): boolean => {
    if (tokens.length === 0) {
        return true;
    }

    const type = mimeType.toLowerCase();
    const name = fileName.toLowerCase();

    return tokens.some(token => {
        if (token === "*/*" || token === "*") {
            return true;
        }

        if (token.endsWith("/*")) {
            return type.startsWith(token.slice(0, -1));
        }

        if (token.startsWith(".")) {
            return name.endsWith(token);
        }

        return type === token;
    });
};

/**
 * Resolve the drag state from the dragged items against the accept tokens.
 * @param dataTransfer Current drag event data transfer (may be null).
 * @param tokens Normalized accept tokens.
 * @returns `"accept"` when every dragged file matches, `"reject"` otherwise (or `"idle"` when there are no files).
 */
const resolveDragState = (dataTransfer: DataTransfer | null, tokens: string[]): DropzoneDragState => {
    if (isNullish(dataTransfer)) {
        return "idle";
    }

    const fileItems = Array
        .from(dataTransfer.items)
        .filter(({ kind }) => kind === "file");

    if (fileItems.length === 0) {
        return "idle";
    }

    const allAccepted = fileItems.every(({ type }) => matchesAccept(type, "", tokens));

    return allAccepted ? "accept" : "reject";
};

/**
 * Collect accepted files from a file list, respecting the accept tokens.
 * @param fileList Native file list (from input change or drop).
 * @param tokens Normalized accept tokens. Empty array means "accept everything".
 */
const collectAccepted = (fileList: FileList, tokens: string[]): File[] => {
    const files = Array.from(fileList);

    if (tokens.length === 0) {
        return files;
    }

    return files.filter(({ type, name }) => matchesAccept(type, name, tokens));
};

/** Dropzone component for collecting files via drag-and-drop or click. */
const Dropzone: FC<DropzoneProps> = ({
    children,
    accept,
    disabled = false,
    size,
    style,
    name,
    multiple = false,
    text,
    description,
    onValueChange = emptyFn,

    className, title, data,
}) => {
    const [dragState, setDragState] = useState<DropzoneDragState>("idle");
    const dragCounterRef = useRef(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const autoId = useId();

    const tokens = tokenizeAccept(accept);
    const inputName = name ?? `bbr-dropzone-${autoId.replace(/:/g, "")}`;
    const dataAttributes = mapDataAttributes(data);

    const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const fileList = event.target.files;

        if (isNullish(fileList) || fileList.length === 0) {
            return;
        }

        const files = collectAccepted(fileList, tokens);

        if (files.length === 0) {
            return;
        }

        onValueChange(multiple ? files : files.slice(0, 1));

        event.target.value = "";
    };

    const onDragEnter = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();

        if (disabled) {
            return;
        }

        dragCounterRef.current += 1;

        setDragState(resolveDragState(event.dataTransfer, tokens));
    };

    const onDragOver = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();

        if (disabled) {
            return;
        }

        setDragState(resolveDragState(event.dataTransfer, tokens));
    };

    const onDragLeave = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();

        dragCounterRef.current = Math.max(0, dragCounterRef.current - 1);

        if (dragCounterRef.current === 0) {
            setDragState("idle");
        }
    };

    const onDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault();

        dragCounterRef.current = 0;
        setDragState("idle");

        if (disabled) {
            return;
        }

        const fileList = event.dataTransfer?.files;

        if (isNullish(fileList) || fileList.length === 0) {
            return;
        }

        const files = collectAccepted(fileList, tokens);

        if (files.length === 0) {
            return;
        }

        onValueChange(multiple ? files : files.slice(0, 1));
    };

    const onContainerClick = (event: MouseEvent<HTMLDivElement>) => {
        // ignore the bubbled click of the hidden input itself —
        // otherwise input.click() re-enters this handler in a loop
        // and the browser swallows the file dialog
        if (disabled || event.target === inputRef.current) {
            return;
        }

        inputRef.current?.click();
    };

    const containerClassName = getClassName([
        "bbr-dropzone",
        dragState === "accept" ? "is-drag-accept" : "",
        dragState === "reject" ? "is-drag-reject" : "",
        getSizeClassName(size),
        getStyleClassName(style),
        disabled ? "is-disabled" : "",
        className,
    ]);

    let idleContent: ReactNode = null;
    let acceptContent: ReactNode = null;
    let rejectContent: ReactNode = null;

    Children.forEach(children, child => {
        if (!isValidElement(child)) {
            return;
        }

        if (child.type === DropzoneIdle) {
            idleContent = (child.props as DropzoneIdleProps).children;
        } else if (child.type === DropzoneAccept) {
            acceptContent = (child.props as DropzoneAcceptProps).children;
        } else if (child.type === DropzoneReject) {
            rejectContent = (child.props as DropzoneRejectProps).children;
        }
    });

    const defaultContent = (
        <>
            <Icon
                size={size}
                name={DEFAULT_ICON_NAME}
            />
            <span className="bbr-dropzone__text">
                {text ?? DEFAULT_TEXT}
            </span>
            {isNotNullish(description)
                ? <span className="bbr-dropzone__description">
{description}
                  </span>
                : null
            }
        </>
    );

    const content =
        dragState === "accept"
            ? acceptContent ?? defaultContent
            : dragState === "reject"
                ? rejectContent ?? defaultContent
                : idleContent ?? defaultContent;

    return (
        <div
            {...dataAttributes}

            title={title}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onDragEnter={onDragEnter}
            onDragLeave={onDragLeave}
            onClick={onContainerClick}
            className={containerClassName}
        >
            {content}
            <input
                type="file"

                ref={inputRef}
                id={inputName}
                accept={accept}
                name={inputName}
                multiple={multiple}
                disabled={disabled}
                onChange={onInputChange}
                className="bbr-dropzone__input"
            />
        </div>
    );
};

export default Dropzone;
