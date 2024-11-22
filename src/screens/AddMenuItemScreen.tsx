import React, { useState, useRef } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  StyleSheet, 
  TouchableOpacity, 
  Alert, 
  Animated, 
  Easing, 
  KeyboardAvoidingView, 
  Platform, 
  ScrollView, 
  Button
} from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { MenuItem } from '../types';
import uuid from 'react-native-uuid';
const Picker: any = require('@react-native-picker/picker').Picker;

type AddMenuItemScreenRouteProp = RouteProp<RootStackParamList, 'AddMenuItem'>;

const AddMenuItemScreen: React.FC<{ navigation: any, route: any }> = ({ navigation, route }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [course, setCourse] = useState('');
  const [description, setDescription] = useState('');
  const { setMenuItems } = route.params || {};

  const handleAddMenuItem = () => {
    if (name && price && course) {
      const newItem: MenuItem = {
        id: Math.random().toString(),
        name,
        price: parseFloat(price),
        course,
        description,
      };
      setMenuItems((prevItems: MenuItem[]) => [...prevItems, newItem]);
      navigation.goBack();  // Navigate back to Home
    } else {
      alert('Please fill out all fields.');
    }
  };

  const courses = ['Starters', 'Mains', 'Desserts'];

 return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <Text style={styles.header}>Add Menu Item</Text>

      <TextInput
        style={styles.input}
        placeholder="Item Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TextInput
        style={[styles.input, styles.multilineInput]}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        multiline
        numberOfLines={3}
      />

      <Text style={styles.label}>Select Course:</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={course}
          onValueChange={(value: React.SetStateAction<string>) => setCourse(value)}
          style={styles.picker}
        >
          <Picker.Item label="Select a course" value="" />
          {courses.map((courseOption) => (
            <Picker.Item key={courseOption} label={courseOption} value={courseOption} />
          ))}
        </Picker>
      </View>

      <TouchableOpacity style={styles.addButton} onPress={handleAddMenuItem}>
        <Text style={styles.buttonText}>Add Item</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 15,
  },
  multilineInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  label: { fontSize: 16, marginVertical: 10 },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  addButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default AddMenuItemScreen;