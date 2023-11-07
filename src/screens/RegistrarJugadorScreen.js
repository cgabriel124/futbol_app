import { SafeAreaView, View, Text, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native'
import React from 'react'
import { Button } from 'react-native-web'

const RegistrarJugadorScreen = () => {
  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.body}>
        <View style = {styles.contentInput}>
          <TextInput placeholder="Nombre del jugador"/>
        </View>
        <View style = {styles.contentInput}>
          <TextInput placeholder="Apellido del jugador"/>
        </View>
        <View style = {styles.contentInput}>
          <TextInput placeholder="Año de nacimiento del jugador" keyboardType='decimal-pad'/>
        </View>
        <View style = {styles.contentInput}>
          <TextInput placeholder="Nacionalidad del jugador"/>
        </View>
        <View style = {styles.contentInput}>
          <TextInput placeholder="Posición del jugador"/>
        </View>
        <View>
          <TouchableOpacity style = {styles.button}>
            <Text style = {styles.textButton}>Registrar</Text>
          </TouchableOpacity>
        </View>
        

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container :{
    flex: 1,
    marginTop: 16,
    justifyContent: 'center',
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',

  },
  contentInput: {
    justifyContent: 'center',
    width: '80%',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 100,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: "10%",
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    width: '90%',
    height: 40,
    borderColor: 'black',
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 100,
    
  },
  textButton: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
})

export default RegistrarJugadorScreen