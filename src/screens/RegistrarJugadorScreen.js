import { SafeAreaView, View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import { buttonStyles } from '../Styles'

const RegistrarJugadorScreen = () => {
  return (
    <SafeAreaView style = {buttonStyles.container}>
      <View style = {buttonStyles.body}>
        <View style = {buttonStyles.contentInput}>
          <TextInput placeholder="Nombre del jugador"/>
        </View>
        <View style = {buttonStyles.contentInput}>
          <TextInput placeholder="Apellido del jugador"/>
        </View>
        <View style = {buttonStyles.contentInput}>
          <TextInput placeholder="Año de nacimiento del jugador" keyboardType='decimal-pad'/>
        </View>
        <View style = {buttonStyles.contentInput}>
          <TextInput placeholder="Nacionalidad del jugador"/>
        </View>
        <View style = {buttonStyles.contentInput}>
          <TextInput placeholder="Posición del jugador"/>
        </View>
        <View>
          <Pressable style = {buttonStyles.button}>
            <Text style = {buttonStyles.textButton}>Registrar</Text>
          </Pressable>
        </View> 
      </View>
    </SafeAreaView>
  )
}


export default RegistrarJugadorScreen