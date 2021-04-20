import React, { Fragment } from 'react'
import { View, StyleSheet } from 'react-native'
import ClearButtons from './ClearButtons/ClearButtons'
import Operation from './Operation/Operation'
import Numbers from './Numbers/Numbers'

const Keypad = () => {
    return (
        <Fragment>
            <ClearButtons></ClearButtons>
            <View style={styles.buttons}>
                <Numbers></Numbers>
                <Operation></Operation>
            </View>
        </Fragment>
    )
}
export default Keypad;

const styles = StyleSheet.create({
    buttons: {
        flex: 7,
        flexDirection: 'row'
    },
})
