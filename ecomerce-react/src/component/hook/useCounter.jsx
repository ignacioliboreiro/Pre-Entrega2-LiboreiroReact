import { useState } from "react"

export const useCounter = (min, max) =>{ 
    const [count, setCount] = useState(0)

    const sumarCount = () =>{
    if (count < max) {
        setCount(count + 1)
    }
    }
    
    const restarCount = () =>{   
        if (count > min) {
            setCount (count - 1)
        }
    }
    return{count,sumarCount,restarCount}
}
