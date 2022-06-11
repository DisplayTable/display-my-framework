import React, { useContext, useMemo, useReducer } from "react";

const defaultInitialState = {};
const StoreContext = React.createContext({state: null,dispatch: null,});

const defaultReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export const DMFStore = ({reducer = defaultReducer, initialState = defaultInitialState, children}) => {
    
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <StoreContext.Provider value={contextValue}>{children}</StoreContext.Provider>;  
} 

export const useDMFStore = () => useContext(StoreContext);