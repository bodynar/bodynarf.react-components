import { FC } from "react";
import { HashRouter, NavLink, Navigate, Route, Routes } from "react-router-dom";

import "./App.scss";

import AccordionExamples          from "./accordion";
import ActionBarExamples          from "./actionBar";
import AlertExamples              from "./alert";
import AutoCompleteExamples       from "./autoComplete";
import AvatarExamples             from "./avatar";
import BadgeExamples              from "./badge";
import BorderBeamExamples         from "./borderBeam";
import BreadcrumbsExamples        from "./breadcrumbs";
import ButtonExamples             from "./button";
import ButtonGroupExamples        from "./buttonGroup";
import CalendarExamples           from "./calendar";
import CardExamples               from "./card";
import CarouselExamples           from "./carousel";
import CenterExamples             from "./center";
import CircularMeterExamples      from "./circularMeter";
import ChipExamples               from "./chip";
import ComplexTableExamples       from "./complexTable";
import ConfirmDialogExamples      from "./confirmDialog";
import ContextMenuExamples        from "./contextMenu";
import DateInputExamples          from "./dateInput";
import DndListExamples            from "./dndList";
import DropdownExamples           from "./dropdown";
import DropdownMenuExamples       from "./dropdownMenu";
import DropzoneExamples           from "./dropzone";
import FileExamples               from "./file";
import FloatButtonExamples        from "./floatButton";
import HooksExamples              from "./hooks";
import IconExamples               from "./icon";
import ImageViewerAndMenuExamples from "./imageViewerAndMenu";
import InputAddonsExamples        from "./inputAddons";
import MenuButtonExamples         from "./menuButton";
import ModalExamples              from "./modal";
import MultiselectExamples        from "./multiselect";
import PaginatorExamples          from "./paginator";
import PopoverAndDateRangeExamples from "./popoverAndDateRangePicker";
import PrimitivesExamples         from "./primitives";
import ProgressExamples           from "./progress";
import RadioCardGroupExamples     from "./radioCardGroup";
import RatingAndSegmentedExamples from "./ratingAndSegmentedControl";
import SearchExamples             from "./search";
import SidePanelExamples          from "./sidePanel";
import SkeletonAndNotifExamples   from "./skeletonAndNotification";
import SpinnerAndEmptyExamples    from "./spinnerAndEmptyState";
import SplitButtonExamples        from "./splitButton";
import StackExamples              from "./stack";
import StatAndOtpExamples         from "./statAndOtpInput";
import StepperExamples            from "./stepper";
import TableExamples              from "./table";
import TableOfContentsExamples    from "./tableOfContents";
import TabsExamples               from "./tabs";
import TagExamples                from "./tag";
import TagGroupExamples           from "./tagGroup";
import TimelineExamples           from "./timeline";
import ToastExamples              from "./toast";
import ToggleButtonExamples       from "./toggleButton";
import ToggleButtonGroupExamples  from "./toggleButtonGroup";
import TooltipExamples            from "./tooltip";
import TreeViewExamples           from "./treeView";

