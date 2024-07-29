import { useCallback } from "react"


export const useHttp = () => {
    const request = useCallback(async(url) => {
        try {
            let response = await((await fetch(url)).json())
            return response;
        } catch(e) {
            console.error(e)
            throw e
        }
    })

    return [request]
}