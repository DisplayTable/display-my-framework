import React, { useContext, useMemo, useReducer } from "react";
import { defaultReducer } from "../utils/functions";

const ErrorContext = React.createContext({});

const defaultInitialState = {
  loading: false,
  open: false,
  message: "",
};

/**
 * Error provider implementation.
 *
 * @param {Object} props - Component properties.
 * @param {Function} props.reducer - Override error state.
 * @param {Object} props.initialState - Override error reducer.
 * @returns {React.Component}
 */
export const DMFErrorProvider = ({
  reducer = defaultReducer,
  initialState = defaultInitialState,
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <ErrorContext.Provider value={contextValue}>
      {children}
    </ErrorContext.Provider>
  );
};

export const useDMFErrorProvider = () => useContext(ErrorContext);
