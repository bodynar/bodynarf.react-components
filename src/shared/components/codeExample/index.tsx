import { FC, useCallback, useEffect, useState } from "react";

import { BundledLanguage } from "shiki";

import { Button, ButtonStyle } from "@bodynarf/react.components";

import { getHighlightedCode } from "./shikiResource";

import styles from "./styles.module.scss";

/** Props type of `CodeExample` */
type CodeExampleProps = {
    /** Code to highlight */
    code: string;

    /**
     * Highlight language
     * @default tsx
     */
    language?: BundledLanguage;

    /**
     * Hide language name
     * @default false
     */
    hideLanguage?: boolean;
};

/** Code example with highlight and copy button */
const CodeExample: FC<CodeExampleProps> = ({
    code,
    language = "tsx",
    hideLanguage = false,
}) => {
    const [isCopied, setIsCopied] = useState(false);
    const [, setTimerId] = useState<NodeJS.Timeout | undefined>();

    const onCopyBtnClick = useCallback(() => {
        window.navigator.clipboard
            .writeText(code)
            .then(() => setIsCopied(true));
    }, [code]);

    useEffect(() => {
        if (isCopied) {
            const timerId = setTimeout(() => {
                setIsCopied(false);
                setTimerId(x => {
                    clearTimeout(x);
                    return undefined;
                });
            }, 3000);

            setTimerId(timerId);
        }
    }, [isCopied]);

    // 🚀 Suspense here
    const codeInHtml = getHighlightedCode(code, language);

    return (
        <div className={styles["code-example"]}>
            {!hideLanguage && !isCopied &&
                <span className={`is-size-7 is-italic ${styles["lang-name"]}`}>
                    {language}
                </span>
            }

            {!isCopied &&
                <Button
                    style={ButtonStyle.Text}
                    icon={{ name: "clipboard" }}
                    onClick={onCopyBtnClick}
                    className={styles["copy-btn"]}
                    title={`Copy to clipboard ${language} code`}
                />
            }

            {!!isCopied &&
                <div className={styles["copied-block"]}>
                    <span className="is-size-7">
                        Copied!
                    </span>
                    <Button
                        style={ButtonStyle.Text}
                        icon={{ name: "clipboard-check" }}
                    />
                </div>
            }

            <div
                className={styles["code-container"]}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: codeInHtml }}
            />
        </div>
    );
};

export default CodeExample;
