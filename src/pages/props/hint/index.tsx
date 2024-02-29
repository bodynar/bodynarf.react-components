import { emptyFn } from "@bodynarf/utils";

import TextComponent from "@bodynarf/react.components/components/primitives/text";

import ComponentUseCase from "../../../shared/components/useCase";
import DemoComponentTitleInfoMessage from "../../../shared/components/title";

/** Hint input prop demo */
function HintProp() {
    return (
        <section>
            <DemoComponentTitleInfoMessage
                name="Hint"
                hidePropsNotice
            />
            <ComponentUseCase
                description={<></>}
                caption="Default"
                code={`<Text hint={{ content: "Describing hint" }} />`}
                component={<TextComponent hint={{ content: "Describing hint" }} label={{ caption: "Hint", horizontal: true }} onValueChange={emptyFn} />}
            />
            <ComponentUseCase
                captionIsCode
                description={<></>}
                caption="grey"
                code={`<Text hint={{ content: "Describing hint", grey: true }} />`}
                component={<TextComponent hint={{ content: "Describing hint", grey: true }} label={{ caption: "Hint", horizontal: true }} onValueChange={emptyFn} />}
            />
            <ComponentUseCase
                captionIsCode
                description={<></>}
                caption="italic"
                code={`<Text hint={{ content: "Describing hint", italic: true }} />`}
                component={<TextComponent hint={{ content: "Describing hint", italic: true }} label={{ caption: "Hint", horizontal: true }} onValueChange={emptyFn} />}
            />
            <ComponentUseCase
                captionIsCode
                description="Hint could be configured with icon"
                caption="icon"
                code={`<Text hint={{ content: "Describing hint", icon: { name: "question-square" } }} />`}
                component={<TextComponent hint={{ content: "Describing hint", icon: { name: "question-square" } }} label={{ caption: "Hint", horizontal: true }} onValueChange={emptyFn} />}
            />
        </section>
    );
}

export default HintProp;
