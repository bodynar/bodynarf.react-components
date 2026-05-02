import { FC, useMemo, useState } from "react";
import { Link } from "react-router";

import { ElementColor, Tag } from "@bodynarf/react.components";

import CodeExample from "@app/sharedComponents/codeExample";
import TranslationPanel from "src/components/translation-panel";
import routeList, { isRootMenuItem, RouteMenuItem } from "@app/pages/routing";

const MAX_WHATS_NEW = 3;

const compareVersionsDesc = (a: string, b: string): number => {
    const [aMaj, aMin] = a.split(".").map(Number);
    const [bMaj, bMin] = b.split(".").map(Number);
    if (bMaj !== aMaj) return bMaj - aMaj;
    return bMin - aMin;
};

/** Default page */
const Home: FC = () => {
    const [dismissed, setDismissed] = useState(false);
    const whatsNew = useMemo(() => {
        const allFlatItems = routeList.flatMap(item =>
            isRootMenuItem(item)
                ? item.children.map(child => ({ ...child, groupCaption: item.caption }))
                : [{ ...(item as RouteMenuItem), groupCaption: "" }]
        );

        const versions = Array.from(
            new Set(allFlatItems.flatMap(i => [i.createVersion, i.updateVersion].filter(Boolean) as string[]))
        ).sort(compareVersionsDesc);

        const latest = versions[0];
        if (!latest) {
            return null;
        }

        const added = allFlatItems
            .filter(i => i.createVersion === latest)
            .sort((a, b) => a.caption.localeCompare(b.caption));
        const updated = allFlatItems
            .filter(i => i.updateVersion === latest)
            .sort((a, b) => a.caption.localeCompare(b.caption));

        return { version: latest, added, updated };
    }, []);

    return (
        <>
            {whatsNew != null && !dismissed && (
                <div
                    className="block notification"
                    style={{ borderLeft: "4px solid #485fc7", borderRadius: "0.375rem", paddingLeft: "1.25rem" }}
                >
                    <div className="is-flex is-justify-content-space-between is-align-items-flex-start mb-2">
                        <p className="has-text-weight-semibold">
                            What&apos;s new in
                            {` `}
                            <span style={{ color: "#485fc7" }}>
                                v{whatsNew.version}
                            </span>
                            {` `}
                            &mdash;
                            {` `}
                            <Link to="/changelog" className="is-size-7">
                                Full changelog
                            </Link>
                        </p>
                        <button
                            type="button"
                            className="delete"
                            title="Dismiss"
                            onClick={() => setDismissed(true)}
                        />
                    </div>
                    <div className="is-flex" style={{ gap: "2rem", flexWrap: "wrap" }}>
                        {whatsNew.added.length > 0 && (
                            <div>
                                <p className="mb-1 is-flex is-align-items-center" style={{ gap: "0.4rem" }}>
                                    <Tag content="NEW" style={ElementColor.Danger} />
                                    <span className="has-text-weight-medium">Added</span>
                                </p>
                                <ul style={{ listStyle: "none", paddingLeft: "0.25rem" }}>
                                    {whatsNew.added.slice(0, MAX_WHATS_NEW).map(item => (
                                        <li key={item.path}>
                                            <Link to={item.path} className="has-text-link is-size-7">
                                                {item.caption}
                                            </Link>
                                            {item.groupCaption ? (
                                                <span className="has-text-grey is-size-7">
                                                    {` `}({item.groupCaption})
                                                </span>
                                            ) : null}
                                        </li>
                                    ))}
                                    {whatsNew.added.length > MAX_WHATS_NEW && (
                                        <li>
                                            <Link to="/changelog" className="has-text-grey is-size-7 is-italic">
                                                +{whatsNew.added.length - MAX_WHATS_NEW} more...
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        )}
                        {whatsNew.updated.length > 0 && (
                            <div>
                                <p className="mb-1 is-flex is-align-items-center" style={{ gap: "0.4rem" }}>
                                    <Tag content="UPD" style={ElementColor.Info} />
                                    <span className="has-text-weight-medium">Updated</span>
                                </p>
                                <ul style={{ listStyle: "none", paddingLeft: "0.25rem" }}>
                                    {whatsNew.updated.slice(0, MAX_WHATS_NEW).map(item => (
                                        <li key={item.path}>
                                            <Link to={item.path} className="has-text-link is-size-7">
                                                {item.caption}
                                            </Link>
                                            {item.groupCaption ? (
                                                <span className="has-text-grey is-size-7">
                                                    {` `}({item.groupCaption})
                                                </span>
                                            ) : null}
                                        </li>
                                    ))}
                                    {whatsNew.updated.length > MAX_WHATS_NEW && (
                                        <li>
                                            <Link to="/changelog" className="has-text-grey is-size-7 is-italic">
                                                +{whatsNew.updated.length - MAX_WHATS_NEW} more...
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            )}

            <div className="block">
                <h1 className="title is-1">
                    About
                </h1>
                <p>
                    <code>
                        @bodynarf/react.components
                    </code>
                    {` `}
                    (also referred to as
                    {` `}
                    <code>
                        BBR.Components
                    </code>
                    ) is a library of ready-to-use React components styled with the Bulma CSS framework.
                    <br />
                    <br />
                    Currently, the library is based on Bulma versions
                    {` `}
                    <code>
                        &lt; 1.0.0
                    </code>
                    , although this is not explicitly listed in the dependencies. Versions
                    {` `}
                    <code>
                        &gt; 1.0.0
                    </code>
                    {` `}
                    can also be used, but you may encounter minor conflicts that can be easily fixed with simple style overrides.
                    <br />
                    <br />
                    Each component imported from the library comes with a CSS class prefixed with
                    <code>
                        bbr
                    </code>
                    {` `}
                    (
                    <span className="is-italic">
                        for example
                        {` `}
                        <code>
                            .bbr-icon
                        </code>
                    </span>
                    ).
                    <br />
                    <br />
                    A grouped overview of all public components is provided below.
                </p>
            </div>

            <div className="block">
                <h2 className="subtitle is-2">
                    Installation & usage
                </h2>
                <span>
                    Before installing, make sure the following dependencies are already present:
                </span>
                <ul style={{ listStyle: "circle", paddingLeft: "2.5rem", marginBottom: "1rem" }}>
                    <li>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            title="View the '@bodynarf/utils' package on npm"
                            href="https://www.npmjs.com/package/@bodynarf/utils"
                        >
                            @bodynarf/utils
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            title="View the 'bulma' package on npm"
                            href="https://www.npmjs.com/package/bulma"
                        >
                            bulma
                        </a>
                    </li>
                    <li>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            title="View the 'react' package on npm"
                            href="https://www.npmjs.com/package/react"
                        >
                            react
                        </a>
                    </li>
                </ul>
                <span>
                    You can install the component library by running the following command with npm:
                </span>

                <CodeExample
                    code="npm install @bodynarf/react.components"
                    language="sh"
                />

                <span>
                    Once installed, you can start using the components in your project. For example:
                </span>
                <CodeExample
                    code={[
                        `import { ButtonStyle } from "@bodynarf/react.components";`,
                        `import ButtonComponent from "@bodynarf/react.components/components/button";`,
                        "",
                        `<ButtonComponent style={ButtonStyle.Primary} caption="Button caption" />`
                    ].join("\n")}
                />
                <span>
                    A detailed description of each component can be found on its documentation page.
                </span>
            </div>

            <div className="block">
                <div className="block">
                    <h2 className="subtitle is-2">
                        Contents
                    </h2>
                </div>

                <div className="block">
                    <h3 className="subtitle is-3">
                        Components
                    </h3>
                    <p>
                        Overview of the basic building blocks provided by the library.
                    </p>
                </div>

                <div className="block">
                    <h3 className="subtitle is-3">
                        Controls
                    </h3>
                    <p>
                        Input elements and form controls designed for flexible use. Most control props are based on the
                        {` `}
                        <code>
                            BaseInputElementProps
                        </code>
                        {` `}
                        type, which defines common fields and simplifies configuration and interaction.
                    </p>
                </div>

                <div className="block">
                    <h3 className="subtitle is-3">
                        Common props
                    </h3>
                    <p>
                        Shared properties available across multiple components for consistent customization. This section covers the
                        {` `}
                        <code>
                            BaseInputElementProps
                        </code>
                        {` `}
                        type in detail.
                    </p>
                </div>
            </div>

            <div className="block">
                <h3 className="subtitle is-3">
                    PS
                </h3>
                <TranslationPanel />
            </div>
        </>
    );
};

export default Home;

