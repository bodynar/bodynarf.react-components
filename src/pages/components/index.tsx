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
import Breadcrumbs from "./breadcrumbs";
import File from "./file";
import Table from "./table";

const components: MenuItem = {
    name: "component-group",
    caption: "Components",
    children: [
        {
            path: "/components/icon",
            caption: "Icon",
            component: <Icon />,
        },
        {
            path: "/components/accordion",
            caption: "Accordion",
            component: <Accordion />,
        },
        {
            path: "/components/anchor",
            caption: "Anchor",
            component: <Anchor />,
        },
        {
            path: "/components/button",
            caption: "Button",
            component: <Button />,
        },
        {
            path: "/components/tag",
            caption: "Tag",
            component: <Tag />,
        },
        {
            path: "/components/dropdown",
            caption: "Dropdown",
            component: <Dropdown />
        },
        {
            path: "/components/multiselect",
            caption: "Multiselect",
            component: <Multiselect />
        },
        {
            path: "/components/tabs",
            caption: "Tabs",
            component: <Tabs />
        },
        {
            path: "/components/search",
            caption: "Search",
            component: <Search />
        },
        {
            path: "/components/paginator",
            caption: "Paginator",
            component: <Paginator />
        },
        {
            path: "/components/breadcrumbs",
            caption: "Breadcrumbs",
            component: <Breadcrumbs />
        },
        {
            path: "/components/file",
            caption: "File",
            component: <File />
        },
        {
            path: "/components/table",
            caption: "Table",
            component: <Table />
        },
    ].sort((x, y) => x.caption.localeCompare(y.caption))
};

export default components;
