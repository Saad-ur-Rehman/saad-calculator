import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { buttonPressed } from '../../../store/actions'
import { useDispatch } from 'react-redux'

const Operation = () => {
    const dispatch = useDispatch()
    return (
        <View style={styles.row}>
            <View style={styles.operations}>
                <TouchableOpacity onPress={() => dispatch(buttonPressed('*'))} style={styles.btn}>
                    <Text style={[styles.btnText, styles.white]}> * </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(buttonPressed('/'))} style={styles.btn}>
                    <Text style={[styles.btnText, styles.white]}> / </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(buttonPressed('-'))} style={styles.btn}>
                    <Text style={[styles.btnText, styles.white]}> - </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispatch(buttonPressed('+'))} style={styles.btn}>
                    <Text style={[styles.btnText, styles.white]}> + </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flex: 1
    },
    btn: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderRightColor: "black"

    },
    operations: {
        flex: 1,
        backgroundColor: '#0A5BFB',
        justifyContent: "space-around",
        alignItems: "stretch"
    },
    btnText: {
        fontSize: 30,

    },
    white: {
        color: "white"
    },
})

export default Operation;