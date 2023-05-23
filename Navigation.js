import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// iconos
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';  
//Ventanas
import Home from "./Ventanas/Home";
import Settings from "./Ventanas/Settings";
import Stack from "./Ventanas/Stack";

const Stack1 = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack1.Navigator initialRouteName="VentanaHome">
      <Stack1.Screen
        name="Inicio"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack1.Screen
        name="pelis"
        component={Stack}
        options={{ headerBackTitleVisible: false }}
      />
    </Stack1.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function MisTabs() {
  return (
    <Tab.Navigator
      initialRouteName="sesion"
      screenOptions={{
        tabBarActiveTintColor: 'pink',
      }}
    >
      <Tab.Screen
        name="sesion"
        component={MyStack}
        options={{
          tabBarLabel: "entrar",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "invitado",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="card-travel" size={24} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MisTabs />
    </NavigationContainer>
  );
}
