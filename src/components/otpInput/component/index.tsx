import {
    ChangeEvent,
    ClipboardEvent,
    FC,
    KeyboardEvent,
    useCallback,
    useEffect,
    useRef,
} from "react";

import { getClassName } from "@bodynarf/utils";

import { ElementColor, ElementSize } from "@bbr/types";
import { getSizeClassName, mapDataAttributes } from "@bbr/utils";

import "./style.scss";

import { OtpInputProps } from "..";

/** One-time password / PIN input — a row of single-character cells */
const OtpInput: FC<OtpInputProps> = ({
    length = 6,
    value,
    onChange,
    type = "text",
    numbersOnly = true,
    autoFocus = false,
    disabled = false,
    color = ElementColor.Default,
    size = ElementSize.Normal,

    className, title, data,
}) => {
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

    const focusCell = useCallback((index: number) => {
        const el = inputsRef.current[Math.max(0, Math.min(index, length - 1))];
        el?.focus();
    }, [length]);

    const updateValue = useCallback((nextChars: string[]) => {
        onChange(nextChars.join(""));
    }, [onChange]);

    const handleChange = useCallback((index: number, e: ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value;
        const char = raw[raw.length - 1] ?? "";

        if (numbersOnly && char !== "" && !/^\d$/.test(char)) { return; }

        const next = Array.from({ length }, (_, i) => value[i] ?? "");
        next[index] = char;
        updateValue(next);

        if (char !== "" && index < length - 1) {
            focusCell(index + 1);
        }
    }, [length, value, numbersOnly, updateValue, focusCell]);

    const handleKeyDown = useCallback((index: number, e: KeyboardEvent<HTMLInputElement>) => {
        const currentChars = Array.from({ length }, (_, i) => value[i] ?? "");

        if (e.key === "Backspace") {
            if (currentChars[index] !== "") {
                const next = [...currentChars];
                next[index] = "";
                updateValue(next);
            } else if (index > 0) {
                const next = [...currentChars];
                next[index - 1] = "";
                updateValue(next);
                focusCell(index - 1);
            }
            e.preventDefault();
        } else if (e.key === "ArrowLeft") {
            focusCell(index - 1);
        } else if (e.key === "ArrowRight") {
            focusCell(index + 1);
        }
    }, [length, value, updateValue, focusCell]);

    const handlePaste = useCallback((index: number, e: ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pasted = e.clipboardData.getData("text");
        const filtered = (numbersOnly ? pasted.replace(/\D/g, "") : pasted).slice(0, length - index);
        if (!filtered) {
            return;
        }

        const next = Array.from({ length }, (_, i) => value[i] ?? "");

        for (let i = 0; i < filtered.length; i++) {
            if (index + i < length) {
                next[index + i] = filtered[i];
            }
        }

        updateValue(next);
        focusCell(Math.min(index + filtered.length, length - 1));
    }, [length, value, numbersOnly, updateValue, focusCell]);

    // Auto-focus first cell
    useEffect(() => {
        if (autoFocus) {
            inputsRef.current[0]?.focus();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const chars = Array.from({ length }, (_, i) => value[i] ?? "");

    const dataAttributes = mapDataAttributes(data);

    const colorClass = color !== ElementColor.Default ? `bbr-otp--color-${color}` : "";

    const elClassName = getClassName([
        "bbr-otp",
        getSizeClassName(size, ElementSize.Normal),
        colorClass,
        disabled ? "bbr-otp--disabled" : "",
        className,
    ]);

    return (
        <div
            {...dataAttributes}

            title={title}
            className={elClassName}
        >
            {chars.map((char, index) => (
                <input
                    key={index} // eslint-disable-line react/no-array-index-key

                    type={type}
                    value={char}
                    maxLength={2}
                    disabled={disabled}
                    autoComplete="one-time-code"
                    className="bbr-otp__cell input"
                    onPaste={e => handlePaste(index, e)}
                    onChange={e => handleChange(index, e)}
                    onKeyDown={e => handleKeyDown(index, e)}
                    inputMode={numbersOnly ? "numeric" : "text"}
                    pattern={numbersOnly ? "[0-9]*" : undefined}
                    ref={el => { inputsRef.current[index] = el; }}
                    onFocus={e => { if (type !== "password") { e.target.select(); } }}
                />
            ))}
        </div>
    );
};

export default OtpInput;
