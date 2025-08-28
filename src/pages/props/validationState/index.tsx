import { emptyFn } from "@bodynarf/utils";

import { ValidationStatus } from "@bodynarf/react.components";
import TextComponent from "@bodynarf/react.components/components/primitives/text";

import ComponentUseCase from "@app/sharedComponents/useCase";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";

/** ValidationState input prop demo */
function ValidationStateProp() {
    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Validation message"
            />
            <ComponentUseCase
                captionIsCode
                description={<></>}
                caption="validationState"
                code={`<Text validationState={{ messages: ["Invalid message 1", "Invalid message 2"], status: ValidationStatus.Invalid, }} />`}
                component={<TextComponent validationState={{ messages: ["Message 1", "Message 2"], status: ValidationStatus.Invalid, }} label={{ caption: "Validation state", horizontal: true }} onValueChange={emptyFn} />}
            />
            <ComponentUseCase
                captionIsCode
                description={<></>}
                caption="validationState"
                code={`<Text validationState={{ messages: ["Valid message 1", "Valid message 2"], status: ValidationStatus.Valid, }} />`}
                component={<TextComponent validationState={{ messages: ["Message 1", "Message 2"], status: ValidationStatus.Valid, }} label={{ caption: "Validation state", horizontal: true }} onValueChange={emptyFn} />}
            />
        </section>
    );
}

export default ValidationStateProp;
