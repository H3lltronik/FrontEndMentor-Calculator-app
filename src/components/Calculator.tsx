import React, { useEffect, useState } from 'react'
import { sortedKeyboardItems, themes } from '../static'
import { switchTheme } from '../utils';
import { makeCalculatorLogic } from './logic'
import {SwitchLikeRadio, SwitchLikeRadioItem} from './SwitchLikeRadio'

export const Calculator = () => {
    const [text, setText] = useState<string>("0")
    const [predicate, setPredicate] = useState<string|null>(null)
    const [currTheme, setCurrTheme] = useState<string>(themes[0])
    const [error, setError] = useState<boolean>(false)

    const btnClick = makeCalculatorLogic (setPredicate, setText, setError)

    useEffect(() => {
        // Use dark theme by default because light theme is CRINGE
        setCurrTheme ('theme-dark')
    }, [])

    useEffect(() => {
        switchTheme (currTheme)
    }, [currTheme])

    useEffect(() => {
        if (error) {
        }
    }, [error])

    return (
        <div className={`calculator ${error? 'calculator--error':''}`}>
            <div className="calculator-header">
                <span className="calculator-title">calc</span>
                <div className="">
                    <SwitchLikeRadio onRadioChange={setCurrTheme} value={currTheme} label={"THEME"}>
                        {
                            themes.map((theme, index) => {
                                return <SwitchLikeRadioItem label={index+1} value={theme} key={index}/>
                            })
                        }
                    </SwitchLikeRadio>
                </div>
            </div>

            <div className="calculator-result"><span>{text}</span></div>

            <div className="calculator-keyboard">
                { sortedKeyboardItems.map ((item, index) => {
                    return <button onClick={() => {btnClick(predicate, item, error)}} key={index}
                    className={`calculator-button ${item.extraClass}`}>
                        <span>{item.label}</span>
                    </button>
                }) }
            </div>
        </div>
    )
}
