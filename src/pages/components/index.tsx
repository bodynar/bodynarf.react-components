import { MenuItem } from "../routing";

import Icon from "./icon";
import Accordion from "./accordion";
import Alert from "./alert";
import Animations from "./animations";
import Avatar from "./avatar";
import Badge from "./badge";
import Button from "./button";
import Calendar from "./calendar";
import Card from "./card";
import Carousel from "./carousel";
import Chip from "./chip";
import ConfirmDialog from "./confirmDialog";
import ContextMenu from "./contextMenu";
import DateRangePicker from "./dateRangePicker";
import Dropdown from "./dropdown";
import EmptyState from "./emptyState";
import File from "./file";
import ImageViewer from "./imageViewer";
import Menu from "./menu";
import ModalWrapper from "./modalWrapper";
import Multiselect from "./multiselect";
import Notification from "./notification";
import Paginator from "./paginator";
import Popover from "./popover";
import Progress from "./progress";
import Rating from "./rating";
import Search from "./search";
import SegmentedControl from "./segmentedControl";
import SidePanel from "./sidePanel";
import Skeleton from "./skeleton";
import Spinner from "./spinner";
import SplitButton from "./splitButton";
import Stat from "./stat";
import Stepper from "./stepper";
import Table from "./table";
import Tabs from "./tabs";
import Tag from "./tag";
import TagGroup from "./tagGroup";
import Timeline from "./timeline";
import Toast from "./toast";
import Tooltip from "./tooltip";
import Breadcrumbs from "./breadcrumbs";
import ComplexTable from "./complexTable";
import TreeView from "./treeView";

const components: MenuItem = {
    name: "component-group",
    caption: "Components",
    children: [
        {
            path: "/components/icon",
            caption: "Icon",
            component: <Icon />,
            createVersion: "0.1",
        },
        {
            path: "/components/accordion",
            caption: "Accordion",
            component: <Accordion />,
            createVersion: "1.6",
        },
        {
            path: "/components/button",
            caption: "Button",
            component: <Button />,
            createVersion: "0.1",
        },
        {
            path: "/components/tag",
            caption: "Tag",
            component: <Tag />,
            createVersion: "1.5",
        },
        {
            path: "/components/dropdown",
            caption: "Dropdown",
            component: <Dropdown />,
            createVersion: "0.1",
        },
        {
            path: "/components/multiselect",
            caption: "Multiselect",
            component: <Multiselect />,
            createVersion: "1.10",
        },
        {
            path: "/components/tabs",
            caption: "Tabs",
            component: <Tabs />,
            createVersion: "1.6",
        },
        {
            path: "/components/search",
            caption: "Search",
            component: <Search />,
            createVersion: "0.1",
        },
        {
            path: "/components/paginator",
            caption: "Paginator",
            component: <Paginator />,
            createVersion: "1.4",
        },
        {
            path: "/components/breadcrumbs",
            caption: "Breadcrumbs",
            component: <Breadcrumbs />,
            createVersion: "1.8",
        },
        {
            path: "/components/file",
            caption: "File",
            component: <File />,
            createVersion: "1.11",
        },
        {
            path: "/components/table",
            caption: "Table",
            component: <Table />,
            createVersion: "1.8",
        },
        {
            path: "/components/modalWrapper",
            caption: "Modal Wrapper",
            component: <ModalWrapper />,
            createVersion: "1.14",
        },
        {
            path: "/components/stepper",
            caption: "Stepper",
            component: <Stepper />,
            createVersion: "1.14",
        },
        {
            path: "/components/timeline",
            caption: "Timeline",
            component: <Timeline />,
            createVersion: "1.14",
        },
        {
            path: "/components/progress",
            caption: "Progress",
            component: <Progress />,
            createVersion: "1.14",
        },
        {
            path: "/components/splitButton",
            caption: "Split Button",
            component: <SplitButton />,
            createVersion: "1.14",
        },
        {
            path: "/components/alert",
            caption: "Alert",
            component: <Alert />,
            createVersion: "1.15",
        },
        {
            path: "/components/animations",
            caption: "Animations",
            component: <Animations />,
            createVersion: "1.15",
        },
        {
            path: "/components/avatar",
            caption: "Avatar",
            component: <Avatar />,
            createVersion: "1.15",
        },
        {
            path: "/components/badge",
            caption: "Badge",
            component: <Badge />,
            createVersion: "1.15",
        },
        {
            path: "/components/calendar",
            caption: "Calendar",
            component: <Calendar />,
            createVersion: "1.15",
        },
        {
            path: "/components/card",
            caption: "Card",
            component: <Card />,
            createVersion: "1.15",
        },
        {
            path: "/components/carousel",
            caption: "Carousel",
            component: <Carousel />,
            createVersion: "1.15",
        },
        {
            path: "/components/chip",
            caption: "Chip",
            component: <Chip />,
            createVersion: "1.15",
        },
        {
            path: "/components/confirmDialog",
            caption: "Confirm Dialog",
            component: <ConfirmDialog />,
            createVersion: "1.15",
        },
        {
            path: "/components/contextMenu",
            caption: "Context Menu",
            component: <ContextMenu />,
            createVersion: "1.15",
        },
        {
            path: "/components/dateRangePicker",
            caption: "Date Range Picker",
            component: <DateRangePicker />,
            createVersion: "1.15",
        },
        {
            path: "/components/emptyState",
            caption: "Empty State",
            component: <EmptyState />,
            createVersion: "1.15",
        },
        {
            path: "/components/imageViewer",
            caption: "Image Viewer",
            component: <ImageViewer />,
            createVersion: "1.15",
        },
        {
            path: "/components/menu",
            caption: "Menu",
            component: <Menu />,
            createVersion: "1.15",
        },
        {
            path: "/components/notification",
            caption: "Notification",
            component: <Notification />,
            createVersion: "1.15",
        },
        {
            path: "/components/popover",
            caption: "Popover",
            component: <Popover />,
            createVersion: "1.15",
        },
        {
            path: "/components/rating",
            caption: "Rating",
            component: <Rating />,
            createVersion: "1.15",
        },
        {
            path: "/components/segmentedControl",
            caption: "Segmented Control",
            component: <SegmentedControl />,
            createVersion: "1.15",
        },
        {
            path: "/components/sidePanel",
            caption: "Side Panel",
            component: <SidePanel />,
            createVersion: "1.15",
        },
        {
            path: "/components/skeleton",
            caption: "Skeleton",
            component: <Skeleton />,
            createVersion: "1.15",
        },
        {
            path: "/components/spinner",
            caption: "Spinner",
            component: <Spinner />,
            createVersion: "1.15",
        },
        {
            path: "/components/stat",
            caption: "Stat",
            component: <Stat />,
            createVersion: "1.15",
        },
        {
            path: "/components/tagGroup",
            caption: "Tag Group",
            component: <TagGroup />,
            createVersion: "1.15",
        },
        {
            path: "/components/toast",
            caption: "Toast",
            component: <Toast />,
            createVersion: "1.15",
        },
        {
            path: "/components/tooltip",
            caption: "Tooltip",
            component: <Tooltip />,
            createVersion: "1.15",
        },
        {
            path: "/components/treeView",
            caption: "Tree View",
            component: <TreeView />,
            createVersion: "1.15",
        },
        {
            path: "/components/complexTable",
            caption: "Complex Table",
            component: <ComplexTable />,
            createVersion: "1.15",
        },
    ].sort((x, y) => x.caption.localeCompare(y.caption))
};

export default components;
