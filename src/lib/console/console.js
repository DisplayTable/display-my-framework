import React from "react";

export const useConsole = () => {
  const log = (type = "log", value) => {
    if (process.env.NODE_ENV === "production" || !value) return;
    const fn = console[type];
    if (fn) fn(value);
  };
  return { log };
};