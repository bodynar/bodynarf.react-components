import { FC, useState } from "react";

import ConfirmDialog from "@bodynarf/react.components/components/confirmDialog";
import { ElementColor } from "@bodynarf/react.components";

/** All ConfirmDialog component variations */
const ConfirmDialogExamples: FC = () => {
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);
    const [visible5, setVisible5] = useState(false);
    const [loading,  setLoading]  = useState(false);
    const [result,   setResult]   = useState("");

    const handleAsyncConfirm = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setVisible5(false);
            setResult("Async confirm finished!");
        }, 2000);
    };

    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-3">ConfirmDialog</h1>

                {result && (
                    <div className="notification is-success is-light mb-4">
                        {result}
                        <button type="button" className="delete" onClick={() => setResult("")} />
                    </div>
                )}

                {/* Default */}
                <div className="box">
                    <p className="subtitle is-5">Default</p>
                    <p className="help mb-4">Default title, Danger confirm button, exclamation-triangle icon.</p>
                    <button type="button" className="button is-danger is-light" onClick={() => setVisible1(true)}>
                        Delete item
                    </button>
                    <ConfirmDialog
                        visible={visible1}
                        onConfirm={() => { setVisible1(false); setResult("Item deleted!"); }}
                        onCancel={() => setVisible1(false)}
                    />
                </div>

                {/* Custom title / message */}
                <div className="box">
                    <p className="subtitle is-5">Custom title, message and labels</p>
                    <button type="button" className="button is-warning is-light" onClick={() => setVisible2(true)}>
                        Archive record
                    </button>
                    <ConfirmDialog
                        visible={visible2}
                        title="Archive this record?"
                        message="The record will be moved to the archive and will no longer appear in searches."
                        confirmLabel="Yes, archive"
                        cancelLabel="Never mind"
                        confirmColor={ElementColor.Warning}
                        icon="archive"
                        onConfirm={() => { setVisible2(false); setResult("Record archived!"); }}
                        onCancel={() => setVisible2(false)}
                    />
                </div>

                {/* Different confirm colors */}
                <div className="box">
                    <p className="subtitle is-5">Confirm color variants</p>
                    <div className="buttons">
                        <button type="button" className="button is-success is-light" onClick={() => setVisible3(true)}>
                            Success confirm
                        </button>
                    </div>
                    <ConfirmDialog
                        visible={visible3}
                        title="Publish changes?"
                        message="This will make all changes visible to users."
                        confirmLabel="Publish"
                        confirmColor={ElementColor.Success}
                        icon="cloud-upload"
                        onConfirm={() => { setVisible3(false); setResult("Published!"); }}
                        onCancel={() => setVisible3(false)}
                    />
                </div>

                {/* Cancellable (no outside-click close) */}
                <div className="box">
                    <p className="subtitle is-5">cancellable=false</p>
                    <p className="help mb-4">
                        Clicking outside or pressing Escape does <strong>not</strong> close the dialog.
                    </p>
                    <button type="button" className="button is-info is-light" onClick={() => setVisible4(true)}>
                        Non-dismissible dialog
                    </button>
                    <ConfirmDialog
                        visible={visible4}
                        title="Are you absolutely sure?"
                        message="You must explicitly choose an action."
                        cancellable
                        onConfirm={() => { setVisible4(false); setResult("Confirmed via button!"); }}
                        onCancel={() => setVisible4(false)}
                    />
                </div>

                {/* Async loading */}
                <div className="box">
                    <p className="subtitle is-5">isLoading — async confirm</p>
                    <p className="help mb-4">Buttons are disabled while <code>isLoading</code> is true.</p>
                    <button type="button" className="button is-primary is-light" onClick={() => setVisible5(true)}>
                        Save with async
                    </button>
                    <ConfirmDialog
                        visible={visible5}
                        title="Save changes?"
                        message="This will overwrite the current version. The operation takes ~2 seconds."
                        confirmLabel="Save"
                        confirmColor={ElementColor.Primary}
                        isLoading={loading}
                        cancellable={loading}
                        onConfirm={handleAsyncConfirm}
                        onCancel={() => setVisible5(false)}
                    />
                </div>

                {/* Rich message */}
                <div className="box">
                    <p className="subtitle is-5">Rich ReactNode message</p>
                    <p className="help mb-4"><code>message</code> accepts any React content.</p>
                    <button type="button" className="button is-danger is-light" onClick={() => setVisible1(true)}>
                        Reset database
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ConfirmDialogExamples;
