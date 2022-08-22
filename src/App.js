import React from 'react';
import { SafeAreaView, StyleSheet} from 'react-native';
import ToDoList from './components/ToDoList'

function App () {
  return (
    <SafeAreaView style={styles.container}>
      <ToDoList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2f4f4f",
    height: "100%",
    position: "relative"
  }
})

export default App;