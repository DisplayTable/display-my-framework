import React, { useContext, useMemo, useReducer } from "react";
import { defaultReducer } from "../utils/functions";

const MenuContext = React.createContext({});

const defaultInitialState = {
  routes: [],
  path: '', 
  loading :false
};

/**
 * Menu provider implementation.
 *
 * @param {Object} props - Component properties.
 * @param {Function} props.reducer - Override menu state.
 * @param {Object} props.initialState - Override menu reducer.
 * @returns {React.Component}
 */
export const DMFMenuProvider = ({
  reducer = defaultReducer,
  initialState = defaultInitialState,
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
  );
};

export const useDMFMenuProvider = () => useContext(MenuContext);
