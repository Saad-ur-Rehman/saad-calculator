// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

export default function App() {

  const [result, setResult] = useState("")
  const [presult, setPresult] = useState("")
  const [operation, setOperation] = useState("")

  const buttonPressed = (text) => {
    if (text === 0 && result === "") {
      return
    }
    if (text === '.' && result.includes('.')) {
      return
    }
    if (text === 'Del') {
      setResult((prevResult) => prevResult.slice(0, -1))
      return
    }
    setResult((prevResult) => prevResult + text)
  }

  const acClear = () => {
    setResult("")
    setPresult("")
    setOperation("")
  }
  // bug 1 can't press add before anynumber  === FIXED ===
  // bug 2 pressing add twice overwrites operation with result === FIXED ===
  // bug 3 when press add after just pressing . calculation error happens. === FIXED ===
  // bug 4  when set toFixed(4) method always show 4 numbers even when they are 0 === FIXED ===
  const add = () => {
    if (operation === "") {
      if (result === "") {
        setPresult('0')
      }
      else if (result === ".") {
        return
      } else { setPresult(result) }

      setResult("")
      setOperation("+")
    }
  }

  // bug 1 20 - 10 gives answer  -10 === FIXED === swap prevResult with pResult in calculation when press =
  const subtract = () => {
    if (operation === "") {
      if (result === "") {
        setPresult('0')
      }
      else if (result === ".") {
        return
      } else { setPresult(result) }

      setResult("")
      setOperation("-")
    }
  }

  const multi = () => {
    if (operation === "") {
      if (result === "") {
        setPresult('0')
      }
      else if (result === ".") {
        return
      } else { setPresult(result) }

      setResult("")
      setOperation("*")
    }
  }

  const divide = () => {
    if (operation === "") {
      if (result === "") {
        setPresult('0')
      }
      else if (result === ".") {
        return
      } else { setPresult(result) }

      setResult("")
      setOperation("/")
    }
  }

  // ===  can't use oepration on ZERO "0" if ZERO is 1st number === FIXED === use else if on 2nd condition for "."


  const equal = () => {
    if (operation == '+') {
      setResult((prevResult) => {
        let num = parseFloat((parseFloat(prevResult) + parseFloat(presult)).toFixed(4))
        return num.toString()
      })
      setPresult("")
      setOperation("")
    }

    if (operation === '-') {
      setResult((prevResult) => {
        let num = parseFloat((parseFloat(presult) - parseFloat(prevResult)).toFixed(4))
        return num.toString()
      })
      setPresult("")
      setOperation("")
    }

    if (operation == '*') {
      setResult((prevResult) => {
        let num = parseFloat((parseFloat(prevResult) * parseFloat(presult)).toFixed(4))
        return num.toString()
      })
      setPresult("")
      setOperation("")
    }

    if (operation === '/') {
      setResult((prevResult) => {
        let num = parseFloat((parseFloat(presult) / parseFloat(prevResult)).toFixed(4))
        return num.toString()
      })
      setPresult("")
      setOperation("")
    }
  }




  return (
    <View style={styles.container}>

      <View style={styles.result}>
        <Text style={styles.resultText}>{result === "" ? "0" : result}</Text>
      </View>

      <View style={styles.calculation}>
        <Text style={styles.calculationText}>{presult + " " + operation}</Text>
      </View>

      <View style={styles.DelButtons}>
        <TouchableOpacity onPress={() => { acClear() }} style={styles.btn}>
          <Text style={[styles.btnText, { color: "black" }]}> AC </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => buttonPressed('Del')} style={styles.btn}>
          <Text style={[styles.btnText, { color: "black" }]}> Del </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttons}>
        <View style={styles.numbers}>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => buttonPressed(7)} style={styles.btn}>
              <Text style={styles.btnText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => buttonPressed(8)} style={styles.btn}>
              <Text style={styles.btnText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => buttonPressed(9)} style={styles.btn}>
              <Text style={styles.btnText}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => buttonPressed(4)} style={styles.btn}>
              <Text style={styles.btnText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => buttonPressed(5)} style={styles.btn}>
              <Text style={styles.btnText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => buttonPressed(6)} style={styles.btn}>
              <Text style={styles.btnText}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => buttonPressed(1)} style={styles.btn}>
              <Text style={styles.btnText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => buttonPressed(2)} style={styles.btn}>
              <Text style={styles.btnText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => buttonPressed(3)} style={styles.btn}>
              <Text style={styles.btnText}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity onPress={() => buttonPressed('.')} style={styles.btn}>
              <Text style={styles.btnText}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => buttonPressed(0)} style={styles.btn}>
              <Text style={styles.btnText}>0</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => equal()} style={styles.btn}>
              <Text style={styles.btnText}> = </Text>
            </TouchableOpacity>

          </View>
        </View>

        <View style={styles.operations}>
          <TouchableOpacity onPress={() => multi()} style={styles.btn}>
            <Text style={[styles.btnText, styles.white]}> * </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => divide()} style={styles.btn}>
            <Text style={[styles.btnText, styles.white]}> / </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => subtract()} style={styles.btn}>
            <Text style={[styles.btnText, styles.white]}> - </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => add()} style={styles.btn}>
            <Text style={[styles.btnText, styles.white]}> + </Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 25
    //  backgroundColor: '#fff',
    //  alignItems: 'center',
    //  justifyContent: 'center',
  },

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
  white: {
    color: "white"
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

  buttons: {
    flex: 7,
    flexDirection: 'row'
  },
  numbers: {
    flex: 3,
    backgroundColor: '#73A2FF',
    borderRightWidth: 1,
    borderRightColor: "black"
  },
  operations: {
    flex: 1,
    backgroundColor: '#0A5BFB',
    justifyContent: "space-around",
    alignItems: "stretch"
  },
  DelButtons: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFA700'
  }
});
