import { FC } from "react";

import Breadcrumbs from "@bodynarf/react.components/components/breadcrumbs";
import { BreadCrumb, ElementPosition, ElementSize } from "@bodynarf/react.components";

const BASIC_ITEMS: Array<BreadCrumb> = [
    { caption: "Home", href: "/" },
    { caption: "Products", href: "/products" },
    { caption: "Laptop", href: "/products/laptop" },
];

const ICON_ITEMS: Array<BreadCrumb> = [
    { caption: "Home", href: "/", icon: { name: "house" } },
    { caption: "Dashboard", href: "/dashboard", icon: { name: "speedometer2" } },
    { caption: "Settings", href: "/settings", icon: { name: "gear" } },
];

const BreadcrumbsExamples: FC = () => (
    <section className="section">
        <div className="container">
            <h1 className="title is-3">Breadcrumbs</h1>

            {/* Basic */}
            <div className="box">
                <p className="subtitle is-5">Basic</p>
                <Breadcrumbs items={BASIC_ITEMS} />
            </div>

            {/* With icons */}
            <div className="box">
                <p className="subtitle is-5">With Icons</p>
                <Breadcrumbs items={ICON_ITEMS} />
            </div>

            {/* Separators */}
            <div className="box">
                <p className="subtitle is-5">Separators</p>
                <p className="help mb-2">arrow (default)</p>
                <Breadcrumbs items={BASIC_ITEMS} separator="arrow" />
                <p className="help mb-2 mt-3">bullet</p>
                <Breadcrumbs items={BASIC_ITEMS} separator="bullet" />
                <p className="help mb-2 mt-3">dot</p>
                <Breadcrumbs items={BASIC_ITEMS} separator="dot" />
                <p className="help mb-2 mt-3">succeeds</p>
                <Breadcrumbs items={BASIC_ITEMS} separator="succeeds" />
            </div>

            {/* Sizes */}
            <div className="box">
                <p className="subtitle is-5">Sizes</p>
                <p className="help mb-2">Small</p>
                <Breadcrumbs items={BASIC_ITEMS} size={ElementSize.Small} />
                <p className="help mb-2 mt-3">Normal (default)</p>
                <Breadcrumbs items={BASIC_ITEMS} size={ElementSize.Normal} />
                <p className="help mb-2 mt-3">Medium</p>
                <Breadcrumbs items={BASIC_ITEMS} size={ElementSize.Medium} />
                <p className="help mb-2 mt-3">Large</p>
                <Breadcrumbs items={BASIC_ITEMS} size={ElementSize.Large} />
            </div>

            {/* Positions */}
            <div className="box">
                <p className="subtitle is-5">Positions</p>
                <p className="help mb-2">Left (default)</p>
                <Breadcrumbs items={BASIC_ITEMS} position={ElementPosition.Left} />
                <p className="help mb-2 mt-3">Center</p>
                <Breadcrumbs items={BASIC_ITEMS} position={ElementPosition.Center} />
                <p className="help mb-2 mt-3">Right</p>
                <Breadcrumbs items={BASIC_ITEMS} position={ElementPosition.Right} />
            </div>
        </div>
    </section>
);

export default BreadcrumbsExamples;
