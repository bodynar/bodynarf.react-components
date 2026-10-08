import { FC, useState } from "react";

import Toast from "@bodynarf/react.components/components/toast";
import Button from "@bodynarf/react.components/components/button";
import { ButtonStyle, ElementColor, ElementPosition } from "@bodynarf/react.components";

type ToastConfig = {
    id: number;
    color?: ElementColor;
    closable?: boolean;
    autoClose?: number;
    fixed?: boolean;
    position?: typeof ElementPosition.Left | typeof ElementPosition.Right;
};

const ToastExamples: FC = () => {
    const [toasts, setToasts] = useState<Array<ToastConfig>>([]);
    let seq = 0;

    const add = (config: Omit<ToastConfig, "id">) =>
        setToasts(prev => [...prev, { ...config, id: ++seq }]);

    const remove = (id: number) =>
        setToasts(prev => prev.filter(t => t.id !== id));

    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-3">Toast</h1>

                {/* Inline toasts (not fixed) */}
                <div className="box">
                    <p className="subtitle is-5">Inline Toasts</p>

                    <div className="buttons mb-4">
                        <Button style={ButtonStyle.Default}  caption="Default"  onClick={() => add({ color: ElementColor.Default })} />
                        <Button style={ButtonStyle.Primary}  caption="Primary"  onClick={() => add({ color: ElementColor.Primary })} />
                        <Button style={ButtonStyle.Info}     caption="Info"     onClick={() => add({ color: ElementColor.Info })} />
                        <Button style={ButtonStyle.Success}  caption="Success"  onClick={() => add({ color: ElementColor.Success })} />
                        <Button style={ButtonStyle.Warning}  caption="Warning"  onClick={() => add({ color: ElementColor.Warning })} />
                        <Button style={ButtonStyle.Danger}   caption="Danger"   onClick={() => add({ color: ElementColor.Danger })} />
                    </div>

                    {toasts.filter(t => !t.fixed).map(t => (
                        <Toast
                            key={t.id}
                            color={t.color}
                            closable
                            onClose={() => remove(t.id)}
                        >
                            Toast notification ({t.color ?? "default"})
                        </Toast>
                    ))}
                </div>

                {/* Closable */}
                <div className="box">
                    <p className="subtitle is-5">Closable vs Non-closable</p>
                    <Toast color={ElementColor.Info} closable onClose={() => {}}>
                        This toast has a close button. Click X to dismiss.
                    </Toast>
                    <Toast color={ElementColor.Warning}>
                        This toast has no close button.
                    </Toast>
                </div>

                {/* Auto-close */}
                <div className="box">
                    <p className="subtitle is-5">Auto-close</p>
                    <Button
                        style={ButtonStyle.Info}
                        caption="Show auto-close toast (3s)"
                        onClick={() => add({ color: ElementColor.Info, closable: true, autoClose: 3000 })}
                    />
                    {toasts.filter(t => t.autoClose).map(t => (
                        <Toast
                            key={t.id}
                            color={t.color}
                            closable
                            autoClose={t.autoClose}
                            onClose={() => remove(t.id)}
                        >
                            This will auto-close in {t.autoClose! / 1000} seconds.
                        </Toast>
                    ))}
                </div>

                {/* Rich content */}
                <div className="box">
                    <p className="subtitle is-5">Rich Content</p>
                    <Toast color={ElementColor.Success}>
                        <strong>Upload complete!</strong>
                        <br />
                        <span>Your file <code>document.pdf</code> (2.4 MB) has been uploaded successfully.</span>
                    </Toast>
                    <Toast color={ElementColor.Danger}>
                        <strong>Error 403</strong>
                        <br />
                        <span>You are not authorized to perform this action. Contact your administrator.</span>
                    </Toast>
                </div>
            </div>
        </section>
    );
};

export default ToastExamples;
