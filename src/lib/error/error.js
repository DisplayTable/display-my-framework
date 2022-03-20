import React, { useContext, useMemo, useState } from "react";

const ErrorContext = React.createContext({})

export const DMFErrorProvider = ({ children }) => {

    const [errorMessage, setErrorMessage] = useState('');
    const contextValue = useMemo(() => ({errorMessage, setErrorMessage}), [errorMessage]);

    return <ErrorContext.Provider value={contextValue}>
        {children}
    </ErrorContext.Provider>
}

export const useDMFErrorProvider = () => useContext(ErrorContext);