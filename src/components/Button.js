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
            number: !calc.number.toString().includes('.') ? calc.number + value : calc.number
        })
    }
    // when user clicked the C to clear
    const reset = () => {
        setCalc({ sign: '', number: 0, res: 0})
    }
    // user click number
    const handleClickButton = () => {
        const numberString = value.toString()

        let numberValue;
        if(numberString === '0' && calc.number === 0) {
            numberValue = "0"
        } else {
            numberValue = Number(calc.number + numberString)
        }

        setCalc({
            ...calc,
            number: numberValue
        })
    }
    // When user click the sign operation
    const operationClick = () => {
        setCalc({
            sign: value,
            res: !calc.res && calc.number ? calc.number : calc.res,
            number: 0
        })
    }
    // when user click the equals sign
    const resultsClick = () => {
        if(calc.res && calc.number) {
          const math = (a, b, sign) => {
            const result = {
              '+': (a, b) => a + b,
              '-': (a, b) => a - b,
              'x': (a, b) => a * b,
              '/': (a, b) => a / b,
            }
            return result[sign](a, b);
          }
          setCalc({
            res: math(calc.res, calc.number, calc.sign),
            sign: '',
            number: 0
          })
        }
      }
      // when user click persen

    const persenClick = () => {
        setCalc({
            number: (calc.number / 100),
            res: (calc.res / 100),
            sign: ''
        })
    }

    // when user click the +- sign
    const invertClick = () => {
        setCalc({
            number: calc.number ? calc.number * -1 : 0,
            res: calc.res ? calc.res * -1 : 0,
            sign: ''
        })
    }

    const buttonClick = () => {
        const results = {
            '.': commaClick,
            'C': reset,
            '/': operationClick,
            'x': operationClick,
            '-': operationClick,
            '+': operationClick,
            '=': resultsClick,
            '%': persenClick,
            '+-': invertClick
        }

        if(results[value]) {
            return results[value]()
        } else {
            return handleClickButton()
        }
    }

    return (
        <button onClick={buttonClick} className={`${getStyleName(value)} button`}> {value}</button>
    )
}

export default Button 