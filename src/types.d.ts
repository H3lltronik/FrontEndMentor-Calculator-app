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