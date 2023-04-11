import { Button, StyleSheet, Text, View } from 'react-native';

/* 
 * Style props are supported on View and Text : they can be inline or stylesheet objects (sso's are the better option for same reason as we do with CSS stylesheet)
 * margin takes a number that's converted to the device pixel sizing
 * border does not have a shorthand like in css, you need to specify each item
 * borderColour takes a string, which can be a hex value or a word like 'red'
 */

export default function App() {
  console.log('logs');
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>Another text</Text>
      </View>
      <Text style={{margin: 16, borderWidth: 2, borderColor: 'red', padding: 16}}>Hello world</Text>
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
  dummyText: {
    margin: 16,
    borderWidth: 2,
    borderColor: 'blue',
    padding: 16
  }
});
