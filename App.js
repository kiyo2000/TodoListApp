import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/header'

export default function App() { // root component
  {/* data set*/}
  const [todo, setTodo] = useState([
    { text: 'cleaning', key: '1'},
    { text: 'grocery shopping', key: '2'},
    { text: 'learning new technology', key: '3'},
    { text: 'workout', key: '4'},
  ]);

  return (
    <View style={styles.container}>
        <Header />
      <View style={styles.content}>
          {/* for contents here*/}
        <View style={styles.list}>
            {/* todo list by Flatlist here*/}
            <FlatList
              data={todo}
              renderItem={({ item }) => (
              <Text>{item.text}</Text>
              )}// acutal attribute renders the template for each item in the list
            />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  content: {
    padding: 30,
  },
  list: {
    marginTop: 20,
  }
});
