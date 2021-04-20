import * as actionTypes from './actionTypes'

export const buttonPressed = (text) => {
    return {
        type: actionTypes.BUTTON_PRESSED,
        payload: text
    }
}
export const acClear = () => {
    return { type: actionTypes.AC_CLEAR }

}
export const buttonDel = () => {
    return { type: actionTypes.BUTTON_DEL }

}
export const buttonEqual = () => {
    return { type: actionTypes.BUTTON_EQUAL }

}