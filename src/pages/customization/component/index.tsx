import { FC } from "react";
import { Link } from "react-router";

import { useLocalStorage } from "@bodynarf/react.components/hooks";

import { LS_PREFIX, ViewMode } from "../constants";
import SizeOptionSelector from "../components/sizeOptionSelector";
import ColorOptionSelector from "../components/colorOptionSelector";

/** Display settings page */
const Customization: FC = () => {
    const [sizeViewMode, setSizeViewMode] = useLocalStorage(`${LS_PREFIX}sizes`, "dropdown");
    const [colorViewMode, setColorViewMode] = useLocalStorage(`${LS_PREFIX}colors`, "dropdown");

    return (
        <section>
            <h1 className="title">Display Settings</h1>

            <div className="block">
                <p className="subtitle is-6 has-text-weight-semibold">
                    Size Variations Display
                </p>
                <p className="has-text-grey is-size-7 mb-3">
                    Controls how size prop variations are displayed — either a dropdown or small labeled buttons.
                    Example component: <Link to="/components/segmentedControl">SegmentedControl</Link>.
                </p>
                <SizeOptionSelector
                    value={sizeViewMode as ViewMode}
                    onChange={setSizeViewMode}
                />
            </div>

            <hr />

            <div className="block">
                <p className="subtitle is-6 has-text-weight-semibold">
                    Color Variations Display
                </p>
                <p className="has-text-grey is-size-7 mb-3">
                    Controls how color prop variations are displayed — either a dropdown or small colored buttons.
                    Example component: <Link to="/components/segmentedControl">SegmentedControl</Link>.
                </p>
                <ColorOptionSelector
                    value={colorViewMode as ViewMode}
                    onChange={setColorViewMode}
                />
            </div>
        </section>
    );
};

export default Customization;
