import { FC, useState } from "react";

import {
    useClipboard,
    useComponentOutsideClick,
    useDebounce,
    useDebounceHandler,
    useEventListener,
    useFocus,
    useInterval,
    useKeyPress,
    useLocalStorage,
    useMount,
    usePrevious,
    useSessionStorage,
    useTimeout,
    useUnmount,
    useUpdateEffect,
    useWindowSize,
} from "@bodynarf/react.components";

/** Hooks examples */
const HooksExamples: FC = () => {
    // useMount / useUnmount
    const [mountLog, setMountLog] = useState<string[]>(["Component mounted ✅"]);
    useMount(() => setMountLog(prev => [...prev, "useMount fired"]));
    useUnmount(() => { /* fires on unmount */ });

    // usePrevious + useUpdateEffect
    const [counter, setCounter] = useState(0);
    const prevCounter = usePrevious(counter);
    const [updateCount, setUpdateCount] = useState(0);
    useUpdateEffect(() => { setUpdateCount(c => c + 1); }, [counter]);

    // useDebounce
    const [rawText, setRawText] = useState("");
    const debouncedText = useDebounce(rawText, 500);

    // useDebounceHandler — debounces a button click (no-arg async handler)
    const [reloaded, setReloaded] = useState(0);
    const [canReload, debounceReload] = useDebounceHandler(
        async () => { await new Promise<void>(r => setTimeout(r, 800)); setReloaded(n => n + 1); },
        3
    );

    // useTimeout — controlled via delay state
    const [toastVisible, setToastVisible] = useState(false);
    useTimeout(() => setToastVisible(false), toastVisible ? 3000 : null);

    // useInterval
    const [ticks, setTicks] = useState(0);
    const [intervalRunning, setIntervalRunning] = useState(false);
    useInterval(() => setTicks(t => t + 1), intervalRunning ? 1000 : null);

    // useLocalStorage
    const [storedName, setStoredName] = useLocalStorage("bbr-example-name", "Alice");

    // useSessionStorage
    const [sessionVal, setSessionVal] = useSessionStorage("bbr-session-demo", "session-initial");

    // useWindowSize
    const { width: winW, height: winH } = useWindowSize();

    // useComponentOutsideClick — uses a CSS selector
    const [dropOpen, setDropOpen] = useState(false);
    useComponentOutsideClick(".bbr-drop-demo", dropOpen, () => setDropOpen(false), true);

    // useEventListener — listens on window by default
    const [lastKey, setLastKey] = useState("(press a key)");
    useEventListener("keydown", (e: KeyboardEvent) => setLastKey(e.key));

    // useClipboard
    const { copy, copied } = useClipboard();

    // useKeyPress
    const isEscPressed = useKeyPress("Escape");

    // useFocus — returns [ref, isFocused]
    const [focusRef, isFocused] = useFocus<HTMLInputElement>();

    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-3">Hooks</h1>

                {/* useMount */}
                <div className="box">
                    <p className="subtitle is-5">useMount</p>
                    <p className="help mb-3">Callback fires once after the component mounts.</p>
                    <ul>
                        {mountLog.map((m, i) => <li key={i} className="is-size-7">{m}</li>)}
                    </ul>
                </div>

                {/* usePrevious + useUpdateEffect */}
                <div className="box">
                    <p className="subtitle is-5">usePrevious + useUpdateEffect</p>
                    <p className="help mb-3">
                        <code>usePrevious</code> tracks the previous value.
                        <code> useUpdateEffect</code> fires on updates but not on mount.
                    </p>
                    <div className="is-flex is-align-items-center" style={{ gap: "1rem" }}>
                        <button type="button" className="button is-small is-light" onClick={() => setCounter(c => c - 1)}>-</button>
                        <span className="is-size-5 has-text-weight-bold" style={{ minWidth: 32, textAlign: "center" }}>{counter}</span>
                        <button type="button" className="button is-small is-light" onClick={() => setCounter(c => c + 1)}>+</button>
                    </div>
                    <p className="help mt-2">Previous value: <strong>{prevCounter ?? "none"}</strong></p>
                    <p className="help">useUpdateEffect fired: <strong>{updateCount}</strong> time(s)</p>
                </div>

                {/* useDebounce */}
                <div className="box">
                    <p className="subtitle is-5">useDebounce (500 ms)</p>
                    <p className="help mb-3">Bottom text updates 500 ms after you stop typing.</p>
                    <input
                        className="input is-small"
                        style={{ maxWidth: 300 }}
                        value={rawText}
                        onChange={e => setRawText(e.target.value)}
                        placeholder="Type here..."
                    />
                    <p className="help mt-2">Debounced: <strong>{debouncedText || "(empty)"}</strong></p>
                </div>

                {/* useDebounceHandler */}
                <div className="box">
                    <p className="subtitle is-5">useDebounceHandler (3 s cooldown)</p>
                    <p className="help mb-3">
                        The button triggers an async action and then enters a 3-second cooldown.
                        Returns <code>[canFire, debouncedHandler]</code>.
                    </p>
                    <div className="is-flex is-align-items-center" style={{ gap: "1rem" }}>
                        <button
                            type="button"
                            className="button is-small is-primary is-light"
                            disabled={!canReload}
                            onClick={debounceReload}
                        >
                            {canReload ? "Reload data" : "Cooling down..."}
                        </button>
                        <span className="is-size-7 has-text-grey">Fired: <strong>{reloaded}</strong> time(s)</span>
                    </div>
                </div>

                {/* useTimeout */}
                <div className="box">
                    <p className="subtitle is-5">useTimeout (3 s)</p>
                    <p className="help mb-3">
                        Toast disappears automatically after 3 seconds.
                        The delay is set to <code>null</code> when hidden (disabling the timeout).
                    </p>
                    <button type="button" className="button is-small is-primary is-light" onClick={() => setToastVisible(true)} disabled={toastVisible}>
                        Show toast
                    </button>
                    {toastVisible && (
                        <div className="notification is-success is-light mt-3" style={{ maxWidth: 320 }}>
                            Auto-dismissing in 3 s...
                            <button type="button" className="delete" onClick={() => setToastVisible(false)} />
                        </div>
                    )}
                </div>

                {/* useInterval */}
                <div className="box">
                    <p className="subtitle is-5">useInterval (1 s)</p>
                    <p className="help mb-3">Pass <code>null</code> to pause, a number (ms) to run.</p>
                    <div className="is-flex is-align-items-center" style={{ gap: "1rem" }}>
                        <button
                            type="button"
                            className={`button is-small ${intervalRunning ? "is-danger is-light" : "is-success is-light"}`}
                            onClick={() => setIntervalRunning(r => !r)}
                        >
                            {intervalRunning ? "Stop" : "Start"}
                        </button>
                        <span className="is-size-5 has-text-weight-bold">{ticks}</span>
                        <button type="button" className="button is-small is-light" onClick={() => setTicks(0)}>Reset</button>
                    </div>
                </div>

                {/* useLocalStorage */}
                <div className="box">
                    <p className="subtitle is-5">useLocalStorage</p>
                    <p className="help mb-3">
                        Persisted under <code>bbr-example-name</code>. Refresh the page to see it survive.
                    </p>
                    <input
                        className="input is-small"
                        style={{ maxWidth: 300 }}
                        value={storedName}
                        onChange={e => setStoredName(e.target.value)}
                        placeholder="Enter name..."
                    />
                    <p className="help mt-1">Stored: <strong>{storedName}</strong></p>
                </div>

                {/* useSessionStorage */}
                <div className="box">
                    <p className="subtitle is-5">useSessionStorage</p>
                    <p className="help mb-3">Cleared when the tab closes.</p>
                    <input
                        className="input is-small"
                        style={{ maxWidth: 300 }}
                        value={sessionVal}
                        onChange={e => setSessionVal(e.target.value)}
                    />
                    <p className="help mt-1">Session value: <strong>{sessionVal}</strong></p>
                </div>

                {/* useWindowSize */}
                <div className="box">
                    <p className="subtitle is-5">useWindowSize</p>
                    <p className="help mb-3">Reactively tracks the viewport. Try resizing.</p>
                    <p className="is-family-monospace is-size-6">{winW} × {winH}</p>
                </div>

                {/* useComponentOutsideClick */}
                <div className="box">
                    <p className="subtitle is-5">useComponentOutsideClick</p>
                    <p className="help mb-3">
                        Uses a CSS selector (<code>.bbr-drop-demo</code>) to detect outside clicks.
                        Click outside the dropdown to close it.
                    </p>
                    <div className="bbr-drop-demo" style={{ display: "inline-block", position: "relative" }}>
                        <button
                            type="button"
                            className="button is-small is-light"
                            onClick={() => setDropOpen(o => !o)}
                        >
                            {dropOpen ? "Close dropdown" : "Open dropdown"}
                        </button>
                        {dropOpen && (
                            <div
                                style={{
                                    position: "absolute",
                                    top: "100%",
                                    left: 0,
                                    marginTop: 4,
                                    background: "#fff",
                                    border: "1px solid #dbdbdb",
                                    borderRadius: 4,
                                    padding: "0.5rem",
                                    zIndex: 10,
                                    minWidth: 160,
                                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                                }}
                            >
                                <p className="is-size-7">I close on outside click</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* useEventListener */}
                <div className="box">
                    <p className="subtitle is-5">useEventListener</p>
                    <p className="help mb-3">Listens to <code>keydown</code> on the window.</p>
                    <p>Last key pressed: <strong className="is-family-monospace">{lastKey}</strong></p>
                </div>

                {/* useClipboard */}
                <div className="box">
                    <p className="subtitle is-5">useClipboard</p>
                    <p className="help mb-3">Writes text to the clipboard. <code>copied</code> resets after 2 s.</p>
                    <div className="is-flex is-align-items-center" style={{ gap: "0.75rem" }}>
                        <button
                            type="button"
                            className={`button is-small ${copied ? "is-success is-light" : "is-light"}`}
                            onClick={() => copy("Hello from BBR components!")}
                        >
                            {copied ? "Copied! ✓" : "Copy to clipboard"}
                        </button>
                        <span className="is-size-7 has-text-grey">Copies: "Hello from BBR components!"</span>
                    </div>
                </div>

                {/* useKeyPress */}
                <div className="box">
                    <p className="subtitle is-5">useKeyPress</p>
                    <p className="help mb-3">Detects if the Escape key is currently held down.</p>
                    <p>
                        Escape pressed:{" "}
                        <span className={`tag ${isEscPressed ? "is-danger" : "is-light"}`}>
                            {isEscPressed ? "YES" : "no"}
                        </span>
                    </p>
                </div>

                {/* useFocus */}
                <div className="box">
                    <p className="subtitle is-5">useFocus</p>
                    <p className="help mb-3">Returns <code>[ref, isFocused]</code> tuple. Attach ref to target element.</p>
                    <div className="is-flex is-align-items-center" style={{ gap: "0.75rem" }}>
                        <input
                            ref={focusRef}
                            className="input is-small"
                            style={{ maxWidth: 200 }}
                            placeholder="Click here..."
                        />
                        <span className={`tag ${isFocused ? "is-primary" : "is-light"}`}>
                            {isFocused ? "focused" : "blurred"}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HooksExamples;
