import { View, Text, Button, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { buttonStyles } from '../Styles'
const MenuScreen = () => {
  const navigation = useNavigation(); // este es el hook
  return (
    <SafeAreaView style={buttonStyles.container}>
      <View style={buttonStyles.body}>

        <View >
          <Pressable style={buttonStyles.button}>
            <Text style={buttonStyles.textButton}>Formar Equipos</Text>
          </Pressable>
        </View>

        <View >
          <Pressable style={buttonStyles.button}>
            <Text style={buttonStyles.textButton}>Definir Partidos</Text>
          </Pressable>
        </View>

        <View >
          <Pressable style={buttonStyles.button} onPress={() => navigation.navigate('Crear Equipo')}>
            <Text style={buttonStyles.textButton}>Crear Equipo</Text>
          </Pressable>
        </View>

        <View>
          <Pressable style={buttonStyles.button} onPress={() => navigation.navigate('Registrar Jugador')}>
            <Text style={buttonStyles.textButton}>Registrar Jugador</Text>
          </Pressable>
        </View>

      </View >

    </SafeAreaView>


  )
}


export default MenuScreen