import { FC, useState, useCallback, useRef } from "react";

import ConfirmDialogComponent from "@bodynarf/react.components/components/confirmDialog";
import { ElementColor } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";
import Log, { LogRef } from "@app/sharedComponents/log";

const elementColors: ElementColor[] = [
    ElementColor.Default,
    ElementColor.Primary,
    ElementColor.Link,
    ElementColor.Info,
    ElementColor.Success,
    ElementColor.Warning,
    ElementColor.Danger,
];

const elementColorBulmaClass: Record<ElementColor, string> = {
    [ElementColor.Default]: "",
    [ElementColor.Primary]: "is-primary",
    [ElementColor.Link]: "is-link",
    [ElementColor.Info]: "is-info",
    [ElementColor.Success]: "is-success",
    [ElementColor.Warning]: "is-warning",
    [ElementColor.Danger]: "is-danger",
};

/** ConfirmDialog component demo */
const ConfirmDialog: FC = () => {
    const [openKey, setOpenKey] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const confirmLogRef = useRef<LogRef>(null);
    const cancelLogRef = useRef<LogRef>(null);

    const close = useCallback(() => setOpenKey(null), []);

    const handleAsyncConfirm = useCallback(async () => {
        setIsLoading(true);
        await new Promise<void>(resolve => setTimeout(resolve, 1500));
        setIsLoading(false);
        setOpenKey(null);
    }, []);

    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="ConfirmDialog"
                version="1.15"
                baseTypeName="BaseElementProps"
                description="Focused confirmation modal for destructive or important actions. Supports async confirm with loading state."
            />

            <ComponentUseCase
                caption="Minimal use"
                description="Provide visible, onConfirm and onCancel — the dialog is fully controlled."
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            "",
                            `import ConfirmDialog from "@bodynarf/react.components/components/confirmDialog";`,
                            "",
                            "const [isOpen, setIsOpen] = useState(false);",
                            "",
                            "<ConfirmDialog",
                            "    visible={isOpen}",
                            "    onCancel={() => setIsOpen(false)}",
                            "    onConfirm={() => setIsOpen(false)}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <button
                    type="button"
                    className="button"
                    onClick={() => setOpenKey("minimal")}
                >
                    Open dialog
                </button>
                <ConfirmDialogComponent
                    visible={openKey === "minimal"}
                    onConfirm={close}
                    onCancel={close}
                />
            </ComponentUseCase>

            <hr />
            <div><h4>Custom component props</h4></div>

            <ComponentUseCase
                captionIsCode
                caption="visible"
                description="Controls whether the dialog is shown. The dialog is fully controlled — you must manage this state yourself."
                code={
                    <CodeExample
                        code={[
                            `import { useState } from "react";`,
                            "",
                            `import ConfirmDialog from "@bodynarf/react.components/components/confirmDialog";`,
                            "",
                            "const [isOpen, setIsOpen] = useState(false);",
                            "",
                            "<ConfirmDialog",
                            "    visible={isOpen}",
                            "    onCancel={() => setIsOpen(false)}",
                            "    onConfirm={() => setIsOpen(false)}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <button
                    type="button"
                    className="button"
                    onClick={() => setOpenKey("visible")}
                >
                    Open dialog
                </button>
                <ConfirmDialogComponent
                    visible={openKey === "visible"}
                    onConfirm={close}
                    onCancel={close}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="title"
                description="Dialog heading text. Defaults to &quot;Are you sure?&quot;."
                code={
                    <CodeExample
                        code={[
                            `import ConfirmDialog from "@bodynarf/react.components/components/confirmDialog";`,
                            "",
                            "<ConfirmDialog",
                            "    visible={isOpen}",
                            `    title="Custom title"`,
                            "    onCancel={handleCancel}",
                            "    onConfirm={handleConfirm}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <button
                    type="button"
                    className="button"
                    onClick={() => setOpenKey("title")}
                >
                    Open dialog
                </button>
                <ConfirmDialogComponent
                    visible={openKey === "title"}
                    title="Custom title"
                    onConfirm={close}
                    onCancel={close}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="message"
                description="Descriptive text shown below the title. Accepts a plain string or any ReactNode for rich content."
                code={
                    <CodeExample
                        code={[
                            `import ConfirmDialog from "@bodynarf/react.components/components/confirmDialog";`,
                            "",
                            "<ConfirmDialog",
                            "    visible={isOpen}",
                            "    onCancel={handleCancel}",
                            "    onConfirm={handleConfirm}",
                            `    message="This action cannot be undone."`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <button
                    type="button"
                    className="button"
                    onClick={() => setOpenKey("message")}
                >
                    Open dialog
                </button>
                <ConfirmDialogComponent
                    visible={openKey === "message"}
                    message={<span>This action <strong>cannot</strong> be undone.</span>}
                    onConfirm={close}
                    onCancel={close}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="confirmLabel"
                description="Label for the confirm button. Defaults to &quot;Confirm&quot;."
                code={
                    <CodeExample
                        code={[
                            `import ConfirmDialog from "@bodynarf/react.components/components/confirmDialog";`,
                            "",
                            "<ConfirmDialog",
                            "    visible={isOpen}",
                            "    onConfirm={handleConfirm}",
                            "    onCancel={handleCancel}",
                            `    confirmLabel="Yes, delete it"`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <button
                    type="button"
                    className="button"
                    onClick={() => setOpenKey("confirmLabel")}
                >
                    Open dialog
                </button>
                <ConfirmDialogComponent
                    visible={openKey === "confirmLabel"}
                    confirmLabel="Yes, delete it"
                    onConfirm={close}
                    onCancel={close}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="cancelLabel"
                description="Label for the cancel button. Defaults to &quot;Cancel&quot;."
                code={
                    <CodeExample
                        code={[
                            `import ConfirmDialog from "@bodynarf/react.components/components/confirmDialog";`,
                            "",
                            "<ConfirmDialog",
                            "    visible={isOpen}",
                            "    onCancel={handleCancel}",
                            "    onConfirm={handleConfirm}",
                            `    cancelLabel="No, go back"`,
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <button
                    type="button"
                    className="button"
                    onClick={() => setOpenKey("cancelLabel")}
                >
                    Open dialog
                </button>
                <ConfirmDialogComponent
                    visible={openKey === "cancelLabel"}
                    cancelLabel="No, go back"
                    onConfirm={close}
                    onCancel={close}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="confirmColor"
                description="Color of the confirm button (ElementColor). Defaults to ElementColor.Danger. Click each button to open a dialog with the corresponding color."
                code={
                    <CodeExample
                        code={[
                            `import { ElementColor } from "@bodynarf/react.components";`,
                            `import ConfirmDialog from "@bodynarf/react.components/components/confirmDialog";`,
                            "",
                            "<ConfirmDialog",
                            "    visible={isOpen}",
                            "    onCancel={handleCancel}",
                            "    onConfirm={handleConfirm}",
                            "    confirmColor={ElementColor.Success}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <div className="is-flex is-flex-wrap-wrap" style={{ gap: "0.5rem" }}>
                    {elementColors.map(color => (
                        <button
                            key={color}
                            type="button"
                            className={["button", elementColorBulmaClass[color], "is-light"].filter(Boolean).join(" ")}
                            onClick={() => setOpenKey("color-" + color)}
                        >
                            {color}
                        </button>
                    ))}
                </div>
                {elementColors.map(color => (
                    <ConfirmDialogComponent
                        key={color}
                        visible={openKey === "color-" + color}
                        confirmColor={color}
                        title={"Color: " + color}
                        onConfirm={close}
                        onCancel={close}
                    />
                ))}
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="isLoading"
                description="When true, the confirm button shows a loading spinner. Use while an async onConfirm is running."
                code={
                    <CodeExample
                        code={[
                            `import ConfirmDialog from "@bodynarf/react.components/components/confirmDialog";`,
                            "",
                            "const handleConfirm = async () => {",
                            "    setIsLoading(true);",
                            "    await saveData();",
                            "    setIsLoading(false);",
                            "    setIsOpen(false);",
                            "};",
                            "",
                            "<ConfirmDialog",
                            "    visible={isOpen}",
                            "    isLoading={isLoading}",
                            "    onConfirm={handleConfirm}",
                            "    onCancel={() => setIsOpen(false)}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <button
                    type="button"
                    className="button is-danger"
                    onClick={() => setOpenKey("isLoading")}
                >
                    Delete record
                </button>
                <ConfirmDialogComponent
                    visible={openKey === "isLoading"}
                    title="Delete record?"
                    message="Confirm simulates a 1.5 s async operation."
                    isLoading={isLoading}
                    confirmColor={ElementColor.Danger}
                    onConfirm={handleAsyncConfirm}
                    onCancel={() => { setIsLoading(false); close(); }}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="icon"
                description="Bootstrap icon name (without bi- prefix) shown next to the title. Defaults to &quot;exclamation-triangle&quot;."
                code={
                    <CodeExample
                        code={[
                            `import ConfirmDialog from "@bodynarf/react.components/components/confirmDialog";`,
                            "",
                            "<ConfirmDialog",
                            `    icon="trash"`,
                            "    visible={isOpen}",
                            "    onCancel={handleCancel}",
                            "    onConfirm={handleConfirm}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <button
                    type="button"
                    className="button"
                    onClick={() => setOpenKey("icon")}
                >
                    Open dialog
                </button>
                <ConfirmDialogComponent
                    visible={openKey === "icon"}
                    icon="trash"
                    title="Delete this item?"
                    onConfirm={close}
                    onCancel={close}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="cancellable"
                description="When true, clicking the backdrop or pressing Escape does not close the dialog. The user must click a button."
                code={
                    <CodeExample
                        code={[
                            `import ConfirmDialog from "@bodynarf/react.components/components/confirmDialog";`,
                            "",
                            "<ConfirmDialog",
                            "    cancellable",
                            "    visible={isOpen}",
                            "    onCancel={handleCancel}",
                            "    onConfirm={handleConfirm}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <button
                    type="button"
                    className="button is-warning"
                    onClick={() => setOpenKey("cancellable")}
                >
                    Open non-dismissable dialog
                </button>
                <ConfirmDialogComponent
                    visible={openKey === "cancellable"}
                    cancellable
                    title="Required action"
                    message="Backdrop and Escape will not close this dialog."
                    onConfirm={close}
                    onCancel={close}
                />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onConfirm"
                description="Callback called when the user clicks the confirm button."
                code={
                    <CodeExample
                        code={[
                            `import ConfirmDialog from "@bodynarf/react.components/components/confirmDialog";`,
                            "",
                            "<ConfirmDialog",
                            "    visible={isOpen}",
                            "    onConfirm={() => {",
                            `        console.log("confirmed");`,
                            "        setIsOpen(false);",
                            "    }}",
                            "    onCancel={() => setIsOpen(false)}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <button
                    type="button"
                    className="button"
                    onClick={() => setOpenKey("onConfirm")}
                >
                    Open dialog
                </button>
                <ConfirmDialogComponent
                    visible={openKey === "onConfirm"}
                    onConfirm={() => { confirmLogRef.current?.append("onConfirm called"); close(); }}
                    onCancel={close}
                />
                <Log ref={confirmLogRef} />
            </ComponentUseCase>

            <ComponentUseCase
                captionIsCode
                caption="onCancel"
                description="Callback called when the user clicks cancel, the backdrop, or presses Escape."
                code={
                    <CodeExample
                        code={[
                            `import ConfirmDialog from "@bodynarf/react.components/components/confirmDialog";`,
                            "",
                            "<ConfirmDialog",
                            "    visible={isOpen}",
                            "    onConfirm={() => setIsOpen(false)}",
                            "    onCancel={() => {",
                            `        console.log("cancelled");`,
                            "        setIsOpen(false);",
                            "    }}",
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <button
                    type="button"
                    className="button"
                    onClick={() => setOpenKey("onCancel")}
                >
                    Open dialog
                </button>
                <ConfirmDialogComponent
                    visible={openKey === "onCancel"}
                    onConfirm={close}
                    onCancel={() => { cancelLogRef.current?.append("onCancel called"); close(); }}
                />
                <Log ref={cancelLogRef} />
            </ComponentUseCase>
        </section>
    );
};

export default ConfirmDialog;
