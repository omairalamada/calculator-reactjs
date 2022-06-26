import { useContext } from "react"
import { CalcContext } from "../context/CalcContext"

const Screen = () => {
    const { calc } = useContext(CalcContext);
    return (
        <h1 className="screen">
            { calc.number ? calc.number : calc.res }
        </h1>
    )
}

export default Screen