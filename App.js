import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  console.log('logs');
  return (
    <View style={styles.container}>
      <View>
        <Text>Another text</Text>
      </View>
      <Text>Hello world</Text>
      <Button title="Tap me" />
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
