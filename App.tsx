import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/components/screens/HomeScreen';
import AddMenuItemScreen from './src/components/screens/AddMenuItemScreen';

export type RootStackParamList = {
  Home: undefined;
  AddMenuItem: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: "Christoffel's Menu" }}
        />
        <Stack.Screen 
          name="AddMenuItem" 
          component={AddMenuItemScreen} 
          options={{ title: 'Add Menu Item' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
