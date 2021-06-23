import React, { ChangeEvent, FC } from 'react'

export const SwitchLikeRadio : FC<SwitchLikeRadioProps> = (props) => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value} = event.target
        props.onRadioChange (value)
        
        document.querySelector ('radio-indicator')?.animate([
            { left: "10%" }
        ],
        {
            duration: 1000
        });
    }

    return (
        <div className="radio">
            <span className="radio-label">Theme</span>
            
                <div className="radio-group">
                    <div className="radio-item">
                        <div className="radio-item-label">1</div>
                        <input type="radio" onChange={handleChange} value="Male" name="gender" />
                    </div>
                    <div className="radio-item">
                        <div className="radio-item-label">1</div>
                        <input type="radio" onChange={handleChange} value="Male1" name="gender" />
                    </div>
                    <div className="radio-item">
                        <div className="radio-item-label">1</div>
                        <input type="radio" onChange={handleChange} value="Male2" name="gender" />
                    </div>

                    <div className="radio-wrapper">
                        <div className="radio-indicator"></div>
                    </div>

                </div>
        </div>
    )
}
