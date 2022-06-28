import { createContext, useState, useEffect } from "react"

export const CalcContext = createContext()
const CalcProvider = ({ children }) => {
    const [calc, setCalc] = useState({
        sign: "",
        number: 0,
        res: 0
    });

    useEffect(() => {}, [calc])
    const providerValue = { calc, setCalc }

    return (
        <CalcContext.Provider value={providerValue}>
            { children }
        </CalcContext.Provider>
    )
}

export default CalcProvider