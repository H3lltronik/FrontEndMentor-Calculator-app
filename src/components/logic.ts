import { evaluate } from 'mathjs'

export const makeCalculatorLogic = (
    setPredicate: (a: any) => void, 
    setText: (a: any) => void,
    setError: (a: boolean) => void,
    ) => {
    return function (predicate: string|null, button: CalcButton, error: boolean = false) {
        let { value, type, label } = button
        if (error) setError (false)
        if (type == 'reset') {
            setPredicate (null); setText (`0`);
        } else if (type == 'delete') {
            if (!predicate) return

            let resultFromDel = "0"
            const length = predicate.length
            if (length > 1) {
                resultFromDel = predicate.substring (0, length - 1)
                setPredicate (resultFromDel); setText (resultFromDel)
            } else {
                setPredicate (null); setText (resultFromDel)
            }
        } else if (type == 'result') {
            if (!predicate) return

            try {
                const result = `${evaluate(predicate)}`;
                setPredicate (result); setText (result);
            } catch (e) {
                setText (e.message); setPredicate(null)
                setError (true)
            }
        } else if (type == 'value') {
            if (!value) return
            if (!predicate) { // Means its only a zero
                setPredicate (`${value}`); setText (`${label}`)   
            } else if (predicate.length < 14) {
                setPredicate (`${predicate}${value}`); setText (`${predicate}${label}`)   
            }
        }
    }
}