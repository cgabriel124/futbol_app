import { View, Text, Button} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const PartidosScreen = () => {
    const navigation = useNavigation(); // este es el hook
  return (
    <View>
      <Text>PartidosScreen</Text>
      <Button title='Crear Equipo' onPress={() => navigation.navigate('CrearEquipo')} />
    </View>
  )
}

export default PartidosScreen