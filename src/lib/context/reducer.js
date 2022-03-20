import React, { useMemo, useReducer } from "react";

const defaultInitialState = {};

const defaultReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
}

export const withDMFReducer = (Component, reducer = defaultReducer, initialState = defaultInitialState) => ({ ...props }) => {
    
    const [state, dispatch] = useReducer(reducer, initialState);
    const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  
    return <Component state={contextValue.state} dispatch={contextValue.dispatch} {...props} />; 
}