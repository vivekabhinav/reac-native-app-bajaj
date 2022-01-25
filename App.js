import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [name,setName] = useState('Abhinav')
  const [person, setPerson] = useState({name: 'vivek', age: 21})

  const clickHandler = () => {
    setName('tripathi')
  }

  return (
    <View style={styles.container}>
      <Text>My name is {name}</Text>
      <Text>His name is {person.name} and his age is  {person.age}</Text>
      <TextInput style={styles.input}
      placeholder = 'enter name'/>
      <Button title = 'update state'  onPress = {clickHandler}/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  boxStyle : {
    width: 50, height: 50, backgroundColor: 'powderblue'
  },
  input: {
    border: '1px solid',
    borderColor: 'blue',
    padding: 8,
  }
});