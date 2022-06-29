import { useContext, useEffect } from "react"
import { CalcContext } from "../context/CalculatorContext"

const Screen = () => {
    const { calc } = useContext(CalcContext);
    useEffect(() => {}, [calc])

    return (
        <h1 className="screen">
            { calc.number ? calc.number : calc.res }
        </h1>
    )   
}

export default Screen