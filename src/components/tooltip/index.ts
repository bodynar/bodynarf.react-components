import Tooltip from "./component";
import TooltipHint from "./components/hint";
import TooltipTarget from "./components/target";

export default Object.assign(Tooltip, {
    Hint: TooltipHint,
    Target: TooltipTarget,
});

export * from "./types";
