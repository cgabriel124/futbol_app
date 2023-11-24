import { View, Alert, Platform } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { buttonStyles } from '../Styles'
import Buttom from '../Components/Buttom'
import { distribute_teams, generate_matches } from '../api/ApiMethods'

const MenuScreen = () => {
  const navigation = useNavigation(); // este es el hook
  const showAlert = (message) => {
    if (Platform.OS === 'web') {
      window.confirm(message);
    } else {
      Alert.alert(message);
    }
  };
  const handleFormarEquipos = async () => {
    try {
      //TODO: MENSAJE DE CONFIRMACION
      showAlert('Los jugadores se han asignado a un equipo de manera exitosa.');
      const result = await distribute_teams();
      
      console.log('Resultado:', result);
    } catch (error) {
      console.error('Error al formar equipos:', error);
    }
  };

  const handleDefinirPartidos = async () => {
    try {
      //TODO: MENSAJE DE CONFIRMACION
      showAlert('Los partidos se han designado correctamenta. Consulte la opcion Partidos para obtener más información.');
      const result = await generate_matches();
      console.log('Resultado:', result);
    } catch (error) {
      console.error('Error al definir partidos:', error);
    }
    
  }

  return (

      <View style={buttonStyles.body}>
        <Buttom 
          text="Formar Equipos" 
          onPress={handleFormarEquipos}
        />
        <Buttom
          text="Definir Partidos"
          onPress={handleDefinirPartidos}
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

  )
}

export default MenuScreen