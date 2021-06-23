type CalcButton = {
    label: string
    extraClass?: string
    order: number
    type: 'reset' |'delete' |'result' |'value'
    value?: string
}

type SwitchLikeRadioProps = {
    onRadioChange: (value: any) => void,
    duration?: number,
    name?: string,
    label?: string,
    value: any,
}
type SwitchLikeRadioItemProps = {
    onRadioChange?: (value: any, order: number) => void,
    name?: string,
    order?: number,
    label: string|number,
    value: any,
    id?: number|string,
}