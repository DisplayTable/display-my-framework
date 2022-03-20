import deepmerge from "deepmerge";
import React from "react";
import { CONFIG } from "../config";
import { DMFConfigProvider } from "./config/config";
import { DMFErrorProvider } from "./error/error";
import { DMFMenuProvider } from "./menu/menu";

export const withDMFFramework =
  (Component, config = {}) =>
  ({ ...props }) => {
    const mergedConfig = deepmerge(config, CONFIG);

    return (
      <DMFConfigProvider config={mergedConfig}>
        <DMFErrorProvider>
          <DMFMenuProvider defaultRoutes={mergedConfig.defaultRoutes}>
            <Component {...props} />
          </DMFMenuProvider>
        </DMFErrorProvider>
      </DMFConfigProvider>
    );
  };
