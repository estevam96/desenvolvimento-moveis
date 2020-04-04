import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Routes from './src/components/routes';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerType="slide" >
        <Drawer.Screen name="Home" component={Routes} />
        <Drawer.Screen name="RU - Campus do Benfica" component={Routes} />
        <Drawer.Screen name="RU - Campus do Pici" component={Routes} />
        <Drawer.Screen name="RU - Campus Sobral" component={Routes} />
        <Drawer.Screen name="RU - Campus Russas" component={Routes} />
        <Drawer.Screen name="RU - Campus Quixada" component={Routes} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


