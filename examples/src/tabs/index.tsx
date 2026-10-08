import { FC, useState } from "react";

import Tabs from "@bodynarf/react.components/components/tabs";
import { ElementPosition, ElementSize, TabItem, TabsStyle } from "@bodynarf/react.components";

const TABS: Array<TabItem> = [
    { id: "overview",  caption: "Overview"  },
    { id: "details",   caption: "Details"   },
    { id: "history",   caption: "History"   },
    { id: "settings",  caption: "Settings"  },
];

const ICON_TABS: Array<TabItem> = [
    { id: "home",     caption: "Home",     icon: { name: "house" }       },
    { id: "profile",  caption: "Profile",  icon: { name: "person" }      },
    { id: "messages", caption: "Messages", icon: { name: "envelope" }    },
    { id: "settings", caption: "Settings", icon: { name: "gear" }        },
];

const CONTENT: Record<string, string> = {
    overview:  "This is the Overview tab content.",
    details:   "Detailed information goes here.",
    history:   "Historical data and logs.",
    settings:  "Configure your preferences here.",
    home:      "Welcome home!",
    profile:   "Your profile information.",
    messages:  "You have 3 unread messages.",
};

const TabsExamples: FC = () => {
    const [active1, setActive1] = useState(TABS[0]);
    const [active2, setActive2] = useState(ICON_TABS[0]);
    const [active3, setActive3] = useState(TABS[0]);
    const [active4, setActive4] = useState(TABS[0]);

    return (
        <section className="section">
            <div className="container">
                <h1 className="title is-3">Tabs</h1>

                {/* Basic */}
                <div className="box">
                    <p className="subtitle is-5">Basic</p>
                    <Tabs items={TABS} defaultActive={active1} onActiveItemChange={setActive1} />
                    <div className="content mt-3">
                        <p>{CONTENT[active1.id]}</p>
                    </div>
                </div>

                {/* With icons */}
                <div className="box">
                    <p className="subtitle is-5">With Icons</p>
                    <Tabs items={ICON_TABS} defaultActive={active2} onActiveItemChange={setActive2} />
                    <div className="content mt-3">
                        <p>{CONTENT[active2.id]}</p>
                    </div>
                </div>

                {/* Styles */}
                <div className="box">
                    <p className="subtitle is-5">Styles</p>
                    <p className="help mb-2">Default</p>
                    <Tabs items={TABS} defaultActive={TABS[0]} onActiveItemChange={() => {}} />
                    <p className="help mt-3 mb-2">Boxed</p>
                    <Tabs items={TABS} defaultActive={TABS[0]} style={TabsStyle.boxed} onActiveItemChange={() => {}} />
                    <p className="help mt-3 mb-2">Radio Button (toggle)</p>
                    <Tabs items={TABS} defaultActive={TABS[0]} style={TabsStyle.radioButton} onActiveItemChange={() => {}} />
                    <p className="help mt-3 mb-2">Radio Button Rounded</p>
                    <Tabs items={TABS} defaultActive={TABS[0]} style={TabsStyle.radioButtonRounded} onActiveItemChange={() => {}} />
                </div>

                {/* Sizes */}
                <div className="box">
                    <p className="subtitle is-5">Sizes</p>
                    {[ElementSize.Small, ElementSize.Normal, ElementSize.Medium, ElementSize.Large].map(size => (
                        <div key={size} className="mb-3">
                            <p className="help mb-1">{size}</p>
                            <Tabs items={TABS} defaultActive={TABS[0]} size={size} onActiveItemChange={() => {}} />
                        </div>
                    ))}
                </div>

                {/* Positions */}
                <div className="box">
                    <p className="subtitle is-5">Positions</p>
                    <p className="help mb-2">Left (default)</p>
                    <Tabs items={TABS} defaultActive={active3} position={ElementPosition.Left}   onActiveItemChange={setActive3} />
                    <p className="help mt-3 mb-2">Center</p>
                    <Tabs items={TABS} defaultActive={active3} position={ElementPosition.Center} onActiveItemChange={setActive3} />
                    <p className="help mt-3 mb-2">Right</p>
                    <Tabs items={TABS} defaultActive={active3} position={ElementPosition.Right}  onActiveItemChange={setActive3} />
                </div>

                {/* Full width */}
                <div className="box">
                    <p className="subtitle is-5">Full Width</p>
                    <Tabs items={TABS} defaultActive={active4} fullWidth onActiveItemChange={setActive4} />
                </div>
            </div>
        </section>
    );
};

export default TabsExamples;
