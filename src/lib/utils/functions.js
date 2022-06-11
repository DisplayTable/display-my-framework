import deepmerge from "deepmerge";
import { DMFActions } from "../actions/actions";

/**
 * Default reducer function for providers.
 * @param {Object} state - Current state.
 * @param {Object} action - Type of action and payload.
 * @returns {Object}
 */
export const defaultReducer = (state, action) => {
  const payload = action.payload || {};
  switch (action.type) {
    case DMFActions.UPDATE_FIELD:
      return deepmerge(state, payload);
    default:
      return state;
  }
};
