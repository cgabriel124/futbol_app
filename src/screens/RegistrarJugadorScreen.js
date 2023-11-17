import { SafeAreaView, View, Text, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'
import { create_player} from '../api/ApiMethods'
import { buttonStyles } from '../Styles'
import Buttom from '../Components/Buttom'
import Input from '../Components/Input'

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
        <Input
          placeholder="Posición del jugador"
          value={posicion}
          setValue={setPosicion}
        />
        <Buttom text="Registrar" onPress={handleRegister} />
      </View>
    </SafeAreaView>
  );
}

export default RegistrarJugadorScreen