import { SelectableItem, ValidationStatus } from "@bodynarf/react.components";
import TextComponent from "@bodynarf/react.components/components/primitives/text";

import ComponentUseCase from "@app/sharedComponents/useCase";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";
import CodeExample from "@app/sharedComponents/codeExample";
import ComponentEnumCase from "@app/sharedComponents/enumSelectionCase";

const validationStatuses: Array<string> = [
    ValidationStatus.None.capitalize(),
    ValidationStatus.Invalid.capitalize(),
    ValidationStatus.Valid.capitalize(),
];

const validationStatusesAsSelectList = Object
    .values(ValidationStatus)
    .map((x, i) => ({
        displayValue: x.capitalize(),
        id: i.toString(),
        value: x,
    }) as SelectableItem);

/** ValidationState input prop demo */
const ValidationStateProp = () => {
    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Validation state"
                description={
                    <>
                        Information about the validation state.
                        <br />
                        Visualized by coloring the border of the input control according to the validation status.
                        <br />
                        In case of an error, validation error messages are displayed.
                        <br />
                        Validation information can be used with any component whose props type inherits from
                        {` `}
                        <code>
                            BaseInputElementProps
                        </code>
                        {` `}
                        .
                    </>
                }
            />

            <ComponentUseCase
                caption="Minimal use"
                description="If the validation status is not explicitly specified, validation styles will not be applied to the control. Default: not set."
                code={
                    <CodeExample
                        code={[
                            'import { ValidationStatus } from "@bodynarf/react.components";',
                            `import TextComponent from "@bodynarf/react.components/components/primitives/text";`,
                            "",
                            "/* ... */",
                            "",
                            `<TextComponent`,
                            '    validationState={{ status: ValidationStatus.None }}',
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <TextComponent
                    validationState={{ status: ValidationStatus.None }}
                />
            </ComponentUseCase>

            <ComponentEnumCase
                captionIsCode
                caption="status"
                enumNames={validationStatuses}
                lookupValues={validationStatusesAsSelectList}
                description="The validation status affects the visual style of the control."
                codeProvider={id =>
                    <CodeExample
                        code={[
                            'import { ValidationStatus } from "@bodynarf/react.components";',
                            `import TextComponent from "@bodynarf/react.components/components/primitives/text";`,
                            "",
                            "/* ... */",
                            "",
                            `<TextComponent`,
                            `    validationState={{ status: ValidationStatus.${id} }}`,
                            "/>",
                        ].join("\n")}
                    />
                }
                componentProvider={
                    (value: ValidationStatus) =>
                        <TextComponent
                            validationState={{ status: value }}
                        />
                }
            />

            <ComponentUseCase
                captionIsCode
                caption="messages"
                description="Option for displaying validation messages below the control. Displayed only when a validation status is set. Default: not set."
                code={
                    <CodeExample
                        code={[
                            'import { ValidationStatus } from "@bodynarf/react.components";',
                            `import TextComponent from "@bodynarf/react.components/components/primitives/text";`,
                            "",
                            "/* ... */",
                            "",
                            `<TextComponent`,
                            '    validationState={{ status: ValidationStatus.Valid, messages: ["Line 1", "Line 2"] }}',
                            "/>",
                        ].join("\n")}
                    />
                }
            >
                <TextComponent
                    validationState={{ status: ValidationStatus.Valid, messages: ["Line 1", "Line 2"] }}
                />
            </ComponentUseCase>
        </section>
    );
};

export default ValidationStateProp;
