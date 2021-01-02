import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    // { name: 'shaun', key:'1' },
    // { name: 'yoshi', key:'2' },
    // { name: 'mario', key:'3' },
    // { name: 'luigi', key:'4' },
    // { name: 'peach', key:'5' },
    // { name: 'toad', key:'6' },
    // { name: 'bowser', key:'7' },
    { name: 'shaun', id:'1' },
    { name: 'yoshi', id:'2' },
    { name: 'mario', id:'3' },
    { name: 'luigi', id:'4' },
    { name: 'peach', id:'5' },
    { name: 'toad', id:'6' },
    { name: 'bowser', id:'7' },
  ]);

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.id != id)
    })
  }

  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" /> */}
      
      {/* <ScrollView>
        {people.map(item => (
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>
        ))}        
      </ScrollView> */}

      {/* 
        if use less code and flatlist better than ScrollView
      */}
      <FlatList 
        numColumns={2}

        // if you want to use id for identifier from database or api
        keyExtractor={(item)=> item.id} 

        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'pink',
    fontSize: 20,
    marginHorizontal: 10,
    marginTop: 24,
  }
});
