import React, { ChangeEvent, FC, useEffect } from 'react'

let animStep : number = 0;
let lastStep : number = 0;
let lastOrder : number = 0;
let radiosQnt = 0;
let childrenProps : SwitchLikeRadioItemProps[] = []
let lastValue : any = null

/**
 * Radio button switch-like styled
 * @param name - [optional] name for the radio input
 */
export const SwitchLikeRadio : FC<SwitchLikeRadioProps> = (props) => {
    const handleChange = (value: any, order: number) => {
        let deltaOrder = Math.abs(lastOrder - order)
        props.onRadioChange (value)
        lastValue = value
        if (lastStep >= 0 && lastStep <= (100 - animStep)) {
            if (lastOrder > order) {
                lastStep -= (animStep * deltaOrder);
            } else if (lastOrder < order) {
                lastStep += (animStep * deltaOrder);
            }
            lastOrder = order
        }
        
        document.querySelector ('.radio-indicator')?.animate(
        [
            { left: `${lastStep}%` }
        ],
        {
            duration: props.duration ?? 300,
            fill: 'forwards'
        });
    }

    useEffect(() => {
        if (lastValue == props.value) return
        const changed = childrenProps.find (c => c.value == props.value)
        if (changed?.order) handleChange (changed?.value, changed?.order)
    }, [props.value])

    useEffect(() => {
        radiosQnt = React.Children.toArray(props.children).length
        animStep = Number( (100 / radiosQnt).toFixed(2) );
    }, [])

    return (
        <div className="radio">
            <span className="radio-label">{props.label}</span>
                <div className="radio-group">
                    {React.Children.map(props.children, (child:any, index) => {
                        const childProps = {
                            onRadioChange: handleChange, 
                            name: props.name ?? 'radio', 
                            order: index,
                            ...child.props
                        };

                        childrenProps[index] = childProps
                        return React.cloneElement(child, childProps)
                    })}
                    <div className="radio-wrapper">
                        <div className="radio-indicator"></div>
                    </div>
                </div>
        </div>
    )
}

/**
 * Only use this params:
 * 
 * @param value - will be the value when clicking
 * @param label - will be the text above the radio, keep them simple and short
 */
export const SwitchLikeRadioItem : FC<SwitchLikeRadioItemProps> = (props) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target
        if (props.onRadioChange && props.order != undefined) props.onRadioChange (value, props.order)
    }

    return (
        <div className={`radio-item radio-item-${props.order}`}>
            <div className="radio-item-label">{props.label}</div>
            <input type="radio" onChange={handleChange} value={props.value} name={props.name?.toLocaleLowerCase().replace(/\s/g, '')} />
        </div>
    )
}
