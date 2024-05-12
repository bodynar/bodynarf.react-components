import { FC } from "react";

import { MultiselectProps } from "../../types";

const MultiselectWithoutLabel: FC<MultiselectProps> = ({
    items,
}) => {
    return (
        <>
            {items.length}
        </>
    );
};

export default MultiselectWithoutLabel;
