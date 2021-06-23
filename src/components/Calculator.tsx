import React, { useState } from 'react'
import { sortedKeyboardItems, themes } from '../static'
import { makeCalculatorLogic } from './logic'
import {SwitchLikeRadio} from './SwitchLikeRadio'

export const Calculator = () => {
    const [text, setText] = useState<string>("0")
    const [predicate, setPredicate] = useState<string|null>(null)
    const [currTheme, setCurrTheme] = useState<string>(themes[0])

    const btnClick = makeCalculatorLogic (setPredicate, setText)

    return (
        <div className="calculator">
            <div className="calculator-header">
                <span>{currTheme}</span>
                <div className="">
                    <SwitchLikeRadio onRadioChange={setCurrTheme}></SwitchLikeRadio>
                </div>
            </div>

            <div className="calculator-result"><span>{text}</span></div>

            <div className="calculator-keyboard">
                { sortedKeyboardItems.map ((item, index) => {
                    return <button onClick={() => {btnClick(predicate, item)}} key={index}
                    className={`calculator-button ${item.extraClass}`}>
                        <span>{item.label}</span>
                    </button>
                }) }
            </div>
        </div>
    )
}
