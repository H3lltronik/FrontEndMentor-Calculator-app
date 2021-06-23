import React, { useReducer, useState } from 'react'
import { CalculatorLogic } from '../logic';
import { sortedKeyboardItems } from '../static'

export const Calculator = () => {
    const [calculatorLogic] = useState(new CalculatorLogic ())
    const [, forceUpdate] = useReducer(x => x + 1, 0);

    const addOperation = (operation: any, immediate: boolean|undefined) => {
        calculatorLogic.setOperation (operation, immediate)
    }

    const btnClick = (item: any) => {
        if (item.type == 'action') {
            addOperation (item.action, item.immediate)
            if (item.immediate) forceUpdate ()
        } else if (item.type == 'result') {
            calculatorLogic.calculate()
            forceUpdate ()
        } else {
            calculatorLogic.add (item.value)
            forceUpdate ()
        }
    }
    
    return (
        <div className="calculator">
            a = {calculatorLogic.baseValue} ; b = {calculatorLogic.againstValue}
            <div className="calculator-result">
                <span>{calculatorLogic.getText()}</span>
            </div>

            <div className="calculator-keyboard">
                {
                    sortedKeyboardItems.map ((item, index) => {
                        return <button className={`calculator-button ${item.extraClass}`} onClick={() => {btnClick(item)}} key={index}>
                            <span>{item.label}</span>
                        </button>
                    })
                }
            </div>
        </div>
    )
}
