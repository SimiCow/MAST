import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  course: string;
  price: number;
}

interface Props {
  item: MenuItem;
}

const MenuItemComponent: React.FC<Props> = ({ item }) => {
  return (
    <View style={styles.menuItem}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <View style={styles.details}>
        <Text style={styles.course}>{item.course}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  menuItem: { 
    padding: 15, 
    backgroundColor: '#fff', 
    borderRadius: 10, 
    marginBottom: 10, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  itemName: { 
    fontSize: 18, 
    fontWeight: '600' 
  },
  description: { 
    fontSize: 14, 
    color: '#555', 
    marginVertical: 5 
  },
  details: { 
    flexDirection: 'row', 
    justifyContent: 'space-between' 
  },
  course: { 
    fontSize: 14, 
    fontStyle: 'italic', 
    color: '#777' 
  },
  price: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#333' 
  },
});

export default MenuItemComponent;
