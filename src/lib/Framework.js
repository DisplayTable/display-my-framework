import deepmerge from "deepmerge";
import React from "react";
import { DMFAuthProvider } from "./auth/auth";
import { DMFConfigProvider } from "./config/config";
import { DMFErrorProvider } from "./error/error";
import { DMFMenuProvider } from "./menu/menu";

/**
 * Framework implementation.
 *
 * @param {Object} props - Component properties.
 * @param {Object} [props.config={}] - Framework options, it wil merge with the default config.
 * @param {Object} props.authState - Override auth state.
 * @param {Function} props.authReducer - Override auth reducer.
 * @param {Object} props.errorState - Override error state.
 * @param {Function} props.errorReducer - Override error reducer.
 * @param {Object} props.menuState - Override menu state.
 * @param {Function} props.menuReducer - Override menu reducer.
 * @returns {React.Component}
 */
export const DMFFramework = ({
  config = {},
  authState,
  authReducer,
  errorState,
  errorReducer,
  menuState,
  menuReducer,
  children,
}) => {
  const defaultConfig = {
    interceptors: [],
  };
  const mergedConfig = deepmerge(config, defaultConfig);
  return (
    <DMFConfigProvider config={mergedConfig}>
      <DMFAuthProvider reducer={authReducer} initialState={authState}>
        <DMFErrorProvider reducer={errorReducer} initialState={errorState}>
          <DMFMenuProvider reducer={menuReducer} initialState={menuState}>
            {children}
          </DMFMenuProvider>
        </DMFErrorProvider>
      </DMFAuthProvider>
    </DMFConfigProvider>
  );
};
