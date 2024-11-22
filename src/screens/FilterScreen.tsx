import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { MenuItem } from '../types';
import MenuItemComponent from '../components/MenuItemComponent';
import { FilterScreenProps } from '../types'; 


const FilterScreen: React.FC<FilterScreenProps> = ({ route, navigation }) => {
    const { menuItems, filterByCourse } = route.params;
    const [filteredItems, setFilteredItems] = useState(menuItems);

  const handleFilter = (course: string) => {
    setFilteredItems(filterByCourse(course));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Filter Menu by Course</Text>
      <View style={styles.filterButtons}>
        <TouchableOpacity style={styles.filterButton} onPress={() => handleFilter('Starters')}>
          <Text style={styles.filterButtonText}>Starters</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => handleFilter('Mains')}>
          <Text style={styles.filterButtonText}>Mains</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton} onPress={() => handleFilter('Desserts')}>
          <Text style={styles.filterButtonText}>Desserts</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MenuItemComponent item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  filterButtons: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  filterButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 10,
    width: '30%',
    alignItems: 'center',
  },
  filterButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default FilterScreen;