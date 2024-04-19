import React from "react";
import { useGlobalEvent } from "./use-global-event.hook"


export const useGlobalKeyStroke = ( keystroke:string, callback:EventListener) => {

    const keystrokeCallback = React.useCallback(
        (evt:Event) => {
            if((evt as KeyboardEvent).key === keystroke) callback(evt);
        }
        ,[keystroke,callback])

    useGlobalEvent('keyup', keystrokeCallback );
}