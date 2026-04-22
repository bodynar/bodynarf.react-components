import { FC } from "react";

import { getClassName } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";

import { ModalWrapperFooterProps } from "../..";

/** ModalWrapper footer section with action buttons */
const ModalWrapperFooter: FC<ModalWrapperFooterProps> = ({
    children,
    className, title, data,
}) => {
    const elClassName = getClassName([
        "modal-card-foot",
        "bbr-modal__footer",
        className,
    ]);

    const dataAttributes = mapDataAttributes(data);

    return (
        <footer
            {...dataAttributes}

            title={title}
            className={elClassName}
        >
            {children}
        </footer>
    );
};

export default ModalWrapperFooter;
