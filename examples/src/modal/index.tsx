import { FC, useState } from "react";

import Modal from "@bodynarf/react.components/components/modal";
import Button from "@bodynarf/react.components/components/button";
import { ButtonStyle, ElementSize } from "@bodynarf/react.components";

const ModalExamples: FC = () => {
    const [basic, setBasic]           = useState(false);
    const [withFooter, setWithFooter] = useState(false);
    const [small, setSmall]           = useState(false);
    const [medium, setMedium]         = useState(false);
    const [large, setLarge]           = useState(false);
    const [noClose, setNoClose]       = useState(false);
    const [bgClose, setBgClose]       = useState(false);
    const [compound, setCompound]     = useState(false);

    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-3">Modal</h1>

                {/* Basic */}
                <div className="box">
                    <p className="subtitle is-5">Basic (title + actions)</p>
                    <Button style={ButtonStyle.Primary} caption="Open basic modal" onClick={() => setBasic(true)} />
                    {basic && (
                        <Modal
                            title="Basic Modal"
                            onCloseClick={() => setBasic(false)}
                            actions={[
                                { style: ButtonStyle.Primary, caption: "OK",     onClick: () => setBasic(false) },
                                { style: ButtonStyle.Default, caption: "Cancel", onClick: () => setBasic(false) },
                            ]}
                        >
                            <p>This is the modal body content. You can put any React nodes here.</p>
                        </Modal>
                    )}
                </div>

                {/* With footer compound */}
                <div className="box">
                    <p className="subtitle is-5">Compound Header/Body/Footer</p>
                    <Button style={ButtonStyle.Info} caption="Open compound modal" onClick={() => setCompound(true)} />
                    {compound && (
                        <Modal onCloseClick={() => setCompound(false)}>
                            <Modal.Header>
                                <strong>Custom Header</strong>
                            </Modal.Header>
                            <Modal.Body>
                                <p>Using compound <code>Modal.Header</code>, <code>Modal.Body</code>, and <code>Modal.Footer</code> for full control.</p>
                                <br />
                                <p>This is a separate paragraph in the modal body.</p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button style={ButtonStyle.Success} caption="Confirm"  onClick={() => setCompound(false)} />
                                <Button style={ButtonStyle.Default} caption="Dismiss"  onClick={() => setCompound(false)} />
                            </Modal.Footer>
                        </Modal>
                    )}
                </div>

                {/* Sizes */}
                <div className="box">
                    <p className="subtitle is-5">Sizes</p>
                    <div className="buttons">
                        <Button style={ButtonStyle.Default} caption="Small"  onClick={() => setSmall(true)} />
                        <Button style={ButtonStyle.Default} caption="Medium" onClick={() => setMedium(true)} />
                        <Button style={ButtonStyle.Default} caption="Large"  onClick={() => setLarge(true)} />
                    </div>
                    {small && (
                        <Modal
                            title="Small Modal"
                            size={ElementSize.Small}
                            onCloseClick={() => setSmall(false)}
                            actions={[{ style: ButtonStyle.Primary, caption: "Close", onClick: () => setSmall(false) }]}
                        >
                            <p>A small-sized modal dialog.</p>
                        </Modal>
                    )}
                    {medium && (
                        <Modal
                            title="Medium Modal"
                            size={ElementSize.Medium}
                            onCloseClick={() => setMedium(false)}
                            actions={[{ style: ButtonStyle.Primary, caption: "Close", onClick: () => setMedium(false) }]}
                        >
                            <p>A medium-sized modal dialog.</p>
                        </Modal>
                    )}
                    {large && (
                        <Modal
                            title="Large Modal"
                            size={ElementSize.Large}
                            onCloseClick={() => setLarge(false)}
                            actions={[{ style: ButtonStyle.Primary, caption: "Close", onClick: () => setLarge(false) }]}
                        >
                            <p>A large-sized modal dialog.</p>
                        </Modal>
                    )}
                </div>

                {/* Close on backdrop */}
                <div className="box">
                    <p className="subtitle is-5">Close on Background Click</p>
                    <Button style={ButtonStyle.Warning} caption="Open (click backdrop to close)" onClick={() => setBgClose(true)} />
                    {bgClose && (
                        <Modal
                            title="Click outside to close"
                            closeOnBackgroundClick
                            onCloseClick={() => setBgClose(false)}
                            actions={[{ style: ButtonStyle.Default, caption: "Close", onClick: () => setBgClose(false) }]}
                        >
                            <p>Click the dark backdrop area to close this modal.</p>
                        </Modal>
                    )}
                </div>

                {/* Close button hidden */}
                <div className="box">
                    <p className="subtitle is-5">No Close Button</p>
                    <Button style={ButtonStyle.Danger} caption="Open (no X button)" onClick={() => setNoClose(true)} />
                    {noClose && (
                        <Modal
                            title="No close button"
                            showCloseButton={false}
                            onCloseClick={() => setNoClose(false)}
                            actions={[{ style: ButtonStyle.Danger, caption: "Close via action", onClick: () => setNoClose(false) }]}
                        >
                            <p>This modal hides the default X close button. Use the action button below to close.</p>
                        </Modal>
                    )}
                </div>

                {/* With footer only */}
                <div className="box">
                    <p className="subtitle is-5">Form in Modal</p>
                    <Button style={ButtonStyle.Success} caption="Open form modal" onClick={() => setWithFooter(true)} />
                    {withFooter && (
                        <Modal
                            title="Edit User"
                            onCloseClick={() => setWithFooter(false)}
                            actions={[
                                { style: ButtonStyle.Success, caption: "Save",   onClick: () => setWithFooter(false) },
                                { style: ButtonStyle.Default, caption: "Cancel", onClick: () => setWithFooter(false) },
                            ]}
                        >
                            <div className="field">
                                <label className="label">Name</label>
                                <div className="control">
                                    <input className="input" type="text" placeholder="Jane Smith" />
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control">
                                    <input className="input" type="email" placeholder="jane@example.com" />
                                </div>
                            </div>
                        </Modal>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ModalExamples;
