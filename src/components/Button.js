import { useContext } from "react"
import { CalcContext } from "../context/CalcContext"

const getStyleName = btn => {
    const className = {
        '=': 'equals',
        'x': 'opt',
        '-': 'opt',
        '+': 'opt',
        '/': 'opt',
    }

    return className[btn]
}

const Button = ({ value }) => {
    const {calc, setCalc} = useContext(CalcContext);    

// When user click the comma
    const commaClick = () => {
        setCalc({
            ...calc,
            number: 29
        })
    }

    const buttonClick = () => {
        const results = {
            '.': commaClick
        }
        return results[value]()
    }

    return (
        <button onClick={buttonClick} className={`${getStyleName(value)} button`}> {value}</button>
    )
}

export default Button 