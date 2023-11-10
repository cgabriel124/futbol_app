import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { headerStyles } from '../Styles';
import MenuScreen from '../screens/MenuScreen';
import RegistrarJugadorScreen from '../screens/RegistrarJugadorScreen';
import CrearEquipoScreen from '../screens/CrearEquipoScreen';



const MenuStack = () => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            screenOptions={headerStyles}
        >
            <Stack.Screen name="Menu Botones" component={MenuScreen} />
            <Stack.Screen name="Registrar Jugador" component={RegistrarJugadorScreen} />
            <Stack.Screen name="Crear Equipo" component={CrearEquipoScreen} />
        </Stack.Navigator>
    );
}

export default MenuStack;