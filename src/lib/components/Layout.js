import React from "react";
import { useDMFLayoutProvider } from "../layout/layout";

/**
 * Layout component implementation.
 *
 * @param {Object} props - Component properties.
 * @param {Function} props.render - Render callback.
 * @returns {React.Component}
 */
export const DMFLayoutComponent = ({ ...props }) => {

    const { state, dispatch } = useDMFLayoutProvider();

    return (
        props.render ? props.render(state, dispatch) : <></>
    )
}