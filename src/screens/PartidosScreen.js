import { View, Text, Pressable} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {buttonStyles} from '../Styles'
const PartidosScreen = () => {
    const navigation = useNavigation(); // este es el hook
  return (
    <View>
      <Text>PartidosScreen</Text>
      <Pressable style={buttonStyles.button} onPress={() => navigation.navigate('Crear Equipo')}>
        <Text style={buttonStyles.textButton}>Crear Equipo</Text>
      </Pressable>
    </View>
  )
}

export default PartidosScreen