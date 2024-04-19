import React, { useCallback, useState } from "react"


export const useWindowSize = (withStateUpdate = false) => {

    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    const handleResizeEvent = useCallback(() => {
        if (withStateUpdate) setSize(
            {
                width: window.innerWidth,
                height: window.innerHeight
            }
        )
    }, [withStateUpdate])

    const layoutCallback = useCallback(() => {
        window.addEventListener('resize', handleResizeEvent );
        return () =>  window.removeEventListener('resize', handleResizeEvent );
    },[]);

    React.useLayoutEffect(layoutCallback,[withStateUpdate])

    return size;

}