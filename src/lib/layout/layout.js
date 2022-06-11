import React, { useContext, useMemo, useReducer } from "react";
import { defaultReducer } from "../utils/functions";

const LayoutContext = React.createContext({});

const defaultInitialState = {
  data: null,
  loading: false
};

/**
 * Layout provider implementation.
 *
 * @param {Object} props - Component properties.
 * @param {Function} props.reducer - Override layout state.
 * @param {Object} props.initialState - Override layout reducer.
 * @returns {React.Component}
 */
export const DMFLayoutProvider = ({
  reducer = defaultReducer,
  initialState = defaultInitialState,
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <LayoutContext.Provider value={contextValue}>{children}</LayoutContext.Provider>
  );
};

export const useDMFLayoutProvider = () => useContext(LayoutContext);