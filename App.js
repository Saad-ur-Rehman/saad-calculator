// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.result}>
        <Text style={styles.resultText}>123</Text>
      </View>
      <View style={styles.calculation}>
        <Text style={styles.calculationText}>123*555</Text>
      </View>
      <View style={styles.buttons}>
        <View style={styles.numbers}>
          <View style={styles.row}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>7</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>9</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>6</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>3</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}> = </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.operations}>
          <TouchableOpacity style={styles.btn}>
            <Text style={[styles.btnText, styles.white]}> * </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={[styles.btnText, styles.white]}> / </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={[styles.btnText, styles.white]}> - </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
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
    paddingTop: 25
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
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: "black"
  },
  resultText: {
    fontSize: 30,
    color: "white"
  },

  calculation: {
    flex: 1,
    backgroundColor: 'powderblue',
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
    backgroundColor: 'steelblue',
    borderRightWidth: 1,
    borderRightColor: "black"
  },
  operations: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: "space-around",
    alignItems: "stretch"
  }
});
