import * as actionTypes from './actionTypes'
import { buttonPressed, acClear, buttonEqual, buttonDelete } from './CalculatorLogic'
initialState = {
    result: "",
    presult: "",
    operation: "",
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.BUTTON_PRESSED:
            return buttonPressed(state, action);
        case actionTypes.AC_CLEAR:
            return acClear(state, action)
        case actionTypes.BUTTON_DEL:
            return buttonDelete(state, action)
        case actionTypes.BUTTON_EQUAL:
            return buttonEqual(state, action)

        default:
            return state;
    }
}

export default reducer;