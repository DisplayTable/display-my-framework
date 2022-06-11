import React, { useContext, useMemo, useReducer } from "react";
import { defaultReducer } from "../utils/functions";

const AuthContext = React.createContext({});

const defaultInitialState = {
  token: '',
  refreshToken: ''
};

/**
 * Auth provider implementation.
 *
 * @param {Object} props - Component properties.
 * @param {Function} props.reducer - Override auth state.
 * @param {Object} props.initialState - Override auth reducer.
 * @returns {React.Component}
 */
export const DMFAuthProvider = ({
  reducer = defaultReducer,
  initialState = defaultInitialState,
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = useMemo(() => ({ state, dispatch }), [state]);

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useDMFAuthProvider = () => useContext(AuthContext);