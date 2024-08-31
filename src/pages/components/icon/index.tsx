import IconComponent from "@bodynarf/react.components/components/icon";

import CommonPropsSuppressExampleInfoMessage from "../../../shared/components/commonPropsSuppress";
import DemoComponentTitleInfoMessage from "../../../shared/components/title";
import ComponentUseCase from "../../../shared/components/useCase";
import ComponentSizeCase from "../../../shared/components/sizeUse";

/** Icon component demo */
function Icon() {
    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Icon"
                description={<>
                    Works via <a className="is-underlined" href="https://icons.getbootstrap.com/" target="_blank">Bootstrap-icons</a>
                    {`\n`}
                    To use - pass name without `bi` part
                </>}
            />
            <ComponentUseCase
                caption="Default"
                code={`<Icon name="alarm" />`}
                description="Usually only name prop is fine for component use"
                component={<IconComponent name="alarm" />}
            />
            <CommonPropsSuppressExampleInfoMessage />
            <ComponentSizeCase
                caption="Sizes"
                codeProvider={id => `<Icon size={ElementSize.${id}}/>`}
                description="Component supports all available sizes"
                componentProvider={
                    size =>
                        <IconComponent name="alarm" size={size} />
                }
            />
        </section>
    );
}

export default Icon;
