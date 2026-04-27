import { FC, useCallback, useRef, useState } from "react";

import Button from "@bodynarf/react.components/components/button";
import ModalWrapperComponent from "@bodynarf/react.components/components/modal";
import { ButtonStyle, ElementSize } from "@bodynarf/react.components";
import ComponentUseCase from "@app/sharedComponents/useCase";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";
import Log, { LogRef } from "@app/sharedComponents/log";

/** ModalWrapper component demo */
const ModalWrapper: FC = () => {
    const [openModal, setOpenModal] = useState<string | null>(null);
    const closeModal = useCallback(() => setOpenModal(null), []);

    const actionsLogRef = useRef<LogRef>(null);
    const onCloseLogRef = useRef<LogRef>(null);
    const onEnterLogRef = useRef<LogRef>(null);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="ModalWrapper"
                version="1.14"
                baseTypeName="BaseElementProps"
                description={
                    <>
                        ModalWrapper - a modal window component for dialogs, confirmations, and forms.
                        <br />
                        Renders when included in JSX. Use conditional rendering to control visibility.
                    </>
                }
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Minimal configuration: component with onCloseClick handler and an action button. Use conditional rendering to show/hide."
                code={
                    <CodeExample
                        code={[
                            `import { useState, useCallback } from "react";`,
                            "",
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import ModalWrapper from "@bodynarf/react.components/components/modal";`,
                            "",
                            `const [isOpen, setIsOpen] = useState(false);`,
                            `const handleClose = useCallback(() => setIsOpen(false), []);`,
                            "",
                            `{isOpen ? (`,
                            `    <ModalWrapper`,
                            `        onCloseClick={handleClose}`,
                            `        actions={[{ caption: "Close", style: ButtonStyle.Light, onClick: handleClose }]}`,
                            `    >`,
                            `        <p>Modal content goes here</p>`,
                            `    </ModalWrapper>`,
                            `) : null}`,
                        ].join("\n")}
                    />
                }
            >
                <Button
                    style={ButtonStyle.Primary}
                    caption="Open Modal"
                    onClick={() => setOpenModal("minimal")}
                />
                {openModal === "minimal" ? (
                    <ModalWrapperComponent
                        onCloseClick={closeModal}
                        actions={[{ caption: "Close", style: ButtonStyle.Light, onClick: closeModal }]}
                    >
                        <p>Modal content goes here</p>
                    </ModalWrapperComponent>
                ) : null}
            </ComponentUseCase>

            <hr />
            <div><h4>Custom component props</h4></div>

            <ComponentUseCase
                captionIsCode
                caption="title"
                description="Modal window title rendered in the header. If not provided and no sub-component header is used, the header section is hidden."
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import ModalWrapper from "@bodynarf/react.components/components/modal";`,
                            "",
                            `{isOpen ? (`,
                            `    <ModalWrapper`,
                            `        title="Modal Title"`,
                            `        onCloseClick={handleClose}`,
                            `        actions={[{ caption: "Close", style: ButtonStyle.Light, onClick: handleClose }]}`,
                            `    >`,
                            `        <p>Modal with a title in the header</p>`,
                            `    </ModalWrapper>`,
                            `) : null}`,
                        ].join("\n")}
                    />
                }
            >
                <Button
                    style={ButtonStyle.Primary}
                    caption="Open Modal"
                    onClick={() => setOpenModal("title")}
                />
                {openModal === "title" ? (
                    <ModalWrapperComponent
                        title="Modal Title"
                        onCloseClick={closeModal}
                        actions={[{ caption: "Close", style: ButtonStyle.Light, onClick: closeModal }]}
                    >
                        <p>Modal with a title in the header</p>
                    </ModalWrapperComponent>
                ) : null}
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="actions"
                description="Action buttons rendered in the modal footer. Accepts an array of ButtonProps. Ignored when ModalWrapper.Footer sub-component is present."
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import ModalWrapper from "@bodynarf/react.components/components/modal";`,
                            "",
                            `{isOpen ? (`,
                            `    <ModalWrapper`,
                            `        title="Confirm Action"`,
                            `        onCloseClick={handleClose}`,
                            `        actions={[`,
                            `            { caption: "Cancel", style: ButtonStyle.Light, onClick: handleCancel },`,
                            `            { caption: "Confirm", style: ButtonStyle.Success, onClick: handleConfirm },`,
                            `        ]}`,
                            `    >`,
                            `        <p>Are you sure you want to proceed?</p>`,
                            `    </ModalWrapper>`,
                            `) : null}`,
                        ].join("\n")}
                    />
                }
            >
                <Button
                    style={ButtonStyle.Primary}
                    caption="Open Modal"
                    onClick={() => setOpenModal("actions")}
                />
                {openModal === "actions" ? (
                    <ModalWrapperComponent
                        title="Confirm Action"
                        onCloseClick={closeModal}
                        actions={[
                            {
                                caption: "Cancel",
                                style: ButtonStyle.Light,
                                onClick: () => {
                                    actionsLogRef.current?.append("Canceled");
                                    closeModal();
                                },
                            },
                            {
                                caption: "Confirm",
                                style: ButtonStyle.Success,
                                onClick: () => {
                                    actionsLogRef.current?.append("Confirmed");
                                    closeModal();
                                },
                            },
                        ]}
                    >
                        <p>Are you sure you want to proceed?</p>
                    </ModalWrapperComponent>
                ) : null}
                <Log ref={actionsLogRef} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="size"
                description="Modal window size. Accepts ElementSize values (Small, Normal, Medium, Large). Default is Normal."
                code={
                    <CodeExample
                        code={[
                            `import { ElementSize, ButtonStyle } from "@bodynarf/react.components";`,
                            `import ModalWrapper from "@bodynarf/react.components/components/modal";`,
                            "",
                            `{isOpen ? (`,
                            `    <ModalWrapper`,
                            `        title="Small Modal"`,
                            `        size={ElementSize.Small}`,
                            `        onCloseClick={handleClose}`,
                            `        actions={[{ caption: "Close", style: ButtonStyle.Light, onClick: handleClose }]}`,
                            `    >`,
                            `        <p>This is a small modal window</p>`,
                            `    </ModalWrapper>`,
                            `) : null}`,
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex" style={{ gap: "8px", flexWrap: "wrap" }}>
                    {([ElementSize.Small, ElementSize.Normal, ElementSize.Medium, ElementSize.Large] as const).map(size => (
                        <Button
                            key={size}
                            style={ButtonStyle.Primary}
                            caption={size.charAt(0).toUpperCase() + size.slice(1)}
                            onClick={() => setOpenModal(`size-${size}`)}
                        />
                    ))}
                </div>
                {([ElementSize.Small, ElementSize.Normal, ElementSize.Medium, ElementSize.Large] as const).map(size =>
                    openModal === `size-${size}` ? (
                        <ModalWrapperComponent
                            key={size}
                            title={`${size.charAt(0).toUpperCase() + size.slice(1)} Modal`}
                            size={size}
                            onCloseClick={closeModal}
                            actions={[{ caption: "Close", style: ButtonStyle.Light, onClick: closeModal }]}
                        >
                            <p>Modal with size: <code>{size}</code></p>
                        </ModalWrapperComponent>
                    ) : null
                )}
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="showCloseButton"
                description="Show the built-in close (×) button in the header. Default is true. Set to false to hide it."
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import ModalWrapper from "@bodynarf/react.components/components/modal";`,
                            "",
                            `{isOpen ? (`,
                            `    <ModalWrapper`,
                            `        title="No Close Button"`,
                            `        showCloseButton={false}`,
                            `        onCloseClick={handleClose}`,
                            `        actions={[{ caption: "Close", style: ButtonStyle.Light, onClick: handleClose }]}`,
                            `    >`,
                            `        <p>The × button in the header is hidden.</p>`,
                            `    </ModalWrapper>`,
                            `) : null}`,
                        ].join("\n")}
                    />
                }
            >
                <Button
                    style={ButtonStyle.Primary}
                    caption="Open Modal (showCloseButton: false)"
                    onClick={() => setOpenModal("showCloseButton")}
                />
                {openModal === "showCloseButton" ? (
                    <ModalWrapperComponent
                        title="No Close Button"
                        showCloseButton={false}
                        onCloseClick={closeModal}
                        actions={[{ caption: "Close", style: ButtonStyle.Light, onClick: closeModal }]}
                    >
                        <p>The × button in the header is hidden. Use the action button below to close.</p>
                    </ModalWrapperComponent>
                ) : null}
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="showMaximizeButton"
                description="Adds a maximize/restore button next to the close button in the header. Default is false."
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import ModalWrapper from "@bodynarf/react.components/components/modal";`,
                            "",
                            `{isOpen ? (`,
                            `    <ModalWrapper`,
                            `        title="Maximizable Modal"`,
                            `        showMaximizeButton`,
                            `        onCloseClick={handleClose}`,
                            `        actions={[{ caption: "Close", style: ButtonStyle.Light, onClick: handleClose }]}`,
                            `    >`,
                            `        <p>This modal can be maximized.</p>`,
                            `    </ModalWrapper>`,
                            `) : null}`,
                        ].join("\n")}
                    />
                }
            >
                <Button
                    style={ButtonStyle.Primary}
                    caption="Open Modal"
                    onClick={() => setOpenModal("showMaximizeButton")}
                />
                {openModal === "showMaximizeButton" ? (
                    <ModalWrapperComponent
                        title="Maximizable Modal"
                        showMaximizeButton
                        onCloseClick={closeModal}
                        actions={[{ caption: "Close", style: ButtonStyle.Light, onClick: closeModal }]}
                    >
                        <p>This modal can be maximized using the button in the header.</p>
                    </ModalWrapperComponent>
                ) : null}
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="closeOnBackgroundClick"
                description="Close the modal when clicking on the background overlay. Default is true. Set to false to prevent it."
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import ModalWrapper from "@bodynarf/react.components/components/modal";`,
                            "",
                            `{isOpen ? (`,
                            `    <ModalWrapper`,
                            `        title="Click outside — nothing happens"`,
                            `        closeOnBackgroundClick={false}`,
                            `        onCloseClick={handleClose}`,
                            `        actions={[{ caption: "Close", style: ButtonStyle.Light, onClick: handleClose }]}`,
                            `    >`,
                            `        <p>Clicking the overlay will not close this modal.</p>`,
                            `    </ModalWrapper>`,
                            `) : null}`,
                        ].join("\n")}
                    />
                }
            >
                <Button
                    style={ButtonStyle.Primary}
                    caption="Open Modal (closeOnBackgroundClick: false)"
                    onClick={() => setOpenModal("closeOnBackgroundClick")}
                />
                {openModal === "closeOnBackgroundClick" ? (
                    <ModalWrapperComponent
                        title="Click outside — nothing happens"
                        closeOnBackgroundClick={false}
                        onCloseClick={closeModal}
                        actions={[{ caption: "Close", style: ButtonStyle.Light, onClick: closeModal }]}
                    >
                        <p>Clicking the overlay will not close this modal. Use the action button.</p>
                    </ModalWrapperComponent>
                ) : null}
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="closeOnEscape"
                description="Close the modal on Escape key press. Default is true. Set to false to prevent it."
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import ModalWrapper from "@bodynarf/react.components/components/modal";`,
                            "",
                            `{isOpen ? (`,
                            `    <ModalWrapper`,
                            `        title="Escape key disabled"`,
                            `        closeOnEscape={false}`,
                            `        onCloseClick={handleClose}`,
                            `        actions={[{ caption: "Close", style: ButtonStyle.Light, onClick: handleClose }]}`,
                            `    >`,
                            `        <p>Pressing Escape will not close this modal.</p>`,
                            `    </ModalWrapper>`,
                            `) : null}`,
                        ].join("\n")}
                    />
                }
            >
                <Button
                    style={ButtonStyle.Primary}
                    caption="Open Modal (closeOnEscape: false)"
                    onClick={() => setOpenModal("closeOnEscape")}
                />
                {openModal === "closeOnEscape" ? (
                    <ModalWrapperComponent
                        title="Escape key disabled"
                        closeOnEscape={false}
                        onCloseClick={closeModal}
                        actions={[{ caption: "Close", style: ButtonStyle.Light, onClick: closeModal }]}
                    >
                        <p>Pressing Escape will not close this modal. Use the action button.</p>
                    </ModalWrapperComponent>
                ) : null}
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="closeLabel"
                description='Accessible label for the close (×) button. Default is "close".'
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import ModalWrapper from "@bodynarf/react.components/components/modal";`,
                            "",
                            `{isOpen ? (`,
                            `    <ModalWrapper`,
                            `        title="Custom close label"`,
                            `        closeLabel="Dismiss"`,
                            `        onCloseClick={handleClose}`,
                            `        actions={[{ caption: "Close", style: ButtonStyle.Light, onClick: handleClose }]}`,
                            `    >`,
                            `        <p>The close button has aria-label="Dismiss".</p>`,
                            `    </ModalWrapper>`,
                            `) : null}`,
                        ].join("\n")}
                    />
                }
            >
                <Button
                    style={ButtonStyle.Primary}
                    caption='Open Modal (closeLabel: "Dismiss")'
                    onClick={() => setOpenModal("closeLabel")}
                />
                {openModal === "closeLabel" ? (
                    <ModalWrapperComponent
                        title="Custom close label"
                        closeLabel="Dismiss"
                        onCloseClick={closeModal}
                        actions={[{ caption: "Close", style: ButtonStyle.Light, onClick: closeModal }]}
                    >
                        <p>The close button has <code>aria-label=&quot;Dismiss&quot;</code>.</p>
                    </ModalWrapperComponent>
                ) : null}
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="maximizeLabel"
                description='Accessible title for the maximize button when the modal is in normal state. Default is "Maximize". Requires showMaximizeButton.'
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import ModalWrapper from "@bodynarf/react.components/components/modal";`,
                            "",
                            `{isOpen ? (`,
                            `    <ModalWrapper`,
                            `        title="Custom maximize label"`,
                            `        showMaximizeButton`,
                            `        maximizeLabel="Expand"`,
                            `        onCloseClick={handleClose}`,
                            `        actions={[{ caption: "Close", style: ButtonStyle.Light, onClick: handleClose }]}`,
                            `    >`,
                            `        <p>Hover the maximize button to see the custom title.</p>`,
                            `    </ModalWrapper>`,
                            `) : null}`,
                        ].join("\n")}
                    />
                }
            >
                <Button
                    style={ButtonStyle.Primary}
                    caption='Open Modal (maximizeLabel: "Expand")'
                    onClick={() => setOpenModal("maximizeLabel")}
                />
                {openModal === "maximizeLabel" ? (
                    <ModalWrapperComponent
                        title="Custom maximize label"
                        showMaximizeButton
                        maximizeLabel="Expand"
                        onCloseClick={closeModal}
                        actions={[{ caption: "Close", style: ButtonStyle.Light, onClick: closeModal }]}
                    >
                        <p>Hover the maximize button to see <code>maximizeLabel=&quot;Expand&quot;</code>.</p>
                    </ModalWrapperComponent>
                ) : null}
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="restoreLabel"
                description='Accessible title for the maximize button when the modal is maximized. Default is "Restore". Requires showMaximizeButton.'
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import ModalWrapper from "@bodynarf/react.components/components/modal";`,
                            "",
                            `{isOpen ? (`,
                            `    <ModalWrapper`,
                            `        title="Custom restore label"`,
                            `        showMaximizeButton`,
                            `        restoreLabel="Collapse"`,
                            `        onCloseClick={handleClose}`,
                            `        actions={[{ caption: "Close", style: ButtonStyle.Light, onClick: handleClose }]}`,
                            `    >`,
                            `        <p>Maximize the modal, then hover the button to see the custom title.</p>`,
                            `    </ModalWrapper>`,
                            `) : null}`,
                        ].join("\n")}
                    />
                }
            >
                <Button
                    style={ButtonStyle.Primary}
                    caption='Open Modal (restoreLabel: "Collapse")'
                    onClick={() => setOpenModal("restoreLabel")}
                />
                {openModal === "restoreLabel" ? (
                    <ModalWrapperComponent
                        title="Custom restore label"
                        showMaximizeButton
                        restoreLabel="Collapse"
                        onCloseClick={closeModal}
                        actions={[{ caption: "Close", style: ButtonStyle.Light, onClick: closeModal }]}
                    >
                        <p>Maximize the modal, then hover the button to see <code>restoreLabel=&quot;Collapse&quot;</code>.</p>
                    </ModalWrapperComponent>
                ) : null}
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onCloseClick"
                description="Required handler called when the modal is closed — via the × button, Escape key, or background click."
                code={
                    <CodeExample
                        code={[
                            `import { useCallback } from "react";`,
                            "",
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import ModalWrapper from "@bodynarf/react.components/components/modal";`,
                            "",
                            `const handleClose = useCallback(() => {`,
                            `    // called on × button, Escape key, or background click`,
                            `    setIsOpen(false);`,
                            `}, []);`,
                            "",
                            `{isOpen ? (`,
                            `    <ModalWrapper`,
                            `        onCloseClick={handleClose}`,
                            `        actions={[{ caption: "Close", style: ButtonStyle.Light, onClick: handleClose }]}`,
                            `    >`,
                            `        <p>Close this modal to see the log entry.</p>`,
                            `    </ModalWrapper>`,
                            `) : null}`,
                        ].join("\n")}
                    />
                }
            >
                <Button
                    style={ButtonStyle.Primary}
                    caption="Open Modal"
                    onClick={() => setOpenModal("onCloseClick")}
                />
                {openModal === "onCloseClick" ? (
                    <ModalWrapperComponent
                        onCloseClick={() => {
                            onCloseLogRef.current?.append("onCloseClick fired");
                            closeModal();
                        }}
                        actions={[{
                            caption: "Close",
                            style: ButtonStyle.Light,
                            onClick: () => {
                                onCloseLogRef.current?.append("onCloseClick fired");
                                closeModal();
                            },
                        }]}
                    >
                        <p>Close this modal to see the log entry.</p>
                    </ModalWrapperComponent>
                ) : null}
                <Log ref={onCloseLogRef} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onEnterPress"
                description="Handler for Enter key press inside the modal. When not provided, the Enter key is not handled."
                code={
                    <CodeExample
                        code={[
                            `import { ButtonStyle } from "@bodynarf/react.components";`,
                            `import ModalWrapper from "@bodynarf/react.components/components/modal";`,
                            "",
                            `{isOpen ? (`,
                            `    <ModalWrapper`,
                            `        title="Press Enter"`,
                            `        onCloseClick={handleClose}`,
                            `        onEnterPress={handleConfirm}`,
                            `        actions={[`,
                            `            { caption: "Cancel", style: ButtonStyle.Light, onClick: handleClose },`,
                            `            { caption: "Confirm", style: ButtonStyle.Primary, onClick: handleConfirm },`,
                            `        ]}`,
                            `    >`,
                            `        <p>Press Enter to trigger onEnterPress.</p>`,
                            `    </ModalWrapper>`,
                            `) : null}`,
                        ].join("\n")}
                    />
                }
            >
                <Button
                    style={ButtonStyle.Primary}
                    caption="Open Modal"
                    onClick={() => setOpenModal("onEnterPress")}
                />
                {openModal === "onEnterPress" ? (
                    <ModalWrapperComponent
                        title="Press Enter"
                        onCloseClick={closeModal}
                        onEnterPress={() => {
                            onEnterLogRef.current?.append("onEnterPress fired");
                            closeModal();
                        }}
                        actions={[
                            { caption: "Cancel", style: ButtonStyle.Light, onClick: closeModal },
                            {
                                caption: "Confirm (or press Enter)",
                                style: ButtonStyle.Primary,
                                onClick: () => {
                                    onEnterLogRef.current?.append("onEnterPress fired");
                                    closeModal();
                                },
                            },
                        ]}
                    >
                        <p>Press Enter or click Confirm to trigger the handler.</p>
                    </ModalWrapperComponent>
                ) : null}
                <Log ref={onEnterLogRef} />
            </ComponentUseCase>

            <hr />
            <div><h4>Sub-components</h4></div>

            <ComponentUseCase
                caption="Header / Body / Footer sub-components"
                description="Use ModalWrapper.Header, ModalWrapper.Body, and ModalWrapper.Footer for full layout control. When present, they override the title prop and actions array respectively."
                code={
                    <CodeExample
                        code={[
                            `import ModalWrapper from "@bodynarf/react.components/components/modal";`,
                            "",
                            `{isOpen ? (`,
                            `    <ModalWrapper onCloseClick={handleClose}>`,
                            `        <ModalWrapper.Header>`,
                            `            <strong>Custom Header</strong>`,
                            `        </ModalWrapper.Header>`,
                            `        <ModalWrapper.Body>`,
                            `            <p>Rich modal body content goes here.</p>`,
                            `        </ModalWrapper.Body>`,
                            `        <ModalWrapper.Footer>`,
                            `            <button className="button is-light" onClick={handleClose}>Close</button>`,
                            `        </ModalWrapper.Footer>`,
                            `    </ModalWrapper>`,
                            `) : null}`,
                        ].join("\n")}
                    />
                }
            >
                <Button
                    style={ButtonStyle.Primary}
                    caption="Open Compound Modal"
                    onClick={() => setOpenModal("compound")}
                />
                {openModal === "compound" ? (
                    <ModalWrapperComponent onCloseClick={closeModal}>
                        <ModalWrapperComponent.Header>
                            <strong>Custom Header</strong>
                        </ModalWrapperComponent.Header>
                        <ModalWrapperComponent.Body>
                            <p>Rich modal body content goes here.</p>
                        </ModalWrapperComponent.Body>
                        <ModalWrapperComponent.Footer>
                            <button type="button" className="button is-light" onClick={closeModal}>Close</button>
                        </ModalWrapperComponent.Footer>
                    </ModalWrapperComponent>
                ) : null}
            </ComponentUseCase>

            <ComponentUseCase
                caption="Body only"
                description="Only ModalWrapper.Body — no header or footer sections are rendered."
                code={
                    <CodeExample
                        code={[
                            `import ModalWrapper from "@bodynarf/react.components/components/modal";`,
                            "",
                            `{isOpen ? (`,
                            `    <ModalWrapper onCloseClick={handleClose}>`,
                            `        <ModalWrapper.Body>`,
                            `            <p>Only body content, no header or footer.</p>`,
                            `        </ModalWrapper.Body>`,
                            `    </ModalWrapper>`,
                            `) : null}`,
                        ].join("\n")}
                    />
                }
            >
                <Button
                    style={ButtonStyle.Primary}
                    caption="Open Modal (Body only)"
                    onClick={() => setOpenModal("body-only")}
                />
                {openModal === "body-only" ? (
                    <ModalWrapperComponent onCloseClick={closeModal}>
                        <ModalWrapperComponent.Body>
                            <p>Only body content — no header or footer sections are rendered.</p>
                        </ModalWrapperComponent.Body>
                    </ModalWrapperComponent>
                ) : null}
            </ComponentUseCase>

            <ComponentUseCase
                caption="Body + Header"
                description="ModalWrapper.Body with ModalWrapper.Header — no footer section."
                code={
                    <CodeExample
                        code={[
                            `import ModalWrapper from "@bodynarf/react.components/components/modal";`,
                            "",
                            `{isOpen ? (`,
                            `    <ModalWrapper onCloseClick={handleClose}>`,
                            `        <ModalWrapper.Header>`,
                            `            <strong>Custom Header</strong>`,
                            `        </ModalWrapper.Header>`,
                            `        <ModalWrapper.Body>`,
                            `            <p>Body with a custom header, no footer.</p>`,
                            `        </ModalWrapper.Body>`,
                            `    </ModalWrapper>`,
                            `) : null}`,
                        ].join("\n")}
                    />
                }
            >
                <Button
                    style={ButtonStyle.Primary}
                    caption="Open Modal (Body + Header)"
                    onClick={() => setOpenModal("body-header")}
                />
                {openModal === "body-header" ? (
                    <ModalWrapperComponent onCloseClick={closeModal}>
                        <ModalWrapperComponent.Header>
                            <strong>Custom Header</strong>
                        </ModalWrapperComponent.Header>
                        <ModalWrapperComponent.Body>
                            <p>Body with a custom header — no footer section is rendered.</p>
                        </ModalWrapperComponent.Body>
                    </ModalWrapperComponent>
                ) : null}
            </ComponentUseCase>

            <ComponentUseCase
                caption="Body + Footer"
                description="ModalWrapper.Body with ModalWrapper.Footer — no header section."
                code={
                    <CodeExample
                        code={[
                            `import ModalWrapper from "@bodynarf/react.components/components/modal";`,
                            "",
                            `{isOpen ? (`,
                            `    <ModalWrapper onCloseClick={handleClose}>`,
                            `        <ModalWrapper.Body>`,
                            `            <p>Body with a custom footer, no header.</p>`,
                            `        </ModalWrapper.Body>`,
                            `        <ModalWrapper.Footer>`,
                            `            <button className="button is-light" onClick={handleClose}>Close</button>`,
                            `        </ModalWrapper.Footer>`,
                            `    </ModalWrapper>`,
                            `) : null}`,
                        ].join("\n")}
                    />
                }
            >
                <Button
                    style={ButtonStyle.Primary}
                    caption="Open Modal (Body + Footer)"
                    onClick={() => setOpenModal("body-footer")}
                />
                {openModal === "body-footer" ? (
                    <ModalWrapperComponent onCloseClick={closeModal}>
                        <ModalWrapperComponent.Body>
                            <p>Body with a custom footer — no header section is rendered.</p>
                        </ModalWrapperComponent.Body>
                        <ModalWrapperComponent.Footer>
                            <button type="button" className="button is-light" onClick={closeModal}>Close</button>
                        </ModalWrapperComponent.Footer>
                    </ModalWrapperComponent>
                ) : null}
            </ComponentUseCase>
        </section>
    );
};

export default ModalWrapper;