const PAGES = [
    { id: "accordion",          label: "Accordion",               Component: AccordionExamples          },
    { id: "actionBar",          label: "ActionBar",               Component: ActionBarExamples          },
    { id: "alert",              label: "Alert",                   Component: AlertExamples              },
    { id: "autoComplete",       label: "AutoComplete",            Component: AutoCompleteExamples       },
    { id: "avatar",             label: "Avatar",                  Component: AvatarExamples             },
    { id: "badge",              label: "Badge",                   Component: BadgeExamples              },
    { id: "borderBeam",         label: "BorderBeam",              Component: BorderBeamExamples         },
    { id: "breadcrumbs",        label: "Breadcrumbs",             Component: BreadcrumbsExamples        },
    { id: "button",             label: "Button",                  Component: ButtonExamples             },
    { id: "buttonGroup",        label: "ButtonGroup",             Component: ButtonGroupExamples        },
    { id: "calendar",           label: "Calendar",                Component: CalendarExamples           },
    { id: "card",               label: "Card",                    Component: CardExamples               },
    { id: "carousel",           label: "Carousel",                Component: CarouselExamples           },
    { id: "center",             label: "Center",                  Component: CenterExamples             },
    { id: "circularMeter",      label: "CircularMeter",           Component: CircularMeterExamples      },
    { id: "chip",               label: "Chip",                    Component: ChipExamples               },
    { id: "complexTable",       label: "ComplexTable",            Component: ComplexTableExamples       },
    { id: "confirmDialog",      label: "ConfirmDialog",           Component: ConfirmDialogExamples      },
    { id: "contextMenu",        label: "ContextMenu",             Component: ContextMenuExamples        },
    { id: "dateInput",          label: "DateInput",               Component: DateInputExamples          },
    { id: "dndList",            label: "DndList",                 Component: DndListExamples            },
    { id: "dropdown",           label: "Dropdown",                Component: DropdownExamples           },
    { id: "dropdownMenu",       label: "DropdownMenu",            Component: DropdownMenuExamples       },
    { id: "dropzone",           label: "Dropzone",                Component: DropzoneExamples           },
    { id: "file",               label: "File Upload",             Component: FileExamples               },
    { id: "floatButton",        label: "FloatButton",             Component: FloatButtonExamples        },
    { id: "hooks",              label: "Hooks",                   Component: HooksExamples              },
    { id: "icon",               label: "Icon",                    Component: IconExamples               },
    { id: "imageViewer",        label: "ImageViewer + Menu",      Component: ImageViewerAndMenuExamples },
    { id: "inputAddons",        label: "Input Addons",            Component: InputAddonsExamples        },
    { id: "menuButton",         label: "MenuButton",              Component: MenuButtonExamples         },
    { id: "modal",              label: "Modal",                   Component: ModalExamples              },
    { id: "multiselect",        label: "Multiselect",             Component: MultiselectExamples        },
    { id: "paginator",          label: "Paginator",               Component: PaginatorExamples          },
    { id: "popoverDateRange",   label: "Popover + DateRange",     Component: PopoverAndDateRangeExamples },
    { id: "primitives",         label: "Primitives (Inputs)",     Component: PrimitivesExamples         },
    { id: "progress",           label: "Progress",                Component: ProgressExamples           },
    { id: "radioCardGroup",     label: "RadioCardGroup",          Component: RadioCardGroupExamples     },
    { id: "ratingSegmented",    label: "Rating + Segmented",      Component: RatingAndSegmentedExamples },
    { id: "search",             label: "Search",                  Component: SearchExamples             },
    { id: "sidePanel",          label: "SidePanel",               Component: SidePanelExamples          },
    { id: "skeletonNotif",      label: "Skeleton + Notification", Component: SkeletonAndNotifExamples   },
    { id: "spinnerEmpty",       label: "Spinner + EmptyState",    Component: SpinnerAndEmptyExamples    },
    { id: "splitButton",        label: "SplitButton",             Component: SplitButtonExamples        },
    { id: "stack",              label: "Stack",                   Component: StackExamples              },
    { id: "statOtp",            label: "Stat + OtpInput",         Component: StatAndOtpExamples         },
    { id: "stepper",            label: "Stepper",                 Component: StepperExamples            },
    { id: "table",              label: "Table",                   Component: TableExamples              },
    { id: "tableOfContents",    label: "TableOfContents",         Component: TableOfContentsExamples    },
    { id: "tabs",               label: "Tabs",                    Component: TabsExamples               },
    { id: "tag",                label: "Tag",                     Component: TagExamples                },
    { id: "tagGroup",           label: "TagGroup",                Component: TagGroupExamples           },
    { id: "timeline",           label: "Timeline",                Component: TimelineExamples           },
    { id: "toast",              label: "Toast",                   Component: ToastExamples              },
    { id: "toggleButton",       label: "ToggleButton",           Component: ToggleButtonExamples       },
    { id: "toggleButtonGroup",  label: "ToggleButtonGroup",      Component: ToggleButtonGroupExamples  },
    { id: "tooltip",            label: "Tooltip",                 Component: TooltipExamples            },
    { id: "treeView",           label: "TreeView",                Component: TreeViewExamples           },
] as const;

const App: FC = () => (
    <HashRouter>
        <div style={{ display: "flex", height: "100vh" }}>
            {/* Sidebar */}
            <aside
                style={{
                    width: "220px",
                    minWidth: "220px",
                    background: "#f5f5f5",
                    borderRight: "1px solid #dbdbdb",
                    overflowY: "auto",
                    position: "sticky",
                    top: 0,
                    height: "100vh",
                }}
            >
                <div style={{ padding: "16px 12px 8px", fontWeight: 700, fontSize: "1rem", borderBottom: "1px solid #dbdbdb" }}>
                    BBR Components
                </div>
                <ul style={{ listStyle: "none", margin: 0, padding: "8px 0" }}>
                    {PAGES.map(p => (
                        <li key={p.id}>
                            <NavLink
                                to={`/${p.id}`}
                                style={({ isActive }) => ({
                                    display: "block",
                                    width: "100%",
                                    textAlign: "left",
                                    padding: "6px 16px",
                                    textDecoration: "none",
                                    background: isActive ? "#3273dc" : "transparent",
                                    color: isActive ? "#fff" : "#363636",
                                    cursor: "pointer",
                                    fontSize: "0.875rem",
                                })}
                            >
                                {p.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </aside>

            {/* Main content */}
            <main style={{ flex: 1, overflowY: "auto" }}>
                <Routes>
                    <Route path="/" element={<Navigate to={`/${PAGES[0].id}`} replace />} />
                    {PAGES.map(p => (
                        <Route
                            key={p.id}

                            path={`/${p.id}`}
                            element={<p.Component />}
                        />
                    ))}
                    <Route path="*" element={<Navigate to={`/${PAGES[0].id}`} replace />} />
                </Routes>
            </main>
        </div>
    </HashRouter>
);

export default App;
