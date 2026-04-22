import { FC } from "react";

import { getClassName } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";

import { ModalWrapperHeaderProps } from "../..";

/** ModalWrapper custom header section */
const ModalWrapperHeader: FC<ModalWrapperHeaderProps> = ({
    children,
    className, title, data,
}) => {
    const elClassName = getClassName([
        "modal-card-head",
        "bbr-modal__header",
        className,
    ]);

    const dataAttributes = mapDataAttributes(data);

    return (
        <header
            {...dataAttributes}

            title={title}
            className={elClassName}
        >
            {children}
        </header>
    );
};

export default ModalWrapperHeader;
