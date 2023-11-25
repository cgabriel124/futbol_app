import { SafeAreaView, View } from 'react-native'
import React, { useState } from 'react'
import { create_player } from '../api/ApiMethods'
import { buttonStyles } from '../Styles'
import Buttom from '../Components/Buttom'
import Input from '../Components/Input'
import { Picker } from '@react-native-picker/picker';

const RegistrarJugadorScreen = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [anio, setAnio] = useState("");
  const [nacionalidad, setNacionalidad] = useState("");
  const [posicion, setPosicion] = useState("");

  const handleRegister = () => {
    create_player({
      nombre: nombre,
      apellido: apellido,
      ano_nacimiento: anio,
      posicion: posicion,
      nacionalidad: nacionalidad
    }).then((response) => {
      if (response.status == 200) {
        // TODO:         
        // mostrar alerta de que se registro correctamente         
        console.log("Se registro un nuevo Jugador");
      }
    }).catch((error) => {
      console.error(error);
      console.log(response.data)
    })
  }

  return (
    <SafeAreaView style={buttonStyles.container}>
      <View style={buttonStyles.body}>
        <Input
          placeholder="Nombre del jugador"
          value={nombre}
          setValue={setNombre}
        />
        <Input
          placeholder="Apellido del jugador"
          value={apellido}
          setValue={setApellido}
        />
        <Input
          placeholder="Año de nacimiento del jugador"
          keyboardType="decimal-pad"
          value={anio}
          setValue={setAnio}
        />
        <Input
          placeholder="Nacionalidad del jugador"
          value={nacionalidad}
          setValue={setNacionalidad}
        />
        <Picker
          selectedValue={posicion}
          style={styles.pickerStyle}  // Establecer un estilo para el Picker
          itemStyle={styles.pickerItemStyle}  // Establecer un estilo para los elementos del Picker
          onValueChange={(itemValue, itemIndex) => setPosicion(itemValue)}
        >
          <Picker.Item label="Delantero" value="Delantero" />
          <Picker.Item label="Mediocentro" value="Mediocentro" />
          <Picker.Item label="Defensa" value="Defensa" />
          <Picker.Item label="Portero" value="Portero" />
        </Picker>
        <Buttom text="Registrar" onPress={handleRegister} />
      </View>
    </SafeAreaView>
  );}
  const styles = {
    pickerStyle: {
      height: 50,
      width: 300,
      backgroundColor: "#e0e0e0",  // Color de fondo del Picker
      borderRadius: 8,  // Borde redondeado
      marginTop: 10,  // Margen superior
      marginBottom: 10,  // Margen inferior
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 100,
      //sombras
      backgroundColor: "#e0e0e0",
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 4,
      },
      shadowOpacity: 0.30,
      shadowRadius: 4.65,
      
      elevation: 8,
    },
    pickerItemStyle: {
      color: 'red',  // Color del texto de los elementos
      backgroundColor: '#fff',  // Color de fondo de los elementos
    },
}


export default RegistrarJugadorScreen