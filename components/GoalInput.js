import { useState } from 'react';
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View
} from 'react-native';

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText); // calling this manually here we can make sure we forward the enteredGoalText
    setEnteredGoalText(''); // clear input on add button press
  };

  return (
    <Modal
      visible={props.visible}
      animationType='slide'
    >
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/goal.png')} style={styles.image} />
        <TextInput
          style={styles.textInput}
          placeholder='Your course goal!'
          onChangeText={goalInputHandler} // execute only on text change, passes value automatically
          value={enteredGoalText} // whenever enteredGoalText changes (e.g when we reset it) it updates
        />
        <View style={styles.buttonContainer}>
        <View style={styles.button}>
            <Button
              color="#f31282"
              title="Cancel"
              onPress={props.onCancel}
            />
          </View>
          <View style={styles.button}>
            <Button
              color="#b180f0"
              title="Add Goal"
              onPress={addGoalHandler} // call a local function not the function being passed down
            />
          </View>
        </View>
      </View>
    </Modal>
  )
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1, // take up 1 portion so (1/6 as its sibling is 5), flex number will add up every sibling's flex number and then portion it up accordingly
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b'
  },
  image: {
    width: 64,
    height: 64,
    margin: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    borderRadius: 6,
    width: '100%',
    padding: 16,
    backgroundColor: '#e4d0ff',
    color: '#120438'
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16
  },
  button: {
    width: 100,
    marginHorizontal: 8
  }
});