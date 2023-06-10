import { emptyFn } from "@bodynarf/utils";

import CheckboxComponent from "@bodynarf/react.components/components/primitives/checkbox";
import { ElementColor } from "@bodynarf/react.components";

import ComponentUseCase from "../../../shared/components/useCase";
import ComponentSizeCase from "../../../shared/components/sizeUse";
import ComponentColorCase from "../../../shared/components/colorUse";
import CommonPropsSuppressExampleInfoMessage from "../../../shared/components/commonPropsSuppress";
import DemoComponentTitleInfoMessage from "../../../shared/components/title";

/** Checkbox component demo */
function Checkbox() {
    return (
        <section>
            <DemoComponentTitleInfoMessage name="Checkbox" />
            <ComponentUseCase
                caption="Default"
                code={`<Checkbox onValueChange={onValueChangeHandler} label={{ caption: "Default checkbox", horizontal: false }} />`}
                description="Control works fine even without label. But for more convenience its recommended to have label.caption as on example bellow:"
                component={<CheckboxComponent onValueChange={emptyFn} label={{ caption: "Default checkbox", horizontal: false }} />}
            />
            <CommonPropsSuppressExampleInfoMessage />
            <ComponentUseCase
                caption="Without label"
                code={`<Checkbox onValueChange={emptyFn} />`}
                description="Control could be used without any description label. In case you want to implement some custom logic"
                component={<CheckboxComponent onValueChange={emptyFn} />}
            />
            <ComponentUseCase
                caption="block"
                captionIsCode
                code={`<Checkbox block />`}
                description="Control and label will have own gray background"
                component={<CheckboxComponent onValueChange={emptyFn} block label={{ caption: "Default checkbox", horizontal: false }} />}
            />
            <ComponentUseCase
                caption="Without border"
                code={`<Checkbox withoutBorder />`}
                description="Removes border from control"
                component={<CheckboxComponent onValueChange={emptyFn} withoutBorder label={{ caption: "Default checkbox", horizontal: false }} />}
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
                            label={{ caption: "Sized checkbox", horizontal: false }}
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
                            label={{ caption: "Colored checkbox", horizontal: false }}
                        />
                }
            />
            <ComponentUseCase
                caption="hasBackgroundColor"
                captionIsCode
                code={`<Checkbox hasBackgroundColor />`}
                description={<>Add background to control according to current <code>style</code></>}
                component={<CheckboxComponent hasBackgroundColor onValueChange={emptyFn} style={ElementColor.Danger} label={{ caption: "Colored checkbox with background", horizontal: false }} />}
            />
            <ComponentUseCase
                caption="fixBackgroundColor"
                captionIsCode
                code={`<Checkbox hasBackgroundColor fixBackgroundColor />`}
                description={<>Can be used only with <code>hasBackgroundColor</code>. Removes background from control when unchecked</>}
                component={<CheckboxComponent hasBackgroundColor fixBackgroundColor onValueChange={emptyFn} style={ElementColor.Danger} label={{ caption: "Colored checkbox with background", horizontal: false }} />}
            />
            <ComponentUseCase
                caption="isFormLabel"
                captionIsCode
                code={`<Checkbox isFormLabel />`}
                description="Organizes markup to make label looks like in forms"
                component={<CheckboxComponent isFormLabel onValueChange={emptyFn} style={ElementColor.Success} label={{ caption: "Form label checkbox", horizontal: false }} />}
            />
            <ComponentUseCase
                caption="rounded"
                captionIsCode
                code={`<Checkbox rounded />`}
                description="Speak for itself. Turns control into circle"
                component={<CheckboxComponent rounded onValueChange={emptyFn} style={ElementColor.Success} label={{ caption: "Rounded checkbox", horizontal: false }} />}
            />
        </section>
    )
}

export default Checkbox;
