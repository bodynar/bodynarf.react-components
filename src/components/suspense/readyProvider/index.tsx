import { FC, useMemo, useState } from "react";

import { SuspenseReadyContext } from "./context";

export const SuspenseReadyProvider: FC<{ children: React.ReactNode; }> = ({ children }) => {
    const [isReady, setReady] = useState(false);

    const state = useMemo(() => ({ isReady, setReady }), [isReady, setReady]);

    return (
        <SuspenseReadyContext.Provider value={state}>
            {children}
        </SuspenseReadyContext.Provider>
    );
};
