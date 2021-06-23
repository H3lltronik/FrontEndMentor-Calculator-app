type CalcButton = {
    label: string
    extraClass?: string
    order: number
    type: 'reset' |'delete' |'result' |'value'
    value?: string
}

type SwitchLikeRadioProps = {
    onRadioChange: (value: any) => void
}
type SwitchLikeRadioItemProps = {
    onRadioChange?: (value: any, order?: number) => void,
    name?: string,
    order?: number,
    label: string,
    value: any,
}