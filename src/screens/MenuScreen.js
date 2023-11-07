import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const MenuScreen = () => {
  const navigation = useNavigation(); // este es el hook
  return (
    <View>
      <Text>Este es un texto en el menu</Text>
      <Button title='Crear Equipo' onPress={() => navigation.navigate('CrearEquipo')} />
      <Button title='Registrar Jugador' onPress={() => navigation.navigate('RegistrarJugador')}/>
    </View>
  )
}

export default MenuScreen