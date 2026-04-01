import { useEffect } from "react";

const SuspenseTracker = ({ onReady }: { onReady: () => void; }) => {
    useEffect(() => {
        // вызывается когда Suspense "разморозился"
        onReady();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return null;
};

export default SuspenseTracker;
