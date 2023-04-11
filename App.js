import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

// Flexbox is enabled by default on views, default setting is flexDirection: column
// you can set things like width as a % by wrapping in quotes so it is a sting
// Button does not have a style prop, it doesn't support styling!

export default function App() {
  console.log('logs');
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!' />
        <Button title="Add Goal" />
      </View>
      <View style={styles.goalsContainer}>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1, // needs to take up entire height of app so that the inner containers will take the portion. This has no siblings so 1 means 100%
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1, // take up 1 portion so (1/6 as its sibling is 3), flex number will add up every sibling's flex number and then portion it up accordingly
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5 // take up 3 portions (so 5/6)
  }
});
