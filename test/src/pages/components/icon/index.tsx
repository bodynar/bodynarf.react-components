import { ElementSize } from "@bodynarf/react.components";
import IconComponent from "@bodynarf/react.components/components/icon";

import { Sizes } from "../../../shared";

/** Icon component demo */
function Icon() {
    return (
        <section>
            <div className="block">
                <p style={{ whiteSpace: "pre-line" }}>
                    Icon component via <a className="is-underlined" href="https://icons.getbootstrap.com/" target="_blank">Bootstrap-icons</a>
                    {`\n`}To use - pass name without <code>bi-</code>
                </p>
                Available sizes: [{Sizes.string}]
            </div>
            <div className="block">
                <h4 className="subtitle is-5">
                    Small size
                </h4>
                <IconComponent name="alarm" size={ElementSize.Small} /> = <code>
                    {`<Icon name="alarm" size={ElementSize.Small} />`}
                </code>
            </div>

            <div className="block">
                <h4 className="subtitle is-5">
                    Normal size (default)
                </h4>
                <IconComponent name="alarm" size={ElementSize.Normal} /> = <code>
                    {`<Icon name="alarm" size={ElementSize.Normal} />`}
                </code>
            </div>

            <div className="block">
                <h4 className="subtitle is-5">
                    Medium size
                </h4>
                <IconComponent name="alarm" size={ElementSize.Medium} /> = <code>
                    {`<Icon name="alarm" size={ElementSize.Medium} />`}
                </code>
            </div>

            <div className="block">
                <h4 className="subtitle is-5">
                    Large size
                </h4>
                <IconComponent name="alarm" size={ElementSize.Large} /> = <code>
                    {`<Icon name="alarm" size={ElementSize.Large} />`}
                </code>
            </div>
        </section>
    )
}

export default Icon;
