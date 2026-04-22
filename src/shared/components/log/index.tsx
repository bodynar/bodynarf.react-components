import { Button, ButtonStyle, ElementSize } from "@bodynarf/react.components";
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
        <div style={{ position: "relative", marginTop: "1rem", border: "1px solid #dbdbdb", borderRadius: "4px" }}>
            <div style={{ position: "absolute", top: "0.25rem", right: "0.85rem", zIndex: 1 }}>
                <Button
                    title="Clear log"
                    style={ButtonStyle.Ghost}
                    onClick={() => setLog("")}
                    className="has-text-danger"
                    icon={{ name: "trash", size: ElementSize.Medium }}
                />
            </div>
            <pre style={{
                fontSize: "0.75rem",
                color: "#666",
                maxHeight: "7.5rem",
                padding: "0.5rem 2.25rem 0.5rem 0.75rem",
                margin: 0,
                overflowY: "auto",
                whiteSpace: "pre-wrap",
            }}
            >
                {log}
            </pre>
        </div>
    );
};

export default Log;
