import { createContext, useState, useEffect } from "react"

export const CalcContext = createContext()
const CalcProvider = ({ children }) => {
    const [calc, setCalc] = useState({
        sign: "",
        number: 0,
        res: 0
    });

    const providerValue = { calc, setCalc }
    useEffect(() => {}, [calc])

    return (
        <CalcContext.Provider value={providerValue}>
            
            { children }
        </CalcContext.Provider>
    )
}

export default CalcProvider