import { MenuItem } from "../routing";

import UseDebounceHandler from "./useDebounceHandler";
import UseDebounce from "./useDebounce";
import UseMount from "./useMount";
import UseUnmount from "./useUnmount";
import UsePrevious from "./usePrevious";
import UseTimeout from "./useTimeout";
import UseInterval from "./useInterval";
import UseUpdateEffect from "./useUpdateEffect";
import UseLocalStorage from "./useLocalStorage";
import UseSessionStorage from "./useSessionStorage";
import UsePagination from "./usePagination";
import UseEventListener from "./useEventListener";
import UseComponentOutsideClick from "./useComponentOutsideClick";
import UseClipboard from "./useClipboard";
import UseKeyPress from "./useKeyPress";
import UseFocus from "./useFocus";
import UseWindowSize from "./useWindowSize";
import UseComplexTable from "./useComplexTable";

const hooks: MenuItem = {
    name: "hooks-group",
    caption: "Hooks",
    defaultCollapsed: true,
    children: [
        {
            path: "/hooks/useDebounceHandler",
            caption: "useDebounceHandler",
            component: <UseDebounceHandler />,
            createVersion: "1.15",
        },
        {
            path: "/hooks/useMount",
            caption: "useMount",
            component: <UseMount />,
        },
        {
            path: "/hooks/useUnmount",
            caption: "useUnmount",
            component: <UseUnmount />,
        },
        {
            path: "/hooks/usePrevious",
            caption: "usePrevious",
            component: <UsePrevious />,
            createVersion: "1.15",
        },
        {
            path: "/hooks/useTimeout",
            caption: "useTimeout",
            component: <UseTimeout />,
            createVersion: "1.15",
        },
        {
            path: "/hooks/useInterval",
            caption: "useInterval",
            component: <UseInterval />,
            createVersion: "1.15",
        },
        {
            path: "/hooks/useUpdateEffect",
            caption: "useUpdateEffect",
            component: <UseUpdateEffect />,
            createVersion: "1.15",
        },
        {
            path: "/hooks/useLocalStorage",
            caption: "useLocalStorage",
            component: <UseLocalStorage />,
            createVersion: "1.15",
        },
        {
            path: "/hooks/usePagination",
            caption: "usePagination",
            component: <UsePagination />,
        },
        {
            path: "/hooks/useEventListener",
            caption: "useEventListener",
            component: <UseEventListener />,
            createVersion: "1.15",
        },
        {
            path: "/hooks/useComponentOutsideClick",
            caption: "useComponentOutsideClick",
            component: <UseComponentOutsideClick />,
            updateVersion: "1.15",
        },
        {
            path: "/hooks/useDebounce",
            caption: "useDebounce",
            component: <UseDebounce />,
            createVersion: "1.15",
        },
        {
            path: "/hooks/useSessionStorage",
            caption: "useSessionStorage",
            component: <UseSessionStorage />,
            createVersion: "1.15",
        },
        {
            path: "/hooks/useClipboard",
            caption: "useClipboard",
            component: <UseClipboard />,
            createVersion: "1.15",
        },
        {
            path: "/hooks/useKeyPress",
            caption: "useKeyPress",
            component: <UseKeyPress />,
            createVersion: "1.15",
        },
        {
            path: "/hooks/useFocus",
            caption: "useFocus",
            component: <UseFocus />,
            createVersion: "1.15",
        },
        {
            path: "/hooks/useWindowSize",
            caption: "useWindowSize",
            component: <UseWindowSize />,
            createVersion: "1.15",
        },
        {
            path: "/hooks/useComplexTable",
            caption: "useComplexTable",
            component: <UseComplexTable />,
            createVersion: "1.14",
            updateVersion: "1.15",
        },
    ].sort((x, y) => x.caption.localeCompare(y.caption))
};

export default hooks;
