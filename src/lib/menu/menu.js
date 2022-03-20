import React, { useContext, useMemo, useState } from "react";

const MenuContext = React.createContext({})

export const DMFMenuProvider = ({ defaultRoutes = [], children }) => {

    const [routes, setRoutes] = useState(defaultRoutes);
    const [currentPath, setCurrentPath] = useState('');
    const [loading, setLoading] = useState('');
    const contextValue = useMemo(() => { 
        return {routes, setRoutes, currentPath, setCurrentPath, loading, setLoading}
    }, [routes, currentPath,loading]);

    return <MenuContext.Provider value={contextValue}>
        {children}
    </MenuContext.Provider>
}

export const useDMFMenuProvider = () => useContext(MenuContext);