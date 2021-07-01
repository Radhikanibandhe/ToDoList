import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
        {/*Today's task*/}
        <View style ={styles.tasksWrapper}>
          <Text style ={styles.sectionTitle}>Today's Task</Text>

          <View style={styles.items}>
            {/*Tasks*/}
            <Task />
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    borderRadius:10,
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal:20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
    
  }
});
