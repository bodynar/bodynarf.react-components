import { FC, useCallback, useMemo, useRef, useState } from "react";

import { generateGuid, getClassName } from "@bodynarf/utils";

import { ElementSize } from "@bbr/types";
import { mapDataAttributes, shouldOpenUpward } from "@bbr/utils";
import Avatar, { AvatarShape } from "@bbr/components/avatar";
import Popover, { PopoverPosition } from "@bbr/components/popover";

import "./style.scss";

import { AvatarGroupProps } from "..";

/** Group of overlapping avatars with a `+N` overflow indicator */
const AvatarGroup: FC<AvatarGroupProps> = ({
    items,
    maxVisible = 5,
    size = ElementSize.Normal,
    shape = AvatarShape.Circle,
    overflowPopoverTitle = "More",

    className, title, data,
}) => {
    const overflowCount = Math.max(items.length - maxVisible, 0);

    // AvatarProps has no id field — generate a stable unique key per item,
    // recomputed when the items array identity changes
    const itemsWithKeys = useMemo(
        () => items.map(item => ({ item, key: generateGuid() })),
        [items]
    );

    const [isOpenUp, setIsOpenUp] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const onPopoverToggle = useCallback((next: boolean) => {
        if (next && containerRef.current) {
            setIsOpenUp(shouldOpenUpward(containerRef.current, overflowCount));
        }
    }, [overflowCount]);

    const visibleItems = itemsWithKeys.slice(0, maxVisible);
    const overflowItems = itemsWithKeys.slice(maxVisible);

    const dataAttributes = mapDataAttributes(data);

    const elClassName = getClassName([
        "bbr-avatar-group",
        className,
    ]);

    return (
        <div
            {...dataAttributes}

            title={title}
            ref={containerRef}
            className={elClassName}
        >
            {visibleItems.map(({ item, key }) => (
                <Avatar
                    key={key}

                    {...item}

                    size={size}
                    shape={item.shape ?? shape}
                />
            ))}
            {overflowItems.length > 0
                ? (
                    <Popover

                        onToggle={onPopoverToggle}
                        position={isOpenUp ? PopoverPosition.Top : PopoverPosition.Bottom}

                    >
                        <Popover.Trigger>
                            <Avatar
                                initials={`+${overflowItems.length}`}

                                size={size}
                                shape={shape}
                                title={overflowPopoverTitle}
                                className="bbr-avatar-group__more"
                            />
                        </Popover.Trigger>
                        <Popover.Content title={overflowPopoverTitle}>
                            <div className="bbr-avatar-group__overflow">
                                {overflowItems.map(({ item, key }) => (
                                    <div
                                        key={key}

                                        className="bbr-avatar-group__overflow-item"
                                    >
                                        <Avatar
                                            {...item}

                                            size={size}
                                            shape={item.shape ?? shape}
                                        />
                                        <span>
                                            {item.alt ?? item.initials ?? ""}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </Popover.Content>
                    </Popover>
                )
                : null
            }
        </div>
    );
};

export default AvatarGroup;
