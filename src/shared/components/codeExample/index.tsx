import { FC, useCallback, useEffect, useState } from "react";

import { BundledLanguage, codeToHtml } from "shiki";

import { isNullOrEmpty } from "@bodynarf/utils";
import Button from "@bodynarf/react.components/components/button";

import styles from "./styles.module.scss";

/** Props type of `CodeExample` */
type CodeExampleProps = {
    /** Code to highlight */
    code: string;

    /** Highlight language */
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
    language = "tsx", hideLanguage = false,
}) => {
    const [codeInHtml, setCodeInHtml] = useState("");
    const [isCopied, setIsCopied] = useState(false);
    const [, setTimerId] = useState<NodeJS.Timeout | undefined>();

    const onCopyBtnClick = useCallback(
        () => {
            window.navigator.clipboard
                .writeText(code)
                .then(() => setIsCopied(true));
        },
        []
    );

    useEffect(() => {
        if (!isNullOrEmpty(code)) {
            codeToHtml(code, {
                lang: language,
                theme: "one-light"
            }).then(setCodeInHtml);
        }
    }, [code]);

    useEffect(
        () => {
            if (isCopied) {
                const timerId = setTimeout(
                    () => {
                        setIsCopied(false);

                        setTimerId(x => {
                            clearTimeout(x);
                            return undefined;
                        });
                    },
                    3 * 1000
                );

                setTimerId(timerId);
            }
        },
        [isCopied]
    );

    return (
        <div className={styles["code-example"]}>
            {!!!hideLanguage && !isCopied &&
                <span
                    className={`is-size-7 is-italic ${styles["lang-name"]}`}
                >
                    {language}
                </span>
            }
            {!isCopied &&
                <Button
                    type="text"
                    icon={{ name: "clipboard" }}
                    onClick={onCopyBtnClick}
                    className={styles["copy-btn"]}
                    title={`Copy to clipboard ${language} code`}
                />
            }
            {isCopied &&
                <div className={styles["copied-block"]}>
                    <span className="is-size-7">Copied!</span>
                    <Button
                        type="text"
                        icon={{ name: "clipboard-check" }}
                    />
                </div>
            }
            <div
                className={styles["code-container"]}
                dangerouslySetInnerHTML={{
                    __html: codeInHtml
                }} />
        </div>
    );
};

export default CodeExample;
