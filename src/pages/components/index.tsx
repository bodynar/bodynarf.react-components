import { MenuItem } from "../routing";

import Icon from "./icon";
import Accordion from "./accordion";
import Anchor from "./anchor";
import Button from "./button";
import Tag from "./tag";
import Dropdown from "./dropdown";
import Tabs from "./tabs";
import Search from "./search";
import Paginator from "./paginator";
import Multiselect from "./multiselect";

const components: MenuItem = {
    name: "",
    caption: "Components",
    children: [
        {
            name: "",

            path: "/components/icon",
            caption: "Icon",
            component: <Icon />,
        },
        {
            name: "",
            path: "/components/accordion",
            caption: "Accordion",
            component: <Accordion />,
        },
        {
            name: "",
            path: "/components/anchor",
            caption: "Anchor",
            component: <Anchor />,
        },
        {
            name: "",
            path: "/components/button",
            caption: "Button",
            component: <Button />,
        },
        {
            name: "",
            path: "/components/tag",
            caption: "Tag",
            component: <Tag />,
        },
        {
            name: "",
            path: "/components/dropdown",
            caption: "Dropdown",
            component: <Dropdown />
        },
        {
            name: "",
            path: "/components/multiselect",
            caption: "Multiselect",
            component: <Multiselect />
        },
        {
            name: "",
            path: "/components/tabs",
            caption: "Tabs",
            component: <Tabs />
        },
        {
            name: "",
            path: "/components/search",
            caption: "Search",
            component: <Search />
        },
        {
            name: "",
            path: "/components/paginator",
            caption: "Paginator",
            component: <Paginator />
        },
    ].sort((x, y) => x.caption.localeCompare(y.caption))
};

export default components;
