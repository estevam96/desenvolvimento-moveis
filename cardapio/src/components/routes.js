import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from '../view/Home';
import Header from './Hearder';
import Meal from '../view/Meal';

const Stack = createStackNavigator();


export default function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={Home} options={{ header: props => <Header {...props} /> }} />
      <Stack.Screen name="refeicao" component={TabBar} options={{ title: "Cardápio"}}/>
    </Stack.Navigator>
  );
}

const Tab = createMaterialTopTabNavigator();

const TabBar = () => (
  <Tab.Navigator>
    <Tab.Screen name="Segunda" component={Meal} />
    <Tab.Screen name="Terça" component={Meal} />
    <Tab.Screen name="Quarta" component={Meal} />
    <Tab.Screen name="Quinta" component={Meal} />
    <Tab.Screen name="Sexta" component={Meal} />
  </Tab.Navigator>
);
