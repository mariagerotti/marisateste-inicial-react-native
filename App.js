import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';

export default function App() {
  const tasks = ['Task 1', 'task 2', 'task 3', 'task 4', 'task 5', 'task 6'];
  return (
    <View style={styles.container}>
      <Header />
      <View>
      {tasks.map((task) => (
        <Text>{task}</Text>
      ))}
      
      
      
      
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
