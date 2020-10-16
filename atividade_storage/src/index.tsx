import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "@pages/Home";
import Register from "@pages/Register";
import Show from "@/pages/Show";
import { RootStackParamList } from '@/@types';

const Stack = createStackNavigator<RootStackParamList>();

const App:React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Home"}>
        <Stack.Screen options={{title: "Heros"}} name="Home" component={Home} />
        <Stack.Screen name="Show" component={Show} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;