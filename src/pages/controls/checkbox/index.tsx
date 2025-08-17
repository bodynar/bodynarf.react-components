import { emptyFn } from "@bodynarf/utils";

import CheckboxComponent from "@bodynarf/react.components/components/primitives/checkbox";
import { ElementColor } from "@bodynarf/react.components";

import ComponentUseCase from "@app/sharedComponents/useCase";
import ComponentSizeCase from "@app/sharedComponents/sizeUse";
import ComponentColorCase from "@app/sharedComponents/colorUse";
import CommonPropsSuppressExampleInfoMessage from "@app/sharedComponents/commonPropsSuppress";
import DemoComponentTitleInfoMessage from "@app/sharedComponents/title";

/** Checkbox component demo */
function Checkbox() {
    return (
        <section>
            <DemoComponentTitleInfoMessage name="Checkbox" />
            <ComponentUseCase
                caption="Default"
                code={`<Checkbox onValueChange={onValueChangeHandler} label={{ caption: "Default checkbox", horizontal: true }} />`}
                description="Control works fine even without label. But for more convenience its recommended to have label.caption as on example bellow:"
                component={<CheckboxComponent onValueChange={emptyFn} label={{ caption: "Default checkbox", horizontal: true }} />}
            />
            <CommonPropsSuppressExampleInfoMessage />
            <ComponentUseCase
                caption="Without label"
                code={`<Checkbox />`}
                description="Control could be used without any description label. In case you want to implement some custom logic"
                component={<CheckboxComponent onValueChange={emptyFn} />}
            />
            <ComponentUseCase
                caption="block"
                captionIsCode
                code={`<Checkbox block />`}
                description="Control and label will have own gray background"
                component={<CheckboxComponent onValueChange={emptyFn} block label={{ caption: "Block", horizontal: true }} />}
            />
            <ComponentUseCase
                caption="Block and without label"
                code={`<Checkbox block />`}
                description="Control and label will have own gray background"
                component={<CheckboxComponent onValueChange={emptyFn} block />}
            />
            <ComponentUseCase
                caption="Without border"
                code={`<Checkbox withoutBorder />`}
                description="Removes border from control"
                component={<CheckboxComponent onValueChange={emptyFn} withoutBorder label={{ caption: "Without border", horizontal: true }} />}
            />
            <ComponentSizeCase
                caption="Sizes"
                codeProvider={id => `<Checkbox size={ElementSize.${id}} />`}
                description="Control supports all available sizes"
                componentProvider={
                    size =>
                        <CheckboxComponent
                            onValueChange={emptyFn}
                            size={size}
                            label={{ caption: "Sized checkbox", horizontal: true }}
                        />
                }
            />
            <ComponentColorCase
                caption="Colors"
                codeProvider={id => `<Checkbox style={ElementColor.${id}} />`}
                description="Control supports all available colors"
                componentProvider={
                    style =>
                        <CheckboxComponent
                            onValueChange={emptyFn}
                            style={style}
                            label={{ caption: "Colored checkbox", horizontal: true }}
                        />
                }
            />
            <ComponentUseCase
                caption="hasBackgroundColor"
                captionIsCode
                code={`<Checkbox hasBackgroundColor />`}
                description={<>Add background to control according to current <code>style</code></>}
                component={<CheckboxComponent hasBackgroundColor onValueChange={emptyFn} style={ElementColor.Danger} label={{ caption: "Colored checkbox with background", horizontal: true }} />}
            />
            <ComponentUseCase
                caption="fixBackgroundColor"
                captionIsCode
                code={`<Checkbox hasBackgroundColor fixBackgroundColor />`}
                description={<>Can be used only with <code>hasBackgroundColor</code>. Removes background from control when unchecked</>}
                component={<CheckboxComponent hasBackgroundColor fixBackgroundColor onValueChange={emptyFn} style={ElementColor.Danger} label={{ caption: "Colored checkbox with background", horizontal: true }} />}
            />
            <ComponentUseCase
                caption="isFormLabel"
                captionIsCode
                code={`<Checkbox isFormLabel />`}
                description="Organizes markup to make label looks like in forms"
                component={<CheckboxComponent isFormLabel onValueChange={emptyFn} style={ElementColor.Success} label={{ caption: "Form label", horizontal: true }} />}
            />
            <ComponentUseCase
                caption="rounded"
                captionIsCode
                code={`<Checkbox rounded />`}
                description="Control will have rounded corners after setting this prop"
                component={<CheckboxComponent rounded onValueChange={emptyFn} style={ElementColor.Success} label={{ caption: "Rounded", horizontal: true }} />}
            />
            <ComponentUseCase
                caption="disabled"
                captionIsCode
                code={`<Checkbox disabled />`}
                description="Control will be disabled"
                component={<CheckboxComponent disabled label={{ caption: "Disabled", horizontal: true }} onValueChange={emptyFn} />}
            />
        </section>
    );
}

export default Checkbox;
