import { FC, PropsWithChildren, Suspense } from "react";

import { useSuspenseReady } from "../readyProvider/hooks";
import PageLoader from "../../pageLoader";
import SuspenseTracker from "../tracker";

const SuspenseWrapper: FC<PropsWithChildren> = ({
    children
}) => {
    const { isReady, setReady } = useSuspenseReady();

    if (isReady) {
        return children; // 🚀 Suspense отключён
    }

    return (
        <Suspense fallback={<PageLoader />}>
            <SuspenseTracker onReady={() => setReady(true)} />
            {children}
        </Suspense>
    );
};

export default SuspenseWrapper;
