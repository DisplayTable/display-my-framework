import React, { useContext, useMemo } from "react";

const ConfigContext = React.createContext({})

export const DMFConfigProvider = ({ config = {}, children }) => {

    const contextValue = useMemo(() => config, [config]);

    return <ConfigContext.Provider value={contextValue}>
        {children}
    </ConfigContext.Provider>
}

export const useDMFConfigProvider = () => useContext(ConfigContext);