import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useDispatch } from 'react-redux'
import { buttonPressed, buttonEqual } from '../../../store/actions'
const Number = () => {
    const dispatch = useDispatch()
    return (
        <View style={styles.numbers}>
            <View style={styles.row}>
                <TouchableOpacity onPress={() => dispatch(buttonPressed(7))} style={styles.btn}>
                    <Text style={styles.btnText}>7</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(buttonPressed(8))} style={styles.btn}>
                    <Text style={styles.btnText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(buttonPressed(9))} style={styles.btn}>
                    <Text style={styles.btnText}>9</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity onPress={() => dispatch(buttonPressed(4))} style={styles.btn}>
                    <Text style={styles.btnText}>4</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(buttonPressed(5))} style={styles.btn}>
                    <Text style={styles.btnText}>5</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(buttonPressed(6))} style={styles.btn}>
                    <Text style={styles.btnText}>6</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity onPress={() => dispatch(buttonPressed(1))} style={styles.btn}>
                    <Text style={styles.btnText}>1</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(buttonPressed(2))} style={styles.btn}>
                    <Text style={styles.btnText}>2</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(buttonPressed(3))} style={styles.btn}>
                    <Text style={styles.btnText}>3</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.row}>
                <TouchableOpacity onPress={() => dispatch(buttonPressed('.'))} style={styles.btn}>
                    <Text style={styles.btnText}>.</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(buttonPressed(0))} style={styles.btn}>
                    <Text style={styles.btnText}>0</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => dispatch(buttonEqual())} style={styles.btn}>
                    <Text style={styles.btnText}> = </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: "black"
    },
    btn: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderRightColor: "black"

    },
    btnText: {
        fontSize: 30
    },
    numbers: {
        flex: 3,
        backgroundColor: '#73A2FF',
        borderRightWidth: 1,
        borderRightColor: "black"
    }
})


export default Number;