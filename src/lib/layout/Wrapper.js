import React from "react";
import { DMFLayoutComponent } from "../components/Layout";
import { DMFLayoutProvider } from "../layout/layout";

/**
 * Layout wrapper implementation.
 *
 * @param {Object} props - Component properties.
 * @param {Function} props.reducer - Override layout state.
 * @param {Object} props.initialState - Override layout reducer.
 * @param {Function} props.render - Render callback.
 * @returns {React.Component}
 */
export const DMFLayout = ({ reducer, initialState, render }) => {

    return (
        <DMFLayoutProvider reducer={reducer} initialState={initialState}>
            <DMFLayoutComponent render={render} />
        </DMFLayoutProvider>
    )
}