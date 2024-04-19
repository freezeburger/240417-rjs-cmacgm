import { useEffect } from "react";

/**
 * Register and unregister a callback event on the global "window" object
 * @param eventName { keyof WindowEventMap } string name of the event
 * @param callback { EventListener } callback function
 * 
 * @example
 * 
 * useGlobalEvent('keyup', (evt) => console.log(evt) )
 * 
 */
export const useGlobalEvent = (eventName: keyof WindowEventMap, callback: (EventListener)) => {

    const registerGlobalEvent = (eventName: keyof WindowEventMap, callback: (EventListener)) => {
        window.addEventListener(eventName, callback);

        const unregisterGlobalEvent = () => {
            window.removeEventListener(eventName, callback);
        }
        return unregisterGlobalEvent;
    }

    useEffect(() => registerGlobalEvent(eventName, callback), [eventName, callback])
}