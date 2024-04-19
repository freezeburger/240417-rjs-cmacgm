import React, { useState } from "react"
import { useGlobalKeyStroke } from "./use-global-keystroke.hook";


/**
 * 
 * @example
 * 
 * const toggleState = useToggleOnKey('a', false)
 */
export const useToggleOnKey = (key: string, initialState = false) => {
    const [toggle, setToggle] = useState(initialState);

    const toggleCallback = React.useCallback((evt: Event) => {
        console.log(evt);
        setToggle( (prevState) => !prevState );
    }, [key, initialState])

    useGlobalKeyStroke(key, toggleCallback);

    return toggle;

} 