import { useState, useEffect } from "react"
const API_GATITOS = 'https://api.thecatapi.com/v1/images/search'//.url

export function useCatImage({ fact }) {
    const [image, setImage] = useState()
    useEffect(() => {
        if (!fact) return
        fetch(API_GATITOS)
            .then(res => res.json())
            .then(response => {
                setImage(response[0].url)

            })
    }, [fact])
    return { image }
}
