import { useEffect } from "react"

export const useWindowEventListener = <K extends keyof WindowEventMap>(type: K, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions) => {
    useEffect(() => {
        window.addEventListener(type, listener, options)
        return () => { window.removeEventListener(type, listener, options) }
    }, [])
}