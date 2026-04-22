import SidePanel from "./component";
import SidePanelTitle from "./components/title";
import SidePanelBody from "./components/body";

export * from "./types";

export default Object.assign(SidePanel, {
    Title: SidePanelTitle,
    Body: SidePanelBody,
});
