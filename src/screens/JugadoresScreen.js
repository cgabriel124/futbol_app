import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { tableStyles } from '../Styles';
import { get_team_players } from '../api/ApiMethods';
import { useFocusEffect } from '@react-navigation/native';

const JugadoresScreen = () => {
  const [tableData, setTableData] = useState([]);

  // Utiliza useFocusEffect para cargar los datos cada vez que la pantalla se enfoca
  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          const response = await get_team_players();
          if (response.data) {
            setTableData(response.data.team_data);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

      fetchData();
    }, [])
  );

  return (
    <ScrollView style={tableStyles.container}>
      {tableData.map((team, index) => (
        <View key={index} style={tableStyles.teamContainer}>
          <Text style={tableStyles.teamName}>{team.nombre_equipo}</Text>
          <Table>
            <Row
              data={['Jugador', 'Posición - Nacionalidad']}
              style={tableStyles.tableHeader}
              textStyle={tableStyles.headerText}
            />
            <Rows
              data={team.jugadores.map((jugador) => [
                `${jugador.nombre} ${jugador.apellido}`,
                `${jugador.posicion} - ${jugador.nacionalidad}`,
              ])}
              style={tableStyles.RowStyle}
              textStyle={tableStyles.text}
            />
          </Table>
        </View>
      ))}
    </ScrollView>
  );
};

export default JugadoresScreen;