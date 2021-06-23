export class CalculatorLogic {
    baseValue : string = "0";
    againstValue : string = "0";
    currShowingVal: 'first'|'against' = 'first';
    operation: CalculatorOperation|null = null;

    add = (char: string) => {
        let editingVal = null
        if (this.currShowingVal == 'first') editingVal = this.baseValue
        else if (this.currShowingVal == 'against') editingVal = this.againstValue
        console.log("currShowingVal in add", this.currShowingVal, this.currShowingVal == 'against')
        if (!editingVal) throw "I did something wrong!"
        
        if(editingVal == "0" || editingVal.length <= 0) {
            this.setValue (char)
            return
        } 
        this.setValue (`${editingVal}${char}`)
    }

    reset = () => {
        this.baseValue = this.againstValue = "";
        this.operation = null;
    }

    calculate = () => {
        if (!this.operation) throw "No operation set";

        let result = this.operation (this.baseValue, this.againstValue)
        console.log("result", result)
        this.toggleInput ()
        this.againstValue = "";
        this.baseValue = result + ''
    }

    setOperation = (operation: any, immediate: boolean = false) => {
        this.operation = operation;
        if (immediate) {
            this.calculate ()
        }
        this.toggleInput ()
    }

    setValue = (value: string) => {
        console.log("set value", value, this.currShowingVal)
        if (this.currShowingVal == 'first') this.baseValue = value + ''
        else if (this.currShowingVal == 'against') this.againstValue = value + ''
    }

    getText = () => {
        let value = ""
        if (this.currShowingVal == 'first') value = this.baseValue
        else if (this.currShowingVal == 'against') value = this.againstValue

        if (value.length <= 0) return "0"
        if (value)
            return value.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        
        return "Something went wrong..."
    }

    toggleInput = () => {
        if (this.currShowingVal == 'first') {
            this.currShowingVal  = 'against'
        } else if (this.currShowingVal == 'against') {
            this.currShowingVal = 'first'
        }
        console.log("toggle!", this.currShowingVal)
    }
}

export const removeNumber = (a: string) => {
    return a.substring (0, a.length - 1)
}