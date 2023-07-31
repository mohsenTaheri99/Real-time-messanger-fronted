import { useEffect } from "react"
import { useState } from "react"

function getSaveValue(key, initialValue){
    const SaveValue = JSON.parse( localStorage.getItem(key))
    if(SaveValue) return SaveValue
    if(initialValue instanceof Function ) return initialValue()
    return initialValue
}

export default function useLocalStorage(key,initialValue){
    const [value, setValue] = useState(()=>{
        return getSaveValue( key,initialValue)
    })

    useEffect(()=>{
        localStorage.setItem(key,JSON.stringify(value))
    },[value])

    return [value ,setValue]
}