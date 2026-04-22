import { FC, ReactNode } from "react";

/** Toast fixed container props */
type ToastFixedContainerProps = {
    /** Toast element */
    children: ReactNode;

    /** Computed container class name */
    className: string;
};

/** Fixed-position overlay container for Toast */
const ToastFixedContainer: FC<ToastFixedContainerProps> = ({
    children,
    className,
}) => {
    return (
        <div className={className}>
            {children}
        </div>
    );
};

export default ToastFixedContainer;
