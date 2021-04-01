import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Task from './components/Task';

function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo today</Text>
      <View style={styles.tasksSection}>
        <Task text="Work out 30 minutes"></Task>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8C82FF",
    marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 94,
    marginLeft: 20,
    color: '#FFFFFF'
  },
  tasksSection: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
});

export default App;