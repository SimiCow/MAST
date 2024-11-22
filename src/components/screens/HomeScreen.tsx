import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  StyleSheet, 
  TouchableOpacity, 
  Animated 
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { RootStackParamList } from '../../../App';
import { v4 as uuidv4 } from 'uuid';
import MenuItemComponent from './src/components/screens/MenuItemComponent';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface MenuItem {
  id: string;
  name: string;
  description: string;
  course: string;
  price: number;
}

const HomeScreen = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const navigation = useNavigation<HomeScreenNavigationProp>();

  // Listen for newly added menu items when the screen is focused
  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        // If there's a newly added item via params, add it to the list
        const newItem = (navigation.getState().routes.find(route => route.name === 'Home')?.params as any)?.newItem;
        if (newItem) {
          setMenuItems(prevItems => [...prevItems, newItem]);
        }
      });

      return unsubscribe;
    }, [navigation])
  );

  // Function to add a new menu item
  const addMenuItem = (item: MenuItem) => {
    setMenuItems([...menuItems, item]);
  };

  // Navigate to AddMenuItemScreen and pass the addMenuItem function via params
  const handleNavigateToAdd = () => {
    navigation.navigate('AddMenuItem', { addMenuItem });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MenuItemComponent item={item} />
        )}
        ListHeaderComponent={<Text style={styles.header}>Christoffel's Menu</Text>}
      />
      <Text style={styles.total}>Total Menu Items: {menuItems.length}</Text>
      <TouchableOpacity style={styles.addButton} onPress={handleNavigateToAdd}>
        <Text style={styles.addButtonText}>Add Menu Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#f5f5f5' 
  },
  header: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    textAlign: 'center' 
  },
  total: { 
    marginTop: 10, 
    fontSize: 16, 
    textAlign: 'center' 
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: { 
    color: '#fff', 
    fontSize: 16, 
    fontWeight: 'bold' 
  },
});

export default HomeScreen;
