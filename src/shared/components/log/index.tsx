import { Button, ButtonStyle, ElementSize } from "@bodynarf/react.components";
import { FC, Ref, useImperativeHandle, useState } from "react";

import styles from "./styles.module.scss";

/** Public API exposed via ref */
export type LogRef = {
    /** Append a timestamped message to the log */
    append: (message: string) => void;
};

/** Props for the Log component */
type LogProps = {
    /** Ref to access the log's public API */
    ref?: Ref<LogRef>;
};

/** Multiline log output panel with internal state */
const Log: FC<LogProps> = ({ ref }: LogProps) => {
    const [log, setLog] = useState("");

    useImperativeHandle(ref, () => ({
        append: (message: string) => {
            const ts = new Date();
            const time = `${ts.getHours()}:${ts.getMinutes()}:${ts.getMilliseconds()}`;

            setLog(t => t ? `${time} => ${message}\n${t}` : `${time} => ${message}`);
        },
    }), []);

    if (!log) {
        return null;
    }

    return (
        <div className={styles.container}>
            <div className={styles.clearButton}>
                <Button
                    title="Clear log"
                    style={ButtonStyle.Ghost}
                    onClick={() => setLog("")}
                    className="has-text-danger"
                    icon={{ name: "trash", size: ElementSize.Medium }}
                />
            </div>
            <pre className={styles.output}>
                {log}
            </pre>
        </div>
    );
};

export default Log;
