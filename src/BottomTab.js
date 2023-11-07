import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import MenuStackScreen from './stacks/MenuStackScreen'
import PartidosScreen from './screens/PartidosScreen'
import TablaPosicionesScreen from './screens/TablaPosicionesScreen'
import JugadoresScreen from './screens/JugadoresScreen'
import Icon from 'react-native-vector-icons/Ionicons'

export const BottomTab = () => {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName = '';

                        switch (route.name) {
                            case 'Menu':
                                iconName = focused ? "home" : "home-outline" //else if
                                break;
                            case 'Partidos':
                                iconName = focused ? "football" : "football-outline" //else if
                                break;
                            case 'Posiciones':
                                iconName = focused ? "list" : "list-outline" //else if
                                break;
                            case 'Jugadores':
                                iconName = focused ? "people" : "people-outline" //else if
                                break;
                            default:
                                break;
                        }
                        return <Icon name={iconName} size={size+5} color={color} />
                    },
                    
                })}>
                <Tab.Screen name="Menu" component={MenuStackScreen} options={{ headerShown: false, headerTitleAlign: 'center' }}  />
                <Tab.Screen name="Partidos" component={PartidosScreen} options={{ headerTitleAlign: 'center' }} />
                <Tab.Screen name="Posiciones" component={TablaPosicionesScreen} options={{ headerTitleAlign: 'center' }} />
                <Tab.Screen name="Jugadores" component={JugadoresScreen} options={{ headerTitleAlign: 'center' }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default BottomTab