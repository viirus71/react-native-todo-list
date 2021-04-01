import React, {useEffect, useState} from 'react';
import { StyleSheet, KeyboardAvoidingView, TouchableOpacity, Text, View, StatusBar, TextInput } from 'react-native';
import Task from './components/Task';

function App() {
  const [addTask, setAddTask] = useState([]);
  const onPress = () => console.log(addTask);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.title}>Todo today</Text>
      <View style={styles.tasksSection}>
        <Task text="Work out 30 minutes"></Task>
      </View>
      <View style={styles.viewBottom}>
      <TextInput style={styles.addTaskInput}
        onChangeText={(value) => {
          setAddTask(value)
        }}></TextInput>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
      >
      </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
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
  addTaskInput: {
    width: 246,
    height: 45,
    backgroundColor: '#FFFFFF',

    borderRadius: 60,
    marginLeft: 20
  },
  button: {
    width: 60,
    height: 60,
    marginLeft: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 52
  },
  viewBottom: {
    marginTop: 470,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  }
});

export default App;