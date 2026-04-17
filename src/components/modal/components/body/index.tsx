import { FC } from "react";

import { getClassName } from "@bodynarf/utils";

import { mapDataAttributes } from "@bbr/utils";

import { ModalWrapperBodyProps } from "../..";

/** ModalWrapper scrollable body section */
const ModalWrapperBody: FC<ModalWrapperBodyProps> = ({
    children,
    className, title, data,
}) => {
    const elClassName = getClassName([
        "modal-card-body",
        "bbr-modal__body",
        className,
    ]);

    const dataAttributes = mapDataAttributes(data);

    return (
        <section
            {...dataAttributes}

            title={title}
            className={elClassName}
        >
            {children}
        </section>
    );
};

export default ModalWrapperBody;
