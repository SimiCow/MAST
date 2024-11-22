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
  ScrollView 
} from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../App';
import { v4 as uuidv4 } from 'uuid';
import { Picker } from '@react-native-picker/picker';

type AddMenuItemScreenRouteProp = RouteProp<RootStackParamList, 'AddMenuItem'>;

interface MenuItem {
  id: string;
  name: string;
  description: string;
  course: string;
  price: number;
}

interface Params {
  addMenuItem: (item: MenuItem) => void;
}

const AddMenuItemScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<AddMenuItemScreenRouteProp>();
  const { addMenuItem } = route.params as unknown as Params;

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('Starters');
  const [price, setPrice] = useState('');

  const courses = ['Starters', 'Mains', 'Desserts'];

  // Animation for the Add Button
  const scaleValue = useRef(new Animated.Value(1)).current;

  const onPressIn = () => {
    Animated.timing(scaleValue, {
      toValue: 0.95,
      duration: 100,
      useNativeDriver: true,
      easing: Easing.out(Easing.circle),
    }).start();
  };

  const onPressOut = () => {
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
      easing: Easing.out(Easing.circle),
    }).start();
  };

  const handleAdd = () => {
    // Basic validation
    if (!name.trim() || !description.trim() || !price.trim()) {
      Alert.alert('Error', 'Please fill all fields.');
      return;
    }

    const parsedPrice = parseFloat(price);
    if (isNaN(parsedPrice) || parsedPrice < 0) {
      Alert.alert('Error', 'Please enter a valid price.');
      return;
    }

    const newItem: MenuItem = {
      id: uuidv4(),
      name: name.trim(),
      description: description.trim(),
      course,
      price: parsedPrice,
    };

    addMenuItem(newItem);
    Alert.alert('Success', 'Menu item added successfully!', [
      { text: 'OK', onPress: () => navigation.goBack() },
    ]);
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : undefined} 
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.label}>Dish Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter dish name"
        />

        <Text style={styles.label}>Description:</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={description}
          onChangeText={setDescription}
          placeholder="Enter description"
          multiline
          numberOfLines={4}
        />

        <Text style={styles.label}>Select Course:</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={course}
            onValueChange={(itemValue: React.SetStateAction<string>) => setCourse(itemValue)}
          >
            {courses.map((c) => (
              <Picker.Item label={c} value={c} key={c} />
            ))}
          </Picker>
        </View>

        <Text style={styles.label}>Price ($):</Text>
        <TextInput
          style={styles.input}
          value={price}
          onChangeText={setPrice}
          placeholder="Enter price"
          keyboardType="numeric"
        />

        <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
          <TouchableOpacity
            style={styles.addButton}
            onPress={handleAdd}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
          >
            <Text style={styles.addButtonText}>Add to Menu</Text>
          </TouchableOpacity>
        </Animated.View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flexGrow: 1, 
    padding: 20, 
    backgroundColor: '#fff' 
  },
  label: { 
    fontSize: 16, 
    marginTop: 10 
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginTop: 5,
  },
  addButton: {
    backgroundColor: '#2196F3',
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

export default AddMenuItemScreen;
