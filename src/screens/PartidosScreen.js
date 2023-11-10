import { View, Text, Pressable} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const PartidosScreen = () => {
    const navigation = useNavigation(); // este es el hook
  return (
    <View>
      <Text>PartidosScreen</Text>
      <Pressable title='Crear Equipo' onPress={() => navigation.navigate('Crear Equipo')} />
    </View>
  )
}

export default PartidosScreen