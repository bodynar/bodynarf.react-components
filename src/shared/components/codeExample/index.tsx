import { FC, useCallback } from "react";

import { BundledLanguage } from "shiki";

import { Button, ButtonStyle } from "@bodynarf/react.components";
import { useClipboard } from "@bodynarf/react.components/hooks";

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
    const { copy, copied } = useClipboard(3000);

    const onCopyBtnClick = useCallback(() => {
        copy(code);
    }, [copy, code]);

    // 🚀 Suspense here
    const codeInHtml = getHighlightedCode(code, language);

    return (
        <div className={styles["code-example"]}>
            {!hideLanguage && !copied &&
                <span className={`is-size-7 is-italic ${styles["lang-name"]}`}>
                    {language}
                </span>
            }

            {!copied &&
                <Button
                    style={ButtonStyle.Text}
                    icon={{ name: "clipboard" }}
                    onClick={onCopyBtnClick}
                    className={styles["copy-btn"]}
                    title={`Copy to clipboard ${language} code`}
                />
            }

            {!!copied &&
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
