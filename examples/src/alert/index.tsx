import { FC, useState } from "react";

import Alert from "@bodynarf/react.components/components/alert";
import { ElementColor } from "@bodynarf/react.components";

/** All Alert component variations */
const AlertExamples: FC = () => {
    const [infoVisible,    setInfoVisible]    = useState(true);
    const [successVisible, setSuccessVisible] = useState(true);
    const [warningVisible, setWarningVisible] = useState(true);
    const [dangerVisible,  setDangerVisible]  = useState(true);

    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-3">Alert</h1>

                {/* ── Colors (no header) ────────────────────────────── */}
                <div className="box">
                    <p className="subtitle is-5">Colors — body only</p>
                    <p className="help mb-4">All <code>ElementColor</code> variants without a header.</p>

                    <Alert color={ElementColor.Default}>
                        <strong>Default</strong> — transparent / neutral alert.
                    </Alert>
                    <Alert color={ElementColor.Primary}>
                        <strong>Primary</strong> — main brand colour.
                    </Alert>
                    <Alert color={ElementColor.Link}>
                        <strong>Link</strong> — blue-violet accent.
                    </Alert>
                    <Alert color={ElementColor.Info}>
                        <strong>Info</strong> — sky-blue informational message.
                    </Alert>
                    <Alert color={ElementColor.Success}>
                        <strong>Success</strong> — operation completed successfully.
                    </Alert>
                    <Alert color={ElementColor.Warning}>
                        <strong>Warning</strong> — proceed with caution.
                    </Alert>
                    <Alert color={ElementColor.Danger}>
                        <strong>Danger</strong> — something went wrong.
                    </Alert>
                </div>

                {/* ── With header ───────────────────────────────────── */}
                <div className="box">
                    <p className="subtitle is-5">With header</p>
                    <p className="help mb-4">
                        The <code>header</code> prop renders a <code>.message-header</code> block.
                    </p>
                    <Alert color={ElementColor.Info} header="Information">
                        Your session will expire in 10 minutes. Please save your work.
                    </Alert>
                    <Alert color={ElementColor.Success} header="Done!">
                        The report has been exported and sent to your e-mail.
                    </Alert>
                    <Alert color={ElementColor.Warning} header="Warning">
                        You are about to leave without saving your changes.
                    </Alert>
                    <Alert color={ElementColor.Danger} header="Error">
                        Failed to connect to the server. Check your network connection and try again.
                    </Alert>
                </div>

                {/* ── Header without close button ────────────────────── */}
                <div className="box">
                    <p className="subtitle is-5">Header — closable: false</p>
                    <p className="help mb-4">
                        Set <code>{"closable={false}"}</code> to hide the × button.
                    </p>
                    <Alert color={ElementColor.Primary} header="Persistent notice" closable={false}>
                        This alert cannot be dismissed by the user.
                    </Alert>
                    <Alert color={ElementColor.Warning} header="Read-only warning" closable={false}>
                        The form is in read-only mode. Contact an administrator to make changes.
                    </Alert>
                </div>

                {/* ── Controlled visibility ─────────────────────────── */}
                <div className="box">
                    <p className="subtitle is-5">Controlled visibility</p>
                    <p className="help mb-4">
                        Use <code>onClose</code> to drive visibility from parent state.
                    </p>
                    <div className="mb-4">
                        <button
                            type="button"
                            className="button is-small"
                            onClick={() => {
                                setInfoVisible(true);
                                setSuccessVisible(true);
                                setWarningVisible(true);
                                setDangerVisible(true);
                            }}
                        >
                            Reset all
                        </button>
                    </div>
                    {infoVisible && (
                        <Alert color={ElementColor.Info} header="Info (closable)" onClose={() => setInfoVisible(false)}>
                            Dismiss this alert using the × button.
                        </Alert>
                    )}
                    {successVisible && (
                        <Alert color={ElementColor.Success} header="Success (closable)" onClose={() => setSuccessVisible(false)}>
                            Your changes have been saved.
                        </Alert>
                    )}
                    {warningVisible && (
                        <Alert color={ElementColor.Warning} header="Warning (closable)" onClose={() => setWarningVisible(false)}>
                            Disk usage is above 90%.
                        </Alert>
                    )}
                    {dangerVisible && (
                        <Alert color={ElementColor.Danger} header="Danger (closable)" onClose={() => setDangerVisible(false)}>
                            Your account has been locked. Contact support.
                        </Alert>
                    )}
                    {!infoVisible && !successVisible && !warningVisible && !dangerVisible && (
                        <p className="has-text-grey">All alerts dismissed.</p>
                    )}
                </div>

                {/* ── Rich content ───────────────────────────────────── */}
                <div className="box">
                    <p className="subtitle is-5">Rich body content</p>
                    <Alert color={ElementColor.Info} header="Deployment checklist">
                        <ul>
                            <li>✅ Run all unit tests</li>
                            <li>✅ Merge feature branch</li>
                            <li>⬜ Tag release <code>v2.4.0</code></li>
                            <li>⬜ Notify stakeholders</li>
                        </ul>
                    </Alert>
                </div>
            </div>
        </section>
    );
};

export default AlertExamples;
