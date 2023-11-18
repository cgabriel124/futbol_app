import { View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { buttonStyles } from '../Styles'
import Buttom from '../Components/Buttom'
import { distribute_teams } from '../api/ApiMethods'

const MenuScreen = () => {
  const navigation = useNavigation(); // este es el hook
  const handleFormarEquipos = async () => {
    try {
      //TODO: MENSAJE DE CONFIRMACION
      const result = await distribute_teams();
      console.log('Resultado:', result);
    } catch (error) {
      console.error('Error al formar equipos:', error);
    }
  };

  return (
    <SafeAreaView style={buttonStyles.container}>
      <View style={buttonStyles.body}>
        <Buttom 
          text="Formar Equipos" 
          onPress={handleFormarEquipos}
        />
        <Buttom
          text="Definir Partidos"
          />
        <Buttom
          text="Crear Equipo"
          onPress={() => navigation.navigate('Crear Equipo')}
        />
        <Buttom
          text="Registrar Jugador"
          onPress={() => navigation.navigate('Registrar Jugador')}
        />
      </View >
    </SafeAreaView>
  )
}

export default MenuScreen