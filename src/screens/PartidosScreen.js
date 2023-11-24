import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Buttom from '../Components/Buttom';
import Input from '../Components/Input';
import { set_result } from '../api/ApiMethods';
import { get_matches } from '../api/ApiMethods';
import { useFocusEffect } from '@react-navigation/native';
import { tableStyles } from '../Styles';

const Partidoscreen = () => {
  const [matches, setMatches] = useState([]);
  const [golesLocal, setGolesLocal] = useState("");
  const [golesVisitante, setGolesVisitante] = useState("");

  // Utiliza useFocusEffect para cargar los datos cada vez que la pantalla se enfoca
  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          const matchesData = await get_matches();
          setMatches(matchesData.data.partidos_info);
        } catch (error) {
          console.error('Error fetching matches:', error);
        }
      };

      fetchData();
    }, [])
  );

  const handleIngresar= async (idPartido, golesLocal, golesVisitante, idEquipoLocal, idEquipoVisitante) => {
    try {
      // Llama a tu función set_result para enviar los datos a la API
      console.log('Id partido:', idPartido, 'Goles Local:', golesLocal, 'Goles Visitante:', golesVisitante, 'Id Equipo Local:', idEquipoLocal, 'Id Equipo Visitante:', idEquipoVisitante);
      const response = await set_result({
        id_partido: idPartido,
        id_equipo_local: idEquipoLocal,
        id_equipo_visitante: idEquipoVisitante,
        goles_local: parseInt(golesLocal),
        goles_visitante: parseInt(golesVisitante),
      });
      console.log('Resultado:', response);
      // Verifica la respuesta de la API
      if (response.status === 200) {
        console.log('Resultado registrado exitosamente');
        // Puedes realizar alguna acción adicional si es necesario
      } else {
        console.error('Error al registrar el resultado:', response.statusText);
      }
    } catch (error) {
      console.error('Error al enviar datos a la API:', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {matches.map((match) => (
        <View key={match.id_partido} style={styles.matchContainer}>
          <View style={styles.teamContainer}>
            <Text style={tableStyles.teamName} >{match.nombre_equipo_local}</Text>
            <Input
              placeholder="Resultado"
              keyboardType="numeric"
              setValue={setGolesLocal}
              customStyles={{
                width: 100,
              }}
            />
          </View>
          <View style={styles.teamContainer}>
            <Buttom
              text="Ingresar"
              onPress={() => handleIngresar(match.id_partido, golesLocal, golesVisitante, match.id_equipo_local, match.id_equipo_visitante)}
              customStyles={{
                width: 100, 
              }}
            />
          </View>
          <View style={styles.teamContainer}>
            <Text style={tableStyles.teamName} >{match.nombre_equipo_visitante}</Text>
            <Input
              placeholder="Resultado"
              keyboardType="numeric"
              setValue={setGolesVisitante}
              customStyles={{
                width: 100,
              }}
            />
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  matchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  teamContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Partidoscreen;
