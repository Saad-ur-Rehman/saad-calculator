export const buttonPressed = (state, action) => {
    if (action.payload === 0 && (state.result === "" || state.result === "0")) {
        return state
    }
    if (action.payload === '.' && state.result.includes('.')) {
        return state
    }
    // add
    if (action.payload === '+') {
        if (state.operation === "") {
            if (state.result === "") {
                return {
                    result: "",
                    presult: "0",
                    operation: "+",
                }

            }
            else if (state.result === ".") {
                return state
            }
            else if (state.operation === '+') {
                return state
            } else {
                return {
                    result: "",
                    presult: state.result,
                    operation: "+",
                }
            }
        }
        return state
    }
    // subtract
    if (action.payload === '-') {
        if (state.operation === "") {
            if (state.result === "") {
                return {
                    result: "",
                    presult: "0",
                    operation: "-",
                }

            }
            else if (state.result === ".") {
                return state
            }
            else if (state.operation === '-') {
                return state
            } else {
                return {
                    result: "",
                    presult: state.result,
                    operation: "-",
                }
            }
        }
        return state
    }
    // multiply
    if (action.payload === '*') {
        if (state.operation === "") {
            if (state.result === "") {
                return {
                    result: "",
                    presult: "0",
                    operation: "*",
                }

            }
            else if (state.result === ".") {
                return state
            }
            else if (state.operation === '*') {
                return state
            } else {
                return {
                    result: "",
                    presult: state.result,
                    operation: "*",
                }
            }
        }
        return state
    }
    // Divide
    if (action.payload === '/') {
        if (state.operation === "") {
            if (state.result === "") {
                return {
                    result: "",
                    presult: "0",
                    operation: "/",
                }

            }
            else if (state.result === ".") {
                return state
            }
            else if (state.operation === '/') {
                return state
            } else {
                return {
                    result: "",
                    presult: state.result,
                    operation: "/",
                }
            }
        }
        return state
    }

    return {
        ...state,
        result: (state.result + action.payload).toString()
    }
}

export const acClear = (state, action) => {
    return {
        result: "",
        presult: "",
        operation: "",
    }
}
export const buttonDelete = (state, action) => {
    return {
        ...state,
        result: state.result.slice(0, -1)
    }
}
export const buttonEqual = (state, action) => {
    if (state.operation === '') {
        return state
    }
    if (state.operation === '+') {
        if (state.presult === '0') {
            return {
                result: "",
                presult: "",
                operation: "",
            }
        }
        else if (state.result === '') {
            return {
                result: state.presult,
                presult: "",
                operation: "",
            }
        }

        // let check = (state.result + action.payload).toString()

        let num = parseFloat((parseFloat(state.result) + parseFloat(state.presult)).toFixed(4))
        return {
            result: num.toString(),
            presult: "",
            operation: "",
        }
    }
    if (state.operation === '-') {
        if (state.presult === '0') {
            return {
                result: "",
                presult: "",
                operation: "",
            }
        }
        else if (state.result === '') {
            return {
                result: state.presult,
                presult: "",
                operation: "",
            }
        }

        let num = parseFloat((parseFloat(state.presult) - parseFloat(state.result)).toFixed(4))
        return {
            result: num.toString(),
            presult: "",
            operation: "",
        }
    }
    if (state.operation === '*') {
        if (state.presult === '0') {
            return {
                result: "",
                presult: "",
                operation: "",
            }
        }
        else if (state.result === '') {
            return {
                result: state.presult,
                presult: "",
                operation: "",
            }
        }
        let num = parseFloat((parseFloat(state.result) * parseFloat(state.presult)).toFixed(4))
        return {
            result: num.toString(),
            presult: "",
            operation: "",
        }
    }
    if (state.operation === '/') {
        if (state.presult === '0') {
            return {
                result: "",
                presult: "",
                operation: "",
            }
        }
        else if (state.result === '') {
            return {
                result: state.presult,
                presult: "",
                operation: "",
            }
        }
        let num = parseFloat((parseFloat(state.presult) / parseFloat(state.result)).toFixed(4))
        return {
            result: num.toString(),
            presult: "",
            operation: "",
        }
    }
}