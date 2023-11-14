import { View, Text, SafeAreaView, TextInput, Pressable } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import { buttonStyles } from '../Styles'
const CrearEquipoScreen = () => {
  return (
    <SafeAreaView style = {buttonStyles.container}>
      <View style = {buttonStyles.body}>
        <View style = {buttonStyles.contentInput}>
          <TextInput placeholder="Nombre del Equipo"/>
        </View>
        <View style = {buttonStyles.contentInput}>
          <TextInput placeholder="Dirección de la sede"/>
        </View>
        <View style = {buttonStyles.contentInput}>
          <TextInput placeholder="Logo" keyboardType='decimal-pad'/>
        </View>
        <View style = {buttonStyles.contentInput}>
          <TextInput placeholder="Descripción"/>
        </View>
        <View>
          <Pressable style = {buttonStyles.button}>
            <Text style = {buttonStyles.textButton}>Crear</Text>
          </Pressable>
        </View> 
      </View>
    </SafeAreaView>
  )
}

export default CrearEquipoScreen