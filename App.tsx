import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import AddMenuItemScreen from './src/screens/AddMenuItemScreen';
import FilterScreen from './src/screens/FilterScreen';
import { MenuItem } from './src/types';

export type RootStackParamList = {
  Home: undefined;
  AddMenuItem: { setMenuItems: React.Dispatch<React.SetStateAction<MenuItem[]>> }
  Filter: { menuItems: MenuItem[]; filterByCourse: (course: string) => MenuItem[] };
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
        <Stack.Screen
          name="Filter"
          component={FilterScreen}
          options={{ title: 'Filter by Course' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
