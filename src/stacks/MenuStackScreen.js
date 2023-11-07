import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import MenuScreen from '../screens/MenuScreen'
import RegistrarJugadorScreen from '../screens/RegistrarJugadorScreen'
import CrearEquipoScreen from '../screens/CrearEquipoScreen'

const MenuStackScreen = () => {
    const MenuStack = createNativeStackNavigator()
    return (
        <MenuStack.Navigator screenOptions={{ headerTitleAlign: 'center'}}>
            <MenuStack.Screen name="MenuBotones" component={MenuScreen} />
            <MenuStack.Screen name="RegistrarJugador" component={RegistrarJugadorScreen} />
            <MenuStack.Screen name="CrearEquipo" component={CrearEquipoScreen} />
        </MenuStack.Navigator>
    )
}

export default MenuStackScreen