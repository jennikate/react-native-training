import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

// Flexbox is enabled by default on views, default setting is flexDirection: column
// you can set things like width as a % by wrapping in quotes so it is a sting

export default function App() {
  console.log('logs');
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput  style={styles.textInput} placeholder='Your course goal!' />
        <Button title="Add Goal" />
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
    padding: 8
  }
});
