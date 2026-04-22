import { FC, Ref, useImperativeHandle, useState } from "react";

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
            setLog(t => t ? `${t}\n${time} => ${message}` : `${time} => ${message}`);
        },
    }), []);

    if (!log) {
        return null;
    }

    return (
        <pre style={{
            fontSize: "0.75rem",
            color: "#666",
            maxHeight: "7.5rem",
            padding: "0.5rem 0.75rem",
            border: "1px solid #dbdbdb",
            borderRadius: "4px",
            marginTop: "1rem",
            overflowY: "auto",
            whiteSpace: "pre-wrap",
        }}
        >
            {log}
        </pre>
    );
};

export default Log;
