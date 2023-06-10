import { emptyFn } from "@bodynarf/utils";

import { ValidationStatus } from "@bodynarf/react.components";
import ColorComponent from "@bodynarf/react.components/components/primitives/color";

import ComponentUseCase from "../../../shared/components/useCase";
import DemoComponentTitleInfoMessage from "../../../shared/components/title";

/** Color component demo */
function Color() {
    return (
        <section>
            <DemoComponentTitleInfoMessage name="Color picker" />
            <ComponentUseCase
                caption="Default"
                code={`<Color onValueChange={onValueChangeHandler} />`}
                description="Control could be used without any configuration, except value change handler"
                component={<ColorComponent onValueChange={emptyFn} />}
            />
            <ComponentUseCase
                caption="With preview"
                code={`<Color showPreview />`}
                description="Option allows control to have tag with selected color set as background color"
                component={<ColorComponent showPreview onValueChange={emptyFn} />}
            />
            <ComponentUseCase
                caption="With label (no preview)"
                code={`<Color label={{ caption: "Color picker label", horizontal: true }} />`}
                description="Control could (and must) have describing label"
                component={<ColorComponent label={{ caption: "Color picker label", horizontal: true }} onValueChange={emptyFn} />}
            />
            <ComponentUseCase
                caption="Disabled state with default value"
                code={`<Color disabled={true} defaultValue={{ blue: 240, green: 200, red: 140 }} />`}
                description="Control could have disabled state & represent default value"
                component={<ColorComponent disabled defaultValue={{ blue: 240, green: 200, red: 140 }} onValueChange={emptyFn} />}
            />
            <ComponentUseCase
                caption="validationState"
                captionIsCode
                code={`<Color validationState={{ messages: ["Message 1", "Message 2"], status: ValidationStatus.Invalid, }} />`}
                description="Like other form controls color picker could have validation state"
                component={
                    <ColorComponent
                        label={{ caption: "Validation state", horizontal: true }}
                        validationState={{
                            messages: ["Message 1", "Message 2"],
                            status: ValidationStatus.Invalid,
                        }}
                        onValueChange={emptyFn}
                    />
                }
            />
        </section>
    );
}

export default Color;
