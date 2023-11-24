import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import MenuStackScreen from './stacks/MenuStackScreen'
import PartidosScreen from './screens/PartidosScreen'
import TablaPosicionesScreen from './screens/TablaPosicionesScreen'
import JugadoresScreen from './screens/JugadoresScreen'
import Icon from 'react-native-vector-icons/Ionicons'
import { headerStyles, tabBarOptions } from './Styles.js'

const BottomTab = () => {
    const Tab = createBottomTabNavigator();


    const screenOptions = ({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            const icons = {
                Menu: { focused: "home", unfocused: "home-outline" },
                Partidos: { focused: "football", unfocused: "football-outline" },
                Posiciones: { focused: "list", unfocused: "list-outline" },
                Jugadores: { focused: "people", unfocused: "people-outline" }
            };
            const iconName = focused ? icons[route.name].focused : icons[route.name].unfocused;
            return <Icon name={iconName} size={size + 5} color={color} />;
        },
        tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "bold"
        },
        ...headerStyles,
        ...tabBarOptions
    });

    return (
        <NavigationContainer>
            <Tab.Navigator
                //tabBarOptions={tabBarOptions}
                screenOptions={screenOptions}
            >
                <Tab.Screen name="Menu" component={MenuStackScreen} options={{ headerShown: false }} />
                <Tab.Screen name="Partidos" component={PartidosScreen} />
                <Tab.Screen name="Posiciones" component={TablaPosicionesScreen} />
                <Tab.Screen name="Jugadores" component={JugadoresScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default BottomTab;