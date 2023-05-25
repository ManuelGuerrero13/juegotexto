// Navigation.js

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import InicioView from './views/InicioView'
import EventView from './views/EventView';


const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={InicioView} />
        <Stack.Screen name="Evento" component={EventView} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default Navigation;
