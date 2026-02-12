import { FC, useCallback, useState } from "react";

import { Button, ButtonStyle, ModalWrapper as ModalWrapperComponent, ElementSize } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";

/** ModalWrapper component demo */
const ModalWrapper: FC = () => {
    const [isMinimalOpen, setIsMinimalOpen] = useState(false);
    const [isWithTitleOpen, setIsWithTitleOpen] = useState(false);
    const [isWithActionsOpen, setIsWithActionsOpen] = useState(false);
    const [isSmallOpen, setIsSmallOpen] = useState(false);
    const [isLargeOpen, setIsLargeOpen] = useState(false);
    const [isCloseOptionsOpen, setIsCloseOptionsOpen] = useState(false);
    const [isOnEnterOpen, setIsOnEnterOpen] = useState(false);

    const handleMinimalClose = useCallback(() => setIsMinimalOpen(false), []);
    const handleWithTitleClose = useCallback(() => setIsWithTitleOpen(false), []);
    const handleWithActionsClose = useCallback(() => setIsWithActionsOpen(false), []);
    const handleSmallClose = useCallback(() => setIsSmallOpen(false), []);
    const handleLargeClose = useCallback(() => setIsLargeOpen(false), []);
    const handleCloseOptionsClose = useCallback(() => setIsCloseOptionsOpen(false), []);
    const handleOnEnterClose = useCallback(() => setIsOnEnterOpen(false), []);

    const [confirmResult, setConfirmResult] = useState("");

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="ModalWrapper"
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
                description="Minimal configuration: component with actions and onCloseClick handler. Use conditional rendering to show/hide."
                code={
                    <CodeExample
                        code={[
                            `import { useState, useCallback } from "react";`,
                            "",
                            `import { ModalWrapper, ButtonStyle } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `const [isOpen, setIsOpen] = useState(false);`,
                            `const handleClose = useCallback(() => setIsOpen(false), []);`,
                            "",
                            `{isOpen ? (`,
                            `    <ModalWrapper`,
                            `        onCloseClick={handleClose}`,
                            `        actions={[{ caption: "Close", style: ButtonStyle.Light, onClick: handleClose }]}`,
                            `    >`,
                            `        <p>`,
                            `            Modal content goes here`,
                            `        </p>`,
                            `    </ModalWrapper>`,
                            `) : null}`,
                        ].join("\n")}
                    />
                }
            >
                <Button
                    style={ButtonStyle.Primary}
                    caption="Open Modal"
                    onClick={() => setIsMinimalOpen(true)}
                />
                {isMinimalOpen ? (
                    <ModalWrapperComponent
                        onCloseClick={handleMinimalClose}
                        actions={[{ caption: "Close", style: ButtonStyle.Light, onClick: handleMinimalClose }]}
                    >
                        <p>
                            Modal content goes here
                        </p>
                    </ModalWrapperComponent>
                ) : null}
            </ComponentUseCase>

            <hr />

            <div className="block">
                <h4 className="subtitle is-4">
                    Custom component props
                </h4>
            </div>

            <ComponentUseCase
                captionIsCode
                caption="title"
                description="Add a title to the modal window header"
                code={
                    <CodeExample
                        code={[
                            `import { ModalWrapper, ButtonStyle } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `{isOpen ? (`,
                            `    <ModalWrapper`,
                            `        title="Modal Title"`,
                            `        onCloseClick={handleClose}`,
                            `        actions={[{ caption: "Close", style: ButtonStyle.Light, onClick: handleClose }]}`,
                            `    >`,
                            `        <p>`,
                            `            Modal with a title in the header`,
                            `        </p>`,
                            `    </ModalWrapper>`,
                            `) : null}`,
                        ].join("\n")}
                    />
                }
            >
                <Button
                    style={ButtonStyle.Primary}
                    caption="Open Modal with Title"
                    onClick={() => setIsWithTitleOpen(true)}
                />
                {isWithTitleOpen ? (
                    <ModalWrapperComponent
                        title="Modal Title"
                        onCloseClick={handleWithTitleClose}
                        actions={[{ caption: "Close", style: ButtonStyle.Light, onClick: handleWithTitleClose }]}
                    >
                        <p>
                            Modal with a title in the header
                        </p>
                    </ModalWrapperComponent>
                ) : null}
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="actions"
                description="Define action buttons for the modal footer. Uses ButtonProps array."
                code={
                    <CodeExample
                        code={[
                            `import { ModalWrapper, ButtonStyle } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
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
                            `        <p>`,
                            `            Are you sure you want to proceed?`,
                            `        </p>`,
                            `    </ModalWrapper>`,
                            `) : null}`,
                        ].join("\n")}
                    />
                }
            >
                <Button
                    style={ButtonStyle.Primary}
                    caption="Open Modal with Actions"
                    onClick={() => setIsWithActionsOpen(true)}
                />
                {isWithActionsOpen ? (
                    <ModalWrapperComponent
                        title="Confirm Action"
                        onCloseClick={handleWithActionsClose}
                        actions={[
                            {
                                caption: "Cancel",
                                style: ButtonStyle.Light,
                                onClick: () => {
                                    setConfirmResult("Canceled");
                                    setIsWithActionsOpen(false);
                                },
                            },
                            {
                                caption: "Confirm",
                                style: ButtonStyle.Success,
                                onClick: () => {
                                    setConfirmResult("Confirmed");
                                    setIsWithActionsOpen(false);
                                },
                            },
                        ]}
                    >
                        <p>
                            Are you sure you want to proceed?
                        </p>
                    </ModalWrapperComponent>
                ) : null}
                {confirmResult !== "" ? (
                    <p className="mt-2">
                        Result:
                        {" "}
                        {confirmResult}
                    </p>
                ) : null}
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="size: Small"
                description="Set the modal size to Small for compact dialogs"
                code={
                    <CodeExample
                        code={[
                            `import { ModalWrapper, ElementSize, ButtonStyle } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `{isOpen ? (`,
                            `    <ModalWrapper`,
                            `        title="Small Modal"`,
                            `        size={ElementSize.Small}`,
                            `        onCloseClick={handleClose}`,
                            `        actions={[{ caption: "Close", style: ButtonStyle.Light, onClick: handleClose }]}`,
                            `    >`,
                            `        <p>`,
                            `            This is a small modal window`,
                            `        </p>`,
                            `    </ModalWrapper>`,
                            `) : null}`,
                        ].join("\n")}
                    />
                }
            >
                <Button
                    style={ButtonStyle.Primary}
                    caption="Open Small Modal"
                    onClick={() => setIsSmallOpen(true)}
                />
                {isSmallOpen ? (
                    <ModalWrapperComponent
                        title="Small Modal"
                        size={ElementSize.Small}
                        onCloseClick={handleSmallClose}
                        actions={[{ caption: "Close", style: ButtonStyle.Light, onClick: handleSmallClose }]}
                    >
                        <p>
                            This is a small modal window
                        </p>
                    </ModalWrapperComponent>
                ) : null}
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="size: Large"
                description="Set the modal size to Large for more content space"
                code={
                    <CodeExample
                        code={[
                            `import { ModalWrapper, ElementSize, ButtonStyle } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `{isOpen ? (`,
                            `    <ModalWrapper`,
                            `        title="Large Modal"`,
                            `        size={ElementSize.Large}`,
                            `        onCloseClick={handleClose}`,
                            `        actions={[{ caption: "Close", style: ButtonStyle.Light, onClick: handleClose }]}`,
                            `    >`,
                            `        <p>`,
                            `            This is a large modal window with more space for content`,
                            `        </p>`,
                            `    </ModalWrapper>`,
                            `) : null}`,
                        ].join("\n")}
                    />
                }
            >
                <Button
                    style={ButtonStyle.Primary}
                    caption="Open Large Modal"
                    onClick={() => setIsLargeOpen(true)}
                />
                {isLargeOpen ? (
                    <ModalWrapperComponent
                        title="Large Modal"
                        size={ElementSize.Large}
                        onCloseClick={handleLargeClose}
                        actions={[{ caption: "Close", style: ButtonStyle.Light, onClick: handleLargeClose }]}
                    >
                        <p>
                            This is a large modal window with more space for content
                        </p>
                        <p>
                            You can add more content here as needed.
                        </p>
                    </ModalWrapperComponent>
                ) : null}
            </ComponentUseCase>

            <ComponentUseCase
                caption="Close Options"
                description="Configure modal close behavior: showCloseButton (toggle header button), closeOnBackgroundClick (click outside to close), closeOnEscape (press Escape to close)"
                code={
                    <CodeExample
                        code={[
                            `import { ModalWrapper, ButtonStyle } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `{isOpen ? (`,
                            `    <ModalWrapper`,
                            `        title="Close Options Demo"`,
                            `        onCloseClick={handleClose}`,
                            `        showCloseButton`,
                            `        closeOnBackgroundClick`,
                            `        closeOnEscape`,
                            `        actions={[{ caption: "Close", style: ButtonStyle.Light, onClick: handleClose }]}`,
                            `    >`,
                            `        <p>`,
                            `            Try clicking the background or pressing Escape to close.`,
                            `        </p>`,
                            `    </ModalWrapper>`,
                            `) : null}`,
                        ].join("\n")}
                    />
                }
            >
                <Button
                    style={ButtonStyle.Primary}
                    caption="Open Modal with Close Options"
                    onClick={() => setIsCloseOptionsOpen(true)}
                />
                {isCloseOptionsOpen ? (
                    <ModalWrapperComponent
                        title="Close Options Demo"
                        onCloseClick={handleCloseOptionsClose}
                        showCloseButton
                        closeOnBackgroundClick
                        closeOnEscape
                        actions={[{ caption: "Close", style: ButtonStyle.Light, onClick: handleCloseOptionsClose }]}
                    >
                        <p>
                            Try clicking the background or pressing Escape to close this modal.
                        </p>
                        <p>
                            You can also use the close button in the header.
                        </p>
                    </ModalWrapperComponent>
                ) : null}
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onEnterPress"
                description="Handler for Enter key press. Useful for form submissions or confirmations."
                code={
                    <CodeExample
                        code={[
                            `import { ModalWrapper, ButtonStyle } from "@bodynarf/react.components";`,
                            "",
                            "/* ... */",
                            "",
                            `const handleConfirm = useCallback(() => {`,
                            `    // Handle confirmation`,
                            `    setIsOpen(false);`,
                            `}, []);`,
                            "",
                            `{isOpen ? (`,
                            `    <ModalWrapper`,
                            `        title="Press Enter to Confirm"`,
                            `        onCloseClick={handleClose}`,
                            `        onEnterPress={handleConfirm}`,
                            `        actions={[`,
                            `            { caption: "Cancel", style: ButtonStyle.Light, onClick: handleClose },`,
                            `            { caption: "Confirm", style: ButtonStyle.Primary, onClick: handleConfirm },`,
                            `        ]}`,
                            `    >`,
                            `        <p>`,
                            `            Press Enter to confirm and close this modal.`,
                            `        </p>`,
                            `    </ModalWrapper>`,
                            `) : null}`,
                        ].join("\n")}
                    />
                }
            >
                <Button
                    style={ButtonStyle.Primary}
                    caption="Open Modal with Enter Handler"
                    onClick={() => setIsOnEnterOpen(true)}
                />
                {isOnEnterOpen ? (
                    <ModalWrapperComponent
                        title="Press Enter to Confirm"
                        onCloseClick={handleOnEnterClose}
                        onEnterPress={handleOnEnterClose}
                        actions={[
                            { caption: "Cancel", style: ButtonStyle.Light, onClick: handleOnEnterClose },
                            { caption: "Confirm", style: ButtonStyle.Primary, onClick: handleOnEnterClose },
                        ]}
                    >
                        <p>
                            Press Enter to confirm and close this modal.
                        </p>
                    </ModalWrapperComponent>
                ) : null}
            </ComponentUseCase>
        </section>
    );
};

export default ModalWrapper;
