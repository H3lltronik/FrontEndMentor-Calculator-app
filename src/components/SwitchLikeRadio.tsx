import React, { ChangeEvent, FC, useEffect } from 'react'

let animStep : number = 0;
let lastStep : number = 0;
let lastOrder : number = 0;
let radiosQnt = 0;
export const SwitchLikeRadio : FC<SwitchLikeRadioProps> = (props) => {

    const handleChange = (value: any, order: number) => {
        let deltaOrder = Math.abs(lastOrder - order)
        props.onRadioChange (value)
        if (lastStep >= 0 && lastStep <= 100) {
            if (lastOrder > order) {
                lastStep -= (animStep * deltaOrder);
            } else if (lastOrder < order) {
                lastStep += (animStep * deltaOrder);
            }
            console.log ("lastOrder", lastOrder, "order", order, "step", animStep * order)
            lastOrder = order
        }
        
        document.querySelector ('.radio-indicator')?.animate([
            { left: `${lastStep}%` }
        ],
        {
            duration: 300,
            fill: 'forwards'
        });
    }

    useEffect(() => {
        radiosQnt = React.Children.toArray(props.children).length
        animStep = Number( (100 / radiosQnt).toFixed(2) );
        console.log(radiosQnt, animStep)
    }, [])

    return (
        <div className="radio">
            <span className="radio-label">Theme</span>
            
                <div className="radio-group">
                    
                    {React.Children.map(props.children, (child:any, index) => (
                        React.cloneElement(child, {onRadioChange: handleChange, name: 'radio', order: index})
                    ))}

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
        if (props.onRadioChange) props.onRadioChange (value, props.order)
    }

    return (
        <div className="radio-item">
            <div className="radio-item-label">{props.label}</div>
            <input type="radio" onChange={handleChange} value={props.value} name={props.name?.toLocaleLowerCase().replace(/\s/g, '')} />
        </div>
    )
}
