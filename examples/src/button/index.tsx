import { FC } from "react";

import Button from "@bodynarf/react.components/components/button";
import { ButtonStyle, ElementSize } from "@bodynarf/react.components";

const ButtonExamples: FC = () => (
    <section className="section">
        <div className="container">
            <h1 className="title is-3">Button</h1>

            {/* Styles */}
            <div className="box">
                <p className="subtitle is-5">Styles</p>
                <div className="buttons">
                    <Button style={ButtonStyle.Default}  caption="Default"  onClick={() => console.log("Default")} />
                    <Button style={ButtonStyle.Primary}  caption="Primary"  onClick={() => console.log("Primary")} />
                    <Button style={ButtonStyle.Link}     caption="Link"     onClick={() => console.log("Link")} />
                    <Button style={ButtonStyle.Info}     caption="Info"     onClick={() => console.log("Info")} />
                    <Button style={ButtonStyle.Success}  caption="Success"  onClick={() => console.log("Success")} />
                    <Button style={ButtonStyle.Warning}  caption="Warning"  onClick={() => console.log("Warning")} />
                    <Button style={ButtonStyle.Danger}   caption="Danger"   onClick={() => console.log("Danger")} />
                    <Button style={ButtonStyle.White}    caption="White"    onClick={() => console.log("White")} />
                    <Button style={ButtonStyle.Light}    caption="Light"    onClick={() => console.log("Light")} />
                    <Button style={ButtonStyle.Dark}     caption="Dark"     onClick={() => console.log("Dark")} />
                    <Button style={ButtonStyle.Black}    caption="Black"    onClick={() => console.log("Black")} />
                    <Button style={ButtonStyle.Text}     caption="Text"     onClick={() => console.log("Text")} />
                    <Button style={ButtonStyle.Ghost}    caption="Ghost"    onClick={() => console.log("Ghost")} />
                </div>
            </div>

            {/* Sizes */}
            <div className="box">
                <p className="subtitle is-5">Sizes</p>
                <div className="buttons">
                    <Button style={ButtonStyle.Primary} caption="Small"  size={ElementSize.Small}  onClick={() => {}} />
                    <Button style={ButtonStyle.Primary} caption="Normal" size={ElementSize.Normal} onClick={() => {}} />
                    <Button style={ButtonStyle.Primary} caption="Medium" size={ElementSize.Medium} onClick={() => {}} />
                    <Button style={ButtonStyle.Primary} caption="Large"  size={ElementSize.Large}  onClick={() => {}} />
                </div>
            </div>

            {/* Modifiers */}
            <div className="box">
                <p className="subtitle is-5">Modifiers</p>
                <div className="buttons">
                    <Button style={ButtonStyle.Primary}  caption="Normal"            onClick={() => {}} />
                    <Button style={ButtonStyle.Primary}  caption="Light"    light     onClick={() => {}} />
                    <Button style={ButtonStyle.Primary}  caption="Outlined" outlined  onClick={() => {}} />
                    <Button style={ButtonStyle.Primary}  caption="Rounded"  rounded   onClick={() => {}} />
                    <Button style={ButtonStyle.Primary}  caption="Loading"  isLoading onClick={() => {}} />
                    <Button style={ButtonStyle.Primary}  caption="Disabled" disabled  onClick={() => {}} />
                    <Button style={ButtonStyle.Primary}  caption="Static"   static    onClick={() => {}} />
                </div>
            </div>

            {/* With icon */}
            <div className="box">
                <p className="subtitle is-5">With Icon</p>
                <div className="buttons">
                    <Button style={ButtonStyle.Primary} caption="Save"   icon={{ name: "floppy" }}     onClick={() => {}} />
                    <Button style={ButtonStyle.Danger}  caption="Delete" icon={{ name: "trash" }}      onClick={() => {}} />
                    <Button style={ButtonStyle.Info}    caption="Edit"   icon={{ name: "pencil" }}     onClick={() => {}} />
                    <Button style={ButtonStyle.Success} caption="Done"   icon={{ name: "check-lg" }}   onClick={() => {}} />
                </div>
                <p className="help mt-2">Icon only (no caption)</p>
                <div className="buttons mt-2">
                    <Button style={ButtonStyle.Primary} icon={{ name: "floppy" }}  onClick={() => {}} />
                    <Button style={ButtonStyle.Danger}  icon={{ name: "trash" }}   onClick={() => {}} />
                    <Button style={ButtonStyle.Info}    icon={{ name: "pencil" }}  onClick={() => {}} />
                    <Button style={ButtonStyle.Warning} icon={{ name: "gear" }}    onClick={() => {}} />
                </div>
            </div>

            {/* Button types (visual) */}
            <div className="box">
                <p className="subtitle is-5">Visual Type Override</p>
                <p className="help mb-2">The <code>type</code> prop sets the visual type modifier independent of <code>style</code>.</p>
                <div className="buttons">
                    <Button style={ButtonStyle.Default} caption="type: info"    type="info"    onClick={() => {}} />
                    <Button style={ButtonStyle.Default} caption="type: success" type="success" onClick={() => {}} />
                    <Button style={ButtonStyle.Default} caption="type: danger"  type="danger"  onClick={() => {}} />
                </div>
            </div>
        </div>
    </section>
);

export default ButtonExamples;
