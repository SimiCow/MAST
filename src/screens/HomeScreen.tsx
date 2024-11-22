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
import { RootStackParamList } from '../../App';
import { v4 as uuidv4 } from 'uuid';
import MenuItemComponent from '../components/MenuItemComponent';
import { MenuItem } from '../types';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;


const HomeScreen = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: '1', name: 'Salad', price: 20, course: 'Starters',
      description: 'Fresh leafy greens, feta and tomatoes drizzled with a sweet balsamic reduction'
    },
    {
      id: '2', name: 'Roast Chicken', price: 60, course: 'Mains',
      description: 'Juicy oven roasted chicken with butternut and creamed spinach'
    },
    {
      id: '3', name: 'Chocolate Cake', price: 45, course: 'Desserts',
      description: 'Dense dark chocolate cake with a rich chocolate cream cheese frosting'
    },
  ]);
  const navigation = useNavigation<HomeScreenNavigationProp>();


  const courses = ['Starters', 'Mains', 'Desserts'];

    // Calculate the average price of all menu items
  const calculateAveragePrice = (items: MenuItem[]) => {
    const totalPrice = items.reduce((acc, item) => acc + item.price, 0);
    return totalPrice / items.length;
  };

  const averagePrice = calculateAveragePrice(menuItems);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Menu</Text>
      <Text style={styles.subHeader}>Average Price: R{averagePrice.toFixed(2)}</Text>

      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('AddMenuItem', { setMenuItems })}>
          <Text style={styles.buttonText}>Add Menu Item</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate('Filter', {
            menuItems,
            filterByCourse: (course: string) => menuItems.filter(item => item.course === course),
          })}
        >
          <Text style={styles.buttonText}>Filter Menu</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.menuItem}>{item.name} - R{item.price}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  subHeader: { fontSize: 18, marginBottom: 20, textAlign: 'center', color: '#555' },
  actionButtons: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  actionButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 10,
    width: '48%',
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  menuItem: { fontSize: 16, padding: 10, backgroundColor: '#fff', marginBottom: 5, borderRadius: 8 },
});

export default HomeScreen;