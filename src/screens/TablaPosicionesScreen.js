import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { get_team_stats } from '../api/ApiMethods';
import { tableStyles } from '../Styles';
import { useFocusEffect } from '@react-navigation/native';

const TablaPosicionesScreen = () => {
  const [teamStats, setTeamStats] = useState([]);



  // Utiliza useFocusEffect para cargar los datos cada vez que la pantalla se enfoca
  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          const response = await get_team_stats();
          setTeamStats(response.data.equipos_info);
        } catch (error) {
          console.error('Error fetching team stats:', error);
        }
      }

      fetchData();
    }, [])
  );

  const sortTeams = () => {
    return teamStats.sort((a, b) => {
      if (a.ganados !== b.ganados) {
        return b.ganados - a.ganados;
      } else if (a.empatados !== b.empatados) {
        return b.empatados - a.empatados;
      } else {
        return 0; // Igual en ganados y empatados
      }
    });
  };

  const renderTable = () => {
    const sortedTeams = sortTeams();

    return sortedTeams.map((team, index) => [
      index + 1, // Posición
      team.nombre_equipo,
      team.ganados,
      team.empatados,
      team.perdidos,
    ]);
  };

  return (
    <View style={tableStyles.container}>
      <Table>
        <Row
          data={['Pos.', 'Equipo', 'Ganados', 'Empatados', 'Perdidos']}
          style={tableStyles.tableHeader}
          textStyle={tableStyles.headerText}
        />
        <Rows data={renderTable()} style={tableStyles.RowStyle} textStyle={tableStyles.text} />
      </Table>
    </View>
  );
};

export default TablaPosicionesScreen;
