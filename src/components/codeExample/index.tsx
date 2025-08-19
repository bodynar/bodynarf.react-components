import { FC, useEffect, useState } from "react";

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

    useEffect(() => {
        if (!isNullOrEmpty(code)) {
            codeToHtml(code, {
                lang: language,
                theme: "one-light"
            }).then(setCodeInHtml);
        }
    }, [code]);

    return (
        <div className={styles["code-example"]}>
            {!!!hideLanguage &&
                <span
                    className={`is-size-7 is-italic ${styles["lang-name"]}`}
                >
                    {language}
                </span>
            }
            <Button
                type="text"
                icon={{ name: "copy" }}
                className={styles["copy-btn"]}
                title={`Copy to clipboard ${language} code`}
            />
            <div
                className={styles["code-container"]}
                dangerouslySetInnerHTML={{
                    __html: codeInHtml
                }} />
        </div>
    );
};

export default CodeExample;
