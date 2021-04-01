import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFFFFF',
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F7F7F7',
    height: 53,
    flexDirection: 'row',
    alignItems: 'center'
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  square: {
    width: 24,
    height: 24,
    backgroundColor: 'rgba(47, 105, 255, 0.4)',
    borderRadius: 5,
    marginLeft: 15
  },
  itemText: {
    maxWidth: "80%",
    width: 174,
    height: 16,
    marginLeft: 54
  },
  circular: {
    width: 12,
    height: 12,
    borderRadius: 5,
    borderColor: '#2F69FF',
    borderWidth: 2,
    marginRight: 15,
    marginLeft: 'auto'
  },
});

export default Task;