import { MenuItem } from "../routing";

import UseDebounceHandler from "./useDebounceHandler";
import UseMount from "./useMount";
import UseUnmount from "./useUnmount";
import UsePrevious from "./usePrevious";
import UseTimeout from "./useTimeout";
import UseInterval from "./useInterval";
import UseUpdateEffect from "./useUpdateEffect";
import UseLocalStorage from "./useLocalStorage";
import UsePagination from "./usePagination";
import UseEventListener from "./useEventListener";
import UseComponentOutsideClick from "./useComponentOutsideClick";

const hooks: MenuItem = {
    name: "hooks-group",
    caption: "Hooks",
    children: [
        {
            path: "/hooks/useDebounceHandler",
            caption: "useDebounceHandler",
            component: <UseDebounceHandler />,
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
        },
        {
            path: "/hooks/useTimeout",
            caption: "useTimeout",
            component: <UseTimeout />,
        },
        {
            path: "/hooks/useInterval",
            caption: "useInterval",
            component: <UseInterval />,
        },
        {
            path: "/hooks/useUpdateEffect",
            caption: "useUpdateEffect",
            component: <UseUpdateEffect />,
        },
        {
            path: "/hooks/useLocalStorage",
            caption: "useLocalStorage",
            component: <UseLocalStorage />,
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
        },
        {
            path: "/hooks/useComponentOutsideClick",
            caption: "useComponentOutsideClick",
            component: <UseComponentOutsideClick />,
        },
    ].sort((x, y) => x.caption.localeCompare(y.caption))
};

export default hooks;
