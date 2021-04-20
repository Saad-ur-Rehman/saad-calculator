import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { buttonDel, acClear } from '../../../store/actions'
const ClearButtons = () => {
    const dispatch = useDispatch()
    return (
        <View style={styles.DelButtons}>
            <TouchableOpacity onPress={() => dispatch(acClear())} style={styles.btn}>
                <Text style={[styles.btnText, { color: "black" }]}> AC </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dispatch(buttonDel())} style={styles.btn}>
                <Text style={[styles.btnText, { color: "black" }]}> Del </Text>
            </TouchableOpacity>
        </View>
    )
}



export default ClearButtons;

const styles = StyleSheet.create({
    DelButtons: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFA700'
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
})