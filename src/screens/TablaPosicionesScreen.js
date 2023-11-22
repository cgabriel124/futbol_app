import { View, Text, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Table, Row } from 'react-native-table-component';
import { get_team_stats } from '../api/ApiMethods';


const TablaPosicionesScreen = () => {
  const [teamStats, setTeamStats] = useState([]);

  useEffect(() => {
    const fetchTeamStats = async () => {
      try {
        const response = await get_team_stats();
        setTeamStats(response.data.equipos_info);
      } catch (error) {
        console.error('Error fetching team stats:', error);
      }
    };

    fetchTeamStats();
  }, []);

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

    return sortedTeams.map((team, index) => (
      <Row
        key={index}
        data={[
          index + 1, // Posición
          team.nombre_equipo,
          team.ganados,
          team.empatados,
          team.perdidos,
        ]}
        style={styles.row}
        textStyle={styles.text}
      />
    ));
  };

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
        <Row
          data={['Posición', 'Equipo', 'Ganados', 'Empatados', 'Perdidos']}
          style={styles.head}
          textStyle={styles.headText}
        />
        {renderTable()}
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  headText: { margin: 6 },
  row: { height: 40, backgroundColor: '#f9f9f9' },
  text: { margin: 6 },
});


export default TablaPosicionesScreen