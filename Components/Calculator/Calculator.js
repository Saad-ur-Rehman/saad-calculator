import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Keypad from '../Keypad/Keypad'


import { useSelector } from 'react-redux'


const Calculator = () => {
    const states = useSelector(state => state)

    // const [result, setResult] = useState("")
    // const [presult, setPresult] = useState("")
    // const [operation, setOperation] = useState("")

    // const buttonPressed = (text) => {
    //     if (text === 0 && result === "") {
    //         return
    //     }
    //     if (text === '.' && result.includes('.')) {
    //         return
    //     }
    //     if (text === 'Del') {
    //         setResult((prevResult) => prevResult.slice(0, -1))
    //         return
    //     }
    //     setResult((prevResult) => prevResult + text)
    // }

    // const acClear = () => {
    //     setResult("")
    //     setPresult("")
    //     setOperation("")
    // }

    // bug 1 can't press add before anynumber  === FIXED ===
    // bug 2 pressing add twice overwrites operation with result === FIXED ===
    // bug 3 when press add after just pressing . calculation error happens. === FIXED ===
    // bug 4  when set toFixed(4) method always show 4 numbers even when they are 0 === FIXED ===

    // const add = () => {
    //     if (operation === "") {
    //         if (result === "") {
    //             setPresult('0')
    //         }
    //         else if (result === ".") {
    //             return
    //         } else { setPresult(result) }

    //         setResult("")
    //         setOperation("+")
    //     }
    // }

    // bug 1 20 - 10 gives answer  -10 === FIXED === swap prevResult with pResult in calculation when press =

    // const subtract = () => {
    //     if (operation === "") {
    //         if (result === "") {
    //             setPresult('0')
    //         }
    //         else if (result === ".") {
    //             return
    //         } else { setPresult(result) }

    //         setResult("")
    //         setOperation("-")
    //     }
    // }

    // const multi = () => {
    //     if (operation === "") {
    //         if (result === "") {
    //             setPresult('0')
    //         }
    //         else if (result === ".") {
    //             return
    //         } else { setPresult(result) }

    //         setResult("")
    //         setOperation("*")
    //     }
    // }

    // const divide = () => {
    //     if (operation === "") {
    //         if (result === "") {
    //             setPresult('0')
    //         }
    //         else if (result === ".") {
    //             return
    //         } else { setPresult(result) }

    //         setResult("")
    //         setOperation("/")
    //     }
    // }

    // ===  can't use oepration on ZERO "0" if ZERO is 1st number === FIXED === use else if on 2nd condition for "."


    // const equal = () => {
    //     if (operation == '+') {
    //         setResult((prevResult) => {
    //             let num = parseFloat((parseFloat(prevResult) + parseFloat(presult)).toFixed(4))
    //             return num.toString()
    //         })
    //         setPresult("")
    //         setOperation("")
    //     }

    //     if (operation === '-') {
    //         setResult((prevResult) => {
    //             let num = parseFloat((parseFloat(presult) - parseFloat(prevResult)).toFixed(4))
    //             return num.toString()
    //         })
    //         setPresult("")
    //         setOperation("")
    //     }

    //     if (operation == '*') {
    //         setResult((prevResult) => {
    //             let num = parseFloat((parseFloat(prevResult) * parseFloat(presult)).toFixed(4))
    //             return num.toString()
    //         })
    //         setPresult("")
    //         setOperation("")
    //     }

    //     if (operation === '/') {
    //         setResult((prevResult) => {
    //             let num = parseFloat((parseFloat(presult) / parseFloat(prevResult)).toFixed(4))
    //             return num.toString()
    //         })
    //         setPresult("")
    //         setOperation("")
    //     }
    // }

    return (
        <View style={styles.container}>
            <View style={styles.result}>
                <Text style={styles.resultText}>{states.result === "" ? "0" : states.result}</Text>
            </View>

            <View style={styles.calculation}>
                <Text style={styles.calculationText}>{states.presult + " " + states.operation}</Text>
            </View>

            <Keypad></Keypad>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: 25
        //  backgroundColor: '#fff',
        //  alignItems: 'center',
        //  justifyContent: 'center',
    },

    result: {
        flex: 2,
        backgroundColor: '#3C97BF',
        justifyContent: 'center',
        alignItems: 'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: "black",
        paddingRight: 10
    },
    resultText: {
        fontSize: 40,
        color: "white"
    },

    calculation: {
        flex: 1,
        backgroundColor: '#6C7BD8',
        justifyContent: 'center',
        alignItems: 'flex-end',
        borderBottomWidth: 1,
        borderBottomColor: "black"
    },
    calculationText: {
        fontSize: 20,
        color: "white"
    },
});


export default Calculator;