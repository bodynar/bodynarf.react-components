import { MenuItem } from "../routing";

import Icon from "./icon";
import Accordion from "./accordion";
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
import ModalWrapper from "./modalWrapper";
import Stepper from "./stepper";
import Timeline from "./timeline";
import Progress from "./progress";
import SplitButton from "./splitButton";

const components: MenuItem = {
    name: "component-group",
    caption: "Components",
    children: [
        {
            path: "/components/icon",
            caption: "Icon",
            component: <Icon />,
            version: "0.1",
        },
        {
            path: "/components/accordion",
            caption: "Accordion",
            component: <Accordion />,
            version: "1.6",
        },
        {
            path: "/components/button",
            caption: "Button",
            component: <Button />,
            version: "0.1",
        },
        {
            path: "/components/tag",
            caption: "Tag",
            component: <Tag />,
            version: "1.5",
        },
        {
            path: "/components/dropdown",
            caption: "Dropdown",
            component: <Dropdown />,
            version: "0.1",
        },
        {
            path: "/components/multiselect",
            caption: "Multiselect",
            component: <Multiselect />,
            version: "1.10",
        },
        {
            path: "/components/tabs",
            caption: "Tabs",
            component: <Tabs />,
            version: "1.6",
        },
        {
            path: "/components/search",
            caption: "Search",
            component: <Search />,
            version: "0.1",
        },
        {
            path: "/components/paginator",
            caption: "Paginator",
            component: <Paginator />,
            version: "1.4",
        },
        {
            path: "/components/breadcrumbs",
            caption: "Breadcrumbs",
            component: <Breadcrumbs />,
            version: "1.8",
        },
        {
            path: "/components/file",
            caption: "File",
            component: <File />,
            version: "1.11",
        },
        {
            path: "/components/table",
            caption: "Table",
            component: <Table />,
            version: "1.8",
        },
        {
            path: "/components/modalWrapper",
            caption: "Modal Wrapper",
            component: <ModalWrapper />,
            version: "1.14",
        },
        {
            path: "/components/stepper",
            caption: "Stepper",
            component: <Stepper />,
            version: "1.14",
        },
        {
            path: "/components/timeline",
            caption: "Timeline",
            component: <Timeline />,
            version: "1.14",
        },
        {
            path: "/components/progress",
            caption: "Progress",
            component: <Progress />,
            version: "1.14",
        },
        {
            path: "/components/splitButton",
            caption: "Split Button",
            component: <SplitButton />,
            version: "1.14",
        },
    ].sort((x, y) => x.caption.localeCompare(y.caption))
};

export default components;
