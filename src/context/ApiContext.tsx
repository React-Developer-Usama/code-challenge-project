import { createContext, useContext, useState } from "react";

const ApiContext = createContext({});

export const ApiProvider = ({ children }: any) => {
    const [showList, setShowList] = useState({});
    const shareValue = { showList, setShowList };

    return <ApiContext.Provider value={shareValue}>{children}</ApiContext.Provider>;
};

export function useApiContext() {
    return useContext(ApiContext);
}