import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Table, Row } from 'react-native-table-component';
import { get_team_players } from '../api/ApiMethods';  // Ajusta la importación según la ubicación de tu función API

const JugadoresScreen = () => {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Llamar a la API y actualizar los datos de la tabla
    const fetchData = async () => {
      try {
        const response = await get_team_players();
        setTableData(response.data);  // Ajusta esto según la estructura de tu respuesta
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const renderTable = () => {
    return tableData.map((equipo, index) => (
      <Row
        key={index}
        data={[
          `${equipo.jugadores[0].nombre} (${equipo.jugadores[0].posicion})`,
          equipo.nombre_equipo,
        ]}
        textStyle={styles.text}
      />
    ));
  };

  return (
    <View style={styles.container}>
      <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
        {renderTable()}
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  text: { margin: 6 },
});

export default JugadoresScreen;