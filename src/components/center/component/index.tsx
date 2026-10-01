import { CSSProperties, FC } from "react";

import { getClassName } from "@bodynarf/utils";
import { mapDataAttributes } from "@bbr/utils";

import { CenterAxis, CenterProps } from "..";

/** Centering style per axis */
const axisStyleMap: Record<CenterAxis, CSSProperties> = {
    both: {
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
    horizontal: {
        left: "50%",
        transform: "translateX(-50%)",
    },
    vertical: {
        top: "50%",
        transform: "translateY(-50%)",
    },
};

/** Centers its content along the specified axis using absolute positioning. Has no intrinsic size — sized by content */
const Center: FC<CenterProps> = ({
    axis = "both",
    children,

    className, title, data,
}) => (
    <div
        
      {...mapDataAttributes(data)}

      title={title}
      style={{ position: "absolute", ...axisStyleMap[axis] }}
      className={getClassName([
            "bbr-center",
            `bbr-center--${axis}`,
            className,
        ])}
    
    >
        {children}
    </div>
);

export default Center;
