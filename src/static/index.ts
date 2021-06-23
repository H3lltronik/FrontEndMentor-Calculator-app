export const keyboardItems : CalcButton[] = [
    {
        label: "1",
        order: 9,
        type: 'value',
        value: "1",
    },
    {
        label: "2",
        order: 10,
        type: 'value',
        value: "2",
    },
    {
        label: "3",
        order: 11,
        type: 'value',
        value: "3",
    },
    {
        label: "4",
        order: 5,
        type: 'value',
        value: "4",
    },
    {
        label: "5",
        order: 6,
        type: 'value',
        value: "5",
    },
    {
        label: "6",
        order: 7,
        type: 'value',
        value: "6",
    },
    {
        label: "7",
        order: 1,
        type: 'value',
        value: "7",
    },
    {
        label: "8",
        order: 2,
        type: 'value',
        value: "8",
    },
    {
        label: "9",
        order: 3,
        type: 'value',
        value: "9",
    },
    {
        label: "0",
        order: 14,
        type: 'value',
        value: "0",
    },
    {
        label: "DEL",
        extraClass: "calculator-button--action",
        order: 4,
        type: 'delete',
    },
    {
        label: "+",
        order: 8,
        type: 'value',
        value: "+",
    },
    {
        label: "-",
        order: 12,
        type: 'value',
        value: "-",
    },
    {
        label: "x",
        order: 16,
        type: 'value',
        value: "*",
    },
    {
        label: "/",
        order: 15,
        type: 'value',
        value: "/",
    },
    {
        label: "RESET",
        extraClass: "calculator-button--action button-reset",
        order: 17,
        type: 'reset',
    },
    {
        label: "=",
        order: 18,
        extraClass: "calculator-button--result button-result",
        type: 'result',
    },
    {
        label: ".",
        order: 13,
        type: 'value',
        value: ".",
    },
]

export const sortedKeyboardItems = keyboardItems.sort ((a,b) => a.order - b.order)

export const themes = ["theme-light", "theme-dark", "theme-contrast"]