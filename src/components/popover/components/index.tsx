import { FC, ReactElement } from "react";

import { getClassName } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";

import { PopoverContentProps, PopoverTriggerProps } from "../..";

/** Popover.Trigger slot — the element that opens the popover */
export const PopoverTrigger: FC<PopoverTriggerProps> = ({ children }) => children as ReactElement;

/** Popover.Content slot — the floating panel content */
export const PopoverContent: FC<PopoverContentProps> = ({ children, className, title, data }) => {
    const dataAttributes = mapDataAttributes(data);

    return (
        <div
            
          {...dataAttributes}

          title={title}
          className={getClassName(["bbr-popover__content", className])}
        
        >
            {children}
        </div>
    );
};
