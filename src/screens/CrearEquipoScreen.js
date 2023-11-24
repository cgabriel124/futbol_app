import { View, SafeAreaView} from 'react-native'
import React, { useState } from 'react'
import { create_team } from '../api/ApiMethods'
import { buttonStyles } from '../Styles'
import Buttom from '../Components/Buttom'
import Input from '../Components/Input'

const CrearEquipoScreen = () => {
  const [nombreEquipo, setNombreEquipo] = useState("");
  const [direccion, setDireccion] = useState("");
  const [logo, setLogo] = useState(null);
  const [descripcion, setDescripcion] = useState("");

  const handleRegister = () => {
    create_team({
      nombre_equipo: nombreEquipo,
      direccion: direccion,
      //logo: logo,   
      //logo: logo ? logo.uri : null,
      descripcion: descripcion,
      numero_jugadores: null
    }).then((response) => {
      if (response.status == 200) {
        // TODO:         
        // mostrar alerta de que se registro correctamente         
        console.log("Se registro un nuevo equipo");
      }
    }).catch((error) => {
      console.error(error);
      console.log(response.data)
    })

  };
  
    return (
      <SafeAreaView style={buttonStyles.container} >
        <View style={buttonStyles.body}>
          <Input
            placeholder="Nombre del equipo"
            value={nombreEquipo}
            setValue={setNombreEquipo}
          />
          <Input
            placeholder="Sede del equipo"
            value={direccion}
            setValue={setDireccion}
          />
          <Input
            placeholder="Descripción del equipo"
            value={descripcion}
            setValue={setDescripcion}
          />

          <Buttom text="Registrar" onPress={handleRegister} />
        </View>
      </SafeAreaView >
    )
}

  export default CrearEquipoScreen