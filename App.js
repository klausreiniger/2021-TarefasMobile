import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Button, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>O primeiro mobile app RN de Klaus</Text>
      <Button title="Já sei construir mobile app" />
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
});
